let Unit = require('./units/Unit');

class Main {
    constructor() {

    }

    makeUnit = (unitName) => {
        let specs = unitName.split(' ');
        let unit = new Unit();

        specs.forEach((spec) => {
            try{
                unit[spec]();
            } catch(err) {
                console.log('empty or invalid unit spec: ', spec, unit[spec]);
            }
        });
        
        return unit;
    }
}

let main = new Main();

// let units = [
//     "hoardOf goblin green light levy",
//     "regimentOf ogre regular heavy infantry",
//     "regimentOf orc veteran medium archer",
//     "-------------------",
//     "squadOf hobgoblin elite medium siegeEngine",
//     "regimentOf elf elite light flying",
//     "squadOf human elite medium infantry",
//     "battalionOf ankheg green light levy",
//     "-------------------",
//     "squadOf warforged veteran heavy flying",
//     "regimentOf warforged veteran superHeavy infantry"
// ]

// let defenders = [
//     'battalionOf elf veteran heavy infantry',
//     'regimentOf human veteran medium archer',
//     'squadOf dwarf regular heavy siegeEngine',
//     'battalionOf human light green levy',
//     'squadOf elf elite medium flying',
//     'squadOf gnome light green archer'
// ]

// defenders.forEach((unitName) => {
//     if(unitName === "-------------------") {
//         console.log("\n\n");
//         return;
//     }
//     let unit = main.makeUnit(unitName);
//     console.log(unit.toString());
// })

console.log(main.makeUnit('regimentOf grippli light archer').toString())
console.log(main.makeUnit('regimentOf human levy').toString())

// console.log(main.makeUnit(units[0]).toString())

module.exports = Main;