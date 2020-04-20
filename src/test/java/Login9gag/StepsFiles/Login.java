package Login9gag.StepsFiles;

import org.openqa.selenium.WebDriver;

import Login9gag.Pages.LoginPage;
//import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.testng.Assert.assertEquals;


public class Login{
	WebDriver driver;
	LoginPage page = new LoginPage();
	
	
	@Before
	public void readBrowser()
	{
		driver = page.readBrowser(driver);
	}
	
	@Given("User navigates to 9gag login website")
	public void user_navigates_to_website() 
	{
		page.getPage(driver);	
	}

	@And("User closes the pop up message")
	public void user_closes_the_pop_up_message() 
	{
		page.closePopUp(driver);
	}

	@And("User enters a username:([^\\\"]*)$")
	public void user_enters_a_username(String username) 
	{
		page.putUsername(driver, username);
	}

	@And("User enters a password:([^\\\"]*)$")
	public void user_enters_a_password(String password) 
	{
		page.putPassword(driver, password);
	}

	@When("User clicks on the login button")
	public void user_clicks_on_the_login_button() 
	{
		page.ClickLogin(driver);
	}

	@Then("User should be taken to successful login page")
	public void user_should_be_taken_to_successful_login_page() 
	{	
		assertEquals(true, page.successfulPage(driver));
	}
	
	@Then("User should be taken to unsuccessful login page")
	public void user_should_be_taken_to_unsuccessful_login_page() 
	{	
		assertEquals(true, page.unsuccessfulPage(driver));
	}
	
	@After
	public void TearDown()
	{
	    if (driver != null)
	    {
	    	driver.manage().deleteAllCookies();
	    	driver.quit();
	    }
	        
	}
}