import { LoginPage,HomePage } from "../../support/page-objects";

describe('Test the functionality of the login page', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.fixture("UserData").then((data) => {
          //using a callback function to have access to the data in the fixture file and assigning it to a variable to make it global so it can be accessed through out the test.
          globalThis.data = data;
        });
        cy.visit("https://www.reddit.com/login");
        cy.url().should("include", "/login");
        cy.title().should("include", "Log in");
        LoginPage.getUsernameField().should("be.visible").clear();
        LoginPage.getPasswordField().should("be.visible").clear();
        LoginPage.getGoogleButton().should("be.visible");
        // LoginPage.getFacebookButton().should("be.visible");
    });

    it("check field Password required",()=>{
        LoginPage.getPasswordField().should("have.attr","required");
    })
    it("check field Username required",()=>{
        LoginPage.getUsernameField().should("have.attr","required");
    })

    it("Testing with valid data",()=>{
        LoginPage.getUsernameField().type(data.username);
        LoginPage.getPasswordField().type(data.password);
        LoginPage.getLoginButton().click();
        cy.get("body > div > main > div.OnboardingStep.Onboarding__step.mode-auth > div > div.Step__content > form > fieldset:nth-child(8) > div > span").should("be.visible").and("text","You are now logged in. You will soon be redirected")
    })
    
    // Negative Test cases
    // if the input username and password aren't correct
    it("Testing with invalid data",()=>{
        LoginPage.getUsernameField().type(data.dummyUsername);
        LoginPage.getPasswordField().type(data.dummyPassword);
        LoginPage.getLoginButton().click();
        LoginPage.getUsernameErrorNotification().should("be.visible");
        LoginPage.getUsernameErrorNotification().should("text","Incorrect username or password")
        // wait to the web team to what will be shown in the home page 
    })

    it("test valid username with invalid password",()=>{
        LoginPage.getUsernameField().type(data.username);
        LoginPage.getPasswordField().type(data.dummyPassword);
        LoginPage.getLoginButton().click();
        LoginPage.getUsernameErrorNotification().should("be.visible");
        LoginPage.getUsernameErrorNotification().should("text","Incorrect username or password")
    })

    it("test invalid username with validpassword",()=>{
        LoginPage.getUsernameField().type(data.dummyUsername);
        LoginPage.getPasswordField().type(data.password);
        LoginPage.getLoginButton().click();
        LoginPage.getUsernameErrorNotification().should("be.visible");
        LoginPage.getUsernameErrorNotification().should("text","Incorrect username or password")
    })

    it("see alert when the username field has one char", () => {
        LoginPage.getUsernameField().type("k");
        LoginPage.getUsernameField().blur();
        LoginPage.getUsernameErrorNotification().should("be.visible");
        LoginPage.getUsernameErrorNotification().should("text",'Username must be between 3 and 20 characters');
        // wait to the web team to what will be shown in this case
    });

    it("see alert when the username field has two char", () => {
        LoginPage.getUsernameField().type("kk");
        LoginPage.getUsernameField().blur();
        LoginPage.getUsernameErrorNotification().should("be.visible");
        LoginPage.getUsernameErrorNotification().should("text",'Username must be between 3 and 20 characters');
        // wait to the web team to what will be shown in this case
    });

    it("when click on the username link will load the forget username",()=>{
        LoginPage.getForgetUsernameLink().click();
        cy.url().should("include","username")
    })


    it("when click on the password link will load the forget password",()=>{
        LoginPage.getForgetPasswordLink().click();
        cy.url().should("include","password")
    })

    it.only("click on Signup button",()=>{
        cy.get("body > div.App.m-desktop > main > div.OnboardingStep.Onboarding__step.mode-auth > div > div.Step__content > form > div.BottomText.login-bottom-text.register.hideable > a").click();
        cy.url().should("include","/account/register")
    })
    

})