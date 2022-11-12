class LoginPage {
  getUsernameField() {
    // return cy.get("input#email[type='email']");
    return cy.get("#loginUsername");
  }

  getPasswordField() {
    // return cy.get("input#password[type='password']");
    return cy.get("#loginPassword");
  }

  getLoginButton() {
    return cy.get("button").contains("Log In");
  }


  getGoogleButton(){
    return cy.get("#google-sso").contains("Continue with Google");
  }

  getFacebookButton(){
    return cy.get("#facebook-sso").contains("Continue with Facebook");
  }
  // waiting to web team 
  getUsernameErrorNotification() {
    return cy.get("body > div.App.m-desktop > main > div.OnboardingStep.Onboarding__step.mode-auth > div > div.Step__content > form > fieldset.AnimatedForm__field.m-required.login.hideable.m-invalid > div");
  }

  getForgetPasswordLink(){
    return cy.get("body > div.App.m-desktop > main > div.OnboardingStep.Onboarding__step.mode-auth > div > div.Step__content > form > div.BottomText.m-secondary-text.login-bottom-text.hideable > a:nth-child(4)");
  }

  getForgetUsernameLink(){
    return cy.get("body > div.App.m-desktop > main > div.OnboardingStep.Onboarding__step.mode-auth > div > div.Step__content > form > div.BottomText.m-secondary-text.login-bottom-text.hideable > a:nth-child(2)");
  }
}

export default new LoginPage();
