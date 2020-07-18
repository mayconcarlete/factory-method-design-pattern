export abstract class Human {
    getMainSkill() {
        throw new Error("Method not implemented.");
    }
    constructor(
        private readonly name:string,
        private readonly health:number,
        private readonly maxHealth:number
    ){}
    displayInfo(){
        return console.log(this.name, this.health, this.maxHealth)
    }
}