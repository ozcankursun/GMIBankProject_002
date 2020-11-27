$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_29.feature");
formatter.feature({
  "name": "US_29 user tests create user page with database validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_29"
    },
    {
      "name": "@SmokeTest1"
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
  "name": "user  connecting GMI database",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_connecting_GMI_database()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2901 All users\u0027 information must be obtained database and verified",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_29"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2901"
    }
  ]
});
formatter.step({
  "name": "user read all user data from database",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_read_all_user_data_from_database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate all user data",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_validate_all_user_data()"
});
formatter.result({
  "status": "passed"
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
  "name": "user  connecting GMI database",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_connecting_GMI_database()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2902 All countries\u0027 info should be retrieved by database and validated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_29"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2902"
    }
  ]
});
formatter.step({
  "name": "user read all countries infos from database",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_read_all_countries_infos_from_database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate all countries infos",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_validate_all_countries_infos()"
});
formatter.result({
  "status": "passed"
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
  "name": "user  connecting GMI database",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_connecting_GMI_database()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2903 All states should related to USA should be retrieved by database and validated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_29"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2903"
    }
  ]
});
formatter.step({
  "name": "user read all states of related to USA from database",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_read_all_states_of_related_to_USA_from_database()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate all states of related to USA",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_29_Step_Definitions.user_validate_all_states_of_related_to_USA()"
});
formatter.result({
  "status": "passed"
});
});