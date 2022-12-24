class Banned {
    getBannedButton() {
        return cy.get('#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(6) > a')
    }
    getAboutBannedUsersButton() {
        return cy.get('')
    }
    getBanUserButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-ATTwC.dydRos > button');
    }
    getBanUserWindow() {
        return cy.get('body > div.fade.sc-fODFmc.kvlOIr.modal.show > div > div');
    }
    getEnterUserContainer() {
        return cy.get('body > div.fade.sc-fODFmc.kvlOIr.modal.show > div > div > div.modal-body > div > div:nth-child(1) > div > input');
    }
    getReasonForBanButton() {
        return cy.get('#dropdown-basic');
    }
    getSecondSelectionofReasonsButton() {
        return cy.get('body > div.fade.sc-fODFmc.kvlOIr.modal.show > div > div > div.modal-body > div > div:nth-child(2) > div > div > div > a:nth-child(2)');
    }
    getModNoteContainer() {
        return cy.get('body > div.fade.sc-fODFmc.kvlOIr.modal.show > div > div > div.modal-body > div > div:nth-child(3) > div > input');
    }
    getNotetoIncludeinBanMessageContainer() {
        return cy.get('body > div.fade.sc-fODFmc.kvlOIr.modal.show > div > div > div.modal-body > div > textarea');
    }
    getBanUserOfWindow1Button() {
        return cy.get('');
    }
    getCancleOfWindow1Button() {
        return cy.get('');
    }
    getSearchForBannedUsersContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-dymfkn.iOqfQY > div.sc-bjXTcR.bFFGwI > input');
    }
    getSearchButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-dymfkn.iOqfQY > div.sc-bjXTcR.bFFGwI > div');
    }
    getWindowOfBannedUsers() {
        return cy.get('');
    }
    getFirstUserinWindowOfBannedUsers() {
        return cy.get('');
    }
    getMoreDetalisOfBannedUserButton() {
        return cy.get('');
    }
    getWindpwOfDetalisOfBannedUserButton() {
        return cy.get('');
    }
    getEditButtonOfBannedUser() {
        return cy.get('');
    }
    getEditBanOfWindowButton() {
        return cy.get('');
    }
    getUnBanButtonButton() {
        return cy.get('');
    }
}
export default new Banned();
