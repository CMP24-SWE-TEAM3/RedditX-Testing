
import HomePage from "../../support/page-objects/home-page";
import {buttonCheckAndClickHomePage} from "../../Utils/HomePage/HomeTaps"
import {CreateCommunityHomePage} from "../../Utils/HomePage/CreateCommunity"
import {LoginWithValidEmail} from "../../Utils/FlairPage/FlairTab"


const email = "Mahmoud55@gmail.com"
const Password = 'Mahmoud123*#'
const Username='Mahmoud1234'

describe('Home Page', () => {
    beforeEach('login Home page',()=>{
        cy.visit("https://dev.redditswe22.tech/login")
        LoginWithValidEmail()

    })

it('check visibilty popular button click to open popular page  ', ()=>{

buttonCheckAndClickHomePage("Popular")
// it should open the popular of the current user
})                          
it('check visibilty coin button click to open coin page  ', ()=>{

buttonCheckAndClickHomePage("Coin")
// it should open the coin drop list of the current user
})    

it('check visibilty moderation button click to open moderator page  ', ()=>{

buttonCheckAndClickHomePage("Moderator")

// it should open the no.. drop list of the current user
})    

it('check visibilty chat button click to open chat page  ', ()=>{

buttonCheckAndClickHomePage("Chat")
// it should open the chat drop list of the current user
//cy.get(" #tooltip-container").should("be.visible")

})    
it('check visibilty notifications button click to open notifications page  ', ()=>{

buttonCheckAndClickHomePage("Notifications")
// it should open the notifications drop list of the current user
})    

it('check visibilty pluscreatepost icon button click to open createpost page  ', ()=>{

buttonCheckAndClickHomePage("plusofcreatepostButton")
// it should open the createpost drop list of the current user
})    

it('check visibilty advertise button click to open advertise page  ', ()=>{

buttonCheckAndClickHomePage("Advertise")

// it should open the advertise drop list of the current user
})    
it('Best Event', ()=>{
    buttonCheckAndClickHomePage("Best")
    // it must came with hot postes at the top
})
it('Hot Event', ()=>{
    buttonCheckAndClickHomePage("Hot")
    // it must came with hot postes at the top
})

it('New Event', ()=>{

    buttonCheckAndClickHomePage("New")
    // it must came with new postes at the top

})

it('TOP Event', ()=>{
buttonCheckAndClickHomePage("Top")
// it must came with TOP postes at the top
})



it('... Event', ()=>{

    //check visible & mouseover click
    buttonCheckAndClickHomePage("... Event")
// it must open and drop list have icon called Rising
})


it('check Posts of Today', ()=>{

//check visible & mouseover click
buttonCheckAndClickHomePage("Top")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").realClick()
buttonCheckAndClickHomePage("TodayPosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","Today")

})

it('check Posts of This week', ()=>{

//check visible & mouseover click

buttonCheckAndClickHomePage("Top")

HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").realClick()
buttonCheckAndClickHomePage("WeekPosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","This Week")

})

it('check Posts of This Month', ()=>{

//check visible & mouseover click
buttonCheckAndClickHomePage("Top")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").realClick()
buttonCheckAndClickHomePage("MonthPosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","This Month")

})

it('check Posts of this year', ()=>{

//check visible & mouseover click
buttonCheckAndClickHomePage("Top")

HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").realClick()
buttonCheckAndClickHomePage("YearPosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","This Year")

})

it('check Posts of All time', ()=>{

//check visible & mouseover click
buttonCheckAndClickHomePage("Top")

HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").realClick()
buttonCheckAndClickHomePage("AllTimePosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","All Time")

})


it('scroll down to find buttom of  back to top ', ()=>{

buttonCheckAndClickHomePage("BackToTop")
})

it('check reddit icon that refer to the home page of the site icon ', ()=>{
// go to post Page
buttonCheckAndClickHomePage("createpostButton")
cy.url().should("include","https://dev.redditswe22.tech/submit")
// return to the home page
buttonCheckAndClickHomePage("RedditIcon")
cy.url().should("include","https://dev.redditswe22.tech")
})  
it('check icon that refer to the page that create post ', ()=>{
buttonCheckAndClickHomePage("createpostButton")

cy.url().should("include","https://dev.redditswe22.tech/submit")

    })  

it('check icon that refer to the page that create community ', ()=>{
CreateCommunityHomePage("CreateSuccessfully")

        })  

it('check icon that refer to the page that create community but donot creat page click on cancle ', ()=>{
CreateCommunityHomePage("CancleCreating")
        })

it('check icon that refer to the page that create community but donot creat page click on Exit Button ', ()=>{
CreateCommunityHomePage("ExitCreating")
        })
        
it('check icon that refer to the page that have all communities (veiw all button) ', ()=>{
buttonCheckAndClickHomePage("AllCommunities")
cy.url().should("include","https://dev.redditswe22.tech/category/*")
            // it should open page of all communitie
})  

it('check visibilty of USER_DROPDOWN , click to open window  ', ()=>{

buttonCheckAndClickHomePage("USER_DROPDOWN")

}) 
it('check icon(button) of opening my profile page ', ()=>{

buttonCheckAndClickHomePage("myprofileicon")
cy.url().should("include","https://dev.redditswe22.tech/user/t2_mahmoud_reda")
})

it('open page of creating media(image,vedio) post ', ()=>{
//check visible & mouseover click
buttonCheckAndClickHomePage("createmediapost")
// it must open link of creating media post
//cy.url().should("include","https://www.reddit.com/submit?media=true")

})
it('open page of creating writing post ', ()=>{

    //check visible & mouseover click
    buttonCheckAndClickHomePage("createwrittenpost")

    // it must open link of creating writen post

    //cy.url().should("include","https://www.reddit.com/submit?url")
    })


it('check search container ', ()=>{

        //check visible & mouseover click
        buttonCheckAndClickHomePage("Searchcontiner")

    // it must open window 
    //cy.get("#SearchDropdownContent").should("be.visible")  
})

it('check create post container ', ()=>{
    //check visible & mouseover click
    buttonCheckAndClickHomePage("Postcontiner")
    // it must open link of creating  post
//  cy.url().should("include","https://dev.redditswe22.tech/submit")
})
it('check icon(button) of HOME ', ()=>{

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

//HomePage.getopenwindowofHome().should("not.be.visible")

// closing that window
HomePage.getExitbuttonoftheleftwindow().should("be.visible")
HomePage.getExitbuttonoftheleftwindow().trigger("mouseover").click()

})

it('check visibilty of Online Status of USER_DROPDOWN , click   ', ()=>{

buttonCheckAndClickHomePage("USER_DROPDOWN")
buttonCheckAndClickHomePage("OnlineStatus")
}) 

it('check visibilty of Dark Mode  of USER_DROPDOWN , click to make it dark then click to make it white  ', ()=>{

buttonCheckAndClickHomePage("USER_DROPDOWN")
// make it dark
buttonCheckAndClickHomePage("DarkMode")
// return it to white
buttonCheckAndClickHomePage("DarkMode")

})
it('check visibilty of LogOut of USER_DROPDOWN , click   ', ()=>{

buttonCheckAndClickHomePage("USER_DROPDOWN")
cy.get("#basic-navbar-nav > div.sc-lczhyZ.lkkfrt.nav-item.show.dropdown > div > a:nth-child(19)").scrollIntoView({duration:5000}).should("be.visible").realClick()
// buttonCheckAndClickHomePage("LogOut")
cy.url().should("include","https://dev.redditswe22.tech/login")
}) 

it('check for home icon ', ()=>{
    HomePage.getHOMEiconbutton().should("be.visible").click()
    HomePage.getopenwindowofHome().should("be.visible")
    
})
it('check for visibility of the side home ', ()=>{
    HomePage.getHOMEiconbutton().should("be.visible").click()
    HomePage.getopenwindowofHome().should("be.visible")
    cy.get("#side-bar-action").click()

})
it('check for visibility of the side home & Search for User Settings ', ()=>{
    HomePage.getHOMEiconbutton().should("be.visible").click()
    HomePage.getopenwindowofHome().should("be.visible")
    cy.get("#side-bar-action").click()
    HomePage.getSearchFromSide().should("be.visible").type("Settings")
    HomePage.getFirstWindow().should("be.visible").should("include.text","User Settings").click()
    cy.url().should("include","https://dev.redditswe22.tech/settings")

})
it('check for visibility of the side home & Search for Notifications ', ()=>{
    HomePage.getHOMEiconbutton().should("be.visible").click()
    HomePage.getopenwindowofHome().should("be.visible")
    cy.get("#side-bar-action").click()
    HomePage.getSearchFromSide().should("be.visible").type("Notifications")
    HomePage.getFirstWindow().should("be.visible").should("include.text","Notifications").click()
    cy.url().should("include","https://dev.redditswe22.tech/notifications")

})
it('check for visibility of the side home & Search for Messages ', ()=>{
    HomePage.getHOMEiconbutton().should("be.visible").click()
    HomePage.getopenwindowofHome().should("be.visible")
    cy.get("#side-bar-action").click()
    HomePage.getSearchFromSide().should("be.visible").type("Messages")
    HomePage.getFirstWindow().should("be.visible").should("include.text","Messages").click()
    cy.url().should("include","https://dev.redditswe22.tech/message")

})
it('check for visibility of the side home & Search for create Post ', ()=>{
    HomePage.getHOMEiconbutton().should("be.visible").click()
    HomePage.getopenwindowofHome().should("be.visible")
    cy.get("#side-bar-action").click()
    HomePage.getSearchFromSide().should("be.visible").type("create")
    HomePage.getFirstWindow().should("be.visible").should("include.text","Create Post").click()
    cy.url().should("include","https://dev.redditswe22.tech/submit")

})

})


