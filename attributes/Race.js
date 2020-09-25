let Traits = require('../Traits');

class Race {
    constructor() {
        this.attack = 0;
        this.defense = 10;
        this.power = 0;
        this.toughness = 10;
        this.morale = 0;
        this.size = 0;
        this.cost = 0;
        this.costModifier = 1;
        this.traits = [];
    }

    addTrait = function() {
        this.traits.push(...arguments);
    }

    dragonborn = () => {
        this.attack += 2;
        this.power += 2;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 1;
        this.addTrait(Traits.courageous);
        return this;
    }

    dwarf = () => {
        this.attack += 3;
        this.power += 1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 2;
        this.addTrait(Traits.stalwart);
        return this;
    }

    human = () => {
        this.attack += 2;
        this.morale += 1;
        this.addTrait(Traits.courageous);
        return this;
    }

    elf = () => {
        this.humanStats();
        this.addTrait(Traits.eternal);
        return this;
    }

    gnoll = () => {
        this.humanStats();
        this.addTrait(Traits.frenzy);
        return this;
    }
    
    hobgoblin = () => {
        this.humanStats();
        this.addTrait(Traits.martial, Traits.bredForWar);
        return this;
    }

    bugbear = () => {
        this.humanStats();
        this.addTrait(Traits.martial);
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
        this.addTrait(Traits.eternal);
        return this;
    }

    ghoul = () => {
        this.attack += -1;
        this.defense += 2;
        this.toughness += 2;
        this.addTrait(Traits.undead, Traits.horrify, Traits.ravenous);
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
        this.addTrait(Traits.amphibious);
        return this;
    }
        
    orc = () => {
        this.attack += 2;
        this.power += 1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 2;
        this.addTrait(Traits.savage);
        return this;
    }

    skeleton = () => {
        this.attack += -2;
        this.power += -1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 1;
        this.addTrait(Traits.undead, Traits.mindless);
        return this;
    }

    zombie = () => {
        this.attack += -2;
        this.defense += 2;
        this.toughness += 2;
        this.morale += 2;
        this.addTrait(Traits.undead, Traits.mindless);
        return this;
    }

    ent = () => {
        this.giantStats();
        this.addTrait(Traits.twistingRoots, Traits.rockHurler);
        return this;
    }

    troll = () => {
        this.giantStats();
        this.addTrait(Traits.regenerate);
        return this;
    }

    ogre = () => {
        this.giantStats();
        this.morale += 1;
        this.addTrait(Traits.brutal);
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

module.exports = Race;