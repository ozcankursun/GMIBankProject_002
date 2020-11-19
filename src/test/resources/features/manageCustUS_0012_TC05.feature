@testcasefive
Feature: US_012_TC05 Delete Button

  @deletbutton
  Scenario: TC_0005 User can delete a customer, but seeing a message if the user is sure about the deletion
    Given Go to the GMIBank sign in page
    And Type username and password then click on sign in button
    And Click on My Operations dropdown menu
    And Click the Manage Customers button
    And Click the button to last page
    And Click on Delete button
    And The user should see the message -Are you sure you want to delete Customer ....?- on the Confirm delete operation popup
    And Click on Delete button in Popup window
    Then The user should not see error message