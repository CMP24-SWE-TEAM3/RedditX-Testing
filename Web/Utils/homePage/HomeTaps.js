import {HomePage} from "../../support/page-objects";
//const HomePage = new HomePage();

module.exports.buttonCheckAndClickHomePage=(type)=>{
    switch(type){
        case "Popular":
            HomePage.getpopularButton().should("be.visible").trigger("mouseover").click();    
            break;
        case "Coin":
            HomePage.getcoinButton().should("be.visible").trigger("mouseover").click()
            break;
        case "Moderator":
            HomePage.getnothingButton().should("be.visible").trigger("mouseover").click()
            break;
        case "Chat":
            HomePage.getchatButton().should("be.visible").trigger("mouseover").click()
            break;
        case "Notificationions":
            HomePage.getnotificationionsButton().should("be.visible").trigger("mouseover").click()
            break;
        case "plusofcreatepostButton":
            HomePage.getplusofcreatepostButton().should("be.visible").trigger("mouseover").click()
            break;
        case "Advertise":
            HomePage.getadvertiseButton().should("be.visible").trigger("mouseover").click()
            break;
        case "Best":
            HomePage.getBestButton().should("be.visible").trigger("mouseover").click()
        case "Hot":
            HomePage.getHotButton().should("be.visible").trigger("mouseover").click()
            break;
        case "New":
            HomePage.getNewButton().should("be.visible").trigger("mouseover").click()
            break;
        case "Top":
            HomePage.getTopButton().should("be.visible").trigger("mouseover").click()
            break;
        case "TodayPosts":
            HomePage.getTodayiconbutton().should("be.visible").trigger("mouseover").realClick()
            break;
        case "WeekPosts":
            HomePage.getThisWeekiconbutton().should("be.visible").trigger("mouseover").realClick()
            break;
        case "MonthPosts":
            HomePage.getThisMonthiconbutton().should("be.visible").trigger("mouseover").realClick()
            break;
        case "YearPosts":
            HomePage.getThisYeariconbutton().should("be.visible").trigger("mouseover").realClick()
            break;
        case "AllTimePosts":
            HomePage.getAlltimeiconbutton().should("be.visible").trigger("mouseover").realClick()
            break;
        case "... Event":
            HomePage.getthreepointsButton().should("be.visible").trigger("mouseover").click()
            break;
        case "BackToTop":
            HomePage.getbacktotopButton().scrollIntoView({duration:5000}).should("be.visible").click()
            break;
        case "ToggleTheme":
            HomePage.gettogglethemeButton().should("be.visible").trigger("mouseover").click()
            break;
        case "RedditIcon":
            HomePage.getredditiconButton().should("be.visible").trigger("mouseover").click()
            break;
        case "createpostButton":
            HomePage.getcreatepostButton().scrollIntoView({duration:5000}).should("be.visible").click({force: true})
            break;    
        case "AllCommunities":
            HomePage.getviewallcommunitiesButton().should("be.visible").trigger("mouseover").click()
            break;
        case "USER_DROPDOWN":
            HomePage.getUSER_DROPDOWNWindow().should("be.visible").trigger("mouseover").click()
            break;
        case "HelpCenter":
            HomePage.getHelpCenterButton().scrollIntoView({duration:3000}).should("be.visible").trigger("mouseover").click()
            break;
        case "TermsandPoliciesCenter":
            HomePage.getTermsandPoliciesCenterButton().scrollIntoView({duration:4000}).should("be.visible").trigger("mouseover").click()
            break;
        case "UserAgreement":
            HomePage.getUserAgreementButton().should("be.visible").trigger("mouseover").click()
            break;
        case "PrivacyPolicy":
            HomePage.getPrivacyPolicyButton().should("be.visible").trigger("mouseover").click()
            break;
        case "ContentPolicy":
            HomePage.getContentPolicyButton().should("be.visible").trigger("mouseover").click()
            break;
        case "ModeratorCodeOfConduc":
            HomePage.getModeratorCodeOfConductButton().should("be.visible").trigger("mouseover").click()
            break;
        case "AdvertiseOnReddit":
            HomePage.getAdvertiseOnRedditButton().should("be.visible").trigger("mouseover").click()
            break;
        case "LoginorSignup":
            HomePage.getLoginorSignupButton().should("be.visible").trigger("mouseover").click()
            break;
        case "Searchcontiner":
            HomePage.getSearchcontiner().should("be.visible").trigger("mouseover").click()
            break;
        case "myprofileicon":
            HomePage.getmyprofileicon().should("be.visible").click({force: true} )
            break;
        case "createmediapost":
            HomePage.getcreatemediaposticon().should("be.visible").trigger("mouseover").click()
            break;
        case "createwrittenpost":
            HomePage.getcreatewrittenposticon().should("be.visible").trigger("mouseover").click()
            break;
        case "Postcontiner":
            HomePage.getPostcontiner().should("be.visible").trigger("mouseover").click()
            break;
        case "OnlineStatus":
            HomePage.getOnlineStatusButton().should("be.visible").trigger("mouseover").click()
            break;
        case "DarkMode":
            HomePage.getDarkModeButton().should("be.visible").trigger("mouseover").click()
            break;
        case "LogOut":
            HomePage.getLogOutButton().scrollIntoView({duration:5000}).should("be.visible").realClick()
        case "SignUpOrLogin":
            HomePage.getSignUpOrLoginButton().scrollIntoView({duration:5000}).should("be.visible").realClick()
            break;      
    }
}

