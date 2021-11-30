/// <reference types="Cypress" />

export class LoginPage {
  getURL() {
    return cy.url();
  }

  getPageHeaderText() {
    return cy.get(".main-header");
  }

  getUserNameField() {
    return cy.get("#userName");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("button#login");
  }

  getUsernameInvalidClass() {
    return cy.get("#userName.is-invalid");
  }

  getPasswordInvalidClass() {
    return cy.get("#password.is-invalid");
  }

  getErrorMessageForInvalidUserAndPassword() {
    return cy.get("#name");
  }
}
