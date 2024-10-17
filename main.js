class Character {
    constructor(name, hp, attack) {
    this.name = name
    this.hp = hp
    }
    scream() {
        console.log('I will destroy you!')
    }
    attack(target) {
        console.log(`${this.name} attacks ${target.name}!`)
        console.log(`${target.name} loses 10 hp!`)
    }
}

class NPC extends Character {
    constructor(name, hp, loot ,attack) {
        super(name, hp, attack)
        this.loot = loot
    }
}

const aurora = new Character('aurora', 100) 

const bandit = new NPC('bandeeto', 50, 'Apple')

const homer = new Character('homer', 200)