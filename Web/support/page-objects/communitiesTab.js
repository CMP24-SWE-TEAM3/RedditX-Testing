class SearchPageCommunityTab{
    getCommunitiesNames(){
        return cy.get(".community-name");
    }
}

export default new SearchPageCommunityTab();
