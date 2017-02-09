Meteor.methods({
    "deleteOrder" :function(id){
      Orders.remove( { _id: id }, 1)
     },
    "createOrderShirt" : function(
        customer,type,
        qty,price,book,expectation_date,notes,
        neck,full_chest,full_shoulder,
        sleeve,bicep,wrist,waist,hips
      ){
          if(expectation_date){
            expectation_date = new Date(expectation_date).setHours(0,0,0,0)
          }
          Orders.insert({
            "customer":customer,
            "type":type,
            "status":"Open",
            "date":new Date().setHours(0,0,0,0),
            "qty":qty,
            "price":price,
            "book":book,
            "expectation_date":expectation_date,
            "notes":notes,
            "neck":neck,
            "full_chest":full_chest,
            "full_shoulder":full_shoulder,
            "sleeve":sleeve,
            "bicep":bicep,
            "wrist":wrist,
            "waist":waist,
            "hips":hips
          })

    },
    "createOrderJacket" : function(
        customer,type,
        qty,price,book,expectation_date,notes,
        neck,full_chest,full_shoulder,
        sleeve,bicep,wrist,waist,hips,
        front_jacket_length,front_chest_width,
        back_width,half_shoulder_width,full_back_length,
        half_back_length,trouser_waist,full_sleeve
        ){
          if(expectation_date){
            expectation_date = new Date(expectation_date).setHours(0,0,0,0)
          }
          Orders.insert({
            "customer":customer,
            "type":type,
            "status":"Open",
            "date":new Date().setHours(0,0,0,0),
            "qty":qty,
            "price":price,
            "book":book,
            "expectation_date":expectation_date,
            "notes":notes,
            "neck":neck,
            "full_chest":full_chest,
            "full_shoulder":full_shoulder,
            "sleeve":sleeve,
            "bicep":bicep,
            "wrist":wrist,
            "waist":waist,
            "hips":hips,
            "front_jacket_length":front_jacket_length,
            "front_chest_width":front_chest_width,
            "back_width":back_width,
            "half_shoulder_width":half_shoulder_width,
            "full_back_length":full_back_length,
            "half_back_length":half_back_length,
            "trouser_waist":trouser_waist,
            "full_sleeve":full_sleeve
          })
    },
    "createOrderTrouser" : function(
        customer,type,
        qty,price,book,expectation_date,notes,
        hips,trouser_waist,trouser_outseam,trouser_inseam,thigh,knee,crotch
        ){
          if(expectation_date){
            expectation_date = new Date(expectation_date).setHours(0,0,0,0)
          }
          Orders.insert({
            "customer":customer,
            "type":type,
            "status":"Open",
            "date":new Date().setHours(0,0,0,0),
            "qty":qty,
            "price":price,
            "book":book,
            "expectation_date":expectation_date,
            "notes":notes,
            "hips":hips,
            "trouser_waist":trouser_waist,
            "trouser_outseam":trouser_outseam,
            "trouser_inseam":trouser_inseam,
            "thigh":thigh,
            "knee":knee,
            "crotch":crotch,
          })
    },
    "editOrder" : function(
        id,field,data
        ){
          if(field == 'expectation_date'){
            data = new Date(data).setHours(0,0,0,0)
          }
          var obj = {};
          obj[field] = data;
          Orders.update(
                     {_id :id},
                     {$set:obj}
          )
          return
    },
});
