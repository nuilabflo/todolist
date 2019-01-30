// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('unable to connect to db');
  }
   console.log('connectet to db');
  const db = client.db('TodoApp');

  db.collection('Users').find({age:45}).toArray().then((docs)=>{
    console.log('tds');
    console.log(JSON.stringify(docs,undefined,2))
  },(err)=>{
    console.log('unable to fetch', err)

  });
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`tdfc ${count}`);
  // },(err)=>{
  //   console.log('unable to fetch', err)
  // });

  //
  // db.collection('Users').find(name:'flo').toArray().then((docs)=>{
  //   console.log('users with name flo');
  //   console.log(JSON.stringify(docs.undefined,2))
  // },(err)=>{
  //   console.log('unable to fetch', err)
  // });

  client.close();
});
