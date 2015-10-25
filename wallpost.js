var graph=require('fbgraph');
var ACCESS_TOKEN;
 
 
var initFucntion= function(key){
	 ACCESS_TOKEN=key;
	 graph.setAccessToken(ACCESS_TOKEN);
 }
 
 var startPost = function()
 {
     var optionsJSON ={
	 url : "http://www.dmuth.org/files/nodejs-dark.png",
	 caption: "caption testing"
 };
    graph.post("/photos", optionsJSON, function(err, res) {
  // returns the post id 

  console.log(res); // { id: xxxxx} 
});
  }

 var postToFB =function(key)
 {
     // initalized the access key. Could also be used for other initialization activities
     initFucntion(key);
     //starts the actual posting process
     startPost();
 }
 postToFB('pass the acccess token here ');
 