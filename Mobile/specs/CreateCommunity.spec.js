const CreateCommunity =require("../pageobjects/CreateCommunity")
const CreateCommunityObject= new CreateCommunity;

describe('Create Community testing', () => {

  
  afterEach(async () => {
    await driver.reset();
  });
  beforeEach(async()=>{
   
  })

    it(" Check Community Name Field ",async ()=>{
        const CommunityName=await CreateCommunityObject.getCommunityNameField();
        expect(await CommunityName.isVisible()).toBe(true);
    })
    it(" Check Community type Button ",async ()=>{
        const Communitytype=await CreateCommunityObject.getCommunitytypeButton();
        expect(await Communitytype.isEnabled()).toBe(true);
        await Communitytype.click();
    })
    it(" Check Community type Button & Public  ",async ()=>{
        const Communitytype=await CreateCommunityObject.getCommunitytypeButton();
        expect(await Communitytype.isEnabled()).toBe(true);
        await Communitytype.click();
        // public
        const Public=await CreateCommunityObject.getPublicButton();
        expect(await Public.isEnabled()).toBe(true);
        await Public.click();
    })
    it(" Check Community type Button & Private  ",async ()=>{
        const Communitytype=await CreateCommunityObject.getCommunitytypeButton();
        expect(await Communitytype.isEnabled()).toBe(true);
        await Communitytype.click();
        // Private
        const Private=await CreateCommunityObject.getPrivateButton();
        expect(await Private.isEnabled()).toBe(true);
        await Private.click();
    })
    it(" Check Community type Button & Restricted  ",async ()=>{
        const Communitytype=await CreateCommunityObject.getCommunitytypeButton();
        expect(await Communitytype.isEnabled()).toBe(true);
        await Communitytype.click();
        // Restricted
        const Restricted=await CreateCommunityObject.getRestrictedButton();
        expect(await Restricted.isEnabled()).toBe(true);
        await Restricted.click();
    })
    it(" Check 18+ Community check Box  ",async ()=>{
        const Community18=await CreateCommunityObject.getplus18CommunityCheckBox();
        expect(await Community18.isEnabled()).toBe(true);
        await Community18.click();
    })
    it(" Check Create Community Button  ",async ()=>{
        const CreateCommunity=await CreateCommunityObject.getCreateCommunityButton();
        expect(await CreateCommunity.isEnabled()).toBe(false);
    })
    it(" Create Public With +18 Community  ",async ()=>{
        // put Name
        const CommunityName=await CreateCommunityObject.getCommunityNameField();
        expect(await CommunityName.isVisible()).toBe(true);
        await CommunityName.addValue("Mahmoud_123");
        // select Public
        const Communitytype=await CreateCommunityObject.getCommunitytypeButton();
        expect(await Communitytype.isEnabled()).toBe(true);
        await Communitytype.click();
        const Public=await CreateCommunityObject.getPublicButton();
        expect(await Public.isEnabled()).toBe(true);
        await Public.click();
        // Select +18
        const Community18=await CreateCommunityObject.getplus18CommunityCheckBox();
        expect(await Community18.isEnabled()).toBe(true);
        await Community18.click();
        // save Creation
        const CreateCommunity=await CreateCommunityObject.getCreateCommunityButton();
        expect(await CreateCommunity.isEnabled()).toBe(true);
        await CreateCommunity.click();
    })
    it(" Create Private Community  ",async ()=>{
        // put Name
        const CommunityName=await CreateCommunityObject.getCommunityNameField();
        expect(await CommunityName.isVisible()).toBe(true);
        await CommunityName.addValue("Mahmoud_123");
        // select Private
        const Communitytype=await CreateCommunityObject.getCommunitytypeButton();
        expect(await Communitytype.isEnabled()).toBe(true);
        await Communitytype.click();
        const Private=await CreateCommunityObject.getPrivateButton();
        expect(await Private.isEnabled()).toBe(true);
        await Private.click();
        // save Creation
        const CreateCommunity=await CreateCommunityObject.getCreateCommunityButton();
        expect(await CreateCommunity.isEnabled()).toBe(true);
        await CreateCommunity.click();
    })
    it(" Create Restricted With +18 Community  ",async ()=>{
        // put Name
        const CommunityName=await CreateCommunityObject.getCommunityNameField();
        expect(await CommunityName.isVisible()).toBe(true);
        await CommunityName.addValue("Mahmoud_123");
        // select Public
        const Communitytype=await CreateCommunityObject.getCommunitytypeButton();
        expect(await Communitytype.isEnabled()).toBe(true);
        await Communitytype.click();
        const Restricted=await CreateCommunityObject.getRestrictedButton();
        expect(await Restricted.isEnabled()).toBe(true);
        await Restricted.click();
        // Select +18
        const Community18=await CreateCommunityObject.getplus18CommunityCheckBox();
        expect(await Community18.isEnabled()).toBe(true);
        await Community18.click();
        // save Creation
        const CreateCommunity=await CreateCommunityObject.getCreateCommunityButton();
        expect(await CreateCommunity.isEnabled()).toBe(true);
        await CreateCommunity.click();
    })


    



})
