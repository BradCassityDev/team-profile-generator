const Manager = require('../lib/Manager.js');

test('creates an manager employee object', () => {
    const manager = new Manager('Brad Cassity', 10, 'bradley.cassity@gmail.com', 45);

    expect(manager.name).toBe('Brad Cassity');
    expect(manager.email).toBe('bradley.cassity@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.id).toEqual(10);
});

// Test getRole() function
test("gets the manager's role", () => {
    const manager = new Manager('Brad Cassity', 10, 'bradley.cassity@gmail.com', 45);

    expect(manager.getRole()).toBe('Manager');
});