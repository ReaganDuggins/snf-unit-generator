let chai = require('chai');
chai.should();

const Unit = require('../../attributes/Unit');

describe('Integration Testing', () => {
    
    it('should be able to stack attributes', () => {
        let unit = new Unit().regimentOf().dwarf().elite().heavy().infantry().countCost();
        console.log("--------------------\n");
        console.log(unit);
        console.log("--------------------\n");

    });
});