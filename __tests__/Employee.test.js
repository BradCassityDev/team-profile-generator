const Employee = require('../lib/Employee.js');

jest.mock('../lib/Engineer');
jest.mock('../lib/Intern');
jest.mock('../lib/Manager');

// Create an employee object
test('creates an employee object', () => {
    const employee = new Employee('Brad Cassity', 'bradley.cassity@gmail.com');

    expect(employee.name).toBe('Brad Cassity');
    expect(employee.email).toBe('bradley.cassity@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
});

// Get employee name
test("get the employee's name", () => {
    const employee = new Employee('Brad Cassity', 'bradley.cassity@gmail.com');

    expect(employee.getName()).toBe('Brad Cassity');
});

// Get employee id
test("get the employee's id", () => {
    const employee = new Employee('Brad Cassity', 'bradley.cassity@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Get employee email
test("get the employee's id", () => {
    const employee = new Employee('Brad Cassity', 'bradley.cassity@gmail.com');

    expect(employee.getEmail()).toBe('bradley.cassity@gmail.com');
});

// Get employee role
test("get the employee's role", () => {
    const employee = new Employee('Brad Cassity', 'bradley.cassity@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});