package com.prozo.cucumber.steps;

import cucumber.api.java8.En;

public class CreateItemSteps  extends BaseSteps implements En {
	
	public CreateItemSteps()
	{
		Given("^Navigate to the Create Items Page$", () -> {
			waitForElementToClickable(homePage.getListsmenu().get(0));
			clickOnElemnt(homePage.getListsmenu().get(0)); 
			waitForElementToClickable(homePage.getListsmenu().get(1));	
			clickOnElemnt(homePage.getListsmenu().get(1));
			waitForElementToClickable(homePage.getCreateItemButton());
			clickOnElemnt(homePage.getCreateItemButton());
		});

		Then("^submit the blank form user should not allowed to proceed further$", () -> {
			clickOnElemnt(createItempage.getSaveButton()); 
			
			// On clicking Save if form proceeds to next step below Step will fail
			enterTextInField(createItempage.getNameTextField(),"Name Of the Item");
		    
		});

		Given("^enter the char value should not be allowed in Hieght,wieght,length and breath filds$", () -> {
			enterTextInField(createItempage.getLengthTextField(),"abc");
			enterTextInField(createItempage.getBreadthTextField(),"xyz");
			enterTextInField(createItempage.getHieghtTextField(),"tuv");
		});

		Given("^Click on save button$", () -> {
			waitForElementToClickable(createItempage.getSaveButton());
			clickOnElemnt(createItempage.getSaveButton()); 
		    
		});

		Then("^Error should be thrown$", () -> {
		    // Currently No FE validation is there unable to execute this step
	
		});
	}

}
