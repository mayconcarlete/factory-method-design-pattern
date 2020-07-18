import {Human} from '../inheritance/human'
import {TCharacterOptions} from '../types/types'

export class Warrior extends Human{
    private readonly swordSkill:number

    constructor(characterOptions:TCharacterOptions){
        const {name, health, maxHealth} = characterOptions
        if(health <= maxHealth){
            super(name,health,maxHealth)
        }else{
            super(name, health, health )
        }
        this.swordSkill = 0
    }
    
    getMainSkill(){
        console.log(`You had ${this.swordSkill} sword skill`)
    }
}