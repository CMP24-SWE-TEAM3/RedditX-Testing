import CommunityLeaderBoardPage from "../../support/page-objects/community-learderboard";
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"
describe('community leader board page', () => {

beforeEach('community leader board', ()=>{
        cy.visit("https://dev.redditswe22.tech/login")
        LoginWithValidEmail()
        cy.wait(3000)
        CommunityLeaderBoardPage.getViewAllCommunities().should("be.visible").click({force: true});
})

//// check titles
it('check for title of h1', ()=>{

CommunityLeaderBoardPage.getContainerHavingthemainTitle().should("be.visible")
CommunityLeaderBoardPage.getContainerHavingthemainTitle().should("have.text","Today's Top Growing Communities")

})  

it('check for secondary title of span', ()=>{

CommunityLeaderBoardPage.getContainerHavingtheSecondarytitleTitle().should("be.visible").scrollIntoView()
CommunityLeaderBoardPage.getContainerHavingtheSecondarytitleTitle().should("have.text","Browse Reddit's top growing communities. Find the top communities in your favorite category.")

})  


it('check for button of near you communties', ()=>{

    CommunityLeaderBoardPage.getNearYOuBuuton().should("be.visible").trigger("mouseover").click();
    CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Local Communities")

  })  

  it('check for button of sports communties', ()=>{
  CommunityLeaderBoardPage.getSportsBuuton().should("be.visible").trigger("mouseover").click();
  CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Sports Communities")
  })
  it('check for button of sports communties to have Communities belongs to Sport ', ()=>{
    CommunityLeaderBoardPage.getSportsBuuton().should("be.visible").trigger("mouseover").click();
    CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Sports Communities")
    CommunityLeaderBoardPage.getCommunitiyoneFromWindow().should("include.text","Sports")
  })
  
  it('check for button of gamming communties', ()=>{
  CommunityLeaderBoardPage.getGamingBuuton().should("be.visible").trigger("mouseover").click();
  CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Gaming Communities")
  })  
  it('check for button of Gamming communties to have Communities belongs to Gamming ', ()=>{
    CommunityLeaderBoardPage.getGamingBuuton().should("be.visible").trigger("mouseover").click();
    CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Gaming Communities")
    CommunityLeaderBoardPage.getCommunitiyoneFromWindow().should("include.text","Stream")
  })

  it('check for button of news communties', ()=>{

  CommunityLeaderBoardPage.getNewsBuuton().should("be.visible").trigger("mouseover").click();
  CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top News Communities")
  }) 
  it('check for button of New communties to have Communities belongs to news ', ()=>{
    CommunityLeaderBoardPage.getNewsBuuton().should("be.visible").trigger("mouseover").click();
    CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top News Communities")
    CommunityLeaderBoardPage.getCommunitiyoneFromWindow().should("include.text","WorldNews")
  })

  it('check for button of TV communties', ()=>{

  CommunityLeaderBoardPage.getTVBuuton().should("be.visible").trigger("mouseover").click();
  CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Tv Communities")
  })
  it('check for button of Tv communties to have Communities belongs to Tv ', ()=>{
    CommunityLeaderBoardPage.getTVBuuton().should("be.visible").trigger("mouseover").click();
    CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Tv Communities")
    CommunityLeaderBoardPage.getCommunitiyoneFromWindow().should("include.text","MArvelemes")
  })
//////////////////////
  it('check for button of veiw more', ()=>{
    CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible").trigger("mouseover").click()
  })  

///////////////////


it('check for button of Art communties ', ()=>{
CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible").trigger("mouseover").click()
CommunityLeaderBoardPage.getArtandDesignBuuton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click();
CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Art Communities")
}) 
it('check for button of Art communties to have Communities belongs to Art & Design', ()=>{
  CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible").trigger("mouseover").click()
  CommunityLeaderBoardPage.getArtandDesignBuuton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click();
  CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Art Communities")
  CommunityLeaderBoardPage.getCommunitiyoneFromWindow().should("include.text","Art")
  })
it('check for button of Books & writing communties ', ()=>{
  CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible").trigger("mouseover").click()
  CommunityLeaderBoardPage.getBooksandWritingBuuton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click();
  CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Books Communities")
  }) 
  it('check for button of Books communties to have Communities belongs to Books', ()=>{
    CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible").trigger("mouseover").click()
    CommunityLeaderBoardPage.getBooksandWritingBuuton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click();
    CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Books Communities")
    CommunityLeaderBoardPage.getCommunitiyoneFromWindow().should("include.text","Books")
    })
it('check for button of Fashion & writing communties ', ()=>{
  CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible").trigger("mouseover").click()
  CommunityLeaderBoardPage.getFashionBuuton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click();
  CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Fashion Communities")
  }) 
  it('check for button of Fashion communties to have Communities belongs to Fashion', ()=>{
    CommunityLeaderBoardPage.getShowMoreBuuton().should("be.visible").trigger("mouseover").click()
    CommunityLeaderBoardPage.getFashionBuuton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click();
    CommunityLeaderBoardPage.gettTitleOfPage().should("have.text"," Today's Top Fashion Communities")
    CommunityLeaderBoardPage.getCommunitiyoneFromWindow().should("include.text","Fashion")
    })


// check show less button

it('check for button of show less', ()=>{
CommunityLeaderBoardPage.getShowlessBuuton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click();
})  


/////////////////////////////////////////////////////////////// check for Browse Communities A-Z

it('check for letter of A', ()=>{
// charachters frame
CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
CommunityLeaderBoardPage.getcharABuuton().should("be.visible").click();
cy.url().should("include","https://dev.redditswe22.tech/index-page/A")

})
it('check for letter of A has Communities Start with that letter', ()=>{
  // charachters frame
  CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
  CommunityLeaderBoardPage.getcharABuuton().should("be.visible").click();
  CommunityLeaderBoardPage.getFirstCommunity().should("be.visible").should("include.text","A")
  
})    

it('check for letter of B', ()=>{
// charachters frame
CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
CommunityLeaderBoardPage.getcharBBuuton().should("be.visible").click();
cy.url().should("include","https://dev.redditswe22.tech/index-page/B")
})
it('check for letter of B has Communities Start with that letter', ()=>{
  // charachters frame
  CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
  CommunityLeaderBoardPage.getcharBBuuton().should("be.visible").click();
  CommunityLeaderBoardPage.getFirstCommunity().should("be.visible").should("include.text","B")
  
})      

it('check for letter of C', ()=>{

  CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
  CommunityLeaderBoardPage.getcharCBuuton().should("be.visible").click();
  cy.url().should("include","https://dev.redditswe22.tech/index-page/C")
})
it('check for letter of C has Communities Start with that letter', ()=>{
  // charachters frame
  CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
  CommunityLeaderBoardPage.getcharCBuuton().should("be.visible").click();
  CommunityLeaderBoardPage.getFirstCommunity().should("be.visible").should("include.text","C")
  
})      

it('check for letter of D', ()=>{

// charachters frame
CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
CommunityLeaderBoardPage.getcharDBuuton().should("be.visible").click();
cy.url().should("include","https://dev.redditswe22.tech/index-page/D")
})
it('check for letter of D has Communities Start with that letter', ()=>{
  // charachters frame
  CommunityLeaderBoardPage.getCharachtersWindow().scrollIntoView({duration:2000}).should("be.visible")
  CommunityLeaderBoardPage.getcharDBuuton().should("be.visible").click();
  CommunityLeaderBoardPage.getFirstCommunity().should("be.visible").should("include.text","D")
  
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

it.skip('check for button of toggle theme', ()=>{

CommunityLeaderBoardPage.getTogglethemeBuuton().should("be.visible")
CommunityLeaderBoardPage.getTogglethemeBuuton().trigger("mouseover").trigger("mouseover").click();

})  
it('check for button of Back to Top', ()=>{

CommunityLeaderBoardPage.getBackToTopBuuton().scrollIntoView({duration:2000}).should("be.visible").trigger("mouseover").trigger("mouseover").click();  

})  


})

