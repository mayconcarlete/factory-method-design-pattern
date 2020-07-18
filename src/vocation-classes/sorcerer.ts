import { Human } from '../inheritance/human'
import {TCharacterOptions} from '../types/types'

export class Sorcerer extends Human{
    private readonly magicSkill:number
   
    constructor(characterOptions:TCharacterOptions){
        const {name, health, maxHealth} = characterOptions
        if(health <= maxHealth){
            super(name, health, maxHealth)
        }else {
            super(name, health, health)
        }
        this.magicSkill = 0
    }

    getMainSkill(){
        return console.log(`You had ${this.magicSkill} sword skill`)
    }
}