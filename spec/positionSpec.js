describe('Position', function() {
	it('should return the hash', function() {
		var position = new Position('2,4');

		expect(position.getHash()).toBe('2,4');
	});
});