var graph=require('fbgraph');
var ACCESS_TOKEN;
var initFucntion= function(key){
	 ACCESS_TOKEN=key;
	 graph.setAccessToken(ACCESS_TOKEN);
 }
 
 var startPost = function(imageURL,imageCaption)
 {
   var result={
	"id": "",
	"post_id" : "",
	"caption": "",
	"posted_by" :""
};
   var optionsJSON ={
	 url : imageURL,
	 caption: imageCaption
 };
    graph.post("/photos", optionsJSON, function(err, res) {
    result.post_id=res.post_id;
    result.id=res.id;
    result.caption=imageCaption;
    result.posted_by="this feature currently not available";
    console.log(result); 
});
  }

 var postToFB =function(inputJSON)
 {
     // initalized the access key. Could also be used for other initialization activities
     initFucntion(inputJSON.ACCESS_TOKEN);
     //starts the actual posting process
     startPost(inputJSON.URL,inputJSON.caption);
 }
 //postToFB();
 module.exports.postToFB =postToFB;