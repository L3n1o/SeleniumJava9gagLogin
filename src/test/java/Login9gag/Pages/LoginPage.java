package Login9gag.Pages;

import Login9gag.DriverSetUp.DriverSetUp;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
	JSONParser jsonParser = new JSONParser();
	BufferedReader reader;
	DriverSetUp driverSetUp = new DriverSetUp();
	//String username, password;
	
	
	public WebDriver readBrowser(WebDriver driver)
	{	
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Login9gag\\Resources\\browser.json"));
        	JSONObject jsonObject = (JSONObject) obj;
        	driver = driverSetUp.driverSetUp(driver, (String) jsonObject.get("browser"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return driver;
	}
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
	
	
	public void getPage(WebDriver driver)
	{
		driver.get("https://9gag.com/login");
	}
	
	public void closePopUp(WebDriver driver)
	{
		try {
			WebDriverWait wait = new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("popup_content--2JBXA")));
			driver.findElement(By.xpath("/html/body/div[7]/div[1]/div[2]/div/div[3]/button[2]")).click();
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}
	
	public void putUsername(WebDriver driver, String username)
	{
		try {
			driver.findElement(By.id("login-email-name")).clear();
			driver.findElement(By.id("login-email-name")).sendKeys(username);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putPassword(WebDriver driver, String password)
	{
		try {
			driver.findElement(By.id("login-email-password")).clear();
			driver.findElement(By.id("login-email-password")).sendKeys(password);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void ClickLogin(WebDriver driver)
	{
		try {
			WebElement popUp = driver.findElement(By.id("signup"));
			if(popUp.isDisplayed())
			{
				driver.findElement(By.xpath("//*[@id=\"login-email\"]/div[3]/input")).click();
			}
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public boolean successfulPage(WebDriver driver)
	{
		try {
			if(driver.findElement(By.id("jsid-upload-btn")).isDisplayed())
				return true;
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;		
	}	
	
	public boolean unsuccessfulPage(WebDriver driver)
	{
		try {
			if(driver.findElement(By.xpath("//*[@id=\"login-email\"]/div[2]/p")).isDisplayed())
				return true;
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;		
	}

}
