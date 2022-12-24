const {
    returnPOM
} = require('../utils/utils');
module.exports = class CreatePost {

    async getCraetePostButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getImagePostButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getVideoPostButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getTextPostButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getLinkPostButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getPollPostButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getNextButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getPostTitleField() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getPostBodyField() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getPostURLField() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getSearchCommunityField() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getSelectedCommunity() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';

        return returnPOM(selector);
    }
    async getSavePostButton() {
        const selector = await 'new UiSelector().className("android.view.View").instance(8)';
        return returnPOM(selector);
    }
}