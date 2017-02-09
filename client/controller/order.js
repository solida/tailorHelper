// -------create order---------

Session.set("select_customer","");
// -createOrder template-
Template.createOrder.rendered = function() {
    $('#expectation_date').bootstrapMaterialDatePicker({ format : "DD-MM-YYYY",time:false });
    if(!this._rendered) {
      this._rendered = true;
      $("#select_customer").val(Session.get("select_customer"));

      Session.set('current_type', 'Shirt');
      $("#select_type").val(Session.get("current_type"));
    }
}

// type->order->info
Template.createOrder.events({
  "change #select_type": function (event) {
      event.preventDefault();
      var type = $(event.target).val()

      if(type=="Jacket"){
        Session.set("current_type", "Jacket");
      }
      else if(type=="Shirt"){
        Session.set("current_type", "Shirt");
      }
      else if(type=="Trouser"){
        Session.set("current_type", "Trouser");
      }
  },
  "submit #f_create_order": function (event) {
      event.preventDefault();
      var customer = event.target.select_customer.value;
      Session.set("select_customer",customer);
      current_type = Session.get("current_type")
      var customer = event.target.select_customer.value;
      var type = event.target.select_type.value;

      var qty = event.target.qty.value;
      var price = event.target.price.value;
      var book = event.target.book.value;
      var expectation_date = event.target.expectation_date.value;
      var notes = event.target.notes.value;
      if(current_type=="Shirt"){
        var neck = event.target.neck.value;
        var full_chest = event.target.full_chest.value;
        var full_shoulder = event.target.full_shoulder.value;
        var sleeve = event.target.sleeve.value;
        var bicep = event.target.bicep.value;
        var wrist = event.target.wrist.value;
        var waist = event.target.waist.value;
        var hips = event.target.hips.value;

        Meteor.call('createOrderShirt',
          customer,type,qty,price,book,expectation_date,notes,
          neck,full_chest,full_shoulder,sleeve,bicep,wrist,waist,hips,
          function (error, result) {
             if(error){
               alert("fail to add order: "+error)
             }
             else {
              Router.go('orders');
             }
        });
      }
      else if (current_type=="Jacket") {
        var neck = event.target.neck.value;
        var full_chest = event.target.full_chest.value;
        var full_shoulder = event.target.full_shoulder.value;
        var sleeve = event.target.sleeve.value;
        var bicep = event.target.bicep.value;
        var wrist = event.target.wrist.value;
        var waist = event.target.waist.value;
        var hips = event.target.hips.value;

        var front_jacket_length = event.target.front_jacket_length.value;
        var front_chest_width = event.target.front_chest_width.value;
        var back_width = event.target.back_width.value;
        var half_shoulder_width = event.target.half_shoulder_width.value;
        var full_back_length = event.target.full_back_length.value;
        var half_back_length = event.target.half_back_length.value;
        var trouser_waist = event.target.trouser_waist.value;
        var full_sleeve = event.target.full_sleeve.value;
        Meteor.call('createOrderJacket',
          customer,type,qty,price,book,expectation_date,notes,
          neck,full_chest,full_shoulder,sleeve,bicep,wrist,waist,hips,
          front_jacket_length,front_chest_width,
          back_width,half_shoulder_width,full_back_length,
          half_back_length,trouser_waist,full_sleeve,
          function (error, result) {
             if(error){
               alert("fail to add order: "+error)
             }
             else {
              Router.go('orders');
             }
        });

      }
      else if (current_type=='Trouser') {
        console.log('add trouser')
        var hips = event.target.hips.value;
        var trouser_waist = event.target.trouser_waist.value;
        var trouser_outseam = event.target.trouser_outseam.value;
        var trouser_inseam = event.target.trouser_inseam.value;
        var thigh = event.target.thigh.value;
        var knee = event.target.knee.value;
        var crotch = event.target.crotch.value;
        // customer,type,
        // qty,price,book,expectation_date,note,
        // hips,trouser_waist,trouser_outseam,trouser_inseam,thigh,knee,crotch
        Meteor.call('createOrderTrouser',
          customer,type,qty,price,book,expectation_date,notes,
          hips,trouser_waist,trouser_outseam,trouser_inseam,thigh,knee,crotch,
          function (error, result) {
             if(error){
               alert("fail to add order: "+error)
             }
             else {
              Router.go('orders');
             }
        });
      }
      else{
        alert("Please select the correct Type.")
      }
  },
});
Template.typeControl.helpers({
  customers: function(){
    return Customers.find().fetch();
  },
  order_type: function () {
    type =  ORDER_TYPE
    return type
  }
});

