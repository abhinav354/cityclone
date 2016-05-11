var PARAMETERS = {
    "startEntityGroups": [
        "emotionState", 
        "emotionSentinel", 
        "emotionCurrencyTicker", 
        "emotionEntityMaker", 
        "currencyConverter", 
        "traitMaker"
    ], 
    "pathEmotionChance": 0, 
    "bullet": "bullet", 
    "wishCurrencies": [
        "meditate", 
        "choes", 
        "exercise", 
        "meetPerson", 
        "travel"
    ], 
    "currencyBoost": "currencyBoost", 
    "startEntities": [
        "gameStateEntity", 
        "self", 
        "day", 
        "memoryMaker", 
        "pathButton", 
        "controlPanel", 
        "dayEnergy", 
        "chapter1", 
        "rememberItem"
    ], 
    "notification": "notification", 
    "self": "self", 
    "dailyCurrencyStore": "dailyCurrencyStore", 
    "infoPanel": "infoPanel", 
    "player": "player", 
    "playerInform": "playerInform", 
    "defaultHeldOpinions": [
        "acquaintance"
    ], 
    "emotionSource": "emotionSource", 
    "memory": "memory", 
    "infoFoldout": "infoFoldout", 
    "path": "path", 
    "clickText": "clickText", 
    "day": "day", 
    "creep": "creep", 
    "size": [
        16, 
        25
    ]
};

