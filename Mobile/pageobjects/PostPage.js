const {returnPOM} = require('../utils/utils');
module.exports = class PostPage {
    async getSettingButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1)');
        return returnPOM(selector);
    }
    async getSettingsTab(){
        const selector= await('new UiSelector().className("android.widget.ScrollView").instance(0)');
        return returnPOM(selector);
    }
    async getShareButton(){
        const selector= await('new UiSelector().className("android.widget.Button").index(0)');
        return returnPOM(selector);
    }
    async getSaveButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1)');
        return returnPOM(selector);
    }
    async getCopyButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(2)');
        return returnPOM(selector);
    }
    async getHideButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(3)');
        return returnPOM(selector);
    }
    async getBlockButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(4)');
        return returnPOM(selector);
    }
    async getReportButton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(5)');
        return returnPOM(selector);
    }

    // comment

    async getSettingButtonComment(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(7)');
        return returnPOM(selector);
    }
    async getSettingsTabComment(){
        const selector= await('new UiSelector().className("android.widget.ScrollView").instance(0)');
        return returnPOM(selector);
    }
    async getShareButtonComment(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(0).index(0)');
        return returnPOM(selector);
    }
    async getSaveButtonComment(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1)');
        return returnPOM(selector);
    }
    async getCopyButtonComment(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(3)');
        return returnPOM(selector);
    }
    async getEditButtonComment(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(5)');
        return returnPOM(selector);
    }
    async getNotifyButtonComment(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(2)');
        return returnPOM(selector);
    }
    async getCollapseButtonComment(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(4)');
        return returnPOM(selector);
    }

}