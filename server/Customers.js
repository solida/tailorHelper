Meteor.methods({
    'createCustomer' : function(
          fname,lname,phone
        ){
          if(Customers.findOne({fname:fname,lname:lname})) {
            throw new Meteor.Error(500, 'Customer already exist!');
          }
          else{
            return Customers.insert({
              "fname": fname,
              "lname":lname,
              "phone": phone,
            })
          }
    },
    "deleteCustomer" :function(id){
      Customers.remove( { _id: id }, 1)
     },
     "editCustomer" : function(
         id,field,data
         ){
           var obj = {};
           obj[field] = data;
           Customers.update(
                      {_id :id},
                      {$set:obj}
           )
           return
     },
});
