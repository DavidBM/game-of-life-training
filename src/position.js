class Position {
	constructor(hash) {
		this.coordinates = hash.split(',');
	}

	getHash(){
		return this.coordinates.join(',');
	}
}