class ForgetPasswordPage {
    getEmailField() {
      // return cy.get("input#email[type='email']");
      return cy.get("#email");
    }
  
    getUsernameField() {
      // return cy.get("input#password[type='password']");
      return cy.get("#username");
    }
  
    getResetButton() {
      return cy.get("#reset");
    }

    getTitleContainer(){
      return cy.get("#forget-password-container > h2");
    }

    getErrorEmailNotification(){
      return cy.get("#email-error");
    }

    getErrorUsernameNotification(){
      return cy.get("#username-error");
    }
////////////////////////////////////////////////// not found
    getErrorMulityTimes(){

      // should contain("Looks like you've been doing that a lot. Take a break for 7 minutes before trying again.")
      return cy.get("body > div > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset:nth-child(6) > div")
    }

    getSuccessAlert(){
      return cy.get("#success-alert");
    }
  }
  
  export default new ForgetPasswordPage();
  