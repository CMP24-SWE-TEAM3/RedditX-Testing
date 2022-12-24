export { default as HomePage } from "./home-page";
export { default as CommunityLeaderBoardPage } from "./community-learderboard";
export { default as SignUpPage } from "./sign-up";
export { default as LoginPage } from "./login-page";
export { default as ForgetPassword } from "./forget-password";
export { default as ForgetUsername } from "./forget-username";

export {default as SearchPagePostsTab} from "./postsTab";
export {default as SearchPagePeopleTab} from "./peopleTab";
export {default as SearchPageCommunityTab} from "./communitiesTab";
export {default as SearchPageCommentsTab} from "./commentsTab";
export { default as PostPage } from "./post-page";
export { default as MediaUpload } from "./media-upload";

import "cypress-real-events/support";
import "cypress-file-upload";
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })





//export {default as Subreddit} from "./subreddit";
//export {default as Profile} from "./profile";

