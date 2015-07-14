// Have to tell application to listen for these modules.
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
//Require the model for the microblog
    bodyParser = require('body-parser'),
    _ = require("underscore");

mongoose.connect('mongodb://localhost/microblog')

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

var Microblog = require('./models/microblogModel')


// //pre-seeded blog data
// var posts = [
//     {   
//         id: 1, 
//         blog: 'July 4th: I spent an amazing time watching fireworks on a rooftop in downtown Oakland with queer activist friends.',
//         comment: "Those sparklers made the night shine! - Francois",},
//     {
//         id: 2,
//         blog: 'July 3rd: I soaked in the sun, water, laughter and delicious treats along the Russian River!',
//         comment: 'Best summer. ever. epic. - Maria'},
//     {
//         id: 3,
//         blog: 'July 2nd: Spent the night watching OINTB and discussing how it trivializes the prison industrial complex and the experiences of women within that system of oppression. Tastee still makes me laugh',
//         comment: 'On point as usual - Anna'
//     }
      
//ROUTES
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

//Show blog archive data
Microblog.find(function (err, microblog) {
        console.log(microblog);
})
//get ALL posts
app.get('/api/microblogs', function (req, res) {
  Microblog.find(function (err, microblogs) { 
      res.json(microblogs)
  })
})

//get ONE post by ID 
app.get('/api/microblogs/:id', function (req, res) {
  //set the value of the ID
  var targetId = req.params.id;
  //find ONE post by ID 
  Microblog.findOne({_id: targetId}, function (err, foundMicroblog) {
    res.json(foundMicroblog);
  });
});

//POST blogs to server
app.post('/api/microblogs', function (req, res) { 
    var newMicroblog = new Microblog({ 
        blog: req.body.blog,
        comment: req.body.comment
    });

    newMicroblog.save(function (err, savedMicroblog) { 
        res.json(savedMicroblog);
    });
});
// 
// //modify object in the server
app.put('/api/microblogs/:id', function (req, res) { 
     //set the value of the id
     var targetId = req.params.id;

     //find post in db by id
     Microblog.findOne({_id: targetId}, function (err, savedMicroblog) { 
     savedMicroblog.blog = req.body.blog;
     savedMicroblog.comment = req.body.comment;

     //save updated post in db
     savedMicroblog.save(function (err, savedMicroblog) {
        res.json(savedMicroblog); 
     });
  });
});

//DELETE blog post from archive
app.delete('/api/microblogs/:id', function (req, res) {
  
  //set the value of the id
   var targetId = req.params.id;
     
  // find phrase in db by id and remove
  Microblog.findOneAndRemove({_id: targetId}, function (err, deletedMicroblog) {
    res.json(deletedMicroblog);
  });
});


// //set id to new post to add blog archive array
// if (posts.length > 0) {
//     newBlogItem.id = posts[posts.length - 1].id +  1;
//   } else {
//     newBlogItem.id = 0;
//   }

// //add new post to blog archive array
// posts.push(newBlogItem);

// //send new post as JSon response
//     res.json(newBlogItem);
// });

// //modify specific array object
//  app.put('/api/posts/:id', function(req, res) {
//     var targetId = parseInt(req.params.id);

// //find item in blog archive array that matches the id
//     var targetPost = _.findWhere(posts, {id:targetId});

// //update the blog
//      targetPost.blog = req.body.blog;

// // update the blog comments
//     targetPost.comment = req.body.comment;

// //send back edited object
// res.json(targetPost);
  
// });

// //delete blog post from archive
// app.delete('/api/posts/:id', function(req, res) { 

// //set the value of the id to be deleted
//      var targetId = parseInt(req.params.id);

// //find item in blog archive array matches the id
//      var deletePost = _.findWhere(posts, {id:targetId});

// //get the index of the blog item to be deleted
//      var index = posts.indexOf(deletePost);

// //remove the item at that index, only remove 1 item
//      posts.splice(index, 1);

// //send back deleted object
//      res.json(deletePost);

//  });



app.listen(3000, function (){
    console.log('server started at localhost: 3000'); 
})