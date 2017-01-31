Customers = new Mongo.Collection("customers");
Orders = new Mongo.Collection("orders"); //history of scanned cards
if (Meteor.isServer) {
  Customers._ensureIndex({fname: 1,lname:1}, {unique: 1});
}
