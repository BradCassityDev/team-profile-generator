// Include Employee parent
const Employee = require('./Employee');

// Intern Class
class Intern extends Employee {
    // Intern constructor
    constructor(name = '', id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // get Intern's school
    getSchool() {
        return this.school;
    }

    // get employee role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;