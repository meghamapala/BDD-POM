$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/meghamapalagama/eclipse-workspace/NaveenCucumberPOM/src/main/java/com/qa/features/express.feature");
formatter.feature({
  "line": 1,
  "name": "Express Application Test",
  "description": "",
  "id": "express-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Express HomePage Test",
  "description": "",
  "id": "express-application-test;validate-express-homepage-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close popup",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user able to see HomePage and click on Mens Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user able to click on sweaters",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_open_browser()"
});
formatter.result({
  "duration": 5633247410,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_Page()"
});
formatter.result({
  "duration": 45398419,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username()"
});
formatter.result({
  "duration": 781927949,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Meghas-MBP\u0027, ip: \u00272603:7000:c400:b73f:c5c1:d45b:df8f:a10%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/z1/35yw2wc14f9...}, goog:chromeOptions: {debuggerAddress: localhost:60306}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4dd34bbccd2b0e1e2843c5238635c320\n*** Element info: {Using\u003dcss selector, value\u003d/html/body/div[3]/div/div/section[2]/button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.qa.pages.LoginPage.login(LoginPage.java:54)\n\tat com.qa.stepDefinition.HomePageSteps.user_enters_username(HomePageSteps.java:34)\n\tat ???.Then user enters username and password(/Users/meghamapalagama/eclipse-workspace/NaveenCucumberPOM/src/main/java/com/qa/features/express.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.home_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.close_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_able_to_see_HomePage_and_click_on_Mens_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_able_to_click_on_sweaters()"
});
formatter.result({
  "status": "skipped"
});
});