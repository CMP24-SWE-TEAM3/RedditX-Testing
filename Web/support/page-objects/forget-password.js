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
      return cy.get("button[type='submit']");
    }

    getContainer(){
      return cy.get("div.ColumnContainer");
    }

    getErrorEmailNotification(){
      return cy.get("body > div.Container.m-desktop > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset.AnimatedForm__field.m-required.m-invalid > div");
    }

    getErrorUsernameNotification(){
      return cy.get("body > div.Container.m-desktop > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset:nth-child(6) > div > span");
    }

    getErrorMulityTimes(){

      // should contain("Looks like you've been doing that a lot. Take a break for 7 minutes before trying again.")
      return cy.get("body > div > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset:nth-child(6) > div")
    }

    getSuccessAlert(){
      return cy.get("body > div > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset:nth-child(6) > div > span");
    }
  }
  
  export default new ForgetPasswordPage();
  