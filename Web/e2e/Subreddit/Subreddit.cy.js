
import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
// import  {LoginPage} from "../../support/page-objects";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
import {buttonCheckAndClickSubRedditPage} from "../../Utils/SubReddit/subreddtTabs"
import { topPosts,newPosts } from "../../Utils/Subreddit/utils";
describe('FLairPage', () => {
    beforeEach('mmm',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("https://dev.redditswe22.tech/login")
    // login with a valid email
    LoginWithValidEmail()
    // go to SubReddit  page
    cy.wait(2000)
    //SubReddit.OpenSubRedditPage();
    HomePage.getHOMEiconbutton().should("be.visible").click()
    HomePage.getopenwindowofHome().should("be.visible")
    cy.wait(2000)
    SubReddit.OpenSubRedditPage();
    HomePage.getHOMEiconbutton().should("be.visible").click()
   
    })
    
        it('check Join Button ', ()=>{
            // check the text of the Join Button After Click
            buttonCheckAndClickSubRedditPage("Join")
        })
        // will not work in server
        it('check Notification Button & it is Window after joining ', ()=>{
            SubReddit.getNotifcationButton().should("not.be.visible").click()
            buttonCheckAndClickSubRedditPage("Join")
            
            buttonCheckAndClickSubRedditPage("notificationions")
            // check for Notification Window
            SubReddit.getNotifcationWindow().should("be.visible")
            // select Notifications to be Frequent
            buttonCheckAndClickSubRedditPage("Frequent")
        })
        it('check Mod Tools Button ', ()=>{
            buttonCheckAndClickSubRedditPage("getModTools")
            // it will go to the page Of Mod Queue
            cy.url("include","https://dev.redditswe22.tech/subreddit/Loooooooooooooooool/moderator/")
        })
        it('check ...Button(about Community) & add My Community to be Favorite ', ()=>{
            buttonCheckAndClickSubRedditPage("ThreePoints")
            SubReddit.getWindowOfThreePointsButton().should("be.visible")
            // select this Coummity to be my Favorite 
            buttonCheckAndClickSubRedditPage("AddToFavorite")
        })
        it('check of Writing Description to my Community ', ()=>{
            SubReddit.getAddDescriptionContiner().should("be.visible").click().type("Hello To My Community")
            buttonCheckAndClickSubRedditPage("SaveDescription")
            SubReddit.getAddDescriptionContiner().should("have.text","Hello To My Community")
        })
        it('check of Selecting topic to my Community and add Discribtion to that Topic ', ()=>{
            buttonCheckAndClickSubRedditPage("Communitytopics")
            buttonCheckAndClickSubRedditPage("ThirdSelection")
            // add discription to that Subreddit
            SubReddit.getAddSubTobicButton().should("be.visible").click().type("Anime")
            SubReddit.getSaveButtonFromAddSubTobic().should("be.visible").click()
            SubReddit.getAddSubTobicButton().should("have.text","Anime")
        })
        it('check Create Post  Button ', ()=>{
            buttonCheckAndClickSubRedditPage("CreatePost")
            // it will go to the page Of create post
            cy.url("include","https://dev.redditswe22.tech/submit")
        })
        it('check Community Theme Button in Community Options ', ()=>{
            buttonCheckAndClickSubRedditPage("CommunityOptions")
            buttonCheckAndClickSubRedditPage("CommunityTheme")
        })
        it('check Massage the Moderators Button ', ()=>{
            //buttonCheckAndClickSubRedditPage("MessageTheMod")
            SubReddit.getMessageTheModButton().scrollIntoView()
            cy.wait(3000)
            SubReddit.getMessageTheModButton().should("be.visible").click()
           // it will go to the page Of messages
            cy.url("include","https://dev.redditswe22.tech/message/compose")
        })
        it('check View All Moderators Button ', ()=>{
            buttonCheckAndClickSubRedditPage("VIEWALLMODERATORS")
            
            cy.url("include","https://dev.redditswe22.tech/subreddit/Testing/moderator/spam")
        })
        it('check Back To Top Button ', ()=>{
            buttonCheckAndClickSubRedditPage("BackToTop")
        })

        ////////////////Reda
        it.skip("test the top posts",()=>{
            topPosts();
        })
    
        it.skip("test the top posts",()=>{
            newPosts();
        })



})
