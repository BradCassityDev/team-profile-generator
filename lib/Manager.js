// Include Employee parent
const Employee = require('./Employee');

// Manager Class
class Manager extends Employee {
    // Manager constructor
    constructor(name = '', id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // get Manager's office number
    getOffice() {
        return this.officeNumber;
    }

    // get employee role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;