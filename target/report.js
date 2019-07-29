$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/PRATHEEP A/eclipse-workspace/Login_Page/features/Login.feature");
formatter.feature({
  "name": "To test user registration page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To check the user registration page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user should be wilko homepage and click the accout",
  "keyword": "Given "
});
formatter.step({
  "name": "User should fill the required info and click submit \"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cEmail\u003e\",\"\u003cPassword\u003e\",\"\u003cRepassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Validate if user is register or not",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Fname",
        "Lname",
        "Email",
        "Password",
        "Repassword"
      ]
    },
    {
      "cells": [
        "Johnson",
        "Nickolas",
        "johnsonsgnya@gmail.com",
        "3f4g5h6r5f",
        "3f4g5h6r5f"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check the user registration page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user should be wilko homepage and click the accout",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefinition.the_user_should_be_wilko_homepage_and_click_the_accout()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003ddnsNotFound\u0026u\u003dhttps%3A//www.wilko.com/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dWe%20can%E2%80%99t%20connect%20to%20the%20server%20at%20www.wilko.com.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PRATHEEPA-PC\u0027, ip: \u0027192.168.43.195\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 6288, moz:profile: C:\\Users\\PRATHEEP A\\AppData..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 205df9e4-f06f-4720-8f3e-7c6236ec41bb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.cts.Login_Page.Login_StepDefinition.the_user_should_be_wilko_homepage_and_click_the_accout(Login_StepDefinition.java:18)\r\n\tat ✽.The user should be wilko homepage and click the accout(C:/Users/PRATHEEP A/eclipse-workspace/Login_Page/features/Login.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should fill the required info and click submit \"Johnson\",\"Nickolas\",\"johnsonsgnya@gmail.com\",\"3f4g5h6r5f\",\"3f4g5h6r5f\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefinition.user_should_fill_the_required_info_and_click_submit(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate if user is register or not",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.validate_if_user_is_register_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});