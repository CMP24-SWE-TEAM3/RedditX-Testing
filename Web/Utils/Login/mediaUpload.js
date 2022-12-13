import {PostPage,MediaUpload} from "../../support/page-objects";
module.exports.attchFile=(fileName)=>{
    PostPage.getFileField().attachFile(image);
}
module.exports.deleteImage=(imageName)=>{
    PostPage.getImage(imageName).realHover();
    PostPage.getDangerPerImage(imageName).should("be.visible").click()
}

module.exports.checkShownImage=(imageName)=>{
    PostPage.getImage(imageName)
        .invoke('attr', 'src')
        .as('src_1')
        //get the src of the selected
        PostPage.getSelectedImageInPreview()
        .invoke('attr', 'src')
        .as('src_2')


        // later on for example you could do
        cy.get('@src_1').then(src_1 => {
            cy.get('@src_2').then(src_2 => {
                // Both values are available and any kind of assertion can be performed
                expect(src_1).to.include(src_2)
            });
        });

}


module.exports.checkExtenation=()=>{
    MediaUpload.getFailAlert().should("have.text","Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)");
}

module.exports.checkSuccessAlert=()=>{
    MediaUpload.getSuccessAlert().should("have.text","?? hamza??");
}

module.exports.checkMulityVideoFail=()=>{
    MediaUpload.getFailAlert().should("have.text","Videos aren’t supported within galleries...yet");
}

module.exports.checkUrl=(text)=>{
    cy.url().should("include",`${text}`);
}