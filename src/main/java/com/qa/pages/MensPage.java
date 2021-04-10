package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class MensPage extends TestBase{
	
	@FindBy(css="a[href='/mens-clothing']")
	WebElement clickmenspage;
	
	public MensPage() {
		PageFactory.initElements(driver, this);
	}
	
	public SweatersPage openSweaterPage() {
		clickmenspage.click();
		
		return new SweatersPage();
	}
	
	

}
