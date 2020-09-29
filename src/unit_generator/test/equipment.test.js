let chai = require('chai');
const Equipment = require('../units/Equipment');
chai.should();

describe('Equipment', () => {
    let unit;

    beforeEach(() => {
        unit = new Equipment();
    })

    it('should apply light equipment bonuses', () => {
        unit.light();
        unit.power.should.equal(1);
        unit.defense.should.equal(11);
        unit.name.equipment.should.equal('Light');
    });

    it('should apply medium equipment bonuses', () => {
        unit.medium();
        unit.power.should.equal(2);
        unit.defense.should.equal(12);
        unit.name.equipment.should.equal('Medium');
    });

    it('should apply heavy equipment bonuses', () => {
        unit.heavy();
        unit.power.should.equal(4);
        unit.defense.should.equal(14);
        unit.name.equipment.should.equal('Heavy');
    });

    it('should apply super heavy equipment bonuses', () => {
        unit.superHeavy();
        unit.power.should.equal(6);
        unit.defense.should.equal(16);
        unit.name.equipment.should.equal('Super Heavy');
    });
});