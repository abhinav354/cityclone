import csvTools

def makeSourceExtensions(sources):
    keys = ['key', 'name', 'currencies', 'sourceKey']
    exts = [{
        'key': source['key'] + '_ext',
        'name': source['name'],
        'currencies': source['currencies'] if 'currencies' in source else '',
        'sourceKey': source['key']
    } for source in sources]
    return keys, exts

if __name__ == '__main__':
    baseFolder = csvTools.getBaseFolder()
    _, traits = csvTools.parseCsv(baseFolder, 'trait.csv')
    _, people = csvTools.parseCsv(baseFolder, 'person.csv')
    keys, exts = makeSourceExtensions(traits + people)
    csvTools.writeGenCsv(baseFolder, 'sourceExtension.gen_csv', keys, exts)
