
import Moderator from "../../support/page-objects/moderators";
import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('MutedPage', () => {
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
    cy.wait(2000)
    SubReddit.OpenSubRedditPage();
    HomePage.getHOMEiconbutton().should("be.visible").click()
    SubReddit.getModToolsButton().should("be.visible").click()
    Moderator.getModeratorsButton().should("be.visible").click()
    })
    
        it("check Of Moderator Users Button ",()=>{
            Moderator.getAboutModeratorsButton().should("be.visible").click();
            // it should open the page of Settings of Moderator users
            //cy.url().should("include","         ")
        })
        it("Search for Moderator   ",()=>{
            Moderator.getSearchForModeratorContainer().should("be.visible").click().type("mahmoud_reda");
            Moderator.getFirstModeratorinWindowOfAllModerators().should("be.visible").should("include.text","mahmoud_reda")
        })
        it("Search for UnModerator User  ",()=>{
            Moderator.getSearchForModeratorContainer().should("be.visible").click().type("MAhmoud");
            //Moderator.getWindowOfAllModerators().should("be.disabled")
        })
        it("Invite User As Moderator And Allow him to Do EveryThing  ",()=>{
            Moderator.getInviteUserAsModButton().should("be.visible").click()
            Moderator.getInviteUserAsModWindow().should("be.visible")
            Moderator.getEnterUsertoInviteAsModContainer().should("be.visible").click().type("Ahmed");
            Moderator.getEverythingCheckBox().should("be.visible").check()
            Moderator.getInviteOfWindow1Button().scrollIntoView({duration:3000}).should("be.visible").should("be.enabled").click()
        })
        it("Invite User As Moderator And Allow him to Do some Roles Not All Rules  ",()=>{
            Moderator.getInviteUserAsModButton().should("be.visible").click()
            Moderator.getInviteUserAsModWindow().should("be.visible")
            Moderator.getEnterUsertoInviteAsModContainer().should("be.visible").click().type("Ahmed");
            Moderator.getEverythingCheckBox().should("be.visible").uncheck().should("not.be.checked")
            Moderator.getManageUsersCheckBox().should("be.visible").check().should("be.checked")
            //Moderator.getManageSettingsCheckBox().should("be.visible").check().should("be.checked")
            //Moderator.getMangeFlairCheckBox().should("be.visible").check().should("be.checked")
            Moderator.getInviteOfWindow1Button().scrollIntoView({duration:3000}).should("be.visible").should("be.enabled").click()
    
        })
        it(" Leave As Moderator   ",()=>{
            Moderator.getLeaveAsModButton().should("be.visible").click()
            Moderator.getWindowOfLeaveAsModButton().should("be.visible")
            Moderator.getLeaveButton().should("be.visible").click()
            // search for it
            Moderator.getSearchForModeratorContainer().should("be.visible").click().type("Zeyad");
            Moderator.getSearchButton().should("be.visible").click()
            Moderator.getWindowOfAllModerators().should("not.be.visible")

        })
        it(" Edit Settings Of One Of Modertors that you can edit them to Allow him to Manage Every thing    ",()=>{
            Moderator.getWindofModeratorsYouCanEdit().scrollIntoView({duration:3000}).should("be.visible")
            Moderator.getFristUserOfModeratorsYouCanEdit().should("be.visible").should("have.text","Zeyad")
            Moderator.getEditButtonOfFirstModeratorOFWindofModeratorsYouCanEdit().should("be.visible").click()
            // edit
            Moderator.getInviteUserAsModWindow().should("be.visible")
            Moderator.getEverythingCheckBox().should("be.visible").check().should("be.checked")
            Moderator.getInviteOfWindow1Button().scrollIntoView({duration:3000}).should("be.visible").should("be.enabled").click()
        })
        it(" Delete one Invition of User TO Be Moderator    ",()=>{
            Moderator.getInvitedmoderatorsWindow().scrollIntoView({duration:3000}).should("be.visible")
            Moderator.getFristUserofInvitedmoderatorsWindow().should("be.visible").should("have.text","Zeyad")
            Moderator.getRemoveButtonOfFristUserofInvitedmoderatorsWindow().should("be.visible").click()
            Moderator.getRemoveButtonWindow().should("be.visible")
            Moderator.getRemoveButtonOftheRemoveWindow().should("be.visible").click()
        })
})
