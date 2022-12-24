import HomePage from "../../support/page-objects/home-page";
import {buttonCheckAndClickHomePage} from "../../Utils/HomePage/HomeTaps"
import {CreateCommunityHomePage} from "../../Utils/HomePage/CreateCommunity"
describe('Home Page', () => {
    beforeEach('login Home page',()=>{

        cy.visit("https://dev.redditswe22.tech/");
       // HomePage.getloginButton().should("be.visible")
       // HomePage.getloginButton().trigger('mouseover').click();
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

        
    it('check search container ', ()=>{

        //check visible & mouseover click
        buttonCheckAndClickHomePage("Searchcontiner")

    // it must open window 
    //cy.get("#SearchDropdownContent").should("be.visible")  
    })

    it('check icon that refer to the page that create post ', ()=>{
    buttonCheckAndClickHomePage("createpostButton")

    cy.url().should("include","https://dev.redditswe22.tech/login")

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
    //////////////////////////////////////////////////////////////////////////////////////////////// From The Oficial site 
    it('check visibilty of USER_DROPDOWN , click to open window  ', ()=>{

        buttonCheckAndClickHomePage("USER_DROPDOWN")

    }) 

    
    it('check visibilty of SignUP Button , click to open Sign UP window  ', ()=>{

        HomePage.getsingupButton().should("be.visible")
        HomePage.getsingupButton().trigger('mouseover').click();
        HomePage.getSignUpWindow().should("be.visible")
        HomePage.getSignUpWindowTitle().should("have.text","Sign Up")
        
    }) 


    it('check visibilty of Login Button , click to open Login window  ', ()=>{

        HomePage.getloginButton().should("be.visible")
        HomePage.getloginButton().trigger('mouseover').click();
        HomePage.getLoginWindow().should("be.visible")
        HomePage.getLoginWindowTitle().should("have.text","Log In")
        
    }) 

    it('check visibilty of Dark Mode  of USER_DROPDOWN , click to make it dark then click to make it white  ', ()=>{

        buttonCheckAndClickHomePage("USER_DROPDOWN")
        // make it dark
        buttonCheckAndClickHomePage("DarkMode")
        // return it to white
        buttonCheckAndClickHomePage("DarkMode")

    })
    it('check visibilty of SignUP Or Login of USER_DROPDOWN , click   ', ()=>{

        buttonCheckAndClickHomePage("USER_DROPDOWN")
        buttonCheckAndClickHomePage("SignUpOrLogin")
    }) 
    it('open page of creating media(image,vedio) post ', ()=>{

        //check visible & mouseover click
        buttonCheckAndClickHomePage("createmediapost")
        // it must open link of creating media post
        cy.url().should("include","https://dev.redditswe22.tech/login")
        
        })
    it('open page of creating writing post ', ()=>{

            //check visible & mouseover click
            buttonCheckAndClickHomePage("createwrittenpost")
            // it must open link of creating writen post
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

//////////////////////////////////////////////////////////not tested scripts
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
HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").click()
buttonCheckAndClickHomePage("MonthPosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","This Month")

})

it('check Posts of this year', ()=>{

//check visible & mouseover click
buttonCheckAndClickHomePage("Top")

HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").click()
buttonCheckAndClickHomePage("YearPosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","This Year")

})

it('check Posts of All time', ()=>{

//check visible & mouseover click
buttonCheckAndClickHomePage("Top")

HomePage.geticonoftimebuttonthatshownfromTopicon().should("be.visible").click()
buttonCheckAndClickHomePage("AllTimePosts")
HomePage.geticonoftimebuttonthatshownfromTopicon().should("include.text","All Time")

})
it('check visibilty of (help center) of USER_DROPDOWN , click to open  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("HelpCenter")
}) 

it('check visibilty of terms & policies of USER_DROPDOWN , click to show another list  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("TermsandPoliciesCenter")
}) 

it('check visibilty of terms & policies & its frist item(user argument)  of USER_DROPDOWN , click to show another list  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("TermsandPoliciesCenter")
    buttonCheckAndClickHomePage("UserAgreement")
}) 

it('check visibilty of terms & policies & its second item (private policy) of USER_DROPDOWN , click to show another list  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("TermsandPoliciesCenter")
    buttonCheckAndClickHomePage("PrivacyPolicy")
}) 

it('check visibilty of terms & policies & its third item (contect policy) of USER_DROPDOWN , click to show another list  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("TermsandPoliciesCenter")
    buttonCheckAndClickHomePage("ContentPolicy")
}) 

it('check visibilty of terms & policies & its fourth item (moderator code of conduct) of USER_DROPDOWN , click to show another list  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("TermsandPoliciesCenter")
    buttonCheckAndClickHomePage("ModeratorCodeOfConduct")
}) 

it('check visibilty of advetise on reddit of USER_DROPDOWN , click to show another list  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("AdvertiseOnReddit")
}) 

it('check visibilty of sign up& login  of USER_DROPDOWN , click to show another list  ', ()=>{

    buttonCheckAndClickHomePage("USER_DROPDOWN")
    buttonCheckAndClickHomePage("LoginorSignup")
        //check visibilty of login window
        cy.url().should("include","https://dev.redditswe22.tech/login")
    //cy.get("body > div > main > div.OnboardingStep.Onboarding__step.mode-auth").should("be.visible")
}) 



it('check visibilty of Sign up button click to open sign up page  ', ()=>{

    HomePage.getsingupButton().should("be.visible")
    HomePage.getsingupButton().trigger('mouseover').click();
    
    // it should open the page of the Sign Up

    })
it('check visibilty of Login button click to open login page  ', ()=>{

        HomePage.getloginButton().should("be.visible")
        HomePage.getloginButton().trigger('mouseover').click();
        // it should open the Homepage of the current user
}) 
it('check visibilty of Join Reddit Button , click to open Sign UP window  ', ()=>{

    HomePage.getJoinRedditButtonButton().should("be.visible")
    HomePage.getJoinRedditButtonButton().trigger('mouseover').click();
    HomePage.getSignUpWindow().should("be.visible")
    
}) 
it('scroll down to find buttom of  back to top ', ()=>{
    HomePage.getbacktotopButton().scrollIntoView()
    cy.wait(3000)
    HomePage.getbacktotopButton().should("be.visible").click()
    //buttonCheckAndClickHomePage("BackToTop")
    })
})




