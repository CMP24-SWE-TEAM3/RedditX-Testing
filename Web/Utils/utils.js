import {HomePage} from "../support/page-objects"
module.exports.login=()=>{
    cy.wait(4000)
    HomePage.getLoginButton().click();
    HomePage.getInputUsername().type("mahmoud_reda");
    HomePage.getInputPassword().type("123456789");
    HomePage.getLoginButtonSubmit().realClick();
    cy.wait(2000)
}


module.exports.checkUrl=(text)=>{
    cy.url().should("include",`${text}`);
}
