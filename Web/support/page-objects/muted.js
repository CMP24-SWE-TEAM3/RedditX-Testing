class Muted {
    getMutedButton() {
        return cy.get('#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(7) > a')
    }
    getAboutMutedUsersButton() {
        return cy.get('')
    }
    getMuteUserButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-hMcaGg.jJwFlC > button');
    }
    getMuteUserWindow() {
        return cy.get('body > div.fade.sc-ayMzm.cdUbNI.modal.show > div > div > div.sc-jvvemr.ciPIVc.modal-header');
    }
    getEnterUsertoMuteContainer() {
        return cy.get('body > div.fade.sc-ayMzm.cdUbNI.modal.show > div > div > div.modal-body > div > div.sc-qyDQW.lcCdS > input');
    }
    getReasonForMuteContainer() {
        return cy.get('body > div.fade.sc-ayMzm.cdUbNI.modal.show > div > div > div.modal-body > div > textarea');
    }
    
    getMuteUserOfWindow1Button() {
        return cy.get('body > div.fade.sc-ayMzm.cdUbNI.modal.show > div > div > div.modal-body > div > div.sc-gCyuwZ.cntRXX > button');
    }
    getCancleOfWindow1Button() {
        return cy.get('body > div.fade.sc-ayMzm.cdUbNI.modal.show > div > div > div.sc-jvvemr.ciPIVc.modal-header > button');
    }
    getSearchForMutedUsersContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-etDPQT.bzbSKj > div.sc-bmwsZq.dGUGtZ > input');
    }
    getSearchButton() {
        return cy.get('');
    }
    getWindowOfMutedUsers() {
        return cy.get('');
    }
    getFirstUserinWindowOfMutedUsers() {
        return cy.get('');
    }
    getMoreDetalisOfMutedUserButton() {
        return cy.get('will need to to send the id of specific one of the banned user in the Window ');
    }
    getWindpwOfDetalisOfMutedUserButton() {
        return cy.get('');
    }
    getUnMuteButtonButton() {
        return cy.get('');
    }
    getWindpwOfUnmuteApprovedUserButton() {
        return cy.get('');
    }
    getUnmuteButtonfromWindow() {
        return cy.get('');
    }
}
export default new Muted();
