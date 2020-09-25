let chai = require('chai');
const Unit = require('../Race');
const Light = require('../equipment/Light');
const Medium = require('../equipment/Medium');
const Heavy = require('../equipment/Heavy');
const SuperHeavy = require('../equipment/SuperHeavy');
chai.should();

describe('Equipment', () => {
    let unit;

    it('should apply light equipment bonuses', () => {
        unit = new Light();
        unit.power.should.equal(1);
        unit.defense.should.equal(1);
    });

    it('should apply medium equipment bonuses', () => {
        unit = new Medium();
        unit.power.should.equal(2);
        unit.defense.should.equal(2);
    });

    it('should apply heavy equipment bonuses', () => {
        unit = new Heavy();
        unit.power.should.equal(4);
        unit.defense.should.equal(4);
    });

    it('should apply super heavy equipment bonuses', () => {
        unit = new SuperHeavy();
        unit.power.should.equal(6);
        unit.defense.should.equal(6);
    });
});