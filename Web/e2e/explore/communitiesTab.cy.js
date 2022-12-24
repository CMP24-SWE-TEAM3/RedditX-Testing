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
    it("click on the join button will change the text",()=>{
        HomePage.getCommunitiesTab().realClick();
        Explore.getJoinButton(0).invoke('text').as('text');
        Explore.getJoinButton(0).realClick();
        cy.get('@text').then((text) => {
            if(text=="Join")
            {
                Explore.getJoinButton(0).should("have.text","Leave")
            }
            else
            {
                Explore.getJoinButton(0).should("have.text","Join")
            }
        })
    })

    it("click on the join will give me alert ",()=>{
        HomePage.getCommunitiesTab().realClick();
        Explore.getJoinButtonNotClicked(0).realClick();
        Explore.getNotification().should("include","Successfully joined")
    })

    it("click on the leave will give me alert ",()=>{
        HomePage.getCommunitiesTab().realClick();
        Explore.getLeaveButtonNotClicked(0).realClick();
        Explore.getNotification().should("include","Successfully leaved")
    })

    it("click on the visit link will redirect with link contains the name of the community",()=>{
        HomePage.getCommunitiesTab().realClick();
        Explore.getCommunitiesNames(0).invoke('text').as('name');
        Explore.getLinks(0).realClick();
        cy.get("@name").then((text) => {
            checkUrl(text);
        })
    })
})