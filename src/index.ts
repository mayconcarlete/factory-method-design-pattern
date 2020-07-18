import {VocationFactory} from './factory/vocation-factory'

const vocationFactory = new VocationFactory()

const knightMare = vocationFactory.createCharacter('warrior',{name:'Knight Mare',health:500, maxHealth:1000})
const harryPotter = vocationFactory.createCharacter('sorcerer', {name:'Harry Potter', health:200, maxHealth:600})

knightMare.displayInfo()
harryPotter.displayInfo()

knightMare.getMainSkill()
harryPotter.getMainSkill()

knightMare.setNewSkillLvl(4)
harryPotter.setNewSkillLvl(10)

knightMare.getMainSkill()
harryPotter.getMainSkill()



