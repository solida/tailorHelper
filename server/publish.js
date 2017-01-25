if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('orders', function ordersPublication() {
    return Orders.find();
  });
  Meteor.publish('customers', function customersPublication() {
    return Customers.find();
  });
}
