import "cypress-real-events";
import {SearchPagePostsTab,
        SearchPagePeopleTab,HomePage} from "../../support/page-objects";
import {checkSuccessAlert,
        checkUrl} from "../../Utils/searchPage/postsTab";
import {login} from "../../Utils/utils";
describe("test people tab",()=>{
    const SEARCH_QUERY="ahh";
    before(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getSearchField().type(SEARCH_QUERY);
        HomePage.getSearchField().type('{enter}');
        cy.fixture("LinkTabData").then((data) => {
          globalThis.data = data;
        });
        cy.get("button").contains("People").click();
    })
    it("check people follow",()=>{
        if(SearchPagePostsTab.getFollowButtons("Follow")!==undefined)
        {
            SearchPagePostsTab.getFollowButtons("Follow").first().click();
            checkSuccessAlert("followed");
        }
        else{
            expect(true).equal(true);
        }
    })

    it("check people Unfollow",()=>{
        SearchPagePostsTab.getFollowButtons("Follow").first().click();
        SearchPagePostsTab.getFollowButtons("Followed").first().click();
        checkSuccessAlert("unfollowed");
    })

    it("check button toggle",()=>{
        SearchPagePostsTab.getFollowButtons("Follow").first().click();
        SearchPagePostsTab.getFollowButtons().first().should("have.text","Following");
    })
    it("check the hover on the button",()=>{
        SearchPagePostsTab.getFollowButtons("Follow").first().click();
        SearchPagePostsTab.getFollowButtons("Followed").first().realHover();
        SearchPagePostsTab.getFollowButtons().first().should("have.text","Unfollow");
    })

    it("visit user profile",()=>{
        SearchPagePeopleTab.getUsersNames().then(userName=>{
            var userNameSelector=userName[0].innerText;
            SearchPagePeopleTab.getUsersNames().contains(userNameSelector).click();
            checkUrl(userNameSelector)
        })
       
        
    })
})