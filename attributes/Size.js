const Race = require("./Race");

class Size extends Race {
    constructor() {
        super();
    }

    squad = () => {
        this.size = 4;
        this.sizeCostModifier = 0.66;
        return this;
    }

    regiment = () => {
        this.size = 4;
        this.sizeCostModifier = 1.0;
        return this;
    }

    battalion = () => {
        this.size = 4;
        this.sizeCostModifier = 1.33;
        return this;
    }

    legion = () => {
        this.size = 4;
        this.sizeCostModifier = 1.66;
        return this;
    }

    hoard = () => {
        this.size = 4;
        this.sizeCostModifier = 2.0;
        return this;
    }
}

module.exports = Size;