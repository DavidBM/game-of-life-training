describe('Space', function() {
	var space;

	beforeEach(function() {
		space = new Space();
	});

	it('should add a cell', function() {
		var cell = new Cell(true);
		var position = new Position('2,3');

		space.addCell(cell, position);

		expect(space.getCell(position)).toBe(cell);
	});
});