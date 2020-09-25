const Unit = require("../Race");

class Medium extends Unit {
    constructor() {
        super();
        this.power += 4;
        this. defense += 4;
    }
}

module.exports = Medium;