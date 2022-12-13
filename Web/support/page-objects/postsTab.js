class SearchPagePostsTab {

    getPostContainer(){
        return cy.get("the box of the post to get the hot attribute")
    }


    getPostsContent(){
        return cy.get(".post-content")
    }


    getSortButton(){
        return cy.get("div.sort button[type='button']");
    }

    getSortDropDown(){
        return cy.get("div.sort > div > div");
    }

    getSortDropDownItem(text){
        return cy.get(".dropdown-item").contains(text)
    }

    getTimeButton(){
        return cy.get("div.time button[type='button']");
    }

    getTimeDropDown(){
        return cy.get("div.time > div > div");
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
        return cy.get("#seemore");
    }

    getJoinCommunityButton(text){
        return cy.get("div> a > div > div.button > button").contains(text);
    }

    getAllCommunitiesButtons(){
        return cy.get("div> a > div > div.button > button").filter((index, elt) => { return elt.innerText.match("Join")||  elt.innerText.match("Joined") }) ;
    }
    
    getCommunitiesNames(){
        return cy.get("community Name Selector");
    }

    getFollowButtons(text){
        if(text)
        {
            cy.get(".follow-button").contains(text);
        }
        else
        {
            cy.get(".follow-button");
        }
    }

    getBackToTopButton(){
        return cy.get("#backtotop");
    }

    functionScroll(x,y){
        cy.scrollTo(x,y);
    }

    getSuccessAlert(){
        return cy.get("#successAlert");
    }
  }
  
  export default new SearchPagePostsTab();
  