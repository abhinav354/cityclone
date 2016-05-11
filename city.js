
/*jshint -W099*/
/* global _*/

ctx.font = '14px Arial';

var TICKS_PER_SECOND = 10;

var KEY_EMOTIONS = ['anger', 'sadness', 'joy', 'fear', 'disgust'];

var EMOTION_GRAIN = 20;
var MAX_KEY_EMOTION = (5 * EMOTION_GRAIN) - 1;

var PATH_COST = {will: -5};

var emotionTable = {
    anger: ['calm', 'peeved', 'angry', 'furious', 'enraged'],
    sadness: ['calm', 'downcast', 'unhappy', 'dismal', 'depressed'],
    joy: ['calm', 'upbeat', 'happy', 'overjoyed', 'ecstatic'],
    fear: ['calm', 'fear', 'fear', 'fear', 'terrified'],
    disgust: ['calm', 'yuck', 'yuck', 'yuck', 'nauseated']
};

var BOOST_GENERATING_CURRENCY = "understanding";

var getEntityKey = function(entity){ return entity.identityComponent.key; };

var emotionTags = function(player){
    var currencyTags = _.map(KEY_EMOTIONS, function(emotion){
        var playerEmotion = player.calculatedCurrencyComponent.currencies[emotion];
        playerEmotion = (playerEmotion === undefined) ? 0 : playerEmotion;
        return emotionTable[emotion][Math.floor(playerEmotion / EMOTION_GRAIN)];
    });
    var focusGroups = [
        [25, 'bored'],
        [50, 'relaxed'],
        [75, 'active'],
        [90, 'concentrating'],
        [100, 'flow'],
        [125, 'distracted'],
        [200, 'overwhelmed']
    ];
    
    var focusPercent = player.focusComponent.focusUsed * 100 / player.focusComponent.focusMax;
    var focusTag = 'broken';
    
    for (var i = 0; i < focusGroups.length; i++){
        var focusGroup = focusGroups[i];
        if (focusPercent < focusGroup[0]){
            focusTag = focusGroup[1];
            break;
        }
    }
    
    return currencyTags.concat([focusTag, 'alive']);
};

var tickComp = function(comp, ticks){
    ticks = (ticks === undefined) ? 1 : ticks;
    comp.ticks -= ticks;
    if (comp.ticks <= 0){
        comp.ticks = comp.impulseTicks;
        return true;
    }
    return false;
};

var emotionSourceSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.emotionSourceComponent &&
                entity.emotionSourceComponent.emotions.length > 0;
        })
        .each(function(entity){
            var sourceComp = entity.emotionSourceComponent;
            if (!sourceComp.shouldTick(entity, world)){
                return;
            }

            var focusPercent = 100 - (world.player.focusComponent.focusUsed * 100 / world.player.focusComponent.focusMax);
            var focusTicks = Math.floor(focusPercent / 25);
            
            if (tickComp(sourceComp, focusTicks)){
                var emotionToMake = sourceComp.emotions[sourceComp.spawnCount];

                var spawnSourceEntity = world.entityForKey(sourceComp.spawnSourceKey);
                
                if (!spawnSourceEntity){
                    return;
                }

                if (!spawnSourceEntity.positionComponent){
                    console.log(entity);
                    console.log(spawnSourceEntity);
                }
                                
                var args = {
                    x: spawnSourceEntity.positionComponent.x,
                    y: spawnSourceEntity.positionComponent.y,
                    emotion: emotionToMake,
                    name: emotionToMake,
                    source: entity,
                    traits: entity.emotionSourceComponent.traits
                };

                var creep = makeEcs(PARAMETERS.creep, args);
                world.addEntity(creep);

                sourceComp.spawnCount += 1;
                if (sourceComp.spawnCount >= sourceComp.emotions.length){
                    sourceComp.spawnComplete(entity, world);
                }
            }
        });
    return true;
};

var rendererSystem = function(world, entities, ui){
    var currentRenderState = world.entityForKey('gameStateEntity').rendererSystemComponent.currentRenderState;
    var renderers = _.map(_.range(20), function(){ return []; });
    _.each(entities, function(entity){
        var rect = undefined;
        if (entity.positionComponent){
            if (entity.positionComponent.x === undefined){
                console.log(entity);
            }
            else{
                var cell = world.hexMap.cellForPosComp(entity.positionComponent);
                rect = cell.rect;
            }
        }
        else if (entity.absolutePositionComponent){
            rect = [entity.absolutePositionComponent.x, entity.absolutePositionComponent.y, 0, 0];
        }
        
        _.chain(entity.rendererComponents)
            .filter(function(renderer){
                return renderer.renderState == currentRenderState;
            })
            .each(function(renderer){
                renderers[renderer.priority].push({
                    renderer: renderer, 
                    rect: rect, 
                    entity: entity});
            });
    });
    _.each(renderers, function(renderList){
        var rectCount = {};
        _.each(renderList, function(group, i){
            var rectHash = _.reduce(group.rect, addFunction, 0);
            if (rectCount[rectHash] === undefined){
                rectCount[rectHash] = 0;
            }
            rectCount[rectHash] += 1;
            group.renderer.render(group.rect, group.entity, ui, rectCount[rectHash]);
        });
    });
};

var velocitySystem = function(world, entities){
    _.each(entities, function(entity){
        var velComp = entity.velocityComponent;
        var posComp = entity.positionComponent;
        if (!velComp || !posComp){
            return;
        }
        if (tickComp(velComp)){
            var newPos = world.hexMap.posOffset(posComp.x, posComp.y, velComp.dir);
            posComp.x = newPos[0];
            posComp.y = newPos[1];
        }
    });
};

var pathMoveSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){ return entity.pathVelocityComponent &&
                                  entity.pathVelocityComponent.path; })
        .each(function(movingEntity){
            movingEntity.pathVelocityComponent.ticks -= movingEntity.pathVelocityComponent.velocity;
            if (movingEntity.pathVelocityComponent.ticks <= 0){
                var path = movingEntity.pathVelocityComponent.path;
                if (movingEntity.pathVelocityComponent.forward){
                    movingEntity.positionComponent.setPos(path.pathMoveComponent.endPosition);
                }
                else{
                    movingEntity.positionComponent.setPos(path.pathMoveComponent.startPosition);
                }

                movingEntity.pathVelocityComponent.pathsCrossed += 1;
                
                if (movingEntity.damageableComponent && 
                    (Math.random() < PARAMETERS.pathEmotionChance)){
                    var emotion = movingEntity.damageableComponent.emotion;
                    var emotionsToAdd = {};
                    emotionsToAdd[emotion] = 2;
                    var name = 'Generated path emotion: ' + emotion;
                    var emotionSource = makeEcs(PARAMETERS.emotionSource, {
                        key: 'genPath' + path.identityComponent.key + '_' + emotion,
                        name: 'Generated path emotion: ' + emotion,
                        spawnSourceKey: path.identityComponent.key,
                        emotionsToAdd: emotionsToAdd
                    });
                    world.addEntity(emotionSource);
                    world.makeClickText(name, path.positionComponent.x, path.positionComponent.y);
                }

                movingEntity.pathVelocityComponent.lastPath = path;
                movingEntity.pathVelocityComponent.path = false;
            }
        });

    var movableEntities = _.filter(entities, function(entity){
        return entity.pathVelocityComponent && !entity.pathVelocityComponent.path;
    });
        

    var pathEntities = _.filter(entities, function(entity){
        return entity.pathMoveComponent;
    });


    _.each(movableEntities, function(movableEntity){
        var pathEntity = _.chain(pathEntities)
            .filter(function(pathEntity){
                return pathEntity !== movableEntity.pathVelocityComponent.lastPath &&
                    (movableEntity.positionComponent.isPos(pathEntity.pathMoveComponent.startPosition) ||
                     movableEntity.positionComponent.isPos(pathEntity.pathMoveComponent.endPosition));
            })
            .sample()
            .value();
        if (pathEntity){
            movableEntity.pathVelocityComponent.path = pathEntity;
            var forward = movableEntity.positionComponent.isPos(pathEntity.pathMoveComponent.startPosition);
            movableEntity.pathVelocityComponent.forward = forward;
            movableEntity.pathVelocityComponent.ticks = pathEntity.pathMoveComponent.ticks;
            if (pathEntity.healthModifyComponent){
                pathEntity.healthModifyComponent.activated = true;
            }
        }
        else{
            movableEntity.pathVelocityComponent.forward = !movableEntity.pathVelocityComponent.forward;
            movableEntity.pathVelocityComponent.lastPath = false;

            if (movableEntity.damageableComponent && 
                movableEntity.pathVelocityComponent.forward){
                var creep = makeEcs(PARAMETERS.creep, {
                    x: movableEntity.positionComponent.x,
                    y: movableEntity.positionComponent.y,
                    emotion: movableEntity.damageableComponent.emotion,
                    name: movableEntity.identityComponent.name,
                    traits: movableEntity.damageableComponent.traits,
                    source: movableEntity,
                    health: movableEntity.healthComponent.health
                });
                world.addEntity(creep);
            }
        }
    });

    return true;
};

