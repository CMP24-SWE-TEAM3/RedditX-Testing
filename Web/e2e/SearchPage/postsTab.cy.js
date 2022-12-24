import "cypress-real-events";
import {SearchPagePostsTab,HomePage} from "../../support/page-objects";
import {login} from "../../Utils/utils";
import {topPosts,newPosts,
        mostComments,
        hotPosts,
        relevancePosts,
        joinCommunity,
        leaveCommunity,
        checkSuccessAlert,
        checkUrl} from "../../Utils/searchPage/postsTab";
describe("Test Posts Tab",()=>{
    const SEARCH_QUERY="ahh"
    beforeEach(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getSearchField().type(SEARCH_QUERY);
        HomePage.getSearchField().type('{enter}');
        cy.wait(2000)
        cy.get("#root > div > div > div > div > div.sc-hMAIuT.jXeNaq > div > div.inner-links > a.active > button").click()
        //cy.get(".isSubP").click();
      })
    it("test content",()=>{
        SearchPagePostsTab.getPostsContent().each($el=>{var text=$el.text();
        expect(text).to.include(SEARCH_QUERY)});
    })
    it("click on sort",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getSortDropDown().should("be.visible");
    })

    it("click on sort New",()=>{
        SearchPagePostsTab.getSortDropDownItem("New").should("be.visible").click();
        checkUrl("&sort=new");
    })
    it("click on sort Hot",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getSortDropDownItem("Hot").should("be.visible").click();
        checkUrl("&sort=hot");
    })
    it("click on sort Most Comments",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getSortDropDownItem("Most comments").should("be.visible").click();
        checkUrl("&sort=comments");
    })
    it("click on sort Top",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getSortDropDownItem("Top").should("be.visible").click();
        checkUrl("&sort=top");
    })
    it("click on sort Relevance",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getSortDropDownItem("Relevance").should("be.visible").click();
        checkUrl("&sort=relevance");
    })

    it("click on time button",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDown().should("be.visible");
    })


    it("click on time and then All time button",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("All time").should("be.visible").click();
        checkUrl("&t=all");
    })
    it("click on time and then Past year button",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("Past Year").should("be.visible").click();
        checkUrl("&t=year");
    })
    it("click on time and then Past month button",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("Past Month").should("be.visible").click();
        checkUrl("&t=month");
    })
    it("click on time and then Past Week button",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("Past Week").should("be.visible").click();
        checkUrl("&t=week");
    })
    it("click on time and then Past 24 Hours button",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("Past 24 Hours").should("be.visible").click();
        checkUrl("&t=day");
    })

    it("click on time and then Past Hour button",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("Past Hour").should("be.visible").click();
        checkUrl("&t=hour");
    })

    it("click on the sort and then the time",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeButton().click();
        SearchPagePostsTab.getTimeDropDown().should("be.visible");
        SearchPagePostsTab.getSortDropDown().should("not.be.visible");
    })

    it("click on the time and then the sort",()=>{
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getTimeDropDown().should("not.be.visible");
        SearchPagePostsTab.getSortDropDown().should("be.visible");
    })

    it("click on the sort button and then the new",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getSortDropDownItem("New").should("be.visible").click();
        SearchPagePostsTab.getTimeButton().should("not.be.visible");
    })

    it("click on the sort button and then the hot",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getSortDropDownItem("Hot").should("be.visible").click();
        SearchPagePostsTab.getTimeButton().should("not.be.visible");
    })
    it("click on sort Relevance and then time Past year",()=>{
        SearchPagePostsTab.getSortButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("Relevance").should("be.visible").click();
        SearchPagePostsTab.getTimeButton().realClick();
        SearchPagePostsTab.getTimeDropDownItem("Past Year").should("be.visible").click();
        checkUrl("&sort=relevance&t=year");

    })
    it("test Top Posts",()=>{
        topPosts();
    })

    it("test New Posts",()=>{
        newPosts();
    })

    it("the most comments",()=>{
        mostComments();
    })

    it("test the hot posts",()=>{
        hotPosts();
    })

    it("test the relevance posts",()=>{
        relevancePosts();
    })
    // check communities section
    it("test Communities section click see more",()=>{
        SearchPagePostsTab.getSeeMoreCommunitiesSectionButton().should("be.visible").click();
        checkUrl("&type=sr");
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

    //check people section
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

    it("check Back to top button",()=>{
        SearchPagePostsTab.functionScroll(0,120);
        SearchPagePostsTab.getBackToTopButton().should("be.visible");
    })
})