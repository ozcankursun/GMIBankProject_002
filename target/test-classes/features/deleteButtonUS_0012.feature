@delete
Feature: US_012_TC_0014 Delete a customer

  @deletebutton
  Scenario: US_012_TC_0014 User can delete a customer, but seeing a message if the user is sure about deletion
    Given Go to the sign in page
    And Type username and password than click on sign in button
    And Click on My Operations dropdown menu
    And Click on Delete button
    And Click on Delete button in Popup window
    Then user should see "translation-not-found[gmiBankBackendApp.tPCustomer.updated]" massege