var damageSystem = function(world, entities){
    var relevantEntities = _.filter(entities, function(entity){
        return entity.damageComponent && entity.sentinelComponent.active;
    });

    var entityCount = {};

    _.each(relevantEntities, function(entity){
        incrementDict(entityCount, entity.identityComponent.key);
    });
    
    _.each(relevantEntities, function(entity){
        var damageComp = entity.damageComponent;
        if (tickComp(damageComp)){
            var neighbors = world.hexMap.neighbors(entity.positionComponent.x, entity.positionComponent.y);
            var hitPos = neighbors.concat([entity.positionComponent.x, entity.positionComponent.y]);
            _.chain(entities)
                .filter(function(targetEntity){
                    var entityCheck = (targetEntity !== entity &&
                                       targetEntity.identityComponent !== undefined &&
                                       targetEntity.positionComponent !== undefined &&
                                       targetEntity.healthComponent !== undefined &&
                                       targetEntity.damageableComponent !== undefined);
                    if (!entityCheck){
                        return false;
                    }
                    var targetPos = [targetEntity.positionComponent.x, targetEntity.positionComponent.y];
                    return _.any(hitPos, function(neighbor){ return _.isEqual(neighbor, targetPos); });
                })
                .first(damageComp.targetCount)
                .each(function(target){
                    var sourceEntity = world.entityForKey(entity.sentinelComponent.towerSourceKey);
                    var traitEntity = world.entityForKey(sourceEntity.towerSourceComponent.sourceTrait);

                    var damage = calculateDamage(damageComp, target, entityCount[entity.identityComponent.key]);
                    damage *= target.healthComponent.damageFactor;

                    target.healthComponent.health -= damage;

                    _.each(damageComp.triggerComponents, function(triggerFn){
                        triggerFn(damageComp, entity, target, world);
                    });
                    _.each(target.rendererComponents, function(renderComponent){
                        if (renderComponent.wasHit !== undefined){
                            renderComponent.wasHit = true;
                        }
                    });

                    _.each(target.rendererComponents, function(renderer){
                        if (renderer.activated !== undefined){
                            renderer.activated = 1;
                        }
                    });

                    var baseDamage = damageComp.damage + damageComp.bonusDamagePerTower * entityCount[entity.identityComponent.key];
                    
                    if (baseDamage > 0){
                        var bullet = makeEcs(PARAMETERS.bullet, {
                            bulletSourcePos: entity.positionComponent,
                            bulletEndPos: target.positionComponent,
                            damage: baseDamage,
                            bonus: damage / baseDamage
                        });
                        world.addEntity(bullet);
                    }

                    _.each(entity.rendererComponents, function(renderer){
                        if (renderer.activated !== undefined){
                            renderer.activated = 1;
                        }
                    });
                });
            
            if (entity.healthModifyComponent){
                entity.healthModifyComponent.activated = true;
            }
        }
    });
    return true;
};
     
var calculateDamage = function(damageComp, targetEntity, entityCount){
    var relevantTraits = _.filter(targetEntity.damageableComponent.getAll(), function(key){ return damageComp.damageMultipliers[key] !== undefined; });
    
    if (relevantTraits.length === 0){
        return 0;
    }

    var multiplier = _.chain(relevantTraits)
        .map(function(key){ return  damageComp.damageMultipliers[key]; })
        .reduce(addFunction, 0)
        .value();

    return (damageComp.damage + entityCount * damageComp.bonusDamagePerTower) * multiplier;
};

var daySystem = function(world, entities){
    var keepGoing = true;
    var dayEnded = false;
    _.chain(entities)
        .filter(function(entity){ return entity.dayCounterComponent; })
        .each(function(entity){
            if (entity.dayCounterComponent.ticks == entity.dayCounterComponent.impulseTicks){
                startDay(world, entities);
            }

            var dayPart = entity.dayCounterComponent.getPartOfDay();
            entity.dayCounterComponent.ticks -= 1;
            var newPart = entity.dayCounterComponent.getPartOfDay();
            
            if (entity.dayCounterComponent.ticks <= 0){
                endDay(world, entities);
                entity.healthComponent.health = 0;
                keepGoing = false;
                dayEnded = false;
            }
            
            if (newPart != dayPart || (entity.dayCounterComponent.ticks == entity.dayCounterComponent.impulseTicks - 1)){
                _.chain(entities)
                    .filter(function(entity){ return entity.dayResponseComponent !== undefined &&
                                              entity.dayResponseComponent.dayChange !== undefined; })
                    .each(function(entity){
                        entity.dayResponseComponent.dayChange(entity, world, newPart);
                    });
            }
        });

    if (dayEnded){
        _.chain(entities)
            .filter(function(entity){ return entity.healthModifyComponent; })
            .each(function(entity){
                var dHealth = entity.healthComponent += entity.healthModifyComponent.healthModifyAmount();
                entity.healthModifyComponent.activated = false;
            });
    }

    return keepGoing;
};

var endDay = function(world, entities){
    _.chain(entities)
        .filter(function(entity){ return entity.dayResponseComponent !== undefined && 
                                  entity.dayResponseComponent.dayEnd !== undefined; })
        .each(function(entity){
            entity.dayResponseComponent.dayEnd(entity, world);
        });
};

var startDay = function(world, entities){
    _.chain(entities)
        .filter(function(entity){ return entity.dayResponseComponent && entity.dayResponseComponent.dayStart; })
        .each(function(entity){
            entity.dayResponseComponent.dayStart(entity, world);
        });
};

var mapSpawnSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.mapSpawnComponent &&
                Math.random() < entity.mapSpawnComponent.mapSpawnChance(entity, world);
        })
        .each(function(entity){
            var pos = entity.mapSpawnComponent.mapSpawnPos(entity, world);
            if (pos){
                var key = _.isFunction(entity.mapSpawnComponent.mapSpawnKey) ?
                        entity.mapSpawnComponent.mapSpawnKey(entity, world) :
                        entity.mapSpawnComponent.mapSpawnKey;
                if (key){
                    var newEntity = makeEcs(key, {
                        x: pos[0],
                        y: pos[1],
                        source: entity
                    });
                    world.addEntity(newEntity);
                    entity.mapSpawnComponent.mapPostSpawn();
                }
            }
        });
    return true;
};

var deriveEmotionTickModifiers = function(entities, tags){
    var emotionTickModifiers = {};

    _.chain(entities)
        .filter(function(entity){
            return entity.emotionTickModifyComponent;
        })
        .pluck('emotionTickModifyComponent')
        .each(function(emotionTickModifyComponent){
            if (_.contains(tags, emotionTickModifyComponent.emotionState)){
                if (emotionTickModifiers[emotionTickModifyComponent.towerTrait] === undefined){
                    emotionTickModifiers[emotionTickModifyComponent.towerTrait] = 1;
                }
                emotionTickModifiers[emotionTickModifyComponent.towerTrait] *= emotionTickModifyComponent.factor / 100;
            }
        });
    
    return emotionTickModifiers;
};

