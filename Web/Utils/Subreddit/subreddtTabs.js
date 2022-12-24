import SubReddit from "../../support/page-objects/subreddit";
//const HomePage = new HomePage();

module.exports.buttonCheckAndClickSubRedditPage=(type)=>{
    switch(type){
        case "Join":
            SubReddit.getjoinButton().should("be.visible").realClick().should("have.text","Join")   
            break;
        case "notificationions":
            SubReddit.getNotifcationButton().should("be.visible").click()
            break;
        case "Frequent":
            SubReddit.getFrequentButton().should("be.visible").click()
            break;
        case "getModTools":
            SubReddit.getModToolsButton().should("be.visible").click()
            break;
        case "ThreePoints":
            SubReddit.getThreePointsButton().should("be.visible").click()
            break;
        case "plusofcreatepostButton":
            SubReddit.getnotificationionsButton().should("be.visible").click()
            break;
        case "AddToFavorite":
            SubReddit.getAddToFavoriteButton().should("be.visible").click()
            break;
        case "SaveDescription":
            SubReddit.getSaveButtonFromAddDescription().should("be.visible").click()
        case "Communitytopics":
            SubReddit.getCommunitytopicsButton().should("be.visible").click()
            break;
        case "ThirdSelection":
            SubReddit.getTheThirdSelectionFromTheTopics().should("be.visible").click()
            break;
        case "CreatePost":
            SubReddit.getCreatePostButton().should("be.visible").click()
            break;
        case "CommunityOptions":
            SubReddit.getCommunityOptionsButton().should("be.visible").click()
            break;
        case "CommunityTheme":
            SubReddit.getCommunityThemeButton().should("be.visible").click()
            break;
        case "MessageTheMod":
            SubReddit.getMessageTheModButton().scrollIntoView({duration:5000}).should("be.visible").click()
            break;
        case "VIEWALLMODERATORS":
            SubReddit.getVIEWALLMODERATORSButton().scrollIntoView({duration:5000}).should("be.visible").click()
            break;
        case "BackToTop":
            SubReddit.getBackToTopButton().scrollIntoView({duration:5000}).should("be.visible").click()
            break;
    }
}
