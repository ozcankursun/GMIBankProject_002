$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us02_user_register.feature");
formatter.feature({
  "name": "US_002 Create Regester",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@createregistration"
    }
  ]
});
formatter.background({
  "name": "Create a new register",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to registration page \"http://gmibank.com/account/register\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.go_to_registration_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_demo User should type uniqe SSN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createregistration"
    },
    {
      "name": "@demo"
    }
  ]
});
formatter.step({
  "name": "Type a valid SSN \"842-73-9072\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_a_valid_SSN(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type firstname \"Team02\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type  lastname \"Europe\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type address \"Lahey/Netherland\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid mobile phone number \"444-555-6666\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_valid_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type username \"Team02halleder\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type  email \"team02@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid password \"Team.02\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_valid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid  password confirmation \"Team.02\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.type_valid_password_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.click_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the user register is not success",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US02_UserRegistrationStepDef.verify_the_user_register_is_not_success()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us14_createAccountDate.feature");
formatter.feature({
  "name": "US_015_Date creation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datecreate"
    }
  ]
});
formatter.background({
  "name": "US_015 Create a new account",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US13_CreateAccountStepDefs.go_to_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type username and password than click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US13_CreateAccountStepDefs.type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Operations dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US13_CreateAccountStepDefs.click_on_My_Operations_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "employee selects accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@datecreate"
    },
    {
      "name": "@demo"
    }
  ]
});
formatter.step({
  "name": "Click on Manage Customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.click_on_Manage_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on +Create a new Custumer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.click_on_Create_a_new_Custumer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid SSN \"842-73-9072\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.type_valid_SSN(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type Middle Initial \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.type_Middle_Initial(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type Phone Number \"121-121-1122\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.type_Phone_Number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type zip code \"23232\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.type_zip_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type city to city box \"Lahey\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.type_city_to_city_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select accounts",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.select_accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click save",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountDateStepDefs.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us15_CheckingAccount.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US015"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to URL \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US08_UpdatePassword.go_to_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US08_UpdatePassword.click_on_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose Sign-in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US08_UpdatePassword.choose_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type username of customer \"Team02halleder\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US08_UpdatePassword.type_username_of_customer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type password \"Team.02\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US08_UpdatePassword.type_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Sign-in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US08_UpdatePassword.click_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Operations dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_CheckingAccount.clickOnMyOperationsDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose My Account from dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_CheckingAccount.choose_My_Account_from_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC-002",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US015"
    },
    {
      "name": "@US015-TC002"
    },
    {
      "name": "@demo"
    }
  ]
});
formatter.step({
  "name": "Click on Transaction button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_CheckingAccount.click_on_Transaction_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm the seeing of transaction",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_CheckingAccount.confirm_the_seeing_of_transaction()"
});
formatter.result({
  "status": "passed"
});
});