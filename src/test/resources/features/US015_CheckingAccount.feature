@US015
Feature:
  @US015-TC001
  Scenario:
    Given Go to URL "https://gmibank.com/"
    And Click on dropdown menu
    And Choose Sign-in
    And Type username of customer "team2customer"
    And Type password "customerteam2"
    And Click on Sign-in button
    And Click on My Operations dropdown
    And Choose My Account from dropdown menu
    And Confirm the seeing of acount types and balance populated

  @US015-TC002
    Scenario:
      Given Go to URL "https://gmibank.com/"
      And Click on dropdown menu
      And Choose Sign-in
      And Type username of customer "team2customer"
      And Type password "customerteam2"
      And Click on Sign-in button
      And Click on My Operations dropdown
      And Choose My Account from dropdown menu
      And Click on Transaction button
      And Confirm the seeing of transaction


