package com.qa.stepDefinition;

import org.junit.Assert;
import com.qa.pages.LoginPage;
import com.qa.pages.MensPage;
import com.qa.util.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageSteps extends TestBase{
	
	LoginPage loginpage;
	MensPage mensPage;
	
	@Given("^user open browser$")
	public void user_open_browser() throws Throwable {
		TestBase.initialization();
	
	}

	@Then("^user is on login Page$")
	public void user_is_on_login_Page() throws Throwable {
		loginpage =new LoginPage();
		String title=loginpage.validateLoginPageTitle();
		Assert.assertEquals("Men's and Women's Clothing - Shop jeans, dresses, and suits", title);
		
    }

	@Then("^user enters username and password$")
	public void user_enters_username() throws Throwable {
		loginpage =new LoginPage();
		mensPage=loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
	}

	
    @Then("^home page is displayed$")
	public void home_page_is_displayed() throws Throwable {
 
	  
	}

	@Then("^close popup$")
	public void close_popup() throws Throwable {
		
	  
	}
	
	@Then("^user able to see HomePage and click on Mens Page$")
	public void user_able_to_see_HomePage_and_click_on_Mens_Page() throws Throwable {
	   
	}
	
	@Then("^user able to click on sweaters$")
	public void user_able_to_click_on_sweaters() throws Throwable {
	   
	}

	@Then("^click Sweater page$")
	public void click_Sweater_page() throws Throwable {
	   
	}
}
