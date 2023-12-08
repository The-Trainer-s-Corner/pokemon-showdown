import { ModdedDex } from '../../sim/dex';
import { Abilities } from '../../data/abilities';
export class ModifyPokemon {
	private _name: string;
	private _dex: ModdedDex;
	constructor(name: string, dex: ModdedDex) {
		this._name = name.includes(" ") ? name.toLowerCase().replace(/ +g/, '') : name.toLowerCase();
		this._dex = dex;
	}

	public changeType(types: string[]) {
		this._dex.modData('Pokedex', this._name).types = types;
		return this;
	}
	public changeAbilities(abilities: {
		0?: string,
		1?: string,
		H?: string,
	}) {
		if(abilities['0'])
			this._dex.modData('Pokedex', this._name).abilities['0'] = abilities['0'];
		if(abilities['1'])
			this._dex.modData('Pokedex', this._name).abilities['1'] = abilities['1'];
		if(abilities['H'])
			this._dex.modData('Pokedex', this._name).abilities['H'] = abilities['H'];

		return this;
	}
	public changeBaseStats(stats: {
		hp?: number;
		atk?: number;
		def?: number;
		spa?: number;
		spd?: number;
		spe?: number;
	}) {
		if(stats['hp'])
			this._dex.modData('Pokedex', this._name).baseStats['hp'] = stats['hp'];
		if(stats['atk'])
			this._dex.modData('Pokedex', this._name).baseStats['atk'] = stats['atk'];
		if(stats['def'])
			this._dex.modData('Pokedex', this._name).baseStats['def'] = stats['def'];
		if(stats['spa'])
			this._dex.modData('Pokedex', this._name).baseStats['spa'] = stats['spa'];
		if(stats['spd'])
			this._dex.modData('Pokedex', this._name).baseStats['spd'] = stats['spd'];
		if(stats['spe'])
			this._dex.modData('Pokedex', this._name).baseStats['spe'] = stats['spe'];

		return this;
	}

	public modifyLearnset(learnset: {
		add ?: string[],
		remove ?: string[],
	}) {
		if(learnset.add) {
			for(let move of learnset.add) {
				this._dex.modData('Learnsets', this._name).learnset[move] = [`9M`];
			}
		}
		if(learnset.remove) {
			for(let move of learnset.remove) {
				delete this._dex.modData('Learnsets', this._name).learnset[move];
			}
		}
		return this;
	}
}