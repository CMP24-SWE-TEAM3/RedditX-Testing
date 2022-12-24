import "cypress-real-events";
import {SearchPagePostsTab,SearchPageCommunityTab,HomePage} from "../../support/page-objects";
import {joinCommunity,
        leaveCommunity,
        checkUrl} from "../../Utils/searchPage/postsTab";
import {login} from "../../Utils/utils"
describe("test Communities Tab",()=>{
    const SEARCH_QUERY="NewComm";
    before(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getSearchField().type(SEARCH_QUERY);
        HomePage.getSearchField().type('{enter}');
        cy.fixture("LinkTabData").then((data) => {
          globalThis.data = data;
        });
        
        cy.get("button").contains("Communities").click();
    })
    it("check button toggle",()=>{
        SearchPagePostsTab.getJoinCommunityButton("Join").first().click().then($el=>{
            console.log($el[0])
            expect($el[0].innerText).to.equal("Joined");
        });
    })
    it("check the hover on the button",()=>{
        SearchPagePostsTab.getJoinCommunityButton("Joined").first().realHover().then($el=>{
            expect($el[0].innerText).to.equal("Leave");
            //SearchPagePostsTab.getJoinCommunityButton("Joined").first().should("have.text","Leave");
        });
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
            communityNameSelector=communityNameSelector.slice(2,communityNameSelector.length-1)
            checkUrl(communityNameSelector);
        })
       
        
    })

})