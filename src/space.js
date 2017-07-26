class Space  {
	constructor(){
		this.positions = {};
	}

	addCell(cell, position){
		if(cell.getState())
			this.positions[position.getHash()] = cell;
	}

	getCell(position){
		var cell = this.positions[position.getHash()];
		if(!cell)
			return new Cell(false);

		return this.positions[position.getHash()];
	}

	getAlivePositions(){
		return Object.keys(this.positions).map(hash => new Position(hash));
	}

	getComputablePosition(){
		var allHashes = [];

		var alive = this.getAlivePositions();

		alive
		.map(pos => pos.getNeighboursHash())
		.forEach((neighboursHash) => neighboursHash.forEach(neigh => {
			allHashes.push(neigh);
		}));

		allHashes = allHashes.concat(alive.map(pos => pos.getHash()))

		return allHashes.filter((hash, index) => allHashes.indexOf(hash) === index);
	}
}