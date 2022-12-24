class Moderator {
    getModeratorsButton() {
        return cy.get('#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(9) > a')
    }
    getAboutModeratorsButton() {
        return cy.get('')
    }
    getInviteUserAsModButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-bWMVHI.eZmFBu > button.sc-hcZwBK.jdGFAc');
    }
    getInviteUserAsModWindow() {
        return cy.get('body > div.fade.sc-cZWPfn.gzQjwI.modal.show > div > div > div.sc-cEDrC.jfzQdr.modal-header');
    }
    getEnterUsertoInviteAsModContainer() {
        return cy.get('body > div.fade.sc-cZWPfn.gzQjwI.modal.show > div > div > div.modal-body > div > div.sc-ipBzsk.fWGAAZ > input');
    }
    getEverythingCheckBox() {
        return cy.get('#Everything');
    }
    getManageUsersCheckBox() {
        return cy.get('#EveryThing');
    }
    getManageSettingsCheckBox() {
        return cy.get('.form-check-input w-5vm');
    }
    getMangeFlairCheckBox() {
        return cy.get('');
    }
    getManageModFlairCheckBox() {
        return cy.get('');
    }
    getInviteOfWindow1Button() {
        return cy.get('body > div.fade.sc-cZWPfn.gzQjwI.modal.show > div > div > div.modal-body > div > div.sc-dVUEnH.jrfNOe > button');
    }
    getCancleOfWindow1Button() {
        return cy.get('body > div.fade.sc-cZWPfn.gzQjwI.modal.show > div > div > div.sc-cEDrC.jfzQdr.modal-header > button');
    }
    getSearchForModeratorContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-eRmoUn.iSPCFR > div.sc-eBdXRI.jdNQCF > input');
    }
    getSearchButton() {
        return cy.get('');
    }
    getWindowOfAllModerators() {
        return cy.get('');
    }
    getFirstModeratorinWindowOfAllModerators() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-eRmoUn.iSPCFR > div.sc-izUEwv.dGkaeg > div');
    }
    getWindofModeratorsYouCanEdit() {
        return cy.get(' ');
    }
    getFristUserOfModeratorsYouCanEdit() {
        return cy.get('');
    }
    getEditButtonOfFirstModeratorOFWindofModeratorsYouCanEdit() {
        return cy.get('');
    }
    getSaveButtonOfEditWindow() {
        return cy.get('');
    }
    getInvitedmoderatorsWindow() {
        return cy.get('');
    }
    getFristUserofInvitedmoderatorsWindow() {
        return cy.get('');
    }
    getRemoveButtonOfFristUserofInvitedmoderatorsWindow() {
        return cy.get('');
    }
    getRemoveButtonWindow() {
        return cy.get('');
    }
    getRemoveButtonOftheRemoveWindow() {
        return cy.get('');
    }
    getLeaveAsModButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div.sc-bWMVHI.eZmFBu > button.sc-kexIqN.cTuDMB');
    }
    getWindowOfLeaveAsModButton() {
        return cy.get('');
    }
    getLeaveButton() {
        return cy.get('');
    }

}
export default new Moderator();
