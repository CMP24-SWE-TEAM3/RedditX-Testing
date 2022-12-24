import {SignUpPage} from "../../support/page-objects";
//const HomePage = new HomePage();

module.exports.buttonCheckAndClickSignUpPage=(type)=>{
    switch(type){
        case "Google":
            SignUpPage.getContinerofContinueWithGoogle().should("be.visible").trigger("mouseover").click() 
            break;
        case "Apple":
            SignUpPage.getContinerofContinueWithApple().should("be.visible").trigger("mouseover").click() 
            break;
        case "LoginButton":
            SignUpPage.getLoginButton().should("be.visible").trigger("mouseover").click() 
            break;
        case "Continue":
            SignUpPage.getContiueButton().contains('Continue').click({force: true})
            break;
       
            
            
        
    }
}