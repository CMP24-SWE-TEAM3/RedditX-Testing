import {SearchPageCommentsTab} from "../../support/page-objects";
describe("test Comments Tab",()=>{
    const SEARCH_QUERY="ahh";
    before(()=>{
        //visit with Query
        // must visit home page and then search in search box and check the url type and query
        // cy.visit("https://www.reddit.com");
        // cy.get("#search-input").type(SEARCH_QUERY)
        // cy.url().should("include",`search/?q=${SEARCH_QUERY}&type=link`)
        //get comments tab
        cy.visit("http://localhost:1648/posts");
        cy.get("button").contains("Comments").click();
        // cy.url().should("include",`search/?q=${SEARCH_QUERY}&type=comment`)
    })
    it("test content of the comments",()=>{
        SearchPageCommentsTab.getAllCommentsContent().each($el=>{var text=$el.text();
            expect(text).to.include(SEARCH_QUERY)});
    })
})