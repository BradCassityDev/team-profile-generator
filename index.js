const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Array of Employees 
let employees = [];

// Add Manager
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the managers's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number?'
        }
    ])
    .then(responses => {
        
        return new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
    });
};

// Add Engineer
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?"
        }
    ])
    .then(responses => {
        employees.push(new Engineer(reponses.name, reponses.id, reponses.email, reponses.github));
    });
};

// Add Intern
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    ])
    .then(responses => {
        employees.push(new Intern(responses.name, responses.id, responses.email, responses.school));
    });
};

// Add Manager
const addEmployees = async employees => {
    // Determine type of employee
    if (employees.length === 0) {
        // Add Manager        
        addManager();
    } else {
        // Select a type of employee
        return inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: "What is this employee's role?",
            choices: [
                'Engineer',
                'Intern',
                'Finish building my team'
            ]
        })
        .then(response => {
            if (response.menu === "Engineer") {
                addEngineer();
                return addEmployees(employees);
            } else if (response.menu === "Intern") {
                addIntern();
                return addEmployees(employees);
            } else {
                // Finish adding employees
            }
        });
    }
    return employees;
}

addManager()
.then(manager => {
    employees.push(manager);
    addEmployees(employees);
})
.then(employeeList => {
    return employeeList;
})
.then(employeeList => {
    console.log(employeeList);
})
