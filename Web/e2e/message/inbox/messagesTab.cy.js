import { Message } from "../../../support/page-objects"
describe('Test the All messages Tab', () => { 
    it("click on the mark unread will put the message in the unread tab ",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getMarkUnreadButton(0).realClick();
        cy.get("@content").then((content)=>{
            Message.getUnreadTab().realClick();
            Message.getMessageWithContent(content).should("be.exist");
        })
    })

    it("click on permalink will redirect you to the Messages page to show the message individual ",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getPermalink(0).realClick();
        cy.wait(3000);
        cy.get("@content").then((content)=>{
            Message.getMessageWithContent(content).should("be.exist");
        })
    })

    it("click on the delete link and then you will see the message",()=>{
        Message.getDeleteLink(0).readClick();
        Message.getDeleteAlert(0).should("be.visible");
    })


    it("click on the delete link and then click on the Yes the message will disappear",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getDeleteLink(0).realClick();
        Message.getYesButton().realClick();
        cy.get("@content").then((content)=>{
            Message.getMessageWithContent(content).should("not.exist");
        })
    })

    it("click on the delete link and then click on the no the message will disappear",()=>{
        Message.getMessageContent(0).invoke("text").as("content");
        Message.getDeleteLink(0).realClick();
        Message.getNoButton().realClick();
        cy.get("@content").then((content)=>{
            Message.getMessageWithContent(content).should("be.visible");
        })
    })

})