var allArgs = {
    "ambushButton_agentE": {
        "towerKey": "ambushTower_agentE", 
        "name": "ambush", 
        "personHeld": "agentE", 
        "isaacEntities": [
            "ambushSource_agentE"
        ], 
        "key": "ambushButton_agentE", 
        "managerKey": "agentE", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "ambushSource_agentE"
    }, 
    "holcomb_ext": {
        "name": "Holcomb", 
        "key": "holcomb_ext", 
        "sourceKey": "holcomb"
    }, 
    "driveCabItem": {
        "name": "Cab", 
        "key": "driveCabItem", 
        "spawnSourceKey": "holcomb"
    }, 
    "empathic_ext": {
        "name": "Empathic", 
        "key": "empathic_ext", 
        "sourceKey": "empathic"
    }, 
    "meditateAction": {
        "name": "Meditate", 
        "focusCost": 20, 
        "items": [
            "meditateItem"
        ], 
        "makeMemoryChance": 0.05, 
        "currency": {
            "meditate": 300
        }, 
        "key": "meditateAction", 
        "entitiesToMake": [
            "meditateItem"
        ], 
        "consumeCheck": 1
    }, 
    "invite_mission3Action": {
        "name": "Invite to Bomb", 
        "focusCost": 10, 
        "items": [
            "mission3Item"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_mission3Action", 
        "entitiesToMake": "inviteGoal_mission3Action", 
        "consumeCheck": 0
    }, 
    "dateFear": {
        "focusCost": 10, 
        "emotionsToAdd": {
            "fear": 5
        }, 
        "name": "Date Fear", 
        "key": "dateFear", 
        "spawnSourceKey": "self"
    }, 
    "pathButton": {
        "name": "path", 
        "key": "path"
    }, 
    "talkButton_TargetA": {
        "towerKey": "talkTower_TargetA", 
        "name": "talk", 
        "personHeld": "TargetA", 
        "isaacEntities": [
            "talkSource_TargetA"
        ], 
        "key": "talkButton_TargetA", 
        "managerKey": "TargetA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "talkSource_TargetA"
    }, 
    "exerciseTower": {
        "name": "exercise", 
        "aliveEntities": {
            "teamFail": 2, 
            "playedWell": 5, 
            "playedPoor": 5
        }, 
        "damageMultipliers": {
            "anger": 3
        }, 
        "currency": {
            "exercise": 1
        }, 
        "sourceTrait": "adult", 
        "key": "exerciseTower", 
        "icon": "EXERCISE"
    }, 
    "talkSource_TargetA": {
        "towerActions": [
            "shareEmotionAction"
        ], 
        "personHeld": "TargetA", 
        "sourceTrait": "TargetA", 
        "towerKey": "talkTower_TargetA", 
        "key": "talkSource_TargetA"
    }, 
    "bombTower": {
        "name": "bomb", 
        "aliveEntities": {
            "closeCall": 10
        }, 
        "currency": {
            "bomb": 1
        }, 
        "sourceTrait": "agent", 
        "key": "bombTower", 
        "emotionsToAdd": {
            "fear": 4
        }, 
        "icon": "BOMB"
    }, 
    "chatTower_TargetA": {
        "currency": {
            "will": 1, 
            "chat": 1
        }, 
        "sourceTrait": "TargetA", 
        "name": "Chat", 
        "key": "chatTower_TargetA", 
        "icon": "CHAT"
    }, 
    "overwhelmedWill": {
        "emotionSentinel": "overwhelmed", 
        "currency": {
            "will": -2
        }, 
        "name": "Overwhelmed Will", 
        "key": "overwhelmedWill"
    }, 
    "proposeItem": {
        "name": "Propose", 
        "key": "proposeItem", 
        "spawnSourceKey": "adult"
    }, 
    "sadnessEmotionPiece": {
        "emotion": "sadness", 
        "key": "sadnessEmotionPiece"
    }, 
    "controlPanel": {
        "y": 0, 
        "x": 0
    }, 
    "angerEmotionPiece": {
        "emotion": "anger", 
        "key": "angerEmotionPiece"
    }, 
    "choresConvert": {
        "currencyConversion": {
            "will": 0.25
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "chores", 
        "key": "choresConvert"
    }, 
    "haveDate": {
        "opinionGoal": "dating", 
        "key": "haveDate"
    }, 
    "resilient": {
        "currency": {
            "will": 1
        }, 
        "name": "Resilient", 
        "key": "resilient", 
        "traitImage": "maroonTower"
    }, 
    "lethargy_ext": {
        "currencies": {
            "will": -100
        }, 
        "name": "Lethargy", 
        "key": "lethargy_ext", 
        "sourceKey": "lethargy"
    }, 
    "buyRingItem": {
        "name": "Ring", 
        "key": "buyRingItem", 
        "spawnSourceKey": "adult"
    }, 
    "outgoing": {
        "currency": {
            "chat": 1
        }, 
        "name": "Outgoing", 
        "key": "outgoing", 
        "traitImage": "slimyTower"
    }, 
    "invite_driveCabAction": {
        "name": "Invite to Drive", 
        "focusCost": 10, 
        "items": [
            "driveCabItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_driveCabAction", 
        "entitiesToMake": "inviteGoal_driveCabAction", 
        "consumeCheck": 0
    }, 
    "dateButton_TargetA": {
        "towerKey": "dateTower_TargetA", 
        "name": "date", 
        "personHeld": "TargetA", 
        "isaacEntities": [
            "dateSource_TargetA"
        ], 
        "key": "dateButton_TargetA", 
        "managerKey": "TargetA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "dateSource_TargetA"
    }, 
    "ambushConvert": {
        "currencyConversion": {
            "will": 1
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "ambush", 
        "key": "ambushConvert"
    }, 
    "flirtButton_agentE": {
        "towerKey": "flirtTower_agentE", 
        "name": "flirt", 
        "personHeld": "agentE", 
        "isaacEntities": [
            "flirtSource_agentE"
        ], 
        "key": "flirtButton_agentE", 
        "managerKey": "agentE", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "flirtSource_agentE"
    }, 
    "wishesToTalk_ext": {
        "name": "Wishes To Talk", 
        "key": "wishesToTalk_ext", 
        "sourceKey": "wishesToTalk"
    }, 
    "invite_findHouse": {
        "name": "Invite to Find House", 
        "focusCost": 10, 
        "items": [
            "findHouseItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_findHouse", 
        "entitiesToMake": "inviteGoal_findHouse", 
        "consumeCheck": 0
    }, 
    "rentMaker": {
        "name": "Rent Maker", 
        "key": "rentMaker", 
        "dayStartEntity": "rent"
    }, 
    "inviteGoal_spyAction": {
        "entitiesToKill": {
            "spyItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_spyAction", 
        "name": "Invited Spy"
    }, 
    "personD_ext": {
        "name": "Person D", 
        "key": "personD_ext", 
        "sourceKey": "personD"
    }, 
    "closeCall": {
        "focusCost": 40, 
        "emotionsToAdd": {
            "fear": 15
        }, 
        "name": "Close Call", 
        "key": "closeCall", 
        "spawnSourceKey": "agent"
    }, 
    "talkButton_personD": {
        "towerKey": "talkTower_personD", 
        "name": "talk", 
        "personHeld": "personD", 
        "isaacEntities": [
            "talkSource_personD"
        ], 
        "key": "talkButton_personD", 
        "managerKey": "personD", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "talkSource_personD"
    }, 
    "talkButton_personA": {
        "towerKey": "talkTower_personA", 
        "name": "talk", 
        "personHeld": "personA", 
        "isaacEntities": [
            "talkSource_personA"
        ], 
        "key": "talkButton_personA", 
        "managerKey": "personA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "talkSource_personA"
    }, 
    "talkButton_personB": {
        "towerKey": "talkTower_personB", 
        "name": "talk", 
        "personHeld": "personB", 
        "isaacEntities": [
            "talkSource_personB"
        ], 
        "key": "talkButton_personB", 
        "managerKey": "personB", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "talkSource_personB"
    }, 
    "talkButton_personC": {
        "towerKey": "talkTower_personC", 
        "name": "talk", 
        "personHeld": "personC", 
        "isaacEntities": [
            "talkSource_personC"
        ], 
        "key": "talkButton_personC", 
        "managerKey": "personC", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "talkSource_personC"
    }, 
    "meetPersonConvert": {
        "currencyConversion": {
            "will": 0.5
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "meetPerson", 
        "key": "meetPersonConvert"
    }, 
    "confession": {
        "entitiesToKill": {
            "confessionItem": 1
        }, 
        "timeToDeath": 240, 
        "focusCost": 40, 
        "spawnSourceKey": "agent", 
        "key": "confession", 
        "name": "Confession"
    }, 
    "exerciseAction": {
        "name": "Exercise", 
        "focusCost": 40, 
        "items": [
            "exerciseItem"
        ], 
        "makeMemoryChance": 0.05, 
        "currency": {
            "exercise": 250
        }, 
        "key": "exerciseAction", 
        "entitiesToMake": [
            "exerciseItem"
        ], 
        "consumeCheck": 1
    }, 
    "dateButton_personB": {
        "towerKey": "dateTower_personB", 
        "name": "date", 
        "personHeld": "personB", 
        "isaacEntities": [
            "dateSource_personB"
        ], 
        "key": "dateButton_personB", 
        "managerKey": "personB", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "dateSource_personB"
    }, 
    "dateButton_personC": {
        "towerKey": "dateTower_personC", 
        "name": "date", 
        "personHeld": "personC", 
        "isaacEntities": [
            "dateSource_personC"
        ], 
        "key": "dateButton_personC", 
        "managerKey": "personC", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "dateSource_personC"
    }, 
    "contactAgent": {
        "name": "Contact", 
        "focusCost": 100, 
        "items": [
            "contactItem"
        ], 
        "requiredOpinions": [
            "knownAgent"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "chat": 250
        }, 
        "key": "contactAgent", 
        "consumeCheck": 1
    }, 
    "dateButton_personD": {
        "towerKey": "dateTower_personD", 
        "name": "date", 
        "personHeld": "personD", 
        "isaacEntities": [
            "dateSource_personD"
        ], 
        "key": "dateButton_personD", 
        "managerKey": "personD", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "dateSource_personD"
    }, 
    "inviteGoal_findHouse": {
        "entitiesToKill": {
            "findHouseItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_findHouse", 
        "name": "Invited Find House"
    }, 
    "memory": {
        "touchable": "true", 
        "tags": [
            "association"
        ], 
        "mapSpawnKey": "memoryExtension"
    }, 
    "spySource": {
        "towerActions": [
            "spyAction", 
            "mission1Action"
        ], 
        "sourceTrait": "agent", 
        "towerKey": "spyTower", 
        "key": "spySource"
    }, 
    "adult": {
        "traitImage": "yellowTower", 
        "name": "adult", 
        "dailyEntities": {
            "exerciseWish": 3
        }, 
        "aliveEntities": {
            "choreItem": 2
        }, 
        "isaacEntities": [
            "choreButton", 
            "exerciseButton", 
            "meditateButton", 
            "meditateItem", 
            "playButton", 
            "playItem", 
            "exerciseItem"
        ], 
        "key": "adult"
    }, 
    "inviteGoal_meetPersonAction": {
        "entitiesToKill": {
            "meetPersonItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_meetPersonAction", 
        "name": "Invited Meet"
    }, 
    "holcombButton": {
        "traitKey": "holcomb", 
        "traitCost": {
            "will": -100, 
            "experience": -1
        }, 
        "name": "Holcomb", 
        "key": "holcombButton"
    }, 
    "mission3Item": {
        "name": "Church", 
        "key": "mission3Item", 
        "spawnSourceKey": "agent"
    }, 
    "contactItem": {
        "name": "Contact", 
        "key": "contactItem", 
        "spawnSourceKey": "agent"
    }, 
    "racist_ext": {
        "name": "Racist", 
        "key": "racist_ext", 
        "sourceKey": "racist"
    }, 
    "racistThreat": {
        "focusCost": 10, 
        "emotionsToAdd": {
            "fear": 2
        }, 
        "name": "Racist Threat", 
        "key": "racistThreat", 
        "spawnSourceKey": "holcomb"
    }, 
    "personB_ext": {
        "name": "Person B", 
        "key": "personB_ext", 
        "sourceKey": "personB"
    }, 
    "hundredHealthComponent": {
        "health": 100
    }, 
    "agent": {
        "isaacEntities": [
            "spyButton", 
            "spyItem"
        ], 
        "traitImage": "greenTower", 
        "name": "Agent", 
        "key": "agent", 
        "aliveEntities": {
            "fearFlash": 10
        }
    }, 
    "rememberItem": {
        "name": "Remember", 
        "key": "rememberItem", 
        "spawnSourceKey": "self"
    }, 
    "chatButton_TargetA": {
        "towerKey": "chatTower_TargetA", 
        "name": "chat", 
        "personHeld": "TargetA", 
        "isaacEntities": [
            "chatSource_TargetA"
        ], 
        "key": "chatButton_TargetA", 
        "managerKey": "TargetA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "chatSource_TargetA"
    }, 
    "mission2Action": {
        "name": "Deliver", 
        "focusCost": 80, 
        "items": [
            "mission2Item"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "travel": 250
        }, 
        "key": "mission2Action", 
        "entitiesToMake": [
            "mission3Item", 
            "confession"
        ], 
        "consumeCheck": 1, 
        "towerEffect": {
            "fear": 2
        }
    }, 
    "holcomb": {
        "isaacEntities": [
            "travelButton", 
            "relaxButton", 
            "relaxItem"
        ], 
        "name": "Holcomb", 
        "key": "holcomb", 
        "traitImage": "violetTower"
    }, 
    "makeAgentE": {
        "opinionKey": "knownAgent", 
        "personKey": "agentE", 
        "key": "makeAgentE"
    }, 
    "inviteGoal_chessMatchAction": {
        "entitiesToKill": {
            "chessMatchItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_chessMatchAction", 
        "name": "Invited Play Match"
    }, 
    "memoryItem": {
        "traits": [
            "discussable"
        ], 
        "name": "memory", 
        "key": "memoryItem", 
        "spawnSourceKey": "self"
    }, 
    "findHouse": {
        "name": "Find House", 
        "focusCost": 40, 
        "items": [
            "findHouseItem"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "travel": 150
        }, 
        "key": "findHouse", 
        "entitiesToMake": [
            "rentMaker"
        ], 
        "consumeCheck": 1
    }, 
    "playConvert": {
        "currencyConversion": {
            "will": 0.5
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "play", 
        "key": "playConvert"
    }, 
    "ambushSource_agentE": {
        "towerActions": [
            "ambushAction"
        ], 
        "personHeld": "agentE", 
        "sourceTrait": "agentE", 
        "towerKey": "ambushTower_agentE", 
        "key": "ambushSource_agentE"
    }, 
    "inviteGoal_choreAction": {
        "entitiesToKill": {
            "choreItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_choreAction", 
        "name": "Invited Clean"
    }, 
    "depresssedSentinel": {
        "emotionSentinel": "depressed", 
        "activeEntities": [
            "lostControl"
        ], 
        "key": "depresssedSentinel"
    }, 
    "talkTower_personA": {
        "name": "Talk", 
        "damage": 20, 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "talk": 1
        }, 
        "sourceTrait": "personA", 
        "key": "talkTower_personA", 
        "icon": "TALK"
    }, 
    "chatButton_agentE": {
        "towerKey": "chatTower_agentE", 
        "name": "chat", 
        "personHeld": "agentE", 
        "isaacEntities": [
            "chatSource_agentE"
        ], 
        "key": "chatButton_agentE", 
        "managerKey": "agentE", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "chatSource_agentE"
    }, 
    "ambushSource_personA": {
        "towerActions": [
            "ambushAction"
        ], 
        "personHeld": "personA", 
        "sourceTrait": "personA", 
        "towerKey": "ambushTower_personA", 
        "key": "ambushSource_personA"
    }, 
    "spyFear": {
        "focusCost": 40, 
        "emotionsToAdd": {
            "fear": 15
        }, 
        "name": "Spy Fear", 
        "key": "spyFear", 
        "spawnSourceKey": "agent"
    }, 
    "dateSource_personD": {
        "towerActions": [
            "dateAction", 
            "proposeAction"
        ], 
        "personHeld": "personD", 
        "sourceTrait": "personD", 
        "towerKey": "dateTower_personD", 
        "key": "dateSource_personD"
    }, 
    "talkTower_personC": {
        "name": "Talk", 
        "damage": 20, 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "talk": 1
        }, 
        "sourceTrait": "personC", 
        "key": "talkTower_personC", 
        "icon": "TALK"
    }, 
    "dateSource_personA": {
        "towerActions": [
            "dateAction", 
            "proposeAction"
        ], 
        "personHeld": "personA", 
        "sourceTrait": "personA", 
        "towerKey": "dateTower_personA", 
        "key": "dateSource_personA"
    }, 
    "dateSource_personC": {
        "towerActions": [
            "dateAction", 
            "proposeAction"
        ], 
        "personHeld": "personC", 
        "sourceTrait": "personC", 
        "towerKey": "dateTower_personC", 
        "key": "dateSource_personC"
    }, 
    "dateSource_personB": {
        "towerActions": [
            "dateAction", 
            "proposeAction"
        ], 
        "personHeld": "personB", 
        "sourceTrait": "personB", 
        "towerKey": "dateTower_personB", 
        "key": "dateSource_personB"
    }, 
    "inviteGoal_meditateAction": {
        "entitiesToKill": {
            "meditateItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_meditateAction", 
        "name": "Invited Meditate"
    }, 
    "flirtItem": {
        "name": "Flirt", 
        "key": "flirtItem", 
        "spawnSourceKey": "adult"
    }, 
    "talkConvert": {
        "currencyConversion": {
            "will": 0.25
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "talk", 
        "key": "talkConvert"
    }, 
    "worldTerror": {
        "traitImage": "redTower", 
        "name": "World Terror", 
        "key": "worldTerror", 
        "aliveEntities": {
            "terrorEvent": 10
        }
    }, 
    "invite_findJob": {
        "name": "Invite to Find Job", 
        "focusCost": 10, 
        "items": [
            "findJobItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_findJob", 
        "entitiesToMake": "inviteGoal_findJob", 
        "consumeCheck": 0
    }, 
    "distractedWill": {
        "emotionSentinel": "distracted", 
        "currency": {
            "will": -1
        }, 
        "name": "Distracted Will", 
        "key": "distractedWill"
    }, 
    "excitable_ext": {
        "currencies": {
            "will": 100
        }, 
        "name": "Excitable", 
        "key": "excitable_ext", 
        "sourceKey": "excitable"
    }, 
    "resilient_ext": {
        "name": "Resilient", 
        "key": "resilient_ext", 
        "sourceKey": "resilient"
    }, 
    "travelConvert": {
        "currencyConversion": {
            "will": 0.25
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "travel", 
        "key": "travelConvert"
    }, 
    "invite_choreAction": {
        "name": "Invite to Clean", 
        "focusCost": 10, 
        "items": [
            "choreItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_choreAction", 
        "entitiesToMake": "inviteGoal_choreAction", 
        "consumeCheck": 0
    }, 
    "agent_ext": {
        "name": "Agent", 
        "key": "agent_ext", 
        "sourceKey": "agent"
    }, 
    "choreSource": {
        "towerActions": [
            "choreAction"
        ], 
        "sourceTrait": "adult", 
        "towerKey": "choreTower", 
        "key": "choreSource"
    }, 
    "invite_chessMatchAction": {
        "name": "Invite to Play Match", 
        "focusCost": 10, 
        "items": [
            "chessMatchItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_chessMatchAction", 
        "entitiesToMake": "inviteGoal_chessMatchAction", 
        "consumeCheck": 0
    }, 
    "gameStateEntity": {
        "name": "gameStateEntity", 
        "key": "gameStateEntity"
    }, 
    "ambushItem": {
        "name": "Ambush", 
        "key": "ambushItem", 
        "spawnSourceKey": "agent"
    }, 
    "memoryTower": {
        "touchable": "true"
    }, 
    "inviteGoal_buyRingAction": {
        "entitiesToKill": {
            "buyRingItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_buyRingAction", 
        "name": "Invited Buy"
    }, 
    "invite_spyAction": {
        "name": "Invite to Spy", 
        "focusCost": 10, 
        "items": [
            "spyItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_spyAction", 
        "entitiesToMake": "inviteGoal_spyAction", 
        "consumeCheck": 0
    }, 
    "findHouseItem": {
        "name": "Find House", 
        "key": "findHouseItem", 
        "spawnSourceKey": "holcomb"
    }, 
    "flirtSource_TargetA": {
        "towerActions": [
            "flirtAction", 
            "complimentAction"
        ], 
        "personHeld": "TargetA", 
        "sourceTrait": "TargetA", 
        "towerKey": "flirtTower_TargetA", 
        "key": "flirtSource_TargetA"
    }, 
    "travelSource": {
        "towerActions": [
            "findHouse", 
            "findJob", 
            "driveCabAction", 
            "getEvidenceAction", 
            "destroyEvidence", 
            "buyRingAction", 
            "mission2Action"
        ], 
        "sourceTrait": "holcomb", 
        "towerKey": "travelTower", 
        "key": "travelSource"
    }, 
    "choreItem": {
        "name": "Chore", 
        "key": "choreItem", 
        "spawnSourceKey": "adult"
    }, 
    "relaxAction": {
        "name": "Relax", 
        "focusCost": 40, 
        "items": [
            "relaxItem"
        ], 
        "makeMemoryChance": 0.05, 
        "currency": {
            "relax": 300
        }, 
        "startCost": {
            "cash": -10
        }, 
        "key": "relaxAction", 
        "entitiesToMake": [
            "relaxItem"
        ], 
        "consumeCheck": 1
    }, 
    "disgustEmotionPiece": {
        "emotion": "disgust", 
        "key": "disgustEmotionPiece"
    }, 
    "terrifiedSentinel": {
        "emotionSentinel": "terrified", 
        "activeEntities": [
            "lostControl"
        ], 
        "key": "terrifiedSentinel"
    }, 
    "choreButton": {
        "towerKey": "choreTower", 
        "name": "chore", 
        "tags": [
            "adult"
        ], 
        "isaacEntities": [
            "choreSource"
        ], 
        "key": "choreButton", 
        "managerKey": "adult", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "choreSource"
    }, 
    "meetPersonButton": {
        "towerKey": "meetPersonTower", 
        "name": "meet person", 
        "tags": [
            "holcomb"
        ], 
        "isaacEntities": [
            "meetPersonSource"
        ], 
        "key": "meetPersonButton", 
        "managerKey": "holcomb", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "meetPersonSource"
    }, 
    "personA_ext": {
        "name": "Person A", 
        "key": "personA_ext", 
        "sourceKey": "personA"
    }, 
    "chessAction": {
        "name": "Play", 
        "focusCost": 40, 
        "items": [
            "chessItem"
        ], 
        "makeMemoryChance": 0.1, 
        "currency": {
            "chess": 300
        }, 
        "key": "chessAction", 
        "entitiesToMake": [
            "chessItem"
        ], 
        "consumeCheck": 1
    }, 
    "meditateSource": {
        "towerActions": [
            "meditateAction"
        ], 
        "sourceTrait": "adult", 
        "towerKey": "meditateTower", 
        "key": "meditateSource"
    }, 
    "meetPersonSource": {
        "towerActions": [
            "meetPersonAction"
        ], 
        "sourceTrait": "holcomb", 
        "towerKey": "meetPersonTower", 
        "key": "meetPersonSource"
    }, 
    "boredomWill": {
        "emotionSentinel": "bored", 
        "currency": {
            "will": 6
        }, 
        "name": "Boredom Will", 
        "key": "boredomWill"
    }, 
    "destroyEvidence": {
        "name": "Destroy", 
        "focusCost": 80, 
        "items": [
            "evidenceItem"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "travel": 250
        }, 
        "key": "destroyEvidence", 
        "entitiesToMake": [
            "confessionItem"
        ], 
        "consumeCheck": 1, 
        "towerEffect": {
            "fear": 2
        }
    }, 
    "inviteGoal_findJob": {
        "entitiesToKill": {
            "findJobItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_findJob", 
        "name": "Invited Find Job"
    }, 
    "smallTalkAction": {
        "name": "Chat", 
        "focusCost": 20, 
        "items": [
            "smallTalkItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0.1, 
        "currency": {
            "chat": 250
        }, 
        "key": "smallTalkAction", 
        "entitiesToMake": {
            "joke": 10, 
            "complimentItem": 10, 
            "smallTalkItem": 100
        }, 
        "consumeCheck": 1
    }, 
    "adult_ext": {
        "name": "adult", 
        "key": "adult_ext", 
        "sourceKey": "adult"
    }, 
    "talkWish": {
        "entitiesToKill": {
            "talkItem": 1
        }, 
        "timeToDeath": 240, 
        "focusCost": 5, 
        "spawnSourceKey": "wishesToTalk", 
        "key": "talkWish", 
        "name": "Talk"
    }, 
    "meditateButton": {
        "towerKey": "meditateTower", 
        "name": "meditate", 
        "tags": [
            "adult"
        ], 
        "isaacEntities": [
            "meditateSource"
        ], 
        "key": "meditateButton", 
        "managerKey": "adult", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "meditateSource"
    }, 
    "choreTower": {
        "name": "chores", 
        "currency": {
            "chores": 1, 
            "will": -1
        }, 
        "sourceTrait": "adult", 
        "key": "choreTower", 
        "emotionsToAdd": {
            "disgust": 1
        }, 
        "icon": "CHORE"
    }, 
    "enragedSentinel": {
        "emotionSentinel": "enraged", 
        "activeEntities": [
            "lostControl"
        ], 
        "key": "enragedSentinel"
    }, 
    "ambushButton_personD": {
        "towerKey": "ambushTower_personD", 
        "name": "ambush", 
        "personHeld": "personD", 
        "isaacEntities": [
            "ambushSource_personD"
        ], 
        "key": "ambushButton_personD", 
        "managerKey": "personD", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "ambushSource_personD"
    }, 
    "exerciseConvert": {
        "currencyConversion": {
            "will": 0.5
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "exercise", 
        "key": "exerciseConvert"
    }, 
    "ambushButton_personA": {
        "towerKey": "ambushTower_personA", 
        "name": "ambush", 
        "personHeld": "personA", 
        "isaacEntities": [
            "ambushSource_personA"
        ], 
        "key": "ambushButton_personA", 
        "managerKey": "personA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "ambushSource_personA"
    }, 
    "ambushButton_personB": {
        "towerKey": "ambushTower_personB", 
        "name": "ambush", 
        "personHeld": "personB", 
        "isaacEntities": [
            "ambushSource_personB"
        ], 
        "key": "ambushButton_personB", 
        "managerKey": "personB", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "ambushSource_personB"
    }, 
    "ambushButton_personC": {
        "towerKey": "ambushTower_personC", 
        "name": "ambush", 
        "personHeld": "personC", 
        "isaacEntities": [
            "ambushSource_personC"
        ], 
        "key": "ambushButton_personC", 
        "managerKey": "personC", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "ambushSource_personC"
    }, 
    "bombSource": {
        "towerActions": [
            "mission3Action"
        ], 
        "sourceTrait": "agent", 
        "towerKey": "bombTower", 
        "key": "bombSource"
    }, 
    "fearEmotionPiece": {
        "emotion": "fear", 
        "key": "fearEmotionPiece"
    }, 
    "excitable": {
        "traitImage": "brownTower", 
        "currencies": {
            "will": 100
        }, 
        "name": "Excitable", 
        "key": "excitable"
    }, 
    "invite_mission1Action": {
        "name": "Invite to Spy", 
        "focusCost": 10, 
        "items": [
            "mission1Item"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_mission1Action", 
        "entitiesToMake": "inviteGoal_mission1Action", 
        "consumeCheck": 0
    }, 
    "makeTarget": {
        "opinionKey": "target", 
        "personKey": "TargetA", 
        "key": "makeTarget"
    }, 
    "ambushAction": {
        "name": "Ambush", 
        "focusCost": 100, 
        "items": [
            "ambushItem"
        ], 
        "requiredOpinions": [
            "target"
        ], 
        "makeMemoryChance": 0.15, 
        "currency": {
            "ambush": 300
        }, 
        "key": "ambushAction", 
        "consumeCheck": 1
    }, 
    "dateSadness": {
        "focusCost": 10, 
        "emotionsToAdd": {
            "sadness": 5
        }, 
        "name": "Date Sad", 
        "key": "dateSadness", 
        "spawnSourceKey": "self"
    }, 
    "friend": {
        "buttonKeys": [
            "talkButton"
        ], 
        "successOpinions": {
            "romance": 10
        }, 
        "name": "friend", 
        "key": "friend"
    }, 
    "chessTower": {
        "name": "chess", 
        "aliveEntities": {
            "playedWell": 10, 
            "playedPoor": 5
        }, 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "chess": 1
        }, 
        "sourceTrait": "lovesChess", 
        "key": "chessTower", 
        "icon": "CHESS"
    }, 
    "hurtful": {
        "name": "hurtful", 
        "key": "hurtful", 
        "aliveEntities": {
            "personHurt": 5
        }
    }, 
    "ambushTower_personD": {
        "name": "ambush", 
        "aliveEntities": {
            "closeCall": 5
        }, 
        "currency": {
            "ambush": 1
        }, 
        "sourceTrait": "personD", 
        "key": "ambushTower_personD", 
        "emotionsToAdd": {
            "fear": 1
        }, 
        "icon": "AMBUSH"
    }, 
    "target": {
        "buttonKeys": [
            "ambushButton"
        ], 
        "name": "target", 
        "key": "target"
    }, 
    "ambushTower_TargetA": {
        "name": "ambush", 
        "aliveEntities": {
            "closeCall": 5
        }, 
        "currency": {
            "ambush": 1
        }, 
        "sourceTrait": "TargetA", 
        "key": "ambushTower_TargetA", 
        "emotionsToAdd": {
            "fear": 1
        }, 
        "icon": "AMBUSH"
    }, 
    "flirtButton_personD": {
        "towerKey": "flirtTower_personD", 
        "name": "flirt", 
        "personHeld": "personD", 
        "isaacEntities": [
            "flirtSource_personD"
        ], 
        "key": "flirtButton_personD", 
        "managerKey": "personD", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "flirtSource_personD"
    }, 
    "findHouseWish": {
        "entitiesToKill": {
            "findHouseItem": 1
        }, 
        "timeToDeath": 240, 
        "focusCost": 10, 
        "spawnSourceKey": "holcomb", 
        "key": "findHouseWish", 
        "name": "Find House"
    }, 
    "flirtSource_agentE": {
        "towerActions": [
            "flirtAction", 
            "complimentAction"
        ], 
        "personHeld": "agentE", 
        "sourceTrait": "agentE", 
        "towerKey": "flirtTower_agentE", 
        "key": "flirtSource_agentE"
    }, 
    "shareDiscoveryAction": {
        "name": "Share", 
        "focusCost": 20, 
        "items": [
            "discoveryItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0.1, 
        "currency": {
            "chat": 250
        }, 
        "key": "shareDiscoveryAction", 
        "consumeCheck": 1
    }, 
    "inviteGoal_chessAction": {
        "entitiesToKill": {
            "chessItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_chessAction", 
        "name": "Invited Play"
    }, 
    "talkSource_personC": {
        "towerActions": [
            "shareEmotionAction"
        ], 
        "personHeld": "personC", 
        "sourceTrait": "personC", 
        "towerKey": "talkTower_personC", 
        "key": "talkSource_personC"
    }, 
    "jokeItem": {
        "name": "Joke", 
        "key": "jokeItem", 
        "spawnSourceKey": "adult"
    }, 
    "talkSource_personA": {
        "towerActions": [
            "shareEmotionAction"
        ], 
        "personHeld": "personA", 
        "sourceTrait": "personA", 
        "towerKey": "talkTower_personA", 
        "key": "talkSource_personA"
    }, 
    "rent": {
        "currencies": {
            "cash": -10
        }, 
        "name": "Rent", 
        "key": "rent"
    }, 
    "talkSource_personD": {
        "towerActions": [
            "shareEmotionAction"
        ], 
        "personHeld": "personD", 
        "sourceTrait": "personD", 
        "towerKey": "talkTower_personD", 
        "key": "talkSource_personD"
    }, 
    "travelTower": {
        "name": "travel", 
        "aliveEntities": {
            "jokeItem": 5, 
            "racistEvent": 10, 
            "discoveryItem": 5
        }, 
        "currency": {
            "travel": 1
        }, 
        "sourceTrait": "holcomb", 
        "key": "travelTower", 
        "icon": "TRAVEL"
    }, 
    "self": {
        "y": 8, 
        "x": 7, 
        "health": 100, 
        "name": "self", 
        "key": "self"
    }, 
    "lovesChess_ext": {
        "name": "Loves Chess", 
        "key": "lovesChess_ext", 
        "sourceKey": "lovesChess"
    }, 
    "chessSource": {
        "towerActions": [
            "chessAction", 
            "chessMatchAction"
        ], 
        "sourceTrait": "lovesChess", 
        "towerKey": "chessTower", 
        "key": "chessSource"
    }, 
    "invite_meditateAction": {
        "name": "Invite to Meditate", 
        "focusCost": 10, 
        "items": [
            "meditateItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_meditateAction", 
        "entitiesToMake": "inviteGoal_meditateAction", 
        "consumeCheck": 0
    }, 
    "playChess": {
        "entitiesToKill": {
            "chessItem": 1
        }, 
        "timeToDeath": 240, 
        "focusCost": 5, 
        "spawnSourceKey": "adult", 
        "key": "playChess", 
        "name": "Play Chess"
    }, 
    "dateAction": {
        "name": "Date", 
        "focusCost": 60, 
        "items": [
            "dateItem"
        ], 
        "requiredOpinions": [
            "dating"
        ], 
        "makeMemoryChance": 0.25, 
        "currency": {
            "date": 250
        }, 
        "key": "dateAction", 
        "consumeCheck": 1
    }, 
    "invite_playAction": {
        "name": "Invite to Play", 
        "focusCost": 10, 
        "items": [
            "playItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_playAction", 
        "entitiesToMake": "inviteGoal_playAction", 
        "consumeCheck": 0
    }, 
    "playedWell": {
        "emotionsToAdd": {
            "joy": 2
        }, 
        "name": "Played Well", 
        "key": "playedWell", 
        "spawnSourceKey": "adult"
    }, 
    "flirtTower_personD": {
        "currency": {
            "flirt": 1
        }, 
        "sourceTrait": "personD", 
        "name": "Flirt", 
        "key": "flirtTower_personD", 
        "icon": "FLIRT"
    }, 
    "flirtTower_personB": {
        "currency": {
            "flirt": 1
        }, 
        "sourceTrait": "personB", 
        "name": "Flirt", 
        "key": "flirtTower_personB", 
        "icon": "FLIRT"
    }, 
    "flirtTower_personC": {
        "currency": {
            "flirt": 1
        }, 
        "sourceTrait": "personC", 
        "name": "Flirt", 
        "key": "flirtTower_personC", 
        "icon": "FLIRT"
    }, 
    "flirtTower_personA": {
        "currency": {
            "flirt": 1
        }, 
        "sourceTrait": "personA", 
        "name": "Flirt", 
        "key": "flirtTower_personA", 
        "icon": "FLIRT"
    }, 
    "ringItem": {
        "name": "Ring", 
        "key": "ringItem", 
        "spawnSourceKey": "adult"
    }, 
    "mission2Item": {
        "name": "Secret Papers", 
        "key": "mission2Item", 
        "spawnSourceKey": "agent"
    }, 
    "adultButton": {
        "traitKey": "adult", 
        "traitCost": {
            "will": -100, 
            "experience": -1
        }, 
        "name": "adult", 
        "key": "adultButton"
    }, 
    "dateItem": {
        "name": "Date", 
        "key": "dateItem", 
        "spawnSourceKey": "adult"
    }, 
    "relaxSource": {
        "towerActions": [
            "relaxAction"
        ], 
        "sourceTrait": "holcomb", 
        "towerKey": "relaxTower", 
        "key": "relaxSource"
    }, 
    "chessButton": {
        "towerKey": "chessTower", 
        "name": "chess", 
        "tags": [
            "lovesChess"
        ], 
        "isaacEntities": [
            "chessSource"
        ], 
        "key": "chessButton", 
        "managerKey": "lovesChess", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "chessSource"
    }, 
    "flirtSource_personA": {
        "towerActions": [
            "flirtAction", 
            "complimentAction"
        ], 
        "personHeld": "personA", 
        "sourceTrait": "personA", 
        "towerKey": "flirtTower_personA", 
        "key": "flirtSource_personA"
    }, 
    "reportItem": {
        "name": "Report", 
        "key": "reportItem", 
        "spawnSourceKey": "agent"
    }, 
    "flirtSource_personC": {
        "towerActions": [
            "flirtAction", 
            "complimentAction"
        ], 
        "personHeld": "personC", 
        "sourceTrait": "personC", 
        "towerKey": "flirtTower_personC", 
        "key": "flirtSource_personC"
    }, 
    "flirtSource_personB": {
        "towerActions": [
            "flirtAction", 
            "complimentAction"
        ], 
        "personHeld": "personB", 
        "sourceTrait": "personB", 
        "towerKey": "flirtTower_personB", 
        "key": "flirtSource_personB"
    }, 
    "flirtSource_personD": {
        "towerActions": [
            "flirtAction", 
            "complimentAction"
        ], 
        "personHeld": "personD", 
        "sourceTrait": "personD", 
        "towerKey": "flirtTower_personD", 
        "key": "flirtSource_personD"
    }, 
    "evidenceItem": {
        "name": "Evidence", 
        "key": "evidenceItem", 
        "spawnSourceKey": "agent"
    }, 
    "dayEnergy": {
        "currencies": {
            "will": 500
        }, 
        "name": "daily energy", 
        "key": "dayEnergy"
    }, 
    "ambushButton_TargetA": {
        "towerKey": "ambushTower_TargetA", 
        "name": "ambush", 
        "personHeld": "TargetA", 
        "isaacEntities": [
            "ambushSource_TargetA"
        ], 
        "key": "ambushButton_TargetA", 
        "managerKey": "TargetA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "ambushSource_TargetA"
    }, 
    "playedPoor": {
        "emotionsToAdd": {
            "anger": 2
        }, 
        "name": "Played Poorly", 
        "key": "playedPoor", 
        "spawnSourceKey": "adult"
    }, 
    "chapter5": {
        "entitiesToMake": [
            "chapter6"
        ], 
        "makeOnCreateEntities": [
            "mission1Item", 
            "bombButton", 
            "makeTarget"
        ], 
        "name": "Zenith", 
        "key": "chapter5", 
        "goalsToCheck": [
            "mission3Action_agent", 
            "confession"
        ]
    }, 
    "chapter4": {
        "entitiesToMake": [
            "chapter5"
        ], 
        "makeOnCreateEntities": [
            "worldTerror", 
            "getEvidenceItem"
        ], 
        "name": "Escalation", 
        "key": "chapter4", 
        "goalsToCheck": [
            "haveMarriage", 
            "destroyEvidence_agent"
        ]
    }, 
    "relaxTower": {
        "currency": {
            "will": 1, 
            "relax": 1
        }, 
        "sourceTrait": "holcomb", 
        "name": "relax", 
        "key": "relaxTower", 
        "icon": "RELAX"
    }, 
    "chapter1": {
        "entitiesToMake": [
            "chapter2"
        ], 
        "makeOnCreateEntities": [
            "adultButton", 
            "holcombButton", 
            "findHouseWish", 
            "findHouseItem", 
            "findJobWish", 
            "findJobItem", 
            "startCash", 
            "startExperience"
        ], 
        "name": "Moving In", 
        "key": "chapter1", 
        "goalsToCheck": [
            "findHouse_holcomb", 
            "findJob_holcomb"
        ]
    }, 
    "chapter3": {
        "entitiesToMake": [
            "chapter4"
        ], 
        "makeOnCreateEntities": [
            "makeAgentE", 
            "agent", 
            "chessProject", 
            "haveDate"
        ], 
        "name": "It Begins", 
        "key": "chapter3", 
        "goalsToCheck": [
            "contactAgent_agentE", 
            "spyAction_agent", 
            "haveDate"
        ]
    }, 
    "chapter2": {
        "entitiesToMake": [
            "chapter3"
        ], 
        "makeOnCreateEntities": [
            "meetPersonItem", 
            "meetPersonButton", 
            "lovesChessButton", 
            "peopleGoal", 
            "friendGoal", 
            "workGoal", 
            "playChess", 
            "smallTalkItem"
        ], 
        "name": "Fitting In", 
        "key": "chapter2", 
        "goalsToCheck": [
            "peopleGoal", 
            "friendGoal", 
            "workGoal", 
            "playChess"
        ]
    }, 
    "meditateItem": {
        "name": "Meditate", 
        "key": "meditateItem", 
        "spawnSourceKey": "adult"
    }, 
    "chatTower_personC": {
        "currency": {
            "will": 1, 
            "chat": 1
        }, 
        "sourceTrait": "personC", 
        "name": "Chat", 
        "key": "chatTower_personC", 
        "icon": "CHAT"
    }, 
    "ambushSource_personC": {
        "towerActions": [
            "ambushAction"
        ], 
        "personHeld": "personC", 
        "sourceTrait": "personC", 
        "towerKey": "ambushTower_personC", 
        "key": "ambushSource_personC"
    }, 
    "ambushSource_personB": {
        "towerActions": [
            "ambushAction"
        ], 
        "personHeld": "personB", 
        "sourceTrait": "personB", 
        "towerKey": "ambushTower_personB", 
        "key": "ambushSource_personB"
    }, 
    "talkTower_personB": {
        "name": "Talk", 
        "damage": 20, 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "talk": 1
        }, 
        "sourceTrait": "personB", 
        "key": "talkTower_personB", 
        "icon": "TALK"
    }, 
    "spyButton": {
        "towerKey": "spyTower", 
        "name": "spy", 
        "tags": [
            "agent"
        ], 
        "isaacEntities": [
            "spySource"
        ], 
        "key": "spyButton", 
        "managerKey": "agent", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "spySource"
    }, 
    "talkTower_personD": {
        "name": "Talk", 
        "damage": 20, 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "talk": 1
        }, 
        "sourceTrait": "personD", 
        "key": "talkTower_personD", 
        "icon": "TALK"
    }, 
    "ambushSource_personD": {
        "towerActions": [
            "ambushAction"
        ], 
        "personHeld": "personD", 
        "sourceTrait": "personD", 
        "towerKey": "ambushTower_personD", 
        "key": "ambushSource_personD"
    }, 
    "talkTower_agentE": {
        "name": "Talk", 
        "damage": 20, 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "talk": 1
        }, 
        "sourceTrait": "agentE", 
        "key": "talkTower_agentE", 
        "icon": "TALK"
    }, 
    "married": {
        "name": "married", 
        "key": "married"
    }, 
    "invite_meetPersonAction": {
        "name": "Invite to Meet", 
        "focusCost": 10, 
        "items": [
            "meetPersonItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_meetPersonAction", 
        "entitiesToMake": "inviteGoal_meetPersonAction", 
        "consumeCheck": 0
    }, 
    "exerciseSource": {
        "towerActions": [
            "exerciseAction"
        ], 
        "sourceTrait": "adult", 
        "towerKey": "exerciseTower", 
        "key": "exerciseSource"
    }, 
    "worldTerror_ext": {
        "name": "World Terror", 
        "key": "worldTerror_ext", 
        "sourceKey": "worldTerror"
    }, 
    "lostControl": {
        "timeToDeath": 10, 
        "key": "lostControl", 
        "name": "lostControl"
    }, 
    "lethargy": {
        "traitImage": "pinkTower", 
        "currencies": {
            "will": -100
        }, 
        "name": "Lethargy", 
        "key": "lethargy"
    }, 
    "personHurt": {
        "focusCost": 10, 
        "emotionsToAdd": {
            "sadness": 5
        }, 
        "name": "Hurtful Person", 
        "key": "personHurt", 
        "spawnSourceKey": "self"
    }, 
    "flirtButton_personB": {
        "towerKey": "flirtTower_personB", 
        "name": "flirt", 
        "personHeld": "personB", 
        "isaacEntities": [
            "flirtSource_personB"
        ], 
        "key": "flirtButton_personB", 
        "managerKey": "personB", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "flirtSource_personB"
    }, 
    "flirtButton_personC": {
        "towerKey": "flirtTower_personC", 
        "name": "flirt", 
        "personHeld": "personC", 
        "isaacEntities": [
            "flirtSource_personC"
        ], 
        "key": "flirtButton_personC", 
        "managerKey": "personC", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "flirtSource_personC"
    }, 
    "flirtButton_personA": {
        "towerKey": "flirtTower_personA", 
        "name": "flirt", 
        "personHeld": "personA", 
        "isaacEntities": [
            "flirtSource_personA"
        ], 
        "key": "flirtButton_personA", 
        "managerKey": "personA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "flirtSource_personA"
    }, 
    "meetPersonAction": {
        "name": "Meet", 
        "focusCost": 40, 
        "items": [
            "meetPersonItem"
        ], 
        "makeMemoryChance": 0.5, 
        "currency": {
            "meetPerson": 150
        }, 
        "key": "meetPersonAction", 
        "entitiesToMake": [
            "meetPersonItem"
        ], 
        "consumeCheck": 1
    }, 
    "dateTower_agentE": {
        "name": "date", 
        "aliveEntities": {
            "dateAnger": 5, 
            "dateJoy": 5, 
            "dateFear": 5, 
            "dateSad": 5
        }, 
        "currency": {
            "date": 1
        }, 
        "sourceTrait": "agentE", 
        "key": "dateTower_agentE", 
        "icon": "DATE"
    }, 
    "personHealAction": {
        "health": 0
    }, 
    "nauseatedSentinel": {
        "emotionSentinel": "nauseated", 
        "activeEntities": [
            "lostControl"
        ], 
        "key": "nauseatedSentinel"
    }, 
    "haveMarriage": {
        "opinionGoal": "married", 
        "key": "haveMarriage"
    }, 
    "playButton": {
        "towerKey": "playTower", 
        "name": "play", 
        "tags": [
            "adult"
        ], 
        "isaacEntities": [
            "playSource"
        ], 
        "key": "playButton", 
        "managerKey": "adult", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "playSource"
    }, 
    "TargetA_ext": {
        "name": "Target A", 
        "key": "TargetA_ext", 
        "sourceKey": "TargetA"
    }, 
    "rememberAction": {
        "name": "Remember", 
        "focusCost": 20, 
        "items": [
            "rememberItem"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "remember": 300
        }, 
        "key": "rememberAction", 
        "entitiesToMake": [
            "rememberItem"
        ], 
        "consumeCheck": 1
    }, 
    "ambushTower_agentE": {
        "name": "ambush", 
        "aliveEntities": {
            "closeCall": 5
        }, 
        "currency": {
            "ambush": 1
        }, 
        "sourceTrait": "agentE", 
        "key": "ambushTower_agentE", 
        "emotionsToAdd": {
            "fear": 1
        }, 
        "icon": "AMBUSH"
    }, 
    "racistEvent": {
        "entities": {
            "racistThreat": 1, 
            "racistComment": 1
        }, 
        "key": "racistEvent"
    }, 
    "spyItem": {
        "name": "Spy", 
        "key": "spyItem", 
        "spawnSourceKey": "agent"
    }, 
    "inviteGoal_getEvidenceAction": {
        "entitiesToKill": {
            "getEvidenceItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_getEvidenceAction", 
        "name": "Invited Discover"
    }, 
    "personC_ext": {
        "name": "Person C", 
        "key": "personC_ext", 
        "sourceKey": "personC"
    }, 
    "inviteGoal_destroyEvidence": {
        "entitiesToKill": {
            "evidenceItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_destroyEvidence", 
        "name": "Invited Destroy"
    }, 
    "dateAnger": {
        "focusCost": 10, 
        "emotionsToAdd": {
            "anger": 5
        }, 
        "name": "Date Anger", 
        "key": "dateAnger", 
        "spawnSourceKey": "self"
    }, 
    "playTower": {
        "name": "play", 
        "aliveEntities": {
            "teamFail": 2, 
            "playedWell": 5, 
            "playedPoor": 5
        }, 
        "damageMultipliers": {
            "anger": 1, 
            "sadness": 2
        }, 
        "currency": {
            "play": 1
        }, 
        "sourceTrait": "adult", 
        "key": "playTower", 
        "emotionsToAdd": {
            "joy": 1
        }, 
        "icon": "PLAY"
    }, 
    "flirtAction": {
        "name": "Flirt", 
        "focusCost": 40, 
        "items": [
            "flirtItem"
        ], 
        "requiredOpinions": [
            "romance"
        ], 
        "makeMemoryChance": 0.25, 
        "currency": {
            "flirt": 250
        }, 
        "key": "flirtAction", 
        "entitiesToMake": {
            "flirtItem": 100, 
            "complimentItem": 10
        }, 
        "consumeCheck": 1
    }, 
    "chatButton_personD": {
        "towerKey": "chatTower_personD", 
        "name": "chat", 
        "personHeld": "personD", 
        "isaacEntities": [
            "chatSource_personD"
        ], 
        "key": "chatButton_personD", 
        "managerKey": "personD", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "chatSource_personD"
    }, 
    "rememberTower": {
        "currency": {
            "remember": 1
        }, 
        "name": "remember", 
        "key": "rememberTower", 
        "icon": "REMEMBER"
    }, 
    "chatButton_personA": {
        "towerKey": "chatTower_personA", 
        "name": "chat", 
        "personHeld": "personA", 
        "isaacEntities": [
            "chatSource_personA"
        ], 
        "key": "chatButton_personA", 
        "managerKey": "personA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "chatSource_personA"
    }, 
    "chatButton_personB": {
        "towerKey": "chatTower_personB", 
        "name": "chat", 
        "personHeld": "personB", 
        "isaacEntities": [
            "chatSource_personB"
        ], 
        "key": "chatButton_personB", 
        "managerKey": "personB", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "chatSource_personB"
    }, 
    "chatButton_personC": {
        "towerKey": "chatTower_personC", 
        "name": "chat", 
        "personHeld": "personC", 
        "isaacEntities": [
            "chatSource_personC"
        ], 
        "key": "chatButton_personC", 
        "managerKey": "personC", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "chatSource_personC"
    }, 
    "agentE_ext": {
        "name": "Agent E", 
        "key": "agentE_ext", 
        "sourceKey": "agentE"
    }, 
    "relaxConvert": {
        "currencyConversion": {
            "will": 1
        }, 
        "emotionsConversion": {
            "joy": 2
        }, 
        "currencyKey": "relax", 
        "key": "relaxConvert"
    }, 
    "agentE": {
        "knownPersonalityTraits": [
            "adult", 
            "holcomb"
        ], 
        "name": "Agent E", 
        "key": "agentE"
    }, 
    "proposal": {
        "entitiesToMake": [
            "buyRingItem"
        ], 
        "key": "proposal"
    }, 
    "smallTalkItem": {
        "name": "Small Talk", 
        "key": "smallTalkItem", 
        "spawnSourceKey": "adult"
    }, 
    "terrorEventEmotionSource": {
        "emotionsToAdd": {
            "fear": 5
        }, 
        "name": "Terror Event", 
        "key": "terrorEventEmotionSource", 
        "spawnSourceKey": "adult"
    }, 
    "TargetA": {
        "knownPersonalityTraits": [
            "adult", 
            "holcomb"
        ], 
        "name": "Target A", 
        "key": "TargetA"
    }, 
    "singleHealthComponent": {
        "health": 1
    }, 
    "chessMatchItem": {
        "name": "Chess Match", 
        "key": "chessMatchItem", 
        "spawnSourceKey": "adult"
    }, 
    "talkSource_personB": {
        "towerActions": [
            "shareEmotionAction"
        ], 
        "personHeld": "personB", 
        "sourceTrait": "personB", 
        "towerKey": "talkTower_personB", 
        "key": "talkSource_personB"
    }, 
    "chatTower_agentE": {
        "currency": {
            "will": 1, 
            "chat": 1
        }, 
        "sourceTrait": "agentE", 
        "name": "Chat", 
        "key": "chatTower_agentE", 
        "icon": "CHAT"
    }, 
    "cash": {
        "currencies": {
            "cash": 30
        }, 
        "name": "Cash", 
        "key": "cash"
    }, 
    "choreAction": {
        "name": "Clean", 
        "focusCost": 20, 
        "items": [
            "choreItem"
        ], 
        "makeMemoryChance": 0.05, 
        "currency": {
            "chores": 50
        }, 
        "key": "choreAction", 
        "consumeCheck": 1
    }, 
    "mission1Action": {
        "name": "Spy", 
        "focusCost": 80, 
        "items": [
            "mission1Item"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "spy": 250
        }, 
        "key": "mission1Action", 
        "entitiesToMake": [
            "mission2Item", 
            "confession"
        ], 
        "consumeCheck": 1
    }, 
    "startCash": {
        "currencies": {
            "cash": 100
        }, 
        "name": "Starting Cash", 
        "key": "startCash"
    }, 
    "playItem": {
        "name": "Play", 
        "key": "playItem", 
        "spawnSourceKey": "adult"
    }, 
    "mission1Item": {
        "name": "Police HQ", 
        "key": "mission1Item", 
        "spawnSourceKey": "agent"
    }, 
    "exerciseItem": {
        "name": "Exercise", 
        "key": "exerciseItem", 
        "spawnSourceKey": "adult"
    }, 
    "exerciseButton": {
        "towerKey": "exerciseTower", 
        "name": "exercise", 
        "tags": [
            "adult"
        ], 
        "isaacEntities": [
            "exerciseSource"
        ], 
        "key": "exerciseButton", 
        "managerKey": "adult", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "exerciseSource"
    }, 
    "racistComment": {
        "focusCost": 10, 
        "emotionsToAdd": {
            "anger": 2
        }, 
        "name": "Racist Comment", 
        "key": "racistComment", 
        "spawnSourceKey": "holcomb"
    }, 
    "driveCabAction": {
        "name": "Drive", 
        "focusCost": 40, 
        "items": [
            "driveCabItem"
        ], 
        "makeMemoryChance": 0.1, 
        "currency": {
            "travel": 300
        }, 
        "key": "driveCabAction", 
        "entitiesToMake": [
            "driveCabItem", 
            "cash"
        ], 
        "consumeCheck": 1
    }, 
    "didPoorly": {
        "emotionsToAdd": {
            "disgust": 2
        }, 
        "name": "Bad Session", 
        "key": "didPoorly", 
        "spawnSourceKey": "adult"
    }, 
    "findJob": {
        "name": "Find Job", 
        "focusCost": 40, 
        "items": [
            "findJobItem"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "travel": 150
        }, 
        "key": "findJob", 
        "entitiesToMake": [
            "driveCabItem"
        ], 
        "consumeCheck": 1
    }, 
    "inviteGoal_relaxAction": {
        "entitiesToKill": {
            "relaxItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_relaxAction", 
        "name": "Invited Relax"
    }, 
    "chatConvert": {
        "currencyConversion": {
            "will": 0.25
        }, 
        "emotionsConversion": {
            "joy": 1
        }, 
        "currencyKey": "chat", 
        "key": "chatConvert"
    }, 
    "romance": {
        "buttonKeys": [
            "flirtButton"
        ], 
        "successOpinions": {
            "dating": 10
        }, 
        "name": "romance", 
        "key": "romance"
    }, 
    "confessionItem": {
        "name": "Sin", 
        "key": "confessionItem", 
        "spawnSourceKey": "adult"
    }, 
    "inviteGoal_mission3Action": {
        "entitiesToKill": {
            "mission3Item": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_mission3Action", 
        "name": "Invited Bomb"
    }, 
    "spyGoal": {
        "entitiesToKill": {
            "spyItem": 1
        }, 
        "timeToDeath": 240, 
        "focusCost": 20, 
        "spawnSourceKey": "agent", 
        "key": "spyGoal", 
        "name": "Spy"
    }, 
    "shareEmotionItem": {
        "name": "Emotions", 
        "key": "shareEmotionItem", 
        "spawnSourceKey": "adult"
    }, 
    "lovesChess": {
        "isaacEntities": [
            "chessButton", 
            "chessItem"
        ], 
        "traitImage": "indigoTower", 
        "name": "Loves Chess", 
        "key": "lovesChess", 
        "aliveEntities": {
            "playChess": 5
        }
    }, 
    "personB": {
        "knownPersonalityTraits": [
            "adult", 
            "holcomb"
        ], 
        "name": "Person B", 
        "key": "personB", 
        "unknownPersonalityTraits": [
            "racist", 
            "lovesChess"
        ]
    }, 
    "personC": {
        "knownPersonalityTraits": [
            "adult", 
            "holcomb"
        ], 
        "name": "Person C", 
        "key": "personC", 
        "unknownPersonalityTraits": [
            "racist"
        ]
    }, 
    "personA": {
        "knownPersonalityTraits": [
            "adult", 
            "holcomb"
        ], 
        "name": "Person A", 
        "key": "personA", 
        "unknownPersonalityTraits": [
            "racist"
        ]
    }, 
    "personD": {
        "knownPersonalityTraits": [
            "adult", 
            "holcomb"
        ], 
        "name": "Person D", 
        "key": "personD"
    }, 
    "invite_rememberAction": {
        "name": "Invite to Remember", 
        "focusCost": 10, 
        "items": [
            "rememberItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_rememberAction", 
        "entitiesToMake": "inviteGoal_rememberAction", 
        "consumeCheck": 0
    }, 
    "lovesChessButton": {
        "traitKey": "lovesChess", 
        "traitCost": {
            "will": -100, 
            "experience": -1
        }, 
        "name": "Loves Chess", 
        "key": "lovesChessButton"
    }, 
    "invite_destroyEvidence": {
        "name": "Invite to Destroy", 
        "focusCost": 10, 
        "items": [
            "evidenceItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_destroyEvidence", 
        "entitiesToMake": "inviteGoal_destroyEvidence", 
        "consumeCheck": 0
    }, 
    "getEvidenceItem": {
        "name": "Mission", 
        "key": "getEvidenceItem", 
        "spawnSourceKey": "agent"
    }, 
    "workGoal": {
        "entitiesToKill": {
            "driveCabItem": 3
        }, 
        "timeToDeath": 240, 
        "focusCost": 5, 
        "spawnSourceKey": "holcomb", 
        "key": "workGoal", 
        "name": "Complete Work"
    }, 
    "activeWill": {
        "emotionSentinel": "active", 
        "currency": {
            "will": 3
        }, 
        "name": "Active Will", 
        "key": "activeWill"
    }, 
    "proposeAction": {
        "name": "Propose", 
        "focusCost": 80, 
        "items": [
            "ringItem"
        ], 
        "requiredOpinions": [
            "dating"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "date": 500
        }, 
        "key": "proposeAction", 
        "consumeCheck": 1
    }, 
    "ambushSource_TargetA": {
        "towerActions": [
            "ambushAction"
        ], 
        "personHeld": "TargetA", 
        "sourceTrait": "TargetA", 
        "towerKey": "ambushTower_TargetA", 
        "key": "ambushSource_TargetA"
    }, 
    "terrorEventCurrency": {
        "currencies": {
            "suspicion": 50
        }, 
        "name": "Terror Event", 
        "key": "terrorEventCurrency"
    }, 
    "dateTower_personD": {
        "name": "date", 
        "aliveEntities": {
            "dateAnger": 5, 
            "dateJoy": 5, 
            "dateFear": 5, 
            "dateSad": 5
        }, 
        "currency": {
            "date": 1
        }, 
        "sourceTrait": "personD", 
        "key": "dateTower_personD", 
        "icon": "DATE"
    }, 
    "dateTower_personB": {
        "name": "date", 
        "aliveEntities": {
            "dateAnger": 5, 
            "dateJoy": 5, 
            "dateFear": 5, 
            "dateSad": 5
        }, 
        "currency": {
            "date": 1
        }, 
        "sourceTrait": "personB", 
        "key": "dateTower_personB", 
        "icon": "DATE"
    }, 
    "dateTower_personC": {
        "name": "date", 
        "aliveEntities": {
            "dateAnger": 5, 
            "dateJoy": 5, 
            "dateFear": 5, 
            "dateSad": 5
        }, 
        "currency": {
            "date": 1
        }, 
        "sourceTrait": "personC", 
        "key": "dateTower_personC", 
        "icon": "DATE"
    }, 
    "dateTower_personA": {
        "name": "date", 
        "aliveEntities": {
            "dateAnger": 5, 
            "dateJoy": 5, 
            "dateFear": 5, 
            "dateSad": 5
        }, 
        "currency": {
            "date": 1
        }, 
        "sourceTrait": "personA", 
        "key": "dateTower_personA", 
        "icon": "DATE"
    }, 
    "chessMatchAction": {
        "entitiesToHeal": {
            "chessProject": 40
        }, 
        "name": "Play Match", 
        "focusCost": 80, 
        "items": [
            "chessMatchItem"
        ], 
        "makeMemoryChance": 0.25, 
        "currency": {
            "chess": 250
        }, 
        "key": "chessMatchAction", 
        "entitiesToMake": [
            "chessMatchItem"
        ], 
        "consumeCheck": 1
    }, 
    "chessItem": {
        "name": "Chess", 
        "key": "chessItem", 
        "spawnSourceKey": "adult"
    }, 
    "panelRenderComponent": {
        "lineHeight": 14
    }, 
    "talkTower_TargetA": {
        "name": "Talk", 
        "damage": 20, 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "talk": 1
        }, 
        "sourceTrait": "TargetA", 
        "key": "talkTower_TargetA", 
        "icon": "TALK"
    }, 
    "talkSource_agentE": {
        "towerActions": [
            "shareEmotionAction"
        ], 
        "personHeld": "agentE", 
        "sourceTrait": "agentE", 
        "towerKey": "talkTower_agentE", 
        "key": "talkSource_agentE"
    }, 
    "startExperience": {
        "currencies": {
            "experience": 2
        }, 
        "name": "start experience", 
        "key": "startExperience"
    }, 
    "clickText": {
        "touchable": "true", 
        "timeToDeath": 30
    }, 
    "flirtTower_TargetA": {
        "currency": {
            "flirt": 1
        }, 
        "sourceTrait": "TargetA", 
        "name": "Flirt", 
        "key": "flirtTower_TargetA", 
        "icon": "FLIRT"
    }, 
    "findJobWish": {
        "entitiesToKill": {
            "findJobItem": 1
        }, 
        "timeToDeath": 240, 
        "focusCost": 10, 
        "spawnSourceKey": "holcomb", 
        "key": "findJobWish", 
        "name": "Find Job"
    }, 
    "empathic": {
        "currency": {
            "talk": 1
        }, 
        "name": "Empathic", 
        "key": "empathic", 
        "traitImage": "steelblueTower"
    }, 
    "playerInform": {
        "timeToDeath": 15
    }, 
    "rememberButton": {
        "towerKey": "rememberTower", 
        "name": "remember", 
        "isaacEntities": [
            "rememberSource"
        ], 
        "key": "rememberButton", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "rememberSource"
    }, 
    "happyTraitMaker": {
        "traitMakerEmotion": "joy", 
        "traitsToMake": [
            "excitable", 
            "outgoing"
        ], 
        "key": "happyTraitMaker"
    }, 
    "inviteGoal_exerciseAction": {
        "entitiesToKill": {
            "exerciseItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_exerciseAction", 
        "name": "Invited Exercise"
    }, 
    "inviteGoal_mission1Action": {
        "entitiesToKill": {
            "mission1Item": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_mission1Action", 
        "name": "Invited Spy"
    }, 
    "discoveryItem": {
        "name": "Discovery", 
        "key": "discoveryItem", 
        "spawnSourceKey": "holcomb"
    }, 
    "tower": {
        "touchable": "true"
    }, 
    "peopleGoal": {
        "key": "peopleGoal", 
        "timeToDeath": 240, 
        "focusCost": 5, 
        "spawnSourceKey": "holcomb", 
        "entitiesToCreate": {
            "acquaintance": 3
        }, 
        "name": "Meet 3 People"
    }, 
    "meetPersonItem": {
        "name": "New Person", 
        "key": "meetPersonItem", 
        "spawnSourceKey": "holcomb"
    }, 
    "chatSource_TargetA": {
        "towerActions": [
            "smallTalkAction", 
            "contactAgent", 
            "shareDiscoveryAction", 
            "jokeAction", 
            "invite_findHouse", 
            "invite_findJob", 
            "invite_meetPersonAction", 
            "invite_choreAction", 
            "invite_exerciseAction", 
            "invite_meditateAction", 
            "invite_driveCabAction", 
            "invite_chessAction", 
            "invite_spyAction", 
            "invite_chessMatchAction", 
            "invite_relaxAction", 
            "invite_getEvidenceAction", 
            "invite_destroyEvidence", 
            "invite_buyRingAction", 
            "invite_mission1Action", 
            "invite_mission2Action", 
            "invite_mission3Action", 
            "invite_playAction", 
            "invite_rememberAction"
        ], 
        "personHeld": "TargetA", 
        "sourceTrait": "TargetA", 
        "towerKey": "chatTower_TargetA", 
        "key": "chatSource_TargetA"
    }, 
    "spyTower": {
        "name": "spy", 
        "aliveEntities": {
            "closeCall": 10
        }, 
        "currency": {
            "spy": 1
        }, 
        "sourceTrait": "agent", 
        "key": "spyTower", 
        "emotionsToAdd": {
            "fear": 2
        }, 
        "icon": "SPY"
    }, 
    "meditateConvert": {
        "currencyConversion": {
            "will": 0.25
        }, 
        "currencyKey": "meditate", 
        "key": "meditateConvert"
    }, 
    "sadTraitMaker": {
        "traitMakerEmotion": "sadness", 
        "traitsToMake": [
            "lethargy", 
            "resilient", 
            "empathic"
        ], 
        "key": "sadTraitMaker"
    }, 
    "findJobItem": {
        "name": "Find Job", 
        "key": "findJobItem", 
        "spawnSourceKey": "holcomb"
    }, 
    "shareEmotionAction": {
        "name": "Share Emotion", 
        "focusCost": 60, 
        "items": [
            "shareEmotionItem"
        ], 
        "requiredOpinions": [
            "friend"
        ], 
        "makeMemoryChance": 0.1, 
        "currency": {
            "talk": 250
        }, 
        "key": "shareEmotionAction", 
        "entitiesToMake": [
            "shareEmotionItem"
        ], 
        "consumeCheck": 1
    }, 
    "flirtConvert": {
        "currencyConversion": {
            "will": 1
        }, 
        "emotionsConversion": {
            "joy": 2
        }, 
        "currencyKey": "flirt", 
        "key": "flirtConvert"
    }, 
    "acquaintance": {
        "buttonKeys": [
            "chatButton"
        ], 
        "successOpinions": {
            "friend": 20
        }, 
        "name": "acquaintance", 
        "key": "acquaintance"
    }, 
    "brokenWill": {
        "emotionSentinel": "broken", 
        "currency": {
            "will": -5
        }, 
        "name": "Broken Will", 
        "key": "brokenWill"
    }, 
    "dating": {
        "buttonKeys": [
            "dateButton"
        ], 
        "successOpinions": {
            "proposal": 5
        }, 
        "name": "dating", 
        "key": "dating"
    }, 
    "bombButton": {
        "towerKey": "bombTower", 
        "name": "bomb", 
        "tags": [
            "agent"
        ], 
        "isaacEntities": [
            "bombSource"
        ], 
        "key": "bombButton", 
        "managerKey": "agent", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "bombSource"
    }, 
    "invite_getEvidenceAction": {
        "name": "Invite to Discover", 
        "focusCost": 10, 
        "items": [
            "getEvidenceItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_getEvidenceAction", 
        "entitiesToMake": "inviteGoal_getEvidenceAction", 
        "consumeCheck": 0
    }, 
    "inviteGoal_driveCabAction": {
        "entitiesToKill": {
            "driveCabItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_driveCabAction", 
        "name": "Invited Drive"
    }, 
    "invite_relaxAction": {
        "name": "Invite to Relax", 
        "focusCost": 10, 
        "items": [
            "relaxItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_relaxAction", 
        "entitiesToMake": "inviteGoal_relaxAction", 
        "consumeCheck": 0
    }, 
    "didWell": {
        "emotionsToAdd": {
            "joy": 2
        }, 
        "name": "Good Session", 
        "key": "didWell", 
        "spawnSourceKey": "adult"
    }, 
    "dateJoy": {
        "focusCost": 10, 
        "emotionsToAdd": {
            "joy": 5
        }, 
        "name": "Date Joy", 
        "key": "dateJoy", 
        "spawnSourceKey": "self"
    }, 
    "outgoing_ext": {
        "name": "Outgoing", 
        "key": "outgoing_ext", 
        "sourceKey": "outgoing"
    }, 
    "calculatedCurrencyComponent": {
        "factors": {
            "flow": 0.5
        }
    }, 
    "knownAgent": {
        "name": "known agent", 
        "key": "knownAgent"
    }, 
    "playSource": {
        "towerActions": [
            "playAction"
        ], 
        "sourceTrait": "adult", 
        "towerKey": "playTower", 
        "key": "playSource"
    }, 
    "friendGoal": {
        "key": "friendGoal", 
        "timeToDeath": 240, 
        "focusCost": 5, 
        "spawnSourceKey": "holcomb", 
        "entitiesToCreate": {
            "friend": 1
        }, 
        "name": "Make a friend"
    }, 
    "dateSource_TargetA": {
        "towerActions": [
            "dateAction", 
            "proposeAction"
        ], 
        "personHeld": "TargetA", 
        "sourceTrait": "TargetA", 
        "towerKey": "dateTower_TargetA", 
        "key": "dateSource_TargetA"
    }, 
    "ambushTower_personA": {
        "name": "ambush", 
        "aliveEntities": {
            "closeCall": 5
        }, 
        "currency": {
            "ambush": 1
        }, 
        "sourceTrait": "personA", 
        "key": "ambushTower_personA", 
        "emotionsToAdd": {
            "fear": 1
        }, 
        "icon": "AMBUSH"
    }, 
    "dateButton_personA": {
        "towerKey": "dateTower_personA", 
        "name": "date", 
        "personHeld": "personA", 
        "isaacEntities": [
            "dateSource_personA"
        ], 
        "key": "dateButton_personA", 
        "managerKey": "personA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "dateSource_personA"
    }, 
    "holcombTerrorEmotionSource": {
        "emotionsToAdd": {
            "fear": 5
        }, 
        "name": "Terror Event", 
        "key": "holcombTerrorEmotionSource", 
        "spawnSourceKey": "holcomb"
    }, 
    "inviteGoal_mission2Action": {
        "entitiesToKill": {
            "mission2Item": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_mission2Action", 
        "name": "Invited Deliver"
    }, 
    "chatSource_agentE": {
        "towerActions": [
            "smallTalkAction", 
            "contactAgent", 
            "shareDiscoveryAction", 
            "jokeAction", 
            "invite_findHouse", 
            "invite_findJob", 
            "invite_meetPersonAction", 
            "invite_choreAction", 
            "invite_exerciseAction", 
            "invite_meditateAction", 
            "invite_driveCabAction", 
            "invite_chessAction", 
            "invite_spyAction", 
            "invite_chessMatchAction", 
            "invite_relaxAction", 
            "invite_getEvidenceAction", 
            "invite_destroyEvidence", 
            "invite_buyRingAction", 
            "invite_mission1Action", 
            "invite_mission2Action", 
            "invite_mission3Action", 
            "invite_playAction", 
            "invite_rememberAction"
        ], 
        "personHeld": "agentE", 
        "sourceTrait": "agentE", 
        "towerKey": "chatTower_agentE", 
        "key": "chatSource_agentE"
    }, 
    "relaxButton": {
        "towerKey": "relaxTower", 
        "name": "relax", 
        "tags": [
            "holcomb"
        ], 
        "isaacEntities": [
            "relaxSource"
        ], 
        "key": "relaxButton", 
        "managerKey": "holcomb", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "relaxSource"
    }, 
    "dateTower_TargetA": {
        "name": "date", 
        "aliveEntities": {
            "dateAnger": 5, 
            "dateJoy": 5, 
            "dateFear": 5, 
            "dateSad": 5
        }, 
        "currency": {
            "date": 1
        }, 
        "sourceTrait": "TargetA", 
        "key": "dateTower_TargetA", 
        "icon": "DATE"
    }, 
    "complimentItem": {
        "name": "Compliment", 
        "key": "complimentItem", 
        "spawnSourceKey": "adult"
    }, 
    "dayCounterComponent": {
        "ticks": 120
    }, 
    "relaxedWill": {
        "emotionSentinel": "relaxed", 
        "currency": {
            "will": 4
        }, 
        "name": "Relaxed Will", 
        "key": "relaxedWill"
    }, 
    "teamFail": {
        "emotionsToAdd": {
            "sadness": 2
        }, 
        "name": "Let Team Down", 
        "key": "teamFail", 
        "spawnSourceKey": "adult"
    }, 
    "racist": {
        "traitImage": "magentaTower", 
        "name": "Racist", 
        "key": "racist", 
        "aliveEntities": {
            "racistEvent": 5
        }
    }, 
    "meetPersonTower": {
        "name": "meet person", 
        "aliveEntities": {
            "jokeItem": 5, 
            "racistEvent": 20
        }, 
        "currency": {
            "meetPerson": 1
        }, 
        "sourceTrait": "holcomb", 
        "key": "meetPersonTower", 
        "icon": "MEET PERSON"
    }, 
    "travelButton": {
        "towerKey": "travelTower", 
        "name": "travel", 
        "tags": [
            "holcomb"
        ], 
        "isaacEntities": [
            "travelSource"
        ], 
        "key": "travelButton", 
        "managerKey": "holcomb", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "travelSource"
    }, 
    "dateSource_agentE": {
        "towerActions": [
            "dateAction", 
            "proposeAction"
        ], 
        "personHeld": "agentE", 
        "sourceTrait": "agentE", 
        "towerKey": "dateTower_agentE", 
        "key": "dateSource_agentE"
    }, 
    "flirtTower_agentE": {
        "currency": {
            "flirt": 1
        }, 
        "sourceTrait": "agentE", 
        "name": "Flirt", 
        "key": "flirtTower_agentE", 
        "icon": "FLIRT"
    }, 
    "inviteGoal_rememberAction": {
        "entitiesToKill": {
            "rememberItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_rememberAction", 
        "name": "Invited Remember"
    }, 
    "chatTower_personA": {
        "currency": {
            "will": 1, 
            "chat": 1
        }, 
        "sourceTrait": "personA", 
        "name": "Chat", 
        "key": "chatTower_personA", 
        "icon": "CHAT"
    }, 
    "chatTower_personB": {
        "currency": {
            "will": 1, 
            "chat": 1
        }, 
        "sourceTrait": "personB", 
        "name": "Chat", 
        "key": "chatTower_personB", 
        "icon": "CHAT"
    }, 
    "invite_exerciseAction": {
        "name": "Invite to Exercise", 
        "focusCost": 10, 
        "items": [
            "exerciseItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_exerciseAction", 
        "entitiesToMake": "inviteGoal_exerciseAction", 
        "consumeCheck": 0
    }, 
    "chatTower_personD": {
        "currency": {
            "will": 1, 
            "chat": 1
        }, 
        "sourceTrait": "personD", 
        "name": "Chat", 
        "key": "chatTower_personD", 
        "icon": "CHAT"
    }, 
    "invite_chessAction": {
        "name": "Invite to Play", 
        "focusCost": 10, 
        "items": [
            "chessItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_chessAction", 
        "entitiesToMake": "inviteGoal_chessAction", 
        "consumeCheck": 0
    }, 
    "invite_buyRingAction": {
        "name": "Invite to Buy", 
        "focusCost": 10, 
        "items": [
            "buyRingItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_buyRingAction", 
        "entitiesToMake": "inviteGoal_buyRingAction", 
        "consumeCheck": 0
    }, 
    "personTower": {
        "touchable": "true"
    }, 
    "inviteGoal_playAction": {
        "entitiesToKill": {
            "playItem": 1
        }, 
        "timeToDeath": 60, 
        "focusCost": 5, 
        "spawnSourceKey": "self", 
        "key": "inviteGoal_playAction", 
        "name": "Invited Play"
    }, 
    "rememberSource": {
        "towerActions": [
            "rememberAction"
        ], 
        "towerKey": "rememberTower", 
        "key": "rememberSource"
    }, 
    "playAction": {
        "name": "Play", 
        "focusCost": 40, 
        "items": [
            "playItem"
        ], 
        "makeMemoryChance": 0.05, 
        "currency": {
            "play": 300
        }, 
        "key": "playAction", 
        "entitiesToMake": [
            "playItem"
        ], 
        "consumeCheck": 1
    }, 
    "mission3Action": {
        "name": "Bomb", 
        "focusCost": 100, 
        "items": [
            "mission3Item"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "bomb": 250
        }, 
        "key": "mission3Action", 
        "entitiesToMake": [
            "confession"
        ], 
        "consumeCheck": 1, 
        "towerEffect": {
            "fear": 4
        }
    }, 
    "invite_mission2Action": {
        "name": "Invite to Deliver", 
        "focusCost": 10, 
        "items": [
            "mission2Item"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0, 
        "currency": {
            "chat": 250
        }, 
        "key": "invite_mission2Action", 
        "entitiesToMake": "inviteGoal_mission2Action", 
        "consumeCheck": 0
    }, 
    "terrorEvent": {
        "entitiesToMake": [
            "terrorEventCurrency", 
            "terrorEventEmotionSource", 
            "holcombTerrorEmotionSource"
        ], 
        "key": "terrorEvent"
    }, 
    "dateButton_agentE": {
        "towerKey": "dateTower_agentE", 
        "name": "date", 
        "personHeld": "agentE", 
        "isaacEntities": [
            "dateSource_agentE"
        ], 
        "key": "dateButton_agentE", 
        "managerKey": "agentE", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "dateSource_agentE"
    }, 
    "chatSource_personC": {
        "towerActions": [
            "smallTalkAction", 
            "contactAgent", 
            "shareDiscoveryAction", 
            "jokeAction", 
            "invite_findHouse", 
            "invite_findJob", 
            "invite_meetPersonAction", 
            "invite_choreAction", 
            "invite_exerciseAction", 
            "invite_meditateAction", 
            "invite_driveCabAction", 
            "invite_chessAction", 
            "invite_spyAction", 
            "invite_chessMatchAction", 
            "invite_relaxAction", 
            "invite_getEvidenceAction", 
            "invite_destroyEvidence", 
            "invite_buyRingAction", 
            "invite_mission1Action", 
            "invite_mission2Action", 
            "invite_mission3Action", 
            "invite_playAction", 
            "invite_rememberAction"
        ], 
        "personHeld": "personC", 
        "sourceTrait": "personC", 
        "towerKey": "chatTower_personC", 
        "key": "chatSource_personC"
    }, 
    "chatSource_personB": {
        "towerActions": [
            "smallTalkAction", 
            "contactAgent", 
            "shareDiscoveryAction", 
            "jokeAction", 
            "invite_findHouse", 
            "invite_findJob", 
            "invite_meetPersonAction", 
            "invite_choreAction", 
            "invite_exerciseAction", 
            "invite_meditateAction", 
            "invite_driveCabAction", 
            "invite_chessAction", 
            "invite_spyAction", 
            "invite_chessMatchAction", 
            "invite_relaxAction", 
            "invite_getEvidenceAction", 
            "invite_destroyEvidence", 
            "invite_buyRingAction", 
            "invite_mission1Action", 
            "invite_mission2Action", 
            "invite_mission3Action", 
            "invite_playAction", 
            "invite_rememberAction"
        ], 
        "personHeld": "personB", 
        "sourceTrait": "personB", 
        "towerKey": "chatTower_personB", 
        "key": "chatSource_personB"
    }, 
    "chatSource_personA": {
        "towerActions": [
            "smallTalkAction", 
            "contactAgent", 
            "shareDiscoveryAction", 
            "jokeAction", 
            "invite_findHouse", 
            "invite_findJob", 
            "invite_meetPersonAction", 
            "invite_choreAction", 
            "invite_exerciseAction", 
            "invite_meditateAction", 
            "invite_driveCabAction", 
            "invite_chessAction", 
            "invite_spyAction", 
            "invite_chessMatchAction", 
            "invite_relaxAction", 
            "invite_getEvidenceAction", 
            "invite_destroyEvidence", 
            "invite_buyRingAction", 
            "invite_mission1Action", 
            "invite_mission2Action", 
            "invite_mission3Action", 
            "invite_playAction", 
            "invite_rememberAction"
        ], 
        "personHeld": "personA", 
        "sourceTrait": "personA", 
        "towerKey": "chatTower_personA", 
        "key": "chatSource_personA"
    }, 
    "relaxItem": {
        "name": "Park", 
        "key": "relaxItem", 
        "spawnSourceKey": "holcomb"
    }, 
    "chatSource_personD": {
        "towerActions": [
            "smallTalkAction", 
            "contactAgent", 
            "shareDiscoveryAction", 
            "jokeAction", 
            "invite_findHouse", 
            "invite_findJob", 
            "invite_meetPersonAction", 
            "invite_choreAction", 
            "invite_exerciseAction", 
            "invite_meditateAction", 
            "invite_driveCabAction", 
            "invite_chessAction", 
            "invite_spyAction", 
            "invite_chessMatchAction", 
            "invite_relaxAction", 
            "invite_getEvidenceAction", 
            "invite_destroyEvidence", 
            "invite_buyRingAction", 
            "invite_mission1Action", 
            "invite_mission2Action", 
            "invite_mission3Action", 
            "invite_playAction", 
            "invite_rememberAction"
        ], 
        "personHeld": "personD", 
        "sourceTrait": "personD", 
        "towerKey": "chatTower_personD", 
        "key": "chatSource_personD"
    }, 
    "flirtButton_TargetA": {
        "towerKey": "flirtTower_TargetA", 
        "name": "flirt", 
        "personHeld": "TargetA", 
        "isaacEntities": [
            "flirtSource_TargetA"
        ], 
        "key": "flirtButton_TargetA", 
        "managerKey": "TargetA", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "flirtSource_TargetA"
    }, 
    "buyRingAction": {
        "name": "Buy", 
        "focusCost": 40, 
        "items": [
            "buyRingItem"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "travel": 100
        }, 
        "startCost": {
            "cash": -500
        }, 
        "key": "buyRingAction", 
        "entitiesToMake": [
            "ringItem"
        ], 
        "consumeCheck": 1
    }, 
    "chessProject": {
        "isaacEntities": [
            "chessMatchItem"
        ], 
        "name": "Chess Tournament", 
        "key": "chessProject", 
        "timeToDeath": 240
    }, 
    "getEvidenceAction": {
        "name": "Discover", 
        "focusCost": 80, 
        "items": [
            "getEvidenceItem"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "travel": 100
        }, 
        "key": "getEvidenceAction", 
        "entitiesToMake": [
            "evidenceItem"
        ], 
        "consumeCheck": 1
    }, 
    "talkButton_agentE": {
        "towerKey": "talkTower_agentE", 
        "name": "talk", 
        "personHeld": "agentE", 
        "isaacEntities": [
            "talkSource_agentE"
        ], 
        "key": "talkButton_agentE", 
        "managerKey": "agentE", 
        "towerCost": {
            "will": -100
        }, 
        "sourceKey": "talkSource_agentE"
    }, 
    "jokeAction": {
        "name": "Tell", 
        "focusCost": 20, 
        "items": [
            "jokeItem"
        ], 
        "requiredOpinions": [
            "acquaintance"
        ], 
        "makeMemoryChance": 0.1, 
        "currency": {
            "chat": 250
        }, 
        "key": "jokeAction", 
        "consumeCheck": 1
    }, 
    "ambushTower_personB": {
        "name": "ambush", 
        "aliveEntities": {
            "closeCall": 5
        }, 
        "currency": {
            "ambush": 1
        }, 
        "sourceTrait": "personB", 
        "key": "ambushTower_personB", 
        "emotionsToAdd": {
            "fear": 1
        }, 
        "icon": "AMBUSH"
    }, 
    "ambushTower_personC": {
        "name": "ambush", 
        "aliveEntities": {
            "closeCall": 5
        }, 
        "currency": {
            "ambush": 1
        }, 
        "sourceTrait": "personC", 
        "key": "ambushTower_personC", 
        "emotionsToAdd": {
            "fear": 1
        }, 
        "icon": "AMBUSH"
    }, 
    "ecstaticSentinel": {
        "emotionSentinel": "ecstatic", 
        "activeEntities": [
            "lostControl"
        ], 
        "key": "ecstaticSentinel"
    }, 
    "meditateTower": {
        "name": "meditate", 
        "damageMultipliers": {
            "anger": 1, 
            "joy": 1, 
            "sadness": 1, 
            "fear": 1, 
            "disgust": 1
        }, 
        "currency": {
            "meditate": 1
        }, 
        "sourceTrait": "adult", 
        "key": "meditateTower", 
        "icon": "MEDITATE"
    }, 
    "joyEmotionPiece": {
        "emotion": "joy", 
        "key": "joyEmotionPiece"
    }, 
    "complimentAction": {
        "name": "Give", 
        "focusCost": 40, 
        "items": [
            "complimentItem"
        ], 
        "requiredOpinions": [
            "romance"
        ], 
        "makeMemoryChance": 0.1, 
        "currency": {
            "flirt": 250
        }, 
        "key": "complimentAction", 
        "consumeCheck": 1
    }, 
    "spyAction": {
        "name": "Spy", 
        "focusCost": 80, 
        "items": [
            "spyItem"
        ], 
        "makeMemoryChance": 1, 
        "currency": {
            "spy": 100
        }, 
        "key": "spyAction", 
        "entitiesToMake": [
            "spyItem", 
            "reportItem", 
            "spyFear"
        ], 
        "consumeCheck": 1
    }, 
    "wishesToTalk": {
        "traitImage": "orangeTower", 
        "name": "Wishes To Talk", 
        "key": "wishesToTalk", 
        "aliveEntities": {
            "talkWish": 5
        }
    }
};

var ecs = {
    ambushButton_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushButton_agentE)));
        return ecs.personTowerButton(args);
    },
    holcomb_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.holcomb_ext)));
        return ecs.sourceExtension(args);
    },
    memoryComponent: function(args){
        return {
            coreMemory: false,
            args: args,
            ticksToCoreMemory: 240,
            memoryGoal: (args["memoryGoal"] === undefined) ? false : args["memoryGoal"],
            ecsKey: "memoryComponent",
            memoryActives: args['memoryActives'],
            memoryEmotions: args['memoryEmotions']
        };
    },
    personRelationshipExec: function(args){
        return {
            personLearnChance: 0.2,
            args: args,
            personHealthDiff: (args["personHealthDiff"] === undefined) ? 0 : args["personHealthDiff"],
            ecsKey: "personRelationshipExec",
            execute: personRelationshipExec
        };
    },
    gameStageNotificationComponent: function(args){
        return {
            notificationFunctions: {goalComplete: checkStageComplete},
            ecsKey: "gameStageNotificationComponent",
            args: args
        };
    },
    driveCabItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.driveCabItem)));
        return ecs.item(args);
    },
    stateComponent: function(args){
        return {
            paused: false,
            ecsKey: "stateComponent",
            args: args,
            playerControlled: false
        };
    },
    findAdjacentPosition: function(args){
        return {
            ecsKey: "findAdjacentPosition",
            args: args,
            execute: findAdjacentPosition,
            adjacentTo: args['adjacentTo']
        };
    },
    currencyWish: function(args){
        args["focusCost"] = 2;
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)].concat([ecs.emotionSourceRenderComponent(args), ecs.focusRenderComponent(args)]),
            args: args,
            goalTrackComponent: ecs.currencyGoalTrackComponent(args),
            emotionSourceComponent: ecs.infiniteEmotionSourceComponent(args),
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "currencyWish",
            squashComponent: (args.squashCurrency) ? ecs.squashComponent(args) : undefined,
            killExecutables: [ecs.timedMakeEntities(args)].concat([ecs.wishTraitHealthExec(args)]),
            healthComponent: ecs.singleHealthComponent(args),
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args),
            notificationComponents: [ecs.currencyGoalNotificationComponent(args)]
        };
    },
    empathic_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.empathic_ext)));
        return ecs.sourceExtension(args);
    },
    currencyStoreRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "currencyStoreRenderComponent",
            args: args,
            renderState: "default",
            render: currencyStoreRender
        };
    },
    meditateAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meditateAction)));
        return ecs.itemAction(args);
    },
    invite_mission3Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_mission3Action)));
        return ecs.invitationAction(args);
    },
    dateFear: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateFear)));
        return ecs.emotionSource(args);
    },
    currencyStoreComponent: function(args){
        return {
            ecsKey: "currencyStoreComponent",
            args: args,
            storeCurrency: storeCurrency,
            satisfiesCurrencyReq: satisfiesCurrencyReq,
            currencies: (args["currencies"] === undefined) ? {} : args["currencies"]
        };
    },
    invitationAction: function(args){
        args["personHeld"] = args.traitKey;
        args["key"] = mangleIdentityWithTrait(args.key, args.traitKey);
        args["origKey"] = args.key;
        return {
            itemActionComponent: ecs.personActionComponent(args),
            goalTrackComponent: ecs.personActionGoalTrackComponent(args),
            args: args,
            personHeldComponent: ecs.personHeldComponent(args),
            ecsKey: "invitationAction",
            rendererComponents: [ecs.focusRenderComponent(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    ambushTower_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushTower_personD)));
        return ecs.personTower(args);
    },
    clickKillComponent: function(args){
        return {
            ecsKey: "clickKillComponent",
            args: args,
            onClick: clickKill
        };
    },
    exerciseTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.exerciseTower)));
        return ecs.tower(args);
    },
    personAquariumRenderComponent: function(args){
        return {
            name: args['trait'],
            render: personAquariumRender,
            args: args,
            priority: 6,
            ecsKey: "personAquariumRenderComponent",
            renderState: args['sourceTrait']
        };
    },
    controlPanelRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "controlPanelRenderComponent",
            args: args,
            renderState: "default",
            render: controlPanelRender
        };
    },
    emotionState: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "emotionState",
            args: args,
            identityComponent: ecs.identityComponent(args),
            emotionStateComponent: ecs.emotionStateComponent(args)
        };
    },
    bombTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.bombTower)));
        return ecs.tower(args);
    },
    chatTower_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatTower_TargetA)));
        return ecs.personTower(args);
    },
    currencyGoal: function(args){
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)],
            goalTrackComponent: ecs.currencyGoalTrackComponent(args),
            args: args,
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "currencyGoal",
            killExecutables: [ecs.timedMakeEntities(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            notificationComponents: [ecs.currencyGoalNotificationComponent(args)]
        };
    },
    itemComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args)],
            spawnSourceKey: args['spawnSourceKey'],
            args: args,
            canSlotItem: canSlotItem,
            ecsKey: "itemComponent",
            sourceHealth: (args.source) ? args.source.healthComponent.health : undefined
        };
    },
    overwhelmedWill: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.overwhelmedWill)));
        return ecs.emotionCurrencyTicker(args);
    },
    button: function(args){
        return {
            controlComponent: args['controlComponent'],
            ecsKey: "button",
            args: args,
            identityComponent: ecs.identityComponent(args)
        };
    },
    towerEmotionSourceComponent: function(args){
        return {
            ticks: (args["ticks"] === undefined) ? 2 : args["ticks"],
            spawnSourceKey: args['sourceTrait'],
            spawnCount: 0,
            spawnComplete: resetEmotionSource,
            args: args,
            shouldTick: shouldTowerEmotionSourceTick,
            emotions: (args["emotions"] === undefined) ? unrollDict(args.emotionsToAdd) : args["emotions"],
            traits: (args["traits"] === undefined) ? [] : args["traits"],
            ecsKey: "towerEmotionSourceComponent",
            impulseTicks: (args["impulseTicks"] === undefined) ? 60 : args["impulseTicks"],
            border: "#ffff00"
        };
    },
    proposeItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.proposeItem)));
        return ecs.item(args);
    },
    emotionSourceUiRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "emotionSourceUiRenderComponent",
            args: args,
            renderState: "default",
            render: emotionSourceUiRender
        };
    },
    sadnessEmotionPiece: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.sadnessEmotionPiece)));
        return ecs.emotionPiece(args);
    },
    controlPanel: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.controlPanel)));
        args["draggable"] = false;
        return {
            rendererComponents: [ecs.controlPanelRenderComponent(args)],
            controlPanelComponent: ecs.controlPanelComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            args: args,
            ecsKey: "controlPanel",
            keyPressComponent: ecs.controlPanelKeyPressComponent(args),
            uiClickComponent: ecs.controlPanelClickComponent(args)
        };
    },
    entityCreateNotificationComponent: function(args){
        return {
            notificationFunctions: {addedEntities: entityAddedNotification},
            ecsKey: "entityCreateNotificationComponent",
            args: args
        };
    },
    currencyStore: function(args){
        return {
            rendererComponents: [ecs.currencyStoreRenderComponent(args)],
            args: args,
            ecsKey: "currencyStore",
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    angerEmotionPiece: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.angerEmotionPiece)));
        return ecs.emotionPiece(args);
    },
    choresConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.choresConvert)));
        return ecs.currencyConverter(args);
    },
    goalTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)],
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            ecsKey: "goalTrackComponent",
            getInnerSt: blankStringFunction,
            checkCompleted: args['checkCompleted']
        };
    },
    personCreateExec: function(args){
        return {
            ecsKey: "personCreateExec",
            args: args,
            execute: personCreateExec
        };
    },
    controlComponent: function(args){
        return {
            makeEntity: args['makeEntity'],
            ecsKey: "controlComponent",
            args: args,
            canMakeEntity: args['canMakeEntity'],
            checkMakePos: args['checkMakePos']
        };
    },
    lostControlDeathExec: function(args){
        return {
            ecsKey: "lostControlDeathExec",
            args: args,
            execute: lostControlDeathExec,
            makeMemoryComponent: ecs.makeMemoryComponent(args)
        };
    },
    keyPressComponent: function(args){
        return {
            ecsKey: "keyPressComponent",
            args: args,
            handleKeyPress: args['handleKeyPress']
        };
    },
    makeLostControlClickText: function(args){
        return {
            ecsKey: "makeLostControlClickText",
            args: args,
            execute: makeLostControlClickText
        };
    },
    haveDate: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.haveDate)));
        return ecs.opinionGoal(args);
    },
    bulletRenderComponent: function(args){
        return {
            render: bulletRender,
            bonus: args['bonus'],
            args: args,
            bulletSourcePos: args['bulletSourcePos'],
            damage: args['damage'],
            priority: 9,
            ecsKey: "bulletRenderComponent",
            renderState: "default",
            bulletEndPos: args['bulletEndPos']
        };
    },
    lostControlRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "lostControlRenderComponent",
            args: args,
            renderState: "default",
            render: lostControlRender
        };
    },
    resilient: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.resilient)));
        return ecs.trait(args);
    },
    personAction: function(args){
        args["personHeld"] = args.traitKey;
        args["key"] = mangleIdentityWithTrait(args.key, args.traitKey);
        args["origKey"] = args.key;
        return {
            itemActionComponent: ecs.personActionComponent(args),
            goalTrackComponent: ecs.personActionGoalTrackComponent(args),
            args: args,
            personHeldComponent: ecs.personHeldComponent(args),
            ecsKey: "personAction",
            rendererComponents: [ecs.focusRenderComponent(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    boost: function(args){
        return {
            rendererComponents: [ecs.boostRenderComponent(args)],
            boostSlotComponent: ecs.boostSlotComponent(args),
            args: args,
            createExecutables: [ecs.randomOpenPositionExec(args)],
            ecsKey: "boost",
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    buyRingItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.buyRingItem)));
        return ecs.item(args);
    },
    outgoing: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.outgoing)));
        return ecs.trait(args);
    },
    invite_driveCabAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_driveCabAction)));
        return ecs.invitationAction(args);
    },
    boostSlotComponent: function(args){
        return {
            traits: args['traits'],
            ecsKey: "boostSlotComponent",
            args: args,
            checkEntityForBoost: checkEntityForBoost
        };
    },
    tickEmotionComponent: function(args){
        return {
            currency: args['currency'],
            args: args,
            traits: (args["traits"] === undefined) ? [] : args["traits"],
            ecsKey: "tickEmotionComponent",
            towerSourceKey: (args["towerSourceKey"] === undefined) ? false : args["towerSourceKey"],
            checkTickContinue: checkTickContinue
        };
    },
    personTimedItemDeathExec: function(args){
        return {
            personFailHealthDiff: args['personFailHealthDiff'],
            ecsKey: "personTimedItemDeathExec",
            args: args,
            execute: personTimedItemDeathExec,
            sourceKey: args.source.identityComponent.key
        };
    },
    producerWishMakingComponent: function(args){
        return {
            ecsKey: "producerWishMakingComponent",
            args: args,
            wishKey: "currencyWish",
            canMakeWish: canMakeCurrencyWish,
            makeWish: makeCurrencyWish
        };
    },
    dateButton_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateButton_TargetA)));
        return ecs.personTowerButton(args);
    },
    entityCreateWish: function(args){
        args["focusCost"] = 2;
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)].concat([ecs.emotionSourceRenderComponent(args), ecs.focusRenderComponent(args)]),
            args: args,
            goalTrackComponent: ecs.entityCreateTrackComponent(args),
            emotionSourceComponent: ecs.infiniteEmotionSourceComponent(args),
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "entityCreateWish",
            squashComponent: (args.squashCurrency) ? ecs.squashComponent(args) : undefined,
            killExecutables: [ecs.timedMakeEntities(args)].concat([ecs.wishTraitHealthExec(args)]),
            healthComponent: ecs.singleHealthComponent(args),
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args),
            notificationComponents: [ecs.entityCreateNotificationComponent(args)]
        };
    },
    flirtButton_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtButton_agentE)));
        return ecs.personTowerButton(args);
    },
    wishesToTalk_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.wishesToTalk_ext)));
        return ecs.sourceExtension(args);
    },
    path: function(args){
        args["y"] = args['start'][1];
        args["x"] = args['start'][0];
        args["name"] = 'path(' + args.x + ',' + args.y + ')';;
        args["key"] = 'path_' + args.x + '_' + args.y + '_' + args.end[0] + '_' + args.end[1];;
        return {
            rendererComponents: [ecs.pathConnectRenderComponent(args)],
            args: args,
            pathMoveComponent: ecs.pathMoveComponent(args),
            ecsKey: "path",
            healthComponent: ecs.hundredHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    rentMaker: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.rentMaker)));
        return ecs.dailyEntityMaker(args);
    },
    inviteGoal_spyAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_spyAction)));
        return ecs.invitationGoal(args);
    },
    personD_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personD_ext)));
        return ecs.sourceExtension(args);
    },
    traitMarkingComponent: function(args){
        return {
            storedEmotion: dictFromPairs(_.map(KEY_EMOTIONS, function(key){ return [key, 0]; })),
            ecsKey: "traitMarkingComponent",
            args: args,
            emotionCountToReset: 10000
        };
    },
    playerTriggeredNotification: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "playerTriggeredNotification",
            args: args,
            identityComponent: ecs.IdentityComponent(args),
            notifyComponent: ecs.notifyComponent(args)
        };
    },
    addPersonAndOpinion: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "addPersonAndOpinion",
            args: args,
            createExecutables: [ecs.addPersonAndOpinionExec(args)]
        };
    },
    featureItemActionExec: function(args){
        return {
            execCurrencyChange: args['execCurrencyChange'],
            ecsKey: "featureItemActionExec",
            args: args,
            execCurrencyKey: args['execCurrencyKey'],
            execute: featureItemActionExec
        };
    },
    traitRenderComponent: function(args){
        return {
            traitImage: args['traitImage'],
            render: traitRender,
            args: args,
            priority: 6,
            ecsKey: "traitRenderComponent",
            renderState: "default"
        };
    },
    talkButton_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkButton_personD)));
        return ecs.personTowerButton(args);
    },
    talkButton_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkButton_personA)));
        return ecs.personTowerButton(args);
    },
    talkButton_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkButton_personB)));
        return ecs.personTowerButton(args);
    },
    timedMakeEntities: function(args){
        return {
            ecsKey: "timedMakeEntities",
            args: args,
            execute: timedMakeEntities,
            timedOutEntities: (args["timedOutEntities"] === undefined) ? [] : args["timedOutEntities"]
        };
    },
    currencyGoalNotificationComponent: function(args){
        return {
            notificationFunctions: {currencyChange: goalCurrencyNotification},
            ecsKey: "currencyGoalNotificationComponent",
            args: args
        };
    },
    personScreenRenderComponent: function(args){
        return {
            priority: 6,
            ecsKey: "personScreenRenderComponent",
            args: args,
            renderState: args['key'],
            render: personScreenRender
        };
    },
    opinion: function(args){
        return {
            opinionComponent: ecs.opinionComponent(args),
            args: args,
            personHeldComponent: ecs.personHeldComponent(args),
            executeComponent: ecs.aliveMakeComponent(args),
            ecsKey: "opinion",
            createExecutables: [ecs.opinionCreateExec(args)],
            healthComponent: ecs.hundredHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    memoryUiRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "memoryUiRenderComponent",
            args: args,
            renderState: "default",
            render: memoryUiRender
        };
    },
    memorySentinelComponent: function(args){
        return {
            sentinel: memorySentinel,
            active: undefined,
            ecsKey: "memorySentinelComponent",
            args: args,
            lastActive: undefined
        };
    },
    meetPersonConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meetPersonConvert)));
        return ecs.currencyConverter(args);
    },
    bulletTickComponent: function(args){
        return {
            ecsKey: "bulletTickComponent",
            args: args,
            tick: bulletTick
        };
    },
    playedPoor: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playedPoor)));
        return ecs.emotionSource(args);
    },
    damageComponent: function(args){
        return {
            targetCount: (args["targetCount"] === undefined) ? 1 : args["targetCount"],
            bonusDamagePerTower: (args["bonusDamagePerTower"] === undefined) ? 5 : args["bonusDamagePerTower"],
            args: args,
            ticks: 0,
            damage: (args["damage"] === undefined) ? 10 : args["damage"],
            damageMultipliers: args['damageMultipliers'],
            ecsKey: "damageComponent",
            impulseTicks: (args["impulseTicks"] === undefined) ? 2 : args["impulseTicks"],
            triggerComponents: []
        };
    },
    entityKillNotificationComponent: function(args){
        return {
            notificationFunctions: {killedEntities: entityKillNotification},
            ecsKey: "entityKillNotificationComponent",
            args: args
        };
    },
    executable: function(args){
        return {
            ecsKey: "executable",
            args: args,
            execute: args['execute']
        };
    },
    goalCompleteExec: function(args){
        return {
            ecsKey: "goalCompleteExec",
            args: args,
            execute: goalCompleteExec
        };
    },
    memoryClickComponent: function(args){
        return {
            ecsKey: "memoryClickComponent",
            args: args,
            onClick: memoryOnClick
        };
    },
    dateButton_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateButton_personB)));
        return ecs.personTowerButton(args);
    },
    dateButton_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateButton_personC)));
        return ecs.personTowerButton(args);
    },
    dateButton_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateButton_personA)));
        return ecs.personTowerButton(args);
    },
    dateButton_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateButton_personD)));
        return ecs.personTowerButton(args);
    },
    aliveMakeComponent: function(args){
        return {
            ecsKey: "aliveMakeComponent",
            args: args,
            executable: ecs.aliveMakeExec(args),
            ticks: 10,
            impulseTicks: 10
        };
    },
    inviteGoal_findHouse: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_findHouse)));
        return ecs.invitationGoal(args);
    },
    memory: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.memory)));
        args["touchable"] = true;
        args["name"] = 'memory #' + args.uid;
        args["key"] = 'memory_' + args.uid;
        args["health"] = (args["health"] === undefined) ? 75 : args["health"];
        return {
            mapSpawnComponent: ecs.builtSourceMapSpawnComponent(args),
            rendererComponents: [ecs.memoryRenderComponent(args), ecs.memoryUiRenderComponent(args), ecs.sourceInfoRender(args), ecs.sourceActionRender(args)],
            sentinelComponent: ecs.memorySentinelComponent(args),
            memoryComponent: ecs.memoryComponent(args),
            isaacEntityComponent: ecs.memoryIsaacEntityComponent(args),
            traitStatusComponent: ecs.traitStatusComponent(args),
            experienceComponent: ecs.experienceComponent(args),
            args: args,
            createExecutables: [ecs.randomOpenPositionExec(args)],
            ecsKey: "memory",
            clickComponent: ecs.memoryClickComponent(args),
            entityManagerComponent: ecs.entityManagerComponent(args),
            healthComponent: ecs.healthComponent(args),
            uniqueComponent: ecs.builtSourceUniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            tickComponent: ecs.memoryTickComponent(args)
        };
    },
    mapEmotion: function(args){
        args["emotion"] = args.source.damageableComponent.emotion;
        args["currencies"] = simpleDict(args.emotion, 20);
        return {
            rendererComponents: [ecs.currencyStoreRenderComponent(args), ecs.mapEmotionRenderComponent(args)],
            damageableComponent: ecs.damageableComponent(args),
            args: args,
            ecsKey: "mapEmotion",
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            healthComponent: ecs.hundredHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    sourceExtensionRenderComponent: function(args){
        return {
            priority: 6,
            ecsKey: "sourceExtensionRenderComponent",
            args: args,
            renderState: "default",
            render: sourceExtensionRender
        };
    },
    killEntityComponent: function(args){
        return {
            entitiesToKill: (args["entitiesToKill"] === undefined) ? [] : args["entitiesToKill"],
            ecsKey: "killEntityComponent",
            args: args,
            execute: executeKillEntities
        };
    },
    trait: function(args){
        args["touchable"] = true;
        args["health"] = (args["health"] === undefined) ? 75 : args["health"];
        return {
            mapSpawnComponent: ecs.builtSourceMapSpawnComponent(args),
            rendererComponents: [ecs.sourceInfoRender(args), ecs.sourceActionRender(args), ecs.traitRenderComponent(args), ecs.currencyStoreRenderComponent(args), ecs.traitScreenRenderComponent(args)],
            sentinelComponent: ecs.healthSentinelComponent(args),
            isaacEntityComponent: ecs.isaacEntityComponent(args),
            traitStatusComponent: ecs.traitStatusComponent(args),
            experienceComponent: ecs.experienceComponent(args),
            args: args,
            executeComponent: ecs.aliveMakeComponent(args),
            ecsKey: "trait",
            clickComponent: ecs.traitClickComponent(args),
            entityManagerComponent: ecs.entityManagerComponent(args),
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            healthComponent: ecs.healthComponent(args),
            uniqueComponent: ecs.builtSourceUniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            dayResponseComponent: (args.dailyEntities) ? ecs.traitDayResponseComponent(args) : undefined,
            tickEmotionComponent: (args.currency) ? ecs.tickEmotionComponent(args) : undefined,
            tickComponent: ecs.traitTickComponent(args)
        };
    },
    pathButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.pathButton)));
        return {
            ecsKey: "pathButton",
            rendererComponents: [ecs.pathButtonRenderComponent(args)],
            identityComponent: ecs.identityComponent(args),
            args: args
        };
    },
    personTowerButton: function(args){
        args["tags"] = [args.personHeld];
        args["tags"] = (args["tags"] === undefined) ? [(args.source) ? args.source.identityComponent.key : 'default'] : args["tags"];
        return {
            isaacEntityComponent: ecs.isaacEntityComponent(args),
            rendererComponents: [ecs.towerButtonRender(args)],
            buttonControlComponent: ecs.towerControlComponent(args),
            args: args,
            personHeldComponent: ecs.personHeldComponent(args),
            ecsKey: "personTowerButton",
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    spySource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.spySource)));
        return ecs.towerSource(args);
    },
    gameStageRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "gameStageRenderComponent",
            args: args,
            renderState: "default",
            render: gameStageRender
        };
    },
    adult: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.adult)));
        return ecs.trait(args);
    },
    inviteGoal_meetPersonAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_meetPersonAction)));
        return ecs.invitationGoal(args);
    },
    holcombButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.holcombButton)));
        return ecs.traitButton(args);
    },
    mission3Item: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.mission3Item)));
        return ecs.item(args);
    },
    contactItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.contactItem)));
        return ecs.item(args);
    },
    uiClickComponent: function(args){
        return {
            uiClick: uiClick,
            ecsKey: "uiClickComponent",
            args: args
        };
    },
    playerSerializeComponent: function(args){
        return {
            ecsKey: "playerSerializeComponent",
            serialize: playerSerialize,
            args: args
        };
    },
    tickComponent: function(args){
        return {
            ecsKey: "tickComponent",
            args: args,
            tick: args['tick']
        };
    },
    racist_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.racist_ext)));
        return ecs.sourceExtension(args);
    },
    activatableSentinelComponent: function(args){
        return {
            sentinel: activatableSentinel,
            ecsKey: "activatableSentinelComponent",
            args: args
        };
    },
    racistThreat: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.racistThreat)));
        return ecs.emotionSource(args);
    },
    emotionSourceUiClickComponent: function(args){
        return {
            uiClick: emotionSourceUiClick,
            ecsKey: "emotionSourceUiClickComponent",
            args: args
        };
    },
    pathVelocityComponent: function(args){
        return {
            args: args,
            ecsKey: "pathVelocityComponent",
            lastPath: false,
            path: false,
            forward: true,
            velocity: 2,
            pathsCrossed: 0
        };
    },
    sourceExtension: function(args){
        args["touchable"] = true;
        return {
            mapSpawnComponent: ecs.sourceExtensionMapSpawnComponent(args),
            rendererComponents: [ecs.sourceExtensionRenderComponent(args)],
            sentinelComponent: ecs.sourceExtensionSentinelComponent(args),
            args: args,
            positionComponent: ecs.positionComponent(args),
            ecsKey: "sourceExtension",
            clickComponent: ecs.sourceExtensionClickComponent(args),
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            identityComponent: ecs.identityComponent(args),
            sourceExtensionComponent: ecs.sourceExtensionComponent(args)
        };
    },
    personB_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personB_ext)));
        return ecs.sourceExtension(args);
    },
    currencyBoost: function(args){
        return {
            rendererComponents: [ecs.boostRenderComponent(args)],
            boostSlotComponent: ecs.boostSlotComponent(args),
            args: args,
            createExecutables: [ecs.randomOpenPositionExec(args)],
            ecsKey: "currencyBoost",
            currencyBoostComponent: ecs.currencyBoostComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    activateRenderComponent: function(args){
        return {
            render: activateRender,
            args: args,
            activated: false,
            priority: 2,
            ecsKey: "activateRenderComponent",
            renderState: "default"
        };
    },
    hundredHealthComponent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.hundredHealthComponent)));
        return {
            ecsKey: "hundredHealthComponent",
            args: args,
            health: args['health'],
            maxHealth: args['health'],
            damageFactor: (args["damageFactor"] === undefined) ? 1 : args["damageFactor"]
        };
    },
    discoveryItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.discoveryItem)));
        return ecs.item(args);
    },
    traitDayResponseComponent: function(args){
        return {
            dayChange: args['dayChange'],
            dailyEntities: args['dailyEntities'],
            args: args,
            ecsKey: "traitDayResponseComponent",
            dailyEntityCounts: {},
            dayEnd: args['dayEnd'],
            dayStart: traitDayStart
        };
    },
    itemActionComponent: function(args){
        return {
            checkItemForAction: checkItemForAction,
            items: args['items'],
            args: args,
            startCost: (args["startCost"] === undefined) ? {will: -25} : args["startCost"],
            slottedItem: undefined,
            ecsKey: "itemActionComponent",
            xp: _.reduce(args.currency, addFunction, 0) / 25,
            consumeCheck: args['consumeCheck'],
            towerEffect: args['towerEffect']
        };
    },
    executeComponent: function(args){
        return {
            ecsKey: "executeComponent",
            args: args,
            executable: args['executable'],
            ticks: 10,
            impulseTicks: 10
        };
    },
    personAquariumPiece: function(args){
        args["sourceTrait"] = args.source ? args.source.identityComponent.key : undefined;
        args["planeOfExistence"] = args.sourceTrait;
        return {
            rendererComponents: [ecs.personAquariumRenderComponent(args)],
            args: args,
            personAquariumPieceComponent: ecs.personAquariumPieceComponent(args),
            createExecutables: [ecs.randomOpenPositionExec(args)],
            ecsKey: "personAquariumPiece",
            healthComponent: ecs.singleHealthComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    rememberItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.rememberItem)));
        return ecs.item(args);
    },
    chatButton_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatButton_TargetA)));
        return ecs.personTowerButton(args);
    },
    emotionPieceRenderComponent: function(args){
        return {
            priority: 8,
            ecsKey: "emotionPieceRenderComponent",
            args: args,
            renderState: "default",
            render: emotionPieceRender
        };
    },
    goal: function(args){
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)],
            goalTrackComponent: args['goalTrackComponent'],
            args: args,
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "goal",
            killExecutables: [ecs.timedMakeEntities(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    emotionBoostSourceComponent: function(args){
        return {
            args: args,
            spawnSourceKey: args['spawnSourceKey'],
            spawnCount: 0,
            spawnComplete: resetEmotionSource,
            ticks: (args["ticks"] === undefined) ? 2 : args["ticks"],
            shouldTick: shouldEmotionBoostTick,
            emotions: (args["emotions"] === undefined) ? unrollDict(args.emotionsToAdd) : args["emotions"],
            traits: (args["traits"] === undefined) ? [] : args["traits"],
            ecsKey: "emotionBoostSourceComponent",
            impulseTicks: (args["impulseTicks"] === undefined) ? 60 : args["impulseTicks"],
            border: "#ffff00"
        };
    },
    mission2Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.mission2Action)));
        return ecs.itemAction(args);
    },
    holcomb: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.holcomb)));
        return ecs.trait(args);
    },
    makeAgentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.makeAgentE)));
        return ecs.addPersonAndOpinion(args);
    },
    inviteGoal_chessMatchAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_chessMatchAction)));
        return ecs.invitationGoal(args);
    },
    personActionComponent: function(args){
        return {
            baseCheckItemForAction: checkItemForAction,
            checkItemForAction: personCheckItemForAction,
            items: args['items'],
            requiredOpinions: args['requiredOpinions'],
            args: args,
            slottedItem: undefined,
            ecsKey: "personActionComponent",
            xp: _.reduce(args.currency, addFunction, 0) / 25,
            startCost: (args["startCost"] === undefined) ? {will: -25} : args["startCost"],
            consumeCheck: args['consumeCheck'],
            towerEffect: args['towerEffect']
        };
    },
    memoryItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.memoryItem)));
        return {
            itemComponent: ecs.itemComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            args: args,
            ecsKey: "memoryItem",
            killExecutables: [ecs.itemKillExec(args), ecs.goalCompleteExec(args), ecs.memoryPonderExec(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args),
            wishMakingComponent: ecs.itemWishMakingComponent(args),
            createModifyComponent: ecs.createModifyComponent(args)
        };
    },
    aliveMakeExec: function(args){
        args["aliveEntities"] = (args["aliveEntities"] === undefined) ? [] : args["aliveEntities"];
        return {
            entitiesToMake: args['aliveEntities'],
            args: args,
            execute: executeMakeEntities,
            ecsKey: "aliveMakeExec"
        };
    },
    focusRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "focusRenderComponent",
            args: args,
            renderState: "default",
            render: focusRender
        };
    },
    emotionSourceRenderComponent: function(args){
        return {
            priority: 8,
            ecsKey: "emotionSourceRenderComponent",
            args: args,
            renderState: "default",
            render: emotionSourceRender
        };
    },
    talkSource_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkSource_TargetA)));
        return ecs.personTowerSource(args);
    },
    findHouse: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.findHouse)));
        return ecs.itemAction(args);
    },
    playConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playConvert)));
        return ecs.currencyConverter(args);
    },
    ambushSource_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushSource_agentE)));
        return ecs.personTowerSource(args);
    },
    infoPanel: function(args){
        args["x"] = (args["x"] === undefined) ? width - 275 : args["x"];
        return {
            rendererComponents: [ecs.panelRenderComponent(args)],
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            args: args,
            panelComponent: ecs.panelComponent(args),
            ecsKey: "infoPanel",
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            uiClickComponent: ecs.uiClickComponent(args)
        };
    },
    inviteGoal_choreAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_choreAction)));
        return ecs.invitationGoal(args);
    },
    traitMakerComponent: function(args){
        return {
            ecsKey: "traitMakerComponent",
            args: args,
            traitMakerEmotion: args['traitMakerEmotion'],
            traitsToMake: args['traitsToMake']
        };
    },
    singleEmotionTick: function(args){
        return {
            tickEmotionComponent: ecs.tickEmotionComponent(args),
            args: args,
            ecsKey: "singleEmotionTick",
            tickComponent: ecs.healthBleedTickComponent(args),
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    killDayEndComponent: function(args){
        args["dayEnd"] = dayEndKillEntity;
        return {
            ecsKey: "killDayEndComponent",
            dayEnd: args['dayEnd'],
            dayStart: args['dayStart'],
            args: args,
            dayChange: args['dayChange']
        };
    },
    depresssedSentinel: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.depresssedSentinel)));
        return ecs.emotionSentinel(args);
    },
    spellComponent: function(args){
        return {
            spellCost: args['spellCost'],
            spellButtonFunction: undefined,
            ecsKey: "spellComponent",
            args: args,
            spellFn: args['spellFn']
        };
    },
    talkTower_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkTower_personA)));
        return ecs.personTower(args);
    },
    creepRenderComponent: function(args){
        return {
            render: creepRender,
            args: args,
            activated: 0,
            priority: 8,
            ecsKey: "creepRenderComponent",
            renderState: "default"
        };
    },
    chatButton_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatButton_agentE)));
        return ecs.personTowerButton(args);
    },
    ambushSource_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushSource_personA)));
        return ecs.personTowerSource(args);
    },
    personKillExec: function(args){
        return {
            ecsKey: "personKillExec",
            args: args,
            execute: personKillExec
        };
    },
    spyFear: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.spyFear)));
        return ecs.emotionSource(args);
    },
    traitButtonRender: function(args){
        return {
            priority: 8,
            ecsKey: "traitButtonRender",
            args: args,
            renderState: "default",
            render: traitButtonRender
        };
    },
    talkTower_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkTower_personC)));
        return ecs.personTower(args);
    },
    dateSource_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateSource_personA)));
        return ecs.personTowerSource(args);
    },
    dateSource_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateSource_personC)));
        return ecs.personTowerSource(args);
    },
    dateSource_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateSource_personB)));
        return ecs.personTowerSource(args);
    },
    notificationComponent: function(args){
        return {
            notificationFunctions: args['notificationFunctions'],
            ecsKey: "notificationComponent",
            args: args
        };
    },
    inviteGoal_meditateAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_meditateAction)));
        return ecs.invitationGoal(args);
    },
    memoryTowerSource: function(args){
        args["sourceTrait"] = args.source ? args.source.identityComponent.tags[0] : undefined;
        return {
            sentinelComponent: ecs.healthSentinelComponent(args),
            args: args,
            towerSourceComponent: ecs.towerSourceComponent(args),
            ecsKey: "memoryTowerSource",
            slotComponent: ecs.slotComponent(args),
            healthComponent: ecs.hundredHealthComponent(args),
            uniqueComponent: ecs.assertUniqueComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    flirtItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtItem)));
        return ecs.item(args);
    },
    talkConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkConvert)));
        return ecs.currencyConverter(args);
    },
    itemWishMakingComponent: function(args){
        return {
            ecsKey: "itemWishMakingComponent",
            args: args,
            canMakeWish: trueFunction,
            makeWish: makeItemWish
        };
    },
    worldTerror: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.worldTerror)));
        return ecs.trait(args);
    },
    invite_findJob: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_findJob)));
        return ecs.invitationAction(args);
    },
    distractedWill: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.distractedWill)));
        return ecs.emotionCurrencyTicker(args);
    },
    excitable_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.excitable_ext)));
        return ecs.sourceExtension(args);
    },
    invitationGoalTrackComponent: function(args){
        return {
            entitiesToKill: args['entitiesToKill'],
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)].concat([ecs.healEntities(args)]),
            completed: false,
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            ecsKey: "invitationGoalTrackComponent",
            getInnerSt: getEntityKillInnerSt,
            checkCompleted: checkForEntityKillSuccess
        };
    },
    resilient_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.resilient_ext)));
        return ecs.sourceExtension(args);
    },
    spell: function(args){
        return {
            ecsKey: "spell",
            rendererComponents: [ecs.spellRenderComponent(args)],
            identityComponent: ecs.identityComponent(args),
            args: args,
            spellComponent: ecs.spellComponent(args)
        };
    },
    travelConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.travelConvert)));
        return ecs.currencyConverter(args);
    },
    invite_choreAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_choreAction)));
        return ecs.invitationAction(args);
    },
    memoryMaker: function(args){
        return {
            ecsKey: "memoryMaker",
            args: args,
            makeMemoryComponent: ecs.makeMemoryComponent(args)
        };
    },
    agent_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.agent_ext)));
        return ecs.sourceExtension(args);
    },
    choreSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.choreSource)));
        return ecs.towerSource(args);
    },
    invite_chessMatchAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_chessMatchAction)));
        return ecs.invitationAction(args);
    },
    day: function(args){
        return {
            dayCounterComponent: ecs.dayCounterComponent(args),
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "day",
            rendererComponents: [ecs.dayRenderComponent(args)],
            args: args
        };
    },
    gameStateEntity: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.gameStateEntity)));
        return {
            rendererSystemComponent: ecs.rendererSystemComponent(args),
            args: args,
            ecsKey: "gameStateEntity",
            uniqueComponent: ecs.assertUniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            emotionStateSystemComponent: ecs.emotionStateSystemComponent(args)
        };
    },
    emotionPieceComponent: function(args){
        return {
            emotion: args['emotion'],
            ecsKey: "emotionPieceComponent",
            args: args
        };
    },
    traitMaker: function(args){
        return {
            ecsKey: "traitMaker",
            args: args,
            identityComponent: ecs.identityComponent(args),
            traitMakerComponent: ecs.traitMakerComponent(args)
        };
    },
    ambushItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushItem)));
        return ecs.item(args);
    },
    playerRenderComponent: function(args){
        return {
            render: playerRender,
            args: args,
            priority: 8,
            ecsKey: "playerRenderComponent",
            renderState: "default",
            dayControlFunctions: undefined
        };
    },
    memoryTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.memoryTower)));
        args["sourceTrait"] = args.source ? args.source.identityComponent.key : undefined;
        args["towerSourceKey"] = args.key.replace('Tower', 'Source');
        return {
            args: args,
            sentinelComponent: ecs.sourceSentinelComponent(args),
            tickEmotionComponent: ecs.tickEmotionComponent(args),
            healthModifyComponent: ecs.healthModifyComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            damageComponent: (args.damageMultipliers) ? ecs.damageComponent(args) : undefined,
            managedComponent: ecs.managedComponent(args),
            executeComponent: ecs.aliveMakeComponent(args),
            ecsKey: "memoryTower",
            rendererComponents: [ecs.towerRenderComponent(args), ecs.emotionSourceRenderComponent(args)],
            emotionSourceComponent: ecs.towerEmotionSourceComponent(args),
            tickComponent: ecs.tickRenderActivateComponent(args),
            healthComponent: ecs.hundredHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            wishMakingComponent: ecs.producerWishMakingComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args)
        };
    },
    createModifyEntity: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "createModifyEntity",
            args: args,
            identityComponent: ecs.identityComponent(args),
            createModifyComponent: ecs.createModifyComponent(args)
        };
    },
    inviteGoal_buyRingAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_buyRingAction)));
        return ecs.invitationGoal(args);
    },
    ambushButton_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushButton_personA)));
        return ecs.personTowerButton(args);
    },
    memoryExtension: function(args){
        args["touchable"] = true;
        args["name"] = args.source ? args.source.identityComponent.name : undefined;
        args["sourceKey"] = args.source ? args.source.identityComponent.key : undefined;
        return {
            mapSpawnComponent: ecs.sourceExtensionMapSpawnComponent(args),
            rendererComponents: [ecs.sourceExtensionRenderComponent(args)],
            sentinelComponent: ecs.sourceExtensionSentinelComponent(args),
            args: args,
            positionComponent: ecs.positionComponent(args),
            ecsKey: "memoryExtension",
            clickComponent: ecs.sourceExtensionClickComponent(args),
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            identityComponent: ecs.identityComponent(args),
            sourceExtensionComponent: ecs.sourceExtensionComponent(args)
        };
    },
    inviteGoal_mission3Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_mission3Action)));
        return ecs.invitationGoal(args);
    },
    invite_spyAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_spyAction)));
        return ecs.invitationAction(args);
    },
    findHouseItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.findHouseItem)));
        return ecs.item(args);
    },
    flirtSource_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtSource_TargetA)));
        return ecs.personTowerSource(args);
    },
    notifyComponent: function(args){
        return {
            notifyEntityKey: args['notifyEntityKey'],
            ecsKey: "notifyComponent",
            args: args,
            notificationKey: args['notificationKey'],
            notificationArgs: args['notificationArgs']
        };
    },
    item: function(args){
        return {
            itemComponent: ecs.itemComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            args: args,
            ecsKey: "item",
            killExecutables: [ecs.makeItemClickText(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args),
            wishMakingComponent: ecs.itemWishMakingComponent(args),
            createModifyComponent: ecs.createModifyComponent(args)
        };
    },
    choreItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.choreItem)));
        return ecs.item(args);
    },
    relaxAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.relaxAction)));
        return ecs.itemAction(args);
    },
    sentinelComponent: function(args){
        return {
            sentinel: args['sentinel'],
            active: undefined,
            ecsKey: "sentinelComponent",
            args: args,
            lastActive: undefined
        };
    },
    disgustEmotionPiece: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.disgustEmotionPiece)));
        return ecs.emotionPiece(args);
    },
    addRandomPersonToMap: function(args){
        return {
            ecsKey: "addRandomPersonToMap",
            args: args,
            execute: addRandomPersonToMap
        };
    },
    terrifiedSentinel: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.terrifiedSentinel)));
        return ecs.emotionSentinel(args);
    },
    personHeldComponent: function(args){
        return {
            personHeld: args['personHeld'],
            ecsKey: "personHeldComponent",
            args: args
        };
    },
    choreButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.choreButton)));
        return ecs.towerButton(args);
    },
    informSuccessExec: function(args){
        return {
            ecsKey: "informSuccessExec",
            args: args,
            execute: informSuccessExec
        };
    },
    meetPersonButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meetPersonButton)));
        return ecs.towerButton(args);
    },
    hitRenderComponent: function(args){
        return {
            wasHit: false,
            render: hitRender,
            args: args,
            priority: 9,
            ecsKey: "hitRenderComponent",
            renderState: "default"
        };
    },
    personA_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personA_ext)));
        return ecs.sourceExtension(args);
    },
    playTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playTower)));
        return ecs.tower(args);
    },
    chessAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessAction)));
        return ecs.itemAction(args);
    },
    makeOnCreateEntityExec: function(args){
        args["makeOnCreateEntities"] = (args["makeOnCreateEntities"] === undefined) ? [] : args["makeOnCreateEntities"];
        return {
            entitiesToMake: args['makeOnCreateEntities'],
            args: args,
            ecsKey: "makeOnCreateEntityExec",
            execute: executeMakeEntities
        };
    },
    boostRenderComponent: function(args){
        return {
            priority: 6,
            ecsKey: "boostRenderComponent",
            args: args,
            renderState: args['planeOfExistence'],
            render: boostRender
        };
    },
    meetPersonSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meetPersonSource)));
        return ecs.towerSource(args);
    },
    boredomWill: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.boredomWill)));
        return ecs.emotionCurrencyTicker(args);
    },
    destroyEvidence: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.destroyEvidence)));
        return ecs.itemAction(args);
    },
    inviteGoal_findJob: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_findJob)));
        return ecs.invitationGoal(args);
    },
    smallTalkAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.smallTalkAction)));
        return ecs.personAction(args);
    },
    builtSource: function(args){
        args["touchable"] = true;
        args["health"] = (args["health"] === undefined) ? 75 : args["health"];
        return {
            mapSpawnComponent: ecs.builtSourceMapSpawnComponent(args),
            rendererComponents: [ecs.sourceRenderComponent(args), ecs.nameRenderComponent(args)].concat([ecs.sourceInfoRender(args), ecs.sourceActionRender(args)]),
            sentinelComponent: ecs.healthSentinelComponent(args),
            isaacEntityComponent: ecs.isaacEntityComponent(args),
            experienceComponent: ecs.experienceComponent(args),
            args: args,
            ecsKey: "builtSource",
            clickComponent: ecs.traitClickComponent(args),
            entityManagerComponent: ecs.entityManagerComponent(args),
            healthComponent: ecs.healthComponent(args),
            uniqueComponent: ecs.builtSourceUniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    adult_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.adult_ext)));
        return ecs.sourceExtension(args);
    },
    talkWish: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkWish)));
        return ecs.entityKillWish(args);
    },
    towerRenderComponent: function(args){
        return {
            render: towerRender,
            image: (args["image"] === undefined) ? "towerHex" : args["image"],
            args: args,
            activated: 0,
            priority: 9,
            ecsKey: "towerRenderComponent",
            renderState: "default",
            icon: args['icon']
        };
    },
    damageableComponent: function(args){
        return {
            emotion: args['emotion'],
            args: args,
            getAll: getAllEmotionParts,
            traits: (args["traits"] === undefined) ? [] : args["traits"],
            ecsKey: "damageableComponent",
            damageEffects: []
        };
    },
    meditateButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meditateButton)));
        return ecs.towerButton(args);
    },
    currencyConverter: function(args){
        return {
            ecsKey: "currencyConverter",
            args: args,
            currencyConverterComponent: ecs.currencyConverterComponent(args)
        };
    },
    choreTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.choreTower)));
        return ecs.tower(args);
    },
    enragedSentinel: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.enragedSentinel)));
        return ecs.emotionSentinel(args);
    },
    sourceSentinelComponent: function(args){
        return {
            args: args,
            playerControlled: (args["playerControlled"] === undefined) ? true : args["playerControlled"],
            active: undefined,
            ecsKey: "sourceSentinelComponent",
            lastActive: undefined,
            sentinel: sourceSentinel,
            towerSourceKey: args['towerSourceKey'],
            towerSourceCompletion: args['towerSourceCompletion']
        };
    },
    ambushButton_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushButton_personD)));
        return ecs.personTowerButton(args);
    },
    exerciseConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.exerciseConvert)));
        return ecs.currencyConverter(args);
    },
    entityManagerComponent: function(args){
        return {
            canMakeManagedEntity: canMakeManagedEntity,
            entitiesPerLevel: 1,
            maxEntityCount: maxEntityCount,
            args: args,
            managedEntityCount: managedEntityCount,
            getManageLevel: getManageLevel,
            ecsKey: "entityManagerComponent"
        };
    },
    ambushButton_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushButton_personB)));
        return ecs.personTowerButton(args);
    },
    ambushButton_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushButton_personC)));
        return ecs.personTowerButton(args);
    },
    bombSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.bombSource)));
        return ecs.towerSource(args);
    },
    makeEntityComponent: function(args){
        return {
            entitiesToMake: (args["entitiesToMake"] === undefined) ? [] : args["entitiesToMake"],
            args: args,
            ecsKey: "makeEntityComponent",
            execute: executeMakeEntities
        };
    },
    emotionPiece: function(args){
        args["adjacentTo"] = PARAMETERS.self;
        return {
            rendererComponents: [ecs.emotionPieceRenderComponent(args)],
            emotionPieceComponent: ecs.emotionPieceComponent(args),
            args: args,
            createExecutables: [ecs.findAdjacentPosition(args)],
            ecsKey: "emotionPiece",
            healthComponent: ecs.hundredHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    dailyEntityMakerComponent: function(args){
        return {
            ecsKey: "dailyEntityMakerComponent",
            args: args,
            dayStartEntity: args['dayStartEntity'],
            dayStart: dailyEntityMake
        };
    },
    traitButtonControlComponent: function(args){
        return {
            checkMakePos: traitButtonCheckMakePos,
            traitKey: args['traitKey'],
            traitCost: args['traitCost'],
            args: args,
            canMakeEntity: canBuildTrait,
            ecsKey: "traitButtonControlComponent",
            wrappedFunction: undefined,
            traitExtKey: args.traitKey + '_ext',
            makeEntity: buildTrait
        };
    },
    fearEmotionPiece: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.fearEmotionPiece)));
        return ecs.emotionPiece(args);
    },
    excitable: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.excitable)));
        return ecs.trait(args);
    },
    invite_mission1Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_mission1Action)));
        return ecs.invitationAction(args);
    },
    makeTarget: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.makeTarget)));
        return ecs.addPersonAndOpinion(args);
    },
    ambushAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushAction)));
        return ecs.personAction(args);
    },
    dateSadness: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateSadness)));
        return ecs.emotionSource(args);
    },
    traitStatusComponent: function(args){
        return {
            traitActive: false,
            ecsKey: "traitStatusComponent",
            args: args
        };
    },
    emotionStateSystemComponent: function(args){
        return {
            ecsKey: "emotionStateSystemComponent",
            lastTags: [],
            args: args
        };
    },
    friend: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.friend)));
        return ecs.opinion(args);
    },
    pathConnectRenderComponent: function(args){
        return {
            priority: 11,
            ecsKey: "pathConnectRenderComponent",
            args: args,
            renderState: "default",
            render: pathConnectRender
        };
    },
    chessTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessTower)));
        return ecs.tower(args);
    },
    hurtful: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.hurtful)));
        return ecs.opinion(args);
    },
    currencyConverterComponent: function(args){
        return {
            ecsKey: "currencyConverterComponent",
            currencyConversion: (args["currencyConversion"] === undefined) ? {} : args["currencyConversion"],
            emotionsConversion: (args["emotionsConversion"] === undefined) ? {} : args["emotionsConversion"],
            currencyKey: args['currencyKey'],
            args: args
        };
    },
    memoryTowerButton: function(args){
        args["managerKey"] = args.source ? args.source.identityComponent.key : undefined;
        args["tags"] = args.source ? [args.source.identityComponent.key] : [];
        args["tags"] = (args["tags"] === undefined) ? [(args.source) ? args.source.identityComponent.key : 'default'] : args["tags"];
        return {
            isaacEntityComponent: ecs.isaacEntityComponent(args),
            rendererComponents: [ecs.towerButtonRender(args)],
            buttonControlComponent: ecs.towerControlComponent(args),
            args: args,
            ecsKey: "memoryTowerButton",
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    focusCostComponent: function(args){
        return {
            ecsKey: "focusCostComponent",
            args: args,
            focusActive: focusActive,
            focusCost: (args["focusCost"] === undefined) ? 0 : args["focusCost"]
        };
    },
    mapSpawnComponent: function(args){
        return {
            mapPostSpawn: trueFunction,
            mapSpawnPos: mapSpawnPos,
            args: args,
            ecsKey: "mapSpawnComponent",
            mapSpawnChance: args['mapSpawnChance'],
            mapSpawnKey: args['mapSpawnKey']
        };
    },
    healthSentinelComponent: function(args){
        return {
            sentinel: healthSentinelCheck,
            ecsKey: "healthSentinelComponent",
            args: args
        };
    },
    target: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.target)));
        return ecs.opinion(args);
    },
    ambushTower_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushTower_TargetA)));
        return ecs.personTower(args);
    },
    pathButtonRenderComponent: function(args){
        return {
            render: pathButtonRender,
            args: args,
            priority: 8,
            ecsKey: "pathButtonRenderComponent",
            renderState: "default",
            pathButtonFunction: undefined
        };
    },
    flirtButton_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtButton_personD)));
        return ecs.personTowerButton(args);
    },
    findHouseWish: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.findHouseWish)));
        return ecs.entityKillWish(args);
    },
    project: function(args){
        args["touchable"] = true;
        args["health"] = (args["health"] === undefined) ? 75 : args["health"];
        return {
            mapSpawnComponent: ecs.builtSourceMapSpawnComponent(args),
            rendererComponents: [ecs.sourceInfoRender(args), ecs.sourceActionRender(args), ecs.traitRenderComponent(args), ecs.currencyStoreRenderComponent(args), ecs.traitScreenRenderComponent(args)],
            sentinelComponent: ecs.healthSentinelComponent(args),
            positionComponent: ecs.positionComponent(args),
            isaacEntityComponent: ecs.isaacEntityComponent(args),
            experienceComponent: ecs.experienceComponent(args),
            args: args,
            executeComponent: ecs.aliveMakeComponent(args),
            timedDeathComponent: (args.timeToDeath) ? ecs.timedDeathComponent(args) : undefined,
            ecsKey: "project",
            clickComponent: ecs.traitClickComponent(args),
            killExecutables: [ecs.makeEntityComponent(args)],
            entityManagerComponent: ecs.entityManagerComponent(args),
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            healthComponent: ecs.healthComponent(args),
            uniqueComponent: ecs.builtSourceUniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            traitStatusComponent: ecs.traitStatusComponent(args),
            dayResponseComponent: (args.dailyEntities) ? ecs.traitDayResponseComponent(args) : undefined,
            tickEmotionComponent: (args.currency) ? ecs.tickEmotionComponent(args) : undefined,
            tickComponent: ecs.traitTickComponent(args)
        };
    },
    flirtSource_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtSource_agentE)));
        return ecs.personTowerSource(args);
    },
    healEntities: function(args){
        return {
            ecsKey: "healEntities",
            args: args,
            execute: healEntities,
            entitiesToHeal: (args["entitiesToHeal"] === undefined) ? {} : args["entitiesToHeal"]
        };
    },
    itemActionMakeMemory: function(args){
        return {
            ecsKey: "itemActionMakeMemory",
            args: args,
            makeMemoryChance: (args["makeMemoryChance"] === undefined) ? 0 : args["makeMemoryChance"],
            execute: itemActionMakeMemory
        };
    },
    addPersonAndOpinionExec: function(args){
        return {
            opinionKey: args['opinionKey'],
            ecsKey: "addPersonAndOpinionExec",
            args: args,
            execute: addPersonAndOpinionExec,
            personKey: args['personKey']
        };
    },
    nameRenderComponent: function(args){
        return {
            name: args['name'],
            render: nameRender,
            args: args,
            priority: 7,
            ecsKey: "nameRenderComponent",
            renderState: "default"
        };
    },
    inviteGoal_chessAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_chessAction)));
        return ecs.invitationGoal(args);
    },
    creepTickComponent: function(args){
        return {
            ecsKey: "creepTickComponent",
            args: args,
            tick: creepTick
        };
    },
    talkSource_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkSource_personC)));
        return ecs.personTowerSource(args);
    },
    talkSource_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkSource_personB)));
        return ecs.personTowerSource(args);
    },
    talkSource_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkSource_personA)));
        return ecs.personTowerSource(args);
    },
    rent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.rent)));
        return ecs.currencyStore(args);
    },
    talkSource_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkSource_personD)));
        return ecs.personTowerSource(args);
    },
    dayRenderComponent: function(args){
        return {
            priority: 7,
            ecsKey: "dayRenderComponent",
            args: args,
            renderState: "default",
            render: dayRender
        };
    },
    person: function(args){
        args["touchable"] = true;
        args["health"] = (args["health"] === undefined) ? 75 : args["health"];
        return {
            mapSpawnComponent: ecs.builtSourceMapSpawnComponent(args),
            rendererComponents: [ecs.sourceRenderComponent(args), ecs.nameRenderComponent(args)].concat([ecs.sourceInfoRender(args), ecs.sourceActionRender(args)]).concat([ecs.personRenderComponent(args), ecs.personScreenRenderComponent(args)]),
            sentinelComponent: ecs.healthSentinelComponent(args),
            isaacEntityComponent: ecs.isaacEntityComponent(args),
            traitStatusComponent: ecs.traitStatusComponent(args),
            experienceComponent: ecs.experienceComponent(args),
            args: args,
            createExecutables: [ecs.personCreateExec(args), ecs.randomOpenPositionExec(args)],
            ecsKey: "person",
            clickComponent: ecs.traitClickComponent(args),
            killExecutables: [ecs.personKillExec(args)],
            entityManagerComponent: ecs.entityManagerComponent(args),
            healthComponent: ecs.healthComponent(args),
            uniqueComponent: ecs.builtSourceUniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            personalityComponent: ecs.personalityComponent(args),
            tickComponent: ecs.personTickComponent(args)
        };
    },
    travelTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.travelTower)));
        return ecs.tower(args);
    },
    self: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.self)));
        return ecs.source(args);
    },
    lovesChess_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.lovesChess_ext)));
        return ecs.sourceExtension(args);
    },
    chessSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessSource)));
        return ecs.towerSource(args);
    },
    sourceExtensionClickComponent: function(args){
        return {
            ecsKey: "sourceExtensionClickComponent",
            args: args,
            onClick: sourceExtensionOnClick
        };
    },
    playChess: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playChess)));
        return ecs.entityKillWish(args);
    },
    dateAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateAction)));
        return ecs.personAction(args);
    },
    assertUniqueComponent: function(args){
        return {
            ecsKey: "assertUniqueComponent",
            args: args,
            uniqueDuplicateEvent: assertUnique
        };
    },
    personalityComponent: function(args){
        args["knownPersonalityTraits"] = (args["knownPersonalityTraits"] === undefined) ? [] : args["knownPersonalityTraits"];
        args["unknownPersonalityTraits"] = (args["unknownPersonalityTraits"] === undefined) ? [] : args["unknownPersonalityTraits"];
        return {
            knownPersonalityTraits: args['knownPersonalityTraits'],
            args: args,
            heldOpinions: PARAMETERS.defaultHeldOpinions,
            getAll: getAllPersonality,
            addOpinionToPersonality: addOpinionToPersonality,
            ecsKey: "personalityComponent",
            personHistory: [],
            personalityTraits: args.unknownPersonalityTraits.concat(args.knownPersonalityTraits)
        };
    },
    invite_playAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_playAction)));
        return ecs.invitationAction(args);
    },
    playedWell: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playedWell)));
        return ecs.emotionSource(args);
    },
    flirtTower_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtTower_personD)));
        return ecs.personTower(args);
    },
    positionComponent: function(args){
        return {
            planeOfExistence: args['planeOfExistence'],
            setPos: setPos,
            args: args,
            y: args['y'],
            ecsKey: "positionComponent",
            isPos: isPos,
            canBuildAtPos: trueFunction,
            x: args['x']
        };
    },
    flirtTower_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtTower_personB)));
        return ecs.personTower(args);
    },
    flirtTower_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtTower_personC)));
        return ecs.personTower(args);
    },
    flirtTower_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtTower_personA)));
        return ecs.personTower(args);
    },
    ringItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ringItem)));
        return ecs.item(args);
    },
    healthBleedTickComponent: function(args){
        return {
            ecsKey: "healthBleedTickComponent",
            args: args,
            tick: healthBleedTick
        };
    },
    sourceExtensionSentinelComponent: function(args){
        return {
            sentinel: sourceExtensionSentinel,
            active: undefined,
            ecsKey: "sourceExtensionSentinelComponent",
            args: args,
            lastActive: undefined
        };
    },
    personTrait: function(args){
        args["sourceTrait"] = args.source ? args.source.identityComponent.key : undefined;
        args["planeOfExistence"] = args.sourceTrait;
        return {
            rendererComponents: [ecs.personAquariumRenderComponent(args)],
            args: args,
            personAquariumPieceComponent: ecs.personAquariumPieceComponent(args),
            createExecutables: [ecs.randomOpenPositionExec(args)],
            ecsKey: "personTrait",
            healthComponent: ecs.singleHealthComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    mission2Item: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.mission2Item)));
        return ecs.item(args);
    },
    adultButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.adultButton)));
        return ecs.traitButton(args);
    },
    dateItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateItem)));
        return ecs.item(args);
    },
    refreshCurrencyDayResponseComponent: function(args){
        args["dayEnd"] = refreshCurrencyDayEnd;
        return {
            dayEnd: args['dayEnd'],
            ecsKey: "refreshCurrencyDayResponseComponent",
            args: args,
            dayStart: args['dayStart'],
            dayChange: args['dayChange']
        };
    },
    experienceComponent: function(args){
        return {
            currentLevel: 1,
            args: args,
            xpPerLevel: 50,
            ecsKey: "experienceComponent",
            getXpLevel: getXpLevel,
            maxLevel: 10
        };
    },
    emotionEntityMakerComponent: function(args){
        return {
            emotionSentinel: args['emotionSentinel'],
            activeSource: args['activeSource'],
            ecsKey: "emotionEntityMakerComponent",
            args: args,
            entitiesToMake: args['entitiesToMake']
        };
    },
    timedDeathComponent: function(args){
        return {
            ecsKey: "timedDeathComponent",
            args: args,
            timeToDeath: args['timeToDeath']
        };
    },
    relaxSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.relaxSource)));
        return ecs.towerSource(args);
    },
    memoryRenderComponent: function(args){
        return {
            priority: 6,
            ecsKey: "memoryRenderComponent",
            args: args,
            renderState: "default",
            render: memoryRender
        };
    },
    emotionTickModifier: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            emotionTickModifyComponent: ecs.emotionTickModifyComponent(args),
            ecsKey: "emotionTickModifier",
            args: args,
            identityComponent: ecs.identityComponent(args)
        };
    },
    chessButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessButton)));
        return ecs.towerButton(args);
    },
    mapEmotionRenderComponent: function(args){
        return {
            priority: 7,
            ecsKey: "mapEmotionRenderComponent",
            args: args,
            renderState: "default",
            render: mapEmotionRender
        };
    },
    flirtSource_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtSource_personA)));
        return ecs.personTowerSource(args);
    },
    reportItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.reportItem)));
        return ecs.item(args);
    },
    flirtSource_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtSource_personC)));
        return ecs.personTowerSource(args);
    },
    flirtSource_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtSource_personB)));
        return ecs.personTowerSource(args);
    },
    flirtSource_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtSource_personD)));
        return ecs.personTowerSource(args);
    },
    evidenceItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.evidenceItem)));
        return ecs.item(args);
    },
    dayEnergy: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dayEnergy)));
        return ecs.currencyStore(args);
    },
    panelComponent: function(args){
        return {
            lastLines: [],
            args: args,
            panelCloseFunction: undefined,
            foldouts: {},
            foldRects: [],
            lines: [],
            minimized: true,
            ecsKey: "panelComponent",
            closed: true,
            buttonRects: []
        };
    },
    invitationGoal: function(args){
        args["personHeld"] = args.source.personHeldComponent.personHeld;
        args["entitiesToHeal"] = simpleDict(args.source.personHeldComponent.personHeld, 10);
        args["focusCost"] = 2;
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)].concat([ecs.emotionSourceRenderComponent(args), ecs.focusRenderComponent(args)]),
            args: args,
            goalTrackComponent: ecs.invitationGoalTrackComponent(args),
            emotionSourceComponent: ecs.infiniteEmotionSourceComponent(args),
            personHeldComponent: ecs.personHeldComponent(args),
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "invitationGoal",
            squashComponent: (args.squashCurrency) ? ecs.squashComponent(args) : undefined,
            killExecutables: [ecs.timedMakeEntities(args)].concat([ecs.wishTraitHealthExec(args)]),
            healthComponent: ecs.singleHealthComponent(args),
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args),
            notificationComponents: [ecs.entityKillNotificationComponent(args)]
        };
    },
    inviteGoal_rememberAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_rememberAction)));
        return ecs.invitationGoal(args);
    },
    ambushButton_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushButton_TargetA)));
        return ecs.personTowerButton(args);
    },
    sourceInfoRender: function(args){
        return {
            priority: 6,
            ecsKey: "sourceInfoRender",
            args: args,
            renderState: "default",
            render: sourceInfoRender
        };
    },
    chapter5: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chapter5)));
        return ecs.gameStage(args);
    },
    chapter4: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chapter4)));
        return ecs.gameStage(args);
    },
    findJobItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.findJobItem)));
        return ecs.item(args);
    },
    relaxTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.relaxTower)));
        return ecs.tower(args);
    },
    chapter1: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chapter1)));
        return ecs.gameStage(args);
    },
    chapter3: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chapter3)));
        return ecs.gameStage(args);
    },
    chapter2: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chapter2)));
        return ecs.gameStage(args);
    },
    meditateItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meditateItem)));
        return ecs.item(args);
    },
    invite_exerciseAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_exerciseAction)));
        return ecs.invitationAction(args);
    },
    ambushSource_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushSource_personC)));
        return ecs.personTowerSource(args);
    },
    ambushSource_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushSource_personB)));
        return ecs.personTowerSource(args);
    },
    talkTower_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkTower_personB)));
        return ecs.personTower(args);
    },
    spyButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.spyButton)));
        return ecs.towerButton(args);
    },
    talkTower_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkTower_personD)));
        return ecs.personTower(args);
    },
    ambushSource_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushSource_personD)));
        return ecs.personTowerSource(args);
    },
    talkTower_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkTower_agentE)));
        return ecs.personTower(args);
    },
    makeMemoryComponent: function(args){
        return {
            ecsKey: "makeMemoryComponent",
            args: args,
            impulseTicks: 10,
            ticks: 10,
            makeMemory: makeMemory
        };
    },
    married: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.married)));
        return ecs.opinion(args);
    },
    invite_meetPersonAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_meetPersonAction)));
        return ecs.invitationAction(args);
    },
    towerControlComponent: function(args){
        return {
            towerKey: args['towerKey'],
            canOverlap: false,
            args: args,
            canMakeEntity: canBuildTower,
            ecsKey: "towerControlComponent",
            wrappedFunction: undefined,
            towerCost: args['towerCost'],
            managerKey: args['managerKey'],
            makeEntity: buildTower,
            checkMakePos: checkMakePos,
            sourceKey: args['sourceKey']
        };
    },
    exerciseSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.exerciseSource)));
        return ecs.towerSource(args);
    },
    worldTerror_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.worldTerror_ext)));
        return ecs.sourceExtension(args);
    },
    builtSourceMapSpawnComponent: function(args){
        args["mapSpawnKey"] = (args["mapSpawnKey"] === undefined) ? args.key + '_ext' : args["mapSpawnKey"];
        return {
            mapPostSpawn: builtSourceMapPostSpawn,
            mapSpawnPos: builtSourceMapSpawnPos,
            args: args,
            ecsKey: "builtSourceMapSpawnComponent",
            mapSpawnChance: builtSourceMapSpawnChance,
            shouldExpand: false,
            mapSpawnKey: args['mapSpawnKey']
        };
    },
    lostControl: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.lostControl)));
        return {
            rendererComponents: [ecs.lostControlRenderComponent(args)],
            args: args,
            createExecutables: [ecs.makeLostControlClickText(args)],
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "lostControl",
            holdControlComponent: ecs.holdControlComponent(args),
            killExecutables: [ecs.lostControlDeathExec(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    lethargy: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.lethargy)));
        return ecs.trait(args);
    },
    emotionSourceComponent: function(args){
        return {
            args: args,
            spawnSourceKey: args['spawnSourceKey'],
            spawnCount: 0,
            spawnComplete: spawnComplete,
            ticks: (args["ticks"] === undefined) ? 2 : args["ticks"],
            shouldTick: trueFunction,
            emotions: (args["emotions"] === undefined) ? unrollDict(args.emotionsToAdd) : args["emotions"],
            traits: (args["traits"] === undefined) ? [] : args["traits"],
            ecsKey: "emotionSourceComponent",
            impulseTicks: (args["impulseTicks"] === undefined) ? 60 : args["impulseTicks"],
            border: "#ffffff"
        };
    },
    towerButton: function(args){
        args["tags"] = (args["tags"] === undefined) ? [(args.source) ? args.source.identityComponent.key : 'default'] : args["tags"];
        return {
            isaacEntityComponent: ecs.isaacEntityComponent(args),
            rendererComponents: [ecs.towerButtonRender(args)],
            buttonControlComponent: ecs.towerControlComponent(args),
            args: args,
            ecsKey: "towerButton",
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    personHurt: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personHurt)));
        return ecs.emotionSource(args);
    },
    flirtButton_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtButton_personB)));
        return ecs.personTowerButton(args);
    },
    flirtButton_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtButton_personC)));
        return ecs.personTowerButton(args);
    },
    randomReplace: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "randomReplace",
            args: args,
            createExecutables: [ecs.randomReplaceExec(args)]
        };
    },
    flirtButton_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtButton_personA)));
        return ecs.personTowerButton(args);
    },
    meetPersonAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meetPersonAction)));
        args["key"] = mangleIdentityWithTrait(args.key, args.traitKey);
        args["origKey"] = args.key;
        return {
            itemActionComponent: ecs.itemActionComponent(args),
            goalTrackComponent: ecs.meetPersonGoalTrackComponent(args),
            args: args,
            ecsKey: "meetPersonAction",
            rendererComponents: [ecs.focusRenderComponent(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    invite_buyRingAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_buyRingAction)));
        return ecs.invitationAction(args);
    },
    personHealAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personHealAction)));
        args["personHeld"] = args.source.personHeldComponent.personHeld;
        return {
            healthComponent: ecs.healthComponent(args),
            ecsKey: "personHealAction",
            args: args,
            personHeldComponent: ecs.personHeldComponent(args),
            createExecutables: [ecs.personRelationshipExec(args)]
        };
    },
    nauseatedSentinel: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.nauseatedSentinel)));
        return ecs.emotionSentinel(args);
    },
    haveMarriage: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.haveMarriage)));
        return ecs.opinionGoal(args);
    },
    emotionSentinel: function(args){
        return {
            activeEntityComponent: ecs.activeEntityComponent(args),
            ecsKey: "emotionSentinel",
            args: args,
            sentinelComponent: ecs.emotionSentinelComponent(args)
        };
    },
    playButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playButton)));
        return ecs.towerButton(args);
    },
    goalRenderComponent: function(args){
        return {
            priority: 8,
            ecsKey: "goalRenderComponent",
            args: args,
            renderState: "default",
            render: goalRender
        };
    },
    TargetA_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.TargetA_ext)));
        return ecs.sourceExtension(args);
    },
    entityCreateTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)],
            completed: false,
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            ecsKey: "entityCreateTrackComponent",
            getInnerSt: blankStringFunction,
            checkCompleted: checkForEntityCreateSuccess,
            entitiesToCreate: args['entitiesToCreate']
        };
    },
    personRenderComponent: function(args){
        return {
            priority: 7,
            ecsKey: "personRenderComponent",
            args: args,
            renderState: "default",
            render: personRender
        };
    },
    rememberAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.rememberAction)));
        return ecs.itemAction(args);
    },
    ambushTower_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushTower_agentE)));
        return ecs.personTower(args);
    },
    currencyBoostComponent: function(args){
        return {
            ecsKey: "currencyBoostComponent",
            args: args,
            currencyBoost: (args["currencyBoost"] === undefined) ? {} : args["currencyBoost"]
        };
    },
    itemActionGoalTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)].concat([ecs.makeEntityComponent(args), ecs.itemActionSuccessComponent(args), ecs.healEntities(args), ecs.itemActionMakeMemory(args)]),
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            origCurrency: _.clone(args.currency),
            currency: args['currency'],
            ecsKey: "itemActionGoalTrackComponent",
            getInnerSt: blankStringFunction,
            checkCompleted: checkItemActionCompleted,
            percentCompleted: itemActionPercentCompleted
        };
    },
    racistEvent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.racistEvent)));
        return ecs.randomReplace(args);
    },
    itemActionSuccessComponent: function(args){
        return {
            currencyStoreKey: "dailyCurrencyStore",
            ecsKey: "itemActionSuccessComponent",
            args: args,
            execute: itemActionSuccessExecute,
            emotionSourceKey: (args["emotionSourceKey"] === undefined) ? PARAMETERS.emotionSource : args["emotionSourceKey"]
        };
    },
    spyItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.spyItem)));
        return ecs.item(args);
    },
    inviteGoal_getEvidenceAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_getEvidenceAction)));
        return ecs.invitationGoal(args);
    },
    getEvidenceAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.getEvidenceAction)));
        return ecs.itemAction(args);
    },
    makeItemClickText: function(args){
        return {
            ecsKey: "makeItemClickText",
            args: args,
            execute: makeItemClickText
        };
    },
    entityKillWish: function(args){
        args["focusCost"] = 2;
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)].concat([ecs.emotionSourceRenderComponent(args), ecs.focusRenderComponent(args)]),
            args: args,
            goalTrackComponent: ecs.entityKillTrackComponent(args),
            emotionSourceComponent: ecs.infiniteEmotionSourceComponent(args),
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "entityKillWish",
            squashComponent: (args.squashCurrency) ? ecs.squashComponent(args) : undefined,
            killExecutables: [ecs.timedMakeEntities(args)].concat([ecs.wishTraitHealthExec(args)]),
            healthComponent: ecs.singleHealthComponent(args),
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args),
            notificationComponents: [ecs.entityKillNotificationComponent(args)]
        };
    },
    inviteGoal_destroyEvidence: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_destroyEvidence)));
        return ecs.invitationGoal(args);
    },
    dateAnger: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateAnger)));
        return ecs.emotionSource(args);
    },
    marryPerson: function(args){
        return {
            ecsKey: "marryPerson",
            args: args,
            execute: marryPerson
        };
    },
    agent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.agent)));
        return ecs.trait(args);
    },
    ambushConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushConvert)));
        return ecs.currencyConverter(args);
    },
    shareDiscoveryAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.shareDiscoveryAction)));
        return ecs.personAction(args);
    },
    flirtAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtAction)));
        return ecs.personAction(args);
    },
    controlPanelKeyPressComponent: function(args){
        return {
            ecsKey: "controlPanelKeyPressComponent",
            args: args,
            handleKeyPress: controlPanelHandleKeyPress
        };
    },
    randomReplaceExec: function(args){
        return {
            entities: args['entities'],
            ecsKey: "randomReplaceExec",
            args: args,
            execute: randomReplaceExec
        };
    },
    chatButton_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatButton_personD)));
        return ecs.personTowerButton(args);
    },
    rememberTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.rememberTower)));
        return ecs.memoryTower(args);
    },
    chatButton_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatButton_personA)));
        return ecs.personTowerButton(args);
    },
    chatButton_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatButton_personB)));
        return ecs.personTowerButton(args);
    },
    stageChangeComponent: function(args){
        return {
            executables: [ecs.makeEntityComponent(args), ecs.killEntityComponent(args)],
            checkAndChange: checkAndChangeGameState,
            shouldChange: false,
            args: args,
            ecsKey: "stageChangeComponent",
            goalsToCheck: args['goalsToCheck']
        };
    },
    agentE_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.agentE_ext)));
        return ecs.sourceExtension(args);
    },
    relaxConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.relaxConvert)));
        return ecs.currencyConverter(args);
    },
    timedCurrencyStore: function(args){
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 120 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.currencyStoreRenderComponent(args)],
            args: args,
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "timedCurrencyStore",
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.agentE)));
        return ecs.person(args);
    },
    absolutePositionComponent: function(args){
        return {
            args: args,
            draggable: (args["draggable"] === undefined) ? true : args["draggable"],
            isDragging: false,
            ecsKey: "absolutePositionComponent",
            setAbsPosFromRect: setAbsPosFromRect,
            y: (args["y"] === undefined) ? 0 : args["y"],
            x: (args["x"] === undefined) ? 0 : args["x"],
            size: [0, 0]
        };
    },
    personTickComponent: function(args){
        return {
            traitChangeChance: 0.02,
            args: args,
            traitRemoveChance: 0.25,
            traitAddChance: 0.5,
            ecsKey: "personTickComponent",
            tick: personTick
        };
    },
    entityReplace: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "entityReplace",
            args: args,
            createExecutables: [ecs.makeEntityComponent(args), ecs.killEntity(args)]
        };
    },
    wishMakingComponent: function(args){
        return {
            ecsKey: "wishMakingComponent",
            args: args,
            canMakeWish: args['canMakeWish'],
            makeWish: args['makeWish']
        };
    },
    smallTalkItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.smallTalkItem)));
        return ecs.item(args);
    },
    controlPanelClickComponent: function(args){
        return {
            uiClick: controlPanelClick,
            ecsKey: "controlPanelClickComponent",
            args: args
        };
    },
    terrorEventEmotionSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.terrorEventEmotionSource)));
        return ecs.emotionSource(args);
    },
    tickRenderActivateComponent: function(args){
        return {
            ecsKey: "tickRenderActivateComponent",
            args: args,
            tick: tickRenderActivate
        };
    },
    activatableUpdateExec: function(args){
        return {
            ecsKey: "activatableUpdateExec",
            args: args,
            execute: activatableUpdateExecute
        };
    },
    infoFoldout: function(args){
        return {
            foldLines: args['foldLines'],
            args: args,
            folded: args['folded'],
            ecsKey: "infoFoldout",
            infoRender: infoFoldoutRender,
            lineCount: infoFoldoutLineCount,
            foldout: args['foldout']
        };
    },
    singleHealthComponent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.singleHealthComponent)));
        return {
            ecsKey: "singleHealthComponent",
            args: args,
            health: args['health'],
            maxHealth: args['health'],
            damageFactor: (args["damageFactor"] === undefined) ? 1 : args["damageFactor"]
        };
    },
    healthComponent: function(args){
        return {
            ecsKey: "healthComponent",
            args: args,
            health: args['health'],
            maxHealth: args['health'],
            damageFactor: (args["damageFactor"] === undefined) ? 1 : args["damageFactor"]
        };
    },
    sourceExtensionComponent: function(args){
        return {
            ecsKey: "sourceExtensionComponent",
            args: args,
            sourceKey: args['sourceKey']
        };
    },
    personC_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personC_ext)));
        return ecs.sourceExtension(args);
    },
    chessMatchItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessMatchItem)));
        return ecs.item(args);
    },
    chatTower_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatTower_agentE)));
        return ecs.personTower(args);
    },
    cash: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.cash)));
        return ecs.currencyStore(args);
    },
    choreAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.choreAction)));
        return ecs.itemAction(args);
    },
    mission1Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.mission1Action)));
        return ecs.itemAction(args);
    },
    lethargy_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.lethargy_ext)));
        return ecs.sourceExtension(args);
    },
    personTimedItem: function(args){
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 30 : args["timeToDeath"];
        return {
            itemComponent: ecs.itemComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            args: args,
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "personTimedItem",
            killExecutables: [ecs.timedMakeEntities(args)].concat([ecs.personTimedItemDeathExec(args)]),
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args),
            wishMakingComponent: ecs.itemWishMakingComponent(args),
            createModifyComponent: ecs.createModifyComponent(args)
        };
    },
    playItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playItem)));
        return ecs.item(args);
    },
    wishTraitHealthExec: function(args){
        return {
            ecsKey: "wishTraitHealthExec",
            args: args,
            execute: wishTraitHealthExecute,
            spawnSourceKey: args['spawnSourceKey'],
            healthDiff: (args["healthDiff"] === undefined) ? 10 : args["healthDiff"]
        };
    },
    rendererSystemComponent: function(args){
        return {
            currentRenderState: "default",
            ecsKey: "rendererSystemComponent",
            args: args
        };
    },
    mission1Item: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.mission1Item)));
        return ecs.item(args);
    },
    personActionGoalTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)].concat([ecs.makeEntityComponent(args), ecs.itemActionSuccessComponent(args), ecs.healEntities(args), ecs.itemActionMakeMemory(args)]).concat([ecs.personRelationshipExec(args)]),
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            origCurrency: _.clone(args.currency),
            currency: args['currency'],
            ecsKey: "personActionGoalTrackComponent",
            getInnerSt: blankStringFunction,
            checkCompleted: checkItemActionCompleted,
            percentCompleted: itemActionPercentCompleted
        };
    },
    exerciseItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.exerciseItem)));
        return ecs.item(args);
    },
    exerciseButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.exerciseButton)));
        return ecs.towerButton(args);
    },
    player: function(args){
        args["dayEnd"] = playerDayEnd;
        return {
            focusComponent: ecs.focusComponent(args),
            calculatedCurrencyComponent: ecs.calculatedCurrencyComponent(args),
            args: args,
            ecsKey: "player",
            rendererComponents: [ecs.playerRenderComponent(args)],
            serializeComponent: ecs.playerSerializeComponent(args),
            keyPressComponent: ecs.playerKeyPressComponent(args),
            dayResponseComponent: ecs.dayResponseComponent(args),
            traitMarkingComponent: ecs.traitMarkingComponent(args)
        };
    },
    exerciseAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.exerciseAction)));
        return ecs.itemAction(args);
    },
    racistComment: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.racistComment)));
        return ecs.emotionSource(args);
    },
    driveCabAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.driveCabAction)));
        return ecs.itemAction(args);
    },
    talkButton_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkButton_personC)));
        return ecs.personTowerButton(args);
    },
    talkTower_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkTower_TargetA)));
        return ecs.personTower(args);
    },
    didPoorly: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.didPoorly)));
        return ecs.emotionSource(args);
    },
    findJob: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.findJob)));
        return ecs.itemAction(args);
    },
    inviteGoal_relaxAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_relaxAction)));
        return ecs.invitationGoal(args);
    },
    entityKillTrackComponent: function(args){
        return {
            entitiesToKill: args['entitiesToKill'],
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)],
            completed: false,
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            ecsKey: "entityKillTrackComponent",
            getInnerSt: getEntityKillInnerSt,
            checkCompleted: checkForEntityKillSuccess
        };
    },
    chatConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatConvert)));
        return ecs.currencyConverter(args);
    },
    romance: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.romance)));
        return ecs.opinion(args);
    },
    confessionItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.confessionItem)));
        return ecs.item(args);
    },
    sourceActionRender: function(args){
        return {
            render: sourceActionRender,
            makeItemActionFunction: makeItemActionFunction,
            args: args,
            priority: 8,
            ecsKey: "sourceActionRender",
            itemActionFunctions: {},
            renderState: "default"
        };
    },
    emotionBoost: function(args){
        args["removable"] = false;
        return {
            rendererComponents: [ecs.boostRenderComponent(args)],
            boostSlotComponent: ecs.boostSlotComponent(args),
            args: args,
            emotionSourceComponent: ecs.emotionBoostSourceComponent(args),
            createExecutables: [ecs.randomOpenPositionExec(args)],
            ecsKey: "emotionBoost",
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    invite_findHouse: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_findHouse)));
        return ecs.invitationAction(args);
    },
    notificationWishNotificationComponent: function(args){
        return {
            notificationFunctions: deriveNotificationWishNotificationFunctions(args.notificationsToHit),
            ecsKey: "notificationWishNotificationComponent",
            args: args
        };
    },
    spyGoal: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.spyGoal)));
        return ecs.entityKillWish(args);
    },
    startCash: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.startCash)));
        return ecs.currencyStore(args);
    },
    dailyEntityMaker: function(args){
        return {
            ecsKey: "dailyEntityMaker",
            args: args,
            dayResponseComponent: ecs.dailyEntityMakerComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    towerSourceComponent: function(args){
        return {
            towerActions: args['towerActions'],
            ecsKey: "towerSourceComponent",
            args: args,
            towerKey: args['towerKey'],
            sourceTrait: args['sourceTrait']
        };
    },
    shareEmotionItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.shareEmotionItem)));
        return ecs.item(args);
    },
    lovesChess: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.lovesChess)));
        return ecs.trait(args);
    },
    personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personB)));
        return ecs.person(args);
    },
    personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personC)));
        return ecs.person(args);
    },
    personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personA)));
        return ecs.person(args);
    },
    personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personD)));
        return ecs.person(args);
    },
    invite_rememberAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_rememberAction)));
        return ecs.invitationAction(args);
    },
    lovesChessButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.lovesChessButton)));
        return ecs.traitButton(args);
    },
    towerSource: function(args){
        return {
            sentinelComponent: ecs.healthSentinelComponent(args),
            args: args,
            towerSourceComponent: ecs.towerSourceComponent(args),
            ecsKey: "towerSource",
            slotComponent: ecs.slotComponent(args),
            healthComponent: ecs.hundredHealthComponent(args),
            uniqueComponent: ecs.assertUniqueComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    invite_destroyEvidence: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_destroyEvidence)));
        return ecs.invitationAction(args);
    },
    getEvidenceItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.getEvidenceItem)));
        return ecs.item(args);
    },
    workGoal: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.workGoal)));
        return ecs.entityKillWish(args);
    },
    activeWill: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.activeWill)));
        return ecs.emotionCurrencyTicker(args);
    },
    proposeAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.proposeAction)));
        args["personHeld"] = args.traitKey;
        args["key"] = mangleIdentityWithTrait(args.key, args.traitKey);
        args["origKey"] = args.key;
        return {
            itemActionComponent: ecs.personActionComponent(args),
            goalTrackComponent: ecs.proposeActionGoalTrackComponent(args),
            args: args,
            personHeldComponent: ecs.personHeldComponent(args),
            ecsKey: "proposeAction",
            rendererComponents: [ecs.focusRenderComponent(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    ambushSource_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushSource_TargetA)));
        return ecs.personTowerSource(args);
    },
    chatSource_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatSource_personB)));
        return ecs.personTowerSource(args);
    },
    slotComponent: function(args){
        return {
            currentAction: false,
            resetSlotComponent: resetSlotComponent,
            ecsKey: "slotComponent",
            args: args,
            slottedItem: false
        };
    },
    terrorEventCurrency: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.terrorEventCurrency)));
        return ecs.dailyCurrencyStore(args);
    },
    itemAction: function(args){
        args["key"] = mangleIdentityWithTrait(args.key, args.traitKey);
        args["origKey"] = args.key;
        return {
            itemActionComponent: ecs.itemActionComponent(args),
            goalTrackComponent: ecs.itemActionGoalTrackComponent(args),
            args: args,
            ecsKey: "itemAction",
            rendererComponents: [ecs.focusRenderComponent(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    opinionComponent: function(args){
        return {
            ecsKey: "opinionComponent",
            args: args,
            successOpinions: (args["successOpinions"] === undefined) ? {} : args["successOpinions"]
        };
    },
    dateTower_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateTower_personD)));
        return ecs.personTower(args);
    },
    spellRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "spellRenderComponent",
            args: args,
            renderState: "default",
            render: spellRender
        };
    },
    dateTower_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateTower_personB)));
        return ecs.personTower(args);
    },
    dateTower_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateTower_personC)));
        return ecs.personTower(args);
    },
    dateTower_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateTower_personA)));
        return ecs.personTower(args);
    },
    invite_meditateAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_meditateAction)));
        return ecs.invitationAction(args);
    },
    identityComponent: function(args){
        return {
            name: args['name'],
            tags: (args["tags"] === undefined) ? [] : args["tags"],
            sourceId: (args.source && args.source.identityComponent) ? args['args.source.identityComponent.uid'] : undefined,
            args: args,
            touchable: (args["touchable"] === undefined) ? false : args["touchable"],
            ecsKey: "identityComponent",
            key: args['key'],
            uid: args['uid']
        };
    },
    traitButton: function(args){
        return {
            rendererComponents: [ecs.traitButtonRender(args)],
            buttonControlComponent: ecs.traitButtonControlComponent(args),
            args: args,
            ecsKey: "traitButton",
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    chessMatchAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessMatchAction)));
        return ecs.itemAction(args);
    },
    personTowerSource: function(args){
        return {
            sentinelComponent: ecs.healthSentinelComponent(args),
            args: args,
            personHeldComponent: ecs.personHeldComponent(args),
            towerSourceComponent: ecs.towerSourceComponent(args),
            ecsKey: "personTowerSource",
            slotComponent: ecs.slotComponent(args),
            healthComponent: ecs.hundredHealthComponent(args),
            uniqueComponent: ecs.assertUniqueComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    activeEntityComponent: function(args){
        return {
            startLifecycle: makeActiveLifecycleEntities,
            activeEntities: (args["activeEntities"] === undefined) ? [] : args["activeEntities"],
            args: args,
            makeLifecycleEntities: makeLifecycleEntities,
            ecsKey: "activeEntityComponent",
            endLifecycle: endLifecycle,
            entitiesMade: []
        };
    },
    chessItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessItem)));
        return ecs.item(args);
    },
    pathMoveComponent: function(args){
        return {
            startPosition: args['start'],
            ecsKey: "pathMoveComponent",
            args: args,
            endPosition: args['end'],
            ticks: 6
        };
    },
    panelRenderComponent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.panelRenderComponent)));
        args["offset"] = 2 * args.lineHeight + 4;
        return {
            renderPanelPiece: renderPanelPiece,
            foldRects: [],
            panelLength: 250,
            render: panelRender,
            args: args,
            priority: 12,
            ecsKey: "panelRenderComponent",
            offset: args['offset'],
            lineHeight: args['lineHeight'],
            buttonRects: [],
            renderState: "default"
        };
    },
    source: function(args){
        args["touchable"] = true;
        return {
            rendererComponents: [ecs.sourceRenderComponent(args), ecs.nameRenderComponent(args)],
            sentinelComponent: ecs.healthSentinelComponent(args),
            args: args,
            ecsKey: "source",
            clickComponent: ecs.traitClickComponent(args),
            healthComponent: ecs.healthComponent(args),
            uniqueComponent: ecs.assertUniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    dateSource_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateSource_personD)));
        return ecs.personTowerSource(args);
    },
    currencyGoalTrackComponent: function(args){
        return {
            currencyGoal: true,
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)].concat([ecs.makeEntityComponent(args)]),
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            minCurrency: args['minCurrency'],
            ecsKey: "currencyGoalTrackComponent",
            getInnerSt: blankStringFunction,
            checkCompleted: checkForGoalTrackCurrencySuccess,
            progress: _.reduce(args['minCurrency'], function(memo, val, key){ memo[key] = 0; return memo; }, {}),
            innerSt: getCurrencyGoalInnerSt
        };
    },
    talkSource_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkSource_agentE)));
        return ecs.personTowerSource(args);
    },
    jokeItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.jokeItem)));
        return ecs.item(args);
    },
    startExperience: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.startExperience)));
        return ecs.currencyStore(args);
    },
    clickText: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.clickText)));
        return {
            rendererComponents: [ecs.clickTextRenderComponent(args)],
            args: args,
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "clickText",
            clickComponent: ecs.clickKillComponent(args),
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args)
        };
    },
    flirtTower_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtTower_TargetA)));
        return ecs.personTower(args);
    },
    findJobWish: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.findJobWish)));
        return ecs.entityKillWish(args);
    },
    confession: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.confession)));
        return ecs.entityKillWish(args);
    },
    closeCall: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.closeCall)));
        return ecs.emotionSource(args);
    },
    traitClickComponent: function(args){
        return {
            ecsKey: "traitClickComponent",
            args: args,
            onClick: traitOnClick
        };
    },
    empathic: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.empathic)));
        return ecs.trait(args);
    },
    playerInform: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playerInform)));
        return {
            healthComponent: ecs.singleHealthComponent(args),
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "playerInform",
            args: args,
            rendererComponents: [ecs.playerInformRenderComponent(args)]
        };
    },
    opinionGoal: function(args){
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)],
            goalTrackComponent: ecs.haveDateGoalTrackComponent(args),
            args: args,
            timedDeathComponent: undefined,
            ecsKey: "opinionGoal",
            killExecutables: [ecs.timedMakeEntities(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    createModifyComponent: function(args){
        return {
            createModifiers: (args["createModifiers"] === undefined) ? {} : args["createModifiers"],
            ecsKey: "createModifyComponent",
            args: args
        };
    },
    memoryIsaacEntityComponent: function(args){
        return {
            memoryButtonKeys: csvIdentifiers.memoryTowerButton,
            startLifecycle: memoryStartLifecycle,
            args: args,
            makeLifecycleEntities: makeLifecycleEntities,
            isaacEntities: (args["isaacEntities"] === undefined) ? [] : args["isaacEntities"],
            ecsKey: "memoryIsaacEntityComponent",
            endLifecycle: endLifecycle,
            entitiesMade: []
        };
    },
    rememberButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.rememberButton)));
        return ecs.memoryTowerButton(args);
    },
    happyTraitMaker: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.happyTraitMaker)));
        return ecs.traitMaker(args);
    },
    haveDateGoalTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)],
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            ecsKey: "haveDateGoalTrackComponent",
            getInnerSt: haveDateInnerSt,
            checkCompleted: haveDateGoalCheck,
            opinionGoal: args['opinionGoal']
        };
    },
    inviteGoal_exerciseAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_exerciseAction)));
        return ecs.invitationGoal(args);
    },
    inviteGoal_mission1Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_mission1Action)));
        return ecs.invitationGoal(args);
    },
    towerButtonRender: function(args){
        return {
            priority: 9,
            ecsKey: "towerButtonRender",
            args: args,
            renderState: "default",
            render: towerButtonRender
        };
    },
    squashComponent: function(args){
        return {
            squashCurrency: args['squashCurrency'],
            squashFunction: undefined,
            ecsKey: "squashComponent",
            args: args
        };
    },
    playerKeyPressComponent: function(args){
        return {
            ecsKey: "playerKeyPressComponent",
            args: args,
            handleKeyPress: playerHandleKeyPress
        };
    },
    notificationControlComponent: function(args){
        return {
            checkMakePos: args['checkMakePos'],
            controlledKey: args['controlledKey'],
            commandKey: args['commandKey'],
            args: args,
            canMakeEntity: canMakeNotificationEntity,
            lockedEmotions: args['lockedEmotions'],
            getNotificationArgs: getNotificationArgs,
            ecsKey: "notificationControlComponent",
            makeEntity: makeNotificationEntity
        };
    },
    tower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.tower)));
        args["towerSourceKey"] = args.key.replace('Tower', 'Source');
        return {
            args: args,
            sentinelComponent: ecs.sourceSentinelComponent(args),
            tickEmotionComponent: ecs.tickEmotionComponent(args),
            healthModifyComponent: ecs.healthModifyComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            damageComponent: (args.damageMultipliers) ? ecs.damageComponent(args) : undefined,
            managedComponent: ecs.managedComponent(args),
            executeComponent: ecs.aliveMakeComponent(args),
            ecsKey: "tower",
            rendererComponents: [ecs.towerRenderComponent(args), ecs.emotionSourceRenderComponent(args)],
            emotionSourceComponent: ecs.towerEmotionSourceComponent(args),
            tickComponent: ecs.tickRenderActivateComponent(args),
            healthComponent: ecs.hundredHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            wishMakingComponent: ecs.producerWishMakingComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args)
        };
    },
    peopleGoal: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.peopleGoal)));
        return ecs.entityCreateWish(args);
    },
    pathRenderComponent: function(args){
        return {
            priority: 5,
            ecsKey: "pathRenderComponent",
            args: args,
            renderState: "default",
            render: pathRender
        };
    },
    meetPersonItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meetPersonItem)));
        return ecs.item(args);
    },
    chatSource_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatSource_TargetA)));
        return ecs.personTowerSource(args);
    },
    meditateSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meditateSource)));
        return ecs.towerSource(args);
    },
    chatButton_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatButton_personC)));
        return ecs.personTowerButton(args);
    },
    proposeActionGoalTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)].concat([ecs.makeEntityComponent(args), ecs.itemActionSuccessComponent(args), ecs.healEntities(args), ecs.itemActionMakeMemory(args)]).concat([ecs.personRelationshipExec(args)]).concat([ecs.marryPerson(args)]),
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            origCurrency: _.clone(args.currency),
            currency: args['currency'],
            ecsKey: "proposeActionGoalTrackComponent",
            getInnerSt: blankStringFunction,
            checkCompleted: checkItemActionCompleted,
            percentCompleted: itemActionPercentCompleted
        };
    },
    randomOpenPositionExec: function(args){
        return {
            ecsKey: "randomOpenPositionExec",
            args: args,
            execute: randomOpenPositionExec
        };
    },
    killEntity: function(args){
        return {
            ecsKey: "killEntity",
            args: args,
            execute: killEntity
        };
    },
    sadTraitMaker: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.sadTraitMaker)));
        return ecs.traitMaker(args);
    },
    opinionCreateExec: function(args){
        return {
            ecsKey: "opinionCreateExec",
            args: args,
            execute: opinionCreateExec,
            buttonKeys: (args["buttonKeys"] === undefined) ? [] : args["buttonKeys"]
        };
    },
    shareEmotionAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.shareEmotionAction)));
        return ecs.personAction(args);
    },
    creep: function(args){
        args["currencies"] = simpleDict(args.emotion, 5);
        args["health"] = (args["health"] === undefined) ? 50 : args["health"];
        return {
            pathVelocityComponent: ecs.pathVelocityComponent(args),
            rendererComponents: [ecs.creepRenderComponent(args), ecs.currencyStoreRenderComponent(args), ecs.hitRenderComponent(args)],
            damageableComponent: ecs.damageableComponent(args),
            args: args,
            ecsKey: "creep",
            tickComponent: ecs.creepTickComponent(args),
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            healthComponent: ecs.healthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            dayResponseComponent: ecs.killDayEndComponent(args)
        };
    },
    controlPanelComponent: function(args){
        return {
            ecsKey: "controlPanelComponent",
            args: args,
            panelKeys: ["#day", "#goals", "#calculatedCurrency", "#focusWill", "#spells", "#towers", "#actions"]
        };
    },
    isaacEntityComponent: function(args){
        return {
            startLifecycle: makeIsaacLifecycleEntities,
            args: args,
            makeLifecycleEntities: makeLifecycleEntities,
            isaacEntities: (args["isaacEntities"] === undefined) ? [] : args["isaacEntities"],
            ecsKey: "isaacEntityComponent",
            endLifecycle: endLifecycle,
            entitiesMade: []
        };
    },
    flirtConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtConvert)));
        return ecs.currencyConverter(args);
    },
    acquaintance: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.acquaintance)));
        return ecs.opinion(args);
    },
    notification: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "notification",
            args: args,
            notifyComponent: ecs.notifyComponent(args)
        };
    },
    gameStage: function(args){
        return {
            rendererComponents: [ecs.gameStageRenderComponent(args)],
            args: args,
            createExecutables: [ecs.makeOnCreateEntityExec(args)],
            ecsKey: "gameStage",
            stageChangeComponent: ecs.stageChangeComponent(args),
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            dayResponseComponent: ecs.gameStageDayResponseComponent(args),
            notificationComponents: [ecs.gameStageNotificationComponent(args)]
        };
    },
    brokenWill: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.brokenWill)));
        return ecs.emotionCurrencyTicker(args);
    },
    dating: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dating)));
        return ecs.opinion(args);
    },
    builtSourceUniqueComponent: function(args){
        return {
            ecsKey: "builtSourceUniqueComponent",
            args: args,
            uniqueDuplicateEvent: builtSourceUniqueDuplicateEvent
        };
    },
    emotionTickModifyComponent: function(args){
        return {
            args: args,
            ecsKey: "emotionTickModifyComponent",
            towerTrait: args['towerTrait'],
            emotionState: args['emotionState'],
            factor: args['factor']
        };
    },
    clickTextRenderComponent: function(args){
        return {
            priority: 9,
            ecsKey: "clickTextRenderComponent",
            args: args,
            renderState: "default",
            render: clickTextRender
        };
    },
    creepMapSpawnComponent: function(args){
        return {
            mapPostSpawn: trueFunction,
            mapSpawnPos: mapSpawnPos,
            spawnedToday: false,
            args: args,
            extremeSpawnFraction: (args["extremeSpawnFraction"] === undefined) ? 0.005 : args["extremeSpawnFraction"],
            mapSpawnFraction: (args["mapSpawnFraction"] === undefined) ? 0.001 : args["mapSpawnFraction"],
            ecsKey: "creepMapSpawnComponent",
            mapSpawnChance: creepMapEmotionSpawnChance,
            mapSpawnKey: "mapEmotion"
        };
    },
    bombButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.bombButton)));
        return ecs.towerButton(args);
    },
    invite_getEvidenceAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_getEvidenceAction)));
        return ecs.invitationAction(args);
    },
    inviteGoal_driveCabAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_driveCabAction)));
        return ecs.invitationGoal(args);
    },
    holdControlComponent: function(args){
        return {
            holdControl: true,
            ecsKey: "holdControlComponent",
            args: args
        };
    },
    playerInformRenderComponent: function(args){
        return {
            informText: args['informText'],
            render: playerInformRender,
            args: args,
            priority: 9,
            ecsKey: "playerInformRenderComponent",
            renderState: "default"
        };
    },
    uniqueComponent: function(args){
        return {
            ecsKey: "uniqueComponent",
            args: args,
            uniqueDuplicateEvent: falseFunction
        };
    },
    meetPersonGoalTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)].concat([ecs.makeEntityComponent(args), ecs.itemActionSuccessComponent(args), ecs.healEntities(args), ecs.itemActionMakeMemory(args)]).concat([ecs.addRandomPersonToMap(args)]),
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            origCurrency: _.clone(args.currency),
            currency: args['currency'],
            ecsKey: "meetPersonGoalTrackComponent",
            getInnerSt: blankStringFunction,
            checkCompleted: checkItemActionCompleted,
            percentCompleted: itemActionPercentCompleted
        };
    },
    invite_relaxAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_relaxAction)));
        return ecs.invitationAction(args);
    },
    didWell: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.didWell)));
        return ecs.emotionSource(args);
    },
    dateJoy: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateJoy)));
        return ecs.emotionSource(args);
    },
    outgoing_ext: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.outgoing_ext)));
        return ecs.sourceExtension(args);
    },
    notificationWish: function(args){
        args["focusCost"] = 2;
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)].concat([ecs.emotionSourceRenderComponent(args), ecs.focusRenderComponent(args)]),
            args: args,
            goalTrackComponent: ecs.notificationGoalTrackComponent(args),
            emotionSourceComponent: ecs.infiniteEmotionSourceComponent(args),
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "notificationWish",
            squashComponent: (args.squashCurrency) ? ecs.squashComponent(args) : undefined,
            killExecutables: [ecs.timedMakeEntities(args)].concat([ecs.wishTraitHealthExec(args)]),
            healthComponent: ecs.singleHealthComponent(args),
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args),
            notificationComponents: [ecs.notificationWishNotificationComponent(args)]
        };
    },
    calculatedCurrencyComponent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.calculatedCurrencyComponent)));
        return {
            storeCurrency: storeCurrency,
            factors: args['factors'],
            satisfiesCurrencyReq: satisfiesCurrencyReq,
            args: args,
            ecsKey: "calculatedCurrencyComponent",
            currencies: (args["currencies"] === undefined) ? {} : args["currencies"]
        };
    },
    personAquariumPieceComponent: function(args){
        return {
            personalityTrait: args['trait'],
            ecsKey: "personAquariumPieceComponent",
            pieceDiscovered: false,
            sourceTrait: args['sourceTrait'],
            args: args
        };
    },
    knownAgent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.knownAgent)));
        return ecs.opinion(args);
    },
    playSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playSource)));
        return ecs.towerSource(args);
    },
    friendGoal: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.friendGoal)));
        return ecs.entityCreateWish(args);
    },
    dateSource_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateSource_TargetA)));
        return ecs.personTowerSource(args);
    },
    ambushTower_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushTower_personA)));
        return ecs.personTower(args);
    },
    contactAgent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.contactAgent)));
        return ecs.personAction(args);
    },
    holcombTerrorEmotionSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.holcombTerrorEmotionSource)));
        return ecs.emotionSource(args);
    },
    sourceRenderComponent: function(args){
        return {
            priority: 6,
            ecsKey: "sourceRenderComponent",
            args: args,
            renderState: "default",
            render: sourceRender
        };
    },
    inviteGoal_mission2Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_mission2Action)));
        return ecs.invitationGoal(args);
    },
    entityLifecycleComponent: function(args){
        return {
            startLifecycle: args['startLifecycle'],
            args: args,
            makeLifecycleEntities: makeLifecycleEntities,
            ecsKey: "entityLifecycleComponent",
            endLifecycle: endLifecycle,
            entitiesMade: []
        };
    },
    chatSource_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatSource_agentE)));
        return ecs.personTowerSource(args);
    },
    emotionStateComponent: function(args){
        return {
            checkTag: args['checkTag'],
            source: args['source'],
            ecsKey: "emotionStateComponent",
            args: args,
            result: args['result']
        };
    },
    relaxButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.relaxButton)));
        return ecs.towerButton(args);
    },
    traitTickComponent: function(args){
        return {
            ecsKey: "traitTickComponent",
            args: args,
            inactiveTicks: 0,
            tick: traitTick
        };
    },
    memoryTickComponent: function(args){
        return {
            ecsKey: "memoryTickComponent",
            tick: memoryTick,
            flashbackTicks: 0,
            args: args,
            traitMakeChance: 0.25
        };
    },
    dateTower_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateTower_TargetA)));
        return ecs.personTower(args);
    },
    emotionCurrencyTicker: function(args){
        return {
            ecsKey: "emotionCurrencyTicker",
            args: args,
            sentinelComponent: ecs.emotionSentinelComponent(args),
            identityComponent: ecs.identityComponent(args),
            tickEmotionComponent: ecs.tickEmotionComponent(args)
        };
    },
    healthModifyComponent: function(args){
        return {
            activeHealthChange: 30,
            args: args,
            activated: false,
            ecsKey: "healthModifyComponent",
            idleHealthChange: -10,
            healthModifyAmount: healthModifyAmount
        };
    },
    complimentItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.complimentItem)));
        return ecs.item(args);
    },
    dayCounterComponent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dayCounterComponent)));
        return {
            ecsKey: "dayCounterComponent",
            args: args,
            ticks: args['ticks'],
            getPartOfDay: getPartOfDay,
            impulseTicks: args['ticks']
        };
    },
    relaxedWill: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.relaxedWill)));
        return ecs.emotionCurrencyTicker(args);
    },
    teamFail: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.teamFail)));
        return ecs.emotionSource(args);
    },
    racist: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.racist)));
        return ecs.trait(args);
    },
    spyTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.spyTower)));
        return ecs.tower(args);
    },
    meetPersonTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meetPersonTower)));
        return ecs.tower(args);
    },
    travelButton: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.travelButton)));
        return ecs.towerButton(args);
    },
    gameStageDayResponseComponent: function(args){
        return {
            ecsKey: "gameStageDayResponseComponent",
            dayEnd: gameStageDayEnd,
            dayStart: args['dayStart'],
            args: args,
            dayChange: args['dayChange']
        };
    },
    sourceExtensionMapSpawnComponent: function(args){
        return {
            mapPostSpawn: trueFunction,
            mapSpawnPos: sourceExtensionMapSpawnPos,
            args: args,
            mapSpawnBaseChance: 0.03,
            ecsKey: "sourceExtensionMapSpawnComponent",
            mapSpawnChance: sourceExtensionMapSpawnChance,
            mapSpawnKey: sourceExtensionMapSpawnKey
        };
    },
    memoryPonderExec: function(args){
        return {
            trait: args['trait'],
            ecsKey: "memoryPonderExec",
            args: args,
            execute: memoryPonderExec,
            currencyBoost: args['currencyBoost']
        };
    },
    dateSource_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateSource_agentE)));
        return ecs.personTowerSource(args);
    },
    infiniteEmotionSourceComponent: function(args){
        return {
            ticks: (args["ticks"] === undefined) ? 2 : args["ticks"],
            spawnSourceKey: args['spawnSourceKey'],
            spawnCount: 0,
            spawnComplete: resetEmotionSource,
            args: args,
            shouldTick: trueFunction,
            emotions: (args["emotions"] === undefined) ? unrollDict(args.emotionsToAdd) : args["emotions"],
            traits: (args["traits"] === undefined) ? [] : args["traits"],
            ecsKey: "infiniteEmotionSourceComponent",
            impulseTicks: (args["impulseTicks"] === undefined) ? 60 : args["impulseTicks"],
            border: "#ffff00"
        };
    },
    emotionSource: function(args){
        args["draggable"] = false;
        return {
            rendererComponents: [ecs.emotionSourceRenderComponent(args), ecs.emotionSourceUiRenderComponent(args), ecs.focusRenderComponent(args)],
            args: args,
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            emotionSourceComponent: ecs.emotionSourceComponent(args),
            ecsKey: "emotionSource",
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    flirtTower_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtTower_agentE)));
        return ecs.personTower(args);
    },
    proposal: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.proposal)));
        return ecs.entityReplace(args);
    },
    failMakeEntityComponent: function(args){
        args["failEntities"] = (args["failEntities"] === undefined) ? [] : args["failEntities"];
        return {
            entitiesToMake: args['failEntities'],
            args: args,
            execute: executeMakeEntities,
            ecsKey: "failMakeEntityComponent"
        };
    },
    emotionEntityMaker: function(args){
        return {
            ecsKey: "emotionEntityMaker",
            args: args,
            emotionEntityMakerComponent: ecs.emotionEntityMakerComponent(args),
            identityComponent: ecs.identityComponent(args)
        };
    },
    chatTower_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatTower_personA)));
        return ecs.personTower(args);
    },
    chatTower_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatTower_personB)));
        return ecs.personTower(args);
    },
    chatTower_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatTower_personC)));
        return ecs.personTower(args);
    },
    chatTower_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatTower_personD)));
        return ecs.personTower(args);
    },
    bullet: function(args){
        return {
            healthComponent: ecs.singleHealthComponent(args),
            ecsKey: "bullet",
            rendererComponents: [ecs.bulletRenderComponent(args)],
            tickComponent: ecs.bulletTickComponent(args),
            args: args
        };
    },
    wish: function(args){
        args["focusCost"] = 2;
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 180 : args["timeToDeath"];
        return {
            rendererComponents: [ecs.goalRenderComponent(args)].concat([ecs.emotionSourceRenderComponent(args), ecs.focusRenderComponent(args)]),
            args: args,
            goalTrackComponent: args['goalTrackComponent'],
            emotionSourceComponent: ecs.infiniteEmotionSourceComponent(args),
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "wish",
            squashComponent: (args.squashCurrency) ? ecs.squashComponent(args) : undefined,
            killExecutables: [ecs.timedMakeEntities(args)].concat([ecs.wishTraitHealthExec(args)]),
            healthComponent: ecs.singleHealthComponent(args),
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    invite_chessAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_chessAction)));
        return ecs.invitationAction(args);
    },
    dailyCurrencyStore: function(args){
        return {
            rendererComponents: [ecs.currencyStoreRenderComponent(args)],
            args: args,
            ecsKey: "dailyCurrencyStore",
            currencyStoreComponent: ecs.currencyStoreComponent(args),
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            dayResponseComponent: ecs.refreshCurrencyDayResponseComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    dateTower_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateTower_agentE)));
        return ecs.personTower(args);
    },
    meditateConvert: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meditateConvert)));
        return ecs.currencyConverter(args);
    },
    personTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.personTower)));
        args["towerSourceKey"] = args.key.replace('Tower', 'Source');
        return {
            args: args,
            sentinelComponent: ecs.sourceSentinelComponent(args),
            tickEmotionComponent: ecs.tickEmotionComponent(args),
            managedComponent: ecs.managedComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            damageComponent: (args.damageMultipliers) ? ecs.damageComponent(args) : undefined,
            healthModifyComponent: ecs.healthModifyComponent(args),
            executeComponent: ecs.aliveMakeComponent(args),
            ecsKey: "personTower",
            rendererComponents: [ecs.towerRenderComponent(args), ecs.emotionSourceRenderComponent(args)],
            emotionSourceComponent: ecs.towerEmotionSourceComponent(args),
            tickComponent: ecs.tickRenderActivateComponent(args),
            healthComponent: ecs.hundredHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            positionComponent: ecs.positionComponent(args),
            wishMakingComponent: ecs.producerWishMakingComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args)
        };
    },
    inviteGoal_playAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.inviteGoal_playAction)));
        return ecs.invitationGoal(args);
    },
    rendererComponent: function(args){
        return {
            priority: args['priority'],
            ecsKey: "rendererComponent",
            args: args,
            renderState: "default",
            render: args['render']
        };
    },
    rememberSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.rememberSource)));
        return ecs.memoryTowerSource(args);
    },
    playAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.playAction)));
        return ecs.itemAction(args);
    },
    mission3Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.mission3Action)));
        return ecs.itemAction(args);
    },
    invite_mission2Action: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.invite_mission2Action)));
        return ecs.invitationAction(args);
    },
    terrorEvent: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.terrorEvent)));
        return ecs.entityReplace(args);
    },
    dateButton_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.dateButton_agentE)));
        return ecs.personTowerButton(args);
    },
    traitScreenRenderComponent: function(args){
        return {
            traitImage: args['traitImage'],
            render: traitRender,
            args: args,
            priority: 6,
            ecsKey: "traitScreenRenderComponent",
            renderState: args['key']
        };
    },
    chatSource_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatSource_personC)));
        return ecs.personTowerSource(args);
    },
    dayResponseComponent: function(args){
        return {
            dayEnd: args['dayEnd'],
            ecsKey: "dayResponseComponent",
            args: args,
            dayStart: args['dayStart'],
            dayChange: args['dayChange']
        };
    },
    chatSource_personA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatSource_personA)));
        return ecs.personTowerSource(args);
    },
    managedComponent: function(args){
        return {
            managerKey: args['sourceTrait'],
            ecsKey: "managedComponent",
            args: args
        };
    },
    activatable: function(args){
        args["tags"] = (args["tags"] === undefined) ? _.keys(args.currency) : args["tags"];
        return {
            rendererComponents: [ecs.focusRenderComponent(args)],
            sentinelComponent: ecs.activatableSentinelComponent(args),
            tickEmotionComponent: ecs.tickEmotionComponent(args),
            args: args,
            createExecutables: [ecs.activatableUpdateExec(args)],
            activatableComponent: ecs.activatableComponent(args),
            ecsKey: "activatable",
            killExecutables: [ecs.activatableUpdateExec(args)],
            uniqueComponent: ecs.uniqueComponent(args),
            identityComponent: ecs.identityComponent(args),
            focusCostComponent: ecs.focusCostComponent(args)
        };
    },
    relaxItem: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.relaxItem)));
        return ecs.item(args);
    },
    chatSource_personD: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chatSource_personD)));
        return ecs.personTowerSource(args);
    },
    talkButton_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkButton_TargetA)));
        return ecs.personTowerButton(args);
    },
    flirtButton_TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.flirtButton_TargetA)));
        return ecs.personTowerButton(args);
    },
    buyRingAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.buyRingAction)));
        return ecs.itemAction(args);
    },
    timedItem: function(args){
        args["timeToDeath"] = (args["timeToDeath"] === undefined) ? 30 : args["timeToDeath"];
        return {
            itemComponent: ecs.itemComponent(args),
            absolutePositionComponent: ecs.absolutePositionComponent(args),
            args: args,
            timedDeathComponent: ecs.timedDeathComponent(args),
            ecsKey: "timedItem",
            killExecutables: [ecs.timedMakeEntities(args)],
            healthComponent: ecs.singleHealthComponent(args),
            identityComponent: ecs.identityComponent(args),
            uiClickComponent: ecs.emotionSourceUiClickComponent(args),
            wishMakingComponent: ecs.itemWishMakingComponent(args),
            createModifyComponent: ecs.createModifyComponent(args)
        };
    },
    chessProject: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.chessProject)));
        return ecs.project(args);
    },
    emotionSentinelComponent: function(args){
        return {
            emotionSentinel: args['emotionSentinel'],
            args: args,
            active: undefined,
            ecsKey: "emotionSentinelComponent",
            lastActive: undefined,
            sentinel: emotionSentinelCheck
        };
    },
    clickComponent: function(args){
        return {
            ecsKey: "clickComponent",
            args: args,
            onClick: args['onClick']
        };
    },
    talkButton_agentE: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.talkButton_agentE)));
        return ecs.personTowerButton(args);
    },
    jokeAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.jokeAction)));
        return ecs.personAction(args);
    },
    ambushTower_personB: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushTower_personB)));
        return ecs.personTower(args);
    },
    ambushTower_personC: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ambushTower_personC)));
        return ecs.personTower(args);
    },
    notificationGoalTrackComponent: function(args){
        return {
            successExecutables: [ecs.goalCompleteExec(args), ecs.informSuccessExec(args)],
            args: args,
            successChance: (args["successChance"] === undefined) ? false : args["successChance"],
            ecsKey: "notificationGoalTrackComponent",
            getInnerSt: blankStringFunction,
            hitCount: args['hitCount'],
            checkCompleted: checkForNotificationGoalSuccess
        };
    },
    ecstaticSentinel: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.ecstaticSentinel)));
        return ecs.emotionSentinel(args);
    },
    TargetA: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.TargetA)));
        return ecs.person(args);
    },
    meditateTower: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.meditateTower)));
        return ecs.tower(args);
    },
    focusComponent: function(args){
        return {
            ecsKey: "focusComponent",
            args: args,
            focusMax: 100,
            focusUsed: 0
        };
    },
    joyEmotionPiece: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.joyEmotionPiece)));
        return ecs.emotionPiece(args);
    },
    complimentAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.complimentAction)));
        return ecs.personAction(args);
    },
    travelSource: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.travelSource)));
        return ecs.towerSource(args);
    },
    spyAction: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.spyAction)));
        return ecs.itemAction(args);
    },
    activatableComponent: function(args){
        return {
            ecsKey: "activatableComponent",
            args: args,
            activated: false,
            canActivate: (args["canActivate"] === undefined) ? trueFunction : args["canActivate"],
            activateActions: (args["activateActions"] === undefined) ? deriveActivateActions(args) : args["activateActions"]
        };
    },
    wishesToTalk: function(args){
        updateArgs(args, JSON.parse(JSON.stringify(allArgs.wishesToTalk)));
        return ecs.trait(args);
    }
};


