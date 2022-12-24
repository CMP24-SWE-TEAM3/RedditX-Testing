class SubReddit {
    
    getjoinButton() {
        return cy.get('.join')
    }
    getNotifcationButton() {
        return cy.get('');
    }
    getNotifcationWindow() {
        return cy.get('');
    }
    getFrequentButton() {
        return cy.get('');
    }
    getLowButton() {
        return cy.get('');
    }
    getOffButton() {
        return cy.get('');
    }
    getModToolsButton() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-jFYche.iSwqmK > div.sc-hWdGLs.dbQNag > div.sc-hTRxPq.fmubgv > a');
    }
    getThreePointsButton() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-jFYche.iSwqmK > div.sc-hWdGLs.dbQNag > div.sc-hTRxPq.fmubgv > button');
    }
    getWindowOfThreePointsButton() {
        return cy.get('');
    }
    getAddToCustomFeedButton() {
        return cy.get('');
    }
    getAddToFavoriteButton() {
        return cy.get('');
    }
    getAddDescriptionContiner() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-jFYche.iSwqmK > div.sc-bPxJiH.hGeDbX > div.sc-fuRDZQ.MLcEv');
    }
    getCancleButtonFromAddDescription() {
        return cy.get('body > div.fade.sc-eyLAWx.gGrccw.modal.show > div > div > div.modal-footer > button.discard.btn.btn-primary');
    }
    getSaveButtonFromAddDescription() {
        return cy.get('body > div.fade.sc-eyLAWx.gGrccw.modal.show > div > div > div.modal-footer > button.save.btn.btn-primary');
    }
    getCommunitytopicsButton() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-jFYche.iSwqmK > div.sc-bPxJiH.hGeDbX > div.sc-gDiTby.jgruiQ > div.sc-iKGzzv.iTVBdl > button');
    }
    getTheThirdSelectionFromTheTopics() {
        return cy.get('');
    }
    getAddSubTobicButton() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-jFYche.iSwqmK > div.sc-bPxJiH.hGeDbX > div.sc-gDiTby.jgruiQ > div.sc-faSwKo.eGuusM > div');
    }
    getContainerOfAddSubTobic() {
        return cy.get('');
    }
    getCancleButtonFromAddSubTobic() {
        return cy.get('');
    }
    getSaveButtonFromAddSubTobic() {
        return cy.get('');
    }
    getCreatePostButton() {
        return cy.get('.sc-hQZdRR')
    }
    getCommunityOptionsButton() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-jFYche.iSwqmK > div.sc-bPxJiH.hGeDbX > div.sc-lkkFJn.cNTMgj > div');
    }
    getCommunityThemeButton() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-jFYche.iSwqmK > div.sc-bPxJiH.hGeDbX > div.sc-lkkFJn.cNTMgj > div.sc-gFvbXA.louThQ');
    }
    getMessageTheModButton() {
        return cy.get('#root > div > div > div.sc-hDbpAC.pWWCl > div.sc-hFnywE.kyaTer > div > div.sc-hQPBQE.cIHQIP > div > div.sc-hgYirE.kouXUu > a');
    }
    getVIEWALLMODERATORSButton() {
        return cy.get('.sc-eThmLp');
    }
    getBackToTopButton() {
        return cy.get('');
    }
    OpenSubRedditPage() {
        return  cy.get("#root > nav > div > span.drop-caret.navbar-brand > div > div > div > ul > a:nth-child(4)").click(( {force: true}));
    }
    OpenSubRedditPageTocheckPostFlair() {
        return  cy.get("#root > nav > div > span.drop-caret.navbar-brand > div > div > div > ul > a:nth-child(4)").click(( {force: true}));
    }

    ////////// reda
    getUpvoteUnites(){
        return cy.get(".upvote-units")
    }

    getUpvotes(){
        return cy.get(".upvote")
    }

    getTimeUnites(){
        return cy.get(".time-units")
    }

    getTimeNumber(){
        return cy.get(".time-number")
    }
}
export default new SubReddit();
