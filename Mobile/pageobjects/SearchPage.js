const {returnPOM,returnPOMs} = require('../utils/utils');
const {byValueKey}=require("appium-flutter-finder")
module.exports = class SearchPage {
    async getSearchAreaField(){
        const selector= await('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }

    async getSearchField(){
        const selector= await('new UiSelector().className("android.widget.EditText").instance(0).index(1)');
        return returnPOM(selector);
    }

    async getSearchbutton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(0).index(0)');
        return returnPOM(selector);
    }
    // not got

    async getPostsTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(4)');
        return returnPOM(selector);
    }
    async getCommentsTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(5)');
        return returnPOM(selector);
    }

    async getCommunitiesTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(6)');
        return returnPOM(selector);
    }


    async getPeopleTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(7)');
        return returnPOM(selector);
    }


    async getDeletebutton(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(0)');
        return returnPOM(selector);
    }

    async getEachPostContent(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(0)');
        return returnPOMs(selector);
    }

    async getEachCommentContent(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(0)');
        return returnPOMs(selector);
    }

    async getJoinCommunityButtons(){
        const selector= await('new UiSelector().className("android.widget.Button").index(0)');
        return returnPOMs(selector);
    }

    async getFollowPeopleButtons(){
        const selector= await('new UiSelector().className("android.widget.Button").index(0)');
        return returnPOMs(selector);
    }

    async getJoinAlert(){
        const selector= await('new UiSelector().className("android.widget.Button").instance(1).index(0)');
        return returnPOM(selector);
    }


}