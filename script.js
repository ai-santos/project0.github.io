
  $("#hover-button").on("mouseenter", function() {
  $("#myModal").modal("show");
  });


$(function() {

 //create new blog post object and comments from form data
  var newBlogPost = $("#blog-post").val();
  var newComment = $("#blog-comment").val();
  var blogData = {name: newBlogPost, description: newComment}

  var newBlogPost = $("#new_blog_post");
  var newItemForm = $("#new_task");
  var blogPosts = $("#old-blog-posts");

var templatingFunction = _.template($('#old-blog-posts-template').html());

var blogItems = [
  {blog: "July 4th: I spent an amazing time watching fireworks on a rooftop in downtown Oakland with amazing queer activists.", comment: "'Those sparklers made the night shine! -Francois'"},
  {blog: "July 3rd: I soaked in the sun, water, laughter and delicous treats along the Russian River!" ,     comment: "'Best summer. ever. epic. - Maria'"},
  {blog: "July 2nd: I learned so much about OOP today, it is blowing my mind!",    comment: "'Who's Down with OOP?' - Anonymous'"}
];

_.each(blogItems, function (item, index) {
  console.log(item);
  var itemView = $(templatingFunction(item));
  blogPosts.append(itemView);
  console.log(itemView);
});

  newBlogPost.on("submit", function(event) {
    event.preventDefault();
    newBlogPost = $("#blog-post").val();
    newComment = $("#blog-comment").val();
    console.log('form submitted!');
    console.log(newBlogPost + ' ' + newComment);
     
 
blogPosts.append('<p class="blog">' + newBlogPost + '  ' + newComment + '</p>');

   });
});


//add a click event handler to mark task done
 var $blogarticle = $("#old-blog-posts");

$blogarticle.on("click", ".task", function(event) {
  console.log(this); 
  console.log($("this"));
  $(this).children().addClass("done");
  $(this).addClass("done");

});





