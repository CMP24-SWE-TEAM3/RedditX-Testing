import {PostPage,MediaUpload} from "../../support/page-objects"
import{ attchFile,
        deleteImage,
        checkShownImage,
        checkExtenation,
        checkSuccessAlert,
        checkMulityVideoFail,
        checkUrl} from "../../Utils/postPage/mediaUpload"
describe('Test Post functionality', () => { 
  beforeEach(() => {
        cy.clearLocalStorage();
        cy.fixture("MediaData").then((data) => {
          globalThis.data = data;
        });
        cy.visit("http://localhost:3000");
        PostPage.getEditorArea().should("be.visible");
        PostPage.getImageVideoTab().should("be.visible").click();
        PostPage.getTitleField().should("be.visible")
    });

    it("attech file and the preview window mustn't be visible ",()=>{
        attchFile(data.image1)
        PostPage.getPreviewImage().should("not.be.visible");
    })

    it("attech more than file  and the preview window must be visible with the last image ",()=>{
        attchFile(data.image1)
        cy.wait(2000);
        attchFile(data.image2)
        cy.wait(2000);
        attchFile(data.image3)
        cy.wait(2000);
        checkShownImage(data.image3)
        deleteImage(data.image3)
        checkShownImage(data.image2)
    })


    it("attech more than file  and delete the last the preview window must take the previous image",()=>{
        attchFile(data.image1)
        cy.wait(2000);
        attchFile(data.image2)
        cy.wait(2000);
        attchFile(data.image3)
        cy.wait(2000);
        deleteImage(data.image3)
        checkShownImage(data.image2)
    })


    it("attech more than file  and click the second image and the preview  must show it and then delete it and the preview must show the image1",()=>{
        attchFile(data.image1)
        cy.wait(2000);
        attchFile(data.image2)
        cy.wait(2000);
        attchFile(data.image3)
        cy.wait(2000);
        PostPage.getImage(data.image2).click();
        checkShownImage(data.image2)
        deleteImage(data.image2)
        checkShownImage(data.image1)
    })


    it("put invalid file must give me fial alert",()=>{
        attchFile(data.invalidFile)
        checkExtenation()
    })

    it("test upload invalid video",()=>{
        attchFile(data.invalidVideo);
        //must give me alert
        checkExtenation()
    })

    it.only("test upload valid video and show cancel button",()=>{
        attchFile(data.validVideo);
        MediaUpload.getCancelButton().should("be.visible");
    })

    it.only("test upload valid video and show success alert",()=>{
        attchFile(data.validVideo);
        checkSuccessAlert();
    })

    it.only("test upload more than one video",()=>{
        attchFile(data.validVideo);
        cy.wait(2000);
        attchFile(data.validVideo);
        
        checkMulityVideoFail()
        
    })

    it.only("put a valid data to the post",()=>{
        attchFile(data.image1);
        PostPage.getTitleField().type("New title");
        PostPage.getPostButton().click();
        cy.wait(4000);
        checkUrl("/new_title/")
    })
})