var FB = require('fb');
var status;

 var initFucntion= function(key){
	 
	 var accessToken = key;
	 FB.setAccessToken(accessToken);
 }
 
 var startPost = function(imageURL,description)
 {
	//starts posting
     FB.api('', 'post', {
    batch: [
        { method: 'post', relative_url: 'me/feed', body:description + encodeURIComponent(imageURL) }
    ]
}, function (res) {
    var res0;
 
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
		status =false;
        return;
    }
 
    res0 = JSON.parse(res[0].body);
 
    if(res0.error) {
        console.log(res0.error);
    } else {
        console.log('Post Id: ' + res0.id);
		status = true;
    }
});

}
 var checkStatus =function()
 {
     if(status)
        console.log ("successfully posted to wall");
       else
       console.log("Failed in posting.");
 }
 var postToFB =function(key,imageURL,desc)
 {
     // initalized the access key. Could also be used for other initialization activities
     initFucntion(key);
     //starts the actual posting process
     startPost(imageURL,desc);
     //logs the final status message. Could be modified to write to a log file with timestamp
     checkStatus();
     
 }
 module.export.postToFB = postToFB;
 