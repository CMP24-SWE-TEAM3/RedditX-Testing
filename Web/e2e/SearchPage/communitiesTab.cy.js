import "cypress-real-events";
import {SearchPagePostsTab,SearchPageCommunityTab} from "../../support/page-objects";
import {joinCommunity,
        leaveCommunity,
        checkUrl} from "../../Utils/searchPage/postsTab";
describe("test Communities Tab",()=>{
    const SEARCH_QUERY="ahh";
    before(()=>{
        //visit with Query
        // must visit home page and then search in search box and check the url type and query
        // cy.visit("https://www.reddit.com");
        // cy.get("#search-input").type(SEARCH_QUERY)
        // cy.url().should("include",`search/?q=${SEARCH_QUERY}&type=link`)
        //get Communities tab
        cy.visit("http://localhost:1648/posts");
        cy.get("button").contains("Communities").click();
        // cy.url().should("include",`search/?q=${SEARCH_QUERY}&type=comment`)
    })
    it("check button toggle",()=>{
        SearchPagePostsTab.getJoinCommunityButton("Join").first().click().then($el=>{
            console.log($el[0])
            expect($el[0].innerText).to.equal("Joined");
        });
    })
    it("check the hover on the button",()=>{
        SearchPagePostsTab.getJoinCommunityButton("Join").first().click();
        SearchPagePostsTab.getJoinCommunityButton("Joined").first().realHover();
        SearchPagePostsTab.getJoinCommunityButton("Joined").first().should("have.text","Leave");
    })
    it("join community from the side section",()=>{
        joinCommunity();
        
    })

    it("Leave community from the side section",()=>{
        leaveCommunity();
        
    })

    it("visit community section",()=>{
        SearchPageCommunityTab.getCommunitiesNames().then(communityName=>{
            var communityNameSelector=communityName[0].innerText;
            SearchPageCommunityTab.getCommunitiesNames().contains(communityNameSelector).click();
            checkUrl(communityNameSelector);
        })
       
        
    })

})