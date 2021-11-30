<!-- Site: ToolsQA -->

**TestCase Scenarios: ToolsQA Login**

<!-- Pre Requisite: -->

Note: Make sure no book is added in user's list.

Steps: Execute before, each scenario.

1- Site should be accessible and loaded correct.
2- Validate Page URL.
3- Validate 'Login' header text.
4- Validate username/password fields.
5- Validate Login button and click.
6- Validate user is successfully loggedIn with correct username/password.

Scenario 1: Validation Error messages on each field.

1- Validate empty username field.
2- Validate empty password field.
3- Validate error message on incorrect username field.
4- Validate error message on incorrect password field.

Secnario 2: "Add to collection" book flow.

1- Click 'Go to Book Store' button.
2- Validate user should be redirected to book store page.
3- User is able to search (available books) from search bar.
4- Validate only searched book is displayed.
5- Click on book name to see details.
6- Click 'Add to your collections'.
7- Accept 'ok' from popup.
8- Click on 'Profile' from left options.
9- Vaidate book is added in user's collection.
