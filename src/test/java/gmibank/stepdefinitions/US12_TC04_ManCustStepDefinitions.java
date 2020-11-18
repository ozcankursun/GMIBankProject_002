package gmibank.stepdefinitions;

import gmibank.pages.HomePage;
import gmibank.pages.LoginPage;
import gmibank.pages.ManageCustomerPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.support.ui.Select;

public class US12_TC04_ManCustStepDefinitions {
    LoginPage loginPage = new LoginPage();
    HomePage homePage =new HomePage();
    ManageCustomerPage manageCustomerPage = new ManageCustomerPage();

    @Given("Click on Edit button")
    public void click_on_Edit_button() {
        manageCustomerPage.editButton.click();

    }

    @Given("Click on the customer First Name textbox and type a new First Name")
    public void click_on_the_customer_First_Name_textbox_and_type_a_new_First_Name() {
        manageCustomerPage.firstNameBox.sendKeys("Joe");
    }

    @Given("Click on the customer Last Name textbox and type a new Last Name")
    public void click_on_the_customer_Last_Name_textbox_and_type_a_new_Last_Name() {
        manageCustomerPage.lastNameBox.sendKeys("Biden");
    }

    @Given("Click on the customer Middle Initial textbox and type a new Middle Initial")
    public void click_on_the_customer_Middle_Initial_textbox_and_type_a_new_Middle_Initial() {
        manageCustomerPage.middleInitialBox.sendKeys("Eddie");

    }

    @Given("Click on the customer Email textbox and type a new Email")
    public void click_on_the_customer_Email_textbox_and_type_a_new_Email() {
        manageCustomerPage.emailBox.sendKeys("joebiden@gmail.com");

    }

    @Given("Click on the customer Mobile Phone Number textbox and type a new Mobile Phone Number")
    public void click_on_the_customer_Mobile_Phone_Number_textbox_and_type_a_new_Mobile_Phone_Number() {
        manageCustomerPage.mobilePhoneNumberBox.sendKeys("16978524556");

    }

    @Given("Click on the customer Phone Number textbox and type a new Phone Number")
    public void click_on_the_customer_Phone_Number_textbox_and_type_a_new_Phone_Number() {
        manageCustomerPage.phoneNumberBox.sendKeys("1264332555");

    }

    @Given("Click on the customer Zip Code textbox and type a new Zip Code")
    public void click_on_the_customer_Zip_Code_textbox_and_type_a_new_Zip_Code() {
        manageCustomerPage.zipCode.sendKeys("15872");

    }

    @Given("Click on the customer Address textbox and type a new Address")
    public void click_on_the_customer_Address_textbox_and_type_a_new_Address() {
        manageCustomerPage.addressBox.sendKeys("Victoria street No:56");

    }

    @Given("Click on the customer City textbox and type a new City")
    public void click_on_the_customer_City_textbox_and_type_a_new_City() {
        manageCustomerPage.cityBox.sendKeys("Buffalo");

    }

    @Given("Click on the customer Ssn textbox and type a new Ssn number")
    public void click_on_the_customer_Ssn_textbox_and_type_a_new_Ssn_number() {
        manageCustomerPage.ssnTextBox.sendKeys("483-52-3817");

    }

    @Given("Click on the customer Create Date textbox and type a new Create Date")
    public void click_on_the_customer_Create_Date_textbox_and_type_a_new_Create_Date() {
        manageCustomerPage.createDateBox.sendKeys("11/18/2020 07:00 AM");

    }

    @Given("Click on the customer Country dropdown and type a new Country")
    public void click_on_the_customer_Country_dropdown_and_type_a_new_Country() {
      Select country = new Select(manageCustomerPage.countryDropdown);
      country.selectByIndex(0);

    }

    @Given("Click on the customer State textbox and type a new State")
    public void click_on_the_customer_State_textbox_and_type_a_new_State() {
        manageCustomerPage.stateBox.sendKeys("New York");

    }

    @Given("Click on the customer User dropdown and type a new User")
    public void click_on_the_customer_User_dropdown_and_type_a_new_User() {
        Select user = new Select(manageCustomerPage.userBox);
        user.selectByIndex(1);
    }

    @Given("Select an account status type from the Customer Account Status Type dropdown")
    public void select_an_account_status_type_from_the_Customer_Account_Status_Type_dropdown() {
        Select account = new Select(manageCustomerPage.statusDropdown);
        account.selectByIndex(19);

    }

    @Given("Click on Zelle Enrolled")
    public void click_on_Zelle_Enrolled() {
        manageCustomerPage.zelleEnrolledRadButton.click();

    }

    @Given("Click on Save button")
    public void click_on_Save_button() {
        manageCustomerPage.saveButton.click();

    }

    @Then("The user should see a message confirming that they have saved the edited information.")
    public void the_user_should_see_a_message_confirming_that_they_have_saved_the_edited_information() {
        Boolean confirmMessage = manageCustomerPage.confirmMessage.isDisplayed();
        System.out.println("Edit button confirm message: " + confirmMessage);

    }
}
