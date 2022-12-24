const {
    returnPOM
} = require('../utils/utils');
module.exports = class Login {

    async signupButtonPOM() {
        const selector = await 'new UiSelector().className("android.widget.Button").description("Continue")';
        return returnPOM(selector);
    }

    async emailTextBoxPOM() {
        const selector = await 'new UiSelector().className("android.widget.EditText").text("Email")';
        return returnPOM(selector);
    }

    async passwordTextBoxPOM() {
        const selector = await 'new UiSelector().className("android.widget.EditText").text("Password").index(3)';
        return returnPOM(selector);
    }

    async usernameTextBoxPOM() {
        const selector = await 'new UiSelector().className("android.widget.EditText").text("Username")';
        return returnPOM(selector);
    }

    async signupEmailErrorPOM() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';
        return returnPOM(selector);
        //Not a valid email address
    }

    async signupUsernameErrorPOM(text) {
        const selector = await `new UiSelector().className("android.view.View").description("${text}")`;
        return returnPOM(selector);
        // Username must be between 3 and 20 characters
        //Letters, numbers, dashes, and underscores only. please try again without symbols.
    }

    async signupPasswordErrorPOM() {
        const selector = await 'new UiSelector().className("android.view.View").description("the password must be at least 8 characters")';
        return returnPOM(selector);
        //the password must be at least 8 characters
    }

    async getShowPasswordButton(){
        const selector = await 'new UiSelector().className("android.widget.Button").instance(2).index(0)';
        return returnPOM(selector);
    }
}