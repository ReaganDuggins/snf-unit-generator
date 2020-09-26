const Race = require("./Race");

class Size {
    constructor() {
        this.attack = 0;
        this.defense = 10;
        this.power = 0;
        this.toughness = 10;
        this.morale = 0;
        this.size = 0;
        this.sizeCostModifier = 1;
        this.cost = 0;
        this.unitTypeModifier = 1;
        this.traits = [];
        this.name = {
            size: "",
            race: "",
            experience: "",
            equipment: "",
            unit: ""
        }
    }

    squadOf = () => {
        this.size = 4;
        this.sizeCostModifier = 0.66;
        this.name.size= 'Squad';
        return this;
    }

    regimentOf = () => {
        this.size = 4;
        this.sizeCostModifier = 1.0;
        this.name.size= 'Regiment';
        return this;
    }

    battalionOf = () => {
        this.size = 4;
        this.sizeCostModifier = 1.33;
        this.name.size= 'Battalion';
        return this;
    }

    legionOf = () => {
        this.size = 4;
        this.sizeCostModifier = 1.66;
        this.name.size= 'Legion';
        return this;
    }

    hoardOf = () => {
        this.size = 4;
        this.sizeCostModifier = 2.0;
        this.name.size= 'Hoard';
        return this;
    }
}

module.exports = Size;