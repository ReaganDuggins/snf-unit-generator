let Unit = require('./attributes/Unit');

class Main {
    constructor() {

    }

    makeUnit = (unitName) => {
        let specs = unitName.split(' ');
        let unit = new Unit();

        specs.forEach((spec) => {
            unit[spec]();
        });
        
        return unit;
    }
}

module.exports = Main;