package com.prozo.cucumber.steps;

import java.net.MalformedURLException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.prozo.pageObjects.CreateItemPageObjects;
import com.prozo.pageObjects.HomePageObject;
import com.prozo.pageObjects.LoginPageObject;
import com.prozo.testutlis.DriverManager;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java8.En;
import cucumber.api.java.After;

public class LoginScenarioSteps extends BaseSteps implements En
{
	@Before
	public void setupLoginSteps(Scenario scenario) throws MalformedURLException {
		// initializing the driver
		initializeTheDriver() ;
		loginPage=new LoginPageObject(DriverManager.getDriver());
		homePage=new HomePageObject (DriverManager.getDriver());
		createItempage=new CreateItemPageObjects(DriverManager.getDriver());
	}


public LoginScenarioSteps()
{
	
	
	Given("^User is on the Login page$", () -> {
		checkElementIsDisplayedOnPage(loginPage.getDomainField());
	    
	    
	});

	Given("^Enter the \"([^\"]*)\" name$", (String domain) -> { 
		enterTextInField(loginPage.getDomainField(),domain);
	    
	});

	Given("^Click on the Continue button$", () -> {
		waitForElementToClickable(loginPage.getDomainContinueButton());
		clickOnElemnt(loginPage.getDomainContinueButton());    
	});

	When("^I check for the mobilenumber and password page$", () -> {
		checkElementIsDisplayedOnPage(loginPage.getMobileNumberField());	   	    
	});

	When("^Enter the \"([^\"]*)\" and \"([^\"]*)\"$", (String mobileNumber, String password) -> {
		enterTextInField(loginPage.getMobileNumberField(),mobileNumber);
		enterTextInField(loginPage.getPasswordField(),password);
	    
	});

	When("^Click on the signin button$", () -> {
		waitForElementToClickable(loginPage.getSignInButton());
		clickOnElemnt(loginPage.getSignInButton()); 
	  
	    
	});

	Then("^User should be login into the WCMS portal$", () -> {
		checkElementIsDisplayedOnPage(homePage.getListsmenu().get(0));
		
		System.out.println("User is on Home Page");
	   
	    
	});
	
}
@After
public void teardown(Scenario scenario) {
	if (scenario.isFailed()) {

		// Take a screenshot...
		final byte[] screenshot = ((TakesScreenshot) DriverManager.getDriver()).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");

	}
	System.out.println("test teardown!");
	System.out.println("Closing driver!");
	teardownTheDriver();

}



}
