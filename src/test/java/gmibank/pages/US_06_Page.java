package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class US_06_Page{

    public US_06_Page(){ PageFactory.initElements(Driver.getDriver(),this);}

    @FindBy(name = "username" )
    public WebElement username;

    @FindBy(name = "password")
    public WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement signInButton;

    @FindBy(id="account-menu")
    public WebElement userDropDown;

    @FindBy(name = "firstName")
    public WebElement firstName;

    @FindBy(name="lastName")
    public WebElement lastName;

    @FindBy(id="email")
    public WebElement UserInfoEmail;

    @FindBy(name="langKey")
    public WebElement languageDropDown;

    @FindBy(xpath = "//span[.='Save']")
    public WebElement saveButton;

    @FindBy(xpath = "//span[.='User Info']" )
    public WebElement userInfo;

    @FindBy(xpath = "//option[.='English']")
    public WebElement langEnglish;

    @FindBy(xpath = "//*[@id=\"langKey\"]/option[2]")
    public WebElement langTurkish;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[1]/div")
    public WebElement saveAlert;

    @FindBy(xpath ="//*[@id=\"settings-form\"]/div[3]/div" )
    public WebElement invalidField;
}
