@UserInfo06
Feature: US_006_UserInfo
 Background: Access User Settings
   Given the login page
   And username and password
   And signIn button

  @US_006_TC_001
  Scenario: There should be user info

    And Click to User drop down menu
    And Click to User info
    And Click on first name box
    And Click on last name box
    And Click on UserInfoEmail
    And Language dropdown
    And Language dropdown is have English.
    And save button_box
    Then You should see Save Settings
