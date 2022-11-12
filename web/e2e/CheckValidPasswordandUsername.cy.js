import SignUpPage from "../support/page-objects/sign-up";
describe('Automate Reddit Signup', () => {
    const email = "abbb.xyz@gmail.com"
    const Password = '8182348180mhM*#'
    const Username='shuttlecock_249'

    beforeEach('Sign Up',()=>{
    //     cy.clearCookies()
    //     cy.clearLocalStorage()
    //     cy.visit("http://localhost:3001/register")
    //     SignUpPage.getContainerOfSignUptitle().should("be.visible")
    //     SignUpPage.getContainerOfSignUptitle().should("have.text",'Sign Up')
    //     SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
    //     SignUpPage.getContinerofContinueWithApple().should("be.visible")
    //     SignUpPage.getLoginButton().should("be.visible")
      
    //   //////////////
    //   SignUpPage.getContinerofEmail().type(email,{force: true})
    //   SignUpPage.getContinerofEmail().should('be.visible')
    //   SignUpPage.getContinerofEmail().should('have.value', email )
    //   SignUpPage.getContiueButton().contains('Continue').click({force: true})
  })


it('Enter valid Username & valid Password', ()=>{


    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("http://localhost:3001/register")
    SignUpPage.getContainerOfSignUptitle().should("be.visible")
    SignUpPage.getContainerOfSignUptitle().should("have.text",'Sign Up')
    SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
    SignUpPage.getContinerofContinueWithApple().should("be.visible")
    SignUpPage.getLoginButton().should("be.visible")
  
  ////////////// assign email
  SignUpPage.getContinerofEmail().type(email,{force: true})
  SignUpPage.getContinerofEmail().should('be.visible')
  SignUpPage.getContinerofEmail().should('have.value', email )
  SignUpPage.getContiueButton().contains('Continue').click({force: true})

     
    SignUpPage.getContainerOfusername().should("be.visible")
    SignUpPage.getContainerOfusername().clear().type(Username)

    SignUpPage.getContainerOfPassword().should("be.visible")
    SignUpPage.getContainerOfPassword().clear().type(Password)
    
    
    SignUpPage.getContainerOfPassword().should('have.value',Password) 
    SignUpPage.getContainerOfusername().should('have.value',Username) 


    SignUpPage.getSignUpButtontocontanue().click(({force: true}))   
    SignUpPage.getContainerOfPasswordErrormessage().should("not.have.text",'password should contain 8 to 20 characters')

})


it.skip('Enter valid Username By using one from suggeestions & valid Password', ()=>{


    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("http://localhost:3001/register")
    SignUpPage.getContainerOfSignUptitle().should("be.visible")
    SignUpPage.getContainerOfSignUptitle().should("have.text",'Sign Up')
    SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
    SignUpPage.getContinerofContinueWithApple().should("be.visible")
    SignUpPage.getLoginButton().should("be.visible")
  
  ////////////// assign email
  SignUpPage.getContinerofEmail().type(email,{force: true})
  SignUpPage.getContinerofEmail().should('be.visible')
  SignUpPage.getContinerofEmail().should('have.value', email )
  SignUpPage.getContiueButton().contains('Continue').click({force: true})

    SignUpPage.getContainerOfusername().should("be.visible")
    SignUpPage.getSuggestion1().should("be.visible")

    SignUpPage.getSuggestion1().then((x) => {
        var correct=x.text()
        SignUpPage.getContainerOfusername().clear().type(correct)
    })

    SignUpPage.getContainerOfPassword().should("be.visible")
    SignUpPage.getContainerOfPassword().clear().type(Password)
    SignUpPage.getContainerOfPassword().should('have.value',Password) 
    SignUpPage.getSignUpButtontocontanue().click(({force: true}))   
})
})