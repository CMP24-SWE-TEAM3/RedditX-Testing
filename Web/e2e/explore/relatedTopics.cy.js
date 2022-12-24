import  HomePage  from "../../support/page-objects/home-page";
import  Explore  from "../../support/page-objects/explore";
import {checkUrl} from "../../Utils/utils";
import { login } from "../../Utils/utils";
describe('Test communities Tab', () => {
    beforeEach(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getUserDropdown().realClick();
        HomePage.getExplore().realClick();
     
      })
    it("when i click on the any component will redirect to the route\
        contains the name of the component",()=>{
        HomePage.getCommunitiesTab().realClick();
        Explore.getLinksElement(0).val("text").as("name");
        Explore.getLinksElement(0).realClick();
        cy.get("@name").then((name)=>{
            checkUrl(name);
        })
     })
})