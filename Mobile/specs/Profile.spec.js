const Profile =require("../pageobjects/Profile");
const ProfileObject=new Profile();
describe('Profile Page', () => {
    // make a refactoring to the assert
    //Assert.assertEquals(await RemovePost.isVisible(), true);
    afterEach(async () => {
        await driver.reset();
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
        const numOfLikes= await ProfileObject.getNumberOfLikes(); 
        // var nums= // get number of likes according to the inspector;       
        await likeButton.click();
        // var nums= // get number of likes according to the inspector;       
        // the number of the likes must be incremented
    })

    it("test the dislike button of the first post", async()=>{
        const dislikeButton=await ProfileObject.getDislikeButton();
        const numOfLikes= await ProfileObject.getNumberOfLikes(); 
        // var nums= // get number of likes according to the inspector;       
        await dislikeButton.click();
        // var nums= // get number of likes according to the inspector;       
        // the number of the likes must be decremented
    })

    it("test click on the comment button",async()=>{
        const commentButton=await ProfileObject.getCommentButton();
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

    it("check if the comment is exist or not ",async()=>{
        const commentsTab=await ProfileObject.getCommentsTab();
        await commentsTab.click();
        const getComment=await ProfileObject.getCommentWithText("New comment");
        expect(await getComment.isVisible()).toBe(true);
    })

    it("check the about post dropdown",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const dropdown=await ProfileObject.getAboutPostDropdown();
        expect(await dropdown.isVisible()).toBe(true);
    })

    it("check the about post dropdown item mark spolier",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markSpolier=await ProfileObject.getdropdownMarkSpolier();
        expect(await markSpolier.isVisible()).toBe(true);
    })

    it("check the about post dropdown item mark NSFW",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markNSFW=await ProfileObject.getdropdownMarkNSFW();
        expect(await markNSFW.isVisible()).toBe(true);
    })

    it("check the about post dropdown item mark Lock comments",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const lockComments=await ProfileObject.getdropdownLockComments();
        expect(await lockComments.isVisible()).toBe(true);
    })

    it("check the about post dropdown item sticky post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const sticky=await ProfileObject.getdropdownsticky();
        expect(await sticky.isVisible()).toBe(true);
    })

    it("check the about post dropdown item remove Post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const RemovePost=await ProfileObject.getdropdownRemovePost();
        expect(await RemovePost.isVisible()).toBe(true);
    })

    it("check the about post dropdown item mark as spam",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markSpam =await ProfileObject.getdropdownMarkSpam();
        expect(await markSpam.isVisible()).toBe(true);
    })

    it("check the about post dropdown item Approve post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const approvePost=await ProfileObject.getdropdownApprove();
        expect(await approvePost.isVisible()).toBe(true);
    })

    it("click on mark spolier",async()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        // const markSpolier=await ProfileObject.getdropdownMarkSpolier();
        await markSpolier.click();
        expect(aboutPostTab.isVisible()).toBe(false);
    })

    it("click on mark NSWF",async()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const markNSFW=await ProfileObject.getdropdownMarkNSFW();
        await markNSFW.click();
        expect(aboutPostTab.isVisible()).toBe(false);
    })

    it("click on mark Lock Comments",async()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const lockComments=await ProfileObject.getdropdownLockComments();
        await lockComments.click();
        expect(aboutPostTab.isVisible()).toBe(false);
    })


    it("click on  sticky post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const sticky=await ProfileObject.getdropdownsticky();
        await sticky.click();
        expect(await aboutPostTab.isVisible()).toBe(false);
    })


    it("click on the Approve post",async ()=>{
        const aboutPostTab =await ProfileObject.getAboutPost();
        await aboutPostTab.click();
        const approvePost=await ProfileObject.getdropdownApprove();
        await approvePost.click();
        expect(await aboutPostTab.isVisible()).toBe(false);
    })
    /*end of the test of Posts Tab*/
    it("test the share button",async()=>{
        const shareButton=await ProfileObject.getShareButton();
        await shareButton.click();
        const shareDropdown=await ProfileObject.getShareDropdown();
        expect(await shareDropdown.isVisible()).toBe(true);
    })

    it("test the share button and see the invite someone to chat button",async()=>{
        const shareButton=await ProfileObject.getShareButton();
        await shareButton.click();
        const seeInviteButton=await ProfileObject.getInviteButton();
        expect(await seeInviteButton.isVisible()).toBe(true);
    })

    it("test the share button and see the share profile  button",async()=>{
        const shareButton=await ProfileObject.getShareButton();
        await shareButton.click();
        const shareProfileButton=await ProfileObject.getShareProfile();
        expect(await shareProfileButton.isVisible()).toBe(true);
    })

    // 7oda
    it(" the Social Link Button Add add Instagram Link ",async ()=>{
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
        
        it("check Followers Button ",async ()=>{
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
        expect(await ResultsWindow.isVisible()).toBe(true);
        })
        it("check Edit Profile Button  ",async ()=>{
        const EditProfile=await ProfileObject.getEditProfileButton();
        expect(EditProfile.isEnabled()).toBe(true);
        await EditProfile.click();
        })
        it("Display Name to my Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add name 
            const DisplayName=await ProfileObject.getAreaOfAddNameToProfile();
            expect(await ResultsWindow.isVisible()).toBe(true);
            await DisplayName.addValue("Mahmoud")
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        it("Add Description to my Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const Description=await ProfileObject.getAreaOfDescriptonToProfile();
            expect(await Description.isVisible()).toBe(true);
            await Description.addValue("Mahmoudmddddddddf")
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        it("check Content visibility of Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const ContentVisbility=await ProfileObject.getContentVisbilitycheckBox();
            expect(await ContentVisbility.isVisible()).toBe(true);
            expect(ContentVisbility.isEnabled()).toBe(true);
            await ContentVisbility.click();
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        it("check Content visibility of Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const ContentVisbility=await ProfileObject.getContentVisbilitycheckBox();
            expect(await ContentVisbility.isVisible()).toBe(true);
            expect(ContentVisbility.isEnabled()).toBe(true);
            await ContentVisbility.click(); // it will be unvisible as the defult is to be visible
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })
        t("check Show active communities of Profile From Edit Profile Button  ",async ()=>{
            const EditProfile=await ProfileObject.getEditProfileButton();
            expect(EditProfile.isEnabled()).toBe(true);
            await EditProfile.click();
            // add Description 
            const ShowActiveCommunities=await ProfileObject.getContentVisbilitycheckBox();
            expect(await ShowActiveCommunities.isVisible()).toBe(true);
            expect(ShowActiveCommunities.isEnabled()).toBe(true);
            await ShowActiveCommunities.click(); // it will be unvisible as the defult is to be showed
            // save edit
            const SaveProfileEdits=await ProfileObject.getSaveButtonFromEditProfile();
            expect(await SaveProfileEdits.isEnabled()).toBe(true);
            await SaveProfileEdits.click();
        
        })

})