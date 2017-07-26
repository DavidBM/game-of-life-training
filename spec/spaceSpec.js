describe('Space', function() {
	it('should return a cell array', function() {
		var space = new Space();

		expect(Array.isArray(space.getPositions())).toBe(true);
	});
});