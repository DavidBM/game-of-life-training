class Position {
	constructor(hash) {
		this.coordinates = hash.split(',').map(n => Number.parseInt(n));
	}

	getHash(){
		return this.coordinates.join(',');
	}

	getNeighboursHash(){
		var x = this.coordinates[0];
		var y = this.coordinates[1];

		return [
			[x-1, y-1].join(','),
			[x  , y-1].join(','),
			[x+1, y-1].join(','),

			[x+1, y].join(','),
			[x-1, y].join(','),

			[x-1, y+1].join(','),
			[x  , y+1].join(','),
			[x+1, y+1].join(','),
		]
	}
}