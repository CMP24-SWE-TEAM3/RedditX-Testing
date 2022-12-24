import  {LoginPage} from "../../support/page-objects";
import Flair from "../../support/page-objects/flair";

module.exports.LoginWithValidEmail=()=>{
    LoginPage.getUsernameField().type("mahmoud_reda");
    LoginPage.getPasswordField().type("123456789");
    LoginPage.getLoginButton().realClick();
}
module.exports.checkVisibilityOfallButtonsAndClicks=()=>{
    Flair.getchooseCommunityButton().should("be.visible")
    //Flair.getflairButton().should("be.visible").should('be.disabled').should("have.text",'Flair')
    Flair.getchooseCommunityButton().click()
    Flair.geCommunitiesWindow().should("be.visible")
    Flair.getcommunity1Button().scrollIntoView().should("be.visible").click()
    Flair.getflairButton().should("be.visible").should('be.enabled').should("have.text",'Flair')
    Flair.getflairButton().should("be.visible").click()
    Flair.gettitleofflairwindow().should("be.visible").should("have.text",'Select your community flair')
    Flair.getwindowofselectedflairtitle().should("be.visible").should("have.text",' No flair selected')
}

module.exports.windowofselectedflairtitle=(text)=>{

    Flair.getwindowofselectedflairtitle().should("be.visible").should("have.text",`${text}`)
}


module.exports.getflairButtontitle=(text)=>{

    Flair.getflairButton().should("be.visible").should('be.enabled').should("have.text",`${text}`)
}