let chai = require('chai');
chai.should();
const Unit = require('../attributes/Unit');
const Traits = require('../Traits');

describe('Unit Type', () => {
    let unit;

    beforeEach(() => {
        unit = new Unit();
    });

    it('should apply Levy bonuses/penalties', () => {
        unit.levy();
        unit.morale.should.equal(-1);
        unit.traits.should.contain(Traits.levy);
    });

    it('should apply Infantry bonuses', () => {
        unit.infantry();
        unit.defense.should.equal(11);
        unit.toughness.should.equal(11);
        unit.traits.should.contain(Traits.infantry);
    });

    it('should apply Cavalry bonuses', () => {
        unit.cavalry();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.morale.should.equal(2);
        unit.traits.should.contain(Traits.cavalry);
    });

    it('should apply Flying bonuses', () => {
        unit.flying();
        unit.morale.should.equal(3);
        unit.traits.should.contain(Traits.flying);
    });

    it('should apply Archer bonuses', () => {
        unit.archer();
        unit.power.should.equal(1);
        unit.morale.should.equal(1);
        unit.traits.should.contain(Traits.archer);
    });

    it('should apply Siege Engine bonuses', () => {
        unit.siegeEngine();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.toughness.should.equal(11);
        unit.traits.should.contain(Traits.siegeEngine);
    });
});