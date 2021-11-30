/// <reference types="Cypress" />

import { LoginPage } from "../pages/loginPage.js";
import { BookStorePage } from "../pages/bookStorePage.js";

describe("Validate Functionality on Book Store and Details page", () => {
  const bookStorePage = new BookStorePage();
  const loginPage = new LoginPage();

  beforeEach(function () {
    cy.fixture("testdata").then((testdata) => {
      this.testdata = testdata;
      cy.login(testdata);
      bookStorePage.goToStoreButton().should("be.visible").click();
      loginPage.getURL().should("include", this.testdata.urlBooksText);
      loginPage.getPageHeaderText().then(($input) => {
        const bookStoreHeaderText = $input.text();
        expect(bookStoreHeaderText).to.be.equal(this.testdata.BooksHeaderText);
      });
    });
  });

  it("validate User is able to search (available books)& add to collection", function () {
    bookStorePage.getAllAvailableBooks().then(($txt) => {
      const randomNumbfromAvailableBooks = Math.floor(
        Math.random() * $txt.length
      );

      cy.wrap($txt[randomNumbfromAvailableBooks]).then(($text) => {
        const selectedBook = $text.text();
        bookStorePage
          .getBooksSearchBar()
          .type(selectedBook)
          .should("be.visible");
        bookStorePage
          .getAllAvailableBooks()
          .contains(selectedBook)
          .should("have.length", 1)
          .click({ force: true });
        bookStorePage.getAddToCollectionButton().should("be.visible").click();
        cy.on("window:alert", (txt) => {
          expect(txt).to.contains("Book added to your collection.");
        });
        bookStorePage.getBackToBookStoreButton().should("be.visible").click();
        bookStorePage.getLeftBarOptionProfile().should("be.visible").click();
        loginPage
          .getPageHeaderText()
          .contains(this.testdata.ProfileHeaderText)
          .should("be.visible");
        bookStorePage
          .getAllAvailableBooks()
          .invoke("text")
          .should("eq", selectedBook);
      });
    });
  });
});
