import  Message  from "../../support/page-objects/messagesreda"
import {login} from "../../Utils/utils";
import {checkUrl} from "../../Utils/utils"
import Notifications from "../../support/page-objects/notifications";
describe('Test the All messages Tab', () => { 
    beforeEach(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        //HomePage.getNotificationButton().realClick();
        //HomePage.getSeeAll().click();
        Notifications.getNotifictionsButtonFromHomePage().should("be.visible").click();
        Notifications.getSeeAllNotifictionsButton().should("be.visible").click();
        Message.getMessagesTab().realClick();
        cy.wait(4000);
    })
    it("click on the mark unread will put the message in the unread tab ",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getMarkUnreadButton(0).realClick();
        cy.get("@content").then((content)=>{
            Message.getUnreadTab().should("be.exist").realClick();
            Message.getMessageWithContent(content).should("be.exist");
        })
    })


    it("click on the delete link and then you will see the message",()=>{
        Message.getDeleteLink(0).realClick();
        Message.getDeleteAlert().should("be.visible");
    })


    it("click on the delete link and then click on the Yes the message will disappear",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getDeleteLink(0).realClick();
        Message.getYesButton().realClick();
    })

    it("click on the delete link and then click on the no the message will disappear",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getDeleteLink(0).realClick();
        Message.getNoButton().realClick();
    })

    it("click on report link and then will see the prompet of the report",()=>{
        Message.getReportLink(0).realClick();
        Message.getReportPrompet().should("be.visible");
    })

    it("when i click on the Reply the unread mark will appear",()=>{
        Message.getReplyButton().first().realClick();
        Message.getMarkUnreadButton().first().should("be.visible");
    })


    it("when i click on the Reply the unread mark will appear",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getReplyButton().first().realClick();
        Message.getMarkUnreadButton().first().realClick();
        cy.get("@content").then((content)=>{
            Message.getUnreadTab().should("be.exist").realClick();
            Message.getMessageWithContentUnreaded(content).should("be.exist");
        })
    })

    it("when i click on the reply i will get the textarea",()=>{
        Message.getReplyButton().first().realClick();
        Message.getReplyTextArea().should("be.visible");
    })


    it("when i click on the reply i will get the Save button",()=>{
        Message.getReplyButton().first().realClick();
        Message.getSaveReplyButton().should("be.visible");
    })


    it("when i click on the reply i will get the Cancel button",()=>{
        Message.getReplyButton().first().realClick();
        Message.getCancelReplyButton().should("be.visible");
    })

    it("when i click on the cancel the textarea will disappear",()=>{
        Message.getReplyButton().first().realClick();
        Message.getCancelReplyButton().realClick();
        Message.getReplyTextArea().should("be.not.visible");
    })

    it("click on the name of the user will redirect to the link contains its name",()=>{
        //sc-sImlw fzpEUU admin
        Message.getUserNameMessage(0).invoke("text").as("username");
        Message.getUserNameMessage(0).realClick();
        cy.get("@username").then((username)=>{
            checkUrl(username);
        })
        
    })

    it("click on the  expand and see the unread message button",()=>{
        Message.getInnerMessageTab().realClick();
        Message.getExpand().realClick();
        Message.getMessagesUnread().should("be.visible");
    })

    it("click on the  collapes and see the unread message button",()=>{
        Message.getInnerMessageTab().realClick();
        Message.getCollapes().realClick();
        Message.getMessagesUnread().should("be.not.visible");
    })
})