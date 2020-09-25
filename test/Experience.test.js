let chai = require('chai');
chai.should();

let Experience = require('../attributes/Experience');

describe('Experience', () => {
    let unit;

    beforeEach(() => {
        unit = new Experience();
    })

    it('should apply Green experience bonuses', () => {
        unit.green();
        unit.attack.should.equal(0);
        unit.power.should.equal(0);
        unit.defense.should.equal(10);
        unit.toughness.should.equal(10);
        unit.morale.should.equal(0);
    });

    it('should apply Regular experience bonuses', () => {
        unit.regular();
        unit.attack.should.equal(1);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(1);
    });

    it('should apply Seasoned experience bonuses', () => {
        unit.seasoned();
        unit.attack.should.equal(1);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(2);
    });

    it('should apply Veteran experience bonuses', () => {
        unit.veteran();
        unit.attack.should.equal(1);
        unit.toughness.should.equal(11);
        unit.morale.should.equal(3);
    });

    it('should apply Elite experience bonuses', () => {
        unit.elite();
        unit.attack.should.equal(2);
        unit.toughness.should.equal(12)
        unit.morale.should.equal(4);
    });

    it('should apply SuperElite experience bonuses', () => {
        unit.superElite();
        unit.attack.should.equal(2);
        unit.toughness.should.equal(12)
        unit.morale.should.equal(5);
    });
});