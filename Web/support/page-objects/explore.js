class Explore{
    /* posts tab */
    getPostUserName(){
        return cy.get("#username")
    }

    getUserNameCard(){
        return cy.get("#usernameCard")
    }

    getLikes(){
        return cy.get("#likes")
    }

    getUpArrow(){
        return cy.get("#upArrow")
    }


    getDownArrow(){
        return cy.get("#downArrow")
    }

    getShareButton(){
        return cy.get("#shareButton")
    }
    getShareDropdown(){
        return cy.get("#shareDropdown")
    }
    getCopyButton(){
        return cy.get("#CopyButton")
    }
    getNotification(){
        return cy.get("#notification")
    }

    getSaveButton(i){
        return cy.get(`.saveButton:nth(${i})`)
    }

    getPost(i){
        return cy.get(`.post:nth(${i})`)
    }

    getHideButton(i){
        return cy.get(`.HideButton:nth(${i})`)
    }
    /*end of the posts tab */
    /* the communities tab */

    getCommunitiesTab(){
        return cy.get("#communitiesTab")
    }

    getJoinButton(i){
        return cy.get(`.join-btn:nth(${i})`)
    }

    getJoinButtonNotClicked(i){
        return cy.get(".Join-button").contains("Join")[i]
    }

    getLeaveButtonNotClicked(i){
        return cy.get(".Join-button").contains("Leave")[i]
    }
    /*end of the communities tab */
    /*the related Tab */
    getLinksElement(i){
        return cy.get(`.link:nth(${i})`)
    }
    /*end of the related Tab */
}

export default new Explore();
