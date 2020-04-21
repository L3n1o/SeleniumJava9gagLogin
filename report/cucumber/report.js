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
  "duration": 12691876800,
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
  "duration": 2825108400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 538680000,
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
  "duration": 199447500,
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
  "duration": 557750200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1390403100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "duration": 371445700,
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:305)\r\n\tat org.testng.Assert.assertEquals(Assert.java:315)\r\n\tat Login9gag.StepsFiles.Login.user_should_be_taken_to_unsuccessful_login_page(Login.java:69)\r\n\tat ✽.Then User should be taken to unsuccessful login page(Login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3623850400,
  "status": "passed"
});
formatter.before({
  "duration": 16468635100,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027WRO1-LDL-P11439\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00950C83+1707139]\n\tOrdinal0 [0x008B68F1+1075441]\n\tOrdinal0 [0x0082DE72+515698]\n\tOrdinal0 [0x00827CA8+490664]\n\tOrdinal0 [0x0082839B+492443]\n\tOrdinal0 [0x008292F5+496373]\n\tOrdinal0 [0x00824F05+478981]\n\tOrdinal0 [0x0082ECA0+519328]\n\tOrdinal0 [0x007DCA67+182887]\n\tOrdinal0 [0x007DBDDD+179677]\n\tOrdinal0 [0x007D9D4B+171339]\n\tOrdinal0 [0x007C1D4A+73034]\n\tOrdinal0 [0x007C2DC0+77248]\n\tOrdinal0 [0x007C2D59+77145]\n\tOrdinal0 [0x008CBB67+1162087]\n\tGetHandleVerifier [0x009EA966+508998]\n\tGetHandleVerifier [0x009EA6A4+508292]\n\tGetHandleVerifier [0x009FF7B7+594583]\n\tGetHandleVerifier [0x009EB1D6+511158]\n\tOrdinal0 [0x008C402C+1130540]\n\tOrdinal0 [0x008CD4CB+1168587]\n\tOrdinal0 [0x008CD633+1168947]\n\tOrdinal0 [0x008E5B35+1268533]\n\tBaseThreadInitThunk [0x755C6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77D87B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77D87B44+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$22(ProtocolHandshake.java:365)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:368)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:159)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat Login9gag.DriverSetUp.DriverSetUp.setBrowser(DriverSetUp.java:87)\r\n\tat Login9gag.DriverSetUp.DriverSetUp.driverSetUp(DriverSetUp.java:29)\r\n\tat Login9gag.StepsFiles.Login.readBrowser(Login.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_closes_the_pop_up_message()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34400,
  "status": "passed"
});
