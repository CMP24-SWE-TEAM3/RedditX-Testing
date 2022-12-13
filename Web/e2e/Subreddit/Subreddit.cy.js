import "cypress-real-events";
import {Subriddet} from "../../support/page-objects";
import { topPosts,newPosts } from "../../Utils/Subreddit/utils";
describe("test Communities Tab",()=>{
    it("test the top posts",()=>{
        topPosts();
    })

    it("test the top posts",()=>{
        newPosts();
    })
})