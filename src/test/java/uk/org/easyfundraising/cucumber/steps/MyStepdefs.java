package uk.org.easyfundraising.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.org.easyfundraising.pages.HomePage;

public class MyStepdefs {
    static String num = "12";
    @Given("^User should on home page$")
    public void userShouldOnHomePage() {
    }

    @When("^User click on search$")
    public void userClickOnSearch() {
        new HomePage().clickOnSearchCause();
    }

   /* @And("^User enter \"([^\"]*)\" cause$")
    public void userEnterCause(){
        new HomePage().enterSearchField(num);
    }*/

    @And("^User should click on search link$")
    public void userShouldClickOnSearchLink() {
        new HomePage().clickOnSearchButton();
    }

    @Then("^User should see the message \"([^\"]*)\"$")
    public void userShouldSeeTheMessage() {
      //  String expectedMessage = "We found these for 12";
        Assert.assertEquals(new HomePage(),"We found these for 12");

    }


    @And("^User enter cause number$")
    public void userEnterCauseNumber() {
        new HomePage().enterSearchField(num);
    }
}
