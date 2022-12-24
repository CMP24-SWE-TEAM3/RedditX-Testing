import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
import Messages from "../../support/page-objects/messages";
import HomePage from "../../support/page-objects/home-page";
describe('Notifications Page', () => {
    beforeEach('mmm',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("https://dev.redditswe22.tech/login")
    // login with a valid email
    LoginWithValidEmail()
    
    HomePage.getHOMEiconbutton().should("be.visible").trigger('mouseover').click();
    HomePage.getButtonthatremoveHomeWindowtoleft().should("be.visible").trigger('mouseover').click();
    Messages.getMessageButtonFromHome().should("be.visible").trigger('mouseover').click();
    HomePage.getExitbuttonoftheleftwindow().scrollIntoView().should("be.visible").trigger("mouseover").click()
    
    // open community Setting
    Messages.getSendAPrivateMessageTabButton().should("be.visible").click();
    })
        // invalid Cases
        it("Select My User Name to send Message Then Click Send    ",()=>{
            Messages.getSendMessageButton().should("be.visible").click()
            // error Message
            Messages.getSendMessageToErrorContainer().should("be.visible").should("have.text","please enter a username")
        })
        it("Select My User Name to send Message & Type Name of the Reciver  Then Click Send    ",()=>{
            Messages.getSendMessageToContainer().should("be.visible").click().type("mahmoud_reda")
            Messages.getSendMessageButton().should("be.visible").click()
            // error Message
            Messages.getSubjectErrorContainer().should("be.visible").should("have.text","please enter a subject")
        })
        it("Select My User Name to send Message & Type Name of the Reciver & Write Subject  Then Click Send    ",()=>{
            Messages.getSendMessageToContainer().should("be.visible").click().type("mahmoud_reda")
            Messages.getSubjectContainer().should("be.visible").click().type("Very Important")
            Messages.getSendMessageButton().should("be.visible").click()
            // error Message
            Messages.getMessageBodyErrorContainer().should("be.visible").should("have.text","we need something here")
        })
        // valid case
        it("Select My User Name to send Message & Type Name of the Reciver & Write Subject  Then Click Send    ",()=>{
            Messages.getSendMessageToContainer().should("be.visible").click().type("mahmoud_reda")
            Messages.getSubjectContainer().should("be.visible").click().type("Very Important")
            Messages.getMessageBodyContainer().should("be.visible").click().type("Helllllllo My Dear")
            Messages.getSendMessageButton().should("be.visible").click()
        })
        
    })
