const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');

// Array of Employees 
let employees = [];

// Add Manager
const addManager = () => {
    console.log(`
    ----------------------------
             Add Manager
    ----------------------------
    `)
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
        // create the manager object and add to the employees array
        const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
        employees.push(manager);
        return;
    });
};

// Add Engineer
const addEngineer = () => {
    console.log(`
    ----------------------------
            Add Engineer
    ----------------------------
    `)
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
        // return the Engineer object
        return new Engineer(responses.name, responses.id, responses.email, responses.github);
    });
};

// Add Intern
const addIntern = () => {
    console.log(`
    ----------------------------
             Add Intern
    ----------------------------
    `)

    // return the result of the inquirer prompt
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
        // return the Intern object
        return new Intern(responses.name, responses.id, responses.email, responses.school); 
    });
};

// Add Manager
const addEmployees = employeeList => {
    console.log(`
    ----------------------------
         Add New Employee
    ----------------------------
    `)
    // Select a type of employee
    return inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: "What type of employee would you like to add?",
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
    })
    .then(result => {
        if (result) {
            return addEmployees(employeeList);
        } else {
            return employeeList;
        }
    });
}

// Initiate call to addManager function
addManager()
.then(async () => {
    // Add Employees
    await addEmployees(employees);
    return (generatePage(employees));
})
.then(html => {
    // Generate HTML Document
    return writeFile(html);
})
.then(response => {
    console.log(response);
    return copyFile();
})
.then(response => {
    // inform user that the document is ready
    console.log('Your team profile webpage has been generated!')
})
.catch(err => {
    // log any errors
    console.log(err);
});
