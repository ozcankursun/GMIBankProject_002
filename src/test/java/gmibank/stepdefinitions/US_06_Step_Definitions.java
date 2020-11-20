package gmibank.stepdefinitions;



import gmibank.pages.LoginPage;
import gmibank.pages.US_06_Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;


public class US_06_Step_Definitions {

    US_06_Page us_06_page = new US_06_Page();
    LoginPage loginPage = new LoginPage();


    @Given("the login page")
    public void the_login_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_login_url"));
    }


    @Given("username and password")
    public void username_and_password() {
        loginPage.username.sendKeys(ConfigurationReader.getProperty("username_info"));
        loginPage.password.sendKeys(ConfigurationReader.getProperty("password_info"));
    }

    @And ("signIn button")
    public void signIn_button() {

        loginPage.signInButton.click();
    }


    @And("Click to User drop down menu")
    public void clickToUserDropDownMenu() {

        us_06_page.userDropDown.click();
    }

    @And("Click to Sign in")
    public void clickToSignIn() {

        us_06_page.signInButton.click();
    }

    @And("Click to User info")
    public void clickToUserInfo() {

        us_06_page.userInfo.click();
    }

    @And("Click-on first name box")
    public void Click_on_first_name_box() {
        Assert.assertTrue(us_06_page.firstName.isDisplayed());
    }

    @And("Click on last name box")
    public void Click_on_last_name_box() {
        Assert.assertTrue(us_06_page.lastName.isDisplayed());
    }

    @And("Click on UserInfoEmail")
    public void Click_on_UserInfoEmail() {
        Assert.assertTrue(us_06_page.UserInfoEmail.isDisplayed());
    }

    @And("Language dropdown")
    public void Language_dropdown() {
      us_06_page.languageDropDown.click();

    }


    @And("Language dropdown is have English.")
    public void Language_dropdown_is_have_English() {
       us_06_page.langEnglish.click();
    }

    @And ("save button_box")
        public void save_button_box(){
        us_06_page.saveButton.click();

        }

    @Then("You should see Save Settings")
    public void You_should_see_Save_Settings(){
      us_06_page.saveAlert.click();
    }


}