var setAbsPosFromRect = function(rect){
    this.x = rect[0];
    this.y = rect[1];
    this.size[0] = rect[2];
    this.size[1] = rect[3];
}


var deriveActivateActions = function(args){
    var currencyKeys = _.keys(args.currency);
    return _.chain(allArgs)
        .filter(function(args){
            return args.items &&
                _.intersection(currencyKeys, _.keys(args.currency)).length > 0;
        })
        .map(function(args){
            return args.key;
        })
        .value();
};


var activatableSentinel = function(entity, world){
    return entity.activatableComponent.activated; //also make sure that there is an action here
};


var activatableUpdateExecute = function(entity, world){
    world.game.ui.toResetActivatables = true;
};


var activateRender = function(rect){
    if (this.activated){
        ctx.drawImage(getImage('activeHex'), rect[0], rect[1]);
        this.activated = false;
    }
}


var makeActiveLifecycleEntities = function(entity, world){
    this.makeLifecycleEntities(entity, world, this.activeEntities);
};


var addPersonAndOpinionExec = function(entity, world){
    var person = world.entityForKey(this.personKey);
    if (!person){
        person = makeEcs(this.personKey);
        world.addEntity(person);
    }

    person.personalityComponent.addOpinionToPersonality(this.opinionKey, person, world);
    entity.healthComponent.health = 0;
};


