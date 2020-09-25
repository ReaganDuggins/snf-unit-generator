let chai = require('chai');
chai.should();
const Size = require('../attributes/Size');
const Traits = require('../Traits');

describe('Unit Size', () => {
    let unit;

    beforeEach(() => {
        unit = new Size();
    });

    it('should apply Squad cost modifier', () => {
        unit.squad();
        unit.sizeCostModifier.should.equal(0.66);
    });

    it('should apply Regiment cost modifier', () => {
        unit.regiment();
        unit.sizeCostModifier.should.equal(1.0);
    });

    it('should apply Battalion cost modifier', () => {
        unit.battalion();
        unit.sizeCostModifier.should.equal(1.33);
    });

    it('should apply Legion cost modifier', () => {
        unit.legion();
        unit.sizeCostModifier.should.equal(1.66);
    });

    it('should apply Hoard cost modifier', () => {
        unit.hoard();
        unit.sizeCostModifier.should.equal(2.0);
    });
});