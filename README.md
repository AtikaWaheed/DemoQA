# Get Started With DemoQA Site.

End-to-end tests for ToolSQA Login Functions and Add to collection flow,

# Pre reqs:

1- Install NodeJS and NPM

# Running Tests:

1- Go to the root directory of the project.

2- Let’s start by creating the package.json

        npm init -y         // This will create a package.json file

3- Install Node.js packages

       $ npm install

4- Install Cypress

      npm install cypress

5- In order to execute all tests, run command

For Login FLow: npx cypress run --spec "cypress/integration/tests/loginPageTests.js"
For AddToCollection FLow: npx cypress run --spec "cypress/integration/tests/goToStoreTests.js"
