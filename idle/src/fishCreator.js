import React from 'react';

//var instance = null;

class FishCreator {

	constructor() {
		console.log("Fish Creator initialized");
		this.areas = [
			"Little Pond",
			"Pacific Wonder Sea",
			"The Abyss"
		]
		this.fishes = [
			[
				{
					index: 0,
					name: "Angel Fish",
					type: "fish",
					health: 10,
					maxHealth: 10,
					gold: 5
				},
				{	
					index: 1,
					name: "Gold Fish",
					type: "fish",
					health: 20,
					maxHealth: 20,
					gold: 10
				},
				{
					index: 2,
					name: "Black Molly",
					type: "fish",
					health: 60,
					maxHealth: 60,
					gold: 20
				},
				{
					index: 3,
					name: "Black Skirt Tetra",
					type: "fish",
					health: 70,
					maxHealth: 70,
					gold: 40
				},
				{
					index: 4,
					name: "Kuhli Loach",
					type: "fish",
					health: 50,
					maxHealth: 50,
					gold: 10
				},
				{
					index: 5,
					name: "Betta",
					type: "fish",
					health: 40,
					maxHealth: 40,
					gold: 15
				}
			],
			[
				{
					index: 6,
					name: "Electric Eel",
					type: "fish",
					health: 150,
					maxHealth: 150,
					gold: 110
				},
				{
					index: 7,
					name: "Shark",
					type: "fish",
					health: 200,
					maxHealth: 200,
					gold: 180
				},
				{
					index: 8,
					name: "Killer Whale",
					type: "fish",
					health: 250,
					maxHealth: 250,
					gold: 220
				}
			],
			[
				{
					index: 9,
					name: "Poseidon, God of the Sea",
					type: "fish",
					health: 10000,
					maxHealth: 10000,
					gold: 80000
				}
			]
		];
		this.fishGoldTable = {};
		this.initializeFishGoldTable();
	}


	initializeFishGoldTable() {
		this.fishes.map((tier) => {
			tier.map((fish) => {
				this.fishGoldTable[fish.name] = fish.gold;
			});
		});
		console.log(this.fishGoldTable);
	}

	getFish(tier) {
		tier -= 1;
		let fish = {...this.fishes[tier][Math.floor(Math.random()*this.fishes[tier].length)]};
		return fish;
	}

	getFishGold(fishName) {
		return this.fishGoldTable[fishName];
	}

	getArea(tier) {
		tier -=1;
		return this.areas[tier];
	}

	getAreas() {
		return this.areas;
	}

	getAreasDropdownInfo(maxTier) {
		let options = [
			{ value: 1, label: this.areas[0] },
			{ value: 2, label: this.areas[1] },
			{ value: 3, label: this.areas[2] },			
		];
		return options.slice(0, maxTier);
	}
}

const instance = new FishCreator();
Object.freeze(instance);

export default instance;