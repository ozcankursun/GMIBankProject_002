<<<<<<< Updated upstream
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/loginValidAccess.feature");
formatter.feature({
  "name": "US_04 Login page feature",
=======
<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "US_002 Create Regester",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/createAccount.feature");
formatter.feature({
  "name": "US_014 Create Account",
>>>>>>> master
>>>>>>> master
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/editAccountDateUS_0012.feature");
formatter.feature({
  "name": "US_012_An Edit Customer data",
>>>>>>> Stashed changes
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< Updated upstream
<<<<<<< HEAD
      "name": "@US_04LoginValid"
=======
<<<<<<< HEAD
      "name": "@createregistration"
=======
      "name": "@createaccount"
>>>>>>> master
>>>>>>> master
=======
      "name": "@editcustomerdate"
>>>>>>> Stashed changes
    }
  ]
});
formatter.background({
<<<<<<< Updated upstream
<<<<<<< HEAD
  "name": "access login page",
=======
<<<<<<< HEAD
  "name": "Create a new register",
=======
  "name": "Create a new account",
>>>>>>> master
>>>>>>> master
=======
  "name": "US_012_An Employee can edit Customer data",
>>>>>>> Stashed changes
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.user_on_the_login_page()"
=======
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
  "status": "skipped"
});
formatter.step({
  "name": "Type valid mobile phone number \"444-666-7777\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_valid_mobile_phone_number(java.lang.String)"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "mouse go to dropDown",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.mouse_go_to_dropDown()"
=======
  "name": "Type username \"Samibulur\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_username(java.lang.String)"
>>>>>>> master
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P0R6VB1\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62213}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: be27ca7e31efa67e157ef9bcc0c683a9\n*** Element info: {Using\u003did, value\u003daccount-menu}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US04_LoginPositiveStep.mouse_go_to_dropDown(US04_LoginPositiveStep.java:19)\r\n\tat ✽.mouse go to dropDown(file:///C:/Users/user/IdeaProjects/GMIBankProject_002/src/test/resources/features/loginValidAccess.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
<<<<<<< HEAD
  "name": "mouse click on the signInText",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.mouse_click_on_the_signInText()"
=======
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
  "status": "skipped"
});
formatter.step({
  "name": "click on Edit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "TC_0010 The Edit portal can allow user to create or update the user \"Email address\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@editcustomerdate"
    },
    {
      "name": "@editemailaddress"
    }
  ]
});
formatter.step({
  "name": "Customer\u0027s \"Email address\" is updated",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]\" massege",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "US_012_An Employee can edit Customer data",
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
  "status": "skipped"
});
formatter.step({
  "name": "Type username and password than click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on My Operations dropdown menu",
  "keyword": "And "
});
formatter.match({
<<<<<<< Updated upstream
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_Create_a_new_Account()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "TC_01 users enters valid credentials positive",
=======
<<<<<<< HEAD
  "name": "TC_02 User should not see the success message when don\u0027t typing mobile phone number",
=======
  "name": "TC_06 User creates account successfully",
>>>>>>> master
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_My_Operations_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Edit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "TC_0011 The Edit portal can allow user to create or update the user \"Mobil Phone Number\"",
>>>>>>> Stashed changes
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< Updated upstream
<<<<<<< HEAD
      "name": "@US_04LoginValid"
    },
    {
      "name": "@LoginValid"
=======
<<<<<<< HEAD
      "name": "@createregistration"
    },
    {
      "name": "@phone"
=======
      "name": "@createaccount"
    },
    {
      "name": "@accountsave"
>>>>>>> master
>>>>>>> master
=======
      "name": "@editcustomerdate"
    },
    {
      "name": "@editmobiltelnumber"
>>>>>>> Stashed changes
    }
  ]
});
formatter.step({
<<<<<<< Updated upstream
<<<<<<< HEAD
  "name": "user enters username and password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.user_enters_username_and_password()"
=======
<<<<<<< HEAD
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
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on the signIn button",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.click_on_the_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.user_sees_the_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "access login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.user_on_the_login_page()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US04_LoginPositiveStep\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-P0R6VB1\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62213}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: be27ca7e31efa67e157ef9bcc0c683a9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:59)\r\n\tat gmibank.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat gmibank.stepdefinitions.US04_LoginPositiveStep.\u003cinit\u003e(US04_LoginPositiveStep.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "mouse go to dropDown",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.mouse_go_to_dropDown()"
=======
  "name": "Type firstname \"Sami Eren\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.type_firstname(java.lang.String)"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "mouse click on the signInText",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.mouse_click_on_the_signInText()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC_02 Login users for GMI Bank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_04LoginValid"
    },
    {
      "name": "@LoginCancel"
    }
  ]
});
formatter.step({
  "name": "user verifies that the option the cancel",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US04_LoginPositiveStep.user_verifies_that_the_option_the_cancel()"
=======
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
=======
  "name": "Click on Descriptions text box and type some descriptions in the text box",
=======
  "name": "Customer\u0027s \"Mobil Phone Number\" is updated",
>>>>>>> Stashed changes
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]\" massege",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "US_012_An Employee can edit Customer data",
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
  "status": "skipped"
});
formatter.step({
  "name": "Type username and password than click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.type_username_and_password_than_click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on My Operations dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_My_Operations_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Edit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "TC_0012 The Edit portal can allow user to create or update the user \"Phone Number\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@editcustomerdate"
    },
    {
      "name": "@editphonenumber"
    }
  ]
});
formatter.step({
  "name": "Customer\u0027s \"Phone Number\" is updated",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]\" massege",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "US_012_An Employee can edit Customer data",
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
  "status": "skipped"
});
formatter.step({
  "name": "Type username and password than click on sign in button",
  "keyword": "And "
});
formatter.match({
<<<<<<< Updated upstream
  "location": "gmibank.stepdefinitions.US15_StepDefs.click_on_the_Closed_Date_textbox_and_type_the_time_later_than_the_time_of_account_creation()"
>>>>>>> master
=======
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.type_username_and_password_than_click_on_sign_in_button()"
>>>>>>> Stashed changes
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< Updated upstream
<<<<<<< HEAD
  "name": "Click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.click_register_button()"
=======
  "name": "Select an employee from the Employee dropdown and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.select_an_employee_from_the_Employee_dropdown_and_verify()"
>>>>>>> master
=======
  "name": "Click on My Operations dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_on_My_Operations_dropdown_menu()"
>>>>>>> Stashed changes
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< Updated upstream
<<<<<<< HEAD
  "name": "Verify the message \"Your Last Name is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.RegistrationStepDefinitions.verifyTheMessage(java.lang.String)"
=======
  "name": "Click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US14_CreateAccountStepDefs.click_save_button()"
>>>>>>> master
>>>>>>> master
=======
  "name": "click on Edit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "TC_0013 The Edit portal can allow user to create or update the user \"Address\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@editcustomerdate"
    },
    {
      "name": "@editaddress"
    }
  ]
});
formatter.step({
  "name": "Customer\u0027s \"Address\" is updated",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]\" massege",
  "keyword": "Then "
>>>>>>> Stashed changes
});
formatter.match({});
formatter.result({
<<<<<<< Updated upstream
  "status": "skipped"
=======
  "status": "undefined"
>>>>>>> Stashed changes
});
});