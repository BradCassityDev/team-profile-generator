const Intern = require('../lib/Intern.js');

test('creates an intern employee object', () => {
    const intern = new Intern('Brad Cassity', 'bradley.cassity@gmail.com', 'University of Utah');

    expect(intern.name).toBe('Brad Cassity');
    expect(intern.email).toBe('bradley.cassity@gmail.com');
    expect(intern.school).toBe('University of Utah');
    expect(intern.id).toEqual(expect.any(Number));
});

// Test getSchool() function
test('gets the interns school', () => {
    const intern = new Intern('Brad Cassity', 'bradley.cassity@gmail.com', 'University of Utah');

    expect(intern.getSchool()).toBe('University of Utah');
});

// Test getSchool() function
test('gets the interns school', () => {
    const intern = new Intern('Brad Cassity', 'bradley.cassity@gmail.com', 'University of Utah');

    expect(intern.getRole()).toBe('Intern');
});