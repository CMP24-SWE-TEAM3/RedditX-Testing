class Messages {
    //Send A Private Message
    getMessageButtonFromHome() {
        return cy.get('.offcanvas-body > .sc-dpmiif > .list-unstyled > :nth-child(9)');
    }
    getSendAPrivateMessageTabButton() {
        return cy.get('#root > div.sc-jxfubC.bHAScV > div.sc-jiFHBL.LNcYy > div > ul > li:nth-child(1) > a')
    }
    getSentTabButton() {
        return cy.get('#root > div.sc-jxfubC.bHAScV > div > div > ul > li:nth-child(3) > a')
    }
    getMessageFromButton() {
        return cy.get('');
    }
    getFirstUserofMessageFromButton() {
        return cy.get('');
    }
    getSendMessageToContainer() {
        return cy.get('#root > div.sc-llGDqb.kWinan > div > div > form > div:nth-child(1) > div > input');
    }
    getSendMessageToErrorContainer() {
        return cy.get('#root > div.sc-llGDqb.kWinan > div > div > form > div:nth-child(1) > div > span.sc-cWiZSr.ejuLxb.active');
    }
    getSubjectContainer() {
        return cy.get('#root > div.sc-llGDqb.kWinan > div > div > form > div:nth-child(2) > div > input');
    }
    getSubjectErrorContainer() {
        return cy.get('#root > div.sc-llGDqb.kWinan > div > div > form > div:nth-child(2) > div > span.sc-cWiZSr.ejuLxb.active');
    }
    getMessageBodyContainer() {
        return cy.get('#root > div.sc-llGDqb.kWinan > div > div > form > div:nth-child(3) > div > div > textarea');
    }
    getMessageBodyErrorContainer() {
        return cy.get('#root > div.sc-llGDqb.kWinan > div > div > form > div:nth-child(3) > div > div > span');
    }
    getSendMessageButton() {
        return cy.get('#root > div.sc-llGDqb.kWinan > div > div > form > button');
    }
    ///Sent Messages
    getFirstSentMessage() {
        return cy.get('#root > div.sc-jcTjWU.dDMTwg > div > div:nth-child(1) > div')
    }
    getFirstSentMessageTitle() {
        return cy.get('#root > div.sc-jcTjWU.dDMTwg > div > div:nth-child(1) > div > div.sc-dOGYXd.hnbtnQ')
    }
    getFirstSentMessageBody() {
        return cy.get('#root > div.sc-jcTjWU.dDMTwg > div > div:nth-child(1) > div > div.sc-jRZndg.hlpVYN')
    }
    
    getPermalinkButtonFromFirstMessage() {
        return cy.get('');
    }
    getReplayButtonFromFirstMessage() {
        return cy.get('');
    }
    getReplayContainer() {
        return cy.get('');
    }
    getSaveReplayButton() {
        return cy.get('');
    }
    getCancleReplayButton() {
        return cy.get('');
    }
}
export default new Messages();
