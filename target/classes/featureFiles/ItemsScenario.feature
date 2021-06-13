#Author: shankul.rai@gmail.com
#Keywords Summary :
#Feature: List of scenarios of ytems Items.
@web
Feature: Verify createItems button in Item Sub menu

  Scenario Outline: Verify That user should be able to click on the Create Item
    Given User is logged in In portal using "<domain>","<mobilenumber>" and "<password>"
    And User is on the Home Page
    And Click on the items from left menu
    And Click on the items from items Submenu
    Then User should be able to click on Create New Item button

    Examples: 
      | domain | mobilenumber | password |
      | ob     |   1234567890 | ob       |
