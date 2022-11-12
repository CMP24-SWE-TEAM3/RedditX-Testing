const { FlutterDriver } = require("appium-flutter-driver");
const {byValueKey}=require("appium-flutter-finder")
const SearchPage =require("../pageobjects/SearchPage");
const SearchObject=new SearchPage();
describe('Community Page', () => {
    afterEach(async()=>{
        await driver.reset();
    })
    it("type in Search area",async()=>{
        const searchArea=await SearchObject.getSearchAreaField();
        await searchArea.click();
        const searchField=await SearchObject.getSearchField();
        expect(await searchField.isDisplayed()).toBe(true);
    })
    it("type in Search field and click the search button",async()=>{
        const searchArea=await SearchObject.getSearchAreaField();
        await searchArea.click();
        const searchField=await SearchObject.getSearchField();
        const searchButton=await SearchObject.getSearchbutton();
        await searchField.addValue("hello world");
        await searchButton.click();
    })
    it("type in Search field and click the delete button",async()=>{
        const searchArea=await SearchObject.getSearchAreaField();
        await searchArea.click();
        const deleteButton=await SearchObject.getDeletebutton();
        const searchField=await SearchObject.getSearchField();
        await searchField.addValue("World War");
        await driver.pressKeyCode(66);
        await deleteButton.click();
    })
    it("type in search and click enter",async()=>{
        const searchArea=await SearchObject.getSearchAreaField();
        await searchArea.click();
        const searchField=await SearchObject.getSearchField();
        await searchField.addValue("World War");
        await driver.pressKeyCode(66);
    })

    it("check the content of the post",async()=>{
        const postsContent=await SearchObject.getEachPostContent();
        postsContent.forEach(async(post) => {
            expect(await post.getAttribute("contentDescription")).toContain("World War")});
    })

    it.only("check the content of the Comment",async()=>{
        const commentsTab= await SearchObject.getCommentsTab();
        await commentsTab.click();
        expect(await commentsTab.getAttribute("contentDescription")).toBe("Comments Tab 2 of 4")
        // Comments Tab 2 of 4

        const commentsContent=await SearchObject.getEachPostContent();
        commentsContent.forEach(async(comment) => {
            expect(await comment.getAttribute("contentDescription")).toContain("World War")});
    })

    it("click on join button",async()=>{
        const communitiesButton=await SearchObject.getCommunitiesTab();
        await communitiesButton.click();
        expect(await communitiesButton.getAttribute("contentDescription")).toBe("Communities Tab 3 of 4")
        const joinButtons=await SearchObject.getJoinCommunityButtons();
        var i;
        for(i=0;i<joinButtons.length;i++)
        {
            var des=await joinButtons[i].getAttribute("contentDescription");
            if(des==="Join")
            {
                await joinButtons[i].click();
                break;
            }
        }
        // check the alert and check the des of the button
        const alert= await SearchObject.getJoinAlert();
        expect(await alert.isDisplayed()).toBe(true)
    })


    it("click on joined button",async()=>{
        const communitiesButton=await SearchObject.getCommunitiesTab();
        await communitiesButton.click();
        const joinedButtons=await SearchObject.getJoinCommunityButtons();
        for(var i=0;i<joinedButtons.length;i++)
        {
            var des=await joinedButtons[i].getAttribute("contentDescription");
            if(des==="Joined")
            {
                await joinedButtons[i].click();
                break;
            }
        }
        // check the alert and check the des of the button
        const alert= await SearchObject.getJoinAlert();
        expect(await alert.isDisplayed()).toBe(true)
    })

    it("click on follow button",async()=>{
        const peopleButton=await SearchObject.getPeopleTab();
        await peopleButton.click();
        expect(await peopleButton.getAttribute("contentDescription")).toBe("People Tab 4 of 4")
        const followButtons=await SearchObject.getFollowPeopleButtons();
        var i;
        for(i=0;i<followButtons.length;i++)
        {
            var des=await followButtons[i].getAttribute("contentDescription");
            if(des==="Follow")
            {
                await followButtons[i].click();
                break;
            }
        }
        // check the alert and check the des of the button
        const alert= await SearchObject.getJoinAlert();
        expect(await alert.isDisplayed()).toBe(true)
    })


    it("click on followed button",async()=>{
        const peopleButton=await SearchObject.getPeopleTab();
        await peopleButton.click();
        const followedButtons=await SearchObject.getFollowPeopleButtons();
        for(var i=0;i<followedButtons.length;i++)
        {
            var des=await followedButtons[i].getAttribute("contentDescription");
            if(des==="UnFollow")
            {
                await followedButtons[i].click();
                break;
            }
        }
        // check the alert and check the des of the button
        const alert= await SearchObject.getJoinAlert();
        expect(await alert.isDisplayed()).toBe(true)
    })
})