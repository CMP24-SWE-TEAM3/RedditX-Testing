class CommunitySettings {
    
    getCommunitySettingsButton() {
        return cy.get('#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(15) > a')
    }
    getCommunityButton() {
        return cy.get('#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(2) > a');
    }
    getPostsandCommentsButton() {
        return cy.get('#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(3) > a');
    }
    //Community settings
    getCommunityNameContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-bTjia-d.JmYcz > div.sc-dKsATH.faYfpN > input');
    }
    getCommunityTopicsContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-bTjia-d.JmYcz > div.sc-inWXWr.ikiYUI');
    }
    getCloseButtonFromCommunityTopicsContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-bTjia-d.JmYcz > button > button.sc-cwEnQW.iWTYlv');
    }
    getCommunityDescriptionContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-bTjia-d.JmYcz > textarea:nth-child(14)');
    }
    getWelecomeNewMemberCheckBox() {
        return cy.get('#custom-switch');
    }
    getSendWelecomeMessageNewMemberContainer() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-bTjia-d.JmYcz > textarea:nth-child(17)');
    }
    getLanguageButton() {
        return cy.get('#select_flag_button');
    }
    getEnglishButton() {
        return cy.get('#select_flag_en');
    }
    getSelectCountyButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-bTjia-d.JmYcz > div.sc-gnIklZ.gOpyHh > select.sc-byLDSa.kdLYYi');
    }
    getEgyptButton() {
        return cy.get('');
    }
    getSelectRegionButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-bTjia-d.JmYcz > div.sc-gnIklZ.gOpyHh > select.sc-jTHVFf.fqCIOr');
    }
    getCairoButton() {
        return cy.get('');
    }
    getPublicCheckBox() {
        return cy.get('#public');
    }
    getPrivateCheckBox() {
        return cy.get('#private');
    }
    getRestrictedCheckBox() {
        return cy.get('#restricted');
    }
    getPlus18CheckBox() {
        return cy.get('#custom-switch');
    }
    getAcceptingRequestsCheckBox() {
        return cy.get('#custom-switch')
    }
    getSaveChangesButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-iCwKwi.dhxIZR > button');
    }
    //Post and Comment settings

    getEnablespoilerCheckBox() {
        return cy.get('#custom-switch');
    }
    getSuggestedSortForCommentsButton() {
        return cy.get('#dropdown-basic');
    }
    getBestCommentsButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-kcdArT.bXRBLJ > div:nth-child(8) > div.sc-cLXZOZ.ctBCWq > div > div > a:nth-child(2)');
    }
    getTopCommentsButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-kcdArT.bXRBLJ > div:nth-child(8) > div.sc-cLXZOZ.ctBCWq > div > div > a:nth-child(4)');
    }
    getOldCommentsButton() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-kcdArT.bXRBLJ > div:nth-child(8) > div.sc-cLXZOZ.ctBCWq > div > div > a:nth-child(3)');
    }
    getAllowImagesinCommentsCheckBox() {
        return cy.get('.gXQIek > .sc-cLXZOZ')
    }
    getSaveChangesButton1() {
        return cy.get('#root > div > div.sc-fvImih.isAtny.col > div > div > div > div.sc-tQqtK.TrkZi > button');
    }
}
export default new CommunitySettings();
