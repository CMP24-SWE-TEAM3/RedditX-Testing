
import Muted from "../../support/page-objects/muted";
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
    Muted.getMutedButton().should("be.visible").click()
    })
    
        it("check Of Muted Users Button ",()=>{
            Muted.getAboutMutedUsersButton().should("be.visible").click();
            // it should open the page of Settings of Muted users
            //cy.url().should("include","         ")
        })
        it("Search for Muted Users  ",()=>{
            Muted.getSearchForMutedUsersContainer().should("be.visible").click().type("Zeyad");
            Muted.getSearchButton().should("be.visible").click()
            Muted.getWindowOfMutedUsers().should("be.visible")
            Muted.getFirstUserinWindowOfMutedUsers().should("be.visible").should("have.text","Zeyad")
        })
        it("Search for UnMuted Users  ",()=>{
            Muted.getSearchForMutedUsersContainer().should("be.visible").click().type("MAhmoud");
            Muted.getSearchButton().should("be.visible").click()
            Muted.getWindowOfMutedUsers().should("not.be.visible")
        })
        it("Mute a Spacific User  ",()=>{
            Muted.getMuteUserButton().should("be.visible").click()
            Muted.getMuteUserWindow().should("be.visible")
            Muted.getEnterUsertoMuteContainer().should("be.visible").click().type("Ahmed");
            Muted.getReasonForMuteContainer().should("be.visible").click().type("mmmmmmmmmmmmmmn")
            Muted.getMuteUserOfWindow1Button().should("be.visible").should("be.enabled").click()
            // search for him
            Muted.getSearchForMutedUsersContainer().should("be.visible").click().type("Ahmed");
            Muted.getSearchButton().should("be.visible").click()
            Muted.getWindowOfMutedUsers().should("be.visible")
            Muted.getFirstUserinWindowOfMutedUsers().should("be.visible").should("have.text","Ahmed")
        })
        it("Mute a Spacific User button cancle that mute  ",()=>{
            Muted.getMuteUserButton().should("be.visible").click()
            Muted.getMuteUserWindow().should("be.visible")
            Muted.getEnterUsertoMuteContainer().should("be.visible").click().type("Ahmed");
            Muted.getReasonForMuteContainer().should("be.visible").click().type("mmmmmmmmmmmmmmn")
            Muted.getCancleOfWindow1Button().should("be.visible").should("be.enabled").click()
        })
        it(" UnMute the First user   ",()=>{
            Muted.getMuteUserWindow().should("be.visible")
            Muted.getFirstUserinWindowOfMutedUsers().should("be.visible").should("have.text","Zeyad")
            Muted.getUnMuteButtonButton().should("be.visible").click()
            Muted.getWindpwOfUnmuteApprovedUserButton().should("be.visible")
            Muted.getUnmuteButtonfromWindow().should("be.visible").click()
            // search for it
            Muted.getSearchForMutedUsersContainer().should("be.visible").click().type("Zeyad");
            Muted.getSearchButton().should("be.visible").click()
            Muted.getWindowOfMutedUsers().should("not.be.visible")

        })
        it(" view the Details Of the First Muted user   ",()=>{
            Muted.getMuteUserWindow().should("be.visible")
            Muted.getFirstUserinWindowOfMutedUsers().should("be.visible").should("have.text","Zeyad")
            Muted.getMoreDetalisOfMutedUserButton().should("be.visible").click()
            Muted.getWindpwOfDetalisOfMutedUserButton().should("be.visible")
        })
})
