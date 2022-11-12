

import HomePage from "../support/page-objects/home-page";
describe('Home Page', () => {
    beforeEach('login Home page',()=>{

        cy.visit("http://localhost:3000/");
       // HomePage.getloginButton().should("be.visible")
       // HomePage.getloginButton().trigger('mouseover').click();
    })
  
     
 it.skip('check visibilty of above right drop down list & click to open it   ', ()=>{

    HomePage.getaboverightdropdownmenuButton().should("be.visible")
    HomePage.getaboverightdropdownmenuButton().trigger("mouseover").click();
    // it should open the coin drop list of the current user
})    

it.skip('Hot Event', ()=>{
    //check visible & mouseover click
    HomePage.getHotButton().should("be.visible")
    HomePage.getHotButton().trigger('mouseover').click();
   // it must came with hot postes at the top

})

it.skip('New Event', ()=>{

//check visible & mouseover click
   
 HomePage.getNewButton().should("be.visible")
 HomePage.getNewButton().trigger('mouseover').click(); 
// it must came with new postes at the top

})

it.skip('TOP Event', ()=>{

//check visible & mouseover click

HomePage.getTopButton().should("be.visible")
HomePage.getTopButton().trigger('mouseover').click();
// it must came with TOP postes at the top
})

it.skip('check Posts of Today', ()=>{
    //check visible & mouseover click
 
        HomePage.getTopButton().should("be.visible")
        HomePage.getTopButton().trigger('mouseover').click();
 
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible")
   HomePage.getTodayiconbutton().should("be.visible")
   HomePage.getTodayiconbutton().trigger("mouseover").click()
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("have.text","Today")
})

it.skip('check Posts of This week', ()=>{

    //check visible & mouseover click
   HomePage.getTopButton().should("be.visible")
   HomePage.getTopButton().trigger('mouseover').click();
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible")
   HomePage.getThisWeekiconbutton().should("be.visible")
   HomePage.getThisWeekiconbutton().trigger("mouseover").click()
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("have.text","This Week")

})

it.skip('check Posts of This Month', ()=>{

    //check visible & mouseover click
        HomePage.getTopButton().should("be.visible")
        HomePage.getTopButton().trigger('mouseover').click();
 
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible")
   HomePage.getThisMonthiconbutton().should("be.visible")
   HomePage.getThisMonthiconbutton().trigger("mouseover").click()
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("have.text","This Month")

})

it.skip('check Posts of this year', ()=>{

    //check visible & mouseover click
 
        HomePage.getTopButton().should("be.visible")
        HomePage.getTopButton().trigger('mouseover').click();
 
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible")
   HomePage.getThisYeariconbutton().should("be.visible")
   HomePage.getThisYeariconbutton().trigger("mouseover").click()
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("have.text","This Year")
})

it.skip('check Posts of All time', ()=>{

    //check visible & mouseover click
 
        HomePage.getTopButton().should("be.visible")
        HomePage.getTopButton().trigger('mouseover').click();
 
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible")
   HomePage.getAlltimeiconbutton().should("be.visible")
   HomePage.getAlltimeiconbutton().trigger("mouseover").click()
   HomePage.geticonoftimebuttonthatshownfromTopicon().should("have.text","All Time")
})


it.skip('... Event', ()=>{

//check visible & mouseover click
HomePage.getthreepointsButton().should("be.visible")
HomePage.getthreepointsButton().trigger('mouseover').click();
// it must open and drop list have icon called Rising

})
//////////////////////////////////////////////////////////////////////////////////////////////////scripts not tested
    
    it('check search container ', ()=>{

            //check visible & mouseover click    
            HomePage.getSearchcontiner().should("be.visible")
            HomePage.getSearchcontiner().trigger('mouseover').click();
        // it must open window 
       // cy.get("#SearchDropdownContent").should("be.visible")  
     })

it('check visibilty of USER_DROPDOWN , click to open window  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();
    
}) 

it.skip('check visibilty of (help center) of USER_DROPDOWN , click to open  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    HomePage.getHelpCenterButton().should("be.visible")
    HomePage.getHelpCenterButton().trigger('mouseover').click();

}) 

it.skip('check visibilty of terms & policies of USER_DROPDOWN , click to show another list  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    HomePage.getTermsandPoliciesCenterButton().should("be.visible")
    HomePage.getTermsandPoliciesCenterButton().trigger('mouseover').click();

}) 

