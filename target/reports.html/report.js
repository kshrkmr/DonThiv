$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Eclipse2022-22/cucumber/src/test/resources/Stepdefinition.feature");
formatter.feature({
  "name": "com.BYJU.Study_Materials.stepdefinition",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "common function",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the url",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.pass_the_url()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027close\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.120)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d4297dda3c0d1e043ffbc23c1fcbe17d, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027close\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53332}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53332/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d4297dda3c0d1e043ffbc23c1fcbe17d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.cucumber.Cucumber.pass_the_url(Cucumber.java:37)\r\n\tat ✽.pass the url(D:/Eclipse2022-22/cucumber/src/test/resources/Stepdefinition.feature:24)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "NEET.Results",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user click on the Study_Materials",
  "keyword": "Given "
});
formatter.match({
  "location": "Cucumber.user_click_on_the_Study_Materials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the NEET",
  "keyword": "When "
});
formatter.match({
  "location": "Cucumber.user_click_on_the_NEET()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the Results",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.user_click_on_the_Results()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "choose exam",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.choose_exam()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select state",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.select_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select year",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.select_year()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click apply",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumber.click_apply()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search bar",
  "keyword": "And "
});
formatter.match({
  "location": "Cucumber.search_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});