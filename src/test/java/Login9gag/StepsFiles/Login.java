package Login9gag.StepsFiles;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


//import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.testng.Assert.assertEquals;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


public class Login extends DriverSetUp{
	WebDriver driver;
	WebElement popUp;
	BufferedReader reader;
	//String username, password;
	boolean finish = false;
	JSONParser jsonParser = new JSONParser();
	
	/*
	public void readUserData()
	{	
		driver = driverSetUp("");
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Login9gag\\Resources\\loginData.json"));
        	JSONObject jsonObject = (JSONObject) obj;
 
			username = (String) jsonObject.get("username");
			password = (String) jsonObject.get("password"); 
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }}
    //Text file reader
		try {
			reader = new BufferedReader(new FileReader("src\\test\\java\\Login9gag\\Resources\\loginData.txt"));
			username = reader.readLine();
			password = reader.readLine();
			System.out.println(username + " " + password);
		}
		catch(IOException ex)
		{
			ex.printStackTrace();
		}
	}*/
	
	@Before
	public void readBrowser()
	{	
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Login9gag\\Resources\\browser.json"));
        	JSONObject jsonObject = (JSONObject) obj;
        	driver = driverSetUp((String) jsonObject.get("browser"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }}
       /*//Text file reader
		try {
			reader = new BufferedReader(new FileReader("\src\\test\\java\\CucumberTest\\Resources\\browser.txt"));
			driver = driverSetUp(reader.readLine());
		}
		catch(IOException ex)
		{
			ex.printStackTrace();
		}
	}*/
	
	@Given("User navigates to 9gag login website")
	public void user_navigates_to_website() 
	{
		driver.get("https://9gag.com/login");	
	}

	@And("User closes the pop up message")
	public void user_closes_the_pop_up_message() 
	{
		try {
			Thread.sleep(2000);
			popUp = driver.findElement(By.className("popup_content--2JBXA"));
			if(popUp.isDisplayed())
			{
				driver.findElement(By.xpath("/html/body/div[7]/div[1]/div[2]/div/div[3]/button[2]")).click();
			}
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@And("User enters a username:([^\\\"]*)$")
	public void user_enters_a_username(String username) 
	{
		try {
			driver.findElement(By.id("login-email-name")).clear();
			driver.findElement(By.id("login-email-name")).sendKeys(username);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@And("User enters a password:([^\\\"]*)$")
	public void user_enters_a_password(String password) 
	{
		try {
			driver.findElement(By.id("login-email-password")).clear();
			driver.findElement(By.id("login-email-password")).sendKeys(password);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@When("User clicks on the login button")
	public void user_clicks_on_the_login_button() 
	{
		try {
			popUp = driver.findElement(By.id("signup"));
			if(popUp.isDisplayed())
			{
				driver.findElement(By.xpath("//*[@id=\"login-email\"]/div[3]/input")).click();
			}
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Then("User should be taken to successful login page")
	public void user_should_be_taken_to_successful_login_page() 
	{	
		try {
			if(driver.findElement(By.id("jsid-upload-btn")).isDisplayed())
				finish = true;
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		assertEquals(true, finish);
	}
	
	@Then("User should be taken to unsuccessful login page")
	public void user_should_be_taken_to_unsuccessful_login_page() 
	{	
		try {
			if(driver.findElement(By.xpath("//*[@id=\"login-email\"]/div[2]/p")).isDisplayed())
				finish = true;
			assertEquals(true, finish);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/*
	@After
	public void TearDown()
	{
	    if (driver != null)
	    {
	    	driver.manage().deleteAllCookies();
	    	driver.quit();
	    }
	        
	}*/
}