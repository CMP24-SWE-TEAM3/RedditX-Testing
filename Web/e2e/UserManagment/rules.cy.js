import Moderator from "../../support/page-objects/moderatorreda";

import SubReddit from "../../support/page-objects/subreddit";
import HomePage from "../../support/page-objects/home-page";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('Test the Rules Tab', () => { 
    it("test the Edite button when click will open the edit from modal",()=>{
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
        Moderator.getRulesButton().should("be.visible").click()
    })

    it("get the report reason and then click edit and then check the form content",()=>{
        Moderator.getEditeButton(0).realClick();
        Moderator.getEditeModal().should("be.visible");
        Moderator.getReportContent(0).invoke("text").as("content");
        Moderator.getEditeButton(0).realClick();
        cy.get("@content").then((content)=>{
        Moderator.getReportReasonField().should("have.text",content);
        })
    })

    it("get the Applied to and then click edit and then check the form content",()=>{
        Moderator.getEditeButton(0).realClick();
        Moderator.getEditeModal().should("be.visible");
        Moderator.getAppliedTo().invoke("text").as("content");
        Moderator.getEditeButton().realClick();
        cy.get("@content").then((content)=>{
            Moderator.getAppliedToField().should("have.text",content);
        })
    })

    it("get the full description ",()=>{
        Moderator.getEditeButton(0).realClick();
        Moderator.getEditeModal().should("be.visible");
        Moderator.getFullDes().invoke("text").as("Des");
        Moderator.getEditeButton().realClick();
        cy.get("@Des").then((Des)=>{
            Moderator.getDesField().should("have.text",Des);
        })
    })

    it("check add Rule button",()=>{
        
        Moderator.getAddRuleButton().readClick();
        Moderator.getAddRuleModal().should("be.visible")
    })

    it("put incomplete data in the add form",()=>{
        Moderator.getReasonField().type("new Reason");
        Moderator.getAddRuleButton().should("have.a.property","disabled");
    })

    it("put incomplete data in the add form",()=>{
        Moderator.getFullDesInput().type("Description to the rule");
        Moderator.getAddRuleButton().should("have.a.property","disabled");
    })
    it("put incomplete data in the add form",()=>{
        Moderator.getReasonField().type("new Reason");
        Moderator.getFullDesInput().type("Description to the rule");
        Moderator.getAddRuleButton().should("have.a.property","disabled");
    })

    it("put incomplete data in the add form",()=>{
        Moderator.getRuleField().type("new Rule");
        Moderator.getReasonField().type("new Reason");
        Moderator.getFullDesInput().type("Description to the rule");
        Moderator.getAddRuleButton().realClick();
    })

    it("check the limit of the text in the rule",()=>{
        for(var i=0;i<10;i++)
        {
            Moderator.getRuleField().type("MahmoudReda");
        }
        Moderator.getRuleField().invoke("val").as("value");
        cy.get("@value").then((value)=>{
            if(value.lenght>100)
            {
                expect(true).to(false);
            }
            else
            {
                expect(true).to(true);
            }
        })
    })


    it("check the limit of the text in the Reason",()=>{
        for(var i=0;i<10;i++)
        {
            Moderator.getReasonField().type("MahmoudReda");
        }
        Moderator.getRuleField().invoke("val").as("value");
        cy.get("@value").then((value)=>{
            if(value.lenght>100)
            {
                expect(true).to(false);
            }
            else
            {
                expect(true).to(true);
            }
        })
    })

    it("check the limit of the text in the Descripition",()=>{
        for(var i=0;i<50;i++)
        {
            Moderator.getFullDes().type("MahmoudReda");
        }
        Moderator.getFullDes().invoke("val").as("value");
        cy.get("@value").then((value)=>{
            if(value.lenght>100)
            {
                expect(true).to(false);
            }
            else
            {
                expect(true).to(true);
            }
        })
    })

    it("when i click on add rule button Reason field must be empty",()=>{
        Moderator.getAddRuleButton().realClick();
        Moderator.getReasonField().should("have.text","");
    })

    it("when i click on add rule button description must be empty",()=>{
        Moderator.getAddRuleButton().realClick();
        Moderator.getFullDesInput().should("have.text","");
    })

    it("when i click on add rule button Rule field",()=>{
        Moderator.getAddRuleButton().realClick();
        Moderator.getRoleInput().should("have.text","");
    })

    it("when i click on add rule button",()=>{
        Moderator.getAddRuleButton().realClick();
        Moderator.getDeleteButton().should("have.property","disabled");
    })
    
})