package gmibank.stepdefinitions;

import gmibank.pages.HomePage;
import gmibank.pages.LoginPage;
import gmibank.pages.ManageAccountPage;
import gmibank.pages.ManageCustomerPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;

    public class US12_TC01_ManCustStepDefinitions {
        LoginPage loginPage=new LoginPage();
        HomePage homePage = new HomePage();
        ManageCustomerPage manageCustomerPage = new ManageCustomerPage();

        @Given("Go to the GMIBank sign in page")
        public void go_to_the_GMIBank_sign_in_page() {
            Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_login_url"));
        }

        @Given("Type username and password then click on sign in button")
        public void type_username_and_password_then_click_on_sign_in_button() {
            loginPage.username.sendKeys(ConfigurationReader.getProperty("username_employee"));
            loginPage.password.sendKeys(ConfigurationReader.getProperty("password_employee"));
            loginPage.signInButton.click();

        }

        @Given("Click the Manage Customers button")
        public void click_the_Manage_Customers_button() {
            homePage.manageCustomer.click();
        }

        @Given("Click the button to last page")
        public void click_the_button_to_last_page() {
            manageCustomerPage.lastpagebutton.click();

        }

        @Then("On the customer page, the user should see the customer's First Name")
        public void on_the_customer_page_the_user_should_see_the_customer_s_First_Name() {
            boolean firstName = manageCustomerPage.firstNameText.isDisplayed();
            System.out.println(firstName);
        }
        @Then("On the customer page, the user should see the customer's Last Name")
        public void on_the_customer_page_the_user_should_see_the_customer_s_Last_Name() {
            boolean lastName = manageCustomerPage.lastNameText.isDisplayed();
            System.out.println(lastName);
        }
        @Then("On the customer page, the user should see the customer's Middle Initial")
        public void on_the_customer_page_the_user_should_see_the_customer_s_Middle_Initial() {
            boolean middleInitial = manageCustomerPage.middleInitialText.isDisplayed();
            System.out.println(middleInitial);

        }
        @Then("on the customer page, the user should see the customer's Email")
        public void on_the_customer_page_the_user_should_see_the_customer_s_Email() {
            boolean email = manageCustomerPage.emailText.isDisplayed();
            System.out.println(email);

        }
        @Then("On the customer page, the user should see the customer's Mobile Phone Number")
        public void on_the_customer_page_the_user_should_see_the_customer_s_Mobile_Phone_Number() {
            boolean mobilePhoneNumber = manageCustomerPage.mobilPhoneNumberText.isDisplayed();
            System.out.println(mobilePhoneNumber);

        }
        @Then("On the customer page, the user should see the customer's Phone Number")
        public void on_the_customer_page_the_user_should_see_the_customer_s_Phone_Number() {
            boolean phoneNumber = manageCustomerPage.phoneNumberText.isDisplayed();
            System.out.println(phoneNumber);

        }
        @Then("on the customer page, the user should see the customer's Address")
        public void on_the_customer_page_the_user_should_see_the_customer_s_Address() {
            boolean address = manageCustomerPage.addressText.isDisplayed();
            System.out.println(address);

        }
        @Then("On the customer page, the user should see the customer's Create Date")
        public void on_the_customer_page_the_user_should_see_the_customer_s_Create_Date() {
            boolean createDate = manageCustomerPage.createDateText.isDisplayed();
            System.out.println(createDate);

        }


}




















