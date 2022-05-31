package uk.org.easyfundraising.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.org.easyfundraising.utility.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='causeTerm']")
    WebElement Searchcause;

    public void clickOnSearchCause() {
        clickOnElement(Searchcause);
        log.info("Clicking on searchcause : " + Searchcause.toString());

    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='causeTerm']")
    WebElement Searchfield;

    public void enterSearchField(String number){
        sendTextToElement(Searchfield,number);
    }

    @CacheLookup
    @FindBy(xpath = "//button[@id='causeSubmitSearch']")
    WebElement SearchLink;

    public void clickOnSearchButton() {
        clickOnElement(SearchLink);
        log.info("Clicking on searchLink : " + SearchLink.toString());
    }

    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/p[1]")
    WebElement Message;

    public String getMessage() {
        String message = getTextFromElement(Message);
        log.info("Getting msg from : " + Message.toString());
        return message;
    }


}
