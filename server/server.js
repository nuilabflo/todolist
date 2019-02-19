
let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {User} = require('./models/user');
let {Todo} = require('./models/todo');

let app = express();


app.use(bodyParser.json());


app.post('/todos',(req, res)=>{
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});

app.get('/todos',(req,res) =>{

  Todo.find().then((todos)=>{
      res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
})


app.listen(3000,()=>{
  console.log('server startet on p 3000');
})


module.exports ={app};
//
// let newUser = new usr({
//    email: '      mail@florkan.net'
// })
//
// newUser.save().then((doc)=>{
//   console.log(`saved new user: \n ${doc}`);
// },(e)=>{
//   console.log(`cant save user because\n ${e}` );
// })
