
  $("#hover-button").on("mouseenter", function() {
  $("#myModal").modal("show");
  });


$(function() {

 //create new blog post object and comments from form data
  var newPost = $("#blog-post").val();
  var newComment = $("#blog-comment").val();
  var blogData = {name: newPost, description: newComment}

  var blogForm = $("#new_blog_form");
  var blogArchive = $("#old-blog-posts");

var templatingFunction = _.template($('#old-blog-posts-template').html());

var blogItems = [
  {blog: "July 4th: I spent an amazing time watching fireworks on a rooftop in downtown Oakland with amazing queer activists.", comment: "'Those sparklers made the night shine! -Francois'"},
  {blog: "July 3rd: I soaked in the sun, water, laughter and delicous treats along the Russian River!" ,     comment: "'Best summer. ever. epic. - Maria'"},
  {blog: "July 2nd: I learned so much about OOP today, it is blowing my mind!",    comment: "'Who's Down with OOP?' - Anonymous'"}
];

_.each(blogItems, function (item, index) {
  console.log(item);
  var itemView = $(templatingFunction(item));
  blogArchive.append(itemView);
  console.log(itemView);
});

  blogForm.on("submit", function(event) {
    event.preventDefault();
    newPost = $("#blog-post").val();
    newComment = $("#blog-comment").val();
    console.log('form submitted!');
    console.log(newPost + ' ' + newComment);
     
 
blogArchive.append('<p class="blog">' + newPost + '  ' + newComment + '</p>');

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





