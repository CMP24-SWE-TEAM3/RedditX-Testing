const {
    returnPOM,
    returnPOMs,
    ScreenContains
} = require('../utils/utils');
module.exports = class Profile{
    async getPostsTab(){
        const selector= await('new UiSelector().className("android.view.View").instance(12)');
        return returnPOM(selector);
    }

    async getCommentsTab(){
        const selector=await ('new UiSelector().className("android.view.View").instance(13)');
        return returnPOM(selector);
    }

    async getAboutTab(){
        const selector=await ('new UiSelector().className("android.view.View").instance(14)');
        return returnPOM(selector);
    }

    async getLikeButton(){
        const selector=await ('new UiSelector().className("android.widget.Button").instance(2)');
        return returnPOM(selector);
    }


    async getNumberOfLikes(){
        const selector=await ('new UiSelector().className("android.view.View").instance(15)');
        return returnPOM(selector);
    }

    async getAgetDislikeButtonboutTab(){
        const selector=await ('new UiSelector().className("android.widget.Button").instance(3)');
        return returnPOM(selector);
    }


    async getCommentButton(){
        const selector=await ('new UiSelector().className("android.widget.Button").index(6)');
        return returnPOM(selector);
    }

    async getInputField(){
        const selector=await ('new UiSelector().className("android.widget.EditText").text("Your comment")');
        return returnPOM(selector);
    }

    async getCommentArea(){
        const selector=await ('new UiSelector().className("android.widget.EditText").text("Your comment")');
        return returnPOM(selector);
    }

    async getPostCommentButton(){
        const selector=await ('new UiSelector().className("android.widget.Button").instance(1)');
        return returnPOM(selector);
    }

    async getCommentWithText(des){
        const selector=await ('new UiSelector().className("android.view.View").instance(0)');
        return returnPOM(selector);
    }

    async getAboutPost(){
        const selector=await ('new UiSelector().className("android.view.View").instance(20)');
        return returnPOM(selector);
    }

    async getAboutPostDropdown(){
        const selector=await ('new UiSelector().className("android.view.View").instance(4)');
        return returnPOM(selector);
    }



    async getdropdownMarkSpolier(){
        const selector=await ('new UiSelector().className("android.view.View").instance(0)');
        return returnPOM(selector);
    }



    async getdropdownMarkNSFW(){
        const selector=await ('new UiSelector().className("android.view.View").instance(1)');
        return returnPOM(selector);
    }


    async getdropdownLockComments(){
        const selector=await ('new UiSelector().className("android.view.View").instance(2)');
        return returnPOM(selector);
    }


    async getdropdownsticky(){
        const selector=await ('new UiSelector().className("android.view.View").instance(3)');
        return returnPOM(selector);
    }


    async getdropdownRemovePost(){
        const selector=await ('new UiSelector().className("android.view.View").instance(4)');
        return returnPOM(selector);
    }


    async getdropdownMarkSpam(){
        const selector=await ('new UiSelector().className("android.view.View").instance(2)');
        return returnPOM(selector);
    }


    async getdropdownApprove(){
        const selector=await ('new UiSelector().className("android.view.View").instance(1)');
        return returnPOM(selector);
    }



    async getShareButton(){
        const selector=await ('new UiSelector().className("android.widget.Button").instance(5)');
        return returnPOM(selector);
    }


    async getShareDropdown(){
        const selector=await ('new UiSelector().className("android.view.View").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getInviteButton(){
        const selector=await ('new UiSelector().className("android.view.View").instance(1)');
        return returnPOM(selector);
    }


    async getShareProfile(){
        const selector=await ('new UiSelector().className("android.view.View").instance(2)');
        return returnPOM(selector);
    }


    async getSocialLinkButton(){
        const selector=await ('new UiSelector().className("android.view.View").instance(3)');
        return returnPOM(selector);
    }


    async getInstagramButton(){
        const selector=await ('new UiSelector().className("android.view.View").instance(4)');
        return returnPOM(selector);
    }

    //here

    async getShagetUsernameFieldOfSocialLinkreProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getContinueButtonFromSocialLink(){
        const selector=await ('new UiSelector().className("android.view.View").instance(0).index(0)');
        return returnPOM(selector);
    }




    async getFollowersButton(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getSearchFieldOfFollowers(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getResultsButton(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getResultsWindowOfFollowes(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getEditProfileButton(){
        const selector=await ('new UiSelector().className("android.widget.Button").instance(2)');
        return returnPOM(selector);
    }


    async getAreaOfAddNameToProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getContentVisbilitycheckBox(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getAreaOfDescriptonToProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getSaveButtonFromEditProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getShareProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getShareProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    async getShareProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }

    async getShareProfile(){
        const selector=await ('new UiSelector().className("android.widget.EditText").instance(0).index(0)');
        return returnPOM(selector);
    }


    
}