package gmibank.stepdefinitions;

import gmibank.pages.HomePage;
import gmibank.pages.LoginPage;
import gmibank.pages.ManageCustomerPage;
import io.cucumber.java.en.Then;

public class US12_TC03_ManCustStepDefinitions {
    LoginPage loginPage=new LoginPage();
    HomePage homePage = new HomePage();
    ManageCustomerPage manageCustomerPage = new ManageCustomerPage();

    @Then("there should be an Edit button")
    public void there_should_be_an_Edit_button() {
        boolean editButton = manageCustomerPage.editButton.isDisplayed();
        System.out.println("Edit button seen" + editButton);
    }

}
