$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/createAccount.feature");
formatter.feature({
  "name": "US_014 Create Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@createaccount"
    }
  ]
});
formatter.background({
  "name": "Create a new account",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.go_to_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type username and password than click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Operations dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_My_Operations_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Manage Accounts",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_Manage_Accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on +Create a new Account",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_Create_a_new_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_06 User creates account successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createaccount"
    },
    {
      "name": "@accountsave"
    }
  ]
});
formatter.step({
  "name": "Click on Descriptions text box and type some descriptions in the text box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_Descriptions_text_box_and_type_some_descriptions_in_the_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Balance text box and Type a balance in the text box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_Balance_text_box_and_Type_a_balance_in_the_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select an account type as CHECKING, SAVING,CREDIT_CARD or INVESTING",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.select_an_account_type_as_CHECKING_SAVING_CREDIT_CARD_or_INVESTING()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select an account status type from the Account Status Type dropdown and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.select_an_account_status_type_from_the_Account_Status_Type_dropdown_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Create Date textbox and type the time of account creation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_StepDefs.click_on_the_Create_Date_textbox_and_type_the_time_of_account_creation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Closed Date textbox and type the time later than the time of account creation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_StepDefs.click_on_the_Closed_Date_textbox_and_type_the_time_later_than_the_time_of_account_creation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select an employee from the Employee dropdown and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.select_an_employee_from_the_Employee_dropdown_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_save_button()"
});
formatter.result({
  "status": "passed"
});
});