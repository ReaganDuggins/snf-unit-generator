const Unit = require("../Race");

class Experience extends Unit {
    constructor() {
        super();
    }

    green = () => {
        return this;
    }

    regular = () => {
        this.attack += 1;
        this.toughness += 1;
        this.morale += 1;
        return this;
    }

    seasoned = () => {
        this.attack += 1;
        this.toughness += 1;
        this.morale += 2;
        return this;
    }

    veteran = () => {
        this.attack += 1;
        this.toughness += 1;
        this.morale += 3;
        return this;
    }

    elite = () => {
        this.attack += 2;
        this.toughness += 2;
        this.morale += 4;
        return this;
    }

    superElite = () => {
        this.attack += 2;
        this.toughness += 2;
        this.morale += 5;
        return this;
    }
}

module.exports = Experience;