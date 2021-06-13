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
  "duration": 9361707744,
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
  "duration": 1251976240,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:23"
});
formatter.result({
  "duration": 600694117,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:28"
});
formatter.result({
  "duration": 40953019,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:33"
});
formatter.result({
  "duration": 127240829,
  "status": "passed"
});
formatter.match({
  "location": "ItemsScenarioSteps.java:38"
});
formatter.result({
  "duration": 206145215,
  "status": "passed"
});
formatter.after({
  "duration": 89939061,
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
  "duration": 3260057870,
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
  "duration": 52740949,
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
  "duration": 152626917,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:45"
});
formatter.result({
  "duration": 528986793,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:50"
});
formatter.result({
  "duration": 521736445,
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
  "duration": 138935417,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:60"
});
formatter.result({
  "duration": 107026138,
  "status": "passed"
});
formatter.match({
  "location": "LoginScenarioSteps.java:67"
});
formatter.result({
  "duration": 571208095,
  "status": "passed"
});
formatter.after({
  "duration": 95814883,
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
  "duration": 4309737063,
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
  "duration": 1165013664,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:9"
});
formatter.result({
  "duration": 1480266649,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:18"
});
formatter.result({
  "duration": 318195173,
  "status": "passed"
});
formatter.after({
  "duration": 101402830,
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
  "duration": 6882685401,
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
  "duration": 839709358,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:9"
});
formatter.result({
  "duration": 1442033624,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:26"
});
formatter.result({
  "duration": 211233155,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:32"
});
formatter.result({
  "duration": 147259614,
  "status": "passed"
});
formatter.match({
  "location": "CreateItemSteps.java:38"
});
formatter.result({
  "duration": 35174,
  "status": "passed"
});
formatter.after({
  "duration": 98864294,
  "status": "passed"
});
});