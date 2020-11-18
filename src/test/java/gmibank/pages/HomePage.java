package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public HomePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//span[.='My Operations']")
    public WebElement myOperationsDropdown;

    @FindBy(xpath = "//li[@id='entity-menu']")
    public WebElement myAccountDropdown;

    @FindBy(xpath = "//a[@href='/tp-account']")
    public WebElement manageAccount;

    @FindBy (xpath = "//span[.='Manage Customers']")
    public WebElement manageCustomer;





}
