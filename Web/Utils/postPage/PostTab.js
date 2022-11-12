import {PostPage} from "../../support/page-objects";
const PostPage = new PostPage();
module.exports.editorCheckAndType=(text)=>{
    PostPage.getEditorArea().should("be.visible").type(text)
}

module.exports.editorCheck=(text)=>{
    PostPage.getEditorArea().should("text",text)
}

module.exports.buttonCheckAndClick=(type)=>{
    switch(type){
        case "Bold":
            PostPage.getBoldButton().should("be.visible").click();
            break;
        case "Italic":
            PostPage.getItalicButton().should("be.visible").click();
            break;
        case "Underline":
            PostPage.getUnderlineButton().should("be.visible").click();
            break;
        case "Strikethrough":
            PostPage.getStrikethroughButton().should("be.visible").click();
            break;
        case "Code":
            PostPage.getCodeButton().should("be.visible").click();
            break;
        case "Superscript":
            PostPage.getSuperscriptButton().should("be.visible").click();
            break;
        case "Spoiler":
            PostPage.getSpoilerButton().should("be.visible").click();
            break;
        case "Header":
            PostPage.getHeaderButton().should("be.visible").click();
            break;
        case "Ul":
            PostPage.getULButton().should("be.visible").click();
            break;
        case "Ol":
            PostPage.getOLButton().should("be.visible").click();
            break;
        case "Link Prompet":
            PostPage.getLinkButton().should("be.visible").click();
            break;
    }
}

module.exports.checkUrl=(text)=>{
    cy.url().should("include",`${text}`);
}