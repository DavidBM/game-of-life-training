describe('Position', function() {
	it('should return the hash', function() {
		var position = new Position('2,4');

		expect(position.getHash()).toBe('2,4');
	});

	it('should return the neighbours hashes', function() {
		var position = new Position('2,4');

		var neighbours = ['1,3', '1,4', '1,5', '2,3', '2,5', '3,3', '3,4', '3,5'];

		var neighboursHashes = position.getNeighboursHash();

		var same = neighbours.filter(neig => neighboursHashes.includes(neig));

		expect(neighboursHashes.length).toBe(neighbours.length);
		expect(same.length).toBe(neighbours.length);
	});
});