package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistrationPage {
    public RegistrationPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//input[@name='ssn']")
    public WebElement SSN;

    @FindBy(xpath = "//input[@name='firstname']")
    public WebElement firstname;

    @FindBy(xpath = "//input[@name='lastname']")
    public  WebElement lastname;

    @FindBy(id = "address")
    public WebElement address;

    @FindBy(id = "mobilephone")
    public WebElement phone;

    @FindBy(xpath = "//input[@name='username']")
    public WebElement username;

    @FindBy(id = "email")
    public WebElement email;

    @FindBy(id = "firstPassword")
    public WebElement password;

    @FindBy(id = "secondPassword")
    public WebElement confirm;

    @FindBy(id = "register-submit")
    public WebElement button;
    //<div class="Toastify__toast-body"><span><strong>Registration saved!</strong> Please check your email for confirmation.</span></div>@FindBy(partialLinkText = "Registration saved!")
   @FindBy(xpath = "//div[.='Registration saved!']")
    public WebElement successverify;
   //<div class="Toastify__toast-body">translation-not-found[error.ssnexists]</div>
    @FindBy(css = ".Toastify__toast-body")
    public WebElement errorverify;

}
