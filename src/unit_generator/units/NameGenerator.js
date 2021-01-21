let commonAdjectives = [
    'Bloody',
    'Violent',
    'Surprising',
    'Savvy',
    'Victorious',
    'Grim',
    'Grim Faced',
    'Lucky',
    'Favored',
    'Valiant',
    'Red',
    'Green',
    'Blue',
    'Yellow',
    'Purple',
    'Black',
    'White',
    'Grey',
    'Gray',
    'Brass',
    'Copper',
    'Bronze',
    'Iron',
    'Steel',
    'Stone',
    'Stony',
    'Stone Faced',
    'Hollow',
    'Tough',
    'Vigilant',
    'Courageous',
    'Vicious',
    'Helping',
    'Helpful',
    'Lovely',
    'Wary',
    'Weary',
    'Longsuffering',
    'Jaded',
    'Enduring',
    'Relentless',
    'Stabbing',
    'Shanking',
    'Joking',
    'Teasing',
    'Silly',
    'Bruising',
    'Bludgeoning',
    'Smashing',
    'Crushing',
    'Breaking',
    'Pillaging',
    'Feathered',
    'War',
    'Battle',
    'Warring',
    'Skirmishing',
    'Harrassing',
];

let prestegiousAdjectives = [
    'Gold',
    'Golden',
    'Silver',
    'Titanium',
    'Adamantine',
    'Platinum',
    'Mithril',
    'Granite',
    'Immortal',
    'Dead',
    'Deathly',
    'Hallowed',
    'Holy',
    'Glorious',
    'Ever Victorious',
    'Indomitable',
    'Implacable',
    'Ever Vigilant',
    'Maneating',
    'Exsanguinating',
    'Sanguine',
    'Berserking',
    'Flaying',
    'Enlightened',
    'Farseeing',
    'Shattering',
    'Reaping',
];

let commonNouns = [
    'Crew',
    'Squad',
    'Regiment',
    'Cohort',
    'Band',
    'Hand',
    'Foot',
    'Head',
    'Eye',
    'Ear',
    'Tooth',
    'Teeth',
    'Voice',
    'Boot',
    'Glove',
    'Glaive',
    'Sword',
    'Shield',
    'Helm',
    'Beret',
    'Trousers',
    'Managerie',
    'Storm',
    'Wave',
    'Fist',
    'Slayers',
    'Flayers',
    'Crushers',
    'Smashers',
    'Breakers',
    'Berserkers',
    'Raiders',
    'Vikingr',
    'Defenders',
    'Protectors',
    'Warriors',
    'Fighters',
    'Soldiers',
    'Skirmishers',
    'Boars',
    'Panthers',
    'Leopards',
    'Snakes',
    'Rabbits',
    'Cammels',
    'Horses',
    'Dogs',
];

let prestegiousNouns = [
    'Annihilators',
    'Obliterators',
    'Exsanguinators',
    'Hoard',
    'Legion',
    'Battalion',
    'Century',
    'Breath',
    'Immortals',
    'Elites',
    'Shieldbearers',
    'Shieldmaidens',
    'Reapers',
    'Templari',
    'Bears',
    'Wolves',
    'Tigers',
    'Lions',
    'Jaguars',
    'Vipers',
    'Anacondas',
    'Cobras',
    'Rinos',
    'Stallions',
    'Knights',
    'Lords',
    'Destroyers',
    'Destruction',
]

let adjectives = {'common': commonAdjectives, 'prestigious': prestegiousAdjectives};
let nouns = {'common': commonNouns, 'prestigious': prestegiousNouns};

let randomName = (adjPrestige, nounPrestige) => {
    if(adjPrestige === undefined) {
        adjPrestige = randomPrestige();
    }
    if(nounPrestige === undefined) {
        nounPrestige = randomPrestige();
    }
    let adjs = adjectives[adjPrestige];
    let nous = nouns[nounPrestige];

    let adjective = adjs[Math.floor(Math.random() * adjs.length)];
    let noun = nous[Math.floor(Math.random() * nous.length)];

    return `The ${adjective} ${noun}`;
}

let randomPrestige = () => {
    if(Math.random() * 100 < 70) {
        return 'common';
    }
    return 'prestigious';
}

let commonName = () => {
    return randomName('common', 'common');
}

let respectedName = () => {
    return randomName('common', 'prestigious');
}

let prestigiousName = () => {
    return randomName('prestigious', 'common');
}

let legendaryName = () => {
    return randomName('prestigious', 'prestigious');
}

module.exports = {
    commonName, respectedName, prestigiousName, legendaryName
};

// console.log('Common: ', commonName());
// console.log('Respected: ', respectedName());
// console.log('Prestigious: ', prestigiousName());
// console.log('Legendary: ', legendaryName());