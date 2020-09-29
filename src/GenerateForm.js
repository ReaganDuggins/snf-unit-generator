import React from 'react';
import {Component} from 'react';
import Main from './unit_generator/main';

const unitInfo = {
    size: [
      {display: "Squad", name: "squadOf"},
      {display: "Regiment", name: "regimentOf"},
      {display: "Battalion", name: "battalionOf"},
      {display: "Legion", name: "legionOf"},
      {display: "Hoard", name: "hoardOf"},
    ],
    race: [
      "Ankheg",
      "Dragonborn",
      "Dwarf",
      "Human",
      "Warforged",
      "Elf",
      "Gnoll",
      "Hobgoblin",
      "Bugbear",
      "Goblin",
      "Kobold",
      {display: "Winged Elf", name: "elfWinged"},
      "Ghoul",
      "Gnome",
      "Lizardfolk",
      "Orc",
      "Skeleton",
      "Zombie",
      "Ent",
      "Troll",
      "Ogre",
    ],
    experience: [
      "Green",
      "Regular",
      "Seasoned",
      "Veteran",
      "Elite",
      {display: "Super Elite", name: "superElite"}
    ],
    equipment: [
      "Light",
      "Medium",
      "Heavy",
      {display: "Super Heavy", name: "superHeavy"}
    ],
    unitType: [
      "Levy",
      "Infantry",
      "Cavalry",
      "Flying",
      "Archer",
      {display: "Siege Engine", name: "siegeEngine"}
    ],
  }
  
  
export default class GenerateForm extends Component {

    constructor(props) {
        super(props, null);
        let startSize = (unitInfo.size[0].display || unitInfo.size[0]).toLowerCase();
        let startRace = unitInfo.race[0].display || unitInfo.race[0];
        let startExperience = unitInfo.experience[0].display || unitInfo.experience[0];
        let startEquipment = unitInfo.equipment[0].display || unitInfo.equipment[0];
        let startUnitType = unitInfo.unitType[0].display || unitInfo.unitType[0];
        this.state = {
            size: startSize,
            race: startRace,
            experience: startExperience,
            equipment: startEquipment,
            unitType: startUnitType,
            currentUnit: [],
            main: new Main()
        }
    }

    capsFirstLetter = (capsMe) => {
        let capsed = capsMe[0].toUpperCase() + capsMe.substring(1);
        return capsed;
    }

    generateUnit = () => {
        let unitToMake = [
            this.state.size,
            this.state.race,
            this.state.experience,
            this.state.equipment,
            this.state.unitType,
        ];

        unitToMake = unitToMake.map((attribute, index) => {
            let split = attribute.split(' ');
            
            if(split.length > 1) {
                return split[0].toLowerCase() + this.capsFirstLetter(split[1]);
            }
            return attribute.toLowerCase();
        });

        unitToMake[0] += "Of";
        let makeMe = unitToMake.join(' ');

        let newUnit = this.state.main.makeUnit(makeMe).toString();

        newUnit = newUnit.split('\n');

        this.setState({
            currentUnit: newUnit
        });
    }
    
    options = (optionList) => {
      if(!optionList) {
        return <option></option>
      }
      return optionList.map((element) => {
        if(!element.display) {
          return (
            <option key={element + ""}>{element}</option>
          );
        }
        return (
          <option key={element.name + ""}>{element.display}</option>
        );
      });
    }

    sizeSelect = (event) => {
        let selection = event.target.value;
        this.setState({
            size: selection
        });
    }

    raceSelect = (event) => {
        let selection = event.target.value;
        this.setState({
            race: selection
        });
    }

    experienceSelect = (event) => {
        let selection = event.target.value;
        this.setState({
            experience: selection
        });
    }

    equipmentSelect = (event) => {
        let selection = event.target.value;
        this.setState({
            equipment: selection
        });
    }

    unitTypeSelect = (event) => {
        let selection = event.target.value;
        this.setState({
            unitType: selection
        });
    }

    showUnit = () => {
        if(this.state.currentUnit.length < 1) {
            return <p></p>
        }
        return this.state.currentUnit.map((line, index) => {
            return <span key={line + index}>{line}<br></br></span>;
        });
    }

    render() {
        return (
            <section className="App">
              <h1>Generate a Military Unit</h1>
              <section>
                <section id="size-holder">
                  <label htmlFor="size">Unit Size</label>
                  <select id="size" value={this.state.size} onChange={this.sizeSelect}>
                    {this.options(unitInfo.size)}
                  </select>
                </section>
        
                <section id="race-holder">
                  <label htmlFor="race">Unit Race</label>
                  <select id="race" value={this.state.race} onChange={this.raceSelect}>
                    {this.options(unitInfo.race)}
                  </select>
                </section>
        
                <section id="experience-holder">
                  <label htmlFor="experience">Unit Experience</label>
                  <select id="experience" value={this.state.experience} onChange={this.experienceSelect}>
                   {this.options(unitInfo.experience)}
                  </select>
                </section>
        
                <section id="equipment-holder">
                  <label htmlFor="equipment">Unit Equipment</label>
                  <select id="equipment" value={this.state.equipment} onChange={this.equipmentSelect}>
                    {this.options(unitInfo.equipment)}
                  </select>
                </section>
        
                <section id="unit-type-holder">
                  <label htmlFor="unit-type">Unit Type</label>
                  <select id="unit-type" value={this.state.unitType} onChange={this.unitTypeSelect}>
                    {this.options(unitInfo.unitType)}
                  </select>
                </section>
              </section>
        
              <section>
                <button id='generate-button' onClick={this.generateUnit}>Generate</button>
              </section>

              <section>
                  <h2>Your Unit</h2>
                  <section className="new-unit-holder">
                    {this.showUnit()}
                  </section>
              </section>
        
              <p>For full rules on military units, followers, strongholds and more, see </p>
            </section>
          );
    }
}