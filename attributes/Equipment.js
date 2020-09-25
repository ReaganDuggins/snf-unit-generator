const Experience = require("../attributes/Experience");

class Equipment extends Experience {
    constructor() {
        super();
    }

    light = () => {
        this.power += 1;
        this.defense += 1;
        return this;
    }

    medium = () => {
        this.power += 2;
        this.defense += 2;
        return this;
    }

    heavy = () => {
        this.power += 4;
        this.defense += 4;
        return this;
    }

    superHeavy = () => {
        this.power += 6;
        this.defense += 6;
        return this;
    }
}

module.exports = Equipment;