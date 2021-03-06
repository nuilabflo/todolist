
let express = require('express');
let bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');

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

app.get('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(!ObjectId.isValid(id)){
      res.status(404).send({});
      console.log('invalid id');
    }

    Todo.findById(id).then((todo)=>{
      if(!todo){
        res.status(404).send({});
        console.log('not existing id');
      }
      res.status(200).send(todo)
console.log('ok');
    },(e)=>{
      res.status(404).send({});
      console.log('error', e);
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
