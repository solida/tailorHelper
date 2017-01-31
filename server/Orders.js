Meteor.methods({
    'createOrderShirt' : function(
        customer,type,
        qty,price,book,expectation_date,note,
        neck,full_chest,full_shoulder,
        sleeve,bicep,wrist,waist,hips
      ){
          Orders.insert({
            "customer":customer,
            "type":type,
            "status":'In Progress',
            "date":new Date(),
            "qty":qty,
            "price":price,
            "book":book,
            "expectation_date":expectation_date,
            "note":note,
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
    'createOrderJacket' : function(
        customer,type,
        qty,price,book,expectation_date,note,
        neck,full_chest,full_shoulder,
        sleeve,bicep,wrist,waist,hips,
        front_jacket_length,front_chest_width,
        back_width,half_shoulder_width,full_back_length,
        half_back_length,trouser_waist,full_sleeve
        ){
          Orders.insert({
            "customer":customer,
            "type":type,
            "status":'In Progress',
            "date":new Date(),
            "qty":qty,
            "price":price,
            "book":book,
            "expectation_date":expectation_date,
            "note":note,
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
    'createOrderTrouser' : function(
        customer,type,
        qty,price,book,expectation_date,note,
        hips,trouser_waist,trouser_outseam,trouser_inseam,thigh,knee,crotch
        ){
          Orders.insert({
            "customer":customer,
            "type":type,
            "status":'In Progress',
            "date":new Date(),
            "qty":qty,
            "price":price,
            "book":book,
            "expectation_date":expectation_date,
            "note":note,
            "hips":hips,
            "trouser_waist":trouser_waist,
            "trouser_outseam":trouser_outseam,
            "trouser_inseam":trouser_inseam,
            "thigh":thigh,
            "knee":knee,
            "crotch":crotch,
          })
    },

});