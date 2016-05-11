import os
import csv

def parseCsv(baseFolder, csvFile):
    csvValues = []
    with open(os.path.join(baseFolder, csvFile)) as fil:
        for i, row in enumerate(csv.reader(fil)):
            if i == 0:
                keys = row
            else:
                csvValues.append({key: element for key, element in zip(keys, row)})
    return keys, csvValues

def permuteWithPeople(keys, base, people, mangles, keySets):
    keys.extend(keySets)

    result = [keys]
    for person in people:
        for baseSource in base:
            newSource = {key: val for key, val in baseSource.iteritems()}
            for mangle in mangles:
                newSource[mangle] += '_' + person['key']
            for keySet in keySets:
                newSource[keySet] = person['key']
            result.append([newSource[key] for key in keys])
    
    return result
    

def makeFile(baseFolder, filename, people, mangles, keySets):
    keys, baseSources = parseCsv(baseFolder, filename)
    
    sources = permuteWithPeople(keys, baseSources, people, mangles, keySets)
    
    ofilename = filename[4:].replace('bcsv', 'csv')
    ofilename = ofilename[0].lower() + ofilename[1:]
    
    with open(os.path.join(baseFolder, ofilename), 'w') as ofil:
        writer = csv.writer(ofil)
        writer.writerows(sources)

if __name__ == '__main__':
    import sys
    baseFolder = os.path.split(sys.argv[0])[0]
    _, people = parseCsv(baseFolder, 'person.csv')
    makeFile(baseFolder, 'basePersonTowerSource.bcsv', people, ['key', 'towerKey'], ['personHeld'])
    makeFile(baseFolder, 'basePersonTowerButton.bcsv', people, ['key', 'towerKey', 'sourceKey'], ['personHeld'])
    makeFile(baseFolder, 'basePersonTower.bcsv', people, ['key'], ['sourceTrait'])
