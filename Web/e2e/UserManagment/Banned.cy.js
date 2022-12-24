
import Banned from "../../support/page-objects/banned";
import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
// import  {LoginPage} from "../../support/page-objects";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('BannedPage', () => {
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
    SubReddit.getModToolsButton().scrollIntoView().should("be.visible").click()
    Banned.getBannedButton().should("be.visible").click()

    })
    
        it("check Of Banned Users Button ",()=>{
            Banned.getAboutBannedUsersButton().should("be.visible").click();
            // it should open the page of Settings of Banned users
            //cy.url().should("include","https://mods.reddithelp.com/hc/en-us/articles/360009161872")
        
        })
        it("BAN a Spacific User  ",()=>{
            Banned.getBanUserButton().should("be.visible").click()
            Banned.getBanUserWindow().should("be.visible")
            Banned.getEnterUserContainer().should("be.visible").click().type("ZiadSherif10");
            Banned.getReasonForBanButton().should("be.visible").click()
            Banned.getSecondSelectionofReasonsButton().should("be.visible").click()
            Banned.getModNoteContainer().should("be.visible").click().type("jdjnejhjdhe")
            Banned.getNotetoIncludeinBanMessageContainer().should("be.visible").click().type("mmmmmmmmmmmmmmn")
            Banned.getBanUserButton().should("be.visible").should("be.enabled").click()
        })
        it("Search for Banned Users  ",()=>{
            Banned.getSearchForBannedUsersContainer().should("be.visible").click().type("ZiadSherif10");
            Banned.getSearchButton().should("be.visible").click()
            Banned.getWindowOfBannedUsers().should("be.visible")
            Banned.getFirstUserinWindowOfBannedUsers().should("be.visible").should("have.text","ZiadSherif10")
        })
        it("Search for UnBanned Users  ",()=>{
            Banned.getSearchForBannedUsersContainer().should("be.visible").click().type("MAhmoud");
            Banned.getSearchButton().should("be.visible").click()
            Banned.getWindowOfBannedUsers().should("not.be.visible")
        })
    
        it("Edit The Resson Of Banned the First user   ",()=>{
            Banned.getBanUserWindow().should("be.visible")
            Banned.getFirstUserinWindowOfBannedUsers().should("be.visible").should("have.text","ZiadSherif10")
            Banned.getEditButtonOfBannedUser().should("be.visible").click()
            Banned.getReasonForBanButton().should("be.visible").click()
            Banned.getSecondSelectionofReasonsButton().should("be.visible").click()
            Banned.getModNoteContainer().should("be.visible").click().type("jdjnejhjdhe")
            Banned.getNotetoIncludeinBanMessageContainer().should("be.visible").click().type("mmmmmmmmmmmmmmn")
            Banned.getEditBanOfWindowButton().should("be.visible").click()
        })
        it(" UnBanned the First user   ",()=>{
            Banned.getBanUserWindow().should("be.visible")
            Banned.getFirstUserinWindowOfBannedUsers().should("be.visible").should("have.text","ZiadSherif10")
            Banned.getEditButtonOfBannedUser().should("be.visible").click()
            Banned.getUnBanButtonButton().should("be.visible").click()
        })
        it(" view the Details Of the First Banned user   ",()=>{
            Banned.getBanUserWindow().should("be.visible")
            Banned.getFirstUserinWindowOfBannedUsers().should("be.visible").should("have.text","ZiadSherif10")
            Banned.getMoreDetalisOfBannedUserButton().should("be.visible").click()
            Banned.getWindpwOfDetalisOfBannedUserButton().should("be.visible")
        })




})
