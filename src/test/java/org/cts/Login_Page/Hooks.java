package org.cts.Login_Page;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base {
	
	//public static WebDriver driver;
	@Before
	public static WebDriver method1() {
//		 System.setProperty("webdriver.gecko.driver","C:\\Users\\PRATHEEP A\\eclipse-workspace\\Testing1\\driver\\geckodriver (2).exe");
//		   driver=new FirefoxDriver();
//		   return driver;
		WebDriver driver=getDriver();
		return driver;
	}
	@After
	public static void method2() {
		System.out.println("After method executed");
		//quitBrowser();
	}
	
}
