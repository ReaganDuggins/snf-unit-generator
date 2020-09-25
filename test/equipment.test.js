let chai = require('chai');
const Equipment = require('../attributes/Equipment');
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
    });

    it('should apply medium equipment bonuses', () => {
        unit.medium();
        unit.power.should.equal(2);
        unit.defense.should.equal(12);
    });

    it('should apply heavy equipment bonuses', () => {
        unit.heavy();
        unit.power.should.equal(4);
        unit.defense.should.equal(14);
    });

    it('should apply super heavy equipment bonuses', () => {
        unit.superHeavy();
        unit.power.should.equal(6);
        unit.defense.should.equal(16);
    });
});