const PostPage =require("../pageobjects/PostPage");
const PostObject=new PostPage();
describe('Community Page', () => {
    afterEach(async()=>{
        await driver.reset();
    })
    it("click on settings button",async()=>{
        const settingsButton=await PostObject.getSettingButton();
        const settingsTab=await PostObject.getSettingsTab();
        await settingsButton.click();
        expect(await settingsTab.isDisplayed()).toBe(true);
    })

    it("test  share button content",async()=>{
        const settingsButton=await PostObject.getSettingButton();
        await settingsButton.click();
        const buttonShare=await PostObject.getShareButton();
        //
        expect(await buttonShare.isEnabled()).toBe(true);
    })

    it("test  save button content",async()=>{
        const settingsButton=await PostObject.getSettingButton();
        await settingsButton.click();
        const buttonsave=await PostObject.getSaveButton();
        //
        expect(await buttonsave.getAttribute("contentDescription")).toBe("Save");
    })

    it("test  copy button content",async()=>{
        const settingsButton=await PostObject.getSettingButton();
        await settingsButton.click();
        const buttonCopy=await PostObject.getCopyButton();
        //
        expect(await buttonCopy.getAttribute("contentDescription")).toBe("Copy text");
    })

    it("test  Hide button content",async()=>{
        const settingsButton=await PostObject.getSettingButton();
        await settingsButton.click();
        const buttonHide=await PostObject.getHideButton();
        //
        expect(await buttonHide.getAttribute("contentDescription")).toBe("Hide");
    })


    it("test  Block button content",async()=>{
        const settingsButton=await PostObject.getSettingButton();
        await settingsButton.click();
        const buttonBlock=await PostObject.getBlockButton();
        //
        expect(await buttonBlock.getAttribute("contentDescription")).toBe("Block account");
    })

    it("test  Report button content",async()=>{
        const settingsButton=await PostObject.getSettingButton();
        await settingsButton.click();
        const buttonReport=await PostObject.getReportButton();
        //
        expect(await buttonReport.getAttribute("contentDescription")).toBe("Report");
    })

    //comment settings

    it.only("click on settings button of Comment",async()=>{
        const settingsButton=await PostObject.getSettingButtonComment();
        const settingsTab=await PostObject.getSettingsTabComment();
        await settingsButton.click();
        expect(await settingsTab.isDisplayed()).toBe(true);
    })

    it.only("test  share button content",async()=>{
        const settingsButton=await PostObject.getSettingButtonComment();
        await settingsButton.click();
        const buttonShare=await PostObject.getShareButtonComment();
        expect(await buttonShare.getAttribute("contentDescription")).toBe("Share");
    })

    it.only("test  save button content",async()=>{
        const settingsButton=await PostObject.getSettingButtonComment();
        await settingsButton.click();
        const buttonsave=await PostObject.getSaveButtonComment();
        //
        expect(await buttonsave.getAttribute("contentDescription")).toBe("Save");
    })

    it.only("test  copy button content",async()=>{
        const settingsButton=await PostObject.getSettingButtonComment();
        await settingsButton.click();
        const buttonCopy=await PostObject.getCopyButtonComment();
        //
        expect(await buttonCopy.getAttribute("contentDescription")).toBe("Copy text");
    })

    it.only("test  Edit button content",async()=>{
        const settingsButton=await PostObject.getSettingButtonComment();
        await settingsButton.click();
        const buttonEdit=await PostObject.getEditButtonComment();
        //
        expect(await buttonEdit.getAttribute("contentDescription")).toBe("Edit");
    })


    it.only("test  reply notification button content",async()=>{
        const settingsButton=await PostObject.getSettingButtonComment();
        await settingsButton.click();
        const buttonNotification=await PostObject.getNotifyButtonComment();
        //
        expect(await buttonNotification.getAttribute("contentDescription")).toBe("Get reply notifications");
    })

    it.only("test  Collapse button content",async()=>{
        const settingsButton=await PostObject.getSettingButtonComment();
        await settingsButton.click();
        const buttonColl=await PostObject.getCollapseButtonComment();
        //
        expect(await buttonColl.getAttribute("contentDescription")).toBe("Collapse thread");
    })

})