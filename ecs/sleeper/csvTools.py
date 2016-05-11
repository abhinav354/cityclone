import sys
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

def writeGenCsv(baseFolder, filename, keys, rows):
    result = [keys] + [[row[key] if key in row else '' for key in keys] for row in rows]
    with open(os.path.join(baseFolder, filename), 'w') as ofil:
        writer = csv.writer(ofil)
        writer.writerows(result)

def getBaseFolder():
    return os.path.split(sys.argv[0])[0]
