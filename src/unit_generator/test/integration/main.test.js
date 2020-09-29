let chai = require('chai');
chai.should();
const Unit = require('../../units/Unit');
const Main = require('../../main');

describe('Main', () => {
    let main = new Main();
    it('should make units', () => {
        let unit = new Unit();
        let specs = "hoardOf dwarf elite heavy siegeEngine";

        unit = main.makeUnit(specs);

        unit.name.should.deep.equal({
            size: "Hoard",
            race: "Dwarf",
            experience: "Elite",
            equipment: "Heavy",
            unit: "Siege Engine"
        });
    });

});