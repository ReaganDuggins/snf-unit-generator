let chai = require('chai');
chai.should();

const Unit = require('../../attributes/Unit');

describe('Integration Testing', () => {
    
    xit('should be able to stack attributes', () => {
        let unit = new Unit().legionOf().elf().superElite().light().cavalry().countCost();
        console.log("\n\n\n");
        console.log(unit.toString());
        console.log("\n\n\n");
    });
});