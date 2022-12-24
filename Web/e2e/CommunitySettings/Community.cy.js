
import CommunitySettings from "../../support/page-objects/community-settings";
import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('Community Settings', () => {
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
    cy.wait(3000)
    SubReddit.OpenSubRedditPage();
    HomePage.getHOMEiconbutton().should("be.visible").click()
    SubReddit.getModToolsButton().scrollIntoView({Duration:1000}).should("be.visible").click({force: true})
    // open community Setting
    CommunitySettings.getCommunitySettingsButton().should("be.visible").click();
    CommunitySettings.getCommunityButton().should("be.visible").click();
    })
    
        it("Change Community Name ",()=>{
            CommunitySettings.getCommunityNameContainer().should("be.visible").click( {force: true}).clear().type("AhmedCommunity")
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
            CommunitySettings.getCommunityNameContainer().should("include.text","AhmedCommunity")

        })
        it("Add Community Topic   ",()=>{
            CommunitySettings.getCommunityTopicsContainer().should("be.visible").click().type("moooooooo")
            CommunitySettings.getCloseButtonFromCommunityTopicsContainer().should("be.visible").click({force: true});
            CommunitySettings.getSaveChangesButton().should("be.visible").click({force: true});
            CommunitySettings.getCommunityTopicsContainer().should("have.text","moooooooo")
        })
        it("Add Community Description   ",()=>{
            CommunitySettings.getCommunityDescriptionContainer().should("be.visible").click({force: true}).clear().type("looooooooooooooool")
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
            CommunitySettings.getCommunityDescriptionContainer().should("have.text","looooooooooooooool")
        })
        it("Allow Send Welecome Message to New Member and send Message    ",()=>{
            CommunitySettings.getWelecomeNewMemberCheckBox().scrollIntoView({duration:2000}).should("be.checked")
            CommunitySettings.getSendWelecomeMessageNewMemberContainer().should("be.visible").clear().type("Welecome To Our Community")
            CommunitySettings.getSaveChangesButton().should("be.visible").click({force: true});
            CommunitySettings.getSendWelecomeMessageNewMemberContainer().should("have.text","Welecome To Our Community")
        })
        it("Select Language to my Community",()=>{
            CommunitySettings.getLanguageButton().scrollIntoView({duration:2000}).should("be.visible").click()
            CommunitySettings.getEnglishButton().scrollIntoView({duration:4000}).should("be.visible").click()
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
            CommunitySettings.getLanguageButton().should("have.text","English")
        })
        it("Selct County to my Community",()=>{
            //county
            CommunitySettings.getSelectCountyButton().scrollIntoView({duration:2000}).should("be.visible").click()
            CommunitySettings.getEgyptButton().scrollIntoView({duration:4000}).should("be.visible").click()
            CommunitySettings.getSelectCountyButton().should("have.text","Egypt")
            //save
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
        })
        it("Selct  Region to my Community",()=>{
            //region
            CommunitySettings.getSelectRegionButton().scrollIntoView({duration:2000}).should("be.visible").click()
            CommunitySettings.getCairoButton().scrollIntoView({duration:4000}).should("be.visible").click()
            CommunitySettings.getSelectRegionButton().should("have.text","Cairo")
            //save
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
        })
        it("Make My Community Public & +18 ",()=>{
            CommunitySettings.getPublicCheckBox().scrollIntoView({duration:3000}).should("be.visible").check().should("be.checked")
            CommunitySettings.getPlus18CheckBox().scrollIntoView({duration:3000}).should("be.visible").check().should("be.checked")
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
        })
        it.skip("Make My Community Restricted & +18 ",()=>{
            CommunitySettings.getRestrictedCheckBox().scrollIntoView({duration:3000}).should("be.visible").check().should("be.checked")
            CommunitySettings.getPlus18CheckBox().scrollIntoView({duration:3000}).should("be.visible").check().should("be.checked")
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
        })
        it("Allow Accepting Requests to Join My Community",()=>{
            CommunitySettings.getAcceptingRequestsCheckBox().scrollIntoView({duration:3000}).should("be.visible").check().should("be.checked")
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
        })
        it.skip("Make My Community Private & +18 ",()=>{
            CommunitySettings.getPrivateCheckBox().scrollIntoView({duration:3000}).should("be.visible").check().should("be.checked")
            CommunitySettings.getPlus18CheckBox().scrollIntoView({duration:3000}).should("be.visible").check().should("be.checked")
            CommunitySettings.getSaveChangesButton().should("be.visible").click();
        })
})
