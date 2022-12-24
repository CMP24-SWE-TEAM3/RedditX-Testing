const Login = require('../pageobjects/Login');
const Data = require('../fixtures/Data.json');
const LoginPOM = new Login();
describe("test login page",()=>{
    
    afterEach(async () => {
        await driver.reset();
    });
    it("Testing with valid data",async()=>{
        const contineuButton =await LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const usernameField=await LoginPOM.getUsernameField();
        await usernameField.addValue(Data.validUsername);
        const passwordField=await LoginPOM.getPasswordField();
        await passwordField.addValue(Data.validPassword);
        const loginButton =await LoginPOM.getLoginButton();
        expect(await loginButton.isEnabled()).toBe(true);
    })


    it("test nonempty username with empty password  ",async()=>{
        const contineuButton =await LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const usernameField=await LoginPOM.getUsernameField();
        await usernameField.addValue(Data.validUsername);
        const loginButton =await LoginPOM.getLoginButton();
        //
        expect(await loginButton.isEnabled()).toBe(false);
    })

    it("test empty username with nonempty password  ",async()=>{
        const contineuButton =await LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const passwordField=await LoginPOM.getPasswordField();
        await passwordField.addValue(Data.validPassword);
        const loginButton =await LoginPOM.getLoginButton();
        //
        expect(await loginButton.isEnabled()).toBe(false);
    })

    it("check show password button  ",async()=>{
        const contineuButton =await LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const passwordField=await LoginPOM.getPasswordField();
        await passwordField.addValue("hram");
        expect(await passwordField.getText()).toBe("••••, Password");
    })

    it("check show password button  ",async()=>{
        const contineuButton =await LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const passwordField=await LoginPOM.getPasswordField();
        await passwordField.addValue("hram");
        const showButton =await LoginPOM.getShowPasswordButton();
        await showButton.click();
        //
        expect(await showButton.getText()).toBe("hram, Password");
    })

    it("click on the signup button ",async()=>{
        const contineuButton =await LoginPOM.getContineuWithEmail();
        await contineuButton.click();
        const signupButton= await LoginPOM.signupButton();
        await signupButton.click();
        const signupWindow= await LoginPOM.signupWindow();
        expect(await signupWindow.isEnabled()).toBe(true);
    })

})