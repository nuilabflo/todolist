// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect to db');
  }
   console.log('connectet to db');
  const db = client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('5c51d3ef333c69100906c483')},
  //   {$set:{completed:true}},
  //   {returnOriginal:false}
  // ).then((result)=>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate(
    {name: 'lotte'},
    {$set:{name:'flo'},
     $inc:{age:10}
    },
    {returnOriginal:false}
 ).then((result)=>{
   console.log(result);
 })

//  client.close()

});
