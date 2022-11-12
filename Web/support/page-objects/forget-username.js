class ForgetUsernamePage {
    getEmailField() {
        return cy.get("#email");
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
      getErrorMulityTimes(){
  
        // should contain("Looks like you've been doing that a lot. Take a break for 7 minutes before trying again.")
        return cy.get("body > div > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset:nth-child(6) > div")
      }
  
      getSuccessAlert(){
        return cy.get("body > div > div > div.PageColumn.PageColumn__right > div > form.AnimatedForm > div > fieldset:nth-child(6) > div");
      }

      getLoginLink(){
        return cy.get("body > div.Container.m-desktop > div > div.PageColumn.PageColumn__right > div > div.BottomText > a:nth-child(1)")
      }
      getSignupLink(){
        return cy.get("body > div.Container.m-desktop > div > div.PageColumn.PageColumn__right > div > div.BottomText > a:nth-child(3)")
      }
    }
    
    export default new ForgetUsernamePage();
    