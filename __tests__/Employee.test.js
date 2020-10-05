const Employee = require('../lib/Employee.js');

// Create an employee object
test('creates an employee object', () => {
    const employee = new Employee('Brad Cassity', 10,'bradley.cassity@gmail.com');

    expect(employee.name).toBe('Brad Cassity');
    expect(employee.email).toBe('bradley.cassity@gmail.com');
    expect(employee.id).toEqual(10);
});

// Get employee name
test("get the employee's name", () => {
    const employee = new Employee('Brad Cassity', 10,'bradley.cassity@gmail.com');

    expect(employee.getName()).toBe('Brad Cassity');
});

// Get employee id
test("get the employee's id", () => {
    const employee = new Employee('Brad Cassity', 10, 'bradley.cassity@gmail.com');

    expect(employee.getId()).toEqual(10);
});

// Get employee email
test("get the employee's id", () => {
    const employee = new Employee('Brad Cassity', 10, 'bradley.cassity@gmail.com');

    expect(employee.getEmail()).toBe('bradley.cassity@gmail.com');
});

// Get employee role
test("get the employee's role", () => {
    const employee = new Employee('Brad Cassity', 10, 'bradley.cassity@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});