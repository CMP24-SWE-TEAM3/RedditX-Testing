class HomePage {
  getLoginButton(){
    return cy.get("#login-button-from-HomePage");
  }
  getInputUsername(){
    return cy.get("#login-username");
  }
  getInputPassword(){
    return cy.get("#login-password");
  }
  getLoginButtonSubmit(){
    return cy.get("#login-modal  button").contains("Log In");
  }
  getSubmitButton(){
    return cy.get("#create-post-button");
  }
  getSearchField(){
    return cy.get("#search-input");
  }
}

export default new HomePage();
