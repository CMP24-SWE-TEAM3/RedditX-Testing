const {returnPOM, returnPOMs} = require('../utils/utils');
module.exports = class Login {
    async getSkipButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(0).index(1)';
        return returnPOM(selector);
    }
    async getClickMeButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(0).index(0)';
        return returnPOM(selector);
    }

    async getWindowGender(){
        const selector = await 'new UiSelector().className("android.view.View").instance(0).index(0)';
        return returnPOM(selector);
    }

    async getInterestsSection(){
        const selector = await 'new UiSelector().className("android.view.View").index(1)';
        return returnPOM(selector);
    }

    async getSkipGenderButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(1)';
        return returnPOM(selector);
    }
    async getSelectButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(20)';
        return returnPOM(selector);
    }


    async getInterestsButtonOne(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(1)';
        return returnPOM(selector);
    }

    

    async getInterestsButtonTwo(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(2)';
        return returnPOM(selector);
    }

    async getInterestsButtonThree(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(3)';
        return returnPOM(selector);
    }

    async getContinueButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").description("Continue").clickable(true)';
        return returnPOM(selector);
    }

    async getBackButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(0).index(0)';
        return returnPOM(selector);

    }

    async getManButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").index(3)';
        return returnPOM(selector);
        //Man
    }

    async getWomanButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").index(4)';
        return returnPOM(selector);
        //Woman
    }

    async getChooseUsernameWindow(){
        const selector = await 'new UiSelector().className("android.view.View").instance(5)';
        return returnPOM(selector);
    }

    async getUsernameTextArea(){
        const selector = await 'new UiSelector().className("android.widget.EditText").instance(0).text("username")';
        return returnPOM(selector);
    }

    async getAlertArea(){
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';
        return returnPOM(selector);
    }
    async getButtonContineuUsername(){
        const selector = await 'new UiSelector().className("android.widget.Button").description("Continue")';
        return returnPOM(selector);
    }
    async getContineuWithEmail(){
        const selector = await 'new UiSelector().className("android.widget.ImageView").description("Continue with email")';
        return returnPOM(selector);
    }
    async getUsernameField(){
        const selector = await 'new UiSelector().className("android.widget.EditText").text("Username")';
        return returnPOM(selector);
    }

    async getPasswordField(){
        const selector = await 'new UiSelector().className("android.widget.EditText").text("Password")';
        return returnPOM(selector);
    }

    async getShowPasswordButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(2).index(0)';
        return returnPOM(selector);
    }

    async getLoginButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").description("Continue")';
        return returnPOM(selector);
    }
    async signupButton(){
        const selector = await `new UiSelector().className("android.widget.Button").description("Sign Up")`;
        return returnPOM(selector);
    }
    async signupWindow(){
        const selector = await `new UiSelector().className("android.view.View").instance(6)`;
        return returnPOM(selector);
    }
}