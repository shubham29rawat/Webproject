module.exports.posts = function(req, res){
    return res.render('posts_profile', {
        title: "post profile"
    });
}