class Profile {
    
    getSettingsButton() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-cwNKtl.eeHCIe > div > div.sc-kUSsgP.jeXJML > div > a')
    }
    getOverViewButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.overview.active')
    }
    getPostsButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.posts')
    }
    getCommentsButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.comments')
    }
    getHistoryButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.history')
    }
    getSavedButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.saved')
    }
    getHiddenButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.hidden')
    }
    getUpvotedButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.up-vote')
    }
    getDownloadButton() {
        return cy.get('#root > div > div.sc-dHvkDI.cgWWOg > div > a.sc-hiXQjW.esdhDh.down-vote')
    }
    getCreateAvatarButton() {
        return cy.get('');
    }
    getCreateAvatarWindow() {
        return cy.get('');
    }
    getChangeAvatarButtonFromCreateAvatarWindow() {
        return cy.get('');
    }
    getSaveAvatarButtonFromCreateAvatarWindow() {
        return cy.get('');
    }
    getAddSocialLinkButton() {
        return cy.get('');
    }
    getAddSocialLinksWindow() {
        return cy.get('');
    }
    getInstgramButton() {
        return cy.get('');
    }
    getUserNameAreaOfInstgram() {
        return cy.get('');
    }
    getSaveButtonOfSocialLink() {
        return cy.get('');
    }
    getNewPostButton() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-cwNKtl.eeHCIe > div > div.sc-kUSsgP.jeXJML > div > div.sc-daMOyg.dgJjIp > a');
    }
    getMoreOptionsButton() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-cwNKtl.eeHCIe > div > div.sc-kUSsgP.jeXJML > div > div.sc-jpdAjW.fpCaIW > button');
    }
    getProfileModeratorButton() {
        return cy.get('');
    }
    getAddToCustomFeedButton() {
        return cy.get('');
    }
    getCreateCustomFeedButton() {
        return cy.get('');
    }
    getCustomFeedContiner() {
        return cy.get('');
    }
    getcreateButtonOfCustomFeed() {
        return cy.get('');
    }
    getUpdateButtonOfCustomFeed() {
        return cy.get('');
    }
    getFewerOptionsButton() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-cwNKtl.eeHCIe > div > div.sc-kUSsgP.jeXJML > div > div:nth-child(9) > button');
    }
    getWindowOfCommuntiesthatIModerate() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-cwNKtl.eeHCIe > div > div.sc-SdhMy.cBHVlv');
    }
    getBacktoTopButton() {
        return cy.get('');
    }

    ////// OverView Tab
    getTitleOfFirstWindow() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-jPXeIz.bCgGjh > div.sc-hJUKq.jIfhcu > div:nth-child(1) > div > div > div.sc-bODQby.cakZPW > div > div > div');
    }
    getTitleOfSecondWindow() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-jPXeIz.bCgGjh > div.sc-hJUKq.jIfhcu > div:nth-child(2) > div > div.sc-GKYbw.kUhENu > div.sc-gGvHcT.sVIXb');
    }
    ///// Posts
    getTitleOfFirstWindowFromPosts() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-gUqGrB.eIasQT > div.sc-iBzfSo.jZGZU > div:nth-child(1) > div > div.sc-cHXHAP.gMRSHD > div > div.sc-csRcV.fhCInh > div.sc-gGvHcT.sVIXb');
    }
    getTitleOfFirstWindowFromComments() {
        return cy.get('#root > div > div.sc-idAmOS.fIbtPa > div.sc-sqVcr.cfHMBi > div.sc-iKusNC.boojVm > div > div > div > div.sc-bODQby.cakZPW > div > div > div');
    }





    //////////////////////////////////////Reda
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
export default new Profile();
