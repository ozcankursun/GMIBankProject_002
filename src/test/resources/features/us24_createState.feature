@CreateStates

Feature: create new states

  Scenario Outline: create state
    Given The make api endpoint to create states using "<endPoint>", "<countryId>", "<id>" and its extension "<name>"
    Then the user verifies to created states
    Examples:
      | endPoint | countryId | name |
      |https://www.gmibank.com/api/tp-states|1|PENNSYLVANIA|


