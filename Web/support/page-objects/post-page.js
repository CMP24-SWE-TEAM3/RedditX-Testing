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
        return cy.get("[data-rr-ui-event-key='Link']");
    }

    getTitleField(){
        return cy.get("textarea#title:nth(0)")
    }

    getTitleFieldMedia(){
        return cy.get("textarea#title:nth(1)")
    }
    getTitleFieldLink(){
        return cy.get("textarea#title:nth(2)")
    }

    getUrlFieldLinkTab(){
        return cy.get("textarea[placeholder='Url']");
    }
    getEditorArea(){
        return cy.get(".DraftEditor-root");
    }

    getSpanContent(text){
        return cy.get("span").contains(`${text}`);
    }
    getBoldButton(){
        return cy.get("#Bold");
    }

    getItalicButton(){
        return cy.get("#Italics");
    }

    getUnderlineButton(){
        return cy.get("#Underline");
    }

    getStrikethroughButton(){
        return cy.get("#Strikethrough");
    }

    getCodeButton(){
        return cy.get("#Inline-Code");
    }

    getSuperscriptButton(){
        return cy.get("#Superscript");
    }

    getSpoilerButton(){
        return cy.get("#Spoiler");
    }

    getHeaderButton(){
        return cy.get("#Heading");
    }

    getULButton(){
        return cy.get("#Bulleted-list");
    }

    getOLButton(){
        return cy.get("#Numbered-list");
    }

    getLinkButton(){
        return cy.get("span[data-testid='link-btn']");
    }

    getLinkPormpetFiled(text){
        return cy.get(`input[type='text'][placeholder='${text}']`);
    }

    getLinkPormpetButton(){
        return cy.get("button").contains("Insert");
    }

    getLinkPrompetAlert(){
        return cy.get("span").contains("Link doesn't look right")
    }
    getCodeBlockButton(){
        return cy.get("#Code-Block");
    }

    getResultUl(){
        return cy.get(" div[data-contents='true'] > ul");
    }

    getResultUlElement(){
        return cy.get("div[data-contents='true']>ul.public-DraftStyleDefault-ul>li");
    }

    getResultOl(){
        return cy.get("ol.public-DraftStyleDefault-ol");
    }

    getResultOlElement(){
        return cy.get("ol.public-DraftStyleDefault-ol>li");
    }

    getCodeBlockcontent(){
        return cy.get("pre.public-DraftStyleDefault-pre");
    }


    getPostButtonSubmit(){
        return cy.get("#post");
    }

    getCommunityField(){
        return cy.get("#search-communities")
    }

    //Image Tab
    getFileField(){
        return cy.get("  input[type=file][accept='image/*,video/*']");
    }

    getPreviewImage(){
        return cy.get('#uploadedpreview');
    }

    getImage(i){
        return cy.get(`img.uploaded-image:nth(${i})`)
    }

    getSelectedImageInPreview(){
        return cy.get(`#preview-image`)
    }

    getDangerPerImage(i){
        return cy.get(`.delete-img-danger:nth(${i})`);
    }
    getPostButton(){
        return cy.get("button#post");
    }

    getPostButtonMedia(){
        return cy.get("button#post:nth(1)");
    }
    
    getCommunityDropDown(){
        return cy.get("#search-communities");
    }

    getAllCommunities(){
        return cy.get("#communities-drop-down>div:nth(0)");
    }

    getPrompet(){
        return cy.get("form")
    }

    getCommunity(){
        return cy.get("div.sc-bVhkf.dhbtch")
    }
  }
  
  export default new PostPage();
  