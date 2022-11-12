class SearchPageCommentsTab{
    getAllCommentsContent(){
        cy.get(".comments-content");
    }
}

export default new SearchPageCommentsTab();
