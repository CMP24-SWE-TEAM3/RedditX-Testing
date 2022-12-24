const {returnPOM} = require('../utils/utils');
module.exports = class Home {
    async getUserIcon(){
        const selector = await 'new UiSelector().className("android.view.View").instance(11)';
        return returnPOM(selector);
    }

    async getUserBar(){
        const selector = await 'new UiSelector().className("android.widget.Button").index(5)';
        return returnPOM(selector);
    }
    async getSettings(){
        const selector = await 'new UiSelector().className("android.view.View").instance(11)';
        return returnPOM(selector);
    }

    async getViewProfile(){
        const selector = await 'new UiSelector().className("android.view.View").instance(6)';
        return returnPOM(selector);
    }

    async WritePostButton() {
        const selector = await 'new UiSelector().resourceId("com.cmp.cmplr:id/writePostBtn2")';
        return returnPOM(selector);
    }
    async HomeScreenButton() {
        const selector = await 'new UiSelector().resourceId("com.cmp.cmplr:id/homeScreenFragment")';
        return returnPOM(selector);
    }
    async SearchScreenButton() {
        const selector = await 'new UiSelector().resourceId("com.cmp.cmplr:id/searchScreenFragment")';
        return returnPOM(selector);
    }
    async MessageScreenButton() {
        const selector = await 'new UiSelector().resourceId("com.cmp.cmplr:id/messagesScreenFragment")';
        return returnPOM(selector);
    }
    async ProfileScreenButton() {
        const selector = await 'new UiSelector().resourceId("com.cmp.cmplr:id/profileScreenFragment")';
        return returnPOM(selector);
    }
    async postNotes() {
        const selector = await 'new UiSelector().resourceId("com.cmp.cmplr:id/comments_btn")';
        return returnPOM(selector);
    }
}