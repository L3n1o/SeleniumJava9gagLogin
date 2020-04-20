$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into 9gag account",
  "description": " Existing 9gag user should be able to login into an account by using correct credentails",
  "id": "login-into-9gag-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login into account with invalid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-invalid-user-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a username: \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a password: \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to unsuccessful login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;1"
    },
    {
      "cells": [
        "",
        "Example12@"
      ],
      "line": 16,
      "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;2"
    },
    {
      "cells": [
        "@gmail.com",
        "Example12@"
      ],
      "line": 17,
      "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;3"
    },
    {
      "cells": [
        "example",
        "Example12@"
      ],
      "line": 18,
      "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;4"
    },
    {
      "cells": [
        "example@gmail.com",
        ""
      ],
      "line": 19,
      "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;5"
    },
    {
      "cells": [
        "example@gmail.com",
        "Example12@"
      ],
      "line": 20,
      "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12470347000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into account with invalid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a username: ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a password: Example12@",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to unsuccessful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_website()"
});
formatter.result({
  "duration": 2016033000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 1326464500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_username(String)"
});
formatter.result({
  "duration": 87100800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Example12@",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_password(String)"
});
formatter.result({
  "duration": 110908200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 2691704800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 49673000,
  "status": "passed"
});
formatter.after({
  "duration": 3087415400,
  "status": "passed"
});
formatter.before({
  "duration": 10584562100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into account with invalid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a username: @gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a password: Example12@",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to unsuccessful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_website()"
});
formatter.result({
  "duration": 1535894200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 865391500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " @gmail.com",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_username(String)"
});
formatter.result({
  "duration": 145664400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Example12@",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_password(String)"
});
formatter.result({
  "duration": 170498200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1404199400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 867513400,
  "status": "passed"
});
formatter.after({
  "duration": 2488649200,
  "status": "passed"
});
formatter.before({
  "duration": 10687090300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login into account with invalid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a username: example",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a password: Example12@",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to unsuccessful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_website()"
});
formatter.result({
  "duration": 1922944100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 500086400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " example",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_username(String)"
});
formatter.result({
  "duration": 160859300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Example12@",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_password(String)"
});
formatter.result({
  "duration": 183894800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1497098200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 143122200,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:305)\r\n\tat org.testng.Assert.assertEquals(Assert.java:315)\r\n\tat Login9gag.StepsFiles.Login.user_should_be_taken_to_unsuccessful_login_page(Login.java:67)\r\n\tat ✽.Then User should be taken to unsuccessful login page(Login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3438057800,
  "status": "passed"
});
formatter.before({
  "duration": 10575225800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login into account with invalid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a username: example@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a password: ",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to unsuccessful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_website()"
});
formatter.result({
  "duration": 1986215000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 1303706000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " example@gmail.com",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_username(String)"
});
formatter.result({
  "duration": 195651200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_password(String)"
});
formatter.result({
  "duration": 149363700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 2654903200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 53149600,
  "error_message": "java.lang.NullPointerException\r\n\tat Login9gag.Pages.LoginPage.unsuccessfulPage(LoginPage.java:153)\r\n\tat Login9gag.StepsFiles.Login.user_should_be_taken_to_unsuccessful_login_page(Login.java:67)\r\n\tat ✽.Then User should be taken to unsuccessful login page(Login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5774000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027WRO1-LDL-P11439\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}), userDataDir\u003dC:\\Users\\KACPER~1.LEN\\AppData\\Local\\Temp\\scoped_dir20728_1033711149}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56361}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.163, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue}]\nSession ID: 75960c5ad4ba821c0df6cfe411461273\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:776)\r\n\tat Login9gag.StepsFiles.Login.TearDown(Login.java:75)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 10629682200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login into account with invalid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a username: example@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a password: Example12@",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be taken to unsuccessful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_website()"
});
