import {ForgetPassword, LoginPage} from "../../support/page-objects"
describe('Test the functionality of the login page', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.fixture("ForgetPasswordData").then((data) => {
            globalThis.data = data;
        });
        cy.visit("https://www.reddit.com/login");
        LoginPage.getForgetPasswordLink().should("text","password");
        LoginPage.getForgetPasswordLink().click();
        cy.url().should("include", "/password");
        cy.title().should("include", "Reset your password");
        ForgetPassword.getEmailField().should("be.visible");
        ForgetPassword.getUsernameField().should("be.visible");
    });

    it("check page content",()=>{
        ForgetPassword.getContainer().contains("Reset your password Tell us the username and email address associated with your Reddit account, and we’ll send you an email with a link to reset your password.").should("be.visible")
    })
    it("enter username without email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getResetButton().click();
        cy.contains("Please enter an email address to continue").should("be.visible");
    })

    it("enter username with invaild email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getResetButton().click();
        ForgetPassword.getEmailField().type(data.dummyEmail)
        cy.contains("Please fix your email to continue").should("be.visible");
    })
    
    it("invalid email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getEmailField().type(data.invalidEmail).blur();
        ForgetPassword.getErrorEmailNotification().should("be.visible").and("text","Please fix your email to continue")
    })  
    it("invalid username",()=>{
        ForgetPassword.getEmailField().type(data.email);
        ForgetPassword.getUsernameField().type(data.invalidUsername).blur();
        ForgetPassword.getResetButton().click();
        ForgetPassword.getErrorUsernameNotification().should("be.visible").and("text","Please enter a username")
    }) 
    
    it("invalid username && email",()=>{
        ForgetPassword.getUsernameField().type(data.invalidUsername);
        ForgetPassword.getEmailField().type(data.invalidEmail);
        ForgetPassword.getResetButton().click();
        ForgetPassword.getErrorEmailNotification().should("be.visible").and("text","Please fix your email to continue");
    }) 

    it("valid username && email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getEmailField().type(data.email);
        ForgetPassword.getResetButton().click();
        ForgetPassword.getSuccessAlert().should("be.visible").and("text","Thanks! If your Reddit username and email address match, you'll get an email with a link to reset your password shortly.")
    }) 

    it.only("test forget username button",()=>{
        cy.get("body > div.Container.m-desktop > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > div.BottomText.login-bottom-text.hideable > a").click();
        cy.url().should("include","/username")
    })

})
