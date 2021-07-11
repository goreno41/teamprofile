const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// const Team = require("./lib/team");


// let overallTeam = new Team();




//..team manager’s name, employee ID, email address, and office number

const teamManager = () => {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "employeeName"
      },
      {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "employeeId"
      },
      {
        type: "input",
        message: "What is the team manager's email address?",
        name: "employeeEmail"
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber"
      }
    

    ])
    .then(({ employeeName, employeeID, employeeEmail, officeNumber}) => {
        const addManager = new Manager(employeeName, employeeID, employeeEmail, officeNumber)
        // overallTeam.addToHtml(addManager)
        buildTeam();

    })


        
} 

const addEngineer = () => {

    inquirer.prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the engineer's employee ID?",
          name: "employeeId"
        },
        {
          type: "input",
          message: "What is the engineer's email address?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the engineer's GitHub username?",
          name: "gitHub"
        }
      
  
      ])

      .then(({ employeeName, employeeID, employeeEmail, gitHub}) => {
        const addEngineer = new Engineer(employeeName, employeeID, employeeEmail, gitHub)
        // overallTeam.addToHtml(addEngineer);
        buildTeam();

      
  })}



const addIntern = () => {

    inquirer.prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the intern's employee ID?",
          name: "employeeId"
        },
        {
          type: "input",
          message: "What is the intern's email address?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the intern's school?",
          name: "school"
        }
      
  
      ])

      .then(({ employeeName, employeeID, employeeEmail, school}) => {
        const addIntern = new Intern(employeeName, employeeID, employeeEmail, school)
        // overallTeam.addToHtml(addIntern);
        buildTeam();

      
  })}

const buildTeam = () => {
    inquirer.prompt([
        {
          type: "list",
          message: "Choose an option:",
          choices: [ "Add an engineer", "Add an intern", "Finish building my team"],
          name: "initialChoice"
        }
      ]).then( resp => {
        switch( resp.initialChoice ){
          case "Add an engineer":
            addEngineer();
            break;
    
          case "Add an intern":
            addIntern();
            break;
    
          case "Finish building my team":
            finishTeam();
            break;
    
          default:
            break;
        }
      })
}

teamManager();