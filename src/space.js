class Space  {
	constructor(){
		this.positions = {};
	}

	addCell(cell, position){
		this.positions[position.getHash()] = cell;
	}

	getCell(position){
		return this.positions[position.getHash()];
	}
}