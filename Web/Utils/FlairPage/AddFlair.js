import PostFlair from "../../support/page-objects/post-flair";

//const HomePage = new HomePage();

module.exports.Createflair=(type)=>{
        PostFlair.getAddFlairButton().should("be.visible").should('be.enabled').click()
        PostFlair.getSaveButtonfromAddflair().should("be.visible").should('be.disabled')
        PostFlair.getFlairtextcontainerfromAddflair().should("be.visible").type("MOMO")
        //PostFlair.getPostFalirPreviewContainer().should("be.visible").should("have.text","MOMO")
}