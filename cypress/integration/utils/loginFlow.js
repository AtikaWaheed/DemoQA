/// <reference types="Cypress" />

import { LoginPage } from "../pages/loginPage.js";

const loginFlow = new LoginPage();

Cypress.Commands.add("login", (data) => {
  cy.visit(data.baseUrl);
  loginFlow.getURL().should("include", data.urlText);
  loginFlow.getPageHeaderText().contains(data.loginHeaderText);
  loginFlow.getUserNameField().type(data.username);
  loginFlow.getPasswordField().type(data.password);
  loginFlow.getLoginButton().click();
  loginFlow.getURL().should("include", data.profileUrl);
  loginFlow.getPageHeaderText().contains(data.ProfileHeaderText);
});
