import  HomePage  from "../../support/page-objects/home-page";
import  Explore  from "../../support/page-objects/explore";
import {checkUrl} from "../../Utils/utils";
import { login } from "../../Utils/utils";
describe('Test the Posts Tab', () => { 

    beforeEach(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getUserDropdown().realClick();
        HomePage.getExplore().realClick();
      })
    it("click on the user name will redirect to the user page",()=>{
        Explore.getPostUserName().realClick();
        checkUrl(Explore.getPostUserName().invoke("text"))
    })

    it("hover on the user will appear with the card",()=>{
        Explore.getPostUserName().realHover();
        Explore.getUserNameCard().should("be.visible");
    })

    it("check the likes count and click on the up and dwon will change the color",()=>{
        // old color
        Explore.getLikes().should("have.css","color","");
        Explore.getUpArrow().realClick();
        // new color
        Explore.getLikes().should("have.css","color","");
    })

    it("Click on the up and then on the dwon will return to the same color",()=>{
        // old color
        Explore.getLikes().should("have.css","color","Red");
        Explore.getUpArrow().realClick();
        Explore.getDownArrow().realClick();
        // old color
        Explore.getLikes().should("have.css","color","Black");
    })


    it("click on the share will appear the dropdown",()=>{
        Explore.getShareButton().realClick();
        Explore.getShareDropdown().should("be.visible");
    })

    it("click on the copy button in the tab of the share ",()=>{
        Explore.getShareButton().realClick();
        Explore.getCopyButton().realClick();
        Explore.getCopyNotification().should("be.visible");
    })

    it("click on the save button will change to unsave",()=>{
        // get the second element of the save buttons
        Explore.getSaveButton(1).realClick();
        Explore.getSaveButton(1).should("have.text","unsave");
    })

    it("click on the save button will give me the notification of the saving",()=>{
        // get the second element of the save buttons
        Explore.getSaveButton(1).realClick();
        Explore.getCopyNotification().should("be.visible").and("have.text","Post saved successfully");
    })


    it("click on the save button will give me the notification of the saving and undo button",()=>{
        // get the second element of the save buttons
        Explore.getSaveButton(1).realClick();
        Explore.getUndoSaveButton().realClick();
        Explore.getNotification().should("be.visible").and("have.text","Post unsaved successfully");
    })


    it("click on the button of the hide the post will be disappeared",()=>{
        Explore.getPost(0).invoke('text').as('text');
        Explore.getHideButton(0).realClick();
        cy.get('@text').then((text) => {
            Explore.getPost(0).should("have.text",text);
        })
    })

})