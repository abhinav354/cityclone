import csvTools

def makeInvitations(itemActions):
    inviteActions = []
    inviteGoals = []
    for action in itemActions:
        inviteAction = {
            'key': 'invite_' + action['key'],
            'name': 'Invite to ' + action['name'],
            'items': action['items'],
            'currency': 'chat:250',
            'consumeCheck': 0,
            'entitiesToMake': 'inviteGoal_' + action['key'],
            'focusCost': 10,
            'requiredOpinions': 'acquaintance|',
            'makeMemoryChance': 0,
        }
        inviteGoal = {
            'key': 'inviteGoal_' + action['key'],
            'name': 'Invited ' + action['name'],
            'entitiesToKill': action['items'][:-1] + ':1',
            'squashCurrency': '',
            'focusCost': 5,
            'spawnSourceKey': 'self',
            'timeToDeath': 60
        }
        inviteActions.append(inviteAction)
        inviteGoals.append(inviteGoal)

    return inviteActions, inviteGoals

if __name__ == '__main__':
    import sys
    import os
    baseFolder = os.path.split(sys.argv[0])[0]
    keys, itemActions = csvTools.parseCsv(baseFolder, 'itemAction.csv')
    inviteActions, inviteGoals = makeInvitations(itemActions)
    keys, _ = csvTools.parseCsv(baseFolder, 'personAction.csv')
    csvTools.writeGenCsv(baseFolder, 'invitationAction.gen_csv', keys, inviteActions)
    keys, _ = csvTools.parseCsv(baseFolder, 'entityKillWish.csv')
    csvTools.writeGenCsv(baseFolder, 'invitationGoal.gen_csv', keys, inviteGoals)
    
