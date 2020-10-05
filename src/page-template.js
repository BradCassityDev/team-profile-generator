// create employee card
const createEmployeeCard = employee => {
    let extraType, extraValue = '';
    if (employee.getRole() === "Manager") {
        extraType = "Office Number";
        extraValue = employee.getOffice();
    } else if (employee.getRole() === "Engineer") {
        extraType = "Github";
        extraValue = `<a href='https://github.com/${employee.getGithub()}' target="_blank">${employee.getGithub()}</a>`;
    } else if (employee.getRole() === "Intern") {
        extraType = "School";
        extraValue = employee.getSchool();
    }

    let card = `
    <div class='col-sm-12 col-md-6 col-lg-4 bottom-margin'>
        <div class='card shadow bg-white rounded h-100'>
            <div class='card-header'>
                <h3>${employee.getName()}</h3>
                <h4>${employee.getRole()}</h4>
            </div>
            <div class='card-body'>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>ID: ${employee.getId()}</li>
                    <li class='list-group-item'>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class='list-group-item'>${extraType}: ${extraValue}</li>
                </ul>
            </div>
        </div>
    </div>
    `;



    return card;
}


// Generate Page
const makePage = employeeCards => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            
            <title>My Team</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <section>
                <div class='row'>
                    ${employeeCards}
                </div>
            </section>
        </body>
        </html>
    `;
}

//
const generatePage = employees => {
    
    let employeeCards = '';

    employees.forEach(employee => {
        employeeCards = employeeCards + createEmployeeCard(employee);
    });
    
    return makePage(employeeCards);
}

module.exports = generatePage;