const Engineer = require('../lib/Engineer.js');

// Create an engineer employee object
test('creates an engineer employee object', () => {
    const engineer = new Engineer('Brad Cassity', 10, 'bradley.cassity@gmail.com', 'BradCassityDev');

    expect(engineer.name).toBe('Brad Cassity');
    expect(engineer.email).toBe('bradley.cassity@gmail.com');
    expect(engineer.github).toBe('BradCassityDev');
    expect(engineer.id).toEqual(10);
});

// Git Github Username
test("gets engineer's github username", () => {
    const engineer = new Engineer('Brad Cassity', 10, 'bradley.cassity@gmail.com', 'BradCassityDev');

    expect(engineer.getGithub()).toBe('BradCassityDev');
});

// Get Role - Engineer
test("get engineer's role", () => {
    const engineer = new Engineer('Brad Cassity', 10, 'bradley.cassity@gmail.com', 'BradCassityDev');

    expect(engineer.getRole()).toBe('Engineer');
});