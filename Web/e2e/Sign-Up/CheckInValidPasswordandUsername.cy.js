import SignUpPage from "../../support/page-objects/sign-up";
import {buttonCheckAndClickSignUpPage} from "../../Utils/SignUpPages/SignUpTaps"
import {ContainersOfSignUpPage} from "../../Utils/SignUpPages/SignUpContainers"

describe('Automate Reddit Signup', () => {
    const email = "abbb.xyz@gmail.com"
    const Password = '8182348180mhM*#'
    const Username='footton_430'
    const invalidUsername='Eu'
    const invalidPassword = '8182'

    beforeEach('Sign Up',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("https://dev.redditswe22.tech/register")

    //check the title of the page
    ContainersOfSignUpPage("ContainerOfSignUptitle")
    //check visibilty of Google &Apple SignUP
    SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
    SignUpPage.getContinerofContinueWithApple().should("be.visible")
    //check visibilty of login button
    SignUpPage.getLoginButton().should("be.visible")

    //////////////
    SignUpPage.getContinerofEmail().type(email,{force: true})
    SignUpPage.getContinerofEmail().should('be.visible')
    SignUpPage.getContinerofEmail().should('have.value', email )
    SignUpPage.getContiueButton().contains('Continue').click({force: true})

    //////////////
    })


    it('Enter invalid Username & invalid Password', ()=>{
    SignUpPage.getContainerOfusername().should("be.visible")
    SignUpPage.getContainerOfusername().clear().type(invalidUsername)

    SignUpPage.getContainerOfPassword().should("be.visible")
    SignUpPage.getContainerOfPassword().clear().type(invalidPassword)


    SignUpPage.getContainerOfPassword().should('have.value',invalidPassword) 
    SignUpPage.getContainerOfusername().should('have.value',invalidUsername) 


    SignUpPage.getSignUpButtontocontanue().click(({force: true})) 

    SignUpPage.getContainerOfusernameErrorMessage().should("have.text",'not a valid username')
    SignUpPage.getContainerOfPasswordErrormessage().should("have.text",'password should contain 8 to 20 characters')
    })



    it('Enter invalid Username & valid Password', ()=>{


        SignUpPage.getContainerOfusername().should("be.visible")
        SignUpPage.getContainerOfusername().clear().type(invalidUsername)

        SignUpPage.getContainerOfPassword().should("be.visible")
        SignUpPage.getContainerOfPassword().clear().type(Password)
        
        
        SignUpPage.getContainerOfPassword().should('have.value',Password) 
        SignUpPage.getContainerOfusername().should('have.value',invalidUsername) 
        
        SignUpPage.getSignUpButtontocontanue().click(({force: true}))   

        SignUpPage.getContainerOfusernameErrorMessage().should("have.text",'not a valid username')
        SignUpPage.getContainerOfPasswordErrormessage().should("not.be.visible")
        
    })
            
    it('Enter valid Username & invalid Password', ()=>{


    SignUpPage.getContainerOfusername().should("be.visible")

    SignUpPage.getContainerOfPassword().should("be.visible")
    SignUpPage.getContainerOfPassword().clear().type(Password)
    SignUpPage.getContainerOfPassword().should('have.value',Password) 

    SignUpPage.getSignUpButtontocontanue().click(({force: true}))
    SignUpPage.getContainerOfusernameErrorMessage().should("have.text",'not a valid username')
    SignUpPage.getContainerOfPasswordErrormessage().should("not.be.visible")

    })


    it('Enter valid Username & empty Password', ()=>{

    SignUpPage.getContainerOfusername().should("be.visible")
    SignUpPage.getContainerOfPassword().should("be.visible")
    SignUpPage.getContainerOfusername().clear().type(Username)
    SignUpPage.getContainerOfusername().should('have.value',Username)

    SignUpPage.getSignUpButtontocontanue().click(({force: true}))
    SignUpPage.getContainerOfPasswordErrormessage().should("have.text",'password should contain 8 to 20 characters')
    SignUpPage.getContainerOfPasswordErrormessage().should("not.be.visible")

    })
})