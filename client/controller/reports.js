
Template.orders.helpers({
  orders: function(){
    return Orders.find().fetch();
  },
  'get_customer':function(id){
      if(!id){
        return "Not Entered"
      }
      var cus = Customers.findOne({'_id':id});
      if(!cus){
        return "Not Found"
      }
      return cus.lname + " " + cus.fname;
  }
});

Template.customers.helpers({
  customers: function(){
    return Customers.find().fetch();
  },
});
// type->order->info
Template.orders.events({
  'click .order_delete': function(e, t) {
      var id = $(e.currentTarget).data('id');
      var r = confirm("Are you sure you want to delete this item?");
      if (r == true) {
        Meteor.call('deleteOrder',
          id,
          function (error, result) {
             if(error){
               alert("Fail to delete this item ! " + error)
             }
             else {
              console.log('success delete order')
             }
        });
      }

  }
});

Template.dirtyData.helpers({
  'order_not_yet_takens': function(){
    var today = new Date().setHours(0,0,0,0)
    var orders = Orders.find({
      expectation_date: {$lte: today},
      status:'Close'
      }).fetch();
    return orders
  },
  'orders_padding': function(){
    var today = new Date().setHours(0,0,0,0)
    var orders = Orders.find({
      expectation_date: {$lte: today},
      status:'Open'
      }).fetch();
    console.log(orders)
    return orders
  },
  'get_customer':function(id){
      if(!id){
        return "Not Entered"
      }
      var cus = Customers.findOne({'_id':id});
      if(!cus){
        return "Not Found"
      }
      return cus.lname + " " + cus.fname;
  }
});
