class Moderator{
    getRulesButton(i){
        return cy.get("#root > div > div.sc-eNfnwC.bBlfdM.col-sm-3 > div > div:nth-child(13) > a");
    }
    getEditeButton(i){
        return cy.get("button.sc-khABml.iRIfBd:nth("+i+")");
    }

    getEditeModal(){
        return cy.get("div.modal-content")
    }

    getReportContent(i){
        return cy.get("div.sc-fpPWOc.fRdLmv:nth("+i+")")
    }

    getReportReasonField(){
        return cy.get("textarea[placeholder='Reason rule is broken (eg \"This is a photo\")']")
    }

    getAppliedTo(){
        return cy.get("label[for='checkId-1']")
    }

    getFullDes(){
        return cy.get("div.sc-fpPWOc.fRdLmv > div > p")
    }

    getDesField(){
        return cy.get("textarea[placeholder='Enter the full description of the rule']")
    }

    getAddRuleButton(){
        return cy.get("button.sc-gHxGha.bjMsof").contains("Add rule")
    }

    getAddRuleModal(){
        return cy.get(".modal-content")
    }

    getReasonField(){
        return cy.get("textarea[placeholder='Reason rule is broken (eg \"This is a photo\")']");
    }

    getFullDesInput(){
        return cy.get("textarea[placeholder='Enter the full description of the rule']");
    }

    getRoleInput(){
        return cy.get("textarea[placeholder='Rule displayed (e.g \"No Photos\")']")
    }

    getDeleteButton(){
        return cy.get("button.sc-eLQSJh.jhrAFM").contains("Delete");
    }
    
}

export default new Moderator();
