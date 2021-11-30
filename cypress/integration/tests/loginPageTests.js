/// <reference types="Cypress" />

import { LoginPage } from "../pages/loginPage.js";

describe("Validate Login Functionality", () => {
  const loginDemoPage = new LoginPage();

  beforeEach(function () {
    cy.fixture("testdata").then((testdata) => {
      this.testdata = testdata;
    });
  });

  it("validate user is loggedIn", function () {
    cy.login(this.testdata);
  });

  it("validate empty username field", function () {
    cy.visit(this.testdata.baseUrl);
    loginDemoPage.getPasswordField().type(this.testdata.password);
    loginDemoPage.getLoginButton().click();
    loginDemoPage.getUsernameInvalidClass().should("be.visible");
  });

  it("validate empty password field", function () {
    cy.visit(this.testdata.baseUrl);
    loginDemoPage.getUserNameField().type(this.testdata.username);
    loginDemoPage.getLoginButton().click();
    loginDemoPage.getPasswordInvalidClass().should("be.visible");
  });

  it("validate error message for incorrect username", function () {
    cy.visit(this.testdata.baseUrl);
    loginDemoPage.getUserNameField().type(this.testdata.wrongUserName);
    loginDemoPage.getPasswordField().type(this.testdata.password);
    loginDemoPage.getLoginButton().click();
    loginDemoPage.getErrorMessageForInvalidUserAndPassword().then(($input) => {
      const errMessage = $input.text();
      expect(errMessage).to.be.equal(this.testdata.errorMessage);
    });
  });

  it("validate error message for incorrect password", function () {
    cy.visit(this.testdata.baseUrl);
    loginDemoPage.getUserNameField().type(this.testdata.username);
    loginDemoPage.getPasswordField().type(this.testdata.wrongPassword);
    loginDemoPage.getLoginButton().click();
    loginDemoPage.getErrorMessageForInvalidUserAndPassword().then(($input) => {
      const errMessage = $input.text();
      expect(errMessage).to.be.equal(this.testdata.errorMessage);
    });
  });
});
