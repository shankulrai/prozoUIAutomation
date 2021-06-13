$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ItemsScenario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shankul.rai@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios of ytems Items."
    }
  ],
  "line": 5,
  "name": "Verify createItems button in Item Sub menu",
  "description": "",
  "id": "verify-createitems-button-in-item-sub-menu",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify That user should be able to click on the Create Item",
  "description": "",
  "id": "verify-createitems-button-in-item-sub-menu;verify-that-user-should-be-able-to-click-on-the-create-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User is logged in In portal using \"\u003cdomain\u003e\",\"\u003cmobilenumber\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User is on the Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on the items from left menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on the items from items Submenu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to click on Create New Item button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-createitems-button-in-item-sub-menu;verify-that-user-should-be-able-to-click-on-the-create-item;",
  "rows": [
    {
      "cells": [
        "domain",
        "mobilenumber",
        "password"
      ],
      "line": 15,
      "id": "verify-createitems-button-in-item-sub-menu;verify-that-user-should-be-able-to-click-on-the-create-item;;1"
    },
    {
      "cells": [
        "ob",
        "1234567890",
        "ob"
      ],
      "line": 16,
      "id": "verify-createitems-button-in-item-sub-menu;verify-that-user-should-be-able-to-click-on-the-create-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10369159593,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify That user should be able to click on the Create Item",
  "description": "",
  "id": "verify-createitems-button-in-item-sub-menu;verify-that-user-should-be-able-to-click-on-the-create-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is logged in In portal using \"ob\",\"1234567890\" and \"ob\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User is on the Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on the items from left menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on the items from items Submenu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to click on Create New Item button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ob",
      "offset": 35
    },
    {
      "val": "1234567890",
      "offset": 40
    },
    {
      "val": "ob",
      "offset": 57
    }
  ],
  "location": "ItemsScenarioSteps.java:10"
});
formatter.result({
  "duration": 1275670568,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:23"
});
formatter.result({
  "duration": 623178891,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:28"
});
formatter.result({
  "duration": 41178464,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:33"
});
formatter.result({
  "duration": 119272139,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:38"
});
formatter.result({
  "duration": 183243934,
  "status": "passed"
});
formatter.after({
  "duration": 109938389,
  "status": "passed"
});
formatter.uri("LoginScenario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shankul.rai@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Login Testcases for WCMS portal ."
    }
  ],
  "line": 6,
  "name": "Verify Login for WCMS Portal",
  "description": "",
  "id": "verify-login-for-wcms-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify that User should able to login with correct Username ,Domain and Password",
  "description": "",
  "id": "verify-login-for-wcms-portal;verify-that-user-should-able-to-login-with-correct-username-,domain-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter the \"\u003cdomain\u003e\" name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on the Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I check for the mobilenumber and password page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter the \"\u003cmobilenumber\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be login into the WCMS portal",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "verify-login-for-wcms-portal;verify-that-user-should-able-to-login-with-correct-username-,domain-and-password;",
  "rows": [
    {
      "cells": [
        "domain",
        "mobilenumber",
        "password"
      ],
      "line": 18,
      "id": "verify-login-for-wcms-portal;verify-that-user-should-able-to-login-with-correct-username-,domain-and-password;;1"
    },
    {
      "cells": [
        "ob",
        "1234567890",
        "ob"
      ],
      "line": 19,
      "id": "verify-login-for-wcms-portal;verify-that-user-should-able-to-login-with-correct-username-,domain-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3387884221,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify that User should able to login with correct Username ,Domain and Password",
  "description": "",
  "id": "verify-login-for-wcms-portal;verify-that-user-should-able-to-login-with-correct-username-,domain-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter the \"ob\" name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on the Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I check for the mobilenumber and password page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter the \"1234567890\" and \"ob\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be login into the WCMS portal",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScenarioSteps.java:34"
});
formatter.result({
  "duration": 37875909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ob",
      "offset": 11
    }
  ],
  "location": "LoginScenarioSteps.java:40"
});
formatter.result({
  "duration": 123406864,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:45"
});
formatter.result({
  "duration": 563691245,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:50"
});
formatter.result({
  "duration": 289025812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 11
    },
    {
      "val": "ob",
      "offset": 28
    }
  ],
  "location": "LoginScenarioSteps.java:54"
});
formatter.result({
  "duration": 143358257,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:60"
});
formatter.result({
  "duration": 100068270,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:67"
});
formatter.result({
  "duration": 600454187,
  "status": "passed"
});
formatter.after({
  "duration": 89348383,
  "status": "passed"
});
formatter.uri("createItem.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shankul.rai@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: Negative Scenarios for CreateItem form."
    },
    {
      "line": 4,
      "value": "#Scenario: Field validation Scenarios."
    }
  ],
  "line": 6,
  "name": "Verify the negative Scenarios for Create Item Page",
  "description": "",
  "id": "verify-the-negative-scenarios-for-create-item-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify That user should be not allowed to submit blank create Item form",
  "description": "",
  "id": "verify-the-negative-scenarios-for-create-item-page;verify-that-user-should-be-not-allowed-to-submit-blank-create-item-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is logged in In portal using \"\u003cdomain\u003e\",\"\u003cmobilenumber\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Navigate to the Create Items Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit the blank form user should not allowed to proceed further",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-the-negative-scenarios-for-create-item-page;verify-that-user-should-be-not-allowed-to-submit-blank-create-item-form;",
  "rows": [
    {
      "cells": [
        "domain",
        "mobilenumber",
        "password"
      ],
      "line": 14,
      "id": "verify-the-negative-scenarios-for-create-item-page;verify-that-user-should-be-not-allowed-to-submit-blank-create-item-form;;1"
    },
    {
      "cells": [
        "ob",
        "1234567890",
        "ob"
      ],
      "line": 15,
      "id": "verify-the-negative-scenarios-for-create-item-page;verify-that-user-should-be-not-allowed-to-submit-blank-create-item-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4548323620,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify That user should be not allowed to submit blank create Item form",
  "description": "",
  "id": "verify-the-negative-scenarios-for-create-item-page;verify-that-user-should-be-not-allowed-to-submit-blank-create-item-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is logged in In portal using \"ob\",\"1234567890\" and \"ob\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Navigate to the Create Items Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit the blank form user should not allowed to proceed further",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ob",
      "offset": 35
    },
    {
      "val": "1234567890",
      "offset": 40
    },
    {
      "val": "ob",
      "offset": 57
    }
  ],
  "location": "ItemsScenarioSteps.java:10"
});
formatter.result({
  "duration": 877678865,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:9"
});
formatter.result({
  "duration": 1480601776,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:18"
});
formatter.result({
  "duration": 327581737,
  "status": "passed"
});
formatter.after({
  "duration": 96844038,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verifiy that char value should not be allowed in Hieght,wieght,length and breath filds",
  "description": "",
  "id": "verify-the-negative-scenarios-for-create-item-page;verifiy-that-char-value-should-not-be-allowed-in-hieght,wieght,length-and-breath-filds",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is logged in In portal using \"\u003cdomain\u003e\",\"\u003cmobilenumber\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Navigate to the Create Items Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enter the char value should not be allowed in Hieght,wieght,length and breath filds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Error should be thrown",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "verify-the-negative-scenarios-for-create-item-page;verifiy-that-char-value-should-not-be-allowed-in-hieght,wieght,length-and-breath-filds;",
  "rows": [
    {
      "cells": [
        "domain",
        "mobilenumber",
        "password"
      ],
      "line": 25,
      "id": "verify-the-negative-scenarios-for-create-item-page;verifiy-that-char-value-should-not-be-allowed-in-hieght,wieght,length-and-breath-filds;;1"
    },
    {
      "cells": [
        "ob",
        "1234567890",
        "ob"
      ],
      "line": 26,
      "id": "verify-the-negative-scenarios-for-create-item-page;verifiy-that-char-value-should-not-be-allowed-in-hieght,wieght,length-and-breath-filds;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4073936099,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verifiy that char value should not be allowed in Hieght,wieght,length and breath filds",
  "description": "",
  "id": "verify-the-negative-scenarios-for-create-item-page;verifiy-that-char-value-should-not-be-allowed-in-hieght,wieght,length-and-breath-filds;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is logged in In portal using \"ob\",\"1234567890\" and \"ob\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Navigate to the Create Items Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enter the char value should not be allowed in Hieght,wieght,length and breath filds",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Error should be thrown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ob",
      "offset": 35
    },
    {
      "val": "1234567890",
      "offset": 40
    },
    {
      "val": "ob",
      "offset": 57
    }
  ],
  "location": "ItemsScenarioSteps.java:10"
});
formatter.result({
  "duration": 1200497517,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:9"
});
formatter.result({
  "duration": 907151367,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:26"
});
formatter.result({
  "duration": 244865317,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:32"
});
formatter.result({
  "duration": 128034167,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:38"
});
formatter.result({
  "duration": 30053494849,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#client\\-snackbar\"}\n  (Session info: chrome\u003d91.0.4472.77)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027Shankuls-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1066:2147:2dd8:e33f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d91.0.4472.101 (af52a90bf87030dd1523486a1cd3ae25c5d76c9b-refs/branch-heads/4472@{#1462}), userDataDir\u003d/var/folders/5_/519vp9ys5j501ft2nrspsy8w0000gn/T/.com.google.Chrome.BrCj5r}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dMAC, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52447}, acceptInsecureCerts\u003dfalse, browserVersion\u003d91.0.4472.77, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 4e78e0717bc1bb694c6cda2e29bd23e9\n*** Element info: {Using\u003did, value\u003dclient-snackbar}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:402)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\n\tat com.prozo.cucumber.steps.CreateItemSteps.lambda$4(CreateItemSteps.java:40)\n\tat ✽.Then Error should be thrown(createItem.feature:22)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 427959764,
  "status": "passed"
});
});