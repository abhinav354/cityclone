import csvTools
import makeTowerSources

if __name__ == '__main__':
    baseFolder = csvTools.getBaseFolder()
    _, towers = csvTools.parseCsv(baseFolder, 'personTower.csv')
    _, actions = csvTools.parseCsv(baseFolder, 'personAction.csv')
    _, inviteActions = csvTools.parseCsv(baseFolder, 'invitationAction.gen_csv')
    keys, sources = makeTowerSources.makeTowerSources(towers, actions + inviteActions)
    csvTools.writeGenCsv(baseFolder, 'personTowerSource.temp_csv', keys, sources)
