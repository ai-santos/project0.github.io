// Have to tell application to listen for these modules. 
var express = require('express'),
    app = express();
    bodyParser = require('body-parser');
    _ = require("underscore");

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

//pre-seeded blog data
var posts = [
    {   
        id: 1, 
        blog: 'July 4th: I spent an amazing time watching fireworks on a rooftop in downtown Oakland with queer activist friends.',
        comment: "Those sparklers made the night shine! - Francois",},
    {
        id: 2,
        blog: 'July 3rd: I soaked in the sun, water, laughter and delicious treats along the Russian River!',
        comment: 'Best summer. ever. epic. - Maria'},
    {
        id: 3,
        blog: 'July 2nd: Spent the night watching OINTB and discussing how it trivializes the prison industrial complex and the experiences of women within that system of oppression. Tastee still makes me laugh',
        comment: 'On point as usual - Anna'
    }
      
//ROUTES
//ROOT route
];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

//Show blog archive data
app.get('/api/posts', function (req, res){
    res.json(posts)
})

//create a blog archive
app.post('/api/posts', function (req, res) { 
    var newBlogItem = req.body;

//set id to new post to add blog archive array
if (posts.length > 0) {
    newBlogItem.id = posts[posts.length - 1].id +  1;
  } else {
    newBlogItem.id = 0;
  }

//add new post to blog archive array
posts.push(newBlogItem);

//send new post as JSon response
    res.json(newBlogItem);
});

//modify specific array object
 app.put('/api/posts/:id', function(req, res) {
    var targetId = parseInt(req.params.id);

//find item in blog archive array that matches the id
    var targetPost = _.findWhere(posts, {id:targetId});

//update the blog
     targetPost.blog = req.body.blog;

// update the blog comments
    targetPost.comment = req.body.comment;

//send back edited object
res.json(targetPost);
  
});

//delete blog post from archive
app.delete('/api/posts/:id', function(req, res) { 

//set the value of the id to be deleted
     var targetId = parseInt(req.params.id);

//find item in blog archive array matches the id
     var deletePost = _.findWhere(posts, {id:targetId});

//get the index of the blog item to be deleted
     var index = posts.indexOf(deletePost);

//remove the item at that index, only remove 1 item
     posts.splice(index, 1);

//send back deleted object
     res.json(deletePost);

 });



app.listen(3000, function (){
    console.log('server started at localhost: 3000'); 
})