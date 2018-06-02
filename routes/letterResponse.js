var MongoClient= require("mongodb").MongoClient;
const mongoClient= require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017/", function(err, client)
{
 const db =client.db("letter")
 const collection=db.collection("name")
    if(err)  return console.log(err);
    collection.find().toArray(function(err, results)
    {
      console.log(results);
      client.close();
  })
});
