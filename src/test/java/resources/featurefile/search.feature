Feature:Search for a cause "12"
As user want to click on easyfundraising website

  Scenario: User should be confirm the selected cause with a message
   Given  User should on home page
    When User click on search
    And User enter cause number
    And User should click on search link
    Then User should see the message "<message>"




