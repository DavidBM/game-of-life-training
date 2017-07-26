describe('Position', function() {
	it('should return the hash', function() {
		var position = new Position(2, 4);

		expect(position.getHash()).toBe('2,4');
	});

	it('should return the cell', function() {
		var position = new Position(2, 4);

		var cell = new Cell(false);

		position.setCell(cell);
		expect(position.getCell()).toBe(cell);
	});

	it('should return a death cell if not cell is provided', function() {
		var position = new Position(2, 4);

		expect(position.getCell().getState()).toBe(false);
	});
});	