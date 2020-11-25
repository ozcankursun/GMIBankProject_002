@CreateNewCountry

  Feature: Create Countries

    @Country
    Scenario Outline: US_25_TC_001 User can Just create each country 1 by 1

      Given  the user sets the return using api endpoint "https://www.gmibank.com/api/tp-countries" and creates country using "<idJson>" and "<nameJson>"
      Then the user verifies to creates countries
      Examples:
        | idJson | nameJson |
        |name    |USA       |
        |name    |GERMANY   |
        |name    |FRANCE    |
        |name    |ENGLAND   |
        |name    |CANADA    |





