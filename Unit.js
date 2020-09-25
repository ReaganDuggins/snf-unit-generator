let Traits = require('./Traits');

class Unit {
    constructor() {
        this.attack = 0;
        this.defense = 0;
        this.power = 0;
        this.toughness = 0;
        this.morale = 0;
        this.cost = 0;
        this.size = 0;
        this.traits = [];
    }

    

    dragonborn = () => {
        this.attack += 2;
        this.power += 2;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 1;
        return this;
    }

    dwarf = () => {
        this.attack += 3;
        this.power += 1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 2;
        return this;
    }

    human = () => {
        this.attack += 2;
        this.morale += 1;
        return this;
    }

    elf = () => {
        this.humanStats();
        return this;
    }

    gnoll = () => {
        this.humanStats();
        return this;
    }
    
    hobgoblin = () => {
        this.humanStats();
        return this;
    }

    bugbear = () => {
        this.humanStats();
        this.traits.push(Traits.martial);
        return this;
    }
    
    goblin = () => {
        this.attack += -1;
        this.power += -1;
        this.defense += 1;
        this.toughness += -1;
        return this;
    }

    kobold = () => {
        this.attack += -1;
        this.power += -1;
        this.defense += 1;
        this.toughness += -1;
        this.morale += -1;
        return this;
    }

    elfWinged = () => {
        this.attack += 1;
        this.power += 1;
        this.morale += 1;
        return this;
    }

    ghoul = () => {
        this.attack += -1;
        this.defense += 2;
        this.toughness += 2;
        return this;
    }

    gnome = () => {
        this.attack += 1;
        this.power += -1;
        this.defense += 1;
        this.toughness += -1;
        this.morale += 1;
        return this;
    }

    lizardfolk = () => {
        this.attack += 2;
        this.power += 1;
        this.defense += -1;
        this.toughness += 1;
        this.morale += 1;
        return this;
    }
        
    orc = () => {
        this.attack += 2;
        this.power += 1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 2;
        return this;
    }

    skeleton = () => {
        this.attack += -2;
        this.power += -1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 1;
        return this;
    }

    zombie = () => {
        this.attack += -2;
        this.defense += 2;
        this.toughness += 2;
        this.morale += 2;
        return this;
    }

    ent = () => {
        this.giantStats();
        return this;
    }

    troll = () => {
        this.giantStats();
        return this;
    }

    ogre = () => {
        this.giantStats();
        this.morale += 1;
        return this;
    }



    humanStats = () => {
        this.attack += 2;
        this.morale += 1;
    }

    giantStats = () => {
        this.power += 2;
        this.toughness += 2;
    }
}

module.exports = Unit;