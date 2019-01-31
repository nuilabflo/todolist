// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect to db');
  }
   console.log('connectet to db');
  const db = client.db('TodoApp');

  //deleteMany
    db.collection('Users').deleteMany({name:'flo'}).then((result)=>{
      console.log(result)
    })
  //deleteOne
  // db.collection('Todos').deleteOne({text:'td'}).then((result)=>{
  //   console.log(result.result);
  // })
  //findAndDeleteOne
  db.collection('Users').findOneAndDelete({_id:new ObjectID('5c52c977333c69100906c486')}).then((result)=>{
    console.log(result);
  })
  client.close()

});
