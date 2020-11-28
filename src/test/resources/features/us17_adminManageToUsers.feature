@us17_demo



Feature: System should allow the Admin to manage users
 Scenario: activation

  Given Go to the login page
  And Click on the username
  And Click on the password
  And Click on the sign in button
  And click on administration
  And click on user management
  And find team02@gmail.com mail on the page
  Then activate  team02@gmail.com mail
