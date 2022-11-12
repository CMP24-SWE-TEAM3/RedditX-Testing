const {returnPOM, returnPOMs} = require('../utils/utils');
module.exports = class Settings {

    // First Screen 
    // General  Section
    async getGeneralName() {
        const selector= await('new UiSelector().className("android.view.View").instance(9)');
        return returnPOM(selector);
    }

    async getAccountSettingsButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(10)');
        return returnPOM(selector);
    }


    // PREMIUM

    async getPremiumName() {
        const selector= await('new UiSelector().className("android.view.View").instance(11)');
        return returnPOM(selector);
    }

    async getAppIconButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(12)');
        return returnPOM(selector);
        //Change app icon
    }

    async getStyleAvaterButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(13)');
        return returnPOM(selector);
        //Style Avatar
    }

    //ABOUT
    async getAboutName() {
        const selector= await('new UiSelector().className("android.view.View").instance(14)');
        return returnPOM(selector);
        //ABOUT
    }

    async getContentPolicyButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(15)');
        return returnPOM(selector);
        //Content policy
    }

    async getPrivacypolicyButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(16)');
        return returnPOM(selector);
        //Privacy policy
    }

    async getUserAgreementButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(17)');
        return returnPOM(selector);
        //User agreement
    }

    //SUPPORT
    async getSupportName() {
        const selector= await('new UiSelector().className("android.view.View").instance(18)');
        return returnPOM(selector);
        //SUPPORT
    }

    async getHelpCenterButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(19)');
        return returnPOM(selector);
        //Help center
    }

    async getReportIssueButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(20)');
        return returnPOM(selector);
        //Report an issue
    }

    // account settings screen


    async getSwitchAccountButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(10)');
        return returnPOM(selector);
    }

    async getSwitchAccountPrompet() {
        const selector= await('new UiSelector().className("android.view.View").instance(5)');
        return returnPOM(selector);
        
    }

    async getConnectedAccountsButton() {
        const selector= await('new UiSelector().className("android.widget.Button").instance(0)');
        return returnPOM(selector);
    }

    async getUpdateEmailAddressButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(11)');
        return returnPOM(selector);
    }

    async getChangePasswordButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(12)');
        return returnPOM(selector);
    }

    async getMangeEmailButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(16)');
        return returnPOM(selector);
    }

    async getUpdateEmailAddressPageTitle(){
        const selector= await('new UiSelector().className("android.view.View").instance(6)');
        return returnPOM(selector);
        //Update email address
    }

    async getEmailAddressField(){
        const selector= await('new UiSelector().className("android.widget.EditText")');
        return returnPOMs(selector);
        //Update email address
    }

    async getRedditPassword(){
        const selector= await('new UiSelector().className("android.widget.EditText")');
        return returnPOMs(selector);
        //Update email address
    }

    async getChangePasswordPageTitle(){
        const selector= await('new UiSelector().className("android.widget.EditText")');
        return returnPOM(selector);
    }

    async getChangePasswordField(){
        const selector= await('new UiSelector().className("android.widget.EditText")');
        return returnPOM(selector);
    }

    async getNewPasswordField(){
        const selector= await('new UiSelector().className("android.widget.EditText")');
        return returnPOM(selector);
    }

    async getConfirmPasswordField(){
        const selector= await('new UiSelector().className("android.widget.EditText")');
        return returnPOM(selector);
    }


    async getSaveButton(){
        const selector= await('new UiSelector().className("android.widget.Button")');
        return returnPOMs(selector);
    }

    async getCancelButton(){
        const selector= await('new UiSelector().className("android.widget.Button")');
        return returnPOMs(selector);
    }

    async allowPeopleToFollowSwtich(){
        const selector= await('new UiSelector().className("android.widget.Switch").instance(0)');
        return returnPOM(selector);
    }
// 

    async manageEmailButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(16)');
        return returnPOM(selector);
    }
    

    async backButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(5)');
        return returnPOM(selector);
    }

    async inboxMessage(){
        const selector= await('new UiSelector().className("android.widget.Switch").instance(0)');
        return returnPOM(selector);
    }

    async allowChatManage(){
        const selector= await('new UiSelector().className("android.widget.Switch").instance(1)');
        return returnPOM(selector);
    }

    async disableButton(){
        const selector= await('new UiSelector().className("android.widget.Switch").instance(7).index(0)');
        return returnPOM(selector);
    }

}