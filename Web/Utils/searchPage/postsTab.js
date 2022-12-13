import {SearchPagePostsTab} from "../../support/page-objects";


module.exports.checkSuccessAlert=(text)=>{
    SearchPagePostsTab.getSuccessAlert().then((el)=> {
        assert.include(el.text(), (`Successfully ${text}`)); 
   });
}
//********* Start Posts Section *******//
module.exports.checkUrl=(text)=>{
    cy.url().should("include",`${text}`);
}

module.exports.topPosts=()=>{
    SearchPagePostsTab.getUpvoteUnites().then(postsUnits=>{
        SearchPagePostsTab.getUpvotes().then(postsUpvotes=>
        {
            var result=true;
            var newUpvotes=[];
            for(var i=0 ; i<postsUnits.length;i++)
            {
                switch(postsUnits[i].innerText)
                {
                case "k":
                    newUpvotes.push(Number(postsUpvotes[i].innerText)*1000);
                    break;
                case "m":
                    newUpvotes.push(Number(postsUpvotes[i].innerText)*1000000);
                    break;
                case "mk":
                    newUpvotes.push(Number(postsUpvotes[i].innerText)*1000*1000000);
                    break;
                default:
                    newUpvotes.push(Number(postsUpvotes[i].innerText));
                    break;
                }
            }
            var tempCom=newUpvotes[0];
            for(var i=1 ; i<newUpvotes.length;i++)
            {
                if(tempCom>Number(newUpvotes[i]))
                {
                    tempCom=newUpvotes[i];
                    continue;
                }
                else
                {
                    result=false
                    break;
                }
            }
            expect(result).to.equal(true);
        });
    })
}




module.exports.newPosts=()=>{
    SearchPagePostsTab.getTimeUnites().then(timeUnits=>{
        SearchPagePostsTab.getTimeNumber().then(numbers=>
        {
            var result=true;
            var newNumbers=[];
            for(var i=0 ; i<timeUnits.length;i++)
            {
                console.log(timeUnits[i])
               switch(timeUnits[i].innerText)
               {
                case "day":
                case "days":
                    newNumbers.push(Number(numbers[i].innerText)*24);
                    break;
                case "month":
                case "months":
                    newNumbers.push(Number(numbers[i].innerText)*30*24);
                    break;
                case "year":
                case "years":
                    newNumbers.push(Number(numbers[i].innerText)*364*24);
                    break;
                case "minutes":
                case "minute":
                    newNumbers.push(Number(numbers[i].innerText)/24);
                    break;

               }
            }
            var tempCom=newNumbers[0];
            console.log(newNumbers);
            for(var i=1 ; i<newNumbers.length;i++)
            {
                console.log(newNumbers[i])
                if((tempCom)<(newNumbers[i]))
                {
                    tempCom=newNumbers[i];
                    continue;
                }
                else
                {
                    result=false
                    break;
                }
            }
            expect(result).to.equal(true);
        });
    })
}



module.exports.mostComments=()=>{
    SearchPagePostsTab.getCommentsUnites().then(commentsUnits=>{
        SearchPagePostsTab.getCommentsNumber().then(postsComments=>
            {
                var result=true;
                var newComments=[];
                for(var i=0 ; i<commentsUnits.length;i++)
                {
                    switch(commentsUnits[i].innerText)
                    {
                    case "k":
                        newComments.push(Number(postsComments[i].innerText)*1000);
                        break;
                    case "m":
                        newComments.push(Number(postsComments[i].innerText)*1000000);
                        break;
                    case "mk":
                        newComments.push(Number(postsComments[i].innerText)*1000*1000000);
                        break;
                    default:
                        newComments.push(Number(postsComments[i].innerText));
                        break;
                    }
                }
                var tempCom=newComments[0];
                for(var i=1 ; i<newComments.length;i++)
                {
                    if(tempCom>newComments[i])
                    {
                        tempCom=newComments[i];
                        continue;
                    }
                    else
                    {
                        result=false
                        break;
                    }
                }
                expect(result).to.equal(true);
            });
        })
}


module.exports.hotPosts=()=>{
    SearchPagePostsTab.getPostContainer().getAttribute("hot").then(postsHot=>{
        var tempCom;
        var result=true;
        if(postsHot.length>0)
        {
            tempCom=Number(postsHot[0]);
        }
        for (var i=1;i<postsHot.length;i++)
        {
            if(tempCom>postsHot[i])
            {
                tempCom=postsHot[i];
                continue;
            }
            else
            {
                result=false;
                break;
            }
        }
        expect(result).to.equal(true);
    })
}

module.exports.relevancePosts=()=>{
    SearchPagePostsTab.getPostContainer().getAttribute("relevance").then(postsRelevance=>{
        var tempCom;
        var result=true;
        if(postsRelevance.length>0)
        {
            tempCom=Number(postsRelevance[0]);
        }
        for (var i=1;i<postsRelevance.length;i++)
        {
            if(tempCom>postsRelevance[i])
            {
                tempCom=postsRelevance[i];
                continue;
            }
            else
            {
                result=false;
                break;
            }
        }
        expect(result).to.equal(true);
    })
}
//********* end Posts Section *******//

//********* Start community Section *******//
module.exports.joinCommunity=()=>{
    SearchPagePostsTab.getCommunitiesNames().then(communityName=>{
        SearchPagePostsTab.getAllCommunitiesButtons().then((buttons)=>{
            for( var i=0;i<buttons.length;i++)
            {
                if(buttons[i].innerText=="Join")
                {
                    cy.wrap(buttons[i]).click();
                    SearchPagePostsTab.getSuccessAlert().should("be.visible").and("have.text",`Successfully joined ${communityName[i].innerText}`)
                    break;
                }
            }
        });
    })
}

module.exports.leaveCommunity=()=>{
    SearchPagePostsTab.getCommunitiesNames().then(communityName=>{
        SearchPagePostsTab.getAllCommunitiesButtons().then((buttons)=>{
            for( var i=0;i<buttons.length;i++)
            {
                if(buttons[i].innerText=="Joined")
                {
                    cy.wrap(buttons[i]).click();
                    SearchPagePostsTab.getSuccessAlert().should("be.visible").and("have.text",`Successfully left ${communityName[i].innerText}`)
                    break;
                }
            }
        });
    })
}

//********* end community Section *******//