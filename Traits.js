// key is name, value is name-value object
let traits = {
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
};

module.exports = traits;