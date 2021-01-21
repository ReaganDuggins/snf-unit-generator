// key is name, value is name-value object
let traits = {
    acidSpit: {
        name: "Acid Spit",
        effect: "When you inflict casualties on an enemy unit, they must succeed a DC 13 Morale check or reduce their Defense by 1.",
        cost: 150
    },
    amphibious: {
        name: "Amphibious",
        effect: "Suffer no terrain penalties for fighting on land or in water.",
        cost: 50
    },
    bredForWar: {
        name: "Bred for War",
        effect: "Cannot be Diminished or have Disadvantage on a Morale check.",
        cost: 100
    },
    brutal: {
        name: "Brutal",
        effect: "Inflict 2 Casualties on successful Power checks.",
        cost: 200
    },
    burrower: {
        name: "Burrower",
        effect: "While you are not Engaged, you cannot be attacked, and non-burrowers cannot Engage you.",
        cost: 150
    },
    courageous: {
        name: "Courageous",
        effect: "Once per battle, succeed a Morale check you just failed.",
        cost: 50
    },
    eternal: {
        name: "Eternal",
        effect: "Cannot be Horrified, and always succeed Morale checks to attack scary enemies (undead, fiends, etc.).",
        cost: 50
    },
    
    frenzy: {
        name: "Frenzy",
        effect: "When you Diminish an enemy, immediately make another attack for free.",
        cost: 50
    },
    horrify: {
        name: "Horrify",
        effect: "Units you damage must succeed a DC 15 Morale check or become Exhausted.",
        cost: 200
    },
    martial: {
        name: "Martial",
        effect: "Inflict 1 additional Casualty when you succeed a Power check against a smaller unit.",
        cost: 100
    },
    mindless: {
        name: "Mindless",
        effect: "Cannot fail Morale checks",
        cost: 100
    },
    regenerate: {
        name: "Regenerate",
        effect: "Increment Casualty Die when you Refresh, unless you were damaged by Battle Magic last turn.",
        cost: 200
    },
    ravenous: {
        name: "Ravenous",
        effect: "If any enemy is Diminished, you can spend your turn eating corpses to increment your Casualtie Die.",
        cost: 50
    },
    rockHurler: {
        name: "Rock Hurler",
        effect: "Inflict 2 Casualties on successful ATTACK check, or 1d6 Casualties vs Fortifications.",
        cost: 250
    },
    savage: {
        name: "Savage",
        effect: "Advantage on first Attack check of the battle.",
        cost: 50
    },
    stalwart: {
        name: "Stalwart",
        effect: "Enemy Battle Magic has Disadvantage on Power checks against you.",
        cost: 50
    },
    twistingRoots: {
        name: "Twisting Roots",
        effect: "Use your action to Sap a Fortification. Siege units have Advantage against Sapped Fortifications.",
        cost: 200
    },
    undead: {
        name: "Undead",
        effect: "Green and Regular units must succeed a DC 13 Morale check to attack this unit for the first time each combat.",
        cost: 50
    },
    charge: {
        name: "Charge",
        effect: "If not Engaged, gain advantage on your Attack check. If it hits and the Power check succeeds, inflict 1 extra casualty and become Engaged. (DC 13 Morale check to Disengage).",
        cost: 0
    },
    diminished: {
        name: "Diminished",
        effect: "When you suffer casualties, make a DC 15 Morale check. On failure, suffer 1 additional casualty.",
        cost: 0
    },
    levy: {
        name: 'Levy Formation',
        effect: 'Can always be attacked by any other unit type and always Diminished.',
        cost: 0
    },
    infantry: {
        name: "Infantry Formation",
        effect: "Cannot be attacked while allied Levies are on the field.",
        cost: 0
    },
    archer: {
        name: "Archer Formation",
        effect: "Cannot be attacked while allied Infantry or Levies are on the field. Can attack any non-siege or non-fortification unit.",
        cost: 0
    },
    cavalry: {
        name: "Cavalry Formation",
        effect: "Cannot be attacked by Infantry or Levies. Archers have Disadvantage on Attack rolls against you. Gain Charge.",
        cost: 0
    },
    flying: {
        name: "Flying Formation",
        effect: "Can only be attacked by Archers and Flying units. Can attack any unit except Fortifications. Including Siege Engines.",
        cost: 0
    },
    siegeEngine: {
        name: "Siege Engine Formation",
        effect: "Can attack any ground unit (except cavalry), including Fortifications. Cannot be attacked while allied Levies, Infantry, Archers, or Cavalry are on the field.",
        cost: 0
    },
    fortification: {
        name: "Fortification",
        effect: "Can only be attacked by Siege Engines. Defending units gain a morale bonus equal to the fortification/stronghold level of this unit.",
        cost: 0
    }
};

module.exports = traits;