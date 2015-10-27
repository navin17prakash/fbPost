var postPicture = require('./wallpost.js');
var post=function(input){
    postPicture.postToFB(input);
}
post();
module.exports.postToFacebook= post;