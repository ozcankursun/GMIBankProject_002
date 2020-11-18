@thirdregistration
Feature:US_002 Create Regester
  Background: Create a new register
    Given Go to registration page "http://gmibank.com/account/register"
  @defectemail
  Scenario:TC_06 User should see the red box when  typing  without "@"  mark
    And Type a valid SSN "876-62-9753"
    And Type firstname "Ali Aydın"
    And Type  lastname "Konar"
    And Type address "Lahey-Netherland"
    And Type mobile phone number "444-666-7767"
    And Type  username "Alikonar"
    And Enter an email id without -@- mark "aliikonargmail.com"
    And Type valid password "Ali.25"
    And Type valid  password confirmation "Ali.25"
    And Click register button
    Then Verify the red box which has alert "This field is invalid"

  @missingemail
  Scenario Outline:TC_07 User should see the red box when typing which is extention is ".c" after "@" mark
    And Type a valid SSN "<SSN>"
    And Type firstname "Ali Aydın"
    And Type  lastname "Konar"
    And Type address "Lahey-Netherland"
    And Type mobile phone number "444-666-7767"
    And Type  username "Alikonar"
    And Enter an email id which extension is  -.c- after -@- mark "<email>"
    And Type valid password "Ali.25"
    And Type valid  password confirmation "Ali.25"
    And Click register button
    Then Verify the red box which has alert "This field is invalid"
    Examples:
      |    SSN      |    email           |
      | 876-62-9759 | aliikon@gmail.c    |
      | 877-62-9759 | aliikon@gmail.co   |

