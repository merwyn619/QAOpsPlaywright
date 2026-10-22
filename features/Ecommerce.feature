Feature: Ecommerce validations

@Regression
  Scenario: Placing the Order
    Given a login to Ecommerce application with "merwyn619@gmail.com" and "Mychoice456"
    When Add "ZARA COAT 3" to Cart
    Then Verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and place the order
    Then Verify order is present in the OrderHistory

@Validation
  Scenario Outline: Login test
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
   | username          | password     |
   | anshika@gmail.com | Iamking@000  |
   | hello@123.com     | Iamhello@12  |    