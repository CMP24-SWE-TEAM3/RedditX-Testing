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