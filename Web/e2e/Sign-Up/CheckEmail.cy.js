import SignUpPage from "../../support/page-objects/sign-up"
import {buttonCheckAndClickSignUpPage} from "../../Utils/SignUpPages/SignUpTaps"
import {ContainersOfSignUpPage} from "../../Utils/SignUpPages/SignUpContainers"
describe('Automate Reddit Signup', () => {
const email = "abbb.xyz@gmail.com"
const dummyemail = "aba.xyz"
    beforeEach('Sign Up',()=>{



        cy.visit("https://dev.redditswe22.tech/register")

        //check the title of the page
    ContainersOfSignUpPage("ContainerOfSignUptitle")
        //check visibilty of Google &Apple SignUP
    SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
    SignUpPage.getContinerofContinueWithApple().should("be.visible")
        //check visibilty of login button
    SignUpPage.getLoginButton().should("be.visible")
    })
    it('Sign UP by using Google', () => {

    buttonCheckAndClickSignUpPage("Google")
    // waiting front end to finish
    })

    it('Sign UP by using Apple ', () => {
        
        buttonCheckAndClickSignUpPage("Apple")
        // waiting front end to finish
            
    })

    it('click on the Login in the bottom of the page ', () => {

    buttonCheckAndClickSignUpPage("LoginButton")
    cy.url().should("include","https://dev.redditswe22.tech/login")
    })

    it('enter a vaild email', () => {
        //check visibilty 
        ContainersOfSignUpPage("ContinerofEmail")
        SignUpPage.getContinerofEmail().type(email,{force: true})
        SignUpPage.getContinerofEmail().should('have.value', email )
        buttonCheckAndClickSignUpPage("Continue")
    })

    it('enter a vaild email & press Enter instead of click on continue', () => {
        //check visibilty 
        ContainersOfSignUpPage("ContinerofEmail")
        SignUpPage.getContinerofEmail().type(email,{force: true})
        SignUpPage.getContinerofEmail().should('have.value', email )
        cy.get('input').type('{enter}')
        SignUpPage.getContainerOfusername().should("be.visible")
        SignUpPage.getContainerOfPassword().should("be.visible")
    })

    it('enter a invaild email', () => {

        ContainersOfSignUpPage("ContinerofEmail")
        SignUpPage.getContinerofEmail().type(dummyemail,{force: true})
        SignUpPage.getContinerofEmail().should('have.value', dummyemail )
        buttonCheckAndClickSignUpPage("Continue")
        ContainersOfSignUpPage("ContinerofErrorinEmail")  // not a valid email address

    })

    it('enter a empty email', () => {
        buttonCheckAndClickSignUpPage("Continue")
        // there will be No Action
    })

})