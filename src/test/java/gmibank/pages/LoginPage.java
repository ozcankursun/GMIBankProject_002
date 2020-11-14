package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(id = "username")
    public WebElement username;

    @FindBy (name= "password")
    public WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement signInButton;

    @FindBy(xpath = "//span[.='Cancel']")
    public WebElement cancelButton;

    @FindBy(id="account-menu")
    public WebElement loginDropDown;

    @FindBy(id="login-item")
    public WebElement signInText;

    @FindBy(xpath = "//div[@role='dialog']")
    public String signInPage;

    @FindBy(xpath = "(//div[@class='alert alert-warning fade show'])[1]")
    public WebElement resetPasswordOption;

    @FindBy(xpath="//*[.='Reset your password']")
    public WebElement resetPasswordNewText;

    @FindBy(xpath = "(//div[@class='alert alert-warning fade show'])[2]//a//span")
    public WebElement againRegisterOption;

    @FindBy(id = "register-title")
    public WebElement registerTitle;




}


