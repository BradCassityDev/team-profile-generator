const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/manager');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');
