#Author: shankul.rai@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Login Testcases for WCMS portal .
@web
Feature: Verify Login for WCMS Portal

  Scenario Outline: Verify that User should able to login with correct Username ,Domain and Password
    Given User is on the Login page
    And Enter the "<domain>" name
    And Click on the Continue button
    When I check for the mobilenumber and password page
    And Enter the "<mobilenumber>" and "<password>"
    And Click on the signin button
    Then User should be login into the WCMS portal

    Examples: 
      | domain | mobilenumber | password |
      | ob     |   1234567890 | ob       |
