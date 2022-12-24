class LoginPage {
  getUsernameField() {
    // return cy.get("input#email[type='email']");
    return cy.get("#login-username");
  }

  getPasswordField() {
    // return cy.get("input#password[type='password']");
    return cy.get("#login-password");
  }

  getLoginButton() {
    return cy.get("#login-button")
  }


  getGoogleButton(){
    return cy.get("#root > div > div.sc-ekFWYn.bkKwOu > div > span > div.sc-eTWrZZ.dhtpOK > button")
  }

  getFacebookButton(){
    return cy.get("#root > div > div.sc-ekFWYn.bkKwOu > div > span > div.sc-kRkRkg.orcim > button")
  }
  // waiting to web team 
  getUsernameErrorNotification() {
    return cy.get("#username-error");
  }
  getForgetPasswordLink(){
    return cy.get("#forget-password");
  }

  getForgetUsernameLink(){
    return cy.get("#forget-username");
  }
  getSuccessAlert(){
    return   cy.get("body > div > main > div.OnboardingStep.Onboarding__step.mode-auth > div > div.Step__content > form > fieldset:nth-child(8) > div > span")
    ;
  }
}

export default new LoginPage();
