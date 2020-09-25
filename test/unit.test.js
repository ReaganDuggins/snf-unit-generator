let chai = require('chai');
const Unit = require('../attributes/Unit');
chai.should();

describe('Unit Type', () => {
    let unit;

    beforeEach(() => {
        unit = new Unit();
    });

    it('should apply Levy bonuses/penalties', () => {
        unit.levy();
        unit.morale.should.equal(-1);
    });

    it('should apply Infantry bonuses', () => {
        unit.infantry();
        unit.defense.should.equal(1);
        unit.toughness.should.equal(1);
    });

    it('should apply Cavalry bonuses', () => {
        unit.cavalry();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.morale.should.equal(2);
    });

    it('should apply Flying bonuses', () => {
        unit.flying();
        unit.morale.should.equal(3);
    });

    it('should apply Archer bonuses', () => {
        unit.archer();
        unit.power.should.equal(1);
        unit.morale.should.equal(1);
    });

    it('should apply Siege Engine bonuses', () => {
        unit.siegeEngine();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.toughness.should.equal(1);
    });
});