var assertUnique = function(entity){
    console.log('Tried to make a duplicate of ' + entity.identityComponent.key);
    return false;
};


var checkEntityForBoost = function(entity){
    var that = this
    return entity.boostSocketComponent &&
        _.all(this.traits, function(trait){
            return _.contains(entity.boostSocketComponent.boostTraits, trait);
        });
};


var boostRender = function(rect, entity){
    ctx.drawImage(getImage('towerHex'), rect[0], rect[1]);
    ctx.fillStyle = '#ffff00';
    ctx.fillText(entity.identityComponent.name, rect[0] + rect[2] / 3, rect[1] + 2 * rect[3] / 3);
}


var builtSourceUniqueDuplicateEvent = function(entity, orig, world){
    orig.healthComponent.health += 5;
    return false;
};


var builtSourceMapSpawnChance = function(entity, world){
    return (this.shouldExpand && entity.positionComponent.defaultSource === undefined) ? 1 : 0;
};

var builtSourceMapSpawnPos = function(entity, world){
    var adjPos = _.chain(world.entities)
        .filter(function(chkEntity){
            return chkEntity.identityComponent &&
                (chkEntity.identityComponent.key === entity.identityComponent.key ||
                 (chkEntity.sourceExtensionComponent && 
                  chkEntity.sourceExtensionComponent.sourceKey === entity.identityComponent.key));
        })
        .map(function(posEntity){
            return world.hexMap.neighbors(posEntity.positionComponent.x, posEntity.positionComponent.y);
        })
        .flatten(true)
        .filter(function(neighbor){
            return world.isPosBuildable(neighbor);
        })
        .sample()
        .value();
    return adjPos ? adjPos : world.randomOpenPosition();
};

