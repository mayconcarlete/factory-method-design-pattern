import {TCharacterOptions} from '../types/types'
import {Warrior, Sorcerer} from '../vocation-classes'

export class VocationFactory{
    createCharacter(type:string, characterOptions:TCharacterOptions):Warrior|Sorcerer{
        switch(type){
            case 'warrior': {
                return new Warrior(characterOptions)
            }
            case 'sorcerer':{
                return new Sorcerer(characterOptions)
            }
            default: throw new Error('You must provide a valid type.')
        }
    }
}   