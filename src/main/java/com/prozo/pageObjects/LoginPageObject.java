package com.prozo.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.prozo.cucumber.steps.BaseSteps;

public class LoginPageObject extends BaseSteps {
	
	 WebDriver driver;

	public LoginPageObject(WebDriver driver)
	{
		this.driver = driver;
		//This initElements method will create all WebElements
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(name="domain")
	private WebElement domainField;
	
	
	@FindBy(xpath="//span[text()='Continue']")
	private WebElement domainContinueButton;
	
	@FindBy(name="email")
	private WebElement mobileNumberField;
	
	
	@FindBy(name="password")
	private WebElement passwordField;
	
	
	@FindBy(xpath="//span[text()='Sign In']")
	private WebElement signInButton;


	public WebElement getDomainField() {
		return domainField;
	}


	public WebElement getDomainContinueButton() {
		return domainContinueButton;
	}


	public WebElement getMobileNumberField() {
		return mobileNumberField;
	}


	public WebElement getPasswordField() {
		return passwordField;
	}


	public WebElement getSignInButton() {
		return signInButton;
	}
	
	
	
	
	
	
	
	
	

}
