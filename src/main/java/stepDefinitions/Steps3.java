package stepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps3 {
	
	WebDriver driver;
	WebDriverWait wait;
	
	@Given("^user is on SFDC login page$")
	public void user_is_on_SFDC_login_page() {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\PURSUITUSER\\chromedriver_win32\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    driver.get("https://cadence.oktapreview.com/login/default");
	    
	}

	@When("^user enter correct credentials$")
	public void user_enter_correct_useranme_and_correct_password(DataTable maps) throws InterruptedException {
		//List<List<String>> ls = 
		for(Map<String, String> mp : maps.asMaps(String.class, String.class)) {
			driver.findElement(By.xpath("//input[@id = 'okta-signin-username']")).clear();
			driver.findElement(By.xpath("//input[@id = 'okta-signin-password']")).clear();
			driver.findElement(By.xpath("//input[@id = 'okta-signin-username']")).sendKeys(mp.get("Username"));
		    driver.findElement(By.xpath("//input[@id = 'okta-signin-password']")).sendKeys(mp.get("Password"));
		    Thread.sleep(2000);
		}
				
		driver.findElement(By.xpath("//input[@id = 'okta-signin-submit']")).click();
	    wait = new WebDriverWait(driver, 30);
	    wait.until(ExpectedConditions.titleContains("Cadence Design Systems - Preview - My Applications"));
	    driver.navigate().to("https://cadence--tst.my.salesforce.com/home/home.jsp");	    
	   
	    
	}

	@Then("^sfdc home page appears$")
	public void sfdc_home_page_appears() {
		//if(username.equals("InternalCosSupportAdmin")) 
			wait.until(ExpectedConditions.titleContains("Salesforce - Unlimited Edition"));
		
//		else 
//	    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//p[text()='Unable to sign in']")));
	    
		
	}

	@Then("^user waits for some$")
	public void user_waits_for_some() throws InterruptedException {
	    Thread.sleep(2000);
	    
	}

	@Then("^user close the login page$")
	public void user_close_the_login_page() {
	    driver.close();
	    
	}


}
