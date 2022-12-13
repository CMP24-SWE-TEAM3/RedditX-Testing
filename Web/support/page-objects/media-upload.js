class MediaUpload {
    getFailAlert(){
        return cy.get("#fialAlert");
    }

    getSuccessAlert(){
        return cy.get("#successAlert");
    }

    getCancelButton(){
        return cy.get("button").contains("Cancel");
    }
}

export default new MediaUpload();