Template.orderControl.helpers({
  current_type: function(){
    return Session.get("current_type");
  }
});

// -------single order/ order detail---------


Template.singleOrder.helpers({
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
var xeditables_measurement = function(){
  $('#price,#book,#neck,#full_chest,#full_shoulder,#sleeve,#bicep,#wrist,#waist,#hips').editable({
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = Number(newValue)
      //440.95
      var re = new RegExp("^[0-9]+(\.[0-9]{1,2})?$");
      if (re.test(data)) {
        Meteor.call('editOrder',
                  id,field,data,
                  function (error, result) {
                     if(error){
                       return error
                     }
                });
      } else {
        return 'Allow digit or decimal number only!'
      }
    }
  });
  $('#front_jacket_length,#front_chest_width,#back_width,#half_shoulder_width,#full_back_length,#half_back_length,#trouser_waist,#full_sleeve').editable({
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = Number(newValue)
      //440.95
      var re = new RegExp("^[0-9]+(\.[0-9]{1,2})?$");
      if (re.test(data)) {
        Meteor.call('editOrder',
                  id,field,data,
                  function (error, result) {
                     if(error){
                       return error
                     }
                });
      } else {
        return 'Allow digit or decimal number only!'
      }
    }
  });
  $('#trouser_outseam,#trouser_inseam,#thigh,#knee,#crotch').editable({
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = Number(newValue)
      //440.95
      var re = new RegExp("^[0-9]+(\.[0-9]{1,2})?$");
      if (re.test(data)) {
        Meteor.call('editOrder',
                  id,field,data,
                  function (error, result) {
                     if(error){
                       return error
                     }
                });
      } else {
        return 'Allow digit or decimal number only!'
      }
    }
  });
}
Template.shirtDetail.rendered = function() {
  xeditables_measurement();
}
Template.jacketDetail.rendered = function() {
  xeditables_measurement();
}
Template.trouserDetail.rendered = function() {
  xeditables_measurement();
}
Template.singleOrder.rendered = function() {
  xeditables_measurement();

  var Customers_obj=[];
  cus =  Customers.find().fetch();
  for (x in cus) {
    var customer=cus[x]
    var o = {};
    o[customer._id] = customer.lname + " " + customer.fname;
    Customers_obj.push(o);
  }
  $('#customer').editable({
    source: Customers_obj,
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = newValue
      Meteor.call('editOrder',
                id,field,data,
                function (error, result) {
                   if(error){
                     return error
                   }
              });
    }
  });

  $('#date,#expectation_date').editable({
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = new Date(newValue)
      Meteor.call('editOrder',
                id,field,data,
                function (error, result) {
                   if(error){
                     return error
                   }
              });
    },
    inputclass : "datepick",
    placement: function (context, source) {
      var popupWidth = 336;
      if(($(window).scrollLeft() + popupWidth) > $(source).offset().left){
        return "right";
      } else {
        return "left";
      }
    },
    datetimepicker : {
      weekStart : 1
    },
  });
  $('#status').editable({
    source: STATUS,
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = newValue
      Meteor.call('editOrder',
                id,field,data,
                function (error, result) {
                   if(error){
                     return error
                   }
              });
    }
  });
  $('#type').editable({
    source: ORDER_TYPE,
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = newValue
      Meteor.call('editOrder',
                id,field,data,
                function (error, result) {
                   if(error){
                     return error
                   }
              });
    }
  });
  $('#qty').editable({
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = Number(newValue)
      //440.95
      console.log(data)
      var re = new RegExp("^[0-9]+$");
      if (re.test(data)) {
        Meteor.call('editOrder',
                  id,field,data,
                  function (error, result) {
                     if(error){
                       return error
                     }
                });
      } else {
        return 'Allow digit number only!'
      }
    }
  });
  $('#notes').editable({
    success: function(response, newValue) {
      var id = $(this).data('pk');
      var field = $(this).data('name');
      var data = newValue

        Meteor.call('editOrder',
                  id,field,data,
                  function (error, result) {
                     if(error){
                       return error
                     }
                });

    }
  });
}