var builtSourceMapPostSpawn = function(entity, world){
    this.shouldExpand = false;
};


var sourceInfoRender = function(rect, entity, ui){
    var towerLine = 'Towers: ' + entity.entityManagerComponent.managedEntityCount(entity, ui.world) + '/' + 
        entity.entityManagerComponent.maxEntityCount(entity);
    ui.addLine('#' + entity.identityComponent.key, towerLine, true);
    ui.addLine('#' + entity.identityComponent.key, 'xp: ' + entity.healthComponent.health);
};


var sourceActionRender = function(rect, entity, ui){
    var that = this;
    
    var sources = _.chain(ui.world.entities)
        .filter(function(buttonEntity){
            return buttonEntity.buttonControlComponent && 
                _.contains(buttonEntity.identityComponent.tags, entity.identityComponent.key);
        })
        .map(function(entity){
            return ui.world.entityForKey(entity.buttonControlComponent.sourceKey);
        })
        .value();

    
    var items = _.filter(ui.world.entities, function(entity){
        return entity.itemComponent;
    });

    var itemCounts = _.countBy(items, function(item){
        return item.identityComponent.key;
    });

    
    items = _.uniq(items, false, function(item){
        return item.identityComponent.key;
    });

    _.chain(this.itemActionFunctions)
        .map(function(val, key){ return key; })
        .filter(function(key){
            return !_.any(ui.world.entities, function(entity){
                return entity.identityComponent && entity.identityComponent.uid == key;
            });
        })
        .each(function(keyToRemove){
            that.itemActionFunctions[keyToRemove] = undefined;
        });

    var actions = _.map(sources, function(source){
        return _.chain(source.towerSourceComponent.towerActions)
            .map(function(actionKey){
                return ui.world.entityForKey(mangleIdentityWithTrait(actionKey, entity.identityComponent.key));
            })
            .filter(_.identity)
            .value();
    });

    var actionsForItem = function(item){
        return _.map(actions, function(actionList){
            return _.filter(actionList, function(action){
                return action.itemActionComponent.checkItemForAction(item, entity);
            });
        });
    };

    var foldPanel = ui.addFoldLine('#' + entity.identityComponent.key, undefined, '#actions');
    foldPanel.foldLines = _.chain(items)
        .map(function(item){
            var itemActions = actionsForItem(item);

            var itemKey = item.identityComponent.key;
            var itemName = ((itemCounts[itemKey] > 1) ? ('' + itemCounts[itemKey] + 'x') : '') + item.identityComponent.name;

            return _.chain(itemActions)
                .map(function(actionList, i){
                    var towerSource = sources[i].identityComponent.key;

                    return _.map(actionList, function(action){
                        var line = {
                            line: [
                                itemName,
                                {
                                    buttonFunction: that.makeItemActionFunction(action, item, towerSource, ui),
                                    text: action.identityComponent.name
                                },
                                minDictString(action.goalTrackComponent.currency)
                            ]
                        };
                        ui.addFoldLine('#actions', line, '#' + entity.identityComponent.key);
                        return line;
                    });
                })
                .flatten()
                .value();
        })
        .flatten()
        .value();
};

