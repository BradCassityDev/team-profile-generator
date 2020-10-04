// Include Employee parent
const Employee = require('./Employee');

// Engineer Class
class Engineer extends Employee {
    // Engineer constructor
    constructor(name = '', id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // get GitHub username
    getGithub() {
        return this.github;
    }

    // get employee role
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;