@editcustomerdate
Feature:US_012_An Edit Customer data

     Background: US_012_An Employee can edit Customer data
     Given Go to the sign in page
     And Type username and password than click on sign in button
     And Click on My Operations dropdown menu
     And click on Edit button

     @editemailaddress
     Scenario: TC_0010 The Edit portal can allow user to create or update the user "Email address"
       And Customer's "Email address" is updated
       And Click on Save button
       Then User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]" massege

     @editmobiltelnumber
     Scenario: TC_0011 The Edit portal can allow user to create or update the user "Mobil Phone Number"
       And Customer's "Mobil Phone Number" is updated
       And Click on Save button
       Then User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]" massege

     @editphonenumber
     Scenario: TC_0012 The Edit portal can allow user to create or update the user "Phone Number"
       And Customer's "Phone Number" is updated
       And Click on Save button
       Then User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]" massege

     @editaddress
     Scenario: TC_0013 The Edit portal can allow user to create or update the user "Address"
       And Customer's "Address" is updated
       And Click on Save button
       Then User should see “translation-not-found[gmiBankBackendApp.tPCustomer.updated]" massege
