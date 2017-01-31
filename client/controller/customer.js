Template.createCustomer.helpers({
  customers: function(){
    return Customers.find().fetch();
  },
});
Template.createCustomer.events({
  "submit #f_create_customer": function (event) {
      event.preventDefault();
      var fname = event.target.fname.value;
      var lname = event.target.lname.value;
      var phone = event.target.phone.value;
      Meteor.call('createCustomer',fname,lname,phone,function(error,result){
          if(error){
            console.log(error)
          }
          else{
            console.log("sucess add customer")
            Session.set("select_customer",result);
                        Meteor.defer(function() {
              Router.go('createOrder');
            });
          }
        });
  }

});
