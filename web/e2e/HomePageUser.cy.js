
import HomePage from "../support/page-objects/home-page";
describe('Home Page', () => {
    beforeEach('login Home page',()=>{
        cy.visit("http://localhost:3000/"); 
    })

    it.skip('check visibilty popular button click to open popular page  ', ()=>{

        HomePage.getpopularButton().should("be.visible")
        HomePage.getpopularButton().trigger("mouseover").click();
    
        // it should open the popular of the current user
    })                          
    it.skip('check visibilty coin button click to open coin page  ', ()=>{
    
        HomePage.getcoinButton().should("be.visible")
        HomePage.getcoinButton().trigger("mouseover").click();
    
        // it should open the coin drop list of the current user
        //cy.get("body > div:nth-child(101) > div > div._310fLrnWkOCPEaTfEufxkJ").should("be.visible")
    })    
    
    it('check visibilty moderation button click to open moderator page  ', ()=>{
    
        HomePage.getnothingButton().should("be.visible")
        HomePage.getnothingButton().trigger("mouseover").click();
    
        // it should open the no.. drop list of the current user
    })    
    
    it.skip('check visibilty chat button click to open chat page  ', ()=>{
    
        HomePage.getchatButton().should("be.visible")
        HomePage.getchatButton().trigger("mouseover").click();
    
        // it should open the chat drop list of the current user
        //cy.get(" #tooltip-container").should("be.visible")
    
    })    
    it('check visibilty notifications button click to open notifications page  ', ()=>{
        HomePage.getnotificationionsButton().should("be.visible")
        HomePage.getnotificationionsButton().trigger("mouseover").click();
    
        // it should open the notifications drop list of the current user
    })    
    
    it.skip('check visibilty pluscreatepost icon button click to open createpost page  ', ()=>{
        HomePage.getplusofcreatepostButton().should("be.visible")
        HomePage.getplusofcreatepostButton().trigger("mouseover").click();
        // it should open the createpost drop list of the current user
    })    
    
    it.skip('check visibilty advertise button click to open advertise page  ', ()=>{
        HomePage.getadvertiseButton().should("be.visible")
        HomePage.getadvertiseButton().trigger("mouseover").click();
        // it should open the advertise drop list of the current user
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

////////////////////////////////////////////////////////////////////

it('scroll down to find buttom of  back to top ', ()=>{
  
    HomePage.getbacktotopButton().scrollIntoView({duration:10000})
    HomePage.getbacktotopButton().should("be.visible")
    HomePage.getbacktotopButton().click({force: true});
})

it.skip('check toggle theme icon ', ()=>{
   HomePage.gettogglethemeButton().should("be.visible")
   HomePage.gettogglethemeButton().trigger('mouseover').click();
    })


it.skip('check reddit icon that refer to the home page of the site icon ', ()=>{

       HomePage.getredditiconButton().should("be.visible")
       HomePage.getredditiconButton().click(); 
        })  
it('check icon that refer to the page that create post ', ()=>{

            HomePage.getcreatepostButton().scrollIntoView({duration:3000})
            HomePage.getcreatepostButton().should("be.visible")
            HomePage.getcreatepostButton().click();    
         })  

it.skip('check icon that refer to the page that create community ', ()=>{

                HomePage.getcreatecommunityButton().scrollIntoView({duration:3000})
                HomePage.getcreatecommunityButton().should("be.visible")
                HomePage.getcreatecommunityButton().click();
                
                //// add valid data then press create community 
                // you have to test many approach when shreef finish 
                HomePage.getWindowOfCreatingCommunity().should("be.visible")
                HomePage.getContainernameofCommunity().should("be.visible")
                HomePage.getContainernameofCommunity().type("akdhc")
                HomePage.getcheckboxOfPublic().should("be.visible")
                HomePage.getcheckboxOfPrivate().should("be.visible")
                HomePage.getcheckboxOfRestricted().should("be.visible")
                HomePage.getcheckboxOfAdultContent().should("be.visible")
                HomePage.getExitButtonfromCreatingcomunity().should("be.visible")
                HomePage.getCancleButtonfromCreatingcomunity().should("be.visible")
                HomePage.getButtonofCreatingcomunity().should("be.visible")

                // check one of them
                //HomePage.getcheckboxOfRestricted.check().should("be.checked")
                // check addult container
                //HomePage.getcheckboxOfAdultContent.check().should("be.checked")

                HomePage.getButtonofCreatingcomunity().trigger('mouseover').click();   
            })  
           

it.skip('check icon that refer to the page that have all communities (veiw all button) ', ()=>{

                HomePage.getviewallcommunitiesButton().should("be.visible")
                HomePage.getviewallcommunitiesButton().trigger('mouseover').click();
                // it should open page of all communitie
                })  

it.skip('check icons that refer to specific type of communities that will be seen in the community list ', ()=>{

                    // top ,, gaming ,, sport ,,news , ......... 
                    // for ex gaming
                   HomePage.getspacifictypeofcommunitiesButton().should("be.visible")
                   HomePage.getspacifictypeofcommunitiesButton().trigger('mouseover').click();
    
                    // it should change the list of showed communities in the home page =========> you have to test this when it's finished 
                    })  


///////////////////////////////////////////////////////////////////////////////////// scripts from the site 

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
    cy.get("body > div > main > div.OnboardingStep.Onboarding__step.mode-auth").should("be.visible")
}) 


it('check visibilty search continer , click to show another list  ', ()=>{

    HomePage.getSearchcontiner().should("be.visible")
    HomePage.getSearchcontiner().trigger('mouseover').click();

}) 


//////////////////////////////////////////////////////////////////////////////////////////////////scripts not tested
it.skip('check icon(button) of opening my profile page ', ()=>{

//check visible & mouseover click    
  HomePage.getmyprofileicon().should("be.visible")
  HomePage.getmyprofileicon().trigger('mouseover').click();
    // it must open link of creating  post

   // cy.url().should("include","https://www.reddit.com/user/Smooth-Help5195")
})

it('open page of creating media(image,vedio) post ', ()=>{

    //check visible & mouseover click
    HomePage.getcreatemediaposticon().should("be.visible")
    HomePage.getcreatemediaposticon().trigger('mouseover').click();
    // it must open link of creating media post
    //cy.url().should("include","https://www.reddit.com/submit?media=true")
    
    })
it('open page of creating writing post ', ()=>{

        //check visible & mouseover click
        HomePage.getcreatewrittenposticon().should("be.visible")
        HomePage.getcreatewrittenposticon().trigger('mouseover').click();
      
        // it must open link of creating writen post

        //cy.url().should("include","https://www.reddit.com/submit?url")
        })

       
    it('check search container ', ()=>{

            //check visible & mouseover click
            
            HomePage.getSearchcontiner().should("be.visible")
            HomePage.getSearchcontiner().trigger('mouseover').click();
           // it must open window 
           //cy.get("#SearchDropdownContent").should("be.visible")  
     })
     it('check create post container ', ()=>{
        //check visible & mouseover click
        HomePage.getPostcontiner().should("be.visible")
        HomePage.getPostcontiner().trigger('mouseover').click();
        // it must open link of creating  post
       // cy.url().should("include","https://www.reddit.com/submit")
         
 })
 it.skip('check icon(button) of opening my profile page ', ()=>{

    //check visible & mouseover click
  HomePage.getmyprofileicon().should("be.visible")
  HomePage.getmyprofileicon().trigger('mouseover').click();
    // it must open link of creating  post
    //cy.url().should("include","https://www.reddit.com/user/Smooth-Help5195")
     
})

it.skip('check icon(button) of HOME ', ()=>{

    //check visible & mouseover click
    
    HomePage.getHOMEiconbutton().should("be.visible")
    HomePage.getHOMEiconbutton().trigger('mouseover').click();

    // check vsiblity of the opening window
    HomePage.getopenwindowofHome().should("be.visible")
     
    // check vsiblity of the button that move that window to the left of page and click on it
    HomePage.getButtonthatremoveHomeWindowtoleft().should("be.visible")
    HomePage.getButtonthatremoveHomeWindowtoleft().trigger('mouseover').click();


    // the window should be moved to the left 
    HomePage.getopenedLeftwindowofHome().should("be.visible")
    // the window should be disapear from the middle of the page
    HomePage.getopenwindowofHome().should.should("not.be.visible")

    // closing that window
    HomePage.getExitbuttonoftheleftwindow().should("be.visible")
    HomePage.getExitbuttonoftheleftwindow().trigger("mouseover").click()

})
})


