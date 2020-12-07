package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminManageToUsersPage {

    public AdminManageToUsersPage(){

        PageFactory.initElements(Driver.getDriver(),this);
    }






    @FindBy(xpath = "//span[.='Administration']")
    public WebElement administrationButton1;

    @FindBy(xpath = "//span[.='User management']")
    public WebElement userManagement1;


    @FindBy(xpath = "//a[.='29']")
    public WebElement button29;

    @FindBy(xpath = "//a[.='28']")
    public WebElement button28;

    @FindBy(xpath = "//a[.='27']")
    public WebElement button27;

    @FindBy(xpath = "//a[.='30']")
    public WebElement button30;

    @FindBy(xpath = "//a[.='31']")
    public WebElement button31;


    @FindBy(xpath = "(//button[@class='btn btn-danger'])[4]")
    public WebElement activateButton1;



}