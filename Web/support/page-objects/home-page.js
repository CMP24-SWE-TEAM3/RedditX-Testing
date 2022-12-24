class HomePage {
    // wait to web team
    getBestButton() {
      return cy.get('#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > a.sc-dzMyfW.bOdGrk');
    }
    getHotButton() {
      return cy.get('#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > a.sc-ecQICg.bGusjl');
    }
  
    getNewButton() {
      return cy.get('#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > a.sc-cFsRDD.jDSaUj');
    }
  
    getTopButton() {
      return cy.get(".sc-gRUFDF");
    }
  
    getthreepointsButton() {
      return cy.get('#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > button');
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
      return cy.get("#home-page");
    }
  
    getcreatepostButton() {
      return cy.get("#create-post-button");
    }
    
    getcreatecommunityButton() {
      return cy.get("#create-community-button");
    }
  
    getviewallcommunitiesButton() {
      return cy.get("#root > div > header > div > div.sc-jOPAHi.hiDIjH > aside > div > div.sc-hAPcZG.dpHntW > div.sc-hmpqzP.jcuDVF > button");
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
      return cy.get("#sign-up-button-from-HomePage");
    }
  
    getloginButton() {
      return cy.get("#login-button-from-HomePage");
    }
  
    getaboverightdropdownmenuButton() {
      return cy.get("#right-drop-down");
    }
  ///////////////////////////
    getpopularButton() {
      return cy.get("#basic-navbar-nav > a:nth-child(2) > div > button");
    }
  
    getcoinButton() {
      return cy.get("#basic-navbar-nav > div > a:nth-child(3)");
    }
  
    getnothingButton() {
      return cy.get("#basic-navbar-nav > a:nth-child(3)");
    }
  
    getchatButton() {
      return cy.get("#basic-navbar-nav > div > a:nth-child(6) > button");
    }
  
    getnotificationionsButton() {
      return cy.get("#notification-box");
    }
  
    getplusofcreatepostButton() {
      return cy.get("#basic-navbar-nav > a:nth-child(5) > button");
    }
  
    getadvertiseButton() {
      return cy.get("#basic-navbar-nav > a:nth-child(6) > button");
    }

    getJoinRedditButtonButton() {
      return cy.get("# get the id of Join Reddit Button");
    }

    getSignUpWindow() {
      return cy.get("#signUpModal");  
    }
    getSignUpWindowTitle() {
      return cy.get("#signUpContainerModal");  
    }
    getLoginWindow() {
      return cy.get("#login-modal");
    }
    getLoginWindowTitle() {
      return cy.get("#login-button-from-HomePage");
    }

    getUSER_DROPDOWNWindow() {
      return cy.get("#right-drop-down");
    }

    getHelpCenterButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > a:nth-child(16)");
    }
    getTermsandPoliciesCenterButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > div:nth-child(18) > div > h2 > button");
    }
    getUserAgreementButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > div:nth-child(18) > div > div > div > a:nth-child(1)");
    }
    getPrivacyPolicyButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > div:nth-child(18) > div > div > div > a:nth-child(2)");
    }
    getContentPolicyButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > div:nth-child(18) > div > div > div > a:nth-child(3)");
    }
    getModeratorCodeOfConductButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > div:nth-child(18) > div > div > div > a:nth-child(4)");
    }
    getAdvertiseOnRedditButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > a:nth-child(8)");
    }
    getLoginorSignupButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > a:nth-child(19)");
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
      return cy.get(".sc-cnGpdo");
    }

    getPostcontiner() {
      return cy.get("#create-post-container");
    }
////////////////////////////////////////////////////Home
    getHOMEiconbutton() {
      return cy.get("#root > nav > div > span.drop-caret.navbar-brand > div")
    }
    getopenwindowofHome() {
      return cy.get("#root > nav > div > span.drop-caret.navbar-brand > div > div");
    }

    getButtonthatremoveHomeWindowtoleft() {
      return cy.get("#side-bar-action");
    }

    getopenedLeftwindowofHome() {
      return cy.get("#left-sidebar > div");
    }

    getExitbuttonoftheleftwindow(){
      return cy.get(".btn-close");
    }
    ///////////////////////////////////////////////////
    geticonoftimebuttonthatshownfromTopicon() {
      return cy.get("#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > div");
    }

    getTodayiconbutton() {
      return cy.get("#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > div > div > button.active.dropdown-item");
    }
    getThisWeekiconbutton() {
      return cy.get("#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > div > div > button:nth-child(3)");
    }
    getThisMonthiconbutton() {
      return cy.get("#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > div > div > button:nth-child(4)");
    }
    getThisYeariconbutton() {
      return cy.get("#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > div > div > button:nth-child(5)");
    }
    getAlltimeiconbutton() {
      return cy.get("#root > div > header > div > div.sc-jOPAHi.hiDIjH > div > div.sc-kvTkCa.eMZTfw > div > div > button:nth-child(6)");
    }
    /////creating community

    getWindowOfCreatingCommunity() {
      return cy.get("#get the id of WindowOfCreatingCommunity");
    }

    getContainernameofCommunity() {
      return cy.get("#text-input");
    }

    getcheckboxOfPublic() {
      return cy.get("#public");
    }

    getcheckboxOfPrivate() {
      return cy.get("#restricted");
    }

    getcheckboxOfRestricted() {
      return cy.get("#private");
    }

    getcheckboxOfAdultContent() {
      return cy.get("#nsfw");
    }
    getCancleButtonfromCreatingcomunity() {
      return cy.get("#close-button");
    }

    getExitButtonfromCreatingcomunity() {
      return cy.get(".btn-close");
    }

    getButtonofCreatingcomunity() {
      return cy.get("#create-community-form");
    }


///// clear recently posts widnow

    getWindowofClearPosts() {
      return cy.get("#recent-post-container");
    }
    getClearButton() {
      return cy.get("#recent-post-button");
    }
    getOnlineStatusButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > div:nth-child(2) > a:nth-child(1)");
    }
    getDarkModeButton() {
      return cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > div:nth-child(5) > a:nth-child(2)");
    }
    getLogOutButton() {
      return cy.get("#basic-navbar-nav > div > a.nav-dropdown.nav-link > div > div > a:nth-child(19)");
    }
    getSignUpOrLoginButton() {
      return cy.get("#basic-navbar-nav > div > a.nav-dropdown.nav-link > div > div > a:nth-child(19) > span:nth-child(2)");
    }

    ///// reda 
    getLoginButton(){
      return cy.get("#login-button-from-HomePage");
    }
    getInputUsername(){
      return cy.get("#login-username");
    }
    getInputPassword(){
      return cy.get("#login-password");
    }
    getLoginButtonSubmit(){
      return cy.get("#login-modal  button").contains("Log In");
    }
    getSubmitButton(){
      return cy.get("#create-post-container");
    }
    getSearchField(){
      return cy.get("#search-input");
    }
  
    getUserDropdown(){
      return cy.get("#right-drop-down")
    }
    getExplore(){
      return cy.get(".dropdown-item")
    }
    getNotificationButton(){
      return cy.get("#notification-box");
    }
    getSeeAll(){
      return cy.get("footer>a[href='/new']").contains("See All");
    }
    getSearchFromSide(){
      return cy.get("#left-sidebar > div > div.sc-dpmiif.bOSJOh > input")
    }
    getFirstWindow(){
      return cy.get("#left-sidebar > div > div.sc-dpmiif.bOSJOh > ul > a:nth-child(1)");
    }
    
  }
  


  
  export default new HomePage();
  