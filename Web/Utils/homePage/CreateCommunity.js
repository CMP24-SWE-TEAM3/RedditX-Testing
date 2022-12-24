import {HomePage} from "../../support/page-objects";


module.exports.CreateCommunityHomePage=(type)=>{
    switch(type){
    case "CreateSuccessfully":
        {
            HomePage.getcreatecommunityButton().scrollIntoView({duration:3000})
            HomePage.getcreatecommunityButton().should("be.visible")
            HomePage.getcreatecommunityButton().click({force: true}); 
            //// add valid data then press create community 
            // you have to test many approach when shreef finish 
            //HomePage.getWindowOfCreatingCommunity().should("be.visible")
            HomePage.getContainernameofCommunity().should("be.visible")
            HomePage.getContainernameofCommunity().type("akdhc")
            HomePage.getcheckboxOfPublic().should("be.visible")
            HomePage.getcheckboxOfPrivate().should("be.visible")
            HomePage.getcheckboxOfRestricted().should("be.visible")
            HomePage.getcheckboxOfAdultContent().should("be.visible")
            HomePage.getExitButtonfromCreatingcomunity().should("be.visible")
            HomePage.getCancleButtonfromCreatingcomunity().should("be.visible")
            HomePage.getButtonofCreatingcomunity().should("be.visible")

            // check one of them
            HomePage.getcheckboxOfRestricted().check().should("be.checked")
            // check addult container
            HomePage.getcheckboxOfAdultContent().check().should("be.checked")
            //click on create button
            HomePage.getButtonofCreatingcomunity().trigger('mouseover').click({force: true});
            break;
        }
        
            
        case "CancleCreating":
            {
                HomePage.getcreatecommunityButton().scrollIntoView({duration:3000})
                HomePage.getcreatecommunityButton().should("be.visible")
                HomePage.getcreatecommunityButton().click({force: true}); 
                //// add valid data then press create community 
                // you have to test many approach when shreef finish 
                //HomePage.getWindowOfCreatingCommunity().should("be.visible")
                HomePage.getContainernameofCommunity().should("be.visible")
                HomePage.getContainernameofCommunity().type("akdhc")
                HomePage.getcheckboxOfPublic().should("be.visible")
                HomePage.getcheckboxOfPrivate().should("be.visible")
                HomePage.getcheckboxOfRestricted().should("be.visible")
                HomePage.getcheckboxOfAdultContent().should("be.visible")
                HomePage.getExitButtonfromCreatingcomunity().should("be.visible")
                HomePage.getCancleButtonfromCreatingcomunity().should("be.visible")
                HomePage.getButtonofCreatingcomunity().should("be.visible")
    
                // check one of them
                HomePage.getcheckboxOfRestricted().check().should("be.checked")
                // check addult container
                HomePage.getcheckboxOfAdultContent().check().should("be.checked")
                //click on Cancle button
                HomePage.getCancleButtonfromCreatingcomunity().trigger('mouseover').click({force: true});
                break;
            }
        case "ExitCreating":
            {
                HomePage.getcreatecommunityButton().scrollIntoView({duration:3000})
                HomePage.getcreatecommunityButton().should("be.visible")
                HomePage.getcreatecommunityButton().click({force: true}); 
                //// add valid data then press create community 
                // you have to test many approach when shreef finish 
                //HomePage.getWindowOfCreatingCommunity().should("be.visible")
                HomePage.getContainernameofCommunity().should("be.visible")
                HomePage.getContainernameofCommunity().type("akdhc")
                HomePage.getcheckboxOfPublic().should("be.visible")
                HomePage.getcheckboxOfPrivate().should("be.visible")
                HomePage.getcheckboxOfRestricted().should("be.visible")
                HomePage.getcheckboxOfAdultContent().should("be.visible")
                HomePage.getExitButtonfromCreatingcomunity().should("be.visible")
                HomePage.getCancleButtonfromCreatingcomunity().should("be.visible")
                HomePage.getButtonofCreatingcomunity().should("be.visible")
    
                // check one of them
                HomePage.getcheckboxOfRestricted().check().should("be.checked")
                // check addult container
                HomePage.getcheckboxOfAdultContent().check().should("be.checked")
                //click on Exit button
                HomePage.getExitButtonfromCreatingcomunity().trigger('mouseover').click({force: true});
                break;
            }
    }
}