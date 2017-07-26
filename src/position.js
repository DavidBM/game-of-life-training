class Position {
	constructor(x, y) {
		this.coordinates = [x, y];
		this.cell = new Cell(false);
	}

	getHash(){
		return this.coordinates.join(',');
	}

	setCell(cell){
		this.cell = cell;
	}

	getCell(){
		return this.cell;
	}
}