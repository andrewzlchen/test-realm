exports = function(arg){
  var collection = context.services.get("testdb").db("test").collection("test");
  var docs = collection.find({});
  return {docs}
};