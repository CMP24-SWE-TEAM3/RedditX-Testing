import {buttonCheckAndClickHomePage} from "../../Utils/HomePage/HomeTaps"
import Profile from "../../support/page-objects/profile";
// import  {LoginPage} from "../../support/page-objects";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"

describe('Profile Page', () => {
    beforeEach('mmm',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("https://dev.redditswe22.tech/login")
    // login with a valid email
    LoginWithValidEmail()
    // go to   page profile Page
    buttonCheckAndClickHomePage("myprofileicon")
    cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda")
    
    })
        
        it('check OverView Tab Button ', ()=>{
            Profile.getOverViewButton().should("be.visible").click({force: true})
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda")
        })
        it('check Posts Tab Button ', ()=>{
            Profile.getPostsButton().should("be.visible").click({force: true})
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda/submitted")

        })
        it('check Comments Tab Button ', ()=>{
            Profile.getCommentsButton().should("be.visible").click({force: true})
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda/comments")

        })
        it('check History Tab Button ', ()=>{
            Profile.getHistoryButton().should("be.visible").click({force: true})
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda/history")

        })
        it('check Saved Tab Button ', ()=>{
            Profile.getSavedButton().should("be.visible").click({force: true})
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda/saved")

        })
        it('check Hidden Tab Button ', ()=>{
            Profile.getHiddenButton().should("be.visible").click({force: true})
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda/hidden")

        })
        it('check Upvoted Tab Button ', ()=>{
            Profile.getUpvotedButton().should("be.visible").click()
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda/upvoted")

        })
        it('check Downvoted Tab Button ', ()=>{
            Profile.getDownloadButton().should("be.visible").click({force: true})
            cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda/downvoted")

        })
        it('check that Over View tab has Comments  ', ()=>{
            Profile.getOverViewButton().scrollIntoView().should("be.visible").click({force: true})
            Profile.getTitleOfFirstWindow().should("be.visible").should("include.text","commented on")
        })
        it('check that Over View tab has Posts ', ()=>{
        
            Profile.getOverViewButton().scrollIntoView().should("be.visible").click({force: true})
            Profile.getTitleOfSecondWindow().should("be.visible").should("include.text","Posted by")
        })
        it('check that Posts tab has Posts only ', ()=>{
            Profile.getPostsButton().scrollIntoView().should("be.visible").click({force: true})
            Profile.getTitleOfFirstWindowFromPosts().should("be.visible").should("include.text","Posted by")
        })
        it('check that Posts tab has comments only  ', ()=>{
            Profile.getCommentsButton().scrollIntoView().should("be.visible").click({force: true})
            Profile.getTitleOfSecondWindow().should("be.visible").should("include.text","commented on")
        })

        it('check Settings Button ', ()=>{
            Profile.getSettingsButton().should("be.visible").click()
            // it should open the page of settings
            cy.url().should("include","https://dev.redditswe22.tech/settings")
        })
        it('check Add Social Link Button ', ()=>{
            Profile.getAddSocialLinkButton().should("be.visible").click()
            Profile.getAddSocialLinksWindow().should("be.visible")
            Profile.getInstgramButton().should("be.visible").click()
            Profile.getUserNameAreaOfInstgram().should("be.visible").click().type("u/Mahmoud")
            Profile.getSaveButtonOfSocialLink().should("be.visible").click()
        })
        it('check New post Button Button ', ()=>{
            Profile.getNewPostButton().should("be.visible").click()
            // it should open post page
            cy.url().should("include","https://dev.redditswe22.tech/submit")
        })
        it('check More Options Button to go to Profile Moderation ', ()=>{
            Profile.getMoreOptionsButton().should("be.visible").click()
            Profile.getProfileModeratorButton().should("be.visible").click()
            // it should open the page of ProfileModerator
            //cy.url().should("include","           ")
        })
        it('check More Options Button to go to Add Custom Feed ', ()=>{
            Profile.getMoreOptionsButton().should("be.visible").click()
            Profile.getAddToCustomFeedButton().should("be.visible").click()
            Profile.getCreateCustomFeedButton.should("be.visible").click()
            Profile.getCustomFeedContiner.should("be.visible").click().type("Mahmoud")
            Profile.getcreateButtonOfCustomFeed().should("be.visible").click()
            Profile.getUpdateButtonOfCustomFeed().should("be.visible").click()
            // Veiw Less Options
            Profile.getFewerOptionsButton().should("be.visible").click()
        })
        it('check Window that Have the Communities that I Moderate them ', ()=>{
            Profile.getWindowOfCommuntiesthatIModerate().should("be.visible")
        })
        it('check BAck to Top Button', ()=>{
            Profile.getBacktoTopButton().scrollIntoView({duration:3000}).should("be.visible").click()
        })
        
    

})
