import {ForgetUsername, LoginPage} from "../../support/page-objects"
describe('Test the functionality of the Forget username page', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.fixture("ForgetUsernameData").then((data) => {
          //using a callback function to have access to the data in the fixture file and assigning it to a variable to make it global so it can be accessed through out the test.
          globalThis.data = data;
        });
        cy.visit("https://www.reddit.com/login");
        LoginPage.getForgetUsernameLink().should("text","username");
        LoginPage.getForgetUsernameLink().click();
        cy.url().should("include", "/username");
        cy.title().should("include", "Recover your username");
        ForgetUsername.getContainer().contains("Recover your username")
        ForgetUsername.getEmailField().should("be.visible");
    });
    it("invalid email",()=>{
        ForgetUsername.getEmailField().type(data.invalidEmail).blur();
        ForgetUsername.getErrorEmailNotification().should("be.visible").and("text","Please fix your email to continue")
    })  
    it("valid email",()=>{
        ForgetUsername.getEmailField().type(data.email);
        ForgetUsername.getResetButton().click();
        cy.wait(4000)
        cy.get("#rc-anchor-container > div.rc-anchor-content > div:nth-child(1)").click();
        ForgetUsername.getSuccessAlert().should("be.visible").and("text","Thanks! If your Reddit username and email address match, you'll get an email with a link to reset your password shortly.")
    }) 
    it.only("click on login link",()=>{
        ForgetUsername.getLoginLink().click();
        cy.url().should("include","/login")
    })
    it.only("click on signup link",()=>{
        ForgetUsername.getSignupLink().click();
        cy.url().should("include","/account/register")
    })

})
