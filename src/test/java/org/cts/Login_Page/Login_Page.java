package org.cts.Login_Page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login_Page {
	
	public Login_Page() {
		PageFactory.initElements(Hooks.driver, this);
	}
	@FindBy(id="select2-registertitle-container")
	private WebElement cus_title;
	@FindBy(id="select2-registertitle-result-vv1d-mr")
	private WebElement title1;
	@FindBy(id="register.firstName")
	private WebElement cus_fname;
	@FindBy(id="register.lastName")
	private WebElement cus_lname;
	@FindBy(id="register.email")
	private WebElement cus_email;
	@FindBy(id="password")
	private WebElement cus_pass;
	@FindBy(id="register.checkPwd")
	private WebElement cus_repass;
	@FindBy(xpath="(//button[@data-widget-location='Registration']")
	private WebElement Cus_button;
	
	public WebElement getTitle1() {
		return title1;
	}
	public WebElement getCus_title() {
		return cus_title;
	}
	
	public WebElement getCus_fname() {
		return cus_fname;
	}
	public WebElement getCus_lname() {
		return cus_lname;
	}
	public WebElement getCus_email() {
		return cus_email;
	}
	public WebElement getCus_pass() {
		return cus_pass;
	}
	public WebElement getCus_repass() {
		return cus_repass;
	}

	public WebElement getCus_button() {
		return Cus_button;
	}

}
