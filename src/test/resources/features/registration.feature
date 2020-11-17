@createregistration
Feature:US_002 Create Regester
  Background: Create a new register
    Given Go to registration page "http://gmibank.com/account/register"

  @address
    Scenario: TC_01 User should not see the success message when don't typing address
      And Type a valid SSN "876-62-9758"
      And Type firstname "Sami"
      And Type  lastname "Kacmaz"
      And Do not enter anything in address box
      And Type valid mobile phone number "444-666-7777"
      And Type username "Samibulur"
      And Type  email "sami@gmail.com"
      And Type valid password "Sami.25"
      And Type valid  password confirmation "Sami.25"
      And Click register button
      Then Verify the user register is not success
  @phone
      Scenario:TC_02 User should not see the success message when don't typing mobile phone number
      And Type a valid SSN "876-62-9754"
      And Type firstname "Sami Can"
      And Type  lastname "Kacmaz"
      And Type address "Amsterdam/Hollanda"
      And Do not enter anything in  mobile phone number text box
      And Type  username "Samiyolcu"
      And Type email "samican@gmail.com"
      And Type valid password "Sami.2525"
      And Type valid  password confirmation "Sami.2525"
      And Click register button
      Then Verify the user register is not success
  @lastname
      Scenario:TC_03 User should see the red box when don't typing last name
       And Type a valid SSN "876-62-9755"
       And Type firstname "Sami Eren"
       And Do not enter anything in  last name text box
       And Type address "Rotterdam-Netherland"
       And Type mobile phone number "444-666-7777"
       And Type  username "Samizaman"
       And Type email "samican@gmail.com"
       And Type valid password "Sami.23"
       And Type valid  password confirmation "Sami.23"
       And Click register button
       Then Verify the message "Your Last Name is required"










