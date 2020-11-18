$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US015_CheckingAccount.feature");
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
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US015"
    },
    {
      "name": "@US015-TC002"
    }
  ]
});
formatter.step({
  "name": "Go to URL \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US008_UpdatePassword.go_to_URL(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US008_UpdatePassword.click_on_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose Sign-in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US008_UpdatePassword.choose_Sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Type username of customer \"team2customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US008_UpdatePassword.type_username_of_customer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Type password \"customerteam2\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US008_UpdatePassword.type_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Sign-in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US008_UpdatePassword.click_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on \"My Operations\" dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US015_CheckingAccount.click_on_dropdown(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Choose My Account from dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US015_CheckingAccount.choose_My_Account_from_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Transaction button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Confirm the seeing of transaction",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});