let chai = require('chai');
const Race = require('../attributes/Race');
const Traits = require('../Traits');
chai.should();


describe('Races', () => {
    let unit;
    
    beforeEach(() => {
        unit = new Race();
    });

    it('should apply Bugbear bonuses', () => {
        unit = unit.bugbear();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(10);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.martial
        ]);
        unit.name.race.should.equal('Bugbear');
    });

    it('should apply Dragonborn bonuses', () => {
        unit = unit.dragonborn();
        unit.attack.should.equal(2);
        unit.power.should.equal(2);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.courageous
        ]);
        unit.name.race.should.equal('Dragonborn');
    });

    it('should apply Dwarf bonuses', () => {
        unit = unit.dwarf();
        unit.attack.should.equal(3);
        unit.power.should.equal(1);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(2);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.stalwart
        ]);
        unit.name.race.should.equal('Dwarf');
    });

    it('should apply Elf bonuses', () => {
        unit = unit.elf();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(10);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.eternal
        ]);
        unit.name.race.should.equal('Elf');
    });

    it('should apply Elf (winged) bonuses', () => {
        unit = unit.elfWinged();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(10);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.eternal
        ]);
        unit.name.race.should.equal('Elf (winged)');
    });

    it('should apply Ghoul bonuses', () => {
        unit = unit.ghoul();
        unit.attack.should.equal(-1);
        unit.power.should.equal(0);
        unit.defense.should.equal(12);
        unit.toughness.should.equal(12);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.undead,
            Traits.horrify,
            Traits.ravenous
        ]);
        unit.name.race.should.equal('Ghoul');
    });

    it('should apply Gnoll bonuses', () => {
        unit = unit.gnoll();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(10);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.frenzy
        ]);
        unit.name.race.should.equal('Gnoll');
    });

    it('should apply Gnome bonuses', () => {
        unit = unit.gnome();
        unit.attack.should.equal(1);
        unit.power.should.equal(-1);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(9);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([]);
        unit.name.race.should.equal('Gnome');
    });

    it('should apply Goblin bonuses', () => {
        unit = unit.goblin();
        unit.attack.should.equal(-1);
        unit.power.should.equal(-1);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(9);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([]);
        unit.name.race.should.equal('Goblin');
    });

    it('should apply Hobgoblin bonuses', () => {
        unit = unit.hobgoblin();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(10);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.martial,
            Traits.bredForWar
        ]);
        unit.name.race.should.equal('Hobgoblin');
    });

    it('should apply Human bonuses', () => {
        unit = unit.human();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(10);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.courageous
        ]);
        unit.name.race.should.equal('Human');
    });

    it('should apply Kobold bonuses', () => {
        unit = unit.kobold();
        unit.attack.should.equal(-1);
        unit.power.should.equal(-1);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(9);
        unit.morale.should.equal(-1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([]);
        unit.name.race.should.equal('Kobold');
    });

    it('should apply Lizardfolk bonuses', () => {
        unit = unit.lizardfolk();
        unit.attack.should.equal(2);
        unit.power.should.equal(1);
        unit.defense.should.equal(9);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.amphibious
        ]);
        unit.name.race.should.equal('Lizardfolk');
    });

    it('should apply Ogre bonuses', () => {
        unit = unit.ogre();
        unit.attack.should.equal(0);
        unit.power.should.equal(2);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(12);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.brutal
        ]);
        unit.name.race.should.equal('Ogre');
    });

    it('should apply Orc bonuses', () => {
        unit = unit.orc();
        unit.attack.should.equal(2);
        unit.power.should.equal(1);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(2);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.savage
        ]);
        unit.name.race.should.equal('Orc');
    });

    it('should apply Skeleton bonuses', () => {
        unit = unit.skeleton();
        unit.attack.should.equal(-2);
        unit.power.should.equal(-1);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.undead,
            Traits.mindless
        ]);
        unit.name.race.should.equal('Skeleton');
    });

    it('should apply Ent bonuses', () => {
        unit = unit.ent();
        unit.attack.should.equal(0);
        unit.power.should.equal(2);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(12);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.twistingRoots,
            Traits.rockHurler
        ]);
        unit.name.race.should.equal('Ent');
    });

    it('should apply Troll bonuses', () => {
        unit = unit.troll();
        unit.attack.should.equal(0);
        unit.power.should.equal(2);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(12);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.regenerate
        ]);
        unit.name.race.should.equal('Troll');
    });

    it('should apply Zombie bonuses', () => {
        unit = unit.zombie();
        unit.attack.should.equal(-2);
        unit.power.should.equal(0);
        unit.defense.should.equal(12);
        unit.toughness.should.equal(12);
        unit.morale.should.equal(2);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.undead,
            Traits.mindless
        ]);
        unit.name.race.should.equal('Zombie');
    });

    it('should apply Ankheg bonuses', () => {
        unit = unit.ankheg();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.burrower,
            Traits.acidSpit
        ]);
        unit.name.race.should.equal('Ankheg');
    });

    it('should apply Warforged bonuses', () => {
        unit = unit.warforged();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(11);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
        ]);
        unit.name.race.should.equal('Warforged');
    });
})
