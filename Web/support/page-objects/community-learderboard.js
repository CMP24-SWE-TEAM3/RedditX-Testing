class CommunityLeaderBoardPage {
    // wait to web team
   
    getViewAllCommunities() {
      return cy.get(' #root > div > header > div > div.sc-jOPAHi.hiDIjH > aside > div > div.sc-hAPcZG.dpHntW > div.sc-hmpqzP.jcuDVF > button');
    }
    gettTitleOfPage() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-jVQoqC.dLOiYF > div > div');
      }
    getCategorieswidow() {
      return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.sc-jaZyJE.sc-dDPqvT.YrQvP.eAHbh');
    }

    getNearYOuBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(2) > a');
      }

      
      getCommunitiyoneFromWindow() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-jVQoqC.dLOiYF > div > ol > li:nth-child(1) > div');
      }
      getSportsBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(4) > a');
      }

      getGamingBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(3) > a');
      }
      getNewsBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(5) > a');
      }
      getTVBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(6) > a');
      }
      getAwwBuuton() {
        return cy.get('#the id of the Aww button');
      }
      getMemesBuuton() {
        return cy.get('#the id of the memes button');
      }
      getPicsandGifsBuuton() {
        return cy.get('#the id of the PicsandGifs button');
      }
      getTravelBuuton() {
        return cy.get('#the id of the Travel button');
      }
      getTechBuuton() {
        return cy.get('#the id of the Tech button');
      }
      getMusicBuuton() {
        return cy.get('#the id of the music button');
      }
      getShowMoreBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > button');
      }
      getArtandDesignBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(13) > a');
      }
      getBeautyBuuton() {
        return cy.get('#the id of the Beauty button');
      }
      getBooksandWritingBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(15) > a');
      }
      getCryptoBuuton() {
        return cy.get('#the id of the crypo button');
      }
      getDiscussionBuuton() {
        return cy.get('#the id of the Discussion button');
      }
      getE3Buuton() {
        return cy.get('#the id of the E3 button');
      }
      getFashionBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > ol > li:nth-child(19) > a');
      }
      getFinanceandBusinessBuuton() {
        return cy.get('#the id of the FinanceandBusiness button');
      }
      getFoodBuuton() {
        return cy.get('#the id of the food button');
      }
      getHealthandFitnessBuuton() {
        return cy.get('#the id of the HealthandFitness button');
      }
      getLearningandBusinessBuuton() {
        return cy.get('#the id of the LearningandBusiness button');
      }
      getLearningBuuton() {
        return cy.get('#the id of the Learning button');
      }
      getMindblowingBuuton() {
        return cy.get('#the id of the Mindblowing button');
      }
      getOutdoorsBuuton() {
        return cy.get('#the id of the Outdoors button');
      }
      getParentingBuuton() {
        return cy.get('#the id of the parenting button');
      }
      getphotographyBuuton() {
        return cy.get('#the id of the photography button');
      }
      getRelationshipsBuuton() {
        return cy.get('#the id of the Relationships button');
      }
      getScienceBuuton() {
        return cy.get('#the id of the Science button');
      }
      getVideosBuuton() {
        return cy.get('#the id of the Videos button');
      }
      getVroomBuuton() {
        return cy.get('#the id of the Vroom button');
      }
      getWholesomeBuuton() {
        return cy.get('#the id of the wholesome button');
      }
      getShowlessBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-ddKZzx.sc-hYufOg.gFhRtd.cuLfYQ > div.categories > button ');
      }
      getBackToTopBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-laxFgQ.cjMwxC > div > div.sc-ctDLux.hwdQpH > div > div.sc-bQtnlh.eMvzfd  ');
      }
      
      getCharachtersWindow() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-laxFgQ.cjMwxC > div > div.sc-ctDLux.hwdQpH > div > div.sc-cdhLHq.jDXGAp > h3');
      }
      getcharABuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-laxFgQ.cjMwxC > div > div.sc-ctDLux.hwdQpH > div > div.sc-cdhLHq.jDXGAp > div > a:nth-child(1)');
      }
      getcharBBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-laxFgQ.cjMwxC > div > div.sc-ctDLux.hwdQpH > div > div.sc-cdhLHq.jDXGAp > div > a:nth-child(2)');
      }
      getcharCBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-laxFgQ.cjMwxC > div > div.sc-ctDLux.hwdQpH > div > div.sc-cdhLHq.jDXGAp > div > a:nth-child(3)');
      }
      getcharDBuuton() {
        return cy.get('#root > div > div > div.sc-dYBPgv.binSxh > div.sc-laxFgQ.cjMwxC > div > div.sc-ctDLux.hwdQpH > div > div.sc-cdhLHq.jDXGAp > div > a:nth-child(4)');
      }
      getcharEBuuton() {
        return cy.get('#the id of Char e button');
      }
      getcharFBuuton() {
        return cy.get('#the id of Char f button');
      }
      getcharGBuuton() {
        return cy.get('#the id of Char g button');
      }
      getcharHBuuton() {
        return cy.get('#the id of Char h button');
      }
      getcharIBuuton() {
        return cy.get('#the id of Char i button');
      }
      getcharJBuuton() {
        return cy.get('#the id of Char j button');
      }
      getcharKBuuton() {
        return cy.get('#the id of Char k button');
      }
      getcharLBuuton() {
        return cy.get('#the id of Char l button');
      }
      getcharMBuuton() {
        return cy.get('#the id of Char m button');
      }
      getcharNBuuton() {
        return cy.get('#the id of Char n button');
      }
      getcharOBuuton() {
        return cy.get('#the id of Char o button');
      }
      getcharPBuuton() {
        return cy.get('#the id of Char p button');
      }
      getcharQBuuton() {
        return cy.get('#the id of Char q button');
      }
      getcharRBuuton() {
        return cy.get('#the id of Char R button');
      }
      getcharSBuuton() {
        return cy.get('#the id of Char s button');
      }
      getcharTBuuton() {
        return cy.get('#the id of Char t button');
      }
      getcharUBuuton() {
        return cy.get('#the id of Char u button');
      }
      getcharVBuuton() {
        return cy.get('#the id of Char v button');
      }
      getcharWBuuton() {
        return cy.get('#the id of Char w button');
      }
      getcharXBuuton() {
        return cy.get('#the id of Char x button');
      }
      getcharYBuuton() {
        return cy.get('#the id of Char y button');
      }
      getcharZBuuton() {
        return cy.get('#the id of Char z button');
      }
      getchar0Buuton() {
        return cy.get('#the id of Char # button');
      }
      getFirstCommunity() {
        return cy.get('#the id of Char # button');
      }
      getFirstCommunity

      getTogglethemeBuuton() {
        return cy.get('#toggle-btn');
      }
      getContainerHavingthemainTitle() {
        return cy.get('.sc-erijoS');
      }
      getContainerHavingtheSecondarytitleTitle() {
        return cy.get('#root > div > div > div.sc-eZceyY.jAIjnr > div > p');
      }

  }
  
  export default new CommunityLeaderBoardPage();