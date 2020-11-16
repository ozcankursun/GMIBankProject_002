 package gmibank.stepdefinitions;

import gmibank.pages.RegistrationPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.junit.rules.ExpectedException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

 public class RegistrationStepDefinitions {

    RegistrationPage registrationPage=new RegistrationPage();
    @Given("Go to registration page {string}")
    public void go_to_registration_page(String string) {
     Driver.getDriver().get(string);

    }

    @Given("Type a valid SSN {string}")
    public void type_a_valid_SSN(String string) {
    registrationPage.SSN.sendKeys(string);
    }

    @Given("Type firstname {string}")
    public void type_firstname(String string) {
    registrationPage.firstname.sendKeys(string);
    }

    @Given("Type  lastname {string}")
    public void type_lastname(String string) {
    registrationPage.lastname.sendKeys(string);
    }

    @Given("Do not enter anything in address box")
    public void do_not_enter_anything_in_address_box() {
    registrationPage.address.sendKeys("");
    }

    @Given("Type valid mobile phone number {string}")
    public void type_valid_mobile_phone_number(String string) {
    registrationPage.phone.sendKeys(string);
    }

    @Given("Type username {string}")
    public void type_username(String string) {
    registrationPage.username.sendKeys(string);
    }

    @Given("Type  email {string}")
    public void type_email(String string) {
    registrationPage.email.sendKeys(string);

    }

    @Given("Type valid password {string}")
    public void type_valid_password(String string) {
    registrationPage.password.sendKeys(string);
    }

    @Given("Type valid  password confirmation {string}")
    public void type_valid_password_confirmation(String string) throws InterruptedException {
    registrationPage.confirm.sendKeys(string);

    }

    @Given("Click register button")
    public void click_register_button() {
    registrationPage.button.click();
    }

    @Then("Verify the user register is not success")
    public void verify_the_user_register_is_not_success() {
    WebDriverWait wait=new WebDriverWait(Driver.getDriver(),10);
    boolean verify=wait.until(ExpectedConditions.textToBe(By.cssSelector(".Toastify__toast-body"),"translation-not-found[error.ssnexists]"));
    Assert.assertTrue(verify);
    }

    @Given("Type address {string}")
    public void type_address(String string) {
    registrationPage.address.sendKeys(string);
    }

    @Given("Do not enter anything in  mobile phone number text box")
    public void do_not_enter_anything_in_mobile_phone_number_text_box() {
    registrationPage.phone.sendKeys("");
    }



    @Given("Do not enter anything in  last name text box")
    public void do_not_enter_anything_in_last_name_text_box() {
    registrationPage.lastname.sendKeys("");
    }

    @Given("Type mobile phone number {string}")
    public void type_mobile_phone_number(String string) {
    registrationPage.phone.sendKeys(string);
    }


    @And("Type  username {string}")
    public void typeUsername(String arg0) {
    registrationPage.username.sendKeys(arg0);
    }

    @And("Type email {string}")
    public void typeEmail(String arg0) throws InterruptedException {
        Thread.sleep(5000);
    registrationPage.email.sendKeys(arg0);
    }

    @Then("Verify the message {string}")
    public void verifyTheMessage(String arg0) {
        WebDriverWait wait=new WebDriverWait(Driver.getDriver(),5);
        WebElement message=wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[.='Your Last Name is required']")));
        String verify=message.getText();
       System.out.println(verify);
       boolean content=verify.contains("Your Last Name is required");
        Assert.assertTrue(content);
    }
}
