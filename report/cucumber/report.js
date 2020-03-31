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
  "duration": 11806328300,
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
  "duration": 2494658600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2179234600,
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
  "duration": 104869300,
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
  "duration": 226080500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1182770900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 133946600,
  "status": "passed"
});
formatter.before({
  "duration": 875400,
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
  "duration": 1423047400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2031690400,
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
  "duration": 96847600,
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
  "duration": 117529500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1450459200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 50718000,
  "status": "passed"
});
formatter.before({
  "duration": 488300,
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
  "duration": 1985968600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2025662000,
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
  "duration": 83239700,
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
  "duration": 115675600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1437640500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 93925100,
  "status": "passed"
});
formatter.before({
  "duration": 613000,
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
  "duration": 1645548200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2039916700,
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
  "duration": 126281600,
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
  "duration": 81109100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1476740400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 216722200,
  "status": "passed"
});
formatter.before({
  "duration": 2320900,
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
formatter.result({
  "duration": 772399600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2033067300,
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
  "duration": 113369000,
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
  "duration": 118711900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1431235900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 61968500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Login into account with valid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-valid-user-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters a username: \u003cValidUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters a password: \u003cValidPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User should be taken to successful login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-valid-user-data;",
  "rows": [
    {
      "cells": [
        "ValidUsername",
        "ValidPassword"
      ],
      "line": 32,
      "id": "login-into-9gag-account;login-into-account-with-valid-user-data;;1"
    },
    {
      "cells": [
        "example@gmail.com",
        "Example12@"
      ],
      "line": 33,
      "id": "login-into-9gag-account;login-into-account-with-valid-user-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 548100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login into account with valid user data",
  "description": "",
  "id": "login-into-9gag-account;login-into-account-with-valid-user-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User navigates to 9gag login website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters a username: example@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters a password: Example12@",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User should be taken to successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_website()"
});
formatter.result({
  "duration": 1216248200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2035260200,
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
  "duration": 106739400,
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
  "duration": 104621400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1640232200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_successful_login_page()"
});
formatter.result({
  "duration": 41654800,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:305)\r\n\tat org.testng.Assert.assertEquals(Assert.java:315)\r\n\tat Login9gag.StepsFiles.Login.user_should_be_taken_to_successful_login_page(Login.java:167)\r\n\tat ✽.Then User should be taken to successful login page(Login.feature:29)\r\n",
  "status": "failed"
});
});