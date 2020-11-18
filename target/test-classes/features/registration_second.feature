@secondregistration
Feature:US_002 Create Regester
  Background: Create a new register
    Given Go to registration page "http://gmibank.com/account/register"

  @SSN
  Scenario Outline: TC_04 User should see the red box when  typing  any of the punctuation marks or space except "-" in SSN
    And Type any of the punctuation marks except "-" between the numbers in SSN "<SSN>"
    And Type firstname "Ali"
    And Type  lastname "KaLmaz"
    And Type address "Lahey/Netherland"
    And Type valid mobile phone number "444-666-7779"
    And Type username "Alibulur"
    And Type  email "ali@gmail.com"
    And Type valid password "Ali.25"
    And Type valid  password confirmation "Ali.25"
    And Click register button
    Then Verify the red box which has alert "Your SSN is invalid"
    Examples:
      | SSN            |
      | 876 62 9756    |
      | 876 63 9756    |
      | 876 64 9756    |

  @phonenumber
  Scenario Outline: TC_05 User should see the red box when  typing  any of the punctuation marks or space  except "-" in moble phone number
    And Type a valid SSN "<SSN>"
    And Type firstname "<firstname>"
    And Type  lastname "<lastname>"
    And Type address "<address>"
    And Enter  any of the punctuation marks except "-" between the numbers in mobile phone number text box "<phone>"
    And Type  username "<username>"
    And Type email "<email>"
    And Type valid password "<password>"
    And Type valid  password confirmation "<confirm>"
    And Click register button
    Then Verify the red box which has alert "Your mobile  phone number is invalid"
    Examples:
      | SSN        |firstname  |lastname|   address       |phone          |username  |    email          |password|confirm |
      |834-62-9757 | Ali Riza  |Kalmaz  | Lahey/Netherland| 444/666/7774  |Aliibulur |aliiriza@gmail.com | Ali.25 | Ali.25 |
      |835-62-9757 |Ali Kemal  |Kalir   | Balk/Netherland | 444 666 7774  |Alibulur  |aliriza@gmail.com  | Ali.259| Ali.259|

