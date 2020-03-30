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
        "Klenio12@"
      ],
      "line": 16,
      "id": "login-into-9gag-account;login-into-account-with-invalid-user-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13365464400,
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
  "name": "User enters a password: Klenio12@",
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
  "duration": 1828561900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2174360000,
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
  "duration": 169143300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Klenio12@",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_password(String)"
});
formatter.result({
  "duration": 242869800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1618921000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 178888100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Login into account with valid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-valid-user-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters a username: \u003cValidUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters a password: \u003cValidPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should be taken to successful login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-valid-user-data;",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "ValidPassword"
      ],
      "line": 29,
      "id": "login-into-9gag-account;login-into-account-with-valid-user-data;;1"
    },
    {
      "cells": [
        "wasylion@gmail.com",
        "Klenio12@"
      ],
      "line": 30,
      "id": "login-into-9gag-account;login-into-account-with-valid-user-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 770200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login into account with valid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-valid-user-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters a username: wasylion@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters a password: Klenio12@",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should be taken to successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_website()"
});
formatter.result({
  "duration": 1089416200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2059168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " wasylion@gmail.com",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_username(String)"
});
formatter.result({
  "duration": 174960500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Klenio12@",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_a_password(String)"
});
formatter.result({
  "duration": 118925000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1646340800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_successful_login_page()"
});
formatter.result({
  "duration": 135394900,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:305)\r\n\tat org.testng.Assert.assertEquals(Assert.java:315)\r\n\tat Login9gag.StepsFiles.Login.user_should_be_taken_to_successful_login_page(Login.java:167)\r\n\tat ✽.Then User should be taken to successful login page(Login.feature:26)\r\n",
  "status": "failed"
});
});