class Moderator{

    getEditeButton(){
        return cy.get("#edit-button")
    }

    getEditeModal(){
        return cy.get("#edit-modal")
    }

    getReportContent(){
        return cy.get("#report-content")
    }

    getReportReasonField(){
        return cy.get("#reason-field")
    }

    getAppliedTo(){
        return cy.get("#Applied-To")
    }

    getFullDes(){
        return cy.get("#full-des")
    }

    getDesField(){
        return cy.get("#Des-field")
    }

    getAddRuleButton(){
        return cy.get("#Add-Rule")
    }

    getAddRuleModal(){
        return cy.get("#Add-modal")
    }

    getReasonField(){
        return cy.get("#ReasonFieldAddForm")
    }

    getFullDesInput(){
        return cy.get("#FullDesInputAddForm")
    }

    getAddRuleButton(){
        return cy.get("#AddRuleButton")
    }

    
}

export default new Moderator();
