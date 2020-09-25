const Unit = require("../Race");

class Medium extends Unit {
    constructor() {
        super();
        this.power += 6;
        this. defense += 6;
    }
}

module.exports = Medium;