/// <reference types="Cypress" />

export class BookStorePage {
  goToStoreButton() {
    return cy.get("#gotoStore");
  }

  getBooksSearchBar() {
    return cy.get("#searchBox");
  }

  getAllAvailableBooks() {
    return cy.get(".mr-2 a");
  }

  getAddToCollectionButton() {
    return cy.get(".text-right #addNewRecordButton");
  }

  getBackToBookStoreButton() {
    return cy.get(".text-left #addNewRecordButton");
  }

  getLeftBarOptionProfile() {
    return cy.get(".menu-list .text").contains("Profile");
  }
}