var updateCount = function(count, currency){
    _.each(count, function(val, key){
        if (currency[key] !== undefined){
            count[key] -= currency[key];
        }
    });
};

var calculateBoostFactor = function(world){
    var boostFactor = world.player.calculatedCurrencyComponent.currencies[BOOST_GENERATING_CURRENCY];
    return boostFactor ? (1 + (boostFactor / 100)) : 1;
};

var tickEmotionSystem = function(world, entities){
    var tags = emotionTags(world.player);

    var currencyBoosts = _.filter(entities, function(entity){ return entity.currencyBoostComponent; });

    var createdEntities = [];
    
    var emotionTickModifiers = deriveEmotionTickModifiers(entities, tags);

    var currencyGoals = _.filter(entities, function(entity){
            return entity.goalTrackComponent &&
                entity.goalTrackComponent.currencyGoal;
        });
    
    var storeCurrency = function(currency, entity){
        var currencyStoreEntity = _.chain(entities.concat(createdEntities))
            .filter(function(currencyStoreEntity){ 
                return currencyStoreEntity.currencyStoreComponent &&
                    currencyStoreEntity.identityComponent.name == entity.identityComponent.name;
            })
            .first()
            .value();
        
        if (currencyStoreEntity === undefined){
            currencyStoreEntity = makeEcs(PARAMETERS.dailyCurrencyStore, {
                name: entity.identityComponent.name
            }); 
            world.addEntity(currencyStoreEntity);
            createdEntities.push(currencyStoreEntity);
        }
        
        currencyStoreEntity.currencyStoreComponent.storeCurrency(currency, world.player);
    };

    var itemActions = _.filter(world.entities, function(entity){
        return entity.itemActionComponent && entity.itemActionComponent.slottedItem;
    });

    _.chain(entities)
        .filter(function(entity){
            return entity.tickEmotionComponent && entity.sentinelComponent.active;
        })
        .each(function(entity){
            var key = entity.identityComponent.key;
            var currency = _.clone(entity.tickEmotionComponent.currency);
            
            if (entity.tickEmotionComponent.towerSourceKey === false){
                storeCurrency(currency, entity);
                _.each(itemActions, function(itemAction){
                    updateCount(itemAction.goalTrackComponent.currency, currency);
                });
            }
            else{
                var sourceEntity = world.entityForKey(entity.tickEmotionComponent.towerSourceKey);
                var traitEntity = world.entityForKey(sourceEntity.towerSourceComponent.sourceTrait);
                var itemAction = sourceEntity.slotComponent.currentAction;

                if (!itemAction){
                    return;
                }
                
                if (!entity.tickEmotionComponent.checkTickContinue(world, entity)){
                    sourceEntity.slotComponent.resetSlotComponent();
                    itemAction.itemActionComponent.slottedItem = undefined;
                    return;
                }

                _.chain(currencyBoosts)
                    .filter(function(currencyBoost){
                        return currencyBoost.boostSlotComponent.checkEntityForBoost(sourceEntity);
                    })
                    .each(function(currencyBoost){
                        addDict(currency, currencyBoost.currencyBoost);
                    });
                
                
                addDict(currency, itemAction.towerEffect);
                
                var factor = _.chain(entity.tickEmotionComponent.traits.concat([entity.identityComponent.name]))
                    .filter(function(trait){ return emotionTickModifiers[trait] !== undefined; })
                    .map(function(trait){ return emotionTickModifiers[trait]; })
                    .reduce(function(memo, val){ return memo * val; }, 1)
                    .value();

                var level = traitEntity.experienceComponent.getXpLevel(traitEntity);

                _.each(_.keys(currency), function(key){
                    currency[key] *= factor + level;
                });
                
                storeCurrency(currency, entity);

                
                updateCount(itemAction.goalTrackComponent.currency, currency);
                
                traitEntity.healthComponent.health += 1;
            }
            
            _.each(currencyGoals, function(currencyGoal){
                updateCount(currencyGoal.goalTrackComponent.currency, currency);
            });
        });
    return true;
};

var notificationSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.notifyComponent;
        })
        .each(function(entity){
            var notifyEntities = entity.notifyComponent.notifyEntityKey ?
                world.entitiesForKey(entity.notifyComponent.notifyEntityKey) :
                entities;

            _.chain(notifyEntities)
                .filter(function(notifyEntity){
                    return notifyEntity.notificationComponents && notifyEntity.notificationComponents.length > 0;
                })
                .each(function(notifyEntity){
                    _.each(notifyEntity.notificationComponents, function(notificationComponent){
                        var fn = notificationComponent.notificationFunctions[entity.notifyComponent.notificationKey];
                        if (fn !== undefined){
                            fn(notifyEntity, entity.notifyComponent.notificationArgs, world);
                        }
                    });
                });
            entity.healthComponent.health = 0;
        });
    return true;
};

var replaceWorldEntities = function(world, entities, sourceKey, resultKey){
    _.chain(entities)
        .filter(function(entity){
            return entity.identityComponent && entity.identityComponent.key == sourceKey;
        })
        .each(function(entity){
            entity.healthComponent.health = 0;
            var args = {};
            if (entity.positionComponent){
                args.x = entity.positionComponent.x;
                args.y = entity.positionComponent.y;
            }
            world.addEntity(makeEcs(resultKey, args));
        });
};

var emotionStateSystem = function(world, entities){
    var lastTags = world.entityForKey('gameStateEntity').emotionStateSystemComponent.lastTags;
    var currentTags = emotionTags(world.player);
    var newTags = _.difference(currentTags, lastTags);
    var removedTags = _.difference(lastTags, currentTags);
    lastTags = currentTags;

    if (!newTags.length && !removedTags.length){
        return;
    }

    _.chain(entities)
        .filter(function(entity){ return entity.emotionStateComponent; })
        .each(function(entity){
            if (_.contains(newTags, entity.emotionStateComponent.checkTag)){
                replaceWorldEntities(world, entities, entity.emotionStateComponent.source, entity.emotionStateComponent.result);
            }
            else if (_.contains(removedTags, entity.emotionStateComponent.checkTag)){
                replaceWorldEntities(world, entities, entity.emotionStateComponent.result, entity.emotionStateComponent.source);
            }
        });
};

var maintenanceSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.itemComponent;
        })
        .each(function(entity){
            entity.itemComponent.actions = _.filter(entity.itemComponent.actions, function(action){
                return action.healthComponent.health > 0;
            });
        });

    _.chain(entities)
        .filter(function(entity){
            return entity.personalityComponent;
        })
        .each(function(entity){
            entity.personalityComponent.heldOpinions = _.filter(entity.personalityComponent.heldOpinions, function(opinion){
                return opinion.healthComponent.health > 0;
            });
        });

    _.chain(entities)
        .filter(function(entity){
            return entity.experienceComponent;
        })
        .each(function(entity){
            if (entity.experienceComponent.getXpLevel(entity) > entity.experienceComponent.currentLevel){
                entity.experienceComponent.currentLevel += 1;
                entity.mapSpawnComponent.shouldExpand = true;
            }
        });

    _.chain(entities)
        .filter(function(entity){
            return entity.traitStatusComponent;
        })
        .each(function(entity){
            //Determines if the trait is active
            entity.traitStatusComponent.traitActive = _.chain(entities)
                .filter(function(sourceEntity){
                    return sourceEntity.towerSourceComponent &&
                        sourceEntity.towerSourceComponent.sourceTrait == entity.identityComponent.key;
                })
                .any(function(sourceEntity){
                    return world.isTowerSourceActive(sourceEntity.identityComponent.key);
                })
                .value();

            //Makes any item actions that are not alive
            var sources = _.chain(world.entities)
                    .filter(function(buttonEntity){
                        return buttonEntity.buttonControlComponent && 
                            _.contains(buttonEntity.identityComponent.tags, entity.identityComponent.key);
                    })
                    .map(function(entity){
                        return world.entityForKey(entity.buttonControlComponent.sourceKey);
                    })
                    .value();

            _.each(sources, function(source){
                _.each(source.towerSourceComponent.towerActions, function(actionKey){
                    var actionEntity = world.entityForKey(mangleIdentityWithTrait(actionKey, entity.identityComponent.key));
                    if (!actionEntity){
                        actionEntity = makeEcs(actionKey, {
                            traitKey: entity.identityComponent.key
                        });
                        world.addEntity(actionEntity);
                    }
                });
            });
        });

    _.chain(entities)
        .filter(function(entity){
            return entity.activatableComponent && entity.activatableComponent.activated;
        })
        .each(function(entity){
            entity.activatableComponent.activated = entity.activatableComponent.canActivate();
        });

    _.chain(entities)
        .filter(function(entity){
            return entity.personAquariumPieceComponent;
        })
        .each(function(entity){
            var person = world.entityForKey(entity.personAquariumPieceComponent.sourceTrait);
            entity.personAquariumPieceComponent.pieceDiscovered = _.contains(person.personalityComponent.knownPersonalityTraits,
                                                                             entity.personAquariumPieceComponent.personalityTrait);
        });
    
    var currencies = world.player.calculatedCurrencyComponent.currencies;
    _.each(csvIdentifiers.emotionPiece, function(emotionPieceKey){
        var entity = world.entityForKey(emotionPieceKey);
        if (!entity){
            var emotionToCheck = allArgs[emotionPieceKey].emotion;
            if (currencies[emotionToCheck]){
                entity = makeEcs(emotionPieceKey);
                world.addEntity(entity);
            }
        }

        if (entity){
            entity.healthComponent.health = currencies[entity.emotionPieceComponent.emotion] ?
                currencies[entity.emotionPieceComponent.emotion] :
                0;
        }
    });
};

var sourceSlottedSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.slotComponent && entity.slotComponent.slottedItem;
        })
        .each(function(entity){
            if (entity.slotComponent.slottedItem.healthComponent.health <= 0 || 
                entity.slotComponent.currentAction.healthComponent.health <= 0){
                var itemAction = entity.slotComponent.currentAction;
                
                if (itemAction.healthComponent.health > 0){
                    itemAction.healthComponent.health = 0;
                }
                
                entity.slotComponent.resetSlotComponent();
                itemAction.itemActionComponent.slottedItem = undefined;
            }
        });
};

var focusSystem = function(world, entities){
    world.player.focusComponent.focusUsed = _.chain(entities)
        .filter(function(entity){
            return entity.focusCostComponent && entity.focusCostComponent.focusActive(entity);
        })
        .map(function(entity){ return entity.focusCostComponent.focusCost; })
        .reduce(addFunction, 0)
        .value();

    return true;
};

var wishMakeSystem = function(world, entities){
    var wishCount = _.filter(entities, function(entity){
        return entity.squashComponent;
    }).length;

    if (Math.random() < 0.15 * (4 - wishCount)){
        var entity = _.chain(entities)
            .filter(function(entity){
                return entity.wishMakingComponent && entity.wishMakingComponent.canMakeWish(entity);
            })
            .sample()
            .value();

        if (entity){
            var wish = entity.wishMakingComponent.makeWish(entity);
            if (wish){
                world.addEntity(wish);
                if (entity.positionComponent){
                    world.makeClickText(wish.identityComponent.name,
                                        entity.positionComponent.x,
                                        entity.positionComponent.y);
                }
            }
        }
    }
    
    return true;
};

var executeSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.executeComponent;
        })
        .each(function(entity){
            if (tickComp(entity.executeComponent)){
                entity.executeComponent.executable.execute(entity, world);
            }
        });
    return true;
};

var goalCheckSystem = function(world, entities){
    var player = world.player;
    _.chain(entities)
        .filter(function(entity){
            return entity.goalTrackComponent && 
                entity.goalTrackComponent.checkCompleted(player, entity, world);
        })
        .each(function(entity){
            entity.healthComponent.health = 0;

            var success = true;

            var successChance = entity.goalTrackComponent.successChance;
            if (successChance){
                var chance = _.reduce(emotionTags(player), function(memo, tag){
                    return memo + (successChance[tag] ? successChance[tag] : 0);
                }, 0);
                chance += _.reduce(player.calculatedCurrencyComponent.currencies, function(memo, val, key){
                    return memo + (successChance[key] ? successChance[key] * val : 0);
                }, 0);
                success = (100 * Math.random()) < chance;
            }
            
            if (success){
                _.each(entity.goalTrackComponent.successExecutables, function(exec){
                    exec.execute(entity, world);
                });
            }

            if (entity.itemActionComponent){
                _.chain(entities)
                    .filter(function(sourceEntity){
                        return sourceEntity.slotComponent &&
                            sourceEntity.slotComponent.currentAction === entity;
                    })
                    .each(function(sourceEntity){
                        var trait = world.entityForKey(sourceEntity.towerSourceComponent.sourceTrait);
                        trait.healthComponent.health += entity.itemActionComponent.xp;
                    });
            }
        });
    return true;
};

var tickSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.tickComponent;
        })
        .each(function(entity){
            entity.tickComponent.tick(entity, world);
        });
    return true;
};

var timedDeathSystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){
            return entity.timedDeathComponent;
        })
        .each(function(entity){
            entity.timedDeathComponent.timeToDeath -= 1;
            if (entity.timedDeathComponent.timeToDeath <= 0){
                entity.healthComponent.health = 0;
            }
        });
    return true;
};

var currencyCalculateSystem = function(world, entities){
    var player = world.player;
    var tags = emotionTags(world.player);
    var startCurrency = player.calculatedCurrencyComponent.currencies;
    player.calculatedCurrencyComponent.currencies = {};

    var factor = _.reduce(player.calculatedCurrencyComponent.factors, function(memo, val, key){
        return memo * (_.contains(tags, key) ? val : 1);
    }, 1);
    
    _.chain(entities)
        .filter(function(entity){
            return entity.currencyStoreComponent;
        })
        .each(function(entity){
            var currency = entity.currencyStoreComponent.currencies;
            
            if (factor != 1){
                currency = _.clone(currency);
                _.each(KEY_EMOTIONS, function(emotion){
                    if (currency[emotion]){
                        currency[emotion] *= factor;
                    }
                });
            }

            player.calculatedCurrencyComponent.storeCurrency(currency);
        });

    _.each(KEY_EMOTIONS, function(key){
        if (player.calculatedCurrencyComponent.currencies[key] !== undefined){
            player.calculatedCurrencyComponent.currencies[key] = min(MAX_KEY_EMOTION, 
                                                                     max(player.calculatedCurrencyComponent.currencies[key], 0));
        }
    });

    var currencyChange = {};
    
    var allKeys = _.union(_.keys(startCurrency), _.keys(player.calculatedCurrencyComponent.currencies));

    _.each(allKeys, function(key){
        var newVal = player.calculatedCurrencyComponent.currencies[key];
        newVal = newVal ? newVal : 0;
        var oldVal = startCurrency[key];
        oldVal = oldVal ? oldVal : 0;
        currencyChange[key] = newVal - oldVal;
    });
    
    if (_.any(currencyChange, function(val, key){ return val !== 0; })){
        world.addEntity(makeEcs(PARAMETERS.notification, {
            notificationKey: 'currencyChange',
            notificationArgs: {
                playerCurrencies: player.calculatedCurrencyComponent.currencies,
                currencyChange: currencyChange
            }
        }));
    }

    return true;
};

var deathSystem = function(world, entities){
    var killedEntities = [];

    var addedEntities = _.chain(world.entitiesToAdd)
            .filter(function(entity){
                return entity.identityComponent;
            })
            .map(function(entity){
                return entity.identityComponent.key;
            })
            .value();

    world.entities = _.filter(world.entities.concat(world.entitiesToAdd), function(entity){
        if (entity.healthComponent === undefined || entity.healthComponent.health > 0){
            return true;
        }
        else{
            if (entity.identityComponent){
                killedEntities.push(entity);
            }

            if (entity.isaacEntityComponent){
                entity.isaacEntityComponent.endLifecycle();
            }

            return false;
        }
    });
    world.entitiesToAdd = [];

    _.each(killedEntities, function(entity){
        _.each(entity.killExecutables, function(exec){
            exec.execute(entity, world);
        });
    });

    if (addedEntities){
        world.addEntity(makeEcs(PARAMETERS.notification, {
            notificationKey: 'addedEntities',
            notificationArgs: {
                addedEntities: addedEntities
            }
        }));
    }

    if (killedEntities.length > 0){
        world.addEntity(makeEcs(PARAMETERS.notification, {
            notificationKey: 'killedEntities',
            notificationArgs: {
                killedEntities: _.map(killedEntities, function(entity){ return entity.identityComponent.key; })
            }
        }));
    }
};

