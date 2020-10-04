const Manager = require('../lib/Manager.js');

test('creates an manager employee object', () => {
    const manager = new Manager('Brad Cassity', 'bradley.cassity@gmail.com', 45);

    expect(intern.name).toBe('Brad Cassity');
    expect(intern.email).toBe('bradley.cassity@gmail.com');
    expect(intern.officeNumber).toEqual(expect.any(Number));
    expect(intern.id).toEqual(expect.any(Number));
});

// Test getRole() function
test("gets the manager's role", () => {
    const manager = new Manager('Brad Cassity', 'bradley.cassity@gmail.com', 45);

    expect(manager.getRole()).toBe('Manager');
});