var makeItemActionFunction = function(action, item, towerSource, ui){
    var itemActionFunctionKey = action.identityComponent.uid;
    
    if (this.itemActionFunctions[itemActionFunctionKey]){
        return this.itemActionFunctions[itemActionFunctionKey];
    }
    
    var itemActionFunction = function(){
        if (!ui.world.player.calculatedCurrencyComponent.satisfiesCurrencyReq(action.itemActionComponent.startCost)){
            return;
        }
        var sourceEntity = ui.world.entityForKey(towerSource);
        ui.startAction(item, action, sourceEntity);
    };
    this.itemActionFunctions[itemActionFunctionKey] = itemActionFunction;
    return itemActionFunction;
};


var bulletTick = function(entity){
    entity.healthComponent.health = 0;
};


var bulletRender = function(rect, entity, ui){
    var startRect = ui.world.hexMap.cellForPosComp(this.bulletSourcePos).rect;
    var endRect = ui.world.hexMap.cellForPosComp(this.bulletEndPos).rect;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(startRect[0] + startRect[2] / 2, startRect[1] + startRect[3] / 2);
    var endPos = [endRect[0] + endRect[2] / 2, endRect[1] + endRect[3] / 2];
    ctx.lineTo(endPos[0], endPos[1]);
    ctx.stroke();
    ctx.fillStyle = (this.bonus > 2) ? '#ff0000' :
        (this.bonus > 1) ? '#ffff00' : 
        '#ffffff';
    ctx.fillText('' + this.damage + '*' + this.bonus + '=' + this.damage * this.bonus, endPos[0], endPos[1] - 10);
};


