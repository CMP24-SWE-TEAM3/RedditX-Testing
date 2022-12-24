class Approved {
    getApprovedButton() {
        return cy.get('#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(8) > a')
    }
    getAboutApprovedUsersButton() {
        return cy.get('')
    }
    getApproveUserButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-eOdrAP.kCGQOI > button');
    }
    getApproveUserWindow() {
        return cy.get('body > div.fade.sc-bqozWy.djCTTa.modal.show > div > div > div.sc-fNdZEH.rJFav.modal-header');
    }
    getEnterUsertoApproveContainer() {
        return cy.get('body > div.fade.sc-bqozWy.djCTTa.modal.show > div > div > div.modal-body > div > div.sc-kyZIMV.dmObVC > input');
    }
    getAdduserOfWindow1Button() {
        return cy.get('body > div.fade.sc-bqozWy.djCTTa.modal.show > div > div > div.modal-body > div > div.sc-ljcOAC.eZjvCy > button');
    }
    getCancleOfWindow1Button() {
        return cy.get('body > div.fade.sc-bqozWy.djCTTa.modal.show > div > div > div.sc-fNdZEH.rJFav.modal-header > button');
    }
    getSearchForApprovedUsersContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-hmRHzh.hMzSLq > div.sc-fQkmEp.eroA-Dh > input');
    }
    getSearchButton() {
        return cy.get('');
    }
    getWindowOfApprovedUsers() {
        return cy.get('');
    }
    getFirstUserinWindowOfApprovedUsers() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-hmRHzh.hMzSLq > div.sc-btuMWg.giQWk > div');
    }
    getSecondUserinWindowOfApprovedUsers() {
        return cy.get('');
    }
    getRemoveApprovedUserButton() {
        return cy.get('will need to to send the id of specific one of the banned user in the Window ');
    }
    getWindpwOfRemoveApprovedUserButton() {
        return cy.get('');
    }
    getRemoveButtonfromWindow() {
        return cy.get('');
    }
    getSendMessageButton() {
        return cy.get('will need to to send the id of specific one of the banned user in the Window');
    }
}
export default new Approved();
