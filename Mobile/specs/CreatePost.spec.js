const CreatePost =require("../pageobjects/CreatePost")
const {login} =require("../utils/utilsLogin")
const CreatePostObject= new CreatePost;

describe('Create Community testing', () => {

  
  afterEach(async () => {
    await driver.reset();
  });
  beforeEach(async()=>{
    await login();
    const CreatePostButton=await CreatePostObject.getCraetePostButton();
    expect(await CreatePostButton.isEnabled()).toBe(true);
    await CreatePostButton.click();
  })

    it(" Check Image Post Button ",async ()=>{
        const ImageButton=await CreatePostObject.getImagePostButton();
        expect(await ImageButton.isEnabled()).toBe(true);
        await ImageButton.click();
    })
    it(" Check Video Post Button ",async ()=>{
        const VideoButton=await CreatePostObject.getVideoPostButton();
        expect(await VideoButton.isEnabled()).toBe(true);
        await VideoButton.click();
    })
    it(" Check Text Post Button ",async ()=>{
        const TextButton=await CreatePostObject.getTextPostButton();
        expect(await TextButton.isEnabled()).toBe(true);
        await TextButton.click();
    })
    it(" Check Link Post Button ",async ()=>{
        const LinkButton=await CreatePostObject.getLinkPostButton();
        expect(await LinkButton.isEnabled()).toBe(true);
        await LinkButton.click();
    })
    it(" Check Poll Post Button ",async ()=>{
        const PollButton=await CreatePostObject.getPollPostButton();
        expect(await PollButton.isEnabled()).toBe(true);
        await PollButton.click();
    })
    it(" Check Next Button to be Disabled ",async ()=>{
        const NextButton=await CreatePostObject.getNextButton();
        expect(await NextButton.isEnabled()).toBe(false);
    })
    it(" Create Unvalid(by adding Body without Title) Text Post ",async ()=>{
        const TextButton=await CreatePostObject.getTextPostButton();
        expect(await TextButton.isEnabled()).toBe(true);
        await TextButton.click();
        // check that Next is Desibled
        const NextButton=await CreatePostObject.getNextButton();
        expect(await NextButton.isEnabled()).toBe(false);
        // add body to the Post(optional)
        const BodyArea=await CreatePostObject.getPostBodyField();
        expect(await BodyArea.isVisible()).toBe(true);
        await BodyArea.addValue("looooooooooooooool");
        // next is Disabled
        expect(await NextButton.isEnabled()).toBe(false);
    })
    it(" Create valid(by adding Title Only) Text Post ",async ()=>{
        const TextButton=await CreatePostObject.getTextPostButton();
        expect(await TextButton.isEnabled()).toBe(true);
        await TextButton.click();
        // check that Next is Desibled
        const NextButton=await CreatePostObject.getNextButton();
        expect(await NextButton.isEnabled()).toBe(false);
        // add title
        const TitleArea=await CreatePostObject.getPostTitleField();
        expect(await TitleArea.isVisible()).toBe(true);
        await TitleArea.addValue("Fuuun");
        // next is enabled
        expect(await NextButton.isEnabled()).toBe(true);
        // click next
        await NextButton.click();
        // chosse community to post in it by Searchig 
        const SearchCommunity=await CreatePostObject.getSearchCommunityField();
        expect(await SearchCommunity.isVisible()).toBe(true);
        await SearchCommunity.addValue("r/Worldcup");
        // First Selection
        const CommunitySelected=await CreatePostObject.getSelectedCommunity();
        expect(await CommunitySelected.isVisible()).toBe(true);
        await CommunitySelected.click();
        // Click On Post Button
        const SavePost=await CreatePostObject.getSavePostButton();
        expect(await SavePost.isEnabled()).toBe(true);
        await SavePost.click();
    })
    it(" Create Text Post With Body And Title ",async ()=>{
        const TextButton=await CreatePostObject.getTextPostButton();
        expect(await TextButton.isEnabled()).toBe(true);
        await TextButton.click();
        // check that Next is Desibled
        const NextButton=await CreatePostObject.getNextButton();
        expect(await NextButton.isEnabled()).toBe(false);
        // add title
        const TitleArea=await CreatePostObject.getPostTitleField();
        expect(await TitleArea.isVisible()).toBe(true);
        await TitleArea.addValue("Fuuun");
        // next is enabled
        expect(await NextButton.isEnabled()).toBe(true);
        // add body to the Post(optional)
        const BodyArea=await CreatePostObject.getPostBodyField();
        expect(await BodyArea.isVisible()).toBe(true);
        await BodyArea.addValue("looooooooooooooool");
        // click next
        await NextButton.click();
        // chosse community to post in it by Searchig 
        const SearchCommunity=await CreatePostObject.getSearchCommunityField();
        expect(await SearchCommunity.isVisible()).toBe(true);
        await SearchCommunity.addValue("r/Worldcup");
        // First Selection
        const CommunitySelected=await CreatePostObject.getSelectedCommunity();
        expect(await CommunitySelected.isVisible()).toBe(true);
        await CommunitySelected.click();
        // Click On Post Button
        const SavePost=await CreatePostObject.getSavePostButton();
        expect(await SavePost.isEnabled()).toBe(true);
        await SavePost.click();
    })
    it(" Create UnValid Link Post ",async ()=>{
        const LinkButton=await CreatePostObject.getLinkPostButton();
        expect(await LinkButton.isEnabled()).toBe(true);
        await LinkButton.click();
        // check that Next is Desibled
        const NextButton=await CreatePostObject.getNextButton();
        expect(await NextButton.isEnabled()).toBe(false);
        // add title
        const TitleArea=await CreatePostObject.getPostTitleField();
        expect(await TitleArea.isVisible()).toBe(true);
        await TitleArea.addValue("Fuuun");
        // add body to the Post(optional)
        const URLArea=await CreatePostObject.getPostURLField();
        expect(await URLArea.isVisible()).toBe(true);
        await URLArea.addValue("https://");
        // next is Disabled
        expect(await NextButton.isEnabled()).toBe(false);
    })
    it(" Create Valid Link Post ",async ()=>{
        const LinkButton=await CreatePostObject.getLinkPostButton();
        expect(await LinkButton.isEnabled()).toBe(true);
        await LinkButton.click();
        // check that Next is Desibled
        const NextButton=await CreatePostObject.getNextButton();
        expect(await NextButton.isEnabled()).toBe(false);
        // add title
        const TitleArea=await CreatePostObject.getPostTitleField();
        expect(await TitleArea.isVisible()).toBe(true);
        await TitleArea.addValue("Fuuun");
        // add body to the Post(optional)
        const URLArea=await CreatePostObject.getPostURLField();
        expect(await URLArea.isVisible()).toBe(true);
        await URLArea.addValue("https://web.whats");
        // next is enabled
        expect(await NextButton.isEnabled()).toBe(true);
        // click next
        await NextButton.click();
        // chosse community to post in it by Searchig 
        const SearchCommunity=await CreatePostObject.getSearchCommunityField();
        expect(await SearchCommunity.isVisible()).toBe(true);
        await SearchCommunity.addValue("r/Worldcup");
        // First Selection
        const CommunitySelected=await CreatePostObject.getSelectedCommunity();
        expect(await CommunitySelected.isVisible()).toBe(true);
        await CommunitySelected.click();
        // Click On Post Button
        const SavePost=await CreatePostObject.getSavePostButton();
        expect(await SavePost.isEnabled()).toBe(true);
        await SavePost.click();
    })
})
