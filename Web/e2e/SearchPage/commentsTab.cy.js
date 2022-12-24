import {SearchPageCommentsTab,HomePage} from "../../support/page-objects";
import {login} from "../../Utils/utils"
describe("test Comments Tab",()=>{
    const SEARCH_QUERY="عايز اعمل صب";

    beforeEach(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getSearchField().type(SEARCH_QUERY);
        HomePage.getSearchField().type('{enter}');
        cy.fixture("LinkTabData").then((data) => {
          globalThis.data = data;
        });
        
        cy.get("button").contains("Comments").click();
      }) 
    it("test content of the comments",()=>{
        
        SearchPageCommentsTab.getAllCommentsContent(SEARCH_QUERY).each($el=>{var text=$el.text();
            expect(text).to.include(SEARCH_QUERY)});
    })
})