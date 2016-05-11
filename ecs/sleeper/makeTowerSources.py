import csvTools

def dictKeys(dct):
    return [pair.split(':')[0] for pair in dct.split('|')]

def checkTowerForAction(tower, action):
    towerCurrencies = dictKeys(tower['currency'])
    actionCurrencies = dictKeys(action['currency'])
    return any(currency in actionCurrencies for currency in towerCurrencies)

def stringifyArray(ary):
    if len(ary) == 0:
        return ''
    elif len(ary) == 1:
        return ary[0] + '|'
    else:
        return '|'.join(ary)

def makeTowerSource(tower, actions):
    source = {
        'key': tower['key'].replace('Tower', 'Source'),
        'towerKey': tower['key'],
        'towerActions': stringifyArray([action['key'] for action in actions if checkTowerForAction(tower, action)])
    }
    if 'sourceTrait' in tower:
        source['sourceTrait'] = tower['sourceTrait']

    return source

def makeTowerSources(towers, actions):
    sources = [makeTowerSource(tower, actions) for tower in towers]
    keys = [key for key in ['key', 'towerKey', 'sourceTrait', 'towerActions'] 
            if any(key in source for source in sources)]
    return keys, sources

    
if __name__ == '__main__':
    baseFolder = csvTools.getBaseFolder()
    _, towers = csvTools.parseCsv(baseFolder, 'tower.csv')
    _, actions = csvTools.parseCsv(baseFolder, 'itemAction.csv')
    keys, sources = makeTowerSources(towers, actions)
    csvTools.writeGenCsv(baseFolder, 'towerSource.gen_csv', keys, sources)
    _, memoryTowers = csvTools.parseCsv(baseFolder, 'memoryTower.csv')
    keys, memorySources = makeTowerSources(memoryTowers, actions)
    csvTools.writeGenCsv(baseFolder, 'memoryTowerSource.gen_csv', keys, memorySources)
