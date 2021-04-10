package com.qa.pages;

import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase{
	
	
	//Page Factory - OR(Object Repository)
	    @FindBy(xpath="/html/body/div[3]/div/div/section[2]/button")
	    WebElement closepopup;
	
		@FindBy(xpath="//*[@id=\"root\"]/div/div/div/div[2]/div/div[3]/div[2]/div[1]/button")
		WebElement account;
		
		@FindBy(css="input[aria-label='Email'][id='email']")
		WebElement username;
		
		@FindBy(css="input[aria-label='Password'][id='password']")
		WebElement password;
		
		@FindBy(css="/html/body/div[3]/div/div/section[2]/button")
		WebElement closesigninpopup;
		
		@FindBy(xpath="//*[@id=\"root\"]/div/div/div/div[2]/div/div[2]/a/img")
		WebElement expressLogo; 
		
		
		
		//Initializing the Page Objects
		public LoginPage() {
			PageFactory.initElements(driver, this); // LoginPage.class
		}
		
		//Actions:
		public String validateLoginPageTitle() {
			return driver.getTitle();
		}
		
		public boolean validateexpressimage() {
			return expressLogo.isDisplayed(); 
		} 
		
		public MensPage login(String un, String pwd) throws InterruptedException{
			closepopup.click();
			account.click();
			username.sendKeys(un);
			password.sendKeys(pwd);
			closesigninpopup.click();
			Thread.sleep(3000);
			//loginBtn.click();
			JavascriptExecutor js=(JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", closesigninpopup);
			
			return new MensPage();
			
		}

}
