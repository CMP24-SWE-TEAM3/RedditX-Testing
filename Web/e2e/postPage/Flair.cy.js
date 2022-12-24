
import Flair from "../../support/page-objects/flair";
// import  {LoginPage} from "../../support/page-objects";
import {LoginWithValidEmail,checkVisibilityOfallButtonsAndClicks,windowofselectedflairtitle,getflairButtontitle} from "../../Utils/FlairPage/FlairTab"

describe('FLairPage', () => {
    beforeEach('mmm',()=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("https://dev.redditswe22.tech/login")
    // login with a valid email
    LoginWithValidEmail()
    // go to creat post page
    Flair.getcreatepostButton().should("be.visible").click()
    //check the visiblity of all buttons & Clicks untill reach to the Flair Tab 
    checkVisibilityOfallButtonsAndClicks()
    })
    
    it('Select first Falir to my community  ', ()=>{
        Flair.getflair1().should("be.visible").click()
        windowofselectedflairtitle(' Post Title Flair 1 text')
        Flair.getapplybutton().should("be.visible").should('be.enabled').click()
        getflairButtontitle('Flair 1 text')
    })
    it('Select  Falir then clear that flair and select another one  community  ', ()=>{
        Flair.getflair2().should("be.visible").click()
        windowofselectedflairtitle(' Post Title Flair 2 text')
        Flair.getclearflairbutton().should("be.visible").click()
        windowofselectedflairtitle(' No flair selected')        
        Flair.getflair3().should("be.visible").click()
        windowofselectedflairtitle(' Post Title Flair 3 text')
        Flair.getapplybutton().should("be.visible").should('be.enabled').click()
       getflairButtontitle('Flair 3 text')

    })
    it('Select  Falir then exit from selecting flair to my community  ', ()=>{
        Flair.getflair2().should("be.visible").click()
        windowofselectedflairtitle(' Post Title Flair 2 text')
        Flair.getexitButton().should("be.visible").click()
        getflairButtontitle('Flair')

    })
    it('Select  Falir then clear the name of the flair and give it another name ', ()=>{
        Flair.getflair3().should("be.visible").click()
        windowofselectedflairtitle(' Post Title Flair 3 text')
        Flair.geteditflaircontanier().clear().type("Momo Flair")
        windowofselectedflairtitle(' Post Title Momo Flair')
        Flair.getapplybutton().should("be.visible").should('be.enabled').click()
        getflairButtontitle('Momo Flair')

    })
    it('Select  Falir then apply it after that return to change that flair and select another one  ', ()=>{
        Flair.getflair2().should("be.visible").click()
        windowofselectedflairtitle(' Post Title Flair 2 text')
        Flair.getapplybutton().should("be.visible").should('be.enabled').click()
        getflairButtontitle('Flair 2 text')

        ///// return to change that flair
        Flair.getflairButton().should('be.enabled').click()
        windowofselectedflairtitle(' Post Title Flair 2 text')
        Flair.getapplybutton().should("be.visible").should('be.disabled')
        ///select another one
        Flair.getflair1().should("be.visible").click()
        windowofselectedflairtitle(' Post Title Flair 1 text')
        Flair.getapplybutton().should("be.visible").should('be.enabled').click()
        getflairButtontitle('Flair 1 text')

    })


})
