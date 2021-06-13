package com.prozo.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.prozo.cucumber.steps.BaseSteps;



public class CreateItemPageObjects extends BaseSteps 
{
	WebDriver driver;

	public CreateItemPageObjects(WebDriver driver)
	{
		this.driver = driver;
		//This initElements method will create all WebElements
		PageFactory.initElements(driver, this);
	}

	@FindBy(name="name")
	private WebElement nameTextField;

	@FindBy(name="length")
	private WebElement lengthTextField;

	@FindBy(name="width")
	private WebElement breadthTextField;

	@FindBy(name="height")
	private WebElement hieghtTextField;



	@FindBy(id="client-snackbar")
	private WebElement errorMessage;




	public WebElement getErrorMessage() {
		return errorMessage;
	}

	@FindBy(xpath="//span[text()='Save']")
	private WebElement saveButton;

	public WebElement getNameTextField() {
		return nameTextField;
	}


	public WebElement getLengthTextField() {
		return lengthTextField;
	}


	public WebElement getBreadthTextField() {
		return breadthTextField;
	}


	public WebElement getHieghtTextField() {
		return hieghtTextField;
	}


	public WebElement getSaveButton() {
		return saveButton;
	}












}
