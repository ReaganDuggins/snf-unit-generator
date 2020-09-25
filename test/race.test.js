let chai = require('chai');
const Race = require('../Race');
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
        unit.defense.should.equal(0);
        unit.toughness.should.equal(0);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.martial
        ]);
    });

    it('should apply Dragonborn bonuses', () => {
        unit = unit.dragonborn();
        unit.attack.should.equal(2);
        unit.power.should.equal(2);
        unit.defense.should.equal(1);
        unit.toughness.should.equal(1);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.courageous
        ]);
    });

    it('should apply Dwarf bonuses', () => {
        unit = unit.dwarf();
        unit.attack.should.equal(3);
        unit.power.should.equal(1);
        unit.defense.should.equal(1);
        unit.toughness.should.equal(1);
        unit.morale.should.equal(2);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.stalwart
        ]);
    });

    it('should apply Elf bonuses', () => {
        unit = unit.elf();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(0);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.eternal
        ]);
    });

    it('should apply Elf (winged) bonuses', () => {
        unit = unit.elfWinged();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(0);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.eternal
        ]);
    });

    it('should apply Ghoul bonuses', () => {
        unit = unit.ghoul();
        unit.attack.should.equal(-1);
        unit.power.should.equal(0);
        unit.defense.should.equal(2);
        unit.toughness.should.equal(2);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.undead,
            Traits.horrify,
            Traits.ravenous
        ]);
    });

    it('should apply Gnoll bonuses', () => {
        unit = unit.gnoll();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(0);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.frenzy
        ]);
    });

    it('should apply Gnome bonuses', () => {
        unit = unit.gnome();
        unit.attack.should.equal(1);
        unit.power.should.equal(-1);
        unit.defense.should.equal(1);
        unit.toughness.should.equal(-1);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([]);
    });

    it('should apply Goblin bonuses', () => {
        unit = unit.goblin();
        unit.attack.should.equal(-1);
        unit.power.should.equal(-1);
        unit.defense.should.equal(1);
        unit.toughness.should.equal(-1);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([]);
    });

    it('should apply Hobgoblin bonuses', () => {
        unit = unit.hobgoblin();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(0);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.martial,
            Traits.bredForWar
        ]);
    });

    it('should apply Human bonuses', () => {
        unit = unit.human();
        unit.attack.should.equal(2);
        unit.power.should.equal(0);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(0);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.courageous
        ]);
    });

    it('should apply Kobold bonuses', () => {
        unit = unit.kobold();
        unit.attack.should.equal(-1);
        unit.power.should.equal(-1);
        unit.defense.should.equal(1);
        unit.toughness.should.equal(-1);
        unit.morale.should.equal(-1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([]);
    });

    it('should apply Lizardfolk bonuses', () => {
        unit = unit.lizardfolk();
        unit.attack.should.equal(2);
        unit.power.should.equal(1);
        unit.defense.should.equal(-1);
        unit.toughness.should.equal(1);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.amphibious
        ]);
    });

    it('should apply Ogre bonuses', () => {
        unit = unit.ogre();
        unit.attack.should.equal(0);
        unit.power.should.equal(2);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(2);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.brutal
        ]);
    });

    it('should apply Orc bonuses', () => {
        unit = unit.orc();
        unit.attack.should.equal(2);
        unit.power.should.equal(1);
        unit.defense.should.equal(1);
        unit.toughness.should.equal(1);
        unit.morale.should.equal(2);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.savage
        ]);
    });

    it('should apply Skeleton bonuses', () => {
        unit = unit.skeleton();
        unit.attack.should.equal(-2);
        unit.power.should.equal(-1);
        unit.defense.should.equal(1);
        unit.toughness.should.equal(1);
        unit.morale.should.equal(1);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.undead,
            Traits.mindless
        ]);
    });

    it('should apply Ent bonuses', () => {
        unit = unit.ent();
        unit.attack.should.equal(0);
        unit.power.should.equal(2);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(2);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.twistingRoots,
            Traits.rockHurler
        ]);
    });

    it('should apply Troll bonuses', () => {
        unit = unit.troll();
        unit.attack.should.equal(0);
        unit.power.should.equal(2);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(2);
        unit.morale.should.equal(0);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.regenerate
        ]);
    });

    it('should apply Zombie bonuses', () => {
        unit = unit.zombie();
        unit.attack.should.equal(-2);
        unit.power.should.equal(0);
        unit.defense.should.equal(2);
        unit.toughness.should.equal(2);
        unit.morale.should.equal(2);
        unit.cost.should.equal(0);
        unit.traits.should.deep.equal([
            Traits.undead,
            Traits.mindless
        ]);
    });
})