var makeTraitForEmotion = function(world, emotion){
    var trait = _.chain(world.entities)
            .filter(function(entity){
                return entity.traitMakerComponent && 
                    entity.traitMakerComponent.traitMakerEmotion === emotion;
            })
            .map(function(entity){
                return entity.traitMakerComponent.traitsToMake;
            })
            .flatten()
            .filter(function(traitKey){
                return world.entityForKey(traitKey) === undefined;
            })
            .sample()
            .value();
    if (trait){
        var pos = world.randomOpenPosition();
        world.addEntity(makeEcs(trait, {
            x: pos[0],
            y: pos[1]
        }));
    }
};

var traitMakeSystem = function(world, entities){
    var traitMarkingComponent = world.player.traitMarkingComponent;
    _.each(KEY_EMOTIONS, function(emotionKey){
        traitMarkingComponent.storedEmotion[emotionKey] += world.player.calculatedCurrencyComponent[emotionKey];
        if (traitMarkingComponent.storedEmotion[emotionKey] > traitMarkingComponent.emotionCountToReset){
            traitMarkingComponent.storedEmotion[emotionKey] -= traitMarkingComponent.emotionCountToReset;
            makeTraitForEmotion(world, emotionKey);
        }
    });
    return true;
};

var TickSystemWrapper = function(systems){
    this.systems = systems;
    this.ticks = 0;
    this.running = false;
};

TickSystemWrapper.prototype.runSystems = function(world, entities){
    if (!this.running){
        return;
    }
    var that = this;
    _.each(this.systems[this.ticks], function(system){
        that.running = that.running && system(world, entities);
    });
    this.ticks += 1;
    this.ticks = this.ticks % 10;
};

var sentinelSystem = function(world, entities){
    var tags = emotionTags(world.player);
    _.chain(entities)
        .filter(function(entity){ return entity.sentinelComponent; })
        .each(function(entity){
            entity.sentinelComponent.lastActive = entity.sentinelComponent.active;
            entity.sentinelComponent.active = entity.sentinelComponent.sentinel(entity, world);
        });
};

var activeEntitySystem = function(world, entities){
    _.chain(entities)
        .filter(function(entity){ return entity.activeEntityComponent &&
                                  entity.sentinelComponent.active !== entity.sentinelComponent.lastActive; })
        .each(function(entity){
            if (entity.sentinelComponent.active){
                entity.activeEntityComponent.startLifecycle(entity, world);
            }
            else{
                entity.activeEntityComponent.endLifecycle();
            }
        });
};

var emotionEntityMakerSystem = function(world, entities){
    var tags = emotionTags(world.player);
    _.chain(entities)
        .filter(function(entity){
            return entity.emotionEntityMakerComponent && 
                _.contains(emotionTags, entity.emotionEntityMakerComponent.emotionSentinel);
        })
        .each(function(entity){
            var sourceEntity = world.entityForKey(entity.emotionEntityMakerComponent.activeSource);
            if (sourceEntity && sourceEntity.sentinelComponent.active){
                makeEntities(entity, world, entity.emotionEntityMakerComponent.entitiesToMake);
            }
        });
    return true;
};

var makeMemorySystem = function(world, entities){
    var playerCurrencies = world.player.calculatedCurrencyComponent.currencies;
    
    _.chain(entities)
        .filter(function(entity){ return entity.makeMemoryComponent; })
        .each(function(entity){
            if (tickComp(entity.makeMemoryComponent)){
                var makeMemory = _.any(KEY_EMOTIONS, function(emotion){
                    return playerCurrencies[emotion] && (playerCurrencies[emotion] / EMOTION_GRAIN >= 4);
                }) || (Math.random() < 0.1);
                if (makeMemory){
                    entity.makeMemoryComponent.makeMemory(world);
                }
            }
        });

    return true;
};

var makeStartEntities = function(){
    var startEntities = _.map(PARAMETERS.startEntities, function(key){
        return makeEcs(key);
    });
    _.each(PARAMETERS.startEntityGroups, function(group){
        startEntities = startEntities.concat(makeAllEcs(group));
    });
    return startEntities;
};

var World = function(game){
    var that = this;
    this.hexMap = new HexMap(30, PARAMETERS.size[0], PARAMETERS.size[1], function(i, j, rect){ 
        var cell = new HexCell(rect);
        return cell;
    });
    this.player = makeEcs(PARAMETERS.player);
    this.entities = [this.player];
    this.entitiesToAdd = [];
    this.game = game;
    this.keyedEntities = {};
};

World.prototype.createStartEntities = function(){
    var that = this;
    _.each(makeStartEntities(), function(entity){
        that.addEntity(entity);
        that.entities = that.entities.concat(that.entitiesToAdd);
        that.entitiesToAdd = [];
    });
};

World.prototype.draw = function(){
    this.hexMap.draw();
};

World.prototype.isPosTaken = function(pos){
    return _.any(this.entities, function(entity){ 
        return entity.positionComponent && 
            entity.positionComponent.isPos(pos);
    });
};

World.prototype.isPosBuildable = function(hexPos){
    var that = this;
    
    if (hexPos[0] < 0 || hexPos[1] < 0){
        return false;
    }
    
    if (this.hexMap.hexMap.length <= hexPos[0] || 
        this.hexMap.hexMap[hexPos[0]].length <= hexPos[1]){
        return false;
    }

    return !this.isPosTaken(hexPos) && 
        _.any(this.hexMap.neighbors(hexPos[0], hexPos[1]), function(neighbor){
            return that.isPosTaken(neighbor);
        });
};

World.prototype.isPosEmptyTrait = function(hexPos, managerKey){
    var hasManager = false;
    var hasProducer = false;
    _.each(this.entities, function(entity){
        if (entity.positionComponent && entity.positionComponent.isPos(hexPos) && entity.identityComponent){
            var key = entity.sourceExtensionComponent ? entity.sourceExtensionComponent.sourceKey : entity.identityComponent.key;
            if (key == managerKey){
                hasManager = true;
            }
            else if (entity.sentinelComponent && entity.sentinelComponent.towerSourceKey){
                hasProducer = true;
            }
        }
    });
    
    return hasManager && !hasProducer;
};

World.prototype.lostControl = function(){
    return _.any(this.entities, function(entity){
        return entity.holdControlComponent;
    });
};

World.prototype.isPosPathBuildable = function(pos){
    return _.all(this.entities, function(entity){
        return !(entity.positionComponent &&
                 entity.positionComponent.isPos(pos) &&
                 entity.pathMoveComponent);
    });
};

