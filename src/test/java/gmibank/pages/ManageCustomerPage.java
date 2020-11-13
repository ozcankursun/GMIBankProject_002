package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class ManageCustomerPage {

    public ManageCustomerPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }


}
