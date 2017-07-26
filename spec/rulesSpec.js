describe('Rules', function() {
	var rules;

	beforeEach(function() {
		rules = new Rules();
	});

	it('if alive and has 3 neighbours or less alive then dies', function() {
		expect(rules.isCellAlive(true, 4)).toBe(true);
	});
});