class HomePage {
    // wait to web team
    getHotButton() {
      return cy.get('#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > div:nth-child(1) > button');
    }
  
    getNewButton() {
      return cy.get('#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > button.sc-jcMfQk.kckAMM');
    }
  
    getTopButton() {
      return cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > button.sc-cabOPr.iQNGsm");
    }
  
    getthreepointsButton() {
      return cy.get('#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > button.sc-iTFTee.cdqdhO');
    }
  
    getchosingCountryButton() {
      return cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > div.sc-gYbzsP.feiPaP > div.sc-cCjUiG.ccihXh.dropdown > button");
    }
  
    getbacktotopButton() {
      return cy.get("#back-to-top-button");
    }
  
    gettogglethemeButton() {
      return cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > div > button");
    }
  
    getredditiconButton() {
      return cy.get("#");
    }
  
    getcreatepostButton() {
      return cy.get("#create-post-button");
    }
    
    getcreatecommunityButton() {
      return cy.get("#create-community-button");
    }
  
    getviewallcommunitiesButton() {
      return cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > aside > div > div.sc-ilhmMj.bmsQPN > button");
    }
  
    getspacifictypeofcommunitiesButton() {
      //gaming
      return cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > aside > div > div.sc-ilhmMj.bmsQPN > div.row-but > button:nth-child(2)");
    }
  ////////////////////////////////////////////////////////
    gettableofcommunitiesButton() {
      return cy.get("#root > div > header > div > div.sc-eDvSVe.bkwvJc > aside > div > div.sc-ilhmMj.bmsQPN");
    }
  
    getsingupButton() {
      return cy.get("#root > div > header > header > div.logged-out > button.sc-bBABsx.bmRDHn.btn.btn-outline-primary.rounded-pill.h-4");
    }
  
    getloginButton() {
      return cy.get("#root > div > header > header > div.logged-out > button.sc-iveFHk.qYlbu.btn.btn-outline-primary.rounded-pill.h-4");
    }
  
    getaboverightdropdownmenuButton() {
      return cy.get("#right-drop-down");
    }
  ///////////////////////////
    getpopularButton() {
      return cy.get("#root > div > header > header > button:nth-child(2)");
    }
  
    getcoinButton() {
      return cy.get("#root > div > header > header > button:nth-child(3)");
    }
  
    getnothingButton() {
      return cy.get("#moderator-button");
    }
  
    getchatButton() {
      return cy.get("#root > div > header > header > button:nth-child(6)");
    }
  
    getnotificationionsButton() {
      return cy.get("#notification-box");
    }
  
    getplusofcreatepostButton() {
      return cy.get("#root > div > header > header > button:nth-child(8)");
    }
  
    getadvertiseButton() {
      return cy.get("#root > div > header > header > button.sc-hBxehG.guZPwN");
    }

    getJoinRedditButtonButton() {
      return cy.get("# get the id of Join Reddit Button");
    }

    getSignUpWindow() {
      return cy.get("# get the Sign Up window");
    }
    getLoginWindow() {
      return cy.get("# get id the login window");
    }

    getUSER_DROPDOWNWindow() {
      return cy.get("#right-drop-down");
    }

    getHelpCenterButton() {
      return cy.get("#get the id of the Help Center Point");
    }
    getTermsandPoliciesCenterButton() {
      return cy.get("#get the id of the TermsandPolicies Point");
    }
    getUserAgreementButton() {
      return cy.get("#get the id of the User Agreement Point");
    }
    getPrivacyPolicyButton() {
      return cy.get("#get the id of the PrivacyPolicy Point");
    }
    getContentPolicyButton() {
      return cy.get("#get the id of the content policy Point");
    }
    getModeratorCodeOfConductButton() {
      return cy.get("#get the id of the ModeratorCodeOfConduct Point");
    }
    getAdvertiseOnRedditButton() {
      return cy.get("#get the id of the AdvertiseOnReddit Point");
    }
    getLoginorSignupButton() {
      return cy.get("#get the id of the LoginorSignup Point");
    }
    getSearchcontiner() {
      return cy.get("#search-input");
    }
    getcreatemediaposticon() {
      return cy.get("#create-img-post");
    }
    getcreatewrittenposticon() {
      return cy.get("#create-link-post");
    }
    getmyprofileicon() {
      return cy.get("#get the id of the profile icon");
    }

    getPostcontiner() {
      return cy.get("#create-post-container");
    }

    getHOMEiconbutton() {
      return cy.get("#get the id of the HOMe icon");
    }
    getopenwindowofHome() {
      return cy.get("#get the id of openwindowofHome");
    }

    getButtonthatremoveHomeWindowtoleft() {
      return cy.get("#get ButtonthatremoveHomeWindowtoleft");
    }

    getopenedLeftwindowofHome() {
      return cy.get("#get the id of opened left windowofHome");
    }

    getExitbuttonoftheleftwindow(){
      return cy.get("#get the id Exitbuttonoftheleftwindow");
    }
    
    geticonoftimebuttonthatshownfromTopicon() {
      return cy.get("#get the id of the iconoftimebuttonthatshownfromTopicon");
    }

    getTodayiconbutton() {
      return cy.get("#get the id of getTodayiconbutton icon");
    }
    getThisWeekiconbutton() {
      return cy.get("#get the id of getthisweekiconbutton icon");
    }
    getThisMonthiconbutton() {
      return cy.get("#get the id of getThismonthiconbutton icon");
    }
    getThisYeariconbutton() {
      return cy.get("#get the id of getThisyeariconbutton icon");
    }
    getAlltimeiconbutton() {
      return cy.get("#get the id of getalltimeiconbutton icon");
    }
    /////creating community

    getWindowOfCreatingCommunity() {
      return cy.get("#get the id of WindowOfCreatingCommunity");
    }

    getContainernameofCommunity() {
      return cy.get("#text-input");
    }

    getcheckboxOfPublic() {
      return cy.get("flexRadioDisabled1");
    }

    getcheckboxOfPrivate() {
      return cy.get("flexRadioCheckedDisabled3");
    }

    getcheckboxOfRestricted() {
      return cy.get("#flexRadioCheckedDisabled2");
    }

    getcheckboxOfAdultContent() {
      return cy.get("#checkbox");
    }
    getCancleButtonfromCreatingcomunity() {
      return cy.get("#close-but");
    }

    getExitButtonfromCreatingcomunity() {
      return cy.get("#btn-close");
    }

    getButtonofCreatingcomunity() {
      return cy.get("#create-community-form");
    }



    
    





    

    



  }
  
  export default new HomePage();
  