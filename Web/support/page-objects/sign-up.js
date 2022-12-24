class SignUpPage {
    // wait to web team
    getContiueButton() {
      return cy.get('#continueButton');
    }

    getContinerofEmail() {
        return cy.get('#emailField');
    }
    getContinerofErrorinEmail() {
        return cy.get('#errorNotValidEmail');
    }
    getLoginButton() {
        return cy.get('#logInButtonFromSignup');
    }
    getContainerOfSignUptitle() {
        return cy.get('#signUpContainer');
    }
    getContinerofContinueWithGoogle() {
        return cy.get('#contWithGoogle');
    }
    getContinerofContinueWithApple() {
        return cy.get('#contWithFacebook');
    }
    

    getSignUpButtontocontanue() {
        return cy.get('#signUpButton');
    }

    getContainerOfusername() {
        return cy.get('#userNameFieldSignUp');
    }
    getContainerOfusernameErrorMessage() {
        return cy.get('#userNameNotValidSignUp');
    }  

    getContainerOfPassword() {
        return cy.get('#passwordFieldSignUp');
    }
    getContainerOfPasswordErrormessage() {
        return cy.get('#passwordNotValidSignUp');
    }

    getBackButton() {
        return cy.get('#backInSignUpFirstScreen');
      }
    getNotRebbotButton() {
        return cy.get('# get the id of the NotRebbot Button');
      }  
    getchangeSuggestionButton() {
        return cy.get('#changeUserNameSuggestions');
      }
    getSuggestion1() {
        return cy.get('#userNameSuggestion1');
      }    
    getSuggestion2() {
        return cy.get('#userNameSuggestion2');
      }
    getSuggestion3() {
        return cy.get('#userNameSuggestion3');
      }
    getSuggestion4() {
        return cy.get('#userNameSuggestion4');
      }  
    getSuggestion5() {
        return cy.get('#userNameSuggestion5');
      }    
      


  }
  
  export default new SignUpPage();
  