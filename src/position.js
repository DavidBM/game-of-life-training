class Position {
	constructor(hash) {
		this.coordinates = hash.split(',').map(n => Number.parseInt(n));
	}

	getHash(){
		return this.coordinates.join(',');
	}

	static fromCoordinates(coordinates) {
		return new Position(coordinates.join(','));
	}

	getNeighboursHash(){
		var positions = this.calculateNeighbours(this.coordinates, 0);

		return positions
		.map(coord => Position.fromCoordinates(coord).getHash())
		//removes the actual position
		.filter(coord => coord !== this.getHash());
	}

	calculateNeighbours(coordinates, index){
		var result = [];

		if(index >= coordinates.length - 1){
			var coord1 = this.cloneCoordinates(coordinates);
			coord1[index] -= 1;
			result.push(coord1);

			result.push(this.cloneCoordinates(coordinates));

			var coord2 = this.cloneCoordinates(coordinates);
			coord2[index] += 1;
			result.push(coord2);

			return result;
		}

		var coordPlus = this.cloneCoordinates(coordinates);
		coordPlus[index] += 1;
		var result1 = this.calculateNeighbours(coordPlus, index + 1);

		var coordLess = this.cloneCoordinates(coordinates);
		coordLess[index] -= 1;
		var result2 = this.calculateNeighbours(coordLess, index + 1);

		var coord = this.cloneCoordinates(coordinates);
		var result3 = this.calculateNeighbours(coord, index + 1);

		return result.concat(result1).concat(result2).concat(result3);
	}

	cloneCoordinates(coordinates){
		return coordinates.slice(0);
	}
}