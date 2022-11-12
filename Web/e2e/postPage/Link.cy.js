import {PostPage} from "../../support/page-objects"
import {checkUrl} from "../../Utils/postPage/PostTab"
describe('Test Post functionality', () => { 
  beforeEach(() => {
        cy.clearLocalStorage();
        cy.fixture("LinkTabData").then((data) => {
          globalThis.data = data;
        });
        cy.visit("http://localhost:3000");
        PostPage.getElementById("Editor").should("be.visible");
        PostPage.getLinkTab().should("be.visible").click();
        PostPage.getTitleField().should("be.visible")
        PostPage.getUrlFieldLinkTab().should("be.visible")
        PostPage.getPostButton().should("have.attr","disabled");
    });
    it.only("check the length of the title textarea",()=>{
      PostPage.getTitleField().should("have.attr","maxlength","300")
      })
      it("none complete post v1",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getPostButton().should("have.attr","disabled");
      })
      it("none complete post v2",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getTitleField().should("text",data.title);
        PostPage.getPostButton().should("have.attr","disabled");
      })
      it("none complete post v3",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getTitleField().should("text",data.title);
        PostPage.getCommunityDropDown().click();
        PostPage.getAllCommunities().first().click();
        PostPage.getPostButton().should("not.have.attr","disabled");
      })
      it("Put invalid link",()=>{
        PostPage.getUrlFieldLinkTab().type(data.invalidLink)
        PostPage.getTitleField().should("text",data.title);
        PostPage.getCommunityDropDown().click();
        PostPage.getAllCommunities().first().click();
        PostPage.getPostButton().click();
        cy.contains("Link doesn't look right").should("be.visible");
        cy.contains("(Please fix the above requirements").should("be.visible");
      })
      it("Put valid link",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getTitleField().should("text",data.title);
        PostPage.getCommunityDropDown().click();
        PostPage.getAllCommunities().first().click();
        PostPage.getPostButton().click();
        cy.wait(4000);
        checkUrl("/new_title/");
      })
})