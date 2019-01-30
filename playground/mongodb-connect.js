// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
//console.log(ObjectID);

// let objID = new ObjectID();
// console.log(objID);
// let user = {name: 'flo', age: 45};
// let {name}= user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect to db');
  }
   console.log('connectet to db');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('adding collection failed',err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // db.collection('Users').insertOne({
  //
  //   name:'flo',
  //   age: 45,
  //   location: 'bad cannstatt'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('adding users collection failed',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });

  client.close();
});
