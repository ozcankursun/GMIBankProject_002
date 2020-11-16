@managecustomer
Feature: US_012_Manage Customers Module

  Background: US_012_An Employee can manage Customer
    Given Go to the sign in page
    And Type username and password than click on sign in button
    And Click on My Operations dropdown menu
    And Click the Manage Customers button

  @firstname
  Scenario:  TC_0001 All customers should show up on manage customers module populating the account information of the customer "First Name"
    Then On the customer page, the user should see the customer's "First Name"

  @lastname
  Scenario: TC_0002 All customers should show up on manage customers module populating the account information of the customer "Last Name"
    Then On the customer page, the user should see the customer's "Last Name"

  @middlename
  Scenario: TC_0003 All customers should show up on manage customers module populating the account information of the customer "Middle Initial"
    Then On the customer page, the user should see the customer's "Middle Initial"

  @firstname
  Scenario: TC_0004 All customers should show up on manage customers module populating the account information of the customer "Email"
    Then on the customer page, the user should see the customer's "Email"

  @mobilphone
  Scenario: TC_0005 All customers should show up on manage customers module populating the account information of the customer "Mobile Phone Number"
    Then On the customer page, the user should see the customer's "Mobile Phone Number"

  @phonenumber
  Scenario: TC_0006 All customers should show up on manage customers module populating the account information of the customer "Phone Number"
    Then On the customer page, the user should see the customer's "Phone Number"

  @address
  Scenario: TC_0007 All customers should show up on manage customers module populating the account information of the customer "Address"
    Then on the customer page, the user should see the customer's "Address"

  @createdata
  Scenario: TC_0008 All customers should show up on manage customers module populating the account information of the customer "Create Date"
    Then On the customer page, the user should see the customer's "Create Date"

  @editbutton
  Scenario: TC_0009 There should be an Edit button where all customer information can be populated
    Then On the customer page, the user should see the customer's "Edit" button






