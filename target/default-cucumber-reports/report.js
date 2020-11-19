$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/manageCustUS_0012_TC05.feature");
formatter.feature({
  "name": "US_012_TC05 Delete Button",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testcasefive"
    }
  ]
});
formatter.scenario({
  "name": "TC_0005 User can delete a customer, but seeing a message if the user is sure about the deletion",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testcasefive"
    },
    {
      "name": "@deletbutton"
    }
  ]
});
formatter.step({
  "name": "Go to the GMIBank sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC01_ManCustStepDefinitions.go_to_the_GMIBank_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Type username and password then click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC01_ManCustStepDefinitions.type_username_and_password_then_click_on_sign_in_button()"
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
  "name": "Click the Manage Customers button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC01_ManCustStepDefinitions.click_the_Manage_Customers_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the button to last page",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC01_ManCustStepDefinitions.click_the_button_to_last_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC05_ManCustStepDefinitions.click_on_Delete_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"d-none d-md-inline\"\u003e...\u003c/span\u003e is not clickable at point (1456, 8). Other element would receive the click: \u003cnav class\u003d\"navbar navbar-expand-md navbar-light fixed-top\" style\u003d\"background-color: rgb(8, 57, 150);\"\u003e...\u003c/nav\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-88SLRP4G\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mhmty\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64593}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 58b75450618287a1202fbacc22ff7564\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US12_TC05_ManCustStepDefinitions.click_on_Delete_button(US12_TC05_ManCustStepDefinitions.java:18)\r\n\tat ✽.Click on Delete button(file:///C:/Users/mhmty/IdeaProjects/GMIBankProject_002/src/test/resources/features/manageCustUS_0012_TC05.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should see the message -Are you sure you want to delete Customer ....?- on the Confirm delete operation popup",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC05_ManCustStepDefinitions.the_user_should_see_the_message_Are_you_sure_you_want_to_delete_Customer_on_the_Confirm_delete_operation_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Delete button in Popup window",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC05_ManCustStepDefinitions.click_on_Delete_button_in_Popup_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should not see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US12_TC05_ManCustStepDefinitions.the_user_should_not_see_error_message()"
});
formatter.result({
  "status": "skipped"
});
});