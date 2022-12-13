import {PostPage} from "../../support/page-objects";
module.exports.editorCheckAndType=(text)=>{
    PostPage.getEditorArea().should("be.visible").type(text)
}

module.exports.editorCheck=(text)=>{
    PostPage.getEditorArea().should("text",text)
}

module.exports.buttonCheckAndClick=(type)=>{
    switch(type){
        case "Bold":
            PostPage.getBoldButton().should("be.visible").realClick();
            break;
        case "Italic":
            PostPage.getItalicButton().should("be.visible").realClick();
            break;
        case "Underline":
            PostPage.getUnderlineButton().should("be.visible").realClick();
            break;
        case "Strikethrough":
            PostPage.getStrikethroughButton().should("be.visible").realClick();
            break;
        case "Code":
            PostPage.getCodeButton().should("be.visible").realClick();
            break;
        case "Superscript":
            PostPage.getSuperscriptButton().should("be.visible").realClick();
            break;
        case "Spoiler":
            PostPage.getSpoilerButton().should("be.visible").realClick();
            break;
        case "Header":
            PostPage.getHeaderButton().should("be.visible").realClick();
            break;
        case "Ul":
            PostPage.getULButton().should("be.visible").realClick();
            break;
        case "Ol":
            PostPage.getOLButton().should("be.visible").realClick();
            break;
        case "Link Prompet":
            PostPage.getLinkButton().should("be.visible").realClick();
            break;
    }
}

module.exports.checkUrl=(text)=>{
    cy.url().should("include",`${text}`);
}