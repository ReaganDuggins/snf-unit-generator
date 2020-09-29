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

    sizeDice = {
        squad: "1d4",
        regiment: '1d6',
        battalion: '1d8',
        legion: '1d10',
        hoard: '1d12'
    }

    toString = () => {
        let traitStrings = this.traits.map((current) => {
            if(!current) {return ""}
            return "\n--------------------\n" +
            current.name.toUpperCase() + " |" +
            "\n--------------------\n" +
            current.effect;
        });

        let asString =  "\n__________________________________________________________________\n" +
                        `${this.name.size} of ${this.name.race} ${this.name.experience} ${this.name.equipment} ${this.name.unit}` +
                        "\n" +
                        `\nAttack: ${this.attack}        Defense:   ${this.defense}` +
                        `\nPower:  ${this.power}        Toughness: ${this.toughness}` +
                        `\nMorale: ${this.morale}` +
                        `\nSize: ${this.sizeDice[this.name.size.toLowerCase()]}` +
                        "\n\n" + traitStrings.join('\n\n') +
                        "\n__________________________________________________________________";
        return asString;
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