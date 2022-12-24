const Profile =require("../pageobjects/Profile");
const Login = require('../pageobjects/Login');
const Home = require('../pageobjects/Home');
const HomePage= new Home();
const LoginPOM = new Login();
const ProfileObject=new Profile();
describe('Profile Page', () => {
    // make a refactoring to the assert
    //Assert.assertEquals(await RemovePost.isDisplayed(), true);
    afterEach(async()=>{
        await driver.reset();

    })
    beforeEach(async () => {
        const contineuButton=await  LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const usernameField=await LoginPOM.getUsernameField();
        await usernameField.addValue("mahmoud_reda");
        const passwordField=await LoginPOM.getPasswordField();
        await passwordField.addValue("123456789");
        const loginButton =await LoginPOM.getLoginButton();
        await loginButton.click();
        driver.setImplicitTimeout(5000)
        const userIcon=await  HomePage.getUserIcon();
        await userIcon.click();
        const viewProfile=await HomePage.getViewProfile();
        await viewProfile.click();
    });
    
    it("get Posts Tab and click on it",async ()=>{
        const PostsTab= await ProfileObject.getPostsTab();
        expect(await PostsTab.isEnabled()).toBe(true);
    })


    it("get Comments Tab and click on it",async ()=>{
        const CommentsTab= await ProfileObject.getCommentsTab();
        expect(await CommentsTab.isEnabled()).toBe(true);
    })

    it("get about Tab and click on it",async ()=>{
        const AboutTab= await ProfileObject.getAboutTab();
        expect(await AboutTab.isEnabled()).toBe(true);
    })

    /*start of the test of Posts Tab*/
    it("test like button of first post",async()=>{
        const likeButton=await ProfileObject.getLikeButton();
        driver.touchScroll(10, 100, likeButton);
        const numOfLikes= await ProfileObject.getNumberOfLikes(); 
        await likeButton.click();
    })

    it("test the dislike button of the first post", async()=>{
        const dislikeButton=await ProfileObject.getDislikeButton();
        const numOfLikes= await ProfileObject.getNumberOfLikes(); 
        await dislikeButton.click();
    })

    it("test click on the comment button",async()=>{
        const commentButton=await ProfileObject.getCommentButton();
        driver.touchScroll(10, 100, commentButton);
        await commentButton.click();
        const inputFieldComment=await ProfileObject.getInputField();
        // the input field must have a text (Add a comment)
        expect(await inputFieldComment.isEnabled()).toBe(true);
    })

    it("test add comment ",async ()=>{
        const commentButton=await ProfileObject.getCommentButton();
        await commentButton.click();
        const inputFieldComment=await ProfileObject.getInputField();
        await inputFieldComment.click();
        const commentArea= await ProfileObject.getCommentArea();
        await commentArea.addValue("New comment");
        const postCommentButton= await ProfileObject.getPostCommentButton();
        await postCommentButton.click();
    })

    it.skip("check if the comment is exist or not ",async()=>{
        const commentsTab=await ProfileObject.getCommentsTab();
        await commentsTab.click();
        const getComment=await ProfileObject.getCommentWithText().getText();
        expect(getComment).toBe("New comment")  
    })

    it("check the about post dropdown",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const dropdown=await ProfileObject.getAboutPostDropdown();
        expect(await dropdown.isDisplayed()).toBe(true);
    })

    it("check the about post dropdown item mark spolier",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markSpolier=await ProfileObject.getdropdownMarkSpolier();
        expect(await markSpolier.isDisplayed()).toBe(true);
    })

    it("check the about post dropdown item mark NSFW",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markNSFW=await ProfileObject.getdropdownMarkNSFW();
        expect(await markNSFW.isDisplayed()).toBe(true);
    })

    it("check the about post dropdown item mark Lock comments",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const lockComments=await ProfileObject.getdropdownLockComments();
        expect(await lockComments.isDisplayed()).toBe(true);
    })

    it("check the about post dropdown item sticky post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const sticky=await ProfileObject.getdropdownsticky();
        expect(await sticky.isDisplayed()).toBe(true);
    })

    it("check the about post dropdown item remove Post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const RemovePost=await ProfileObject.getdropdownRemovePost();
        expect(await RemovePost.isDisplayed()).toBe(true);
    })

    it("check the about post dropdown item mark as spam",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markSpam =await ProfileObject.getdropdownMarkSpam();
        expect(await markSpam.isDisplayed()).toBe(true);
    })

    it("check the about post dropdown item Approve post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const approvePost=await ProfileObject.getdropdownApprove();
        expect(await approvePost.isDisplayed()).toBe(true);
    })

    it("click on mark spolier",async()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        // const markSpolier=await ProfileObject.getdropdownMarkSpolier();
        await markSpolier.click();
        expect(aboutPostTab.isDisplayed()).toBe(false);
    })

    it("click on mark NSWF",async()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markNSFW=await ProfileObject.getdropdownMarkNSFW();
        await markNSFW.click();
        expect(aboutPostTab.isDisplayed()).toBe(false);
    })

    it("click on mark Lock Comments",async()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const lockComments=await ProfileObject.getdropdownLockComments();
        await lockComments.click();
        expect(aboutPostTab.isDisplayed()).toBe(false);
    })


    it("click on  sticky post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const sticky=await ProfileObject.getdropdownsticky();
        await sticky.click();
        expect(await aboutPostTab.isDisplayed()).toBe(false);
    })


    it("click on the Approve post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const approvePost=await ProfileObject.getdropdownApprove();
        await approvePost.click();
        expect(await aboutPostTab.isDisplayed()).toBe(false);
    })
    /*end of the test of Posts Tab*/
    it("test the share button",async()=>{
        const shareButton=await ProfileObject.getShareButton();
        await shareButton.click();
        const shareDropdown=await ProfileObject.getShareDropdown();
        expect(await shareDropdown.isDisplayed()).toBe(true);
    })

    it.skip("test the share button and see the invite someone to chat button",async()=>{
        const shareButton=await ProfileObject.getShareButton();
        await shareButton.click();
        const seeInviteButton=await ProfileObject.getInviteButton();
        expect(await seeInviteButton.isDisplayed()).toBe(true);
    })

    it.skip("test the share button and see the share profile  button",async()=>{
        const shareButton=await ProfileObject.getShareButton();
        await shareButton.click();
        const shareProfileButton=await ProfileObject.getShareProfile();
        expect(await shareProfileButton.isDisplayed()).toBe(true);
    })

    it.skip(" the Social Link Button Add add Instagram Link ",async ()=>{
        const socialLink=await ProfileObject.getSocialLinkButton();
        expect(await socialLink.isEnabled()).toBe(true);
        await socialLink.click();
        const instagramLink=await ProfileObject.getInstagramButton();
        expect(await instagramLink.isEnabled()).toBe(true);
        await instagramLink.click();
        // add user name of my instagram
        const usernamefield=await ProfileObject.getUsernameFieldOfSocialLink();
        await usernamefield.addValue("Mahmoud_123");
        
        const ContinueSocialLink=await ProfileObject.getContinueButtonFromSocialLink();
        expect(await ContinueSocialLink.isEnabled()).toBe(true);
        await ContinueSocialLink.click();
        // save changes from edit Profile
        const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
        expect(await SaveProfileEdits.isEnabled()).toBe(true);
        await SaveProfileEdits.click();
        })
        
        it.skip("check Followers Button ",async ()=>{
        const Followers=await ProfileObject.getFollowersButton();
        expect(Followers.isEnabled()).toBe(true);
        await Followers.click();
        //search for Followers
        const Searchfield=await ProfileObject.getSearchFieldOfFollowers();
        await Searchfield.addValue("Mahmoud");
        const Results=await ProfileObject.getResultsButton();
        expect(await Results.isEnabled()).toBe(true);
        await Results.click();
        // you will show window that contain the user or No Results
        const ResultsWindow=await ProfileObject.getResultsWindowOfFollowes();
        expect(await ResultsWindow.isDisplayed()).toBe(true);
        })
        it("check Edit Profile Button  ",async ()=>{
        const EditProfile=await ProfileObject.getEditProfileButton();
        expect(EditProfile.isEnabled()).toBe(true);
        await EditProfile.click();
        })
        it.skip("Display Name to my Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add name 
            const DisplayName=await ProfileObject.getAreaOfAddNameToProfile();
            expect(await ResultsWindow.isDisplayed()).toBe(true);
            await DisplayName.addValue("Mahmoud")
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        it.skip("Add Description to my Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const Description=await ProfileObject.getAreaOfDescriptonToProfile();
            expect(await Description.isDisplayed()).toBe(true);
            await Description.addValue("Mahmoudmddddddddf")
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        it.skip("check Content visibility of Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const ContentVisbility=await ProfileObject.getContentVisbilitycheckBox();
            expect(await ContentVisbility.isDisplayed()).toBe(true);
            expect(ContentVisbility.isEnabled()).toBe(true);
            await ContentVisbility.click();
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        it.skip("check Content visibility of Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const ContentVisbility=await ProfileObject.getContentVisbilitycheckBox();
            expect(await ContentVisbility.isDisplayed()).toBe(true);
            expect(ContentVisbility.isEnabled()).toBe(true);
            await ContentVisbility.click(); // it will be unvisible as the defult is to be visible
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        it.skip("check Show active communities of Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const ShowActiveCommunities=await ProfileObject.getContentVisbilitycheckBox();
            expect(await ShowActiveCommunities.isDisplayed()).toBe(true);
            expect(ShowActiveCommunities.isEnabled()).toBe(true);
            await ShowActiveCommunities.click(); // it will be unvisible as the defult is to be showed
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })

})