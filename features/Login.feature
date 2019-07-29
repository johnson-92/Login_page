Feature: To test user registration page

  Scenario Outline: To check the user registration page
    Given The user should be wilko homepage and click the accout
    When User should fill the required info and click submit "<Fname>","<Lname>","<Email>","<Password>","<Repassword>"
    Then Validate if user is register or not

    Examples: 
      | Fname   | Lname    | Email                  | Password   | Repassword |
      | Johnson | Nickolas | johnsonsgnya@gmail.com | 3f4g5h6r5f | 3f4g5h6r5f |
     
