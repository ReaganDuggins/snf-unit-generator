const Unit = require("../Race");

class Light extends Unit {
    constructor() {
        super();
        this.power += 1;
        this. defense += 1;
    }
}

module.exports = Light;