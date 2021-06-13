package com.prozo.cucumber.steps;

import cucumber.api.java8.En;

public class ItemsScenarioSteps extends BaseSteps implements En
{
	
	public ItemsScenarioSteps()
	{
		Given("^User is logged in In portal using \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$", (String domain, String mobileNumber, String password) -> {
			checkElementIsDisplayedOnPage(loginPage.getDomainField());
			enterTextInField(loginPage.getDomainField(),domain);
			waitForElementToClickable(loginPage.getDomainContinueButton());
			clickOnElemnt(loginPage.getDomainContinueButton());
			checkElementIsDisplayedOnPage(loginPage.getMobileNumberField());
			enterTextInField(loginPage.getMobileNumberField(),mobileNumber);
			enterTextInField(loginPage.getPasswordField(),password);
			waitForElementToClickable(loginPage.getSignInButton());
			clickOnElemnt(loginPage.getSignInButton()); 
		    
		});

		Given("^User is on the Home Page$", () -> {
			waitForElementToClickable(homePage.getListsmenu().get(0));
		    
		});

		Given("^Click on the items from left menu$", () -> {
			clickOnElemnt(homePage.getListsmenu().get(0)); 
		   
		});

		Given("^Click on the items from items Submenu$", () -> {
			waitForElementToClickable(homePage.getListsmenu().get(1));	
			clickOnElemnt(homePage.getListsmenu().get(1));
		});

		Then("^User should be able to click on Create New Item button$", () -> {
		
			waitForElementToClickable(homePage.getCreateItemButton());
			clickOnElemnt(homePage.getCreateItemButton());
		
		    
		});
		
	}

}
