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
		return Object.keys(this.positions).map(hash => this.positions[hash]);
	}
}