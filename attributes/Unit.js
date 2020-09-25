const Equipment = require("./Equipment");
const Traits = require('../Traits');

class Unit extends Equipment {
    constructor() {
        super();
    }

    levy = () => {
        this.morale += -1;
        this.unitTypeModifier = 0.75;
        this.addTrait(Traits.levy);
        return this;
    }

    infantry = () => {
        this.defense += 1;
        this.toughness += 1;
        this.unitTypeModifier = 1;
        this.addTrait(Traits.infantry);
        return this;
    }

    cavalry = () => {
        this.attack += 1;
        this.power += 1;
        this.morale += 2;
        this.unitTypeModifier = 1.5;
        this.addTrait(Traits.cavalry);
        return this;
    }

    flying = () => {
        this.morale += 3;
        this.unitTypeModifier = 2;
        this.addTrait(Traits.flying);
        return this;
    }

    archer = () => {
        this.power += 1;
        this.morale += 1;
        this.unitTypeModifier = 1.75;
        this.addTrait(Traits.archer);
        return this;
    }

    siegeEngine = () => {
        this.attack += 1;
        this.power += 1;
        this.toughness += 1;
        this.unitTypeModifier = 1.5;
        this.addTrait(Traits.siegeEngine);
        return this;
    }

    countCost = () => {
        let bonuses = this.attack + this.power + this.defense - 10 + this.toughness - 10 + (this.morale * 2);
        let withMultiplier = bonuses * this.unitTypeModifier * 10;
        // size too
        // add trait costs
        // add 30
    }
}

module.exports = Unit;