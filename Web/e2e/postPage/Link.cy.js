
import {PostPage,HomePage} from "../../support/page-objects"
import { login } from "../../Utils/utils";
import {checkUrl} from "../../Utils/postPage/PostTab"
describe('Test Post functionality', () => {
  beforeEach(()=>{
    cy.visit("https://dev.redditswe22.tech");
    login();
    HomePage.getSubmitButton().realClick();
    cy.fixture("LinkTabData").then((data) => {
      globalThis.data = data;
    });
    PostPage.getLinkTab().should("be.visible").click();
  }) 
    it("check the length of the title textarea",()=>{
      for(var i=0;i<11;i++)
      {
        PostPage.getTitleFieldLink().type("MahmoudRedaSayedMahmoudRedaSay");
      }
      cy.get("div.title-group.mb-3 > span:nth(2)").should("have.text","300/300")
      })
      it("none complete post v1",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getPostButton().should("have.attr","disabled");
      })
      it("none complete post v2",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getPostButton().should("have.attr","disabled");
      })
      it("none complete post v3",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getCommunityDropDown().click();
        PostPage.getAllCommunities().first().click();
        PostPage.getPostButton().should("have.attr","disabled");
      })
      it("Put invalid link",()=>{
        PostPage.getUrlFieldLinkTab().type(data.invalidLink)
        PostPage.getTitleFieldLink().type(data.title);
        PostPage.getCommunityDropDown().click();
        PostPage.getAllCommunities().first().realClick();
        PostPage.getPostButton().last().realClick();
      })
      it("Put valid link",()=>{
        PostPage.getUrlFieldLinkTab().type(data.validLink)
        PostPage.getTitleFieldLink().type(data.title);
        PostPage.getCommunityDropDown().click();
        PostPage.getAllCommunities().first().realClick();
        PostPage.getPostButton().last().realClick();
        cy.wait(4000);
        checkUrl("/new_title/");
      })
})