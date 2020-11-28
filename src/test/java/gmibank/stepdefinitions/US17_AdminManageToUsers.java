package gmibank.stepdefinitions;

import gmibank.pages.AdminManageToUsersPage;
import gmibank.pages.LoginPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.WebElement;
import sun.rmi.runtime.Log;

public class US17_AdminManageToUsers {


    AdminManageToUsersPage adminManageToUsersPage = new AdminManageToUsersPage();
    LoginPage loginPage = new LoginPage();


    @Given("Go to the login page")
    public void go_to_the_login_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_login_url"));
    }

    @Given("Click on the username")
    public void click_on_the_username() {
        loginPage.username.sendKeys(ConfigurationReader.getProperty("username_admin"));
    }

    @Given("Click on the password")
    public void click_on_the_password() {
        loginPage.password.sendKeys(ConfigurationReader.getProperty("password_admin"));
    }

    @Given("Click on the sign in button")
    public void click_on_the_sign_in_button() {
        loginPage.signInButton.click();

    }

    @Given("click on administration")
    public void click_on_administration() {
        adminManageToUsersPage.administrationButton1.click();
    }

    @Given("click on user management")
    public void click_on_user_management() {
        adminManageToUsersPage.userManagement1.click();
    }


    @Given("find team02@gmail.com mail on the page")
    public void find_team02_gmail_com_mail_on_the_page() {
        adminManageToUsersPage.button31.click();
        adminManageToUsersPage.button30.click();
        adminManageToUsersPage.button29.click();
        adminManageToUsersPage.button28.click();
        adminManageToUsersPage.button27.click();
    }



    @Then("activate  team02@gmail.com mail")
    public void activate_team02_gmail_com_mail() {
        adminManageToUsersPage.activateButton1.click();
    }

    }
