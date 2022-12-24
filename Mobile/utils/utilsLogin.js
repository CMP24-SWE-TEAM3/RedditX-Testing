const Login = require('../pageobjects/Login');
const LoginPOM = new Login();


module.exports.chooseInterests=async()=>{
    const clickMeButton=await LoginPOM.getClickMeButton();
        await clickMeButton.click();
        const womanButton= await LoginPOM.getWomanButton();
        await womanButton.click();
        const firstButton=await LoginPOM.getInterestsButtonOne();
        await firstButton.click();
        const secondButton=await LoginPOM.getInterestsButtonTwo();
        await secondButton.click();
        const threeButton=await LoginPOM.getInterestsButtonThree();
        await threeButton.click();
}


module.exports.login=async()=>{
    const contineuButton=await  LoginPOM.getContineuWithEmail();
    await contineuButton.click();
    const usernameField=await LoginPOM.getUsernameField();
    await usernameField.addValue("mahmoud_reda");
    const passwordField=await LoginPOM.getPasswordField();
    await passwordField.addValue("123456789");
    const loginButton =await LoginPOM.getLoginButton();
    await loginButton.click();
}
