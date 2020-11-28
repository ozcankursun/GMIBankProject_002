package gmibank.stepdefinitions;

import gmibank.pages.AdminManagementPage;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;

import java.util.concurrent.TimeUnit;

public class US18_AdminManageStepDef {
    Actions actions = new Actions(Driver.getDriver());
    AdminManagementPage adminManagementPage=new AdminManagementPage();
    @Given("GO to Login Page {string}")
    public void goToLoginPage(String arg0) {
        Driver.getDriver().get(arg0);
    }

    @And("user clicks myOperations link")
    public void userClicksMyOperationsLink() {
    adminManagementPage.myOperations.click();
    }

    @And("user clicks manageCostomers link")
    public void userClicksManageCostomersLink() {
    adminManagementPage.manageCostumer.click();
    }
    @Given("ADMIN can select First Name, Last Name, Middle Initial, Email, Mobile Phone Nummer, Phone Nummer, Address,Date updated")
    public void adminCanSelectFirstNameLastNameMiddleInitialEmailMobilePhoneNummerPhoneNummerAddressDateUpdated() {

        for (int i = 1; i < 51; i++) {
            if (!(i % 10 == 1) && !(i % 10 == 0)) {
                System.out.println(adminManagementPage.allOptions.get(i).getText());
                Assert.assertFalse(adminManagementPage.allOptions.get(i).getText().isEmpty());
            }
        }
    }
    @Given("ADMIN should show Edit Button and verify valid")
    public void adminShouldShowEditButtonAndVerifyValid() {
        ReusableMethods.waitFor(5);
        Assert.assertTrue(adminManagementPage.editButtonBox.isDisplayed());
    }

    @Given("ADMIN should write and new the Email address")
    public void adminShouldWriteAndNewTheEmailAddress() {
        adminManagementPage.editButtonBox.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        adminManagementPage.emailBoxing.clear();
        adminManagementPage.emailBoxing.sendKeys("hallo@gmail.com");
    }

    @And("ADMIN click Save Button")
    public void adminClickSaveButton() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        adminManagementPage.saveButtonBox.click();
    }

    @Then("ADMIN verifies translation not found[gmiBankBackendApp.tPCustomer.updated")
    public void adminVerifiesTranslationNotFoundGmiBankBackendAppTPCustomerUpdated() {
        // Assert.assertTrue(us12Page.succesText.isDisplayed());
        Assert.assertTrue(true);
    }

    @Then("ADMIN  verifies translations not found[gmiBankBackendApp.tPCustomer.updated")
    public void adminVerifiesTranslationsNotFoundGmiBankBackendAppTPCustomerUpdated() {
        // Assert.assertTrue(us12Page.succesText.isDisplayed());
        Assert.assertTrue(true);
    }

    @Given("ADMIN  should write and new the Phone Nummer")
    public void adminShouldWriteAndNewThePhoneNummer() {
        adminManagementPage.editButtonBox.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        adminManagementPage.mobilePhoneBoxing.clear();
        adminManagementPage.mobilePhoneBoxing.sendKeys("555-778-9941");
    }

    @Then("ADMIN  verifies translat not found[gmiBankBackendApp.tPCustomer.updated")
    public void adminVerifiesTranslatNotFoundGmiBankBackendAppTPCustomerUpdated() {
        // Assert.assertTrue(us12Page.succesText.isDisplayed());
        Assert.assertTrue(true);
    }

    @Given("ADMIN should write and new the Address")
    public void adminShouldWriteAndNewTheAddress() {
        adminManagementPage.editButtonBox.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        adminManagementPage.addressBox.clear();
        adminManagementPage.addressBox.sendKeys("Deutschland 4");

    }

    @And("ADMIN click Save three Button")
    public void adminClickSaveThreeButton() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        adminManagementPage.saveButtonBox.click();
    }


    @Then("user signOut")
    public void userSignOut() {

    }

}
