import {SignUpPage} from "../../support/page-objects";
//const HomePage = new HomePage();

module.exports.ContainersOfSignUpPage=(type)=>{
    switch(type){
        case "ContinerofEmail":
            SignUpPage.getContinerofEmail().should('be.visible')
            break;
        case "ContinerofErrorinEmail":
            SignUpPage.getContinerofErrorinEmail().should('be.visible').should("have.text","not a valid email address")
            break;
        case "ContainerOfSignUptitle":
            SignUpPage.getContainerOfSignUptitle().should('be.visible').should("have.text",'Sign Up')
            break;
    }
}