const Unit = require("../Race");

class Medium extends Unit {
    constructor() {
        super();
        this.power += 2;
        this. defense += 2;
    }
}

module.exports = Medium;