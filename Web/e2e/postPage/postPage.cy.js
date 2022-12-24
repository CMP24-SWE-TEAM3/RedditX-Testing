import {HomePage, PostPage} from "../../support/page-objects"
import { login } from "../../Utils/utils";
import {editorCheckAndType,editorCheck,buttonCheckAndClick} from "../../Utils/postPage/PostTab"

describe('Test Post functionality', () => { 
  beforeEach(()=>{
    cy.visit("https://dev.redditswe22.tech");
    login();
    cy.wait(2000);
    HomePage.getSubmitButton().realClick();
  })
    it("Bold test",()=>{
      buttonCheckAndClick("Bold");
      editorCheckAndType(" everything is bold");
      editorCheckAndType(" \n ");
      buttonCheckAndClick("Bold");
      editorCheckAndType(" everything is not bold");

      PostPage.getSpanContent("everything is bold").should("have.css","font-weight","700")
      PostPage.getSpanContent("everything is not bold").should("have.css","font-weight","400")
    })
    it("Italic test",()=>{
      buttonCheckAndClick("Italic")
      editorCheckAndType(" every thing is italic ");
      PostPage.getSpanContent("every thing is italic").should("have.css","font-style","italic")
    })

    it("Underline test",()=>{
      buttonCheckAndClick("Underline")
      editorCheckAndType(" have underline ");
      PostPage.getSpanContent("have underline").should("have.css","text-decoration","none solid rgb(28, 28, 28)")
    })

    it("Strikethrough test",()=>{
      buttonCheckAndClick("Strikethrough")
      editorCheckAndType(" have linethrough");
      PostPage.getSpanContent("have linethrough").should("have.css","text-decoration","none solid rgb(28, 28, 28)")
    })

    it("Code test",()=>{
      buttonCheckAndClick("Code")
      editorCheckAndType(" code");
      PostPage.getSpanContent("code").should("have.css","background","rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box")
    })

    it("Superscript test",()=>{
      buttonCheckAndClick("Superscript")
      editorCheckAndType(" Superscript words")
      PostPage.getSpanContent("Superscript words").should("have.css","vertical-align","baseline")
    })

    it("Spoiler test",()=>{
      buttonCheckAndClick("Spoiler")
      editorCheckAndType(" spoiler words");
      PostPage.getSpanContent("spoiler words").should("have.css","background-color","rgba(0, 0, 0, 0)")
    })

    it(" header test ",()=>{
      buttonCheckAndClick("Header")
      editorCheckAndType(" Heading words")
      PostPage.getSpanContent("Heading words").should("have.css","font-size","24px")

    })

    it("Ul test",()=>{
      buttonCheckAndClick("Ul")
      editorCheckAndType(" unordered list 1\n");
      editorCheckAndType("unordered list 2");
      PostPage.getResultUl().should("be.visible")
      PostPage.getResultUlElement().first().should("text","unordered list 1 ")
      PostPage.getResultUlElement().last().should("text","unordered list 2");
    })

    it("Ol test",()=>{
      buttonCheckAndClick("Ol")
      editorCheckAndType(" ordered list 1\n");
      editorCheckAndType("ordered list 2");
      PostPage.getResultOl().should("be.visible");
      PostPage.getResultOlElement().first().should("text","ordered list 1 ");
      PostPage.getResultOlElement().last().should("text","ordered list 2");
    })

    it("test code block",()=>{
      buttonCheckAndClick("Code Block")
      PostPage.getCodeBlockButton().should("be.visible");
      PostPage.getCodeBlockButton().click();
      editorCheckAndType("test code");
      PostPage.getCodeBlockcontent().should("be.visible")
                                                .and("text","test code")
                                                .and("have.css","background-color","rgba(0, 0, 0, 0.05)")

    })
    it("get link prompet",()=>{
      buttonCheckAndClick("Link Prompet")
      PostPage.getLinkPormpetFiled('Paste or type link here').should("be.visible");
      PostPage.getLinkPormpetFiled('Title of link (optional)').should("be.visible");
      PostPage.getLinkPormpetButton().should("be.visible").click();
      editorCheck("Text (optional)")
    })

    it("put invalid link without title",()=>{
      buttonCheckAndClick("Link Prompet")
      PostPage.getLinkPormpetFiled('Paste or type link here').should("be.visible")
      PostPage.getLinkPormpetFiled('Paste or type link here').type("not a link")
      PostPage.getLinkPormpetFiled('Title of link (optional)').should("be.visible")
      PostPage.getLinkPormpetButton().should("be.visible").click();
      editorCheck("Text (optional)")
      PostPage.getLinkPrompetAlert().should("be.visible");
    })

    it("put valid link without title",()=>{
      buttonCheckAndClick("Link Prompet")
      PostPage.getLinkPormpetFiled('Paste or type link here').should("be.visible")
      PostPage.getLinkPormpetFiled('Paste or type link here').type("https://www.reddit.com/submit")
      PostPage.getLinkPormpetFiled('Title of link (optional)').should("be.visible")
      PostPage.getLinkPormpetButton().should("be.visible").click();
      editorCheck("https://www.reddit.com/submit")
      PostPage.getSpanContent("https://www.reddit.com/submit").should("have.css","text-decoration","underline")
    })

    it("open the prompet and then click at any position",()=>{
      buttonCheckAndClick("Link Prompet")
      PostPage.getLinkPormpetFiled('Paste or type link here').should("be.visible")
      PostPage.getLinkPormpetFiled('Paste or type link here').type("https://www.reddit.com/submit")
      cy.get("body").click("bottomRight",{force: true})
      PostPage.getPrompet().should("not.be.visible")
    })

    it("put title without link",()=>{
      buttonCheckAndClick("Link Prompet")
      PostPage.getLinkPormpetFiled('Paste or type link here').should("be.visible")
      PostPage.getLinkPormpetFiled('Title of link (optional)').should("be.visible").type("title without link")
      PostPage.getLinkPormpetButton().should("be.visible").click();
      editorCheck("Text (optional)")
      PostPage.getLinkPrompetAlert().should("be.visible");
    })

    it("Hover any button",()=>{
      PostPage.getStrikethroughButton().realHover();
      cy.get("div").contains("Strikethrough");
    })

    it("click on Heading ",()=>{
      PostPage.getBoldButton().should("have.css","color","rgb(135, 138, 140)").click();
      PostPage.getBoldButton().should("have.css","color","rgb(28, 28, 28)");
      buttonCheckAndClick("Header");
      PostPage.getHeaderButton().should("have.css","color","rgb(28, 28, 28)");
      PostPage.getElementById("Bold").should("have.css","color","rgb(135, 138, 140)");
      editorCheckAndType("new word");
      PostPage.getSpanContent("new word").should("have.css","font-weigth","500");
    })

    it("Check the content of the  post’s Title",()=>{
      PostPage.getTitleField().first().type("New title");
      PostPage.getPostButtonSubmit().should("have.attr","disabled");
      PostPage.getCommunityField().click();
      PostPage.getCommunity().last().click();
      PostPage.getPostButtonSubmit().click();
      cy.wait(4000);
      cy.url().should("include","/new_title/");
    })

})