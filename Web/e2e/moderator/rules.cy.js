import {Moderator} from "../../support/page-objects";
describe('Test the Rules Tab', () => { 
    it("test the Edite button when click will open the edit from modal",()=>{
        Moderator.getEditeButton().realClick();
        Moderator.getEditeModal().should("be.visible");
    })

    it("get the report reason and then click edit and then check the form content",()=>{
        Moderator.getReportContent().invoke("text").as("content");
        Moderator.getEditeButton().realClick();
        cy.get("@content").then((content)=>{
            Moderator.getReportReasonField().should("have.text",content);
        })
    })

    it("get the Applied to and then click edit and then check the form content",()=>{
        Moderator.getAppliedTo().invoke("text").as("content");
        Moderator.getEditeButton().realClick();
        cy.get("@content").then((content)=>{
            Moderator.getAppliedToField().should("have.text",content);
        })
    })

    it("get the full description ",()=>{
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
    
})