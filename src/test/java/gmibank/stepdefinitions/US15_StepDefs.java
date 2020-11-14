package gmibank.stepdefinitions;

import gmibank.pages.ManageAccountPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class US15_StepDefs {
    ManageAccountPage createAccountPage = new ManageAccountPage();

    @Given("Click an ID item to choose an account created on manage accounts")
    public void click_an_ID_item_to_choose_an_account_created_on_manage_accounts() {
        createAccountPage.firstIDitem.click();
    }

    @Then("Verify Account")
    public void verify_Account() {
        System.out.println("Feature");
        System.out.println("18:01");
        System.out.println("18:12 - featuredan");
        String accountInf = createAccountPage.accountInformation.getText();
        Assert.assertTrue(accountInf.equals("Account"));

    }

}
