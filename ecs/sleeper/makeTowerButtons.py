import csvTools

def updateTowerButtons(keys, buttons):
    for button in buttons:
        button['towerKey'] = button['key'].replace('Button', 'Tower')
        sourceKey = button['key'].replace('Button', 'Source')
        button['sourceKey'] = sourceKey
        button['isaacEntities'] = sourceKey + '|'

    keys += ['towerKey', 'sourceKey', 'isaacEntities']
    return keys, buttons
        
if __name__ == '__main__':
    baseFolder = csvTools.getBaseFolder()
    keys, buttons = csvTools.parseCsv(baseFolder, 'towerButton.csv')
    _, towers = csvTools.parseCsv(baseFolder, 'tower.csv')
    keys, buttons = updateTowerButtons(keys, buttons)

    for button in buttons:
        tower = [tower for tower in towers if tower['key'] == button['towerKey']][0]
        button['managerKey'] = tower['sourceTrait']
    keys += ['managerKey']

    csvTools.writeGenCsv(baseFolder, 'towerButton.gen_csv', keys, buttons)
    keys, buttons = csvTools.parseCsv(baseFolder, 'memoryTowerButton.csv')
    keys, buttons = updateTowerButtons(keys, buttons)
    csvTools.writeGenCsv(baseFolder, 'memoryTowerButton.gen_csv', keys, buttons)
