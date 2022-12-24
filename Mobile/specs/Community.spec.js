const Community =require("../pageobjects/Community");
const CommunityObject=new Community();
describe('Community Page', () => {
    var COMMUNITY_NAME="";
    before(async()=>{
        const element=await CommunityObject.getCommunityName();
        COMMUNITY_NAME=await element.getAttribute("contentDescription")
    })
    afterEach(async () => {
        await driver.reset();
    });

    it('check toggel button', async () => {
        const joinButton = await CommunityObject.getJoinButton();
        await joinButton.click();
        const joinedButton = await CommunityObject.getJoinedButton();
        expect(await joinedButton.getAttribute("contentDescription")).toBe("Joined");
        expect(await joinButton.getAttribute("contentDescription")).toBe("");
    });

    it('see the prompet window', async () => {
        const joinButton = await CommunityObject.getJoinButton();
        await joinButton.click();
        const joinedButton = await CommunityObject.getJoinedButton();
        await joinedButton.click();
        const getPrompet=await CommunityObject.getPrompetWindow();
        expect(await getPrompet.isDisplayed()).toBe(true);
    });
    it("check the content of the prompet",async()=>{
        const joinButton = await CommunityObject.getJoinButton();
        await joinButton.click();
        const joinedButton = await CommunityObject.getJoinedButton();
        await joinedButton.click();
        const getPrompetWindowContent= await CommunityObject.getPrompetWindowContent();
        expect(await getPrompetWindowContent.getAttribute("contentDescription")).toBe(`Are you sure you want to leave the ${COMMUNITY_NAME} community?`);
        
    })

    

    it('check cancel button content', async () => {
        const joinButton = await CommunityObject.getJoinButton();
        await joinButton.click();
        const joinedButton = await CommunityObject.getJoinedButton();
        await joinedButton.click();
        const cancelButton=await CommunityObject.getCancelButton();
        expect(await cancelButton.getAttribute("contentDescription")).toBe('Cancel');
    });

    it('click cancel button', async () => {
        const joinButton = await CommunityObject.getJoinButton();
        await joinButton.click();
        const joinedButton = await CommunityObject.getJoinedButton();
        await joinedButton.click();
        const getPrompetContent=await CommunityObject.getPrompetWindowContent();
        const getPrompetWindow=await CommunityObject.getPrompetWindow();
        const cancelButton=await CommunityObject.getCancelButton();
        await cancelButton.click();
        expect(await joinedButton.getAttribute("contentDescription")).toBe("Joined");

         // here we must check the dispaly of the prompet
        expect(await getPrompetContent.getAttribute("contentDescription")).toBe(COMMUNITY_NAME);
    });

    it('check leave button content', async () => {
        const joinButton = await CommunityObject.getJoinButton();
        await joinButton.click();
        const joinedButton = await CommunityObject.getJoinedButton();
        await joinedButton.click();
        const leaveButton=await CommunityObject.getLeaveButton();
        expect(await leaveButton.getAttribute("contentDescription")).toBe('Leave');
    });

    it('click leave button', async () => {
        const joinButton = await CommunityObject.getJoinButton();
        await joinButton.click();
        const joinedButton = await CommunityObject.getJoinedButton();
        await joinedButton.click();
        const getPrompetContent=await CommunityObject.getPrompetWindowContent();
        const leaveButton=await CommunityObject.getLeaveButton();
        await leaveButton.click();
        expect((await joinButton.getAttribute("contentDescription")).trim()).toBe("Join");

        // here we must check the dispaly of the prompet
        expect(await getPrompetContent.getAttribute("contentDescription")).toBe(COMMUNITY_NAME);
    });



    // description 
    it("see more description the start bounds",async ()=>{
        const description=await CommunityObject.getDescriptionCard();
        const size=await description.getSize();
        expect(size).toStrictEqual({"height":138, "width":640});
    })

    it("see more description expanded",async ()=>{
        const description=await CommunityObject.getDescriptionCard();
        await description.click();
        const size=await description.getSize();
        expect(size).toStrictEqual({"height":298, "width":640});
    })
    //.............................................................//
    // test settings
    it("click on the settings button see dropdown Window",async()=>{
        const settingsButton=await CommunityObject.getSettingsButton();
        await settingsButton.click();
        const dropdown=await CommunityObject.getDropdown();
        expect(await dropdown.isDisplayed()).toBe(true);
    })

    it("test share community button content",async()=>{
        const settingsButton=await CommunityObject.getSettingsButton();
        await settingsButton.click();
        const dropdown=await CommunityObject.getDropdown();
        expect(await dropdown.isDisplayed()).toBe(true);
    })

    it("test  add to custom button content",async()=>{
        const settingsButton=await CommunityObject.getSettingsButton();
        await settingsButton.click();
        const dropdown=await CommunityObject.getDropdown();
        expect(await dropdown.isDisplayed()).toBe(true);
    })

    it("test  community info button content",async()=>{
        const buttonCommunity=await CommunityObject.getCommunityInfoButton();
        expect(await buttonCommunity.getAttribute("contentDescription")).toBe("Community info");
    })

    it("test change user flair button content",async()=>{
        const buttonChange=await CommunityObject.getChangeUserButton();
        expect(await buttonChange.getAttribute("contentDescription")).toBe("Change user flair");
    })


    it("test contact mode button content",async()=>{
        const buttonMode=await CommunityObject.getContactModeButton();
        expect(await buttonMode.getAttribute("contentDescription")).toBe("Contact mods");
    })

    it("test Add to home button content",async()=>{
        const buttonAddToHome=await CommunityObject.getAddToHomeButton();
        expect(await buttonAddToHome.getAttribute("contentDescription")).toBe("Add to Home screen");
    })
    
    //.............................................................//
    // post view 

    it("click on the post view button",async ()=>{
        const postViewButton=await CommunityObject.getPostViewButton();
        await postViewButton.click();
        const postViewPrompet=await CommunityObject.getPostViewTab();
        expect(await postViewPrompet.getAttribute("contentDescription") ).toBe("")
        expect(await postViewPrompet.isEnabled() ).toBe(true)
    })


    it("test click on the first view",async()=>{
        const postViewButton=await CommunityObject.getPostViewButton();
        await postViewButton.click();
        const firstView=await CommunityObject.getPostFirstTab();
        await firstView.click();
        const postImage=await CommunityObject.getPostImageCard();
        const size=await postImage.getSize();
        // size of the image
        expect(size).toStrictEqual({"height":324, "width":720});
    }) 
    
    
    it("test click on the second view",async()=>{
        const postViewButton=await CommunityObject.getPostViewButton();
        await postViewButton.click();
        const firstView=await CommunityObject.getPostSecondTab();
        await firstView.click();
        const postImage=await CommunityObject.getPostImageClassic();
        const size=await postImage.getSize();
        // size of the image
        expect(size).toStrictEqual({"height":562, "width":720});
    }) 
    //.............................................................//

    // post settings save and unsave

    it("click on the Post Settings button",async()=>{
        const settingsButton =   await CommunityObject.getPostSettingsButton();
        await settingsButton.click();
        const settingsTab   =  await CommunityObject.getPostSettingsTab();
        expect(await settingsTab.isDisplayed() ).toBe(true);
    })

    it("click on save button",async()=>{
        const settingsButton =   await CommunityObject.getPostSettingsButton();
        await settingsButton.click();
        const saveButton   =  await CommunityObject.getSaveButton();
        const unsaveButton   =  await CommunityObject.getUnsaveButton();
        expect(await unsaveButton.getAttribute("contentDescription") ).toBe("")
        await saveButton.click();
        expect(await unsaveButton.getAttribute("contentDescription") ).toBe("Unsave")
    })

    it("click on unsave button",async()=>{
        const settingsButton =   await CommunityObject.getPostSettingsButton();
        await settingsButton.click();
        const saveButton   =  await CommunityObject.getSaveButton();
        await saveButton.click();
        await settingsButton.click();
        const unsaveButton   =  await CommunityObject.getUnsaveButton();
        await unsaveButton.click();
        expect(await unsaveButton.getAttribute("contentDescription") ).toBe("")
        expect(await saveButton.getAttribute("contentDescription") ).toBe("Save")
    })

    it("check Hide button content",async()=>{
        const settingsButton =   await CommunityObject.getPostSettingsButton();
        await settingsButton.click();
        const hideButton   =  await CommunityObject.getHideButton();
        expect(await saveButton.getAttribute("contentDescription") ).toBe("Hide post")
    })

    it("check Report button content",async()=>{
        const settingsButton =   await CommunityObject.getPostSettingsButton();
        await settingsButton.click();
        const reportButton   =  await CommunityObject.getReportButton();
        expect(await saveButton.getAttribute("contentDescription") ).toBe("Report")
    })

    it("check Block button content",async()=>{
        const settingsButton =   await CommunityObject.getPostSettingsButton();
        await settingsButton.click();
        const blockButton   =  await CommunityObject.getBlockButton();
        expect(await saveButton.getAttribute("contentDescription") ).toBe("Block account")
    })

    it("check Award button content",async()=>{
        const settingsButton =   await CommunityObject.getPostSettingsButton();
        await settingsButton.click();
        const awardButton   =  await CommunityObject.getAwardButton();
        expect(await saveButton.getAttribute("contentDescription") ).toBe("Award details")
    })

    //.............................................................//

    // like and dislike 

    it("click on like button",async()=>{
        const likeButton=await CommunityObject.getLikePostButton();
        await likeButton.click();
        const likedButton= await CommunityObject.getLikedPostButton();
        expect(await likedButton.isDisplayed()).toBe(true);
    })

    it("click on dislike button",async()=>{
        const likeButton=await CommunityObject.getDislikePostButton();
        await likeButton.click();
        const likedButton= await CommunityObject.getDislikedPostButton();
        expect(await likedButton.isDisplayed()).toBe(true);
    })

    //.............................................................//
    // share Tab 
    it("click on share button",async()=>{
        const shareButton=await CommunityObject.getSharePostButton();
        await shareButton.click();
        const shareTab= await CommunityObject.getSharePostTab();
        expect(await shareTab.isDisplayed()).toBe(true);
    })

    it("click on share button and then save",async()=>{
        const shareButton=await CommunityObject.getSharePostButton();
        await shareButton.click();
        const saveButton=await CommunityObject.getSharePostSaveButton();
        await saveButton.click();
        const unsaveButton=await CommunityObject.getSharePostUnsaveButton();
        expect(await unsaveButton.isDisplayed()).toBe(true);
        expect(await unsaveButton.getAttribute("contentDescription")).toBe("Unsave");
    })


    it("click on share button and then Copy Link",async()=>{
        const shareButton=await CommunityObject.getSharePostButton();
        await shareButton.click();
        const CopyButton=await CommunityObject.getSharePostCopyLinkButton();
        expect(await CopyButton.isDisplayed()).toBe(true);
        expect(await CopyButton.getAttribute("contentDescription")).toBe("Copy link");
    })

    it("click on share button and then check share via",async()=>{
        const shareButton=await CommunityObject.getSharePostButton();
        await shareButton.click();
        const shareViaButton=await CommunityObject.getSharePostShareViaButton();
        expect(await shareViaButton.isDisplayed()).toBe(true);
        expect(await shareViaButton.getAttribute("contentDescription")).toBe("Share Via...");
    })
    // profile card
    it("click on user link ",async()=>{
        const user=await CommunityObject.getUserLink();
        await user.click();
        const userCard= await CommunityObject.getProfileCard();
        expect(await userCard.isDisplayed()).toBe(true);
    })


});
