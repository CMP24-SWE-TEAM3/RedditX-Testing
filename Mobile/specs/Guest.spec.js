const Login = require('../pageobjects/Login');
const Data = require('../fixtures/Data.json');
const {
    chooseInterests
} = require('../utils/utilsLogin');
const {
    CreatePasswordDots,
    stateAssertion,
    ScreenContains
} = require('../utils/utils');

const LoginPOM = new Login();

describe('Login', () => {
    beforeEach(async()=>{
        const skipButton=await LoginPOM.getSkipButton();
        await skipButton.click();
    })
    afterEach(async () => {
        await driver.reset();
    });

    it("open and click spik button and will see the click me button",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        expect(await clickMeButton.getAttribute("contentDescription")).toBe("Clickme");
    })

    it("click on the click me button",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const genderWindow= await LoginPOM.getWindowGender();
        expect(await genderWindow.isEnabled()).toBe(true);
    })

    it("click on the click me button and then click on back button",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const backButton= await LoginPOM.getBackButton();
        await backButton.click();
        expect(await clickMeButton.isEnabled()).toBe(true);
    })

    it("click on the click me button and then click on skip button",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const skipButton= await LoginPOM.getSkipGenderButton();
        await skipButton.click();
        const interestsSection= await LoginPOM.getInterestsSection();
        expect(await interestsSection.isEnabled()).toBe(true);
    })

    it("click on the click me button and then click on man button",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const manButton= await LoginPOM.getManButton();
        await manButton.click();
        const interestsSection= await LoginPOM.getInterestsSection();
        expect(await interestsSection.isEnabled()).toBe(true);
    })

    it("click on the click me button and then click on woman button",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const womanButton= await LoginPOM.getWomanButton();
        await womanButton.click();
        const interestsSection= await LoginPOM.getInterestsSection();
        expect(await interestsSection.isEnabled()).toBe(true);
    })

    it("get the interests buttons and choose one to enter",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const womanButton= await LoginPOM.getWomanButton();
        await womanButton.click();
        const firstButton=await LoginPOM.getInterestsButtonOne();
        const selectButton= await LoginPOM.getSelectButton();
        await firstButton.click();
        expect(await selectButton.getAttribute("contentDescription")).toBe("1 of 3 selected");
    })


    it("get the interests buttons and choose two to enter",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const womanButton= await LoginPOM.getWomanButton();
        await womanButton.click();
        const firstButton=await LoginPOM.getInterestsButtonOne();
        await firstButton.click();
        const secondButton=await LoginPOM.getInterestsButtonTwo();
        await secondButton.click();
        const selectButton= await LoginPOM.getSelectButton();
        expect(await selectButton.getAttribute("contentDescription")).toBe("2 of 3 selected");
    })

    it("get the interests buttons and choose two and then remove one ",async()=>{
        const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const womanButton= await LoginPOM.getWomanButton();
        await womanButton.click();
        const firstButton=await LoginPOM.getInterestsButtonOne();
        await firstButton.click();
        const secondButton=await LoginPOM.getInterestsButtonTwo();
        await secondButton.click();
        const selectButton= await LoginPOM.getSelectButton();
        expect(await selectButton.getAttribute("contentDescription")).toBe("2 of 3 selected");
        await secondButton.click();
        expect(await selectButton.getAttribute("contentDescription")).toBe("1 of 3 selected");
    })

    it("get the interests buttons and choose three to enter",async()=>{
        await chooseInterests();
        const contineuButton= await LoginPOM.getContinueButton();
        expect(await contineuButton.isEnabled()).toBe(true);
    })

    it("get the interests buttons and choose three to enter and choose username but invalid 1",async()=>{
        await chooseInterests();
        const contineuButton= await LoginPOM.getContinueButton();
        await contineuButton.click();
        const usernameWindow= await LoginPOM.getChooseUsernameWindow();
        expect(await usernameWindow.isEnabled()).toBe(true)
        const textArea =await LoginPOM.getUsernameTextArea();
        await textArea.addValue(Data.invalidUsername1)
        const continueButton =await LoginPOM.getButtonContineuUsername();
        await continueButton.click();
        const alert=await LoginPOM.getAlertArea();
        expect(await alert.getAttribute("contentDescription")).toBe("Letters, numbers, dashes, and underscores only. please try again without symbols.")
    })

    it("get the interests buttons and choose three to enter and choose username but invalid 1",async()=>{
        await chooseInterests();
        const contineuButton= await LoginPOM.getContinueButton();
        await contineuButton.click();
        const usernameWindow= await LoginPOM.getChooseUsernameWindow();
        expect(await usernameWindow.isEnabled()).toBe(true)
        const textArea =await LoginPOM.getUsernameTextArea();
        await textArea.addValue(Data.invalidUsername1)
        const continueButton =await LoginPOM.getButtonContineuUsername();
        await continueButton.click();
        const alert=await LoginPOM.getAlertArea();
        expect(await alert.getAttribute("contentDescription")).toBe("Letters, numbers, dashes, and underscores only. please try again without symbols.")
    })
    it("get the interests buttons and choose three to enter then see the page with some hints",async()=>{
        await chooseInterests();
        const contineuButton= await LoginPOM.getContinueButton();
        await contineuButton.click();
        const usernameWindow= await LoginPOM.getChooseUsernameWindow();
        expect(await usernameWindow.isEnabled()).toBe(true)
        const alert=await LoginPOM.getAlertArea();
        expect(await alert.getAttribute("contentDescription")).toBe("This will be your name forever, so make sure it feels like you.")
    })

    it("get the interests buttons and choose three to enter and choose username but invalid 2",async()=>{
        await chooseInterests();
        const contineuButton= await LoginPOM.getContinueButton();
        await contineuButton.click();
        const usernameWindow= await LoginPOM.getChooseUsernameWindow();
        expect(await usernameWindow.isEnabled()).toBe(true)
        const textArea =await LoginPOM.getUsernameTextArea();
        await textArea.addValue(Data.invalidUsername2)
        const continueButton =await LoginPOM.getButtonContineuUsername();
        await continueButton.click();
        const alert=await LoginPOM.getAlertArea();
        expect(await alert.getAttribute("contentDescription")).toBe("Letters, numbers, dashes, and underscores only. please try again without symbols.")
    })

    it("get the interests buttons and choose three to enter and choose username but invalid 3",async()=>{
        await chooseInterests();
        const contineuButton= await LoginPOM.getContinueButton();
        await contineuButton.click();
        const usernameWindow= await LoginPOM.getChooseUsernameWindow();
        expect(await usernameWindow.isEnabled()).toBe(true)
        const textArea =await LoginPOM.getUsernameTextArea();
        await textArea.addValue(Data.invalidUsername3)
        const continueButton =await LoginPOM.getButtonContineuUsername();
        await continueButton.click();
        const alert=await LoginPOM.getAlertArea();
        expect(await alert.getAttribute("contentDescription")).toBe("Username must be between 3 and 20 characters")
    })

    it("get the interests buttons and choose three to enter and choose username but invalid 4",async()=>{
        await chooseInterests();
        const contineuButton= await LoginPOM.getContinueButton();
        await contineuButton.click();
        const usernameWindow= await LoginPOM.getChooseUsernameWindow();
        expect(await usernameWindow.isEnabled()).toBe(true)
        const textArea =await LoginPOM.getUsernameTextArea();
        await textArea.addValue(Data.invalidUsername4)
        const continueButton =await LoginPOM.getButtonContineuUsername();
        await continueButton.click();
        const alert=await LoginPOM.getAlertArea();
        expect(await alert.getAttribute("contentDescription")).toBe("Username must be between 3 and 20 characters")
    })

    // login inputs

});


