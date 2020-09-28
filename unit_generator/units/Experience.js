const Race = require("./Race");

class Experience extends Race {
    constructor() {
        super();
    }

    green = () => {
        this.name.experience= 'Green';
        return this;
    }

    regular = () => {
        this.attack += 1;
        this.toughness += 1;
        this.morale += 1;
        this.name.experience= 'Regular';
        return this;
    }

    seasoned = () => {
        this.attack += 1;
        this.toughness += 1;
        this.morale += 2;
        this.name.experience= 'Seasoned';
        return this;
    }

    veteran = () => {
        this.attack += 1;
        this.toughness += 1;
        this.morale += 3;
        this.name.experience= 'Veteran';
        return this;
    }

    elite = () => {
        this.attack += 2;
        this.toughness += 2;
        this.morale += 4;
        this.name.experience= 'Elite';
        return this;
    }

    superElite = () => {
        this.attack += 2;
        this.toughness += 2;
        this.morale += 5;
        this.name.experience= 'Super Elite';
        return this;
    }
}

module.exports = Experience;