var clickTextRender = function(rect, entity){
    ctx.fillStyle = '#ff00ff';
    ctx.fillText(entity.identityComponent.name, rect[0], rect[1] + rect[3] / 4);
};


var clickKill = function(entity){
    entity.healthComponent.health = 0;
};


var controlPanelRender = function(rect, entity, ui){
    ctx.fillStyle = '#666666';
    var width = 125;
    ctx.fillRect(rect[0], rect[1], width, entity.controlPanelComponent.panelKeys.length * 16);
    entity.absolutePositionComponent.size = [width, entity.controlPanelComponent.panelKeys.length * 16];
    ctx.fillStyle = '#ffffff';
    _.each(entity.controlPanelComponent.panelKeys, function(key, i){
        ctx.fillText(key, 0, (i + 1) * 16);
    });
};


var controlPanelClick = function(pos, entity, ui){
    var panelKey = entity.controlPanelComponent.panelKeys[Math.floor(pos[1] / 16)];
    var infoPanel = ui.getPanel(panelKey);
    flipPanel(infoPanel, ui);
};

var flipPanel = function(infoPanel, ui){
    if (infoPanel.panelComponent.closed){
        ui.showPanel(infoPanel);
    }
    else{
        infoPanel.panelComponent.closed = true;
        infoPanel.panelComponent.minimized = true;
    }
};


var controlPanelHandleKeyPress = function(key, entity, ui){
    var panelDict = {
        68: '#day',
        71: '#goals',
        67: '#calculatedCurrency',
        70: '#focusWill',
        83: '#spells',
        84: '#towers',
        65: '#actions',
        72: '#self'
    };
    var panelKey = panelDict[key];
    if (panelKey !== undefined){
        var infoPanel = ui.getPanel(panelKey);
        flipPanel(infoPanel, ui);
    }
};


var getEmotionRect = function(rect, entity, rectCount){
    var dx = entity.pathVelocityComponent.forward ? -12 : 12;
    var x = rect[0] + rect[2] / 2 + dx;
    var y = rect[1] + rect[3] / 3 + 10 * rectCount;
    var size = Math.floor(entity.healthComponent.health / 5);
    return [x, y, size, size];
};

var EMOTION_FILLSTYLES = {
    anger: '#ff0000',
    sadness: '#0000ff',
    joy: '#ffff00',
    disgust: '#00ff00',
    fear: '#ff00ff'
};

var creepRender = function(rect, entity, ui, rectCount){
    var emotion = entity.damageableComponent;
    var emotionRect = getEmotionRect(rect, entity, rectCount);
    
    if (entity.pathVelocityComponent.path){
        var pathMoveComponent = entity.pathVelocityComponent.path.pathMoveComponent;
        var pos = entity.pathVelocityComponent.forward ? 
            pathMoveComponent.endPosition : 
            pathMoveComponent.startPosition;
        pos = {x: pos[0], y: pos[1]}
        
        var nextRect = ui.world.hexMap.cellForPosComp(pos).rect;
        nextRect = getEmotionRect(nextRect, entity, rectCount);
        
        var fraction = 1 - (entity.pathVelocityComponent.ticks / pathMoveComponent.ticks);
        
        emotionRect = [emotionRect[0] + ((nextRect[0] - emotionRect[0]) * fraction),
                       emotionRect[1] + ((nextRect[1] - emotionRect[1]) * fraction),
                       emotionRect[2], emotionRect[3]];
    }

    if (entity.healthComponent.damageFactor === 0){
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(emotionRect[0] - 2, emotionRect[1] - 2, emotionRect[2] + 4, emotionRect[2] + 4);
    }

    ctx.fillStyle = (this.activated > 0) ? '#ffffff' : EMOTION_FILLSTYLES[emotion.emotion];
    ctx.fillRect(emotionRect[0], emotionRect[1], emotionRect[2], emotionRect[3]);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(emotionRect[0], emotionRect[1] - 2, emotionRect[2] * entity.healthComponent.health / 100, 2);
};



var creepMapEmotionSpawnChance = function(entity, world){
    var tags = emotionTags(world.player);
    var emotion = entity.damageableComponent.emotion;
    var emotionList = emotionTable[emotion];
    var extremeEmotion = emotionList[emotionList.length - 1];
    return (_.contains(tags, extremeEmotion)) ? this.extremeSpawnFraction : this.mapSpawnFraction;
};


var creepTick = function(entity, world){
    entity.healthComponent.health -= 2;
    _.each(entity.rendererComponents, function(renderComponent){
        if (renderComponent.activated){
            renderComponent.activated -= 1;
        }
    });
};


var checkForGoalTrackCurrencySuccess = function(player){
    var progress = this.progress;
    return _.every(this.minCurrency, function(val, key){ return progress[key] >= val; });
};

var getCurrencyGoalInnerSt = function(){
    return _.reduce(this.minCurrency, function(memo, val, key){
        return memo + key + ': ' + entity.goalTrackComponent.progress[key] + '/' + val;
    }, '');
};


var goalCurrencyNotification = function(entity, args){
    _.each(entity.goalTrackComponent.minCurrency, function(val, key){
        if (args.currencyChange[key] !== undefined){
            entity.goalTrackComponent.progress[key] += args.currencyChange[key];
        }
    });
};


var currencyStoreRender = function(rect, entity, ui){
    if (_.keys(entity.currencyStoreComponent.currencies).length > 0){
        ui.addCurrencyLine(entity.identityComponent.name, entity.currencyStoreComponent.currencies);
    }
}


var storeCurrency = function(currency, player){
    var that = this;
    _.each(currency, function(val, key){
        if (that.currencies[key] === undefined){
            that.currencies[key] = 0;
        }

        var startValue = that.currencies[key];

        if (player && _.contains(KEY_EMOTIONS, key)){
            var playerCurrency = player.calculatedCurrencyComponent.currencies[key];
            playerCurrency = playerCurrency ? playerCurrency : 0;
            if ((playerCurrency == MAX_KEY_EMOTION && val > 0) ||
                (playerCurrency == 0 && val < 0)){
                return;
            }
        }

        that.currencies[key] += val;
    });
};

var satisfiesCurrencyReq = function(req){
    var that = this;
    return _.all(req, function(val, key){
        return that.currencies[key] + val >= 0;
    });
};


var refreshCurrencyDayEnd = function(entity, world){
    entity.currencyStoreComponent.currencies = {};
};


var dailyEntityMake = function(entity, world){
    var newEntity = makeEcs(this.dayStartEntity);
    world.addEntity(newEntity);
};


var getAllEmotionParts = function(){
    return [this.emotion].concat(this.traits);
}


var getPartOfDay = function(){
    var partsOfDay = ['early morning', 'late morning', 'afternoon', 'evening', 'night'];
    var index = Math.floor((this.impulseTicks - this.ticks) / (this.impulseTicks / partsOfDay.length));
    return partsOfDay[index];
};


var dayRender = function(rect, entity, ui){ 
    ui.addLine('#day', entity.dayCounterComponent.getPartOfDay() + ' ' + entity.dayCounterComponent.ticks);
};


var shouldEmotionBoostTick = function(entity, world){
    return _.any(world.entities, function(sourceEntity){
        return entity.boostSlotComponent.checkEntityForBoost(sourceEntity) &&
            sourceEntity.sentinelComponent.active;
    });
};


var emotionPieceRender = function(rect, entity){
    ctx.fillStyle = EMOTION_FILLSTYLES[entity.emotionPieceComponent.emotion];
    ctx.beginPath();
    ctx.arc(rect[0] + rect[2] / 2, rect[1] + rect[3] / 2, entity.healthComponent.health * rect[2] / 150, 0, 2 * Math.PI);
    ctx.fill();
};


var findAdjacentPosition = function(entity, world){
    var baseEntity = world.entityForKey(this.adjacentTo);
    var positions = [[baseEntity.positionComponent.x, baseEntity.positionComponent.y]];
    for (var i = 0; i < 5; i++){
        positions = _.map(positions, function(position){ return world.hexMap.neighbors(position[0], position[1]); });
        var position = _.chain(positions)
            .flatten(true)
            .filter(function(position){
                return world.isPosTaken(position);
            })
            .sample()
            .value();
        if (position){
            entity.positionComponent.x = position[0];
            entity.positionComponent.y = position[1];
            return;
        }
    }
};


var emotionSentinelCheck = function(entity, world){
    var tags = emotionTags(world.player);
    return _.contains(tags, this.emotionSentinel);
};


var emotionSourceRender = function(rect, entity, ui, rectCount){
    if (entity.emotionSourceComponent.emotions.length === 0 || !entity.emotionSourceComponent.shouldTick(entity, ui.world)){
        return;
    }
    var spawnSource = ui.world.entityForKey(entity.emotionSourceComponent.spawnSourceKey);
    for (var i = entity.emotionSourceComponent.spawnCount; i < entity.emotionSourceComponent.emotions.length; i++){
        rect = ui.world.hexMap.cellForPosComp(spawnSource.positionComponent).rect;
        rect = [rect[0] + i * 10, rect[1], 10, 10];
        var emotion = entity.emotionSourceComponent.emotions[0];
        ctx.fillStyle = entity.emotionSourceComponent.border;
        ctx.beginPath();
        ctx.arc(rect[0] + rect[2] / 2, rect[1] + rect[3] / 2, rect[2] / 2 + 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = EMOTION_FILLSTYLES[emotion];
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3]);
    }
};


var emotionSourceUiRender = function(rect, entity, ui){
    var emotion = entity.emotionSourceComponent.emotions[0];
    var text = emotion + ' (' + entity.identityComponent.name + ')';
    if (entity.absolutePositionComponent){
        entity.absolutePositionComponent.setAbsPosFromRect(rect);
        ui.addLine('#' + entity.identityComponent.key + '_' + entity.identityComponent.uid, text, true);
    }

    ui.addFoldLine('#' + entity.emotionSourceComponent.spawnSourceKey, text, '#emotionSources');
};


var spawnComplete = function(entity, world){
    entity.healthComponent.health = 0;
};


var emotionSourceUiClick = function(pos, entity, ui){
    var panelKey = '#' + entity.identityComponent.key + '_' + entity.identityComponent.uid;
    var infoPanel = ui.getPanel(panelKey);
    infoPanel.panelComponent.closed = false;
    infoPanel.panelComponent.minimized = false;
    infoPanel.absolutePositionComponent.x = pos[0];
    infoPanel.absolutePositionComponent.y = pos[1];
};


var checkForEntityCreateSuccess = function(){
    return this.completed;
};


var entityAddedNotification = function(entity, args){
    _.each(args.addedEntities, function(entityKey){
        if (entity.goalTrackComponent.entitiesToCreate[entityKey]){
            entity.goalTrackComponent.entitiesToCreate[entityKey] -= 1;
        }
    });

    entity.goalTrackComponent.completed = _.all(entity.goalTrackComponent.entitiesToCreate, function(val){
        return val <= 0;
    });
};


var checkForEntityKillSuccess = function(){
    return this.completed;
};

var getEntityKillInnerSt = function(){
    return _.chain(this.entitiesToKill)
        .map(function(val, key){
            return (val === 1) ? key : (key + '-' + val);
        })
        .reduce(function(memo, st){
            return memo ? (memo + ', ' + st) : st;
        }, false)
        .value();
};


var entityKillNotification = function(entity, args){
    _.each(args.killedEntities, function(entityKey){
        if (entity.goalTrackComponent.entitiesToKill[entityKey]){
            entity.goalTrackComponent.entitiesToKill[entityKey] -= 1;
        }
    });

    entity.goalTrackComponent.completed = _.all(entity.goalTrackComponent.entitiesToKill, function(val){
        return val <= 0;
    });
};


var makeLifecycleEntities = function(entity, world, entitiesToMake){
    this.entitiesMade = makeEntities(entity, world, entitiesToMake);
};

var endLifecycle = function(){
    _.each(this.entitiesMade, function(entity){
        entity.healthComponent.health = 0;
    });
};


var managedEntityCount = function(entity, world){
    return _.filter(world.entities, function(worldEntity){
        return worldEntity.managedComponent && worldEntity.managedComponent.managerKey == entity.identityComponent.key;
    }).length;
};

var getManageLevel = function(entity, world){
    return Math.floor(min(this.managedEntityCount(entity, world) / this.entitiesPerLevel, 5));
};

var canMakeManagedEntity = function(entity, world){
    return this.managedEntityCount(entity, world) < this.maxEntityCount(entity);
};

var maxEntityCount = function(entity){
    var level = entity.experienceComponent.getXpLevel(entity);
    return level * this.entitiesPerLevel;
};


var getXpLevel = function(entity){
    return min(Math.floor(entity.healthComponent.health / this.xpPerLevel), this.maxLevel);
};


var featureItemActionExec = function(entity, world){
    entity.currency[this.execCurrencyKey] += this.execCurrencyChange;
};


var focusActive = function(entity){
    return (!entity.itemActionComponent || (entity.itemActionComponent && entity.itemActionComponent.slottedItem)) &&
        (!entity.sentinelComponent || entity.sentinelComponent.active);
}


var focusRender = function(rect, entity, ui){
    if (entity.focusCostComponent.focusActive(entity)){
        ui.addFoldLine('#focusWill', entity.identityComponent.name + ' - ' + entity.focusCostComponent.focusCost, 'focus costs');
    }
};


var gameStageRender = function(rect, entity, ui){
    ui.addLine('#day', entity.identityComponent.name);
};


var checkStageComplete = function(entity, notificationArgs){
    if (_.contains(entity.stageChangeComponent.goalsToCheck, notificationArgs.key)){
        var index = entity.stageChangeComponent.goalsToCheck.indexOf(notificationArgs.key);
        entity.stageChangeComponent.goalsToCheck.splice(index, 1);
        entity.stageChangeComponent.shouldChange = (entity.stageChangeComponent.goalsToCheck.length == 0);
    }
};


var gameStageDayEnd = function(entity, world){
    if (entity.stageChangeComponent.checkAndChange(entity, world)){
        entity.healthComponent.health = 0;
    }
};


var checkAndChangeGameState = function(entity, world){
    if (this.shouldChange){
        _.each(this.executables, function(exec){
            exec.execute(entity, world);
        });
        return true;
    }
    return false;
};


var showCurrency = function(currency, symbol){
    return _.map(currency, function(val, key){
        return key + symbol + val;
    })[0];
};

var goalRender = function(rect, entity, ui){
    var innerSt = entity.goalTrackComponent.getInnerSt();
        
    var line = entity.identityComponent.name + ' (' +  innerSt + ')' + ' (' + entity.timedDeathComponent.timeToDeath + 's)';

    if (entity.squashComponent){
        if (entity.squashComponent.squashFunction === undefined){
            entity.squashComponent.squashFunction = makeWrappedSquashFunction(entity, ui.world);
        }
        var button = {
            text: 'squash',
            buttonFunction: entity.squashComponent.squashFunction
        }
        line = {
            line: [line, button]
        };
    }

    ui.addLine('#goals', line);
};

var makeWrappedSquashFunction = function(entity, world){
    return function(){
        var squashCurrency = entity.squashComponent.squashCurrency;
        if (!world.player.calculatedCurrencyComponent.satisfiesCurrencyReq(squashCurrency)){
            return;
        }

        world.addCost('squashed ' + entity.identityComponent.name, squashCurrency);
        entity.healthComponent.health = 0;
    };
};


var goalCompleteExec = function(entity, world){
    world.addEntity(makeEcs('notification', {
        notificationKey: 'goalComplete',
        notificationArgs: {
            key: entity.identityComponent.key
        }
    }));
};


var healEntities = function(entity, world){
    _.each(this.entitiesToHeal, function(val, key){
        _.each(world.entitiesForKey(key), function(entityToHeal){
            entityToHeal.healthComponent.health += val;
        });
    });
};


var healthBleedTick = function(entity){
    entity.healthComponent.health -= 1;
};


var healthModifyAmount = function(){
    return this.activated ? this.activeHealthChange : this.idleHealthChange;
};


var healthSentinelCheck = function(entity, world){
    return entity.healthComponent.health > 0;
};


var hitRender =  function(rect, entity){
    if (this.wasHit){
        var emotionRect = getEmotionRect(rect, entity);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(emotionRect[0], emotionRect[1], emotionRect[2], emotionRect[3]);
        this.wasHit = false;
    }
};


var resetEmotionSource = function(){
    this.spawnCount = 0;
};


var infoFoldoutRender = function(infoPanelRender, rect, lineCount){
    ctx.fillStyle = '#ffffff';
    var foldRect = [rect[0], rect[1] + lineCount * infoPanelRender.lineHeight + infoPanelRender.offset, 
                    infoPanelRender.panelLength, infoPanelRender.lineHeight];
    ctx.fillText(this.foldout, foldRect[0], foldRect[1]);
    foldRect[1] -= infoPanelRender.lineHeight;
    infoPanelRender.foldRects.push([foldRect, this.foldout]);
    
    if (!this.folded){
        lineCount += 1;
        _.each(this.foldLines, function(foldLine){
            lineCount = infoPanelRender.renderPanelPiece(foldLine, [rect[0] + 10, rect[1], rect[2] - 10, rect[3]], lineCount);
        });
        lineCount -= 1;
    }
    return lineCount;
};

var infoFoldoutLineCount = function(){
    return 1 + (this.folded ? 0  : this.foldLines.length);
};


var renderPanelPiece = function(line, rect, lineCount){
    var that = this;
    if (line.color){
        ctx.fillStyle = line.color;
        ctx.fillText(line.text, rect[0], rect[1] + lineCount * that.lineHeight + this.offset);
    }
    else if (line.line){
        var linePieceXDelta = this.panelLength / line.line.length;
        _.each(line.line, function(linePiece, j){
            that.renderPanelPiece(linePiece, [rect[0] + j * linePieceXDelta, 
                                              rect[1] + lineCount * that.lineHeight],
                                  0);
        });
    }
    else if (line.buttonFunction){
        var buttonLength = ctx.measureText(line.text).width;
        var buttonRect = [rect[0], rect[1] + (lineCount - 1) * that.lineHeight + this.offset + 2, buttonLength, this.lineHeight - 2];
        ctx.fillStyle = line.disabled ? '#660000' : '#ff0000';
        ctx.fillRect(buttonRect[0], buttonRect[1], buttonRect[2], buttonRect[3]);
        ctx.fillStyle = '#000000';
        ctx.fillText(line.text, rect[0], rect[1] + lineCount * that.lineHeight + this.offset);
        this.buttonRects.push([buttonRect, line.buttonFunction]);
    }
    else if (line.foldout){
        lineCount = line.infoRender(this, rect, lineCount);
    }
    else{
        ctx.fillStyle = '#ffffff';
        ctx.fillText(line, rect[0], rect[1] + lineCount * that.lineHeight + this.offset);
    }
    return lineCount + 1;
};

var panelRender = function(rect, entity){
    if (entity.panelComponent.closed){
        entity.absolutePositionComponent.size = [0, 0];
    }
    else{
        var that = this;
        this.buttonRects = [];
        this.foldRects = [];
        ctx.fillStyle = '#666666';
        var lineCount = entity.panelComponent.minimized ? 1 : 
            _.chain(entity.panelComponent.lines)
            .map(function(line){
                return line.lineCount ? line.lineCount() : 1;
            })
            .reduce(addFunction, 1)
            .value();

        rect = [rect[0], rect[1], 
                entity.panelComponent.minimized ? this.panelLength / 2 : this.panelLength,
                lineCount * this.lineHeight + 4];
        ctxFillRect(rect);
        entity.absolutePositionComponent.size = [rect[2], rect[3]];
        ctx.fillStyle = '#ffffff';
        ctx.fillText(entity.identityComponent.name, rect[0], rect[1] + this.lineHeight);
        
        ctx.fillStyle = '#ff0000';
        var closeButtonRect = [rect[0] + rect[2] - this.lineHeight, rect[1], this.lineHeight, this.lineHeight];
        ctxFillRect(closeButtonRect);

        if (!entity.panelComponent.panelCloseFunction){
            entity.panelComponent.panelCloseFunction = makeWrappedEntityCloseFunction(entity);
        }

        this.buttonRects.push([closeButtonRect, entity.panelComponent.panelCloseFunction]);
        
        
        if (!entity.panelComponent.minimized){
            ctx.fillRect(rect[0], rect[1] + this.lineHeight, this.panelLength, 2);
            var lineCount = 0;
            _.each(entity.panelComponent.lines, function(line){
                lineCount = that.renderPanelPiece(line, rect, lineCount);
            });
        }
    }
    entity.panelComponent.lastLines = entity.panelComponent.lines;
    entity.panelComponent.lines = [];
    entity.panelComponent.buttonRects = this.buttonRects;
    entity.panelComponent.foldRects = this.foldRects;
};

var makeWrappedEntityCloseFunction = function(entity){
    return function(){
        entity.panelComponent.minimized = true;
        entity.panelComponent.closed = true;
    };
};


var uiClick = function(pos, entity){
    var touchFn;
    var chk = _.any(entity.panelComponent.buttonRects, function(rectFn){
        if (containsPos(rectFn[0], pos)){
            touchFn = rectFn[1];
            return true;
        }
        return false;
    });

    if (chk){
        touchFn();
    }
    else{
        _.each(entity.panelComponent.foldRects, function(rectFold){
            if (containsPos(rectFold[0], pos)){
                _.chain(entity.panelComponent.lastLines)
                    .filter(function(line){
                        return line.foldout == rectFold[1];
                    })
                    .each(function(line){
                        entity.panelComponent.foldouts[line.foldout] = !line.folded;
                        chk = true;
                    });
            }
        });
    }
    
    if (!chk){
        entity.panelComponent.minimized = !entity.panelComponent.minimized;
    }
};


var informSuccessExec = function(entity, world){
    var inform = makeEcs(PARAMETERS.playerInform, {
        informText: 'completed ' + entity.identityComponent.name
    });
    world.addEntity(inform);
};


var makeIsaacLifecycleEntities = function(entity, world){
    this.makeLifecycleEntities(entity, world, this.isaacEntities);
};


var makeItemWish = function(entity){
    var entitiesToKill = {};
    entitiesToKill[entity.identityComponent.key] = 1;
    return makeEcs('entityKillWish', {
        key: 'gen_item_wish' + entity.identityComponent.key,
        name: entity.identityComponent.name + ' Wish',
        spawnSourceKey: entity.itemComponent.spawnSourceKey,
        entitiesToKill: entitiesToKill,
        squashCurrency: {will: -15}
    });
};


var canSlotItem = function(towerKey){
    return _.any(towers[towerKey], function(val){ return val > 0; });
};



var makeItemClickText = function(entity, world){
    var traitEntity = world.entityForKey(entity.itemComponent.spawnSourceKey);
    world.makeClickText(entity.identityComponent.name + ' Complete',
                        traitEntity.positionComponent.x,
                        traitEntity.positionComponent.y);
};


var checkItemForAction = function(item, trait){
    return _.contains(this.items, item.identityComponent.key) ||
        _.intersection(this.items, item.identityComponent.tags).length > 0;
};


var itemActionPercentCompleted = function(){
    var currency = _.reduce(this.currency, addFunction, 0);
    var origCurrency = _.reduce(this.origCurrency, addFunction, 0);
    return Math.floor(100 * (1 - (currency / origCurrency)));
};


var checkItemActionCompleted = function(player, entity, world){
    return _.all(this.currency, function(val){ return val <= 0; });
};


var itemActionSuccessExecute = function(entity, world){
    var item = entity.itemActionComponent.slottedItem;
    if (entity.itemActionComponent.consumeCheck){
        item.healthComponent.health = 0;
    }
    var converters = _.filter(world.entities, function(worldEntity){
        return worldEntity.currencyConverterComponent;
    });
    
    var emotionsToAdd = {};
    var currencyToAdd = {};
    
    var makeEmotionSource = false;
    var makeCurrencySource = false;

    _.each(converters, function(converter){
        var currencyVal = entity.goalTrackComponent.origCurrency[converter.currencyConverterComponent.currencyKey];
        if (!currencyVal){
            return;
        }
        _.each(converter.currencyConverterComponent.emotionsConversion, function(val, key){
            if (emotionsToAdd[key] === undefined){
                emotionsToAdd[key] = 0;
            }
            emotionsToAdd[key] += val * currencyVal;
            makeEmotionSource = true;
        });
        _.each(converter.currencyConverterComponent.currencyConversion, function(val, key){
            if (currencyToAdd[key] === undefined){
                currencyToAdd[key] = 0;
            }
            currencyToAdd[key] += val * currencyVal;
            makeCurrencySource = true;
        });
    });

    for (var key in emotionsToAdd){
        emotionsToAdd[key] = Math.floor(emotionsToAdd[key] / 100);
    }

    for (var key in currencyToAdd){
        currencyToAdd[key] = Math.floor(currencyToAdd[key]);
    }

    if (makeEmotionSource){
        var emotionSource = makeEcs(this.emotionSourceKey, {
            key: 'completed_emotion_' + entity.identityComponent.key,
            name: 'Completed ' + entity.identityComponent.name + ' ' + item.identityComponent.name,
            spawnSourceKey: item.itemComponent.spawnSourceKey,
            emotionsToAdd: emotionsToAdd
        });
        world.addEntity(emotionSource);
    }

    if (makeCurrencySource){
        var currencyStore = makeEcs(this.currencyStoreKey, {
            key: 'completed_currency_' + entity.identityComponent.key,
            name: 'Completed ' + entity.identityComponent.name + ' ' + item.identityComponent.name,
            currencies: currencyToAdd
        });
        world.addEntity(currencyStore);
    }
};


var itemActionMakeMemory = function(entity, world){
    if (Math.random() < this.makeMemoryChance){
        var memory = makeEcs(PARAMETERS.memory, {
            memoryEmotions: getMemoryEmotions(world),
            memoryActives: getMemoryActives(world),
            memoryGoal: entity.identityComponent.key,
            health: _.reduce(entity.goalTrackComponent.origCurrency, addFunction, 0) + 50
        });
        world.addEntity(memory);
    }
};


var dayEndKillEntity = function(entity, world){
    entity.healthComponent.health = 0;
};


var killEntity = function(entity){
    entity.healthComponent.health = 0;
};


var executeKillEntities = function(entity, world){
    _.each(this.entitiesToKill, function(key){
        _.each(world.entitiesForKey(key), function(entity){
            entity.healthComponent.health = 0;
        });
    });
};


var lostControlDeathExec = function(entity, world){
    this.makeMemoryComponent.makeMemory(world);
    
    _.chain(world.entities)
        .filter(function(worldEntity){ return worldEntity.damageableComponent; })
        .each(function(worldEntity){ worldEntity.healthComponent.health = 0; });
    
    _.chain(world.entities)
        .filter(function(worldEntity){ return worldEntity.emotionSourceComponent; })
        .each(function(worldEntity){ worldEntity.emotionSourceComponent.spawnComplete(worldEntity, world); });
};


var lostControlRender = function(){
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Lost Control', width / 2, height / 2);
};


var makeLostControlClickText = function(entity, world){
    var selfEntity = world.entityForKey('self');
    world.makeClickText('Lost Control', 
                        selfEntity.positionComponent.x,
                        selfEntity.positionComponent.y);
};


var executeMakeEntities = function(entity, world){
    makeEntities(entity, world, this.entitiesToMake);
};

var makeEntities = function(entity, world, entitiesToMake){
    var args = {
        source: entity
    };

    var entitiesMade = [];
    
    if (entitiesToMake[0] === undefined){ //we assume that entitiesToMake is a dictionary if this is true
        _.each(entitiesToMake, function(val, key){
            if (Math.random() * 100 < val){
                var entityMade = makeEcs(key, _.clone(args));
                world.addEntity(entityMade);
                entitiesMade.push(entityMade);
            }
        });
    }
    else{
        _.each(entitiesToMake, function(key){
            var entityMade = makeEcs(key, _.clone(args));
            world.addEntity(entityMade);
            entitiesMade.push(entityMade);
        });
    }
    return entitiesMade;
};


var mapEmotionRender = function(rect, entity){
    var emotion = entity.damageableComponent.emotion;
    ctx.fillStyle = {
        anger: '#ff0000',
        sadness: '#0000ff',
        joy: '#ffff00'
    }[emotion];
    ctx.fillText(emotion, rect[0] + rect[2] / 2, rect[1] + 3 * rect[3] / 4);
};


var mapSpawnPos = function(entity, world){
    return _.chain(world.hexMap.neighbors(entity.positionComponent.x,
                                          entity.positionComponent.y))
        .filter(function(neighbor){ return world.isPosBuildable(neighbor); })
        .sample()
        .value();
};


var memoryRender = function(rect, entity){
    var image = entity.sentinelComponent.active ? getImage('activeHex') : getImage('disabledTower');
    ctx.drawImage(image, rect[0], rect[1]);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(entity.identityComponent.name, rect[0], rect[1] + 10);
    _.each(entity.memoryComponent.memoryActives, function(key, i){
        ctx.fillText(key, rect[0], rect[1] + rect[3] / 4 + 10 + i * 10);
    });
    ctx.fillText('Health: ' + Math.floor(entity.healthComponent.health), rect[0] + rect[2] / 2, rect[1] + rect[3])
    var count = 0;
    _.each(entity.memoryComponent.memoryEmotions, function(val, key){
        ctx.strokeStyle = EMOTION_FILLSTYLES[key];
        for (var chk = 0; chk < val; chk += 5){
            var x = rect[0] + rect[2] / 4 + count * 4;
            ctx.beginPath();
            ctx.moveTo(x, rect[1]);
            ctx.lineTo(x, rect[1] + rect[3]);
            ctx.stroke();
        }
    });
};


var memoryUiRender = function(rect, entity, ui){
    var uiKey = '#memory_' + entity.identityComponent.uid;
    ui.addLine(uiKey, 'Health: ' + entity.healthComponent.health);
    _.each(entity.memoryComponent.memoryEmotions, function(val, key){
        ui.addFoldLine(uiKey, key + ' - ' + val, 'Emotions');
    });
    
    _.each(entity.memoryComponent.memoryActives, function(active){
        ui.addFoldLine(uiKey, active, 'Actives');
    });
};


var memoryTick = function(entity, world){
    if (!entity.memoryComponent.coreMemory){
        entity.healthComponent.health -= 1;
        entity.ticksToCoreMemory -= 1;
        if (entity.ticksToCoreMemory <= 0){
            entity.coreMemory = true;
        }
    }

    var flashbackChance = _.chain(entity.memoryComponent.memoryActives)
        .map(function(sourceKey){
            return world.isTowerSourceActive(sourceKey) ? entity.healthComponent.health : 0;
        })
        .reduce(addFunction, 0)
        .value() / 100;

    flashbackChance += (100 - world.player.focusComponent.focusUsed) / 1000;

    flashbackChance /= 5;
    
    if (Math.random() < flashbackChance){
        var spawnSourceKey = _.chain(entity.memoryComponent.memoryActives)
            .map(function(sourceKey){
                var towerSource = world.entityForKey(sourceKey);
                return towerSource.towerSourceComponent.sourceTrait;
            })
            .sample()
            .value();
        
        var emotion = _.sample(_.keys(entity.memoryComponent.memoryEmotions));

        if (!emotion){
            return;
        }

        var emotionsToAdd = simpleDict(emotion, max(Math.floor(entity.memoryComponent.memoryEmotions[emotion] / 25), 1));
        
        var flashback = makeEcs('emotionSource', {
            key: 'flashback',
            name: 'flashback',
            spawnSourceKey: spawnSourceKey,
            emotionsToAdd: emotionsToAdd
        });
        world.addEntity(flashback);
        entity.healthComponent.health += 10;

        if (Math.random() < this.traitMakeChance){
            makeTraitForEmotion(world, emotion);
        }
    }
};


var memoryOnClick = function(entity, world, ui){
    ui.openPanelAtPos('#memory_' + entity.identityComponent.uid, entity.positionComponent);
    traitOnClick(entity, world, ui);
};


var memorySentinel = function(entity, world){
    return entity.tickComponent.flashbackTicks > 0;
};


var memoryStartLifecycle = function(entity, world){
    this.entitiesMade = makeEntities(entity, world, this.memoryButtonKeys);
};


