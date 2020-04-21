package Login9gag.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
	WebDriver driver;
	
	public LoginPage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public void getPage()
	{
		driver.get("https://9gag.com/login");
	}
	
	public void closePopUp()
	{
		try {
			WebDriverWait wait = new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("popup_content--2JBXA")));
			driver.findElement(By.xpath("/html/body/div[7]/div[1]/div[2]/div/div[3]/button[2]")).click();
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}
	
	public void putUsername(String username)
	{
		try {
			driver.findElement(By.id("login-email-name")).clear();
			driver.findElement(By.id("login-email-name")).sendKeys(username);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putPassword(String password)
	{
		try {
			driver.findElement(By.id("login-email-password")).clear();
			driver.findElement(By.id("login-email-password")).sendKeys(password);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void ClickLogin()
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
	
	public boolean successfulPage()
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
	
	public boolean unsuccessfulPage()
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
