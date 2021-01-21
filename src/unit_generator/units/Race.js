let Traits = require('./Traits');
const Size = require('./Size');

class Race extends Size {
    constructor() {
        super();
    }

    addTrait = function() {
        this.traits.push(...arguments);
    }

    ankheg = () => {
        this.attack += 1;
        this.power += 1;
        this.toughness += 1;
        this.addTrait(Traits.burrower);
        this.addTrait(Traits.acidSpit);
        this.name.race = "Ankheg";
        return this;
    }

    dragonborn = () => {
        this.attack += 2;
        this.power += 2;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 1;
        this.addTrait(Traits.courageous);
        this.name.race= 'Dragonborn';
        return this;
    }

    dwarf = () => {
        this.attack += 3;
        this.power += 1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 2;
        this.addTrait(Traits.stalwart);
        this.name.race= 'Dwarf';
        return this;
    }

    human = () => {
        this.humanStats();
        this.addTrait(Traits.courageous);
        this.name.race= 'Human';
        return this;
    }

    warforged = () => {
        this.humanStats();
        this.defense += 1;
        this.toughness += 1;
        this.name.race = "Warforged";
        return this;
    }

    elf = () => {
        this.humanStats();
        this.addTrait(Traits.eternal);
        this.name.race= 'Elf';
        return this;
    }

    gnoll = () => {
        this.humanStats();
        this.addTrait(Traits.frenzy);
        this.name.race= 'Gnoll';
        return this;
    }
    
    hobgoblin = () => {
        this.humanStats();
        this.addTrait(Traits.martial, Traits.bredForWar);
        this.name.race= 'Hobgoblin';
        return this;
    }

    bugbear = () => {
        this.humanStats();
        this.addTrait(Traits.martial);
        this.name.race= 'Bugbear';
        return this;
    }
    
    goblin = () => {
        this.attack += -1;
        this.power += -1;
        this.defense += 1;
        this.toughness += -1;
        this.name.race= 'Goblin';
        return this;
    }

    kobold = () => {
        this.attack += -1;
        this.power += -1;
        this.defense += 1;
        this.toughness += -1;
        this.morale += -1;
        this.name.race= 'Kobold';
        return this;
    }

    grippli = () => {
        this.attack += -1;
        this.power += -1;
        this.defense += 1;
        this.toughness += -1;
        this.morale += +1;
        this.name.race= 'Grippli';
        this.addTrait(traits.amphibious);
        return this;
    }

    elfWinged = () => {
        this.attack += 1;
        this.power += 1;
        this.morale += 1;
        this.addTrait(Traits.eternal);
        this.name.race= 'Elf (winged)';
        return this;
    }

    ghoul = () => {
        this.attack += -1;
        this.defense += 2;
        this.toughness += 2;
        this.addTrait(Traits.undead, Traits.horrify, Traits.ravenous);
        this.name.race= 'Ghoul';
        return this;
    }

    gnome = () => {
        this.attack += 1;
        this.power += -1;
        this.defense += 1;
        this.toughness += -1;
        this.morale += 1;
        this.name.race= 'Gnome';
        return this;
    }

    lizardfolk = () => {
        this.attack += 2;
        this.power += 1;
        this.defense += -1;
        this.toughness += 1;
        this.morale += 1;
        this.addTrait(Traits.amphibious);
        this.name.race= 'Lizardfolk';
        return this;
    }
        
    orc = () => {
        this.attack += 2;
        this.power += 1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 2;
        this.addTrait(Traits.savage);
        this.name.race= 'Orc';
        return this;
    }

    owlbear = () => {
        this.attack += 1;
        this.power += 2;
        this.toughness += 2;
        this.morale += 1;
        this.name.race = "Owlbear";
        this.addTrait(Traits.brutal);
    }

    skeleton = () => {
        this.attack += -2;
        this.power += -1;
        this.defense += 1;
        this.toughness += 1;
        this.morale += 1;
        this.addTrait(Traits.undead, Traits.mindless);
        this.name.race= 'Skeleton';
        return this;
    }

    zombie = () => {
        this.attack += -2;
        this.defense += 2;
        this.toughness += 2;
        this.morale += 2;
        this.addTrait(Traits.undead, Traits.mindless);
        this.name.race= 'Zombie';
        return this;
    }

    ent = () => {
        this.giantStats();
        this.addTrait(Traits.twistingRoots, Traits.rockHurler);
        this.name.race= 'Ent';
        return this;
    }

    troll = () => {
        this.giantStats();
        this.addTrait(Traits.regenerate);
        this.name.race= 'Troll';
        return this;
    }

    ogre = () => {
        this.giantStats();
        this.morale += 1;
        this.addTrait(Traits.brutal);
        this.name.race= 'Ogre';
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