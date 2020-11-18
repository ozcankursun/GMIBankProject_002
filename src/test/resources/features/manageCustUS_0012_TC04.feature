@testcasefour
Feature: US_012_TC04 Edit Button and Save date

   Scenario: TC_0004 The Edit portal can allow the user to create or update the user info
     And Click on Edit button
     And Click on the customer First Name textbox and type a new First Name
     And Click on the customer Last Name textbox and type a new Last Name
     And Click on the customer Middle Initial textbox and type a new Middle Initial
     And Click on the customer Email textbox and type a new Email
     And Click on the customer Mobile Phone Number textbox and type a new Mobile Phone Number
     And Click on the customer Phone Number textbox and type a new Phone Number
     And Click on the customer Zip Code textbox and type a new Zip Code
     And Click on the customer Address textbox and type a new Address
     And Click on the customer City textbox and type a new City
     And Click on the customer Ssn textbox and type a new Ssn number
     And Click on the customer Create Date textbox and type a new Create Date
     And Click on the customer Country dropdown and type a new Country
     And Click on the customer State textbox and type a new State
     And Click on the customer User dropdown and type a new User
     And Select an account status type from the Customer Account Status Type dropdown
     And Click on Zelle Enrolled
     And Click on Save button
     Then The user should see a message confirming that they have saved the edited information.