World.prototype.handleTouch = function(pos, ui){
    if (this.lostControl()){
        return;
    }

    var that = this;
    var prevEntity = undefined;

    _.chain(this.entities)
        .filter(function(entity){
            return entity.absolutePositionComponent && 
                containsPos([entity.absolutePositionComponent.x, entity.absolutePositionComponent.y,
                             entity.absolutePositionComponent.size[0], entity.absolutePositionComponent.size[1]], pos);
        })
        .each(function(entity){
            if (prevEntity){
                prevEntity.absolutePositionComponent.isDragging = false;
            }
            
            if (entity.absolutePositionComponent.draggable){
                entity.absolutePositionComponent.isDragging = true;
                if (entity.panelComponent){
                    entity.panelComponent.startMin = entity.panelComponent.minimized;
                }
            }
            
            if (entity.uiClickComponent){
                entity.uiClickComponent.uiClick(pos, entity, ui);
            }

            prevEntity = entity;
        });

    if (prevEntity){
        return;
    }

    
    var hexPos = this.hexMap.convertPos(pos);
    

    if (this.currentMakingEntity){
        if (!this.currentMakingEntity.buttonControlComponent.checkMakePos(this, hexPos)){
            return;
        }
        var entity = this.currentMakingEntity.buttonControlComponent.makeEntity(this, hexPos);
        this.addEntity(entity);
        this.resetCurrents();
    }
    else if (this.currentPath){
        if (this.currentPathStart){
            var neighbors = this.hexMap.neighbors(this.currentPathStart[0], this.currentPathStart[1]);
            if (_.any(neighbors, function(neighbor){ return _.isEqual(neighbor, hexPos); })){
                var path = makeEcs(PARAMETERS.path, {start: this.currentPathStart, end: hexPos});
                this.addCost('built path', PATH_COST);
                this.addEntity(path);
                this.currentPathStart = hexPos;
            }
        }
        else{
            this.currentPathStart = hexPos;
        }
    }
    else if (this.currentMoving && !this.currentMoving.positionComponent.isPos(hexPos)){
        if (this.isPosBuildable(hexPos) && this.currentMoving.positionComponent.canBuildAtPos(this.currentMoving, this, hexPos)){
            this.currentMoving.positionComponent.x = hexPos[0];
            this.currentMoving.positionComponent.y = hexPos[1];
            this.currentMoving.positionComponent.defaultSource = undefined;
            this.currentMoving = null;
        }
    }
    else if (this.currentSpell){
        console.log(this.currentSpell.spellComponent.spellCost);
        this.addCost(this.currentSpell.identityComponent.name, this.currentSpell.spellComponent.spellCost);
        this.currentSpell.spellComponent.spellFn(hexPos, entity, this);
        this.currentSpell = null;
    }
    else{
        var entities = _.filter(this.entities, function(entity){
            return entity.positionComponent && entity.positionComponent.isPos(hexPos) &&
                entity.identityComponent && entity.identityComponent.touchable;
        });
        
        _.each(entities, function(entity){
            if (entity.clickComponent){
                entity.clickComponent.onClick(entity, that, ui);
            }
        });

        entities = _.filter(entities, function(entity){
            return !entity.healthComponent ||
                (entity.healthComponent.health > 0);
        });

        ui.setActiveControl(entities, this);
    }
};

World.prototype.handleKeyPress = function(key, ui){
    if (this.lostControl()){
        return;
    }

    _.each(this.entities, function(entity){
        if (entity.keyPressComponent){
            entity.keyPressComponent.handleKeyPress(key, entity, ui);
        }
    });
};

World.prototype.entitiesForName = function(name){
    return _.filter(this.entities, function(entity){
        return entity.identityComponent && entity.identityComponent.name == name;
    });
};

World.prototype.entitiesForKey = function(key){
    return _.filter(this.entities, function(entity){
        return entity.identityComponent && entity.identityComponent.key == key;
    });
};

World.prototype.entityForKey = function(key){
    if (this.keyedEntities[key]){
        return this.keyedEntities[key];
    }
    var entity = this.entitiesForKey(key)[0];
    this.keyedEntities[key] = entity;
    return entity;
};

World.prototype.entityForKeyExists = function(key){
    return _.any(this.entities, function(entity){
        return entity.identityComponent && entity.identityComponent.key == key;
    });
};

World.prototype.resetCurrents = function(){
    this.currentMakingEntity = null;
    this.currentPath = null;
    this.currentPathStart = null;
    this.currentMoving = null;
    this.currentSpell = null;
};

World.prototype.addEntity = function(entity){
    if (entity.uniqueComponent){
        var orig = this.entityForKey(entity.identityComponent.key);
        if (orig){
            orig.uniqueComponent.uniqueDuplicateEvent(entity, orig, this);
        }
        else{
            this.keyedEntities[entity.identityComponent.key] = entity;
        }
    }
    
    if (entity.isaacEntityComponent){
        entity.isaacEntityComponent.startLifecycle(entity, this);
    }

    this.entitiesToAdd.push(entity);
    this.entityCreateExec(entity);
};

World.prototype.entityCreateExec = function(entity){
    var that = this;
    _.each(entity.createExecutables, function(exec){
        exec.execute(entity, that);
    });
    
    if (entity.identityComponent && entity.identityComponent.key){
        var entityKey = entity.identityComponent.key;
        _.chain(this.entities)
            .filter(function(modifyEntity){
                return modifyEntity.createModifyComponent && 
                    modifyEntity.createModifyComponent.createModifiers[entityKey];
            })
            .each(function(modifyEntity){
                var exec = makeEcs(modifyEntity.createModifyComponent.createModifiers[entityKey]);
                exec.execute(modifyEntity, that);
            });
    }
};

World.prototype.addCost = function(name, cost){
    var key = name;
    var existingCostEntity = this.entitiesForKey(key)[0];
    if (existingCostEntity){
        addDict(existingCostEntity.currencyStoreComponent.currencies, cost);
    }
    else{
        this.addEntity(makeEcs(PARAMETERS.dailyCurrencyStore, {
            currencies: _.clone(cost),
            name: key,
            key: key
        }));
    }
};

World.prototype.isTowerSourceActive = function(towerSourceKey){
    return this.entityForKey(towerSourceKey).slotComponent.slottedItem;
};

World.prototype.makeClickText = function(name, x, y){
    var clickText = makeEcs(PARAMETERS.clickText, {
        name: name,
        x: x,
        y: y
    });
    this.addEntity(clickText);
};

World.prototype.randomOpenPosition = function(planeOfExistence){
    var pos = false;
    var entitiesToCheck = _.filter(this.entities.concat(this.entitiesToAdd), function(entity){
        return entity.positionComponent && entity.positionComponent.planeOfExistence == planeOfExistence;
    });
    var xMin = PARAMETERS.size[0];
    var xMax = 0;
    var yMin = PARAMETERS.size[1];
    var yMax = 0;

    _.each(entitiesToCheck, function(entity){
        if (entity.positionComponent.x < xMin){
            xMin = entity.positionComponent.x;
        }
        if (entity.positionComponent.y > xMax){
            xMax = entity.positionComponent.x;
        }

        if (entity.positionComponent.y < yMin){
            yMin = entity.positionComponent.y;
        }
        if (entity.positionComponent.y > yMax){
            yMax = entity.positionComponent.y;
        }
    });

    xMin = max(0, xMin - 2);
    yMin = max(0, yMin - 2);
    xMax = min(PARAMETERS.size[0] - 1, xMax + 2);
    yMax = min(PARAMETERS.size[1] - 1, yMax + 2);

    while (!pos){
        pos = [_.random(xMin, xMax), _.random(yMin, yMax)];
        var neighbors = this.hexMap.neighbors(pos[0], pos[1]);
        neighbors.push(pos);
        if (_.any(entitiesToCheck, function(chkEntity){
            return _.any(neighbors, function(chkPos){
                return chkEntity.positionComponent.isPos(chkPos);
            });
        })){
            pos = false;
        }
    }
    return pos;
};

World.prototype.tick = function(){
    for (var key in this.keyedEntities){
        if (!_.contains(this.entities, this.keyedEntities[key])){
            this.keyedEntities[key] = undefined;
        }
    }
};

var BasicButton = function(rect, onTouchFunction){
    this.rect = rect;
    this.onTouchFunction = onTouchFunction;
};

BasicButton.prototype.draw = function(){
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(this.rect[0], this.rect[1], this.rect[2], this.rect[3]);
};

var PathButton = function(){
    this.cost = PATH_COST;
    this.name = 'path';
};

PathButton.prototype.onTouchFunction = function(world){
    
};

var Ui = function(world, game){
    this.world = world;
    this.setupUi(game, world);
    this.lines = {};
    this.currencyLines = {};
    this.toResetActivatables = true;
};

