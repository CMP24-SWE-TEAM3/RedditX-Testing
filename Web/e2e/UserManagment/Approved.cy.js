
import Approved from "../../support/page-objects/approved";
import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('ApprovedPage', () => {
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
    Approved.getApprovedButton().should("be.visible").click()
    })
    
        it("check Of Approved Users Button ",()=>{
            Approved.getAboutApprovedUsersButton().should("be.visible").click();
            // it should open the page of Settings of Approved users
            //cy.url().should("include","         ")
        })
        it("Search for Approved Users  ",()=>{
            Approved.getSearchForApprovedUsersContainer().should("be.visible").click().type("mahmoud_reda");
            //Approved.getSearchButton().should("be.visible").click()
            //Approved.getWindowOfApprovedUsers().should("be.visible")
            Approved.getFirstUserinWindowOfApprovedUsers().should("be.visible").should("include.text","mahmoud_reda")
        })
        it("Search for UnApproved Users  ",()=>{
            Approved.getSearchForApprovedUsersContainer().should("be.visible").click().type("MAhmoud");
            //Approved.getSearchButton().should("be.visible").click()
            //Approved.getWindowOfApprovedUsers().should("not.be.visible")
        })
        it("Approve a Spacific User  ",()=>{
            Approved.getApproveUserButton().should("be.visible").click()
            Approved.getApproveUserWindow().should("be.visible")
            Approved.getEnterUsertoApproveContainer().should("be.visible").click().type("Ahmed");
            Approved.getAdduserOfWindow1Button().should("be.visible").should("be.enabled").click({force: true})
            Approved.getSearchForApprovedUsersContainer().should("be.visible").click().type("Ahmed");
        })
        it("Approve a Spacific User button cancle that approved  ",()=>{
            Approved.getApproveUserButton().should("be.visible").click()
            Approved.getApproveUserWindow().should("be.visible")
            Approved.getEnterUsertoApproveContainer().should("be.visible").click().type("Ahmed");
            Approved.getCancleOfWindow1Button().should("be.visible").should("be.enabled").click()
        })
        it(" Remove Approve From the Second user   ",()=>{
            Approved.getFirstUserinWindowOfApprovedUsers().should("be.visible").should("have.text","mahmoud_reda")
            Approved.getRemoveApprovedUserButton().should("be.visible").click()
            Approved.getWindpwOfRemoveApprovedUserButton().should("be.visible")
            Approved.getRemoveButtonfromWindow().should("be.visible").click()
            // search for it
            Approved.getSearchForApprovedUsersContainer().should("be.visible").click().type("mahmoud_reda");
            Approved.getWindowOfApprovedUsers().should("not.be.visible")

        })
        it(" Send Message to the Second USer   ",()=>{
            Approved.getApproveUserWindow().should("be.visible")
            Approved.getSecondUserinWindowOfApprovedUsers().should("be.visible").should("have.text","Zeyad")
            Approved.getSendMessageButton().should("be.visible").click()
            // it will open the page og Messages
            //cy.url().should("include","     ")

        })
})
