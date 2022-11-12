class SearchPagePostsTab {

    getPostContainer(){
        return cy.get("the box of the post to get the hot attribute")
    }


    getPostsContent(){
        return cy.get(".post-content")
    }


    getSortButton(){
        return cy.get(".sort");
    }

    getSortDropDown(){
        return cy.get(".drop-down-sort");
    }

    getSortDropDownItem(text){
        return cy.get(".dropdown-item").contains(text)
    }

    getTimeButton(){
        return cy.get(".time");
    }

    getTimeDropDown(){
        return cy.get(".drop-down-time");
    }

    getTimeDropDownItem(text){
        return cy.get(".dropdown-item").contains(text)
    }

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

    getCommentsUnites(){
        return cy.get(".comments-units")
    }

    getCommentsNumber(){
        return cy.get(".comments")
    }

    getSeeMoreCommunitiesSectionButton(){
        return cy.get("#see-more");
    }

    getJoinCommunityButton(text){
        return cy.get(".join").contains(text);
    }

    getAllCommunitiesButtons(){
        return cy.get(".join").filter((index, elt) => { return elt.innerText.match("Join")||  elt.innerText.match("Joined") }) ;
    }
    
    getCommunitiesNames(){
        return cy.get("community Name Selector");
    }

    getFollowButtons(text){
        if(text)
        {
            cy.get(".follow").contains(text);
        }
        else
        {
            cy.get(".follow");
        }
    }

    getBackToTopButton(){
        return cy.get("#back-to-top");
    }

    functionScroll(x,y){
        cy.scrollTo(x,y);
    }

    getSuccessAlert(){
        return cy.get("#success-alert");
    }
  }
  
  export default new SearchPagePostsTab();
  