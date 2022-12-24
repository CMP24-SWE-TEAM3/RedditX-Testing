import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
import PostFlair from "../../support/page-objects/post-flair";
import {Createflair} from "../../Utils/FlairPage/AddFlair"
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('Post-FLair-Page', () => {
    beforeEach('mmmmmmmmmm',()=>{
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
    SubReddit.OpenSubRedditPageTocheckPostFlair();
    HomePage.getHOMEiconbutton().should("be.visible").click()
    SubReddit.getModToolsButton().scrollIntoView().should("be.visible").click()
    PostFlair.getPostFlairButton().should("be.visible").click()
    })
    
    it('Add New Flair And  Save it ', ()=>{
        Createflair();
        PostFlair.getSaveButtonfromAddflair().should("be.visible").should('be.enabled').click()
    })
    it('Create New Flair But Cancle this add of that Flair  ', ()=>{
        Createflair();

        PostFlair.getCancleButtonfromAddflair().should("be.visible").click()
        PostFlair.getCancleButtonWindow().should("be.visible")
        PostFlair.getDiscardButtonfromCancleWindow().should("be.visible").click()

    })
    it('Edit The Text of one flair from the existing flairs ', ()=>{
        PostFlair.geteditButtonOftheFristitem().should("be.visible").click();
        PostFlair.getFlairtextcontainerfromFirstFlair().should("be.visible").clear().type("MAhmoud")
        //PostFlair.getPostFalirPreviewContainer().should("be.visible").should("have.text","MAhmoud")
        PostFlair.getSaveButtonfromFirstFlair().should("be.visible").click()
        PostFlair.gettheFristitem().should("be.visible").should("include.text","MAhmoud")
        

    })
    it('Delete an Flair From the List of Flairs  ', ()=>{
        PostFlair.getDeleteButtonOftheSeconditem().should("be.visible").click();
        PostFlair.getWindowOfDeleteButton().should("be.visible")
        PostFlair.getDeleteButtonOfWindowOfDelete().should("be.visible").click();
    })

    //////////////////////////////////////////////////Scripts from Offical site
    it('Edit Post Flair Settings(Allow users to assign their own)', ()=>{
        PostFlair.getPostflairSettingsButton().should("be.visible").click()
        PostFlair.getPostFlairSettingsWindow().should("be.visible")
        PostFlair.getEnablePostFlairCheck().should("be.visible").should("be.checked")
        PostFlair.getAllowuserstoassignthereownCheck().should("be.visible").click()
        PostFlair.getAllowuserstoassignthereownCheck().should("be.checked")
        PostFlair.getSaveButtonPostFlairSettingsWindow().should("be.visible").click()
    })
    it('Edit Post Flair Settings(Disable post flair in this community)', ()=>{
        PostFlair.getPostflairSettingsButton().should("be.visible").click()
        PostFlair.getPostFlairSettingsWindow().should("be.visible")
        PostFlair.getEnablePostFlairCheck().should("be.visible").should("be.checked")
        PostFlair.getEnablePostFlairCheck().click()
        PostFlair.getAllowuserstoassignthereownCheck().should("be.visible").should("be.disabled")
        PostFlair.getSaveButtonPostFlairSettingsWindow().should("be.visible").click()
    })
    it('Add New Flair And allow Only Moderators to manage it ', ()=>{
        Createflair();

        PostFlair.getModOnlyButtonfromAddflair().should("be.visible").click()
        PostFlair.getAllowUsereditsButtonfromAddflair().should("be.visible").should('be.disabled')
        PostFlair.getSaveButtonfromAddflair().should("be.visible").should('be.enabled').click()
    })
    it('Add New Flair And allow Users edit to manage it ', ()=>{
        Createflair();

        PostFlair.getAllowUsereditsButtonfromAddflair().should("be.visible").click()
        PostFlair.getModOnlyButtonfromAddflair().should("be.visible").should('be.disabled')
        // make it Text only
        PostFlair.getTextOnlyCheckFromallowuser().should("be.visible").check()

        PostFlair.getSaveButtonfromAddflair().should("be.visible").should('be.enabled').click()
    })

    




})
