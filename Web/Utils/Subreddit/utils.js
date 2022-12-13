import {SearchPagePostsTab,Subreddit} from "../../support/page-objects";

module.exports.topPosts=()=>{
    Subreddit.getUpvoteUnites().then(postsUnits=>{
        Subreddit.getUpvotes().then(postsUpvotes=>
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
    Subreddit.getTimeUnites().then(timeUnits=>{
        Subreddit.getTimeNumber().then(numbers=>
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
