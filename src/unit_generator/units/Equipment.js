const Experience = require("../units/Experience");

class Equipment extends Experience {
    constructor() {
        super();
    }

    light = () => {
        this.power += 1;
        this.defense += 1;
        this.name.equipment = 'Light';
        return this;
    }

    medium = () => {
        this.power += 2;
        this.defense += 2;
        this.name.equipment = 'Medium';
        return this;
    }

    heavy = () => {
        this.power += 4;
        this.defense += 4;
        this.name.equipment = 'Heavy';
        return this;
    }

    superHeavy = () => {
        this.power += 6;
        this.defense += 6;
        this.name.equipment = 'Super Heavy';
        return this;
    }
}

module.exports = Equipment;