var memoryPonderExec = function(entity, world){
    var currencyKey = _.keys(this.currencyBoost)[0];
    var boost = makeEcs('currencyBoost', {
        key: 'memory_' + this.trait + '_' + currencyKey,
        name: 'memory ' + this.trait + ' ' + currencyKey,
        traits: [this.trait],
        currencyBoost: this.currencyBoost
    });
    world.addEntity(boost);
};


var getMemoryEmotions = function(world){
    var playerCurrencies = world.player.calculatedCurrencyComponent.currencies;
    var memoryEmotions = {};
    _.each(KEY_EMOTIONS, function(emotion){
        if (playerCurrencies[emotion]){
            memoryEmotions[emotion] = playerCurrencies[emotion];
        }
    });
    return memoryEmotions;
};

var getMemoryActives = function(world){
    return _.chain(world.entities)
        .filter(function(entity){
            return entity.towerSourceComponent &&
                world.isTowerSourceActive(entity.identityComponent.key);
        })
        .map(function(entity){ return entity.identityComponent.key; })
        .value();
};

var makeMemory = function(world){
    var memoryEmotions = getMemoryEmotions(world);

    var health = _.reduce(memoryEmotions, addFunction, 0) * (Math.random() + 0.5) + 75;

    var memoryActives = getMemoryActives(world);
    var spawnSourceKey = _.chain(memoryActives)
        .map(function(sourceKey){
            var towerSource = world.entityForKey(sourceKey);
            return towerSource.towerSourceComponent.sourceTrait;
        })
        .sample()
        .value();

    var memory = makeEcs(PARAMETERS.memory, {
        memoryEmotions: memoryEmotions,
        memoryActives: memoryActives,
        spawnSourceKey: spawnSourceKey,
        health: health
    });
    world.addEntity(memory);
};


var nameRender = function(rect){
    ctx.fillStyle = '#ffffff';
    ctx.fillText(this.name, rect[0] + rect[2] / 2, rect[1] + 3 * rect[3] / 4);
};


var makeNotificationEntity = function(entity){
    return makeEcs('notification', {
        notifyEntityKey: this.controlledKey,
        notificationKey: this.commandKey,
        notificationArgs: this.getNotificationArgs(entity)
    });
};

var getNotificationArgs = function(entity){
    return { notifyingEntity: entity };
};

var canMakeNotificationEntity = function(entity, world){
    return !this.lockedEmotions ||
        (_.intersection(emotionTags(world.player), this.lockedEmotions).length == 0)
};


var checkForNotificationGoalSuccess = function(){
    return this.hitCount <= 0;
};


var deriveNotificationWishNotificationFunctions = function(notificationsToHit){
    var notificationFunctions = {};
    _.each(notificationsToHit, function(key){
        notificationFunctions[key] = notificationWishHit;
    });
    return notificationFunctions;
};

var notificationWishHit = function(entity, args){
    entity.notificationGoalTrackComponent.hitCount -= 1;
};


var opinionCreateExec = function(entity, world){
    _.each(this.buttonKeys, function(key){
        var buttonKey = mangleIdentityWithTrait(key, entity.personHeldComponent.personHeld);
        var button = makeEcs(buttonKey);
        world.addEntity(button);
    });
};


var haveDateGoalCheck = function(player, entity, world){
    var that = this;
    return _.any(world.entities, function(worldEntity){
        return worldEntity.personalityComponent && 
            _.any(worldEntity.personalityComponent.heldOpinions, function(opinion){
                return opinion.identityComponent.key == that.opinionGoal;
            });
    });
};


var pathRender = function(rect){
    ctx.drawImage(getImage('activeHex'), rect[0], rect[1]);
};


var pathConnectRender = function(rect, entity, ui){
    var endRect = ui.world.hexMap.cellForPosComp({x: entity.pathMoveComponent.endPosition[0],
                                                  y: entity.pathMoveComponent.endPosition[1]}).rect;
    ctx.strokeStyle = '#ff0000';
    ctx.beginPath();
    ctx.moveTo(rect[0] + rect[2] / 2, rect[1] + rect[3]/ 2);
    ctx.lineTo(endRect[0] + endRect[2] / 2, endRect[1] + endRect[3] / 2);
    ctx.stroke();
}


var pathButtonRender = function(rect, entity, ui){
    if (!this.pathButtonFunction){
        this.pathButtonFunction = function(){
            var world = ui.world;
            if (world.currentPath){
                world.resetCurrents();
            }
            else{
                world.resetCurrents();
                world.currentPath = true;
            }
        };
    }
    ui.addLine('#self', {
        buttonFunction: this.pathButtonFunction,
        text: 'path (' + dictString(PATH_COST) + ')',
        disabled: !ui.world.player.calculatedCurrencyComponent.satisfiesCurrencyReq(PATH_COST)
    });
    ui.addLine('#self', '');
};


var getAllPersonality = function(){
    return _.map(this.heldOpinions, getEntityKey).concat(this.personalityTraits);
};

var addOpinionToPersonality = function(opinionKey, entity, world){
    var opinion = makeEcs(opinionKey, {
        personHeld: entity.identityComponent.key
    });
    world.addEntity(opinion);
    this.heldOpinions.push(opinion);
};


var personTick = function(entity){
    entity.healthComponent.health -= 1;
    if (Math.random() < this.traitChangeChance){
        if (Math.random() < this.traitRemoveChance){
            var trait = _.sample(entity.personalityComponent.personalityTraits);
            var index = entity.personalityComponent.personalityTraits.indexOf(trait);
            entity.personalityComponent.personalityTraits.splice(index, 1);
            if (_.contains(entity.personalityComponent.knownPersonalityTraits, trait)){
                index = entity.personalityComponent.knownPersonalityTraits.indexOf(trait);
                entity.personalityComponent.knownPersonalityTraits.splice(index, 1);
            }
        }
        
        if (Math.random() < this.traitAddChance){
            var newTrait = _.sample(csvIdentifiers.trait);
            if (!_.contains(entity.personalityComponent.personalityTraits, newTrait)){
                entity.personalityComponent.personalityTraits.push(newTrait);
            }
        }
    }
};


var personRender = function(rect, entity, ui){
    _.each(entity.personalityComponent.personalityTraits, function(trait){
        ui.addFoldLine('#' + entity.identityComponent.key,
                       _.contains(entity.personalityComponent.knownPersonalityTraits, trait) ? trait : '???',
                      '#traits');
    });
};


var personCreateExec = function(entity, world){
    entity.personalityComponent.heldOpinions = _.map(entity.personalityComponent.heldOpinions, function(opinion){
        opinion = makeEcs(opinion, {
            personHeld: entity.identityComponent.key
        });
        world.addEntity(opinion);
        return opinion;
    });
    _.each(entity.personalityComponent.personalityTraits, function(trait){
        var piece = makeEcs('personTrait', {
            source: entity,
            trait: trait
        });
        world.addEntity(piece);
    });
};


var personKillExec = function(entity, world){
    _.each(entity.personalityComponent.heldOpinions, function(opinion){
        opinion.healthComponent.health = 0;
    });
    _.each(world.entities)
        .filter(function(aquariumEntity){
            return aquariumEntity.personAquariumPieceComponent &&
                aquariumEntity.personAquariumPieceComponent.sourceTrait == entity.identityComponent.key;
        })
        .each(function(aquariumEntity){
            aquariumEntity.healthComponent.health = 0;
        });
};


var personScreenRender = function(rect, entity){
    ctx.drawImage(getImage('activeHex'), rect[0], rect[1]);
    ctx.fillStyle = '#000000';
    ctx.fillText(entity.identityComponent.name, rect[0], rect[1] + 10);
};


var personCheckItemForAction = function(item, trait){
    if (!trait.personalityComponent){
        return;
    }

    var personHeldOpinions = _.map(trait.personalityComponent.heldOpinions, function(opinion){
        return opinion.identityComponent.key;
    });

    return this.baseCheckItemForAction(item, trait) &&
        _.all(this.requiredOpinions, function(opinion){
            return _.contains(personHeldOpinions, opinion);
        });
};


var personRelationshipExec = function(entity, world){
    var person = world.entityForKey(entity.personHeldComponent.personHeld);
    var opinionsToMake = [];
    _.each(person.personalityComponent.heldOpinions, function(opinion){
        _.each(opinion.successOpinions, function(val, key){
            if (percentCheck(val)){
                opinionsToMake.push(key);
            }
        });
    });

    _.each(opinionsToMake, function(key){
        person.personalityComponent.addOpinionToPersonality(key, person, world);
    });

    person.healthComponent.health += this.personHealthDiff;

    if (Math.random() < this.personLearnChance){
        var trait = _.sample(person.personalityComponent.personalityTraits);
        if (!_.contains(person.personalityComponent.knownPersonalityTraits, trait)){
            person.personalityComponent.knownPersonalityTraits.push(trait);
        }
    }
};


var personAquariumRender = function(rect, entity){
    ctx.drawImage(getImage('towerHex'), rect[0], rect[1]);
    ctx.fillStyle = '#000000';
    var txt = entity.personAquariumPieceComponent.pieceDiscovered ? this.name : '???';
    ctx.fillText(txt, rect[0] + rect[2] / 3, rect[1] + 2 * rect[3] / 3);
};


var personTimedItemDeathExec = function(entity, world){
    var source = world.entityForKey(this.sourceKey);
    var person = world.entityForKey(source.personHeldComponent.personHeld);
    var successs = entity.timedDeathComponent.timeToDeath > 0;
    if (!successs){
        person.healthComponent.health += this.personFailHealthDiff;
    }
    person.personalityComponent.personHistory.push({
        itemKey: entity.identityComponent.key,
        successs: successs
    });
};


var playerDayEnd = function(entity, world){
    entity.calculatedCurrencyComponent.currencies = {};
};


var playerRender = function(rect, entity, ui){
    if (this.dayControlFunctions === undefined){
        this.dayControlFunctions = {};
        var that = this;
        _.each(['pause', 'toggle', 'nextDay'], function(key){
            that.dayControlFunctions[key] = function(){ ui[key](); };
        });
    }
    ui.addLine('#calculatedCurrency', dictString(entity.calculatedCurrencyComponent.currencies));
    ui.addLine('#focusWill', 'FOCUS: ' + entity.focusComponent.focusUsed + '/' + entity.focusComponent.focusMax);
    ui.addLine('#day', {
        line: _.map(this.dayControlFunctions, function(val, key){
            return {
                text: key,
                buttonFunction: val
            };
        })
    });
};

var dictString = function(dict){
    return _.reduce(dict, function(memo, val, key){
        var lineString = key + ' - ' + val;
        return memo ? (memo + '\n' + lineString) : lineString;
    }, '');
};


var playerSerialize = function(entity){
    entity.rendererComponents[0].dayControlFunctions = undefined;
};


var playerHandleKeyPress = function(key, entity, ui){
    var keyDict = {
        48: ui.pause,
        49: ui.normalSpeed,
        50: ui.fastSpeed,
        51: ui.vfastSpeed,
        32: ui.pause
    };
    var fn = keyDict[key];
    if (fn){
        fn();
    }
};


var playerInformRender = function(rect, entity, ui){
    ui.addFoldLine('#goals', this.informText, 'completed');
};


var setPos = function(pos){ 
    this.x = pos[0];
    this.y = pos[1]; 
};

var isPos = function(pos){
    return this.x == pos[0] && this.y == pos[1];
};


var randomOpenPositionExec = function(entity, world){
    var pos = world.randomOpenPosition(entity.positionComponent.planeOfExistence);
    entity.positionComponent.setPos(pos);
};


var randomReplaceExec = function(entity, world){
    var chanceSum = _.reduce(this.entities, addFunction, 0);
    var randVal = Math.random() * chanceSum;
    var keys = _.keys(this.entities);
    for (var i = 0; i < keys.length; i++){
        var key = keys[i];
        var chance = this.entities[key];
        if (chance > randVal){
            world.addEntity(makeEcs(key));
            entity.healthComponent.health = 0;
            return;
        }
        else{
            randVal -= chance;
        }
    }
};


var sourceRender = function(rect){
    ctx.drawImage(getImage('activeHex'), rect[0], rect[1]);
};


var traitOnClick = function(entity, world, ui){
    var didOpen = ui.openPanelAtPos('#' + entity.identityComponent.key, entity.positionComponent);
    if (!didOpen && entity.experienceComponent){
        var gameStateEntity = world.entityForKey('gameStateEntity');
        if (gameStateEntity.rendererSystemComponent.currentRenderState == entity.identityComponent.key){
            gameStateEntity.rendererSystemComponent.currentRenderState = 'default';
        }
        else{
            //gameStateEntity.rendererSystemComponent.currentRenderState = entity.identityComponent.key;
        }
    }
};


var sourceExtensionSentinel = function(entity, world){
    var source = world.entityForKey(entity.sourceExtensionComponent.sourceKey);
    return source.traitStatusComponent.traitActive;
};


var sourceExtensionRender = function(rect, entity){
    var image = entity.sentinelComponent.active ? getImage('blueTower') : getImage('disabledTower');
    ctx.drawImage(image, rect[0], rect[1]);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(entity.identityComponent.name, rect[0] + rect[2] / 3, rect[1] + rect[3] / 2);
};


var sourceExtensionOnClick = function(entity, world, ui){
    ui.openPanelAtPos('#' + entity.sourceExtensionComponent.sourceKey, entity.positionComponent);
};


var sourceExtensionMapSpawnChance = function(entity, world){
    var chk = world.isPosEmptyTrait([entity.positionComponent.x, entity.positionComponent.y],
                                    entity.sourceExtensionComponent.sourceKey);
    return chk ? this.mapSpawnBaseChance : 0;
};

var sourceExtensionMapSpawnPos = function(entity, world){
    return [entity.positionComponent.x, entity.positionComponent.y];
};

var sourceExtensionMapSpawnKey = function(entity, world){
    return _.chain(world.entities)
        .filter(function(worldEntity){
            return worldEntity.buttonControlComponent &&
                worldEntity.buttonControlComponent.managerKey == entity.sourceExtensionComponent.sourceKey;
        })
        .map(function(worldEntity){
            return worldEntity.buttonControlComponent.towerKey;
        })
        .sample()
        .value();
};


var spellRender = function(rect, entity, ui){
    if (entity.spellComponent.spellButtonFunction === undefined){
        entity.spellComponent.spellButtonFunction = makeWrappedSpellFunction(entity, ui.world);
    }
    ui.addLine('#spells', {
        line: [
            {
                buttonFunction: entity.spellComponent.spellButtonFunction,
                text: entity.identityComponent.name
            },
            dictString(entity.spellComponent.spellCost)
        ]
    });
};

var makeWrappedSpellFunction = function(entity, world){
    return function(){
        if (world.player.calculatedCurrencyComponent.satisfiesCurrencyReq(entity.spellComponent.spellCost)){
            world.currentSpell = entity;
        }
    };
};


var checkTickContinue = function(world, entity){
    return !(this.currency.will && 
             this.currency.will < 0 && 
             world.player.calculatedCurrencyComponent.currencies.will < 0);
};


var timedMakeEntities = function(entity, world){
    if (entity.timedDeathComponent.timeToDeath <= 0){
        makeEntities(entity, world, this.timedOutEntities);
    }
};


var sourceSentinel = function(entity, world){
    if (!this.towerSourceKey){
        return true;
    }

    if (this.playerControlled && world.lostControl()){
        return false;
    }

    if (world.isTowerSourceActive(this.towerSourceKey)){
        var itemAction = world.entityForKey(this.towerSourceKey).slotComponent.currentAction;
        if (itemAction.goalTrackComponent.percentCompleted){
            this.towerSourceCompletion = itemAction.goalTrackComponent.percentCompleted();
        }
        return true;
    }
    return false;
};


var shouldTowerEmotionSourceTick = function(entity){
    return entity.sentinelComponent.active;
}


var towerRender = function(rect, entity){
    var image = getImage(this.image);
    ctx.drawImage(image, rect[0] + 8, rect[1]);
    ctx.fillStyle = (this.activated > 0) ? '#ff0000' : '#006600';
    ctx.fillText(this.icon, rect[0] + rect[2] / 3, rect[1] + 14);
    if (entity.sentinelComponent.active && entity.sentinelComponent.towerSourceCompletion){
        ctx.fillText('' + entity.sentinelComponent.towerSourceCompletion + '%', rect[0] + rect[2] / 3, rect[1] + 2 * rect[3] / 3);
    }
};


var tickRenderActivate = function(entity){
    _.each(entity.rendererComponents, function(renderComponent){
        if (renderComponent.activated > 0){
            renderComponent.activated -= 1;
        }
    });
};


var makeCurrencyWish = function(entity){
    var currency = _.chain(entity.tickEmotionComponent.currency)
        .keys()
        .filter(function(key){
            return _.contains(PARAMETERS.wishCurrencies, key);
        })
        .sample()
        .value();

    if (!currency){
        return undefined;
    }
    
    var minCurrency = {};
    var factor = 15;
    minCurrency[currency] = entity.tickEmotionComponent.currency[currency] * factor;
    var wish = makeEcs(this.wishKey, {
        key: 'gen_prod_wish_' + entity.identityComponent.key,
        name: entity.identityComponent.name + ' Wish',
        minCurrency: minCurrency,
        squashCurrency: {will: -1 * factor},
        spawnSourceKey: entity.emotionSourceComponent.spawnSourceKey,
        timeToDeath: factor * 2
    });
    return wish;
};

var canMakeCurrencyWish = function(entity){
    return !entity.sentinelComponent.active;
};


var canBuildTower = function(world){
    if (!world.player.calculatedCurrencyComponent.satisfiesCurrencyReq(this.towerCost)){
        return false;
    }

    var managingEntity = world.entityForKey(this.managerKey);
    if (!managingEntity.entityManagerComponent.canMakeManagedEntity(managingEntity, world)){
        return false;
    }

    return true;
};

var buildTower = function(world, pos){
    var entity = makeEcs(this.towerKey, {
        x: pos[0], 
        y: pos[1],
        source: world.entityForKey(this.managerKey)
    });

    if (entity.damageComponent){
        var tickSetEntity = world.entityForKey(this.towerKey);
        if (tickSetEntity){
            entity.damageComponent.ticks = tickSetEntity.damageComponent.ticks;
        }
    }

    world.addCost('built ' + entity.identityComponent.name, this.towerCost);
    return entity;
};

var checkMakePos = function(world, pos){
    var that = this;
    if (this.canOverlap){
        return true;
    }
    return world.isPosEmptyTrait(pos, this.managerKey);
};


var towerButtonRender = function(rect, entity, ui){
    if (entity.buttonControlComponent.wrappedFunction === undefined){
        entity.buttonControlComponent.wrappedFunction = makeButtonWrappedFunction(entity, ui.world);
    }
    var buttonLine = [
        {
            buttonFunction: entity.buttonControlComponent.wrappedFunction,
            text: entity.identityComponent.name + ' (' + dictString(entity.buttonControlComponent.towerCost) + ')',
            disabled: !entity.buttonControlComponent.canMakeEntity(ui.world)
        }
    ];

    var towerKey = entity.buttonControlComponent.towerKey;
    if (allArgs[towerKey].damageMultipliers){
        buttonLine.push(dictString(allArgs[towerKey].damageMultipliers));
    }

    var line = {
        line: buttonLine
    }

    ui.addFoldLine('#' + entity.buttonControlComponent.managerKey, line, '#towers');
    
    ui.addFoldLine('#towers', line, '#' + entity.buttonControlComponent.managerKey);
};

var makeButtonWrappedFunction = function(entity, world){
    return function(){
        world.resetCurrents();
        if (entity.buttonControlComponent.canMakeEntity(world)){
            world.currentMakingEntity = entity;
        }
    };
};


var resetSlotComponent = function(){
    this.slottedItem = false;
    this.currentAction = false;
};


var traitDayStart = function(entity, world){
    var that = this;
    _.each(this.dailyEntities, function(val, key){
        if (that.dailyEntityCounts[key] === undefined){
            that.dailyEntityCounts[key] = 0;
        }
        that.dailyEntityCounts[key] += 1;
        if (that.dailyEntityCounts[key] >= val){
            world.addEntity(makeEcs(key));
            that.dailyEntityCounts[key] = 0;
        }
    });
};


var traitRender = function(rect, entity){
    var image = entity.traitStatusComponent.traitActive ? getImage(this.traitImage) : getImage('disabledTower');
    ctx.drawImage(image, rect[0], rect[1]);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(entity.identityComponent.name, rect[0] + rect[2] / 3, rect[1] + rect[3]);
};


var traitTick = function(entity){
    if (entity.traitStatusComponent.traitActive){
        this.inactiveTicks = 0;
    }
    else{
        this.inactiveTicks += 1;
        if (this.inactiveTicks > 120){
            entity.healthComponent.health -= 1;
        }
    }
};


var canBuildTrait = function(world){
    if (!world.player.calculatedCurrencyComponent.satisfiesCurrencyReq(this.traitCost)){
        return false;
    }

    return true;
};

var buildTrait = function(world, pos){
    var key = world.entityForKey(this.traitKey) ? this.traitExtKey : this.traitKey;
    var entity = makeEcs(key, {
        x: pos[0],
        y: pos[1]
    });
    world.addCost('built ' + entity.identityComponent.name, this.traitCost);
    return entity;
};

var traitButtonCheckMakePos = function(world, pos){
    return !world.isPosTaken(pos);
}


var traitButtonRender = function(rect, entity, ui){
    if (entity.buttonControlComponent.wrappedFunction === undefined){
        entity.buttonControlComponent.wrappedFunction = makeButtonWrappedFunction(entity, ui.world);
    }
    
    var line = {
        line: [
            {
                buttonFunction: entity.buttonControlComponent.wrappedFunction,
                text: entity.identityComponent.name + ' (' + dictString(entity.buttonControlComponent.traitCost) + ')',
                disabled: !entity.buttonControlComponent.canMakeEntity(ui.world)
            }
        ]
    };

    ui.addLine('#self', line);
};


var wishTraitHealthExecute = function(entity, world){
    var entityToHeal = world.entityForKey(this.spawnSourceKey);
    if (entityToHeal){
        if (entity.goalTrackComponent.checkCompleted()){
            entityToHeal.healthComponent.health += this.healthDiff;
        }
        else if (entity.timedDeathComponent.timeToDeath <= 0){
            entityToHeal.healthComponent.health += this.healthDiff;
        }
    }
};


var addRandomPersonToMap = function(entity, world){
    var peopleOnMap = _.chain(world.entities)
        .filter(function(worldEntity){
            return worldEntity.personalityComponent;
        })
        .map(function(worldEntity){
            return worldEntity.identityComponent.key;
        })
        .value();

    var person = _.chain(csvIdentifiers.person)
        .filter(function(key){
            return !_.contains(peopleOnMap, key);
        })
        .sample()
        .value();
    
    if (person){
        world.addEntity(makeEcs(person));
    }
};


var marryPerson = function(entity, world){
    var person = world.entityForKey(entity.personHeldComponent.personHeld);
    person.personalityComponent.addOpinionToPersonality('married');
};



var csvIdentifiers = {
    "sourceExtension": [
        "holcomb_ext", 
        "adult_ext", 
        "racist_ext", 
        "lovesChess_ext", 
        "wishesToTalk_ext", 
        "agent_ext", 
        "worldTerror_ext", 
        "lethargy_ext", 
        "excitable_ext", 
        "outgoing_ext", 
        "resilient_ext", 
        "empathic_ext", 
        "personA_ext", 
        "personB_ext", 
        "personC_ext", 
        "personD_ext", 
        "agentE_ext", 
        "TargetA_ext"
    ], 
    "towerSource": [
        "meditateSource", 
        "choreSource", 
        "exerciseSource", 
        "meetPersonSource", 
        "travelSource", 
        "chessSource", 
        "spySource", 
        "relaxSource", 
        "bombSource", 
        "playSource"
    ], 
    "currencyStore": [
        "dayEnergy", 
        "startExperience", 
        "cash", 
        "startCash", 
        "rent"
    ], 
    "currencyConverter": [
        "choresConvert", 
        "meditateConvert", 
        "exerciseConvert", 
        "meetPersonConvert", 
        "travelConvert", 
        "relaxConvert", 
        "chatConvert", 
        "talkConvert", 
        "flirtConvert", 
        "playConvert", 
        "ambushConvert"
    ], 
    "randomReplace": [
        "racistEvent"
    ], 
    "towerButton": [
        "choreButton", 
        "exerciseButton", 
        "meditateButton", 
        "meetPersonButton", 
        "travelButton", 
        "chessButton", 
        "spyButton", 
        "relaxButton", 
        "bombButton", 
        "playButton"
    ], 
    "traitButton": [
        "adultButton", 
        "holcombButton", 
        "lovesChessButton"
    ], 
    "gameStage": [
        "chapter1", 
        "chapter2", 
        "chapter3", 
        "chapter4", 
        "chapter5"
    ], 
    "personTowerSource": [
        "chatSource_personA", 
        "talkSource_personA", 
        "flirtSource_personA", 
        "ambushSource_personA", 
        "dateSource_personA", 
        "chatSource_personB", 
        "talkSource_personB", 
        "flirtSource_personB", 
        "ambushSource_personB", 
        "dateSource_personB", 
        "chatSource_personC", 
        "talkSource_personC", 
        "flirtSource_personC", 
        "ambushSource_personC", 
        "dateSource_personC", 
        "chatSource_personD", 
        "talkSource_personD", 
        "flirtSource_personD", 
        "ambushSource_personD", 
        "dateSource_personD", 
        "chatSource_agentE", 
        "talkSource_agentE", 
        "flirtSource_agentE", 
        "ambushSource_agentE", 
        "dateSource_agentE", 
        "chatSource_TargetA", 
        "talkSource_TargetA", 
        "flirtSource_TargetA", 
        "ambushSource_TargetA", 
        "dateSource_TargetA"
    ], 
    "emotionCurrencyTicker": [
        "boredomWill", 
        "relaxedWill", 
        "activeWill", 
        "distractedWill", 
        "overwhelmedWill", 
        "brokenWill"
    ], 
    "person": [
        "personA", 
        "personB", 
        "personC", 
        "personD", 
        "agentE", 
        "TargetA"
    ], 
    "memoryTowerSource": [
        "rememberSource"
    ], 
    "source": [
        "self"
    ], 
    "invitationGoal": [
        "inviteGoal_findHouse", 
        "inviteGoal_findJob", 
        "inviteGoal_meetPersonAction", 
        "inviteGoal_choreAction", 
        "inviteGoal_exerciseAction", 
        "inviteGoal_meditateAction", 
        "inviteGoal_driveCabAction", 
        "inviteGoal_chessAction", 
        "inviteGoal_spyAction", 
        "inviteGoal_chessMatchAction", 
        "inviteGoal_relaxAction", 
        "inviteGoal_getEvidenceAction", 
        "inviteGoal_destroyEvidence", 
        "inviteGoal_buyRingAction", 
        "inviteGoal_mission1Action", 
        "inviteGoal_mission2Action", 
        "inviteGoal_mission3Action", 
        "inviteGoal_playAction", 
        "inviteGoal_rememberAction"
    ], 
    "personAction": [
        "smallTalkAction", 
        "contactAgent", 
        "shareDiscoveryAction", 
        "jokeAction", 
        "shareEmotionAction", 
        "flirtAction", 
        "complimentAction", 
        "dateAction", 
        "proposeAction", 
        "ambushAction"
    ], 
    "entityReplace": [
        "terrorEvent", 
        "proposal"
    ], 
    "emotionSentinel": [
        "depresssedSentinel", 
        "ecstaticSentinel", 
        "nauseatedSentinel", 
        "enragedSentinel", 
        "terrifiedSentinel"
    ], 
    "trait": [
        "holcomb", 
        "adult", 
        "racist", 
        "lovesChess", 
        "wishesToTalk", 
        "agent", 
        "worldTerror", 
        "lethargy", 
        "excitable", 
        "outgoing", 
        "resilient", 
        "empathic"
    ], 
    "emotionState": [], 
    "personTowerButton": [
        "chatButton_personA", 
        "talkButton_personA", 
        "flirtButton_personA", 
        "dateButton_personA", 
        "ambushButton_personA", 
        "chatButton_personB", 
        "talkButton_personB", 
        "flirtButton_personB", 
        "dateButton_personB", 
        "ambushButton_personB", 
        "chatButton_personC", 
        "talkButton_personC", 
        "flirtButton_personC", 
        "dateButton_personC", 
        "ambushButton_personC", 
        "chatButton_personD", 
        "talkButton_personD", 
        "flirtButton_personD", 
        "dateButton_personD", 
        "ambushButton_personD", 
        "chatButton_agentE", 
        "talkButton_agentE", 
        "flirtButton_agentE", 
        "dateButton_agentE", 
        "ambushButton_agentE", 
        "chatButton_TargetA", 
        "talkButton_TargetA", 
        "flirtButton_TargetA", 
        "dateButton_TargetA", 
        "ambushButton_TargetA"
    ], 
    "entityCreateWish": [
        "peopleGoal", 
        "friendGoal"
    ], 
    "memoryTowerButton": [
        "rememberButton"
    ], 
    "dailyEntityMaker": [
        "rentMaker"
    ], 
    "emotionPiece": [
        "angerEmotionPiece", 
        "sadnessEmotionPiece", 
        "joyEmotionPiece", 
        "fearEmotionPiece", 
        "disgustEmotionPiece"
    ], 
    "opinionGoal": [
        "haveDate", 
        "haveMarriage"
    ], 
    "invitationAction": [
        "invite_findHouse", 
        "invite_findJob", 
        "invite_meetPersonAction", 
        "invite_choreAction", 
        "invite_exerciseAction", 
        "invite_meditateAction", 
        "invite_driveCabAction", 
        "invite_chessAction", 
        "invite_spyAction", 
        "invite_chessMatchAction", 
        "invite_relaxAction", 
        "invite_getEvidenceAction", 
        "invite_destroyEvidence", 
        "invite_buyRingAction", 
        "invite_mission1Action", 
        "invite_mission2Action", 
        "invite_mission3Action", 
        "invite_playAction", 
        "invite_rememberAction"
    ], 
    "emotionEntityMaker": [], 
    "addPersonAndOpinion": [
        "makeAgentE", 
        "makeTarget"
    ], 
    "traitMaker": [
        "sadTraitMaker", 
        "happyTraitMaker"
    ], 
    "entityKillWish": [
        "findHouseWish", 
        "findJobWish", 
        "workGoal", 
        "playChess", 
        "talkWish", 
        "spyGoal", 
        "confession"
    ], 
    "dailyCurrencyStore": [
        "terrorEventCurrency"
    ], 
    "itemAction": [
        "findHouse", 
        "findJob", 
        "meetPersonAction", 
        "choreAction", 
        "exerciseAction", 
        "meditateAction", 
        "driveCabAction", 
        "chessAction", 
        "spyAction", 
        "chessMatchAction", 
        "relaxAction", 
        "getEvidenceAction", 
        "destroyEvidence", 
        "buyRingAction", 
        "mission1Action", 
        "mission2Action", 
        "mission3Action", 
        "playAction", 
        "rememberAction"
    ], 
    "project": [
        "chessProject"
    ], 
    "item": [
        "meetPersonItem", 
        "findHouseItem", 
        "findJobItem", 
        "choreItem", 
        "exerciseItem", 
        "meditateItem", 
        "driveCabItem", 
        "chessItem", 
        "smallTalkItem", 
        "contactItem", 
        "spyItem", 
        "reportItem", 
        "chessMatchItem", 
        "relaxItem", 
        "jokeItem", 
        "shareEmotionItem", 
        "flirtItem", 
        "complimentItem", 
        "discoveryItem", 
        "dateItem", 
        "proposeItem", 
        "getEvidenceItem", 
        "evidenceItem", 
        "buyRingItem", 
        "ringItem", 
        "confessionItem", 
        "mission1Item", 
        "mission2Item", 
        "mission3Item", 
        "playItem", 
        "ambushItem", 
        "rememberItem"
    ], 
    "memoryTower": [
        "rememberTower"
    ], 
    "opinion": [
        "acquaintance", 
        "friend", 
        "romance", 
        "knownAgent", 
        "dating", 
        "married", 
        "target", 
        "hurtful"
    ], 
    "tower": [
        "meditateTower", 
        "choreTower", 
        "exerciseTower", 
        "meetPersonTower", 
        "travelTower", 
        "chessTower", 
        "spyTower", 
        "relaxTower", 
        "bombTower", 
        "playTower"
    ], 
    "personTower": [
        "chatTower_personA", 
        "talkTower_personA", 
        "flirtTower_personA", 
        "ambushTower_personA", 
        "dateTower_personA", 
        "chatTower_personB", 
        "talkTower_personB", 
        "flirtTower_personB", 
        "ambushTower_personB", 
        "dateTower_personB", 
        "chatTower_personC", 
        "talkTower_personC", 
        "flirtTower_personC", 
        "ambushTower_personC", 
        "dateTower_personC", 
        "chatTower_personD", 
        "talkTower_personD", 
        "flirtTower_personD", 
        "ambushTower_personD", 
        "dateTower_personD", 
        "chatTower_agentE", 
        "talkTower_agentE", 
        "flirtTower_agentE", 
        "ambushTower_agentE", 
        "dateTower_agentE", 
        "chatTower_TargetA", 
        "talkTower_TargetA", 
        "flirtTower_TargetA", 
        "ambushTower_TargetA", 
        "dateTower_TargetA"
    ], 
    "emotionSource": [
        "playedWell", 
        "playedPoor", 
        "teamFail", 
        "racistComment", 
        "racistThreat", 
        "spyFear", 
        "closeCall", 
        "terrorEventEmotionSource", 
        "holcombTerrorEmotionSource", 
        "didWell", 
        "didPoorly", 
        "personHurt", 
        "dateJoy", 
        "dateSadness", 
        "dateFear", 
        "dateAnger"
    ]
}

var findKeyFor = function(csvId, key, val){
    return _.chain(csvIdentifiers[csvId])
    .filter(function(argKey){
        return (allArgs[argKey][key] == val);
    })
    .first()
    .value();
};

var updateArgs = function(args, defaultArgs){
    _.each(defaultArgs, function(val, key){
        if (args[key] !== undefined){
            console.log('overlapping value ' + key + ' ' + val);
        }
        args[key] = val;
    });
};

var uidManager = (function(){
    var uid = 0;
    return {
        getUid: function(){
            uid += 1;
            return uid;
        },
        setUid: function(newUid){
            uid = newUid;
        }
    };
})();

var makeEcs = function(key, args){
    args = (args === undefined) ? {} : args;
    args.uid = uidManager.getUid();
    if (ecs[key] === undefined){
        console.log('tried to build ' + key);
    }
    return ecs[key](args);
};

var makeAllEcs = function(csvId){
    return _.map(csvIdentifiers[csvId], function(key){
        return makeEcs(key, {});
    });
};

