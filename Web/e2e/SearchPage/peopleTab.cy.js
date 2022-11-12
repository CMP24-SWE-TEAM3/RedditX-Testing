import "cypress-real-events";
import {SearchPagePostsTab,
        SearchPagePeopleTab} from "../../support/page-objects";
import {checkSuccessAlert,
        checkUrl} from "../../Utils/searchPage/postsTab";
describe("test people tab",()=>{
    const SEARCH_QUERY="ahh";
    before(()=>{
        //visit with Query
        // must visit home page and then search in search box and check the url type and query
        // cy.visit("https://www.reddit.com");
        // cy.get("#search-input").type(SEARCH_QUERY)
        // cy.url().should("include",`search/?q=${SEARCH_QUERY}&type=link`)
        //get Communities tab
        cy.visit("http://localhost:1648/posts");
        cy.get("button").contains("People").click();
        // cy.url().should("include",`search/?q=${SEARCH_QUERY}&type=comment`)
    })
    it("check people follow",()=>{
        SearchPagePostsTab.getFollowButtons("Follow").first().click();
        checkSuccessAlert("followed");
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