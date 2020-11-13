$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/createAccountDate.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "US_015 Create a new account",
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
formatter.scenario({
  "name": "TC_006 An account info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@accountinfo"
    }
  ]
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
  "name": "Click an ID item to choose an account created on manage accounts",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_StepDefs.click_an_ID_item_to_choose_an_account_created_on_manage_accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Account",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US15_StepDefs.verify_Account()"
});
formatter.result({
  "status": "passed"
});
});