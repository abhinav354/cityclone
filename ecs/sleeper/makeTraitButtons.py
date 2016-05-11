import csvTools

def updateTraitButtons(keys, buttons, traits):
    for button in buttons:
        traitKey = button['key'].replace('Button', '')
        trait = [trait for trait in traits if trait['key'] == traitKey][0]
        button['traitKey'] = traitKey
        button['name'] = trait['name']
    keys += ['traitKey', 'name']
    return keys, buttons

if __name__ == '__main__':
    baseFolder = csvTools.getBaseFolder()
    keys, buttons = csvTools.parseCsv(baseFolder, 'traitButton.csv')
    _, traits = csvTools.parseCsv(baseFolder, 'trait.csv')
    keys, buttons = updateTraitButtons(keys, buttons, traits)
    csvTools.writeGenCsv(baseFolder, 'traitButton.gen_csv', keys, buttons)
