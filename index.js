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
        return new Engineer(responses.name, responses.id, responses.email, responses.github);
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
        return new Intern(responses.name, responses.id, responses.email, responses.school); 
    });
};

// Add Manager
const addEmployees = employeeList => {
    
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
    .then(async response => {
        if (response.menu === "Engineer") {
            let employee = await addEngineer();
            employees.push(employee);

            return true;
        } else if (response.menu === "Intern") {
            let employee = await addIntern();
            employees.push(employee);

            return true;
        } else {
            return false;
        }
        // if (response.menu === "Engineer") {
        //     new Promise((resolve, reject) => {
        //         addEngineer();
        //     })
        //     .then(obj => {
        //         resolve();
        //     });

        //     return true;
        // } else if (response.menu === "Intern") {
        //     employees.push(addIntern());
        //     return true;
        // } else {
        //     // Finish adding employees
        //     return false;
        // }
    })
    .then(result => {
        if (result) {
            return addEmployees(employeeList);
        } else {
            return employeeList;
        }
    });
}

addManager()
.then(async manager => {
    employees.push(manager);
    await addEmployees(employees);
    return employees;
})
.then(employeeList => {
    return employeeList;
})
.then(employeeList => {
    console.log(employees);
})
