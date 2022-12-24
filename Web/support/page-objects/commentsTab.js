class SearchPageCommentsTab{
    getAllCommentsContent(SEARCH_QUERY){
        return cy.get("span").contains(SEARCH_QUERY);
    }
}

export default new SearchPageCommentsTab();
