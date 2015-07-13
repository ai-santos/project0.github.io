
$(function() {

// `blogController` holds all our blog's funtionality
  var blogController = {

// compile blog template
    var template = _.template($('#old-blog-posts').html()),

//get all archived blog posts
var all = function (){
  $get.('/api/posts', function (data)
    var allBlogPosts = data;
}

//iterate through all blog posts
_.each(allBlogPosts), function(data) {
  //pass each blog post through template to append to view
  var $blogPostHtml = $(template(data));
  $('#old-blog-posts').append($blogPostHtml);
});

//create new blog post to server
  var create = function(newPost, ...) 
  var blogItem = {blog:  comment: };

    //   var phraseData = {word: newWord, definition: newDefinition};
    //   // send POST request to server to create new phrase
    //   $.post('/api/phrases', phraseData, function(data) {
    //     // pass phrase object through template and append to view
    //     var $phraseHtml = $(template(data));
    //     $('#phrase-list').append($phraseHtml);
    //   });
    // };
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

blogForm[0].reset();

});





