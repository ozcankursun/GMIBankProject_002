$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US16_TransferMoneyFromTwoAccount.feature");
formatter.feature({
  "name": "US_16 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_16"
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC1601 User should have at least 2 accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_16"
    },
    {
      "name": "@TC1601"
    }
  ]
});
formatter.step({
  "name": "user clicks My Accounts link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_My_Accounts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify Account Type1 \"19669\" can be seen",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_verify_Account_Type1_can_be_seen(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify Account Type2 \"19670\" can be seen",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_verify_Account_Type2_can_be_seen(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC1602 User can select the first account as From dropdown where they receive their money from",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_16"
    },
    {
      "name": "@TC1602"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify the selected account can be seen",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_verify_the_selected_account_can_be_seen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC1603 User can select a balance that they want to proceed with",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_16"
    },
    {
      "name": "@TC1603"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select other account from To dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_select_other_account_from_To_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"100\" to Balance and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_send_to_Balance_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click tab and verify the amount can be seen in Balance",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_click_tab_and_verify_the_amount_can_be_seen_in_Balance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC1604 User should provide a description for that transfer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_16"
    },
    {
      "name": "@TC1604"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select other account from To dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_select_other_account_from_To_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"100\" to Balance and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_send_to_Balance_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"transfer between accounts\" to Description and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_send_to_Description_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC1605 User can make sure transfer is done successfully validating the message an amount of the transaction\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_16"
    },
    {
      "name": "@TC1605"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select other account from To dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_select_other_account_from_To_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"100\" to Balance and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_send_to_Balance_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"transfer between accounts\" to Description and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_send_to_Description_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Make Transfer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_click_Make_Transfer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks My Accounts link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_clicks_My_Accounts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click View Transaction link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_click_View_Transaction_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the transaction is accomplished",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.verify_the_transaction_is_accomplished()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US16_TransferMoneyTwoAccounts.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});