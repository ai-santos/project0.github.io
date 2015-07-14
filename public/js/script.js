//CLIENT-SIDE JAVASCRIPT

$(function() {

  // compile blog template
  var template = _.template($('#old-blog-posts-template').html());

  //get all archived blog posts
  var all = function (){
    $.get('/api/posts', function (data) {
      var allBlogPosts = data;
      console.log(allBlogPosts);
     //iterate through all blog posts
      _.each(allBlogPosts, function(data) {

        //pass each blog post through template to append to view
        var $blogPostHtml = $(template(data));
        console.log($blogPostHtml);
        console.log($('#old-blog-posts'))
        $('#old-blog-posts').append($blogPostHtml);
      });

    });


  
  };

  all()

// //create new blog post to server
// var create = function(newPost, newComment) 
// var blogItem = {blog: newBlog, comment: newComment};

// //send POST request to server to create a new blog  
// $.post('/api/posts', function(data) { 
// //pass blog post through template and append to view
// var $blogPostHtml = $('#old-blog-posts'.template(data));
// $('#old-blog-posts').append($blogPostHtml);
// });
// },

// //update PUT blog posts on to server
// $.put('/api/phrases/:id', blogItem, function(data) {
// // pass phrase object through template and append to view
// var $blogPostHtml = $('#old-blog-posts'.template(data));
// $('#old-blog-posts').append($blogPostHtml);
// });
// },

// //DELETE blog posts on the server
// $delete('/api/posts/:id', blogItem, function (data) {
// // pass phrase object through template and append to view
// var $blogPostHtml = $('#old-blog-posts'.template(data));
// $('#old-blog-posts').append($blogPostHtml);
// });
// },

// //setup VIEW
// var setupView = function() { 
//   $('')


});



