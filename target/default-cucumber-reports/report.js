$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_018_admin_management.feature");
formatter.feature({
  "name": "US_018 Admin manege customers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@admin_018"
    }
  ]
});
formatter.background({
  "name": "user anters gmibank homepage then reaches create new costomers link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "GO to Login Page \"http://gmibank.com/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US18_AdminManageStepDef.goToLoginPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the signIn button",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.click_on_the_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US18_AdminManageStepDef.userClicksMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US18_AdminManageStepDef.userClicksManageCostomersLink()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc1802 There should be a View option where customer can be navigated to all customer info and see  edit button there",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@admin_018"
    },
    {
      "name": "@view"
    }
  ]
});
formatter.step({
  "name": "ADMIN should show Edit Button and verify valid",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US18_AdminManageStepDef.adminShouldShowEditButtonAndVerifyValid()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[@class\u003d\u0027btn btn-primary btn-sm\u0027])[1]\"}\n  (Session info: chrome\u003d87.0.4280.66)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-N71VKMB\u0027, ip: \u0027172.31.4.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\LENOVO\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:51075}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a48df77f4f6f42ed589ebeb8507e16c9\n*** Element info: {Using\u003dxpath, value\u003d(//a[@class\u003d\u0027btn btn-primary btn-sm\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat gmibank.stepdefinitions.US18_AdminManageStepDef.adminShouldShowEditButtonAndVerifyValid(US18_AdminManageStepDef.java:47)\r\n\tat ✽.ADMIN should show Edit Button and verify valid(file:///C:/Users/LENOVO/IdeaProjects/GMIBankProject_002/GMIBankProject_002/src/test/resources/features/us_018_admin_management.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US18_AdminManageStepDef.userSignOut()"
});
formatter.result({
  "status": "skipped"
});
});