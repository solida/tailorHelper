Template.registerHelper('selected', function(c_id,id) {
  return c_id == id ? 'selected' : 'disabled';
});
Template.registerHelper('isCurrentType', function(a,b) {
  return a == b;
});
Template.registerHelper('isValueNull', function(value) {
  if(value==null || value==""){
    return "true"
  }
  return "false"
});
Template.registerHelper('defaultValue', function(value) {
  if(value==null || value==""){
    return "Not Entered"
  }
  return value
});
Template.registerHelper('formatDate', function(date) {
  if(date){
    if (moment) {
            try {
                return moment(new Date(date)).format("DD-MM-YYYY");
            }
            catch(err) {
               return null;
            }
         }
         else {
             return date;
         }
  }
  else{
    return null;

  }
});
Template.registerHelper('formatDateXeditable', function(date) {
  if(date){
    if (moment) {
            try {
                return moment(new Date(date)).format("YYYY-MM-DD");
            }
            catch(err) {
               return null;
            }
         }
         else {
             return date;
         }
  }
  else{
    return "Not Entered";
  }
});
Template.registerHelper('since', function(date) {
  if(date != null)
    return moment(date).fromNow();
  else
    return null;
});
Template.registerHelper('objectToJson', function(obj) {
  if(obj){
    return JSON.stringify(obj)
  }
  else
    return null;
});
