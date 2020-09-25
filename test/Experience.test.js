let chai = require('chai');
chai.should();

describe('Experience', () => {
    let unit;

    xit('should apply Green equipment bonuses', () => {
        unit = new Green();
        unit.attack.should.equal(0);
        unit.power.should.equal(0);
        unit.defense.should.equal(0);
        unit.toughness.should.equal(0);
        unit.morale.should.equal(0);
    });

    xit('should apply Regular equipment bonuses', () => {
        unit = new Medium();
        unit.power.should.equal(2);
        unit.defense.should.equal(2);
    });

    xit('should apply Seasoned equipment bonuses', () => {
        unit = new Heavy();
        unit.power.should.equal(4);
        unit.defense.should.equal(4);
    });

    xit('should apply Veteran equipment bonuses', () => {
        unit = new SuperHeavy();
        unit.power.should.equal(6);
        unit.defense.should.equal(6);
    });

    xit('should apply Elite equipment bonuses', () => {
        unit = new SuperHeavy();
        unit.power.should.equal(6);
        unit.defense.should.equal(6);
    });

    xit('should apply SuperElite equipment bonuses', () => {
        unit = new SuperHeavy();
        unit.power.should.equal(6);
        unit.defense.should.equal(6);
    });
});