import {PostPage,HomePage,MediaUpload} from "../../support/page-objects"
import { login } from "../../Utils/utils";
import{ attchFile,
        deleteImage,
        checkShownImage,
        checkExtenation,
        checkSuccessAlert,
        checkMulityVideoFail,
        checkUrl} from "../../Utils/postPage/mediaUpload"
describe('Test Post functionality', () => { 
    beforeEach(()=>{
        cy.visit("https://dev.redditswe22.tech");
        login();
        HomePage.getSubmitButton().realClick();
        cy.fixture("MediaData").then((data) => {
            globalThis.data = data;
        });
        PostPage.getImageVideoTab().should("be.visible").click();
      })

    it("attech file and the preview window mustn't be visible ",()=>{
        attchFile(data.image1)
        PostPage.getPreviewImage().should('not.exist');
    })

    it("attech more than file  and the preview window must be visible with the last image ",()=>{
        attchFile(data.image1)
        cy.wait(2000);
        attchFile(data.image2)
        cy.wait(2000);
        attchFile(data.image3)
        cy.wait(2000);
        checkShownImage(2)
        deleteImage(2)
        checkShownImage(1)
    })


    it("attech more than file  and delete the last the preview window must take the previous image",()=>{
        attchFile(data.image1)
        cy.wait(2000);
        attchFile(data.image2)
        cy.wait(2000);
        attchFile(data.image3)
        cy.wait(2000);
        deleteImage(2)
        checkShownImage(1)
    })


    it("attech more than file  and click the second image and the preview  must show it and then delete it and the preview must show the image1",()=>{
        attchFile(data.image1)
        cy.wait(2000);
        attchFile(data.image2)
        cy.wait(2000);
        attchFile(data.image3)
        cy.wait(2000);
        PostPage.getImage(1).click();
        checkShownImage(1)
        deleteImage(1)
        checkShownImage(0)
    })


    it("put invalid file must give me fial alert",()=>{
        attchFile(data.invalidFile)
        //Hamza (your extenations)
        checkExtenation()
    })

    it("test upload invalid video",()=>{
        attchFile(data.invalidVideo);
        //must give me alert
        checkExtenation()
    })

    it("test upload valid video and show cancel button",()=>{
        attchFile(data.validVideo);
        //must give me alert
        MediaUpload.getCancelButton().should("be.visible");
    })

    it("test upload valid video and show success alert",()=>{
        attchFile(data.validVideo);
        //must give me alert
        checkSuccessAlert();
        // Hamza must give me the action after uploading the video

    })

    it("test upload more than one video",()=>{
        attchFile(data.validVideo);
        cy.wait(2000);
        attchFile(data.validVideo);
        
        //must give me alert
        checkMulityVideoFail()
        
    })

    it.only("put a valid data to the post",()=>{
        attchFile(data.image1);
        PostPage.getTitleFieldMedia().type("New title");
        PostPage.getPostButtonMedia().realClick();
        cy.wait(4000);
        checkUrl("/new_title/")
    })
})