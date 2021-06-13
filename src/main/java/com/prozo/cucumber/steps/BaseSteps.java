package com.prozo.cucumber.steps;

import java.net.MalformedURLException;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.prozo.cucumber.tests.RunCucumberFeatures;
import com.prozo.pageObjects.CreateItemPageObjects;
import com.prozo.pageObjects.HomePageObject;
import com.prozo.pageObjects.LoginPageObject;
import com.prozo.testutlis.DriverFactory;
import com.prozo.testutlis.DriverManager;



public class BaseSteps extends RunCucumberFeatures{


	public static WebDriver driver;
	public static LoginPageObject loginPage;
	public static HomePageObject homePage;
	public static CreateItemPageObjects createItempage;


	public void initializeTheDriver() throws MalformedURLException {


		driver = new DriverFactory().createDriverInstance(configProperty.getProperty("browserName"),configProperty.getProperty("baseUrl"),configProperty.getProperty("chromeDriverExeFile"));
		DriverManager.setDriver(driver);
		DriverManager.setImplicitWait();
	}


	public void checkElementIsDisplayedOnPage(WebElement element)
	{
		//checking for element is Displayed on page
		element.isDisplayed();

	}


	public void clickOnElemnt(WebElement element)
	{
		// method for clicking a web element
		element.click();
	}

	public void enterTextInField(WebElement element,String text)
	{
		// method for entering text in textField
		element.sendKeys(text);

	}

	public void waitForElementToClickable(WebElement element)
	{
		WebDriverWait wait=new WebDriverWait(DriverManager.getDriver(), 30);
		wait.until(ExpectedConditions.elementToBeClickable(element));

	}


	public String getTextFromElement(WebElement element)
	{
		// getTextFromTheWebElemnt
		String textofElement=element.getText();
		return textofElement;


	}



	protected void teardownTheDriver() {

		try {
			DriverManager.closeDriver(DriverManager.getDriver());
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	



}
