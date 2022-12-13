
import { Profile } from "../../support/page-objects";
import {newPosts,topPosts} from "../../Utils/Profile/Profile"
describe("Test profile page",()=>{
    it("test the new posts",()=>{
        newPosts();
    })
    it("test the new posts",()=>{
        topPosts();
    })
})


export default new Profile();