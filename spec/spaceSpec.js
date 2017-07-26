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

	it('should return the computable cells', function() {
		space.addCell(new Cell(true), new Position('2,3'));
		space.addCell(new Cell(true), new Position('2,4'));
		space.addCell(new Cell(false), new Position('3,3'));
		space.addCell(new Cell(true), new Position('13,34'));

		expect(space.getAlivePositions().length).toBe(3);
	});
});