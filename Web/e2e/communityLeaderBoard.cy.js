import CommunityLeaderBoardPage from "../support/page-objects/community-learderboard";



describe('community leader board page', () => {

    beforeEach('community leader board', ()=>{

       
        cy.visit("http://localhost:3000/");

       // check visiblity of catigeries
       
       // CommunityLeaderBoardPage.getCategorieswidow().should("be.visible")
           // charachters frame
     //  CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
     //  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
      
              //Back to Top Buttom
     //  CommunityLeaderBoardPage.getBackToTopBuuton.scrollIntoView({duration:2000})  
     //  CommunityLeaderBoardPage.getBackToTopBuuton.should("be.visible")

    })

    //// check titles
 it('check for title of h1', ()=>{

   CommunityLeaderBoardPage.getContainerHavingthemainTitle().should("be.visible")
   CommunityLeaderBoardPage.getContainerHavingthemainTitle().should("have.text","Today's Top Growing Communities")

})  

it.skip('check for secondary title of span', ()=>{

   CommunityLeaderBoardPage.getContainerHavingtheSecondarytitleTitle().should("be.visible")
   CommunityLeaderBoardPage.getContainerHavingtheSecondarytitleTitle().should("have.text","Browse Reddit's top growing communities. Find the top communities in your favorite category.")

})  

 
    it.skip('check for button of near you communties', ()=>{

       CommunityLeaderBoardPage.getNearYOuBuuton().should("be.visible")
       CommunityLeaderBoardPage.getNearYOuBuuton().trigger("mouseover").click();
       CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Local Communities Near You")
    
     })  

     it.skip('check for button of sports communties', ()=>{

      CommunityLeaderBoardPage.getSportsBuuton().should("be.visible")
      CommunityLeaderBoardPage.getSportsBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Sports")
   
     })
     
     it.skip('check for button of gamming communties', ()=>{

      CommunityLeaderBoardPage.getGamingBuuton().should("be.visible")
      CommunityLeaderBoardPage.getGamingBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Gaming")
     })  

     it.skip('check for button of news communties', ()=>{

      CommunityLeaderBoardPage.getNewsBuuton().should("be.visible")
      CommunityLeaderBoardPage.getNewsBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in News")
     })  

     it.skip('check for button of TV communties', ()=>{

      CommunityLeaderBoardPage.getTVBuuton().should("be.visible")
      CommunityLeaderBoardPage.getTVBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in TV")
     })  

     it.skip('check for button of AWW communties', ()=>{

      CommunityLeaderBoardPage.getAwwBuuton().should("be.visible")
      CommunityLeaderBoardPage.getAwwBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Aww")
     })  

     it.skip('check for button of Memes communties', ()=>{

      CommunityLeaderBoardPage.getMemesBuuton().should("be.visible")
      CommunityLeaderBoardPage.getMemesBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Memes")
     })  

     it.skip('check for button of Pic&gifs communties', ()=>{

      CommunityLeaderBoardPage.getPicsandGifsBuuton().should("be.visible")
      CommunityLeaderBoardPage.getPicsandGifsBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Pics & Gifs")
     })  


     it.skip('check for button of Travel communties', ()=>{

      CommunityLeaderBoardPage.getTravelBuuton().should("be.visible")
      CommunityLeaderBoardPage.getTravelBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Travel")
     })  

     it.skip('check for button of Tech communties', ()=>{

      CommunityLeaderBoardPage.getTechBuuton().should("be.visible")
      CommunityLeaderBoardPage.getTechBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Tech")
     })  

     it.skip('check for button of Music communties', ()=>{

      CommunityLeaderBoardPage.getMusicBuuton().should("be.visible")
      CommunityLeaderBoardPage.getMusicBuuton().trigger("mouseover").click();
      CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Music")
     })  
//////////////////////
     it.skip('check for button of veiw more', ()=>{

       CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible")
       CommunityLeaderBoardPage.getShowMoreBuuton().trigger("mouseover").click();
 
     })  

 ///////////////////
 

 it.skip('check for button of Art$ design communties', ()=>{

   CommunityLeaderBoardPage.getTechBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getTechBuuton().should("be.visible")
   CommunityLeaderBoardPage.getTechBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Art & Design")
 })  

 it.skip('check for button of Beauty communties', ()=>{

   CommunityLeaderBoardPage.getArtandDesignBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getArtandDesignBuuton().should("be.visible")
   CommunityLeaderBoardPage.getArtandDesignBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Art & Design")
 })  



 it.skip('check for button of Books & writing communties', ()=>{

   CommunityLeaderBoardPage.getBooksandWritingBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getBooksandWritingBuuton().should("be.visible")
   CommunityLeaderBoardPage.getBooksandWritingBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Books & Writing")
 })  

 it.skip('check for button of crypto communties', ()=>{

   CommunityLeaderBoardPage.getCryptoBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getCryptoBuuton().should("be.visible")
   CommunityLeaderBoardPage.getCryptoBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Crypto")
 })  

 it.skip('check for button of Discussion communties', ()=>{

   CommunityLeaderBoardPage.getDiscussionBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getArtandDesignBuuton().should("be.visible")
   CommunityLeaderBoardPage.getDiscussionBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Discussion")
 })  

 it.skip('check for button of E3 communties', ()=>{

   CommunityLeaderBoardPage.getE3Buuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getE3Button().should("be.visible")
   CommunityLeaderBoardPage.getE3Buuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in E3")
 })  

 it.skip('check for button of Fashion communties', ()=>{

   CommunityLeaderBoardPage.getFashionBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getFashionBuuton().should("be.visible")
   CommunityLeaderBoardPage.getFashionBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Fashion")
 })  

 it.skip('check for button of finance & business communties', ()=>{

   CommunityLeaderBoardPage.getFinanceandBusinessBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getFinanceandBusinessBuuton().should("be.visible")
   CommunityLeaderBoardPage.getFinanceandBusinessBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Finance & Business")
 })  

 it.skip('check for button of food communties', ()=>{

   CommunityLeaderBoardPage.getFoodBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getFoodBuuton().should("be.visible")
   CommunityLeaderBoardPage.getFoodBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Food")
 })  

 it.skip('check for button of health & fitness communties', ()=>{

   CommunityLeaderBoardPage.getHealthandFitnessBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getHealthandFitnessBuuton().should("be.visible")
   CommunityLeaderBoardPage.getHealthandFitnessBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Health & Fitness")
 })  

 it.skip('check for button of learning communties', ()=>{

   CommunityLeaderBoardPage.getLearningBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getLearningBuuton().should("be.visible")
   CommunityLeaderBoardPage.getLearningBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Learning")
 })  

 it.skip('check for button of mindblowing communties', ()=>{

   CommunityLeaderBoardPage.getMindblowingBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getMindblowingBuuton().should("be.visible")
   CommunityLeaderBoardPage.getMindblowingBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Mindblowing")
 })  

 it.skip('check for button of outdoors communties', ()=>{

   CommunityLeaderBoardPage.getOutdoorsBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getOutdoorsBuuton().should("be.visible")
   CommunityLeaderBoardPage.getOutdoorsBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Outdoors")
 })  

 it.skip('check for button of parenting communties', ()=>{

   CommunityLeaderBoardPage.getParentingBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getParentingBuuton().should("be.visible")
   CommunityLeaderBoardPage.getParentingBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Parenting")
 })  

 it.skip('check for button of photography communties', ()=>{

   CommunityLeaderBoardPage.getphotographyBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getphotographyBuuton().should("be.visible")
   CommunityLeaderBoardPage.getphotographyBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Photography")
 })  

 it.skip('check for button of Relationships communties', ()=>{

   CommunityLeaderBoardPage.getRelationshipsBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getRelationshipsBuuton().should("be.visible")
   CommunityLeaderBoardPage.getRelationshipsBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Relationships")
 })  

 it.skip('check for button of science communties', ()=>{

   CommunityLeaderBoardPage.getScienceBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getScienceBuuton().should("be.visible")
   CommunityLeaderBoardPage.getScienceBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Science")
 })  

 it.skip('check for button of videos communties', ()=>{

   CommunityLeaderBoardPage.getVideosBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getVideosBuuton().should("be.visible")
   CommunityLeaderBoardPage.getVideosBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Videos")
 })  

 it.skip('check for button of vroom communties', ()=>{

   CommunityLeaderBoardPage.getVroomBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getVroomBuuton().should("be.visible")
   CommunityLeaderBoardPage.getVroomBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Vroom")
 })  

 it.skip('check for button of wholesome communties', ()=>{

   CommunityLeaderBoardPage.getWholesomeBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getWholesomeBuuton().should("be.visible")
   CommunityLeaderBoardPage.getWholesomeBuuton().trigger("mouseover").click();
   CommunityLeaderBoardPage.gettTitleOfPage().should("have.text","Today's Top Growing in Wholesome")
 })  

// check show less button

it.skip('check for button of show less', ()=>{

   CommunityLeaderBoardPage.getShowlessBuuton().scrollIntoView({duration:3000})
   CommunityLeaderBoardPage.getShowlessBuuton().should("be.visible")
   CommunityLeaderBoardPage.getShowlessBuuton().trigger("mouseover").click();
 })  


/////////////////////////////////////////////////////////////// check for Browse Communities A-Z

it.skip('check for letter of A', ()=>{

    // charachters frame
  CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharABuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharABuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/a-1")

 })  

 it.skip('check for letter of B', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharBBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharBBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/b-1")

 })  

 it.skip('check for letter of C', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharCBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharCBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/c-1")

 })  

 it.skip('check for letter of D', ()=>{

    // charachters frame
      CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
      CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharDBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharDBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/d-1")

 })  

 it.skip('check for letter of E', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharEBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharEBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/e-1")

 })  

 it.skip('check for letter of F', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharFBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharFBuuton().click();    
    cy.url().should("include","https://www.reddit.com/subreddits/f-1")

 })  

 it.skip('check for letter of G', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharGBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharGBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/g-1")

 })  

 it.skip('check for letter of H', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharHBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharHBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/h-1")

 })  

 it.skip('check for letter of I', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharIBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharIBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/i-1")

 })  

 it.skip('check for letter of J', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharJBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharJBuuton().click();

    cy.url().should("include","https://www.reddit.com/subreddits/j-1")

 })  

 it.skip('check for letter of K', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharKBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharKBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/k-1")

 })  

 it.skip('check for letter of L', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharLBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharLBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/l-1")

 })  

 it.skip('check for letter of M', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharMBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharMBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/m-1")

 })  

 it.skip('check for letter of N', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharNBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharNBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/n-1")

 })  

 it.skip('check for letter of O', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharOBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharOBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/o-1")

 })  

 it.skip('check for letter of P', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharPBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharPBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/p-1")

 })  

 it.skip('check for letter of Q', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharQBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharQBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/q-1")

 })  

 it.skip('check for letter of R', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharRBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharRBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/r-1")

 })  

 it.skip('check for letter of S', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharSBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharSBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/s-1")

 })  

 it.skip('check for letter of T', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharTBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharTBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/t-1")

 })  

 it.skip('check for letter of U', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharUBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharUBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/u-1")

 })  

 it.skip('check for letter of V', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharVBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharVBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/v-1")

 })  

 it.skip('check for letter of W', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharWBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharWBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/w-1")

 })  

 it.skip('check for letter of X', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
  CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharXBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharXBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/x-1")

 })
 
 it.skip('check for letter of Y', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getcharYBuuton().should("be.visible")
      CommunityLeaderBoardPage.getcharYBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/y-1")

 })  

 it.skip('check for letter of Z', ()=>{

    // charachters frame
    CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
    CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")

    CommunityLeaderBoardPage.getcharZBuuton().should("be.visible")
    CommunityLeaderBoardPage.getcharZBuuton().click();
    cy.url().should("include","https://www.reddit.com/subreddits/z-1")

 })  
 it.skip('check for letter of #', ()=>{

    // charachters frame
      CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000})
      CommunityLeaderBoardPage.getCharachtersWindow().should("be.visible")
  
      CommunityLeaderBoardPage.getchar0Buuton().should("be.visible")
      CommunityLeaderBoardPage.getchar0Buuton().click();
    
      cy.url().should("include","https://www.reddit.com/subreddits/0-1")

 })

it('check for button of toggle theme', ()=>{

   CommunityLeaderBoardPage.getTogglethemeBuuton().should("be.visible")
   CommunityLeaderBoardPage.getTogglethemeBuuton().trigger("mouseover").trigger("mouseover").click();

 })  
 it('check for button of Back to Top', ()=>{

  CommunityLeaderBoardPage.getBackToTopBuuton().scrollIntoView({duration:2000})  
  CommunityLeaderBoardPage.getBackToTopBuuton().should("be.visible") 
  CommunityLeaderBoardPage.getBackToTopBuuton().trigger("mouseover").trigger("mouseover").click();

})  
})

