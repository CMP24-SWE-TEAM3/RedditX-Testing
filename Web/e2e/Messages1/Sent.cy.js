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
    HomePage.getExitbuttonoftheleftwindow().should("be.visible").trigger("mouseover").click()
    })
        
        // Send an Message check that this message Appear in Sent Messages
        it("Send an Message check that this message Appear in Sent Messages",()=>{
            Messages.getSendAPrivateMessageTabButton().should("be.visible").click({force: true});
            Messages.getSendMessageToContainer().should("be.visible").click().type("mahmoud_reda")
            Messages.getSubjectContainer().should("be.visible").click().type("Very Important")
            Messages.getMessageBodyContainer().should("be.visible").click().type("Helllllllo My Dear")
            Messages.getSendMessageButton().should("be.visible").click()
            //check this Message
            Messages.getSentTabButton().scrollIntoView().should("be.visible").click({force: true});
            Messages.getFirstSentMessage().should("be.visible")
            Messages.getFirstSentMessageTitle().should("be.visible").should("include.text","ggggggggggggg:")
            Messages.getFirstSentMessageBody().should("be.visible").should("include.text","ggggggggggggggggggggggg")
        })
        it("Replay to the First Sent Message",()=>{
            Messages.getSentTabButton().should("be.visible").click({force: true});
            Messages.getFirstSentMessage().should("be.visible")
            Messages.getFirstSentMessageTitle().should("be.visible").should("include.text","Very Important")
            Messages.getFirstSentMessageBody().should("be.visible").should("include.text","Helllllllo My Dear")
            Messages.getReplayButtonFromFirstMessage().should("be.visible").click();
            Messages.getReplayContainer().should("be.visible").type("HElllo")
            Messages.getSaveReplayButton().should("be.visible").click()
        })
        it("Permalink to the First Sent Message",()=>{
            Messages.getSentTabButton().should("be.visible").click({force: true});
            Messages.getFirstSentMessage().should("be.visible")
            Messages.getFirstSentMessageTitle().should("be.visible").should("include.text","Very Important")
            Messages.getPermalinkButtonFromFirstMessage().should("be.visible").click();
            // it will Refer to the Page Of Messages from Inbox 
        })
        
    })
