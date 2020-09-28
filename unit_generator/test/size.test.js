let chai = require('chai');
chai.should();
const Size = require('../units/Size');
const Traits = require('../units/Traits');

describe('Unit Size', () => {
    let unit;

    beforeEach(() => {
        unit = new Size();
    });

    it('should apply Squad cost modifier', () => {
        unit.squadOf() ;
        unit.sizeCostModifier.should.equal(0.66);
        unit.name.size.should.equal('Squad');
    });

    it('should apply Regiment cost modifier', () => {
        unit.regimentOf()  ;
        unit.sizeCostModifier.should.equal(1.0);
        unit.name.size.should.equal('Regiment');
    });

    it('should apply Battalion cost modifier', () => {
        unit.battalionOf() ;
        unit.sizeCostModifier.should.equal(1.33);
        unit.name.size.should.equal('Battalion');
    });

    it('should apply Legion cost modifier', () => {
        unit.legionOf();
        unit.sizeCostModifier.should.equal(1.66);
        unit.name.size.should.equal('Legion');
    });

    it('should apply Hoard cost modifier', () => {
        unit.hoardOf();
        unit.sizeCostModifier.should.equal(2.0);
        unit.name.size.should.equal('Hoard');
    });
});