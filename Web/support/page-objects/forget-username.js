class ForgetUsernamePage {
    getEmailField() {
        return cy.get("#email");
      }
    
      getResetButton() {
        return cy.get("#reset-button");
      }
  
      getContainer(){
        return cy.get("#forget-username-container > h2");
      }
  
      getErrorEmailNotification(){
        return cy.get("#email-error");
      }
      getErrorMulityTimes(){
  
        // should contain("Looks like you've been doing that a lot. Take a break for 7 minutes before trying again.")
        return cy.get("body > div > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset:nth-child(6) > div")
      }
  
      getSuccessAlert(){
        return cy.get("#success-alert");
      }

      getLoginLink(){
        return cy.get("#login-link")
      }
      getSignupLink(){
        return cy.get("#signup-link")
      }
    }
    
    export default new ForgetUsernamePage();
    