Ui.prototype.draw = function(){
    var that = this;
    
    _.each(this.currencyLines, function(val, key){
        that.addFoldLine('#calculatedCurrency', key + ' - ' + dictString(val), '#currencyKey');
    });

    this.currencyLines = {};

    this.addLine('#focusWill', '' + this.world.player.calculatedCurrencyComponent.currencies.will);
    var deltaWill = {};
    _.chain(this.world.entities)
        .filter(function(entity){
            return entity.tickEmotionComponent && 
                entity.sentinelComponent.active &&
                entity.tickEmotionComponent.currency.will;
        })
        .each(function(entity){
            var name = entity.identityComponent.name;
            if (deltaWill[name] === undefined){
                deltaWill[name] = 0;
            }
            deltaWill[name] += entity.tickEmotionComponent.currency.will;
        });

    
    _.each(deltaWill, function(dWill, name){
        that.addLine('#focusWill', {
            text: dWill + ' - ' + name,
            color: (dWill > 0) ? '#aaffaa' : '#ffaaaa'
        });
    });
    this.addLine('#focusWill', {line: []});

    var currentBuildState = 
            this.world.currentMakingEntity ? ('Building ' + (this.world.currentMakingEntity.buttonControlComponent.towerKey ?
                                                             this.world.currentMakingEntity.buttonControlComponent.towerKey :
                                                             this.world.currentMakingEntity.buttonControlComponent.traitKey)) :
            this.world.currentPath ? 'Path' : 
            this.world.currentMoving ? ('Moving ' + this.world.currentMoving.identityComponent.name) :
            this.world.currentSpell ? ('Casting' + this.world.currentSpell.identityComponent.name) :
            'building nothing';

    this.addLine('#self', currentBuildState);
};

var makeButton = function(name, cost){
    return '<button>' + name + ' (' + _.reduce(cost, function(memo, val, key){
        var st = key + ':' + (-1 * val);
        return (memo == '') ? st : memo + ', ' + st;
    }, '') + ')' + '</button>';
};

Ui.prototype.setupUi = function(game){
    var that = this;
 
    this.nextDay = function(){
        game.restartDay();
    };
    this.pause = function(){
        game.tickSystemWrapper.running = !game.tickSystemWrapper.running;
    };
    this.toggle = function(){
        game.ticksPerTick = (game.ticksPerTick == 1) ? 2 :
            ((game.ticksPerTick == 2) ? 5 : 1);
    };
    this.normalSpeed = function(){
        game.tickSystemWrapper.running = true;
        game.ticksPerTick = 1;
    };
    this.fastSpeed = function(){
        game.tickSystemWrapper.running = true;
        game.ticksPerTick = 2;
    };
    this.vfastSpeed = function(){
        game.tickSystemWrapper.running = true;
        game.ticksPerTick = 5;
    };
};

Ui.prototype.getPanel = function(key){
    var infoPanel = this.world.entityForKey(key);
    
    if (!infoPanel){
        var panelCount = _.chain(this.world.entities)
                .map(function(entity){
                    return entity.panelComponent ? 1 : 0;
                })
                .reduce(addFunction, 0)
                .value();
        infoPanel = makeEcs(PARAMETERS.infoPanel, {
            key: key,
            name: key
        });
        this.world.addEntity(infoPanel);
    }
    
    return infoPanel;
};

Ui.prototype.addLine = function(key, line){
    if (line === undefined){
        assert(line.color);
    }
    var infoPanel = this.getPanel(key);
    infoPanel.panelComponent.lines.push(line);
    return infoPanel;
};

Ui.prototype.addFoldLine = function(key, line, foldout){
    var infoPanel = this.getPanel(key);
    var foldPanel = _.chain(infoPanel.panelComponent.lines)
            .filter(function(line){
                return line.foldout === foldout;
            })
            .first()
            .value();

    if (!foldPanel){
        foldPanel = makeEcs(PARAMETERS.infoFoldout, {
            foldout: foldout,
            foldLines: line ? [line] : [],
            folded: infoPanel.panelComponent.foldouts[foldout]
        });
        infoPanel.panelComponent.lines.push(foldPanel);
    }
    else{
        if (line !== undefined){
            foldPanel.foldLines.push(line);
        }
    }
    return foldPanel;
};

Ui.prototype.addCurrencyLine = function(key, val){
    var dct = (this.currencyLines[key] === undefined) ? {} : this.currencyLines[key];
    
    _.each(val, function(v, k){
        if (dct[k] === undefined){
            dct[k] = 0;
        }
        dct[k] += v;
    });
    
    this.currencyLines[key] = dct;
};

var minDictString = function(dict){
    return _.reduce(dict, function(memo, val, key){
        var st = key + ':' + ((typeof val == 'object') ? '(' + minDictString(val) + ')' : val);
        return (memo === undefined) ? st : (memo + '|' + st);
    }, undefined);
};

var mangleIdentityWithTrait = function(key, trait){
    return key + '_' + trait;
};

Ui.prototype.updateActivatables = function(){
    var that = this;
    var activatables = _.filter(this.world.entities, function(entity){
        return entity.activatableComponent;
    });
    var html = '<table>' + _.chain(activatables)
        .groupBy(function(entity){
            return entity.identityComponent.tags[0];
        })
        .map(function(entities, key){
            return '<tr><td>' + key + ':</td>' + _.reduce(entities, function(memo, entity){
                return memo + '<td><button id="' + entity.identityComponent.key + '">' + entity.identityComponent.name + "</button></td>";
            }, '') + '</tr>';
        })
        .reduce(addFunction, '')
        .value() + '</table>';
    $('#activatables').html(html);
    _.each(activatables, function(entity){
        $('#' + entity.identityComponent.key).bind('mousedown', function(){
            if (!entity.activatableComponent.canActivate(entity, that.world)){
                return;
            }
            var tag = entity.identityComponent.tags[0];
            _.chain(activatables)
                .filter(function(activatable){
                    return _.contains(activatable.identityComponent.tags, tag);
                })
                .each(function(activatable){
                    activatable.activatableComponent.activated = false;
                });
            entity.activatableComponent.activated = true;
        });
    });
};

Ui.prototype.startAction = function(item, action, sourceEntity){
    if (sourceEntity.slotComponent.slottedItem === item){
        sourceEntity.slotComponent.resetSlotComponent();
        this.world.addEntity(makeEcs(PARAMETERS.notification, {
            notificationKey: 'actionStop',
            notificationArgs: {
                key: action.identityComponent.key
            }
        }));
    }
    else{
        sourceEntity.slotComponent.slottedItem = item;
        sourceEntity.slotComponent.currentAction = action;
    }
    
    if (action.itemActionComponent.slottedItem === item){
        action.itemActionComponent.slottedItem = undefined;
    }
    else{
        action.itemActionComponent.slottedItem = item;
    }
    
    this.world.addCost('started ' + action.identityComponent.name, action.itemActionComponent.startCost);
};

Ui.prototype.update = function(){
    var that = this;

    if (this.toResetActivatables){
        this.updateActivatables();
        this.toResetActivatables = false;
    }

    
    var items = _.filter(this.world.entities, function(entity){
        return entity.itemComponent;
    });

    var hitActionKeys = [];

    var actions = _.filter(this.world.entities, function(entity){
        var chk = entity.itemActionComponent && _.any(items, function(item){
            return entity.itemActionComponent.checkItemForAction(item, entity);
        });
        if (chk && !_.contains(hitActionKeys, entity.identityComponent.key)){
            hitActionKeys.push(entity.identityComponent.key);
            return true;
        }
        return false;
    });

    _.each(actions, function(action){
        $('#currency_' + action.identityComponent.key).html(minDictString(action.goalTrackComponent.currency));
    });
    
    var playerControls = _.filter(this.world.entities, function(entity){
        return entity.playerControlComponent && 
            entity.playerControlComponent.canMakeEntity(entity, that.world);
    });
};

Ui.prototype.setActiveControl = function(entities, world){
    var that = this;
    var entity;
    
    if (entities.length === 1){
        entity = entities[0];
    }
    else{
        entities = _.filter(entities, function(entity){
            return entity.positionComponent.defaultSource;
        });
        
        if (entities.length === 0){
            return;
        }

        if (world.currentMoving){
            var index = entities.indexOf(world.currentMoving);
            index = (index == (entities.length - 1)) ? 0 : (index + 1);
            entity = entities[index];
        }
        else{
            entity = entities[0];
        }

        world.currentMoving = entity;
    }
};

