import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
import Notifications from "../../support/page-objects/notifications";

describe('Notifications Page', () => {
    beforeEach('mmm',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    // login with a valid email
    cy.visit("https://dev.redditswe22.tech/login")
    LoginWithValidEmail()
    // open community Setting
    Notifications.getNotifictionsButtonFromHomePage().should("be.visible").click();
    Notifications.getSeeAllNotifictionsButton().should("be.visible").click();
    })
    
        it("Check For Activity Tap ",()=>{
            Notifications.getActivityTabButton().should("be.visible").click();
        })
        it("Hide Fisrt Notification From Activity Tap   ",()=>{
            Notifications.getActivityTabButton().should("be.visible").click();
            Notifications.getFirstNotification().should("be.visible")
            Notifications.getaboutNotificationButton().should("be.visible").click();
            Notifications.getHideThisNotificationButton().should("be.visible").click()
        
        })
        it("DisableUpdatesFromCommunity to  Notification From Activity Tap   ",()=>{
            Notifications.getActivityTabButton().should("be.visible").click();
            Notifications.getaboutNotificationButton().should("be.visible").click();
            Notifications.getDisableUpdatesFromCommunityButton().should("be.visible").click();
            Notifications.getDisableUpdatesFromCommunityAlert().should("be.visible").should("have.text","Success! You won't see notifications from this community in the future.")
        
        })
        
        it("Check For Messages Tap ",()=>{
            Notifications.getMessageTabButton().should("be.visible").click();
            // it will go to Messages Page
            //cy.url().should("include","         ")
        })
        it("Check For MArked As Read Tap ",()=>{
            Notifications.getMarkedAsReadTabButton().should("be.visible").click();
        })
        it("Check For Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
        })
        it("Check DisAllow Inbox Messages  From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getInboxmessagesCheckBox().should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow chat Messages  From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getChatmessagesCheckBox().should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow chat Request From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getChatrequestCheckBox().should("be.visible").uncheck().should("not.be.checked")
        })
        it("Going to Community Alerts From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getCommunityAlertsButton().should("be.visible").click()
        })
        it("Check DisAllow Mentions of u/username  From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getMentionsofusernameCheckBox().should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow Comments on your posts From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getCommentsonyourpostsCheckBox().should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow Upvotes on your Comments From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getUpvotesonyourcommentsCheckBox().scrollIntoView({duration:2000}).should("be.visible").uncheck().should("not.be.checked")
        })

        it("Check DisAllow Replies to your comments From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getRepliestoyourcommentsCheckBox().scrollIntoView({duration:2000}).should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow Activity on your comments From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getActivityonyourcommentsCheckBox().scrollIntoView({duration:2000}).should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow Trending posts From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getTrendingpostsCheckBox().scrollIntoView({duration:4000}).should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow Broadcast recommendations From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getBroadcastrecommendationsCheckBox().scrollIntoView({duration:4000}).should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow  Community recommendations From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getCommunityrecommendationsCheckBox().scrollIntoView({duration:4000}).should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow  Reddit announcements  From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getRedditannouncementsCheckBox().scrollIntoView({duration:5000}).should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow  Cake day  From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getCakedayCheckBox().scrollIntoView({duration:5000}).should("be.visible").uncheck().should("not.be.checked")
        })
        it("Check DisAllow   Moderations notifications  From Notification Settings  Tap ",()=>{
            Notifications.getSettingsTabButton().should("be.visible").click();
            Notifications.getModnotificationsCheckBox().scrollIntoView({duration:5000}).should("be.visible").uncheck().should("not.be.checked")
        })

})
