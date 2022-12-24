const RightDrawer =require("../pageobjects/RightDrawer")
const RightDrawerObject= new RightDrawer;

describe('RightDrawer testing', () => {

  
  afterEach(async () => {
    await driver.reset();
  });
  beforeEach(async()=>{
    
  })
    it(" Check RedditRecap Button ",async ()=>{
    const RedditRecap=await RightDrawerObject.getRedditRecapButton();
    expect(await RedditRecap.isVisible()).toBe(true);
    expect(await RedditRecap.isEnabled()).toBe(true);
    await RedditRecap.click();
    })
    it(" Check MyProfile Button ",async ()=>{
        const MyProfile=await RightDrawerObject.getMyProfileButton();
        expect(await MyProfile.isVisible()).toBe(true);
        expect(await MyProfile.isEnabled()).toBe(true);
        await MyProfile.click();
    })
    it(" Check CreateCommunity Button ",async ()=>{
        const CreateCommunity=await RightDrawerObject.getCreateCommunityButton();
        expect(await CreateCommunity.isVisible()).toBe(true);
        expect(await CreateCommunity.isEnabled()).toBe(true);
        await CreateCommunity.click();
    })
    it(" Check Vault Button ",async ()=>{
        const Vault=await RightDrawerObject.getVaultButton();
        expect(await Vault.isVisible()).toBe(true);
        expect(await Vault.isEnabled()).toBe(true);
        await Vault.click();
    })
    it(" Check RedditCoins Button ",async ()=>{
        const RedditCoins=await RightDrawerObject.getRedditCoinsButton();
        expect(await RedditCoins.isVisible()).toBe(true);
        expect(await RedditCoins.isEnabled()).toBe(true);
        await RedditCoins.click();
    })
    it(" Check RedditPremium Button ",async ()=>{
        const RedditPremium=await RightDrawerObject.getRedditPremiumButton();
        expect(await RedditPremium.isVisible()).toBe(true);
        expect(await RedditPremium.isEnabled()).toBe(true);
        await RedditPremium.click();
    })
    it(" Check Saved Button ",async ()=>{
        const Saved=await RightDrawerObject.getSavedButton();
        expect(await Saved.isVisible()).toBe(true);
        expect(await Saved.isEnabled()).toBe(true);
        await Saved.click();
    })
    it(" Check History Button ",async ()=>{
        const History=await RightDrawerObject.getHistoryButton();
        expect(await History.isVisible()).toBe(true);
        expect(await History.isEnabled()).toBe(true);
        await History.click();
    })
    it(" Check Settings Button ",async ()=>{
        const Settings=await RightDrawerObject.getSettingsButton();
        expect(await Settings.isVisible()).toBe(true);
        expect(await Settings.isEnabled()).toBe(true);
        await Settings.click();
    })
})
