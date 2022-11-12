const {returnPOM} = require('../utils/utils');
module.exports = class Community {

    async getCommunityName() {
        const selector= await('new UiSelector().className("android.view.View").instance(10)');
        return returnPOM(selector);
    }

    async getJoinButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(11)');
        return returnPOM(selector);
    }

    async getJoinedButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(12)');
        return returnPOM(selector);
    }

    async getPrompetWindow() {
        const selector= await('new UiSelector().className("android.view.View").instance(4).index(0)');
        return returnPOM(selector);
    }

    async getPrompetWindowContent() {
        const selector= await('new UiSelector().className("android.view.View").instance(7).index(0)');
        return returnPOM(selector);
    }

    async getCancelButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(8)');
        return returnPOM(selector);
    }

    async getLeaveButton() {
        const selector= await('new UiSelector().className("android.view.View").instance(9)');
        return returnPOM(selector);
    }

    async getJoinAlert() {
        const selector= await('new UiSelector().text("you have joined the r/Art community")');
        return returnPOM(selector);
    }

    async getDescriptionCard(){
        const selector= await('new UiSelector().className("android.view.View").instance(14)');
        return returnPOM(selector);
        //[40,502][680,640]
        // [40,502][680,800]
        
    }

    async getSettingsButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(8).index(2).description("Show menu")');
        return returnPOM(selector);
    }

    async getDropdown(){
        const selector= await('new UiSelector().className("android.view.View").instance(4).index(0)');
        return returnPOM(selector);
    }

    async getShareCommunityButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(0).index(0)');
        return returnPOM(selector);
        // Share community
    }
    async getAddToCustomButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(1).index(1)');
        return returnPOM(selector);
        // Add to custom feed
    }

    async getChangeUserButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(3).index(3)');
        return returnPOM(selector);
        // Change user flair
    }

    async getCommunityInfoButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(2).index(2)');
        return returnPOM(selector);
        // Community info
    }

    async getContactModeButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(4).index(4)');
        return returnPOM(selector);
        // Contact mods
    }

    async getAddToHomeButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(5).index(5)');
        return returnPOM(selector);
        // Add to Home screen
    }



    // post view

    async getPostViewButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(3)');
        return returnPOM(selector);
    }

    async getPostViewButtonTwo(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(1)');
        return returnPOM(selector);
    }


    async getPostViewTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(3).index(0)');
        return returnPOM(selector);
    }

    async getPostFirstTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(7).index(0).description("Card")');
        return returnPOM(selector);
    }

    async getPostSecondTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(8).index(1).description("Classic")');
        return returnPOM(selector);
    }

    async getPostImageClassic(){
        const selector= await('new UiSelector().className("android.view.View").instance(17).index(0)');
        return returnPOM(selector);
        //[0,640][720,1202] classic 562
        //[0,804][720,1128] card
    }

    async getPostImageCard(){
        const selector= await('new UiSelector().className("android.view.View").instance(20).index(0)');
        return returnPOM(selector);
        //[0,640][720,1202] classic
        //[0,804][720,1128] Card
    }

    async getPostSettingsButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(23).index(2)');
        return returnPOM(selector);
    }

    async getPostSettingsTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(4).index(0)');
        return returnPOM(selector);
    }

    async getSaveButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(0).index(0)');
        return returnPOM(selector);
    }

    async getUnsaveButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(0).index(0)');
        return returnPOM(selector);
    }

    async getHideButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(1)');
        return returnPOM(selector);
    }

    async getReportButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(2).index(2)');
        return returnPOM(selector);
    }

    async getBlockButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(3).index(3)');
        return returnPOM(selector);
    }

    async getAwardButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(4).index(4)');
        return returnPOM(selector);
    }

    async getLikePostButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(0)');
        return returnPOM(selector);
    }

    async getLikedPostButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(7).index(2)');
        return returnPOM(selector);
    }

    async getDislikePostButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(2).index(1)');
        return returnPOM(selector);
    }

    async getDislikedPostButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(3).index(4)');
        return returnPOM(selector);
    }

    async getSharePostButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(4).index(3)');
        return returnPOM(selector);
    }

    async getSharePostTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(3).index(0)');
        return returnPOM(selector);
    }

    async getSharePostSaveButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(5).index(1)');
        return returnPOM(selector);
        //Save
    }

    async getSharePostUnsaveButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(5).index(1)');
        return returnPOM(selector);

    }

    async getSharePostCopyLinkButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(7).index(3)');
        return returnPOM(selector);
        //Copy link
    }

    async getSharePostShareViaButton(){
        const selector= await('new UiSelector().className("android.view.View").instance(6).index(2)');
        return returnPOM(selector);
        //Share Via...
    }

    // profile card
    async getProfileCard(){
        const selector= await('new UiSelector().className("android.view.View").instance(5).index(0)');
        return returnPOM(selector);
    }

    async getUserLink(){
        const selector= await('new UiSelector().className("android.view.View").instance(21).index(0)');
        return returnPOM(selector);
    }


}