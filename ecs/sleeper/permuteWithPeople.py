import os

import csvTools
from makeTowerButtons import updateTowerButtons

def permuteWithPeople(keys, base, people, mangles, keySets):
    keys.extend(keySets)

    newRows = []
    for person in people:
        for baseSource in base:
            newSource = {key: val for key, val in baseSource.iteritems()}
            for mangle in mangles:
                newSource[mangle] += '_' + person['key']
            for keySet in keySets:
                newSource[keySet] = person['key']
            newRows.append(newSource)
    
    return keys, newRows
    

def makeFile(baseFolder, filename, people, mangles, keySets):
    keys, baseSources = csvTools.parseCsv(baseFolder, filename)
    keys, newRows = permuteWithPeople(keys, baseSources, people, mangles, keySets)
    csvTools.writeGenCsv(baseFolder, os.path.splitext(filename)[0] + '.gen_csv', keys, newRows)
    
if __name__ == '__main__':
    baseFolder = csvTools.getBaseFolder()
    _, people = csvTools.parseCsv(baseFolder, 'person.csv')
    makeFile(baseFolder, 'personTowerSource.temp_csv', people, ['key', 'towerKey'], ['personHeld', 'sourceTrait'])
    makeFile(baseFolder, 'personTower.csv', people, ['key'], ['sourceTrait'])

    keys, baseSources = csvTools.parseCsv(baseFolder, 'personTowerButton.csv')
    keys, result = permuteWithPeople(keys, baseSources, people, ['key'], ['personHeld', 'managerKey'])
    keys, result = updateTowerButtons(keys, result)
    csvTools.writeGenCsv(baseFolder, 'personTowerButton.gen_csv', keys, result)