Ui.prototype.showPanel = function(infoPanel){
    infoPanel.panelComponent.closed = false;
    infoPanel.panelComponent.minimized = false;
    var otherInfoPanels = _.filter(this.world.entities, function(entity){
        return entity.panelComponent && entity !== infoPanel;
    });
    
    for (var i = 0; i < 5; i++){
        var panel = _.chain(otherInfoPanels)
                .filter(function(panel){
                    return containsPos([panel.absolutePositionComponent.x - 2, panel.absolutePositionComponent.y - 2,
                                        panel.absolutePositionComponent.size[0] + 2, panel.absolutePositionComponent.size[1] + 2],
                                       [infoPanel.absolutePositionComponent.x, infoPanel.absolutePositionComponent.y]);
                })
                .first()
                .value();
        if (panel){
            infoPanel.absolutePositionComponent.y = panel.absolutePositionComponent.y + panel.absolutePositionComponent.size[1] + 10;
        }
        else{
            return;
        }
    }
};

Ui.prototype.openPanelAtPos = function(panelKey, positionComponent){
    var panel = this.getPanel(panelKey);
    var rect = this.world.hexMap.cellForPosComp(positionComponent).rect;
    panel.absolutePositionComponent.x = rect[0] + rect[2];
    panel.absolutePositionComponent.y = rect[1] + rect[3];

    if (panel.panelComponent.closed || panel.panelComponent.minimized){
        panel.panelComponent.closed = false;
        panel.panelComponent.minimized = false;
        return true;
    }
    return false;
};

var Game = function(){
};

Game.prototype.initialize = function(){
    var that = this;
    this.world = new World(this);
    this.ui = new Ui(this.world, this);
    this.world.createStartEntities();
    bindHandler.bindFunction(this.getTouchFunction());
    bindHandler.bindFunction(this.getMoveFunction(), 'move');
    bindHandler.bindFunction(this.getMouseUpFunction(), 'up');
    document.addEventListener('keydown', function(e){
        that.handleKeyPress(e);
    });
    this.timeToNextTick = 0;
    this.ticksPerTick = 1;
    this.tickSystemWrapper = new TickSystemWrapper({
        0: [daySystem],
        1: [pathMoveSystem],
        2: [damageSystem],
        3: [tickEmotionSystem],
        4: [emotionSourceSystem, mapSpawnSystem, emotionEntityMakerSystem],
        5: [wishMakeSystem, makeMemorySystem, traitMakeSystem],
        6: [executeSystem],
        7: [timedDeathSystem],
        8: [goalCheckSystem],
        9: [tickSystem]
    });
    this.systems = [
        velocitySystem,
        notificationSystem,
        maintenanceSystem,
        sourceSlottedSystem,
        focusSystem,
        currencyCalculateSystem,
        emotionStateSystem,
        sentinelSystem,
        activeEntitySystem,
        deathSystem
    ];
    adminConsole.setGame(this);
};

Game.prototype.getTouchFunction = function(){
    var that = this;
    return function(e){
        if (e.button == 2){
            that.world.resetCurrents();
            e.preventDefault();
        }
        var pos = getPos(e);
        that.lastPos = pos;
        that.world.handleTouch(pos, that.ui);
    };
};

Game.prototype.getMoveFunction = function(){
    var that = this;
    return function(e){
        var pos = getPos(e);
        _.chain(that.world.entities)
            .filter(function(entity){
                return entity.absolutePositionComponent &&
                    entity.absolutePositionComponent.isDragging;
            })
            .each(function(entity){
                entity.absolutePositionComponent.x += pos[0] - that.lastPos[0];
                entity.absolutePositionComponent.y += pos[1] - that.lastPos[1];
                if (pos[0] != that.lastPos[0] || pos[1] != that.lastPos[1]){
                    if (entity.panelComponent){
                        entity.panelComponent.minimized = entity.panelComponent.startMin;
                    }
                }
            });
        that.lastPos = pos;
    };
};

Game.prototype.getMouseUpFunction = function(){
    var that = this;
    return function(e){
        _.chain(that.world.entities)
            .filter(function(entity){
                return entity.absolutePositionComponent;
            })
            .each(function(entity){
                entity.absolutePositionComponent.isDragging = false;
            });
    };
};

Game.prototype.tick = function(){
    var that = this;
    for (var i = 0; i < this.ticksPerTick; i++){
        var entities = this.world.entities;
        this.world.tick();
        this.tickSystemWrapper.runSystems(this.world, entities);
        _.each(this.systems, function(system){
            system(that.world, entities);
        });
    }
    this.ui.update();
};

Game.prototype.update = function(interval){
    this.timeToNextTick -= interval;
    
    if (this.timeToNextTick < 0){
        this.timeToNextTick += 1 / TICKS_PER_SECOND;
        this.tick();
    }

    return true;
};

Game.prototype.draw = function(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    this.world.draw();
    rendererSystem(this.world, this.world.entities, this.ui);
    this.ui.draw();
};

Game.prototype.restartDay = function(){
    this.tickSystemWrapper.running = true;
    this.world.entitiesToAdd.push(makeEcs(PARAMETERS.day));
};

Game.prototype.saveData = function(){
    return {
        ticks: this.tickSystemWrapper.ticks
    };
};

Game.prototype.loadData = function(data){
    this.tickSystemWrapper.ticks = data.ticks;
};

Game.prototype.handleKeyPress = function(event){
    var key = event.keyCode;
    this.world.handleKeyPress(key, this.ui);
};

var adminConsole = (function(){
    var game;

    var serializeEntity = function(comp){
        if (!_.isObject(comp)){
            return comp;
        }

        if (comp.serializeComponent){
            comp.serializeComponent.serialize(comp);
        }

        var serialized = {};
        _.each(comp, function(val, key){
            if (!_.isObject(val)){
                serialized[key] = val;
            }
            else if (_.isArray(val)){
                serialized[key] = _.map(val, serializeEntity);
            }
            else if (!_.isFunction(val) && 
                     val !== undefined &&
                     val.identityComponent === undefined){
                serialized[key] = serializeEntity(val);
            }
            else if (val.identityComponent){
                console.log(key);
            }
        });
        return serialized;
    };

    var deserializeEntity = function(data){
        if (!data){
            return data;
        }
        else if (data.ecsKey){
            var ecs = makeEcs(data.ecsKey, data.args);
            _.each(data, function(val, key){
                ecs[key] = deserializeEntity(val);
            });
        }
        else if (_.isArray(data)){
            return _.map(data, deserializeEntity);
        }
        else {
            return data;
        }
        return ecs;
    };

    return {
        setGame: function(gm){
            game = gm;
        },
        getGame: function(){
            return game;
        },
        save: function(){
            var serialized = {
                worldEntities: _.map(game.world.entities, serializeEntity),
                worldEntitiesToAdd: _.map(game.world.entitiesToAdd, serializeEntity),
                uid: uidManager.getUid(),
                gameData: game.saveData()
            };
            serialized = JSON.stringify(serialized);
            localStorage.savedGame = serialized;
        },
        load: function(){
            var deserialized = JSON.parse(localStorage.savedGame);
            game.world.entities = _.map(deserialized.worldEntities, deserializeEntity);
            game.world.entitiesToAdd = _.map(deserialized.worldEntitiesToAdd, deserializeEntity);
            uidManager.setUid(deserialized.uid);
            game.loadData(deserialized.gameData);
        },
        addEmotions: function(spawnSourceKey, emotionsToAdd, impulseTicks){
            game.world.addEntity(makeEcs(PARAMETERS.emotionSource, {
                key: 'debugEmotions',
                name: 'debug emotions',
                spawnSourceKey: spawnSourceKey,
                emotionsToAdd: emotionsToAdd,
                impulseTicks: impulseTicks
            }));
        },
        getEntity: function(key){
            return game.world.entityForKey(key);
        },
        listEntityKeys: function(){
            _.each(game.world.entities, function(entity){
                if (entity.identityComponent){
                    console.log(entity.identityComponent.key);
                }
            });
        }
    };
})();

var GameProperties = function(){
};
