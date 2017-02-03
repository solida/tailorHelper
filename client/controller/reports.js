Template.orders.helpers({
  orders: function(){
    return Orders.find().fetch();
  },
  'get_customer':function(id){
  return Customers.findOne({'_id':id});
}
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
