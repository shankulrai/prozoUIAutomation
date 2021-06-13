#Author: shankul.rai@gmail.com
#Keywords Summary :
#Feature: Negative Scenarios for CreateItem form.
#Scenario: Field validation Scenarios.
@web
Feature: Verify the negative Scenarios for Create Item Page

  Scenario Outline: Verify That user should be not allowed to submit blank create Item form
    Given User is logged in In portal using "<domain>","<mobilenumber>" and "<password>"
    And Navigate to the Create Items Page
    Then submit the blank form user should not allowed to proceed further

    Examples: 
      | domain | mobilenumber | password |
      | ob     |   1234567890 | ob       |

  Scenario Outline: Verifiy that char value should not be allowed in Hieght,wieght,length and breath filds
    Given User is logged in In portal using "<domain>","<mobilenumber>" and "<password>"
    And Navigate to the Create Items Page
    And enter the char value should not be allowed in Hieght,wieght,length and breath filds
    And Click on save button
    Then Error should be thrown

    Examples: 
      | domain | mobilenumber | password |
      | ob     |   1234567890 | ob       |
