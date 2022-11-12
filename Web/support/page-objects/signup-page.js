class LoginPage {
    getUsernameField() {
      return cy.get("input#[type='email']");
    }
    getUsernameField() {
        return cy.get('input[name="last_name"]');
    }

    getUsernameField() {
        return cy.get('input[name="first_name"]');
    }
  
    getPasswordField() {
      return cy.get("input#password");
    }

    getConfirmPasswordField() {
        return cy.get("input#password");
    }
  
    getLoginButton() {
      return cy.get("button").contains("Signup");
    }
  
    // waiting to web team 
    
  }
  
  export default new LoginPage();
  