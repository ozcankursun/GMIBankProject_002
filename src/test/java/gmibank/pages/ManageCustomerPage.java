package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ManageCustomerPage {

    public ManageCustomerPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy (id = "jh-create-entity")
    public WebElement createCustomerButton;

    @FindBy (id = "search-ssn")
    public WebElement ssnTextBox;

    @FindBy (xpath = "//button[.='Search']")
    public WebElement searchButton;

    @FindBy (id = "tp-customer-user")
    public WebElement userBox;










}
