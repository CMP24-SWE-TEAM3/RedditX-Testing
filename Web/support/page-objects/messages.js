class Message{
    getMarkUnreadButton(){
        return cy.get("#unread-btn");
    }

    getPermalink(i){
        return cy.get(`.permalink:nth(${i})`)
    }

    getDeleteLink(i){
        return cy.get(`.deletelink:nth(${i})`)
    }

    getReportLink(i){
        return cy.get(`.report-link:nth(${i})`);
    }
    getYesButton(){
        return cy.get(".yes-button");
    }

    getNoButton(){
        return cy.get(".no-button");
    }

    getDeleteAlert(i){
        return cy.get(`.delete-alert:nth(${i})`).contains("")
    }
    getMessageContent(i){
        return cy.get(`.message-content:nth(${i})`)
    }
    getMessageWithContent(text){
        return cy.get(".messages").contains(text)
    }
    getUnreadTab(){
        return cy.get("#unread-tab")
    }
}

export default new Message();