$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/PURSUITUSER/eclipse-workspace/cucumberfirstproject/src/main/java/featureFiles/SFDClogin.feature");
formatter.feature({
  "line": 1,
  "name": "Second Login functionality of SFDC environment",
  "description": "",
  "id": "second-login-functionality-of-sfdc-environment",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login to SFDC with valid credential with DataTable",
  "description": "",
  "id": "second-login-functionality-of-sfdc-environment;login-to-sfdc-with-valid-credential-with-datatable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on SFDC login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter correct credentials",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 5
    },
    {
      "cells": [
        "InternalCosSupportAdmin",
        "Cdns1234"
      ],
      "line": 6
    },
    {
      "cells": [
        "InternalCosSupportAdmin1",
        "Cdns12345"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "sfdc home page appears",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user waits for some",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps3.user_is_on_SFDC_login_page()"
});
formatter.result({
  "duration": 14802310100,
  "status": "passed"
});
formatter.match({
  "location": "Steps3.user_enter_correct_useranme_and_correct_password(DataTable)"
});
formatter.result({
  "duration": 19419139600,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d84.0.4147.105)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PSDLAP032\u0027, ip: \u0027192.168.43.139\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\PURSUI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64948}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f4fcb8530673c269ee5ecc7d8bc7774e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$2.apply(ExpectedConditions.java:86)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$2.apply(ExpectedConditions.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat stepDefinitions.Steps3.user_enter_correct_useranme_and_correct_password(Steps3.java:46)\r\n\tat ✽.When user enter correct credentials(C:/Users/PURSUITUSER/eclipse-workspace/cucumberfirstproject/src/main/java/featureFiles/SFDClogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps3.sfdc_home_page_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps3.user_waits_for_some()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps3.user_close_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
});