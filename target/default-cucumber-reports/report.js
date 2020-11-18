$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/manageCustUS_0012_TC04.feature");
formatter.feature({
  "name": "US_012_TC04 Edit Button and Save date",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testcasefour"
    }
  ]
});
formatter.scenario({
  "name": "TC_0004 The Edit portal can allow the user to create or update the user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testcasefour"
    }
  ]
});
formatter.step({
  "name": "Click on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_Edit_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-88SLRP4G\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mhmty\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54783}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 791d8ab581f56afe862c0d2146f29057\n*** Element info: {Using\u003did, value\u003d}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_Edit_button(US12_TC04_ManCustStepDefinitions.java:19)\r\n\tat ✽.Click on Edit button(file:///C:/Users/mhmty/IdeaProjects/GMIBankProject_002/src/test/resources/features/manageCustUS_0012_TC04.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on the customer First Name textbox and type a new First Name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_First_Name_textbox_and_type_a_new_First_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Last Name textbox and type a new Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Last_Name_textbox_and_type_a_new_Last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Middle Initial textbox and type a new Middle Initial",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Middle_Initial_textbox_and_type_a_new_Middle_Initial()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Email textbox and type a new Email",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Email_textbox_and_type_a_new_Email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Mobile Phone Number textbox and type a new Mobile Phone Number",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Mobile_Phone_Number_textbox_and_type_a_new_Mobile_Phone_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Phone Number textbox and type a new Phone Number",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Phone_Number_textbox_and_type_a_new_Phone_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Zip Code textbox and type a new Zip Code",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Zip_Code_textbox_and_type_a_new_Zip_Code()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Address textbox and type a new Address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Address_textbox_and_type_a_new_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer City textbox and type a new City",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_City_textbox_and_type_a_new_City()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Ssn textbox and type a new Ssn number",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Ssn_textbox_and_type_a_new_Ssn_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Create Date textbox and type a new Create Date",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Create_Date_textbox_and_type_a_new_Create_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer Country dropdown and type a new Country",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_Country_dropdown_and_type_a_new_Country()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer State textbox and type a new State",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_State_textbox_and_type_a_new_State()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the customer User dropdown and type a new User",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_the_customer_User_dropdown_and_type_a_new_User()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select an account status type from the Customer Account Status Type dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.select_an_account_status_type_from_the_Customer_Account_Status_Type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Zelle Enrolled",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_Zelle_Enrolled()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.click_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see a message confirming that they have saved the edited information.",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC04_ManCustStepDefinitions.the_user_should_see_a_message_confirming_that_they_have_saved_the_edited_information()"
});
formatter.result({
  "status": "skipped"
});
});