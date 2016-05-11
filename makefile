all: ecs.js

ecs_files := $(shell find ./ecs -name *.ecs)
csv_files := $(shell find ./ecs -name *.csv)
gen_csv_files := $(shell find ./ecs -name *.gen_csv)

SUB_FOLDER := ecs/sleeper

ecs.js: $(ecs_files) $(csv_files) $(gen_csv_files) ecsCompiler/compileEcs.py ecsCompiler/parseCsv.py $(SUB_FOLDER)/towerButton.gen_csv $(SUB_FOLDER)/personTower.gen_csv $(SUB_FOLDER)/invitationAction.gen_csv $(SUB_FOLDER)/invitationGoal.gen_csv $(SUB_FOLDER)/towerSource.gen_csv $(SUB_FOLDER)/sourceExtension.gen_csv $(SUB_FOLDER)/traitButton.gen_csv
	python ecsCompiler/compileEcs.py $(SUB_FOLDER) > ecs.js

$(SUB_FOLDER)/towerButton.gen_csv: $(SUB_FOLDER)/makeTowerButtons.py $(SUB_FOLDER)/towerButton.csv $(SUB_FOLDER)/memoryTowerButton.csv
	python $(SUB_FOLDER)/makeTowerButtons.py

$(SUB_FOLDER)/towerSource.gen_csv: $(SUB_FOLDER)/makeTowerSources.py $(SUB_FOLDER)/tower.csv $(SUB_FOLDER)/itemAction.csv
	python $(SUB_FOLDER)/makeTowerSources.py

$(SUB_FOLDER)/personTower.gen_csv: $(SUB_FOLDER)/permuteWithPeople.py $(SUB_FOLDER)/personTower.csv $(SUB_FOLDER)/personTowerSource.temp_csv $(SUB_FOLDER)/personTowerButton.csv
	python $(SUB_FOLDER)/permuteWithPeople.py

$(SUB_FOLDER)/personTowerSource.temp_csv: $(SUB_FOLDER)/makePersonTowerSources.py $(SUB_FOLDER)/makeTowerSources.py $(SUB_FOLDER)/personTower.csv $(SUB_FOLDER)/personAction.csv $(SUB_FOLDER)/invitationAction.gen_csv
	python $(SUB_FOLDER)/makePersonTowerSources.py

$(SUB_FOLDER)/invitationAction.gen_csv $(SUB_FOLDER)/invitationGoal.gen_csv: $(SUB_FOLDER)/makeInvitationActions.py $(SUB_FOLDER)/itemAction.csv $(SUB_FOLDER)/personAction.csv $(SUB_FOLDER)/entityKillWish.csv
	python $(SUB_FOLDER)/makeInvitationActions.py

$(SUB_FOLDER)/sourceExtension.gen_csv: $(SUB_FOLDER)/person.csv $(SUB_FOLDER)/trait.csv $(SUB_FOLDER)/makeSourceExtension.py
	python $(SUB_FOLDER)/makeSourceExtension.py

$(SUB_FOLDER)/traitButton.gen_csv: $(SUB_FOLDER)/traitButton.csv $(SUB_FOLDER)/trait.csv $(SUB_FOLDER)/makeTraitButtons.py
	python $(SUB_FOLDER)/makeTraitButtons.py
