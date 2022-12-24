class Message{
    getMarkUnreadButton(i){
        return cy.get("a.sc-gNghfG.kUHtua").contains("Mark Unread");
    }

    getDeleteLink(i){
        return cy.get(`a.sc-gNghfG.kUHtua:nth(${i})`).contains("Delete");
    }


    getReportLink(i){
        return cy.get(`.report-link:nth(${i})`);
    }
    getReportPrompet(){
        return cy.get(".modal-content")
    }
    getYesButton(){
        return cy.get("a.sc-gNghfG.kUHtua").contains("Yes");
    }

    getNoButton(){
        return cy.get("a.sc-gNghfG.kUHtua").contains("No");
    }

    getDeleteAlert(){
        return cy.get(`span.sc-sLpyT.ihqIUh`).contains("Are You Sure");
    }
    getMessageContent(i){
        return cy.get(`.sc-fiDBSu.dUgERJ:nth(${i})`)
    }
    getMessageWithContent(){
        return cy.get("div.sc-fiDBSu.dUgERJ");
    }
    getUnreadTab(){
        return cy.get("a.sc-ddJqWY.chYmJH").contains("Unread")
    }
    getMessagesTab(){
        return cy.get(".another[href='/message/']");
    }

    getReplyButton(){
        return cy.get("a.sc-gNghfG.kUHtua").contains("Reply");
    }
    getReplyTextArea(){
        return cy.get("textarea[name='message']")
    }

    getSaveReplyButton(){
        return cy.get("button.sc-ejoNlL.iFdqNO").contains("Save")
    }

    getCancelReplyButton(){
        return cy.get("button.sc-ejoNlL.iFdqNO").contains("Cancel")
    }
    getMessageWithContentUnreaded(content){
        return cy.get("div.sc-jRZndg.hlpVYN").contains(content);
    }

    getInnerMessageTab(){
        return cy.get("a.sc-ddJqWY.chYmJH").contains("Messages");
    }

    getMessagesUnread(){
        return cy.get("a.sc-bbSSRB.ioxzfd").contains("Mark Unread");
    }

    getExpand(){
        return cy.get("a.sc-kiMkSl.cwFDBm").contains("expand all");
    }

    getCollapes(){
        return cy.get("a.sc-kiMkSl.cwFDBm").contains("collapse all");
    }

    getUserNameMessage(i){
        return cy.get("a.admin:nth("+i+")");
    }
}

export default new Message();