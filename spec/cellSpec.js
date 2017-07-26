describe('Cell', function() {
	it('should have state', function() {
		var cell = new Cell(true);

		expect(cell.getState()).toBe(true);
	});
});