it.skip('check visibilty of terms & policies & its frist item(user argument)  of USER_DROPDOWN , click to show another list  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    HomePage.getTermsandPoliciesCenterButton().should("be.visible")
    HomePage.getTermsandPoliciesCenterButton().trigger('mouseover').click();

   HomePage.getUserAgreementButton().should("be.visible")
   HomePage.getUserAgreementButton().trigger('mouseover').click();

    
}) 

it.skip('check visibilty of terms & policies & its second item (private policy) of USER_DROPDOWN , click to show another list  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    
    HomePage.getTermsandPoliciesCenterButton().should("be.visible")
    HomePage.getTermsandPoliciesCenterButton().trigger('mouseover').click();

    HomePage.getPrivacyPolicyButton().should("be.visible")
    HomePage.getPrivacyPolicyButton().trigger('mouseover').click();

    
}) 

it.skip('check visibilty of terms & policies & its third item (contect policy) of USER_DROPDOWN , click to show another list  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    HomePage.getTermsandPoliciesCenterButton().should("be.visible")
    HomePage.getTermsandPoliciesCenterButton().trigger('mouseover').click();

    HomePage.getContentPolicyButton().should("be.visible")
    HomePage.getContentPolicyButton().trigger('mouseover').click();

    
}) 

it.skip('check visibilty of terms & policies & its fourth item (moderator code of conduct) of USER_DROPDOWN , click to show another list  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    HomePage.getTermsandPoliciesCenterButton().should("be.visible")
    HomePage.getTermsandPoliciesCenterButton().trigger('mouseover').click();

    HomePage.getModeratorCodeOfConductButton().should("be.visible")
    HomePage.getModeratorCodeOfConductButton().trigger('mouseover').click();

}) 



it.skip('check visibilty of advetise on reddit of USER_DROPDOWN , click to show another list  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    HomePage.getAdvertiseOnRedditButton().should("be.visible")
    HomePage.getAdvertiseOnRedditButton().trigger('mouseover').click();

}) 

it.skip('check visibilty of sign up& login  of USER_DROPDOWN , click to show another list  ', ()=>{

    HomePage.getUSER_DROPDOWNWindow().should("be.visible")
    HomePage.getUSER_DROPDOWNWindow().trigger('mouseover').click();

    HomePage.getLoginorSignupButton().should("be.visible")
    HomePage.getLoginorSignupButton().trigger('mouseover').click();
        //check visibilty of login window
   // cy.get("body > div > main > div.OnboardingStep.Onboarding__step.mode-auth").should("be.visible")
}) 

it.skip('chosing posts of certain country Event', ()=>{

    //check visible & mouseover click
    HomePage.getchosingCountryButton().should("be.visible")
    HomePage.getchosingCountryButton().should("have.text","Everywhere")
    HomePage.getchosingCountryButton().click()
    
    //cy.get('#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > div.sc-cCjUiG.ccihXh.show.dropdown > div').should("be.visible")   
    //cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > div.sc-cCjUiG.ccihXh.show.dropdown > div > a:nth-child(56)").scrollIntoView({duration:4000})
    //cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > div.sc-cCjUiG.ccihXh.show.dropdown > div > a:nth-child(56)").should("be.visible") 
    //cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > div.sc-cCjUiG.ccihXh.show.dropdown > div > a:nth-child(56)").trigger('mouseover').click();

// it must with posts of this country but shreef didn't handle that action yet
//cy.get('#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > div.sc-cCjUiG.ccihXh.dropdown > button').should("have.text","Egypt")   // as i select Egypt
})
it.skip('check visibilty of Sign up button click to open sign up page  ', ()=>{
                  
    HomePage.getsingupButton().should("be.visible")
    HomePage.getsingupButton().trigger('mouseover').click();
    
    // it should open the page of the Sign Up

    })
    it.skip('check visibilty of Login button click to open login page  ', ()=>{

        HomePage.getloginButton().should("be.visible")
        HomePage.getloginButton().trigger('mouseover').click();
        // it should open the Homepage of the current user
}) 
it.skip('check visibilty of Join Reddit Button , click to open Sign UP window  ', ()=>{

    HomePage.getJoinRedditButtonButton().should("be.visible")
    HomePage.getJoinRedditButtonButton().trigger('mouseover').click();
    HomePage.getSignUpWindow().should("be.visible")
    
}) 
})


