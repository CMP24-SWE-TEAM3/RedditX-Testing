import {PostPage} from "../../support/page-objects"
import {editorCheckAndType,buttonCheckAndClick} from "../../Utils/postPage/PostTab"
describe('Test Post functionality', () => { 
  beforeEach(() => {
        cy.visit("http://localhost:3000");
        // login and then click creat post
        PostPage.getEditorArea().should("be.visible");
        PostPage.getPostTab().should("have.attr","disabled");
    });
    it("Bold test",()=>{
      buttonCheckAndClick("Bold");
      editorCheckAndType("everything is bold ");
      buttonCheckAndClick("Bold");
      editorCheckAndType("everything is not bold  ");
      PostPage.getSpanContent("everything is bold").should("have.css","font-weight","700")
      PostPage.getSpanContent("everything is not bold").should("have.css","font-weight","400")
    })
    it("Italic test",()=>{
      buttonCheckAndClick("Italic")
      editorCheckAndType("every thing is italic ");
      PostPage.getSpanContent("every thing is italic").should("have.css","font-weight","700","font-style","italic")
    })

    it("Underline test",()=>{
      buttonCheckAndClick("Underline")
      editorCheckAndType("have underline ");
      PostPage.getSpanContent("have underline").should("have.css","text-decoration","underline")
    })

    it("Strikethrough test",()=>{
      buttonCheckAndClick("Strikethrough")
      editorCheckAndType("have linethrough");
      PostPage.getSpanContent("have linethrough").should("have.css","text-decoration","underline line-through")
    })

    it("Code test",()=>{
      buttonCheckAndClick("Code")
      editorCheckAndType("code");
      // Hamza give me styles
      // here is  a problem in the background color
      //#0000000d
      PostPage.getSpanContent("code").should("have.css","background","rgb(246, 247, 248)")
      PostPage.getSpanContent("code").should("have.css","background","#0000000d")
    })

    it("Superscript test",()=>{
      buttonCheckAndClick("Superscript")
      editorCheckAndType("Superscript words")
      // here is a problem not super but baseline
      // <span data-offset-key="1u9me-0-0" style="color: rgb(28, 28, 28); vertical-align: super; font-size: 12px;"><span data-text="true">zssacdsc</span></span>
      PostPage.getSpanContent("Superscript words").should("have.css","vertical-align","super")
    })

    it("Spoiler test",()=>{
      buttonCheckAndClick("Spoiler")
      editorCheckAndType("spoiler words");
      // here is a problem not #D but 0,0,0
      // background-color: rgb(84, 84, 82);
      // SPOILER: {
      //   backgroundColor: "#545452",
      //   borderRadius: "2px",
      //   caretColor: "#fff",
      //   color: "#fff",
      //   display: "inline-block",
      //   margin: "0 3px",
      //   padding: "0 4px",
      // },
      PostPage.getSpanContent("spoiler words").should("have.css","background-color","rgb(84, 84, 82)")
    })

    // take the size 
    it(" header test ",()=>{
      buttonCheckAndClick("Header")
      editorCheckAndType("Heading words")
      //give me font size 
      PostPage.getSpanContent("Heading words").should("have.css","font-size","")

    })

    it("Ul test",()=>{
      buttonCheckAndClick("Ul")
      editorCheckAndType("unordered list 1\nunordered list 2");
      PostPage.getResultUl().should("be.visible")
      PostPage.getResultUlElement().first().should("text","unordered list 1")
      PostPage.getResultUlElement().last().should("text","unordered list 2");
    })

    it("Ol test",()=>{
      buttonCheckAndClick("Ol")
      editorCheckAndType("ordered list\nordered list 2");
      PostPage.getResultOl().should("be.visible");
      PostPage.getResultOlElement().first().should("text","ordered list");
      PostPage.getResultOlElement().last().should("text","ordered list 2");
    })

    it("test code block",()=>{
      buttonCheckAndClick("Code Block")
      PostPage.getCodeBlockButton().should("be.visible");
      PostPage.getCodeBlockButton().click();
      editorCheckAndType("test code");
      // give me the style ya hamza
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

    // negative
    it("put invalid link without title",()=>{
      buttonCheckAndClick("Link Prompet")
      PostPage.getLinkPormpetFiled('Paste or type link here').should("be.visible")
      PostPage.getLinkPormpetFiled('Paste or type link here').type("not a link")
      PostPage.getLinkPormpetFiled('Title of link (optional)').should("be.visible")
      PostPage.getLinkPormpetButton().should("be.visible").click();
      // no link validations should give me an alert if it is not a link
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
      // problem with css
      PostPage.getSpanContent("https://www.reddit.com/submit").should("have.css","text-decoration","underline")
    })

    it("put title without link",()=>{
      buttonCheckAndClick("Link Prompet")
      PostPage.getLinkPormpetFiled('Paste or type link here').should("be.visible")
      PostPage.getLinkPormpetFiled('Title of link (optional)').should("be.visible").type("title without link")
      PostPage.getLinkPormpetButton().should("be.visible").click();
      // no link validations should give me an alert if it is not a link
      editorCheck("Text (optional)")
      PostPage.getLinkPrompetAlert().should("be.visible");
    })

    it("Hover any button",()=>{
      PostPage.getStrikethroughButton().realHover();
      PostPage.getStrikethroughButton().then(($el) => {
        const win = $el[0].ownerDocument.defaultView;
        const before = win.getComputedStyle($el[0], 'after');
        const content = before.getPropertyValue('content');
        expect(content).to.eq('"Strikethrough"');
      });
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
      PostPage.getPostButton().should("have.attr","disabled");
      PostPage.getCommunityField().first().click();
      PostPage.getPostButton().click();
      cy.wait(4000);
      cy.url().should("include","/new_title/");
    })

})