$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
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
formatter.step({
  "name": "Go to registration page \"http://gmibank.com/account/register\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.go_to_registration_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_01 User should not see the success message when don\u0027t typing address",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createregistration"
    },
    {
      "name": "@address"
    }
  ]
});
formatter.step({
  "name": "Type a valid SSN \"876-62-9758\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_a_valid_SSN(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type firstname \"Sami\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type  lastname \"Kacmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Do not enter anything in address box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.do_not_enter_anything_in_address_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid mobile phone number \"444-666-7777\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type username \"Samibulur\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type  email \"sami@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid password \"Sami.25\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid  password confirmation \"Sami.25\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_password_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.click_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the user register is not success",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.verify_the_user_register_is_not_success()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Create a new register",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to registration page \"http://gmibank.com/account/register\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.go_to_registration_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_02 User should not see the success message when don\u0027t typing mobile phone number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createregistration"
    },
    {
      "name": "@phone"
    }
  ]
});
formatter.step({
  "name": "Type a valid SSN \"876-62-9754\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_a_valid_SSN(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type firstname \"Sami Can\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type  lastname \"Kacmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type address \"Amsterdam/Hollanda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Do not enter anything in  mobile phone number text box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.do_not_enter_anything_in_mobile_phone_number_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type  username \"Samiyolcu\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.typeUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type email \"samican@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.typeEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid password \"Sami.2525\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid  password confirmation \"Sami.2525\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_password_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.click_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the user register is not success",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.verify_the_user_register_is_not_success()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Create a new register",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to registration page \"http://gmibank.com/account/register\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.go_to_registration_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_03 User should see the red box when don\u0027t typing last name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@createregistration"
    },
    {
      "name": "@lastname"
    }
  ]
});
formatter.step({
  "name": "Type a valid SSN \"876-62-9755\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_a_valid_SSN(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type firstname \"Sami Eren\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Do not enter anything in  last name text box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.do_not_enter_anything_in_last_name_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type address \"Rotterdam-Netherland\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type mobile phone number \"444-666-7777\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type  username \"Samizaman\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.typeUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type email \"samican@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.typeEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid password \"Sami.23\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type valid  password confirmation \"Sami.23\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_password_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.click_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the message \"Your Last Name is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.verifyTheMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});