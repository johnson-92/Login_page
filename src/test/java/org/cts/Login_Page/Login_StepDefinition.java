package org.cts.Login_Page;

import java.awt.Robot;
import java.awt.event.KeyEvent;

//import org.cts.testing2.Stepdefinition.Hooks;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_StepDefinition {
	@Given("The user should be wilko homepage and click the accout")
	public void the_user_should_be_wilko_homepage_and_click_the_accout() {
	  System.out.println("given-1");
		Hooks.driver.get("https://www.wilko.com/");
		Hooks.driver.manage().window().maximize();
		Hooks.driver.findElement(By.xpath("//a[text()='Account']")).click();
	}

	@When("User should fill the required info and click submit {string},{string},{string},{string},{string}")
	public void user_should_fill_the_required_info_and_click_submit(String Fname, String Lname, String Email, String Password, String Repassword) throws Throwable {
	   System.out.println("when-1");
	   Login_Page lp=new Login_Page();
	   lp.getCus_title().click();
	   Thread.sleep(30);
	 
	   //ac.moveToElement(lp.getTitle1()).perform();
	   Robot r=new Robot();
	   for(int i=1;i<=2;i++)
	  {
	   r.keyPress(KeyEvent.VK_DOWN);
	   r.keyRelease(KeyEvent.VK_DOWN); 
	  }
	   r.keyPress(KeyEvent.VK_ENTER);
	   r.keyRelease(KeyEvent.VK_ENTER);
	   Thread.sleep(5000);
	   lp.getCus_fname().sendKeys(Fname);
	   lp.getCus_lname().sendKeys(Lname);
	   lp.getCus_email().sendKeys(Email);
	   lp.getCus_pass().sendKeys(Password);
	   lp.getCus_repass().sendKeys(Repassword);
	   r.keyPress(KeyEvent.VK_TAB);
	   r.keyRelease(KeyEvent.VK_TAB); 
	   r.keyPress(KeyEvent.VK_ENTER);
	   r.keyRelease(KeyEvent.VK_ENTER);
	   lp.getCus_button().click();
	}

	@Then("Validate if user is register or not")
	public void validate_if_user_is_register_or_not() {
	   System.out.println("then-1");
	   WebElement hometxt = Hooks.driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']"));
		String optxt = hometxt.getText();
		System.out.println(optxt);
	}



}
