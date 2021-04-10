package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class SweatersPage extends TestBase {
	
	@FindBy(xpath="a[aria-label='MENS SWEATERS']")
	WebElement clicksweaters;
	
	public SweatersPage() {
		PageFactory.initElements(driver, clicksweaters);
	}
	
	public SweatersPage openSweaterPage() {
		clicksweaters.click();
		return new SweatersPage();
	}

}
