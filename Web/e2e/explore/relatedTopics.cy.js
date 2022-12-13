import { HomePage,Explore } from "../../support/page-objects";
import {checkUrl} from "../../Utils/utils";

describe('Test communities Tab', () => {
    beforeEach(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getUserDropdown().realClick();
        HomePage.getExplore().realClick();
        HomePage.getCommunitiesTab().realClick();
      })
    it("when i click on the any component will redirect to the route\
        contains the name of the component",()=>{
        Explore.getLinksElement(0).val("text").as("name");
        Explore.getLinksElement(0).realClick();
        cy.get("@name").then((name)=>{
            checkUrl(name);
        })
     })
})