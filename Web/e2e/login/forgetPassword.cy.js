import {ForgetPassword, LoginPage} from "../../support/page-objects"
describe('Test the functionality of the login page', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.fixture("ForgetPasswordData").then((data) => {
            globalThis.data = data;
        });
        cy.visit("https://dev.redditswe22.tech/login");
        LoginPage.getForgetPasswordLink().should("text","password");
        LoginPage.getForgetPasswordLink().click();
        cy.url().should("include", "/forget-password");
        cy.title().should("include", "Reset your password");
        ForgetPassword.getEmailField().should("be.visible");
        ForgetPassword.getUsernameField().should("be.visible");
    });

    it("check page content",()=>{
        ForgetPassword.getTitleContainer().contains("Reset your password").should("be.visible")
    })
    it("enter username without email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getResetButton().click({force: true});
        cy.contains("Please enter an email address to continue").should("be.visible");
    })

    it("enter username with invaild email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getResetButton().click({force: true});
        ForgetPassword.getEmailField().type(data.dummyEmail)
        cy.contains("Please fix your email to continue").should("be.visible");
    })
    
    it("invalid email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getEmailField().type(data.invalidEmail).blur();
        ForgetPassword.getErrorEmailNotification().should("be.visible").and("text","not a valid email")
    })  
    it("invalid username",()=>{
        ForgetPassword.getEmailField().type(data.email);
        ForgetPassword.getUsernameField().type(data.invalidUsername).blur();
        ForgetPassword.getResetButton().click({force: true});
        ForgetPassword.getErrorUsernameNotification().should("be.visible").and("text","Username must be between 3 and 20 characters")
    }) 
    
    it("invalid username && email",()=>{
        ForgetPassword.getUsernameField().type(data.invalidUsername);
        ForgetPassword.getEmailField().type(data.invalidEmail);
        ForgetPassword.getResetButton().click({force: true});
        ForgetPassword.getErrorEmailNotification().should("be.visible").and("text","not a valid email");
    }) 

    it("valid username && email",()=>{
        ForgetPassword.getUsernameField().type(data.username);
        ForgetPassword.getEmailField().type(data.email);
        ForgetPassword.getResetButton().click({force: true});
        ForgetPassword.getSuccessAlert().should("be.visible").and("text","Thanks! If your Reddit username and email address match, you'll get an email with a link to reset your password shortly.")
        // ForgetPassword.getErrorEmailNotification().should("be.visible").and("text","Please fix your email to continue");
    }) 

    it("test forget username button",()=>{
        cy.get("#forget-username-button").click();
        cy.url().should("include","/forget-username")
    })

})
