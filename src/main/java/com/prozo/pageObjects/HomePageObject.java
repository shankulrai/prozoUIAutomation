package com.prozo.pageObjects;



import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.prozo.cucumber.steps.BaseSteps;

public class HomePageObject extends BaseSteps {
	 WebDriver driver;
	
	public HomePageObject(WebDriver driver)
	{
		this.driver = driver;
		//This initElements method will create all WebElements
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//span[text()='Items']")
	private List<WebElement> listsmenu;
	
	@FindBy(xpath="//span[text()='Create New Item']")
	private WebElement createItemButton;

	public List<WebElement> getListsmenu() {
		return listsmenu;
	}

	public WebElement getCreateItemButton() {
		return createItemButton;
	}
	
	

}
