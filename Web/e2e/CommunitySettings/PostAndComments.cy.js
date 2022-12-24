import CommunitySettings from "../../support/page-objects/community-settings";
import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('Community Settings', () => {
    beforeEach('Post & Comments',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("https://dev.redditswe22.tech/login")
    // login with a valid email
    LoginWithValidEmail()
    // go to SubReddit  page
    cy.wait(2000)
    //SubReddit.OpenSubRedditPage();
    HomePage.getHOMEiconbutton().should("be.visible").click()
    cy.wait(3000)
    SubReddit.OpenSubRedditPage();
    HomePage.getHOMEiconbutton().should("be.visible").click()
    SubReddit.getModToolsButton().scrollIntoView({Duration:1000}).should("be.visible").click({force: true})
    // open community Setting
    CommunitySettings.getCommunitySettingsButton().should("be.visible").click();
    CommunitySettings.getPostsandCommentsButton().should("be.visible").click();
    })
    
        it("enable Spoiler to my POsts ",()=>{
            CommunitySettings.getEnablespoilerCheckBox().should("be.visible").check().should("be.checked");
            CommunitySettings.getSaveChangesButton1().should("be.visible").click();

        })
        it("Select Suggest(Old) Sort to Comments for my Community   ",()=>{
            CommunitySettings.getSuggestedSortForCommentsButton().should("be.visible").click();
            CommunitySettings.getOldCommentsButton().should("be.visible").click();
            CommunitySettings.getSaveChangesButton1().should("be.visible").click();
            CommunitySettings.getSuggestedSortForCommentsButton().should("have.text","Old")
        })
        it("Select Suggest(Best) Sort to Comments for my Community   ",()=>{
            CommunitySettings.getSuggestedSortForCommentsButton().should("be.visible").click();
            CommunitySettings.getBestCommentsButton().should("be.visible").click();
            CommunitySettings.getSaveChangesButton1().should("be.visible").click();
            CommunitySettings.getSuggestedSortForCommentsButton().should("have.text","Best")
        })
        it("Select Suggest(Top) Sort to Comments for my Community   ",()=>{
            CommunitySettings.getSuggestedSortForCommentsButton().should("be.visible").click();
            CommunitySettings.getTopCommentsButton().should("be.visible").click();
            CommunitySettings.getSaveChangesButton1().should("be.visible").click();
            CommunitySettings.getSuggestedSortForCommentsButton().should("have.text","Top")
        })
        it("allow using Images to Comments for my Community",()=>{
            CommunitySettings.getAllowImagesinCommentsCheckBox().should("be.visible").check().should("be.checked");
            CommunitySettings.getSaveChangesButton1().should("be.visible").click();
        })
    
})
