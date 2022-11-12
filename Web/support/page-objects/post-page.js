class PostPage {
    getElementById(id) {
        return cy.get("#"+id);
    }

    getPostTab(){
        return cy.get("#post-tab");
    }

    getImageVideoTab(){
        return cy.get("#image-tab");
    }

    getLinkTab(){
        return cy.get("link-tab");
    }

    getTitleField(){
        return cy.get("#title")
    }

    getUrlFieldLinkTab(){
        return cy.get("#url");
    }
    getEditorArea(){
        return cy.get("#post-area");
    }

    getSpanContent(text){
        cy.get("span").contains(text);
    }
    getBoldButton(){
        return cy.get("#Bold");
    }

    getItalicButton(){
        return cy.get("#Italic");
    }

    getUnderlineButton(){
        return cy.get("#Underline");
    }

    getStrikethroughButton(){
        return cy.get("#Strikethrough");
    }

    getCodeButton(){
        return cy.get("#code");
    }

    getSuperscriptButton(){
        return cy.get("#Superscript");
    }

    getSpoilerButton(){
        return cy.get("#Spoiler");
    }

    getHeaderButton(){
        return cy.get("#H4");
    }

    getULButton(){
        return cy.get("#Ul");
    }

    getImageButton(){
        return cy.get("#image");
    }

    getVideoButton(){
        return cy.get("#video");
    }

    getOLButton(){
        return cy.get("#Ol");
    }

    getLinkButton(){
        return cy.get("#Link");
    }

    getLinkPormpetFiled(text){
        return cy.get(`input[type='text'][placeholder='${text}']`);
    }

    getLinkPormpetButton(){
        return cy.get("button").contains("Insert");
    }

    getLinkPrompetAlert(){
        return cy.contains("Link does'nt look right")
    }
    getCodeBlockButton(){
        return cy.get("#Code-Block");
    }

    getResultUl(){
        cy.get("ul.public-DraftStyleDefault-ul");
    }

    getResultUlElement(){
        cy.get("ul.public-DraftStyleDefault-ul>li");
    }

    getResultOl(){
        cy.get("ol.public-DraftStyleDefault-ol");
    }

    getResultOlElement(){
        cy.get("ol.public-DraftStyleDefault-ol>li");
    }

    getCodeBlockcontent(){
        return cy.get("pre.public-DraftStyleDefault-pre");
    }


    getPostButton(){
        return cy.get("#post");
    }

    getCommunityField(){
        return cy.get("#search-communities")
    }
    // choose-community

    //Image Tab
    getFileField(){
        return cy.get("input[type='file']");
    }

    getPreviewImage(){
        return cy.get('#preview-image');
    }

    getImage(text){
        //uploaded-image new class name
        return cy.get(`#${text}`)
    }

    getSelectedImageInPreview(){
        // class rather than id .img-thumbnail
        return cy.get(`#selectedImage`)
    }

    getDangerPerImage(text){
        // class delete-img-danger 
        return cy.get(`#danger${text}`);
    }
    getPostButton(){
        return cy.get("button[type='button']").contains("Post");
    }
    
    getCommunityDropDown(){
        //#communities-drop-down
        return cy.get("#root > div > div.sc-gswNZR.bOjxFd > div.sc-jSUZER.gMDupT > div > div > span");
    }

    getAllCommunities(){
        return cy.get(".choose-community");
    }
  }
  
    export default new PostPage();
  