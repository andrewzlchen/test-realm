exports = function(arg){
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  var collection = context.services.get("testdb").db("test").collection("test");
  var doc = collection.insertMany([
    {foo:'bar'},
    {foo: 'bar'},
    {bar: 'foo'},
    {test:"test"}]);
  return {arg: arg};
};