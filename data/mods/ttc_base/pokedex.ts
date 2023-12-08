import {stats} from '../../../server/chat-plugins/randombattles/winrates';
export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	palafin: {
		inherit: true,
		otherFormes: undefined,
		formeOrder: undefined,
		evos: ['Palafin-Hero'],
		baseForme: undefined,
		gen: 9,
	},
	palafinhero: {
		inherit: true,
		requiredAbility: undefined,
		battleOnly: undefined,
		prevo: 'Palafin',
		evoLevel: 40,
		baseSpecies: undefined,
		forme: undefined,
		gen: 9,
	},
	// #region Sawsbucks' Formes
	sawsbuck: {
		num: 586,
		name: "Sawsbuck",
		baseForme: "Spring",
		types: ["Normal", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95},
		abilities: {0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
		otherFormes: ['Sawsbuck-Summer', 'Sawsbuck-Winter', 'Sawsbuck-Autumn'],
		formeOrder: ['Sawsbuck', 'Sawsbuck-Summer', 'Sawsbuck-Winter', 'Sawsbuck-Autumn'],
	},
	sawsbucksummer: {
		num: 586,
		name: "Sawsbuck-Summer",
		baseSpecies: "Sawsbuck",
		forme: "Summer",
		types: ["Normal", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95},
		abilities: {0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
	sawsbuckwinter: {
		num: 586,
		name: "Sawsbuck-Winter",
		baseSpecies: "Sawsbuck",
		forme: "Winter",
		types: ["Normal", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95},
		abilities: {0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
	sawsbuckautumn: {
		num: 586,
		name: "Sawsbuck-Autumn",
		baseSpecies: "Sawsbuck",
		forme: "Autumn",
		types: ["Normal", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95},
		abilities: {0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
	// #endregion
};
