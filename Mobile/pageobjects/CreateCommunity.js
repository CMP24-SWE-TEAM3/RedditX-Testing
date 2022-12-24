const {
    returnPOM
} = require('../utils/utils');
module.exports = class CreateCommunity {

    async getCommunityNameField() {
        const selector = await 'new UiSelector().className("android.widget.EditText").text("community_name")';
        return returnPOM(selector);
    }
    async getCommunitytypeButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(15)';
        return returnPOM(selector);
    }
    async getPublicButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';
        return returnPOM(selector);
    }
    async getRestrictedButton(){
        const selector = await 'new UiSelector().className("android.view.View").instance(9)';
        return returnPOM(selector);
    }
    async getPrivateButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(10)';
        return returnPOM(selector);
    }
    async getplus18CommunityCheckBox() {
        const selector = await 'new UiSelector().className("android.widget.Switch").instance(0).index(0)';
        return returnPOM(selector);
    }
    async getCreateCommunityButton() {
        const selector = await 'new UiSelector().className("android.view.View").description("Create a community")';
        return returnPOM(selector);
    }

    async getCreateCommunityIcon(){
        const selector = await 'new UiSelector().className("android.widget.Button").index(5)';
        return returnPOM(selector);
    }

    async getDropDown(){
        const selector = await 'new UiSelector().className("android.view.View").instance(9).index(4)';
        return returnPOM(selector);
    }
}