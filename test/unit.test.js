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
        unit.unitTypeModifier.should.equal(0.75);
        unit.name.unit.should.equal('Levy');
        unit.traits.should.contain(Traits.levy);
    });

    it('should apply Infantry bonuses', () => {
        unit.infantry();
        unit.defense.should.equal(11);
        unit.toughness.should.equal(11);
        unit.unitTypeModifier.should.equal(1.0);
        unit.name.unit.should.equal('Infantry');
        unit.traits.should.contain(Traits.infantry);
    });

    it('should apply Cavalry bonuses', () => {
        unit.cavalry();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.morale.should.equal(2);
        unit.unitTypeModifier.should.equal(1.5);
        unit.name.unit.should.equal('Cavalry');
        unit.traits.should.contain(Traits.cavalry);
    });

    it('should apply Flying bonuses', () => {
        unit.flying();
        unit.morale.should.equal(3);
        unit.unitTypeModifier.should.equal(2.0);
        unit.name.unit.should.equal('Flying');
        unit.traits.should.contain(Traits.flying);
    });

    it('should apply Archer bonuses', () => {
        unit.archer();
        unit.power.should.equal(1);
        unit.morale.should.equal(1);
        unit.unitTypeModifier.should.equal(1.75);
        unit.name.unit.should.equal('Archer');
        unit.traits.should.contain(Traits.archer);
    });

    it('should apply Siege Engine bonuses', () => {
        unit.siegeEngine();
        unit.attack.should.equal(1);
        unit.power.should.equal(1);
        unit.toughness.should.equal(11);
        unit.unitTypeModifier.should.equal(1.5);
        unit.name.unit.should.equal('Siege Engine');
        unit.traits.should.contain(Traits.siegeEngine);
    });
});