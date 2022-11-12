import SignUpPage from "../support/page-objects/sign-up";
describe('Automate Reddit Signup', () => {
    const email = "abbb.xyz@gmail.com"
    const dummyemail = "aba.xyz"
    beforeEach('Sign Up',()=>{
     
      cy.visit("http://localhost:3001/register")
      SignUpPage.getContainerOfSignUptitle().should("be.visible")
      SignUpPage.getContainerOfSignUptitle().should("have.text",'Sign Up')

      SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
      SignUpPage.getContinerofContinueWithApple().should("be.visible")
      SignUpPage.getLoginButton().should("be.visible")
      
      
  })
  it.skip('Sign UP by using Google', () => {
       
    SignUpPage.getContinerofContinueWithGoogle().should("be.visible")
    SignUpPage.getContinerofContinueWithGoogle().trigger("mouseover").click()

})

it.skip('Sign UP by using Apple ', () => {
       
    SignUpPage.getContinerofContinueWithApple().should("be.visible")
    SignUpPage.getContinerofContinueWithApple().trigger("mouseover").click()
})

it('click on the Login in the bottom of the page ', () => {
       
    SignUpPage.getLoginButton().should("be.visible")
    SignUpPage.getLoginButton().trigger("mouseover").click()
    cy.url().should("include","http://localhost:3001/login")
})
    
    it('enter a vaild email', () => {
  
        SignUpPage.getContinerofEmail().type(email,{force: true})
        SignUpPage.getContinerofEmail().should('be.visible')
        SignUpPage.getContiueButton().contains('Continue').click({force: true})
        SignUpPage.getContinerofEmail().should('have.value', email )
    })

    it('enter a invaild email', () => {
 
        SignUpPage.getContinerofEmail().type(dummyemail,{force: true})
        SignUpPage.getContinerofEmail().should('be.visible')
        SignUpPage.getContiueButton().contains('Continue').click({force: true})
        SignUpPage.getContinerofErrorinEmail().should("have.text","not a valid email address")
    })

    it('enter a empty email', () => {
       
      SignUpPage.getContiueButton().contains('Continue').click({force: true})
      SignUpPage.getContinerofErrorinEmail().should("have.text","not a valid email address") 
  })

})