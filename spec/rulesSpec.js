describe('Rules', function() {
	var rules;

	beforeEach(function() {
		rules = new Rules();
	});

	it('if alive and less than 4 neighbours then dies', function() {
		expect(rules.isCellAlive(true, 3)).toBe(false);
		expect(rules.isCellAlive(true, 2)).toBe(false);
		expect(rules.isCellAlive(true, 1)).toBe(false);
		expect(rules.isCellAlive(true, 0)).toBe(false);
	});

	it('if dead and less than 4 neighbours still dead', function() {
		expect(rules.isCellAlive(false, 3)).toBe(false);
		expect(rules.isCellAlive(false, 2)).toBe(false);
		expect(rules.isCellAlive(false, 1)).toBe(false);
		expect(rules.isCellAlive(false, 0)).toBe(false);
	});

	it('if alive and more than 6 neighbours then dies', function() {
		expect(rules.isCellAlive(true, 7)).toBe(false);
		expect(rules.isCellAlive(true, 8)).toBe(false);
	});

	it('if alive and 4, 5, or 6 neighbours then is alive', function() {
		expect(rules.isCellAlive(true, 4)).toBe(true);
		expect(rules.isCellAlive(true, 5)).toBe(true);
		expect(rules.isCellAlive(true, 6)).toBe(true);
	});

	it('if dead and 6 neighbours then is alive', function() {
		expect(rules.isCellAlive(false, 6)).toBe(true);
	});
});