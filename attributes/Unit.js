const Equipment = require("./Equipment");

class Unit extends Equipment {
    constructor() {
        super();
    }

    levy = () => {
        this.morale += -1;
        return this;
    }

    infantry = () => {
        this.defense += 1;
        this.toughness += 1;
        return this;
    }

    cavalry = () => {
        this.attack += 1;
        this.power += 1;
        this.morale += 2;
        return this;
    }

    flying = () => {
        this.morale += 3;
        return this;
    }

    archer = () => {
        this.power += 1;
        this.morale += 1;
        return this;
    }

    siegeEngine = () => {
        this.attack += 1;
        this.power += 1;
        this.toughness += 1;
        return this;
    }
}

module.exports = Unit;