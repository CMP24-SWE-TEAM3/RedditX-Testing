const Settings =require("../pageobjects/Settings");
const Profile =require("../pageobjects/Profile");
const Login = require('../pageobjects/Login');
const Home = require('../pageobjects/Home');
const HomePage= new Home();
const LoginPOM = new Login();
const ProfileObject=new Profile();
const {ScreenContains}=require("../utils/utils");
const Data=require("../fixtures/Data.json");
const SettingsObject= new Settings();
describe("test Settings",()=>{
    afterEach(async()=>{
        await driver.reset();
    })

    beforeEach(async ()=>{
        const contineuButton=await  LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const usernameField=await LoginPOM.getUsernameField();
        await usernameField.addValue("mahmoud_reda");
        const passwordField=await LoginPOM.getPasswordField();
        await passwordField.addValue("123456789");
        const loginButton =await LoginPOM.getLoginButton();
        await loginButton.click();
        driver.setImplicitTimeout(5000)
        const bar=await HomePage.getUserBar();
        await bar.click();
        const settings=await  HomePage.getSettings();
        await settings.click();

    })

    it("test Headers of the Sections",async ()=>{
        const general=await SettingsObject.getGeneralName();
        const premium=await SettingsObject.getPremiumName();
        const about=await SettingsObject.getAboutName();
        const support=await SettingsObject.getSupportName();

        expect(await general.getAttribute("contentDescription")).toBe("GENERAL")
        expect(await premium.getAttribute("contentDescription")).toBe("PREMIUM")
        expect(await about.getAttribute("contentDescription")).toBe("ABOUT")
        expect(await support.getAttribute("contentDescription")).toBe("SUPPORT")
    })

    it("test content of General buttons",async()=>{
        const accountSettings=await SettingsObject.getAccountSettingsButton();
        expect(await accountSettings.getAttribute("contentDescription")).toBe("Account settings for u/mahmoud_reda")
    })

    it("test content of premium buttons",async()=>{
        const appIcon=await SettingsObject.getAppIconButton();
        const avatar=await SettingsObject.getStyleAvaterButton();
        expect(await appIcon.getAttribute("contentDescription")).toBe("Change app icon")
        expect(await avatar.getAttribute("contentDescription")).toBe("Style Avatar")
    })

    it("test content of about buttons",async()=>{
        const contentPolicy=await SettingsObject.getContentPolicyButton();
        const privacyPolicy=await SettingsObject.getPrivacypolicyButton();
        const userAgreement=await SettingsObject.getUserAgreementButton();
        expect(await contentPolicy.getAttribute("contentDescription")).toBe("Content policy")
        expect(await privacyPolicy.getAttribute("contentDescription")).toBe("Privacy policy")
        expect(await userAgreement.getAttribute("contentDescription")).toBe("User agreement")
    })

    it("test content of support buttons",async()=>{
        const helpCenter=await SettingsObject.getHelpCenterButton();
        const report=await SettingsObject.getReportIssueButton();
        expect(await helpCenter.getAttribute("contentDescription")).toBe("Help center")
        expect(await report.getAttribute("contentDescription")).toBe("Report an issue")
    })

    it("click on the account settings and then click on the switch account button",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const switchAccountButton= await SettingsObject.getSwitchAccountButton();
        await switchAccountButton.click();
        const switchPrompet= await SettingsObject.getSwitchAccountPrompet();
        expect(await switchPrompet.isEnabled()).toBe(true);
    })


    it("click on the account settings and then click connect with google account",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const connectedAccountButton= await SettingsObject.getConnectedAccountsButton();
        await connectedAccountButton.click();
        expect(await connectedAccountButton.getAttribute("contentDescription")).toBe("Disconnect");
    })


    it("click on the account settings and then click update email address",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const updateEmailAddress= await SettingsObject.getUpdateEmailAddressButton();
        await updateEmailAddress.click();
        const updateEmailAddressPageTitle=await SettingsObject.getUpdateEmailAddressPageTitle();
        expect(await updateEmailAddressPageTitle.getAttribute("contentDescription")).toBe("Update email address")
    })

    it("click on the account settings and then click update email and then check save button",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const updateEmailAddress= await SettingsObject.getUpdateEmailAddressButton();
        await updateEmailAddress.click();
        const saveButton=await SettingsObject.getSaveButton()
        for(var i =0;i<saveButton.length;i++)
        {
            var text= await saveButton[i].getAttribute("contentDescription");
            if(text =='Save')
                {
                    expect(text).toBe("Save");
                    break;
                }
            else if(text!='Save'&&i==(saveButton.length-1))
                {expect(true).toBe(false);}
        }
        if(saveButton.length==0)
        {
            expect(true).toBe(false);
        }
    })

    it("click on the account settings and then click update email and then check cancel button",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const updateEmailAddress= await SettingsObject.getUpdateEmailAddressButton();
        await updateEmailAddress.click();
        const cancelButton=await SettingsObject.getCancelButton()
        for(var i =0;i<cancelButton.length;i++)
        {
            var text= await cancelButton[i].getAttribute("contentDescription");
            if(text =='Cancel')
                {
                    expect(text).toBe("Cancel");
                    break;
                }
            else if(text!='Cancel'&&i==(cancelButton.length-1))
                {expect(true).toBe(false);}
        }
        if(cancelButton.length==0)
        {
            expect(true).toBe(false);
        }
        
    })



    it("click on the account settings and then click update email address and check the email field",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const emailField=await SettingsObject.getEmailAddressField();
        for(var i =0;i<emailField.length;i++)
        {
            var text= await emailField[i].getAttribute("text");
            if(text == 'New email address')
                {
                    expect(text).toBe("New email address");
                    break;
                }
            else if(text != 'New email address'&&i==(emailField.length-1))
                {expect(true).toBe(false);}
        }
    })

    it("click on the account settings and then click update email address and check the password field",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const passwordField= await SettingsObject.getRedditPassword();
        for(var i =0;i<passwordField.length;i++)
        {
            var text= await passwordField[i].getAttribute("text");
            if(text =='Reddit Password')
                {
                    expect(text).toBe("Reddit Password");
                    break;
                }
            else if(text!='Reddit Password'&&i==(passwordField.length-1))
                {expect(true).toBe(false);}
        }
    })
    




    it("click on the account settings and then click change password",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const updateEmailAddressPageTitle=await SettingsObject.getUpdateEmailAddressPageTitle();
        expect(await updateEmailAddressPageTitle.getAttribute("contentDescription")).toBe("Change password")
    })

    it("click on the account settings and then click change password and then check save button",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const saveButton=await SettingsObject.getSaveButton()
        for(var i =0;i<saveButton.length;i++)
        {
            var text= await saveButton[i].getAttribute("contentDescription");
            if(text =='Save')
                {
                    expect(text).toBe("Save");
                    break;
                }
            else if(text!='Save'&&i==(saveButton.length-1))
                {expect(true).toBe(false);}
        }
        if(saveButton.length==0)
        {
            expect(true).toBe(false);
        }
        
    })

    it("click on the account settings and then click change password and then check cancel button",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const cancelButton=await SettingsObject.getCancelButton()
        for(var i =0;i<cancelButton.length;i++)
        {
            var text= await cancelButton[i].getAttribute("contentDescription");
            if(text =='Cancel')
                {
                    expect(text).toBe("Cancel");
                    break;
                }
            else if(text!='Cancel'&&i==(cancelButton.length-1))
                {expect(true).toBe(false);}
        }
        if(cancelButton.length==0)
        {
            expect(true).toBe(false);
        }
        
    })

    it("click on the account settings and then click change password",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const updateEmailAddressPageTitle=await SettingsObject.getUpdateEmailAddressPageTitle();
        expect(await updateEmailAddressPageTitle.getAttribute("contentDescription")).toBe("Change password")
    })

    it("click on the account settings and then check password field",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const passwordField= await SettingsObject.getChangePasswordField();
        expect(await passwordField.getAttribute("text")).toBe("Current password");
    })
    it("click on the account settings and then check new password field",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const passwordField= await SettingsObject.getNewPasswordField();
        expect(await passwordField.getAttribute("text")).toBe("New password");
    })

    it("click on the account settings and then check confirm new password field",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const passwordField= await SettingsObject.getConfirmPasswordField();
        expect(await passwordField.getAttribute("text")).toBe("Confirm new password");
    })
    // check the buttons

    it("write in valid email in update email",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const changePasswordButton= await SettingsObject.getChangePasswordButton();
        await changePasswordButton.click();
        const emailField=await SettingsObject.getEmailAddressField();
        for(var i =0;i<emailField.length;i++)
        {
            var text= await emailField[i].getAttribute("text");
            if(text == 'New email address')
                {
                    await emailField[i].addValue(Data.invalidEmail);
                }
            if(text == 'Reddit Password')
                {
                    await emailField[i].addValue(Data.validPassword);
                }
        }

        const alert =await ScreenContains("Oops, fix your email.");
        expect(alert.isEnabled()).toBe(true);
    })

    it("click on the active follow and the chat and then go to the manage emails and go back",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const allowPeople=await SettingsObject.allowPeopleToFollowSwtich();
        await allowPeople.click();
        const manageEamil= await SettingsObject.manageEmailButton();
        await manageEamil.click();
        const back= await SettingsObject.backButton();
        await back.click();
        expect(await allowPeople.getAttribute("checked")).toBe("true");
    })

    it(" go to the manage emails  and click some switches  and go back and enter again",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const manageEamil= await SettingsObject.manageEmailButton();
        await manageEamil.click();
        const inbox=await SettingsObject.inboxMessage();
        await inbox.click();
        const allowChat=await SettingsObject.allowChatManage();
        await allowChat.click();
        const back= await SettingsObject.backButton();
        await back.click();
        await manageEamil.click();
        expect(await inbox.getAttribute("checked")).toBe("true");
        expect(await allowChat.getAttribute("checked")).toBe("true");
    })


    it.skip("click the disable button and then click on the switch ",async()=>{
        const accountSettingsButton=await SettingsObject.getAccountSettingsButton();
        await accountSettingsButton.click();
        const manageEamil= await SettingsObject.manageEmailButton();
        await manageEamil.click();
        const inbox=await SettingsObject.inboxMessage();
        await inbox.click();
        const allowChat=await SettingsObject.allowChatManage();
        await allowChat.click();
        await inbox.click();
        const disableButton=await SettingsObject.disableButton();
        await disableButton.click();
        await allowChat.click();
        expect(await inbox.getAttribute("checked")).toBe("false");
        expect(await allowChat.getAttribute("checked")).toBe("true");
    })
})