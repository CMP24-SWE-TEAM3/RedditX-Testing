import {SignUpPage} from "../../support/page-objects";
describe('Automate Reddit Signup', () => {
    const email = "Mahmoud55@gmail.com"
    const email2 = "Ahmed55@gmail.com"
    const Password = 'Mahmoud123*#'
    const Username='Mahmoud88877'

    beforeEach('Sign Up',()=>{
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit("https://dev.redditswe22.tech/register")
      SignUpPage.getContainerOfSignUptitle().should("be.visible")
      SignUpPage.getContainerOfSignUptitle().should("have.text",'Sign Up')
      SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
      SignUpPage.getContinerofContinueWithApple().should("be.visible")
      SignUpPage.getLoginButton().should("be.visible")
      
      //////////////
      SignUpPage.getContinerofEmail().type(email,{force: true})
      SignUpPage.getContinerofEmail().should('be.visible')
      SignUpPage.getContinerofEmail().should('have.value', email )
      
      SignUpPage.getContiueButton().contains('Continue').click({force: true})
  })


  it('Enter valid Username & valid Password', ()=>{

      SignUpPage.getContainerOfusername().should("be.visible")
      SignUpPage.getContainerOfusername().clear().type(Username)

      SignUpPage.getContainerOfPassword().should("be.visible")
      SignUpPage.getContainerOfPassword().clear().type(Password)
      
      
      SignUpPage.getContainerOfPassword().should('have.value',Password) 
      SignUpPage.getContainerOfusername().should('have.value',Username) 

      //cy.get("#rc-anchor-container").should("be.visible").click() // not robort  
      
      SignUpPage.getSignUpButtontocontanue().realClick({force: true})  

    // SignUpPage.getContainerOfPasswordErrormessage().should("not.have.text",'password should contain 8 to 20 characters')

  })


  it('Enter valid Username By using one from suggeestions (sugestion1) & valid Password', ()=>{

      SignUpPage.getContainerOfusername().should("be.visible")
      SignUpPage.getSuggestion1().should("be.visible")

      SignUpPage.getSuggestion1().then((x) => {
          var correct=x.text()
          SignUpPage.getContainerOfusername().clear().type(correct)
          SignUpPage.getContainerOfusername().should('have.value',correct) 
      })

      SignUpPage.getContainerOfPassword().should("be.visible")
      SignUpPage.getContainerOfPassword().clear().type(Password)
      SignUpPage.getContainerOfPassword().should('have.value',Password) 
      SignUpPage.getSignUpButtontocontanue().realClick()   
  })

  it('Enter valid Username By using one from suggeestions but changes the sugesstion atfirst then select (sugestion3) & valid Password', ()=>{
    
    SignUpPage.getchangeSuggestionButton().click()
    SignUpPage.getContainerOfusername().should("be.visible")
    SignUpPage.getSuggestion3().should("be.visible")

    SignUpPage.getSuggestion3().then((x) => {
        var correct=x.text()
        SignUpPage.getContainerOfusername().clear().type(correct)
        SignUpPage.getContainerOfusername().should('have.value',correct) 
    })

    SignUpPage.getContainerOfPassword().should("be.visible")
    SignUpPage.getContainerOfPassword().clear().type(Password)
    SignUpPage.getContainerOfPassword().should('have.value',Password) 
    SignUpPage.getSignUpButtontocontanue().realClick()   
  })

  it('Enter valid password & username then back to change the Email the continue and change the username and select suggestion 5 & change the password ', ()=>{
    
    SignUpPage.getContainerOfusername().should("be.visible").clear().type(Username)
    SignUpPage.getContainerOfPassword().should("be.visible").clear().type(Password)
    SignUpPage.getContainerOfusername().should('have.value',Username)
    SignUpPage.getContainerOfPassword().should('have.value',Password)

    // return to change the email
    SignUpPage.getBackButton().click(({force: true}))
    SignUpPage.getContinerofEmail().should('be.visible')
    SignUpPage.getContinerofEmail().should('have.value', email )

    SignUpPage.getContinerofEmail().clear().type(email2,{force: true})
    SignUpPage.getContinerofEmail().should('have.value', email2 )
    SignUpPage.getContiueButton().contains('Continue').click({force: true})


    // select suggestion and dont changing the password then Sign Up
    SignUpPage.getContainerOfusername().should('have.value',Username)
    SignUpPage.getContainerOfPassword().should('have.value',Password)

    SignUpPage.getSuggestion5().should("be.visible")
    SignUpPage.getSuggestion5().then((x) => {
      var correct=x.text()
      SignUpPage.getContainerOfusername().clear().type(correct)
      SignUpPage.getContainerOfusername().should('have.value',correct) 
  })
  // click SignUP
    SignUpPage.getSignUpButtontocontanue().realClick()
  })

})

