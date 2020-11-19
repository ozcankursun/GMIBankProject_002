package gmibank.stepdefinitions;

import gmibank.pages.HomePage;
import gmibank.pages.LoginPage;
import gmibank.pages.ManageCustomerPage;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class US12_TC05_ManCustStepDefinitions {
    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();
    ManageCustomerPage manageCustomerPage = new ManageCustomerPage();


    @Given("Click on Delete button")
    public void click_on_Delete_button() {
        manageCustomerPage.deleteButton.click();

    }

    @Given("The user should see the message -Are you sure you want to delete Customer ....?- on the Confirm delete operation popup")
    public void the_user_should_see_the_message_Are_you_sure_you_want_to_delete_Customer_on_the_Confirm_delete_operation_popup() {
        Driver.getDriver().switchTo().alert().getText();
    }

    @Given("Click on Delete button in Popup window")
    public void click_on_Delete_button_in_Popup_window() {
        Driver.getDriver().switchTo().alert().accept();

    }

    @Then("The user should not see error message")
    public void the_user_should_not_see_error_message() {
        boolean message = manageCustomerPage.errorMessage.isDisplayed();
        System.out.println("The user should not see error message: "+message);

    }

}
