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
    'editCustomer' : function(
          id,fname,lname,phone
        ){
          Customers.update(
              {_id :id},
              {$set: {'fname': fname,'lname':lname,'phone':phone}}
          );
    },
});
