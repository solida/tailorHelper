Template.registerHelper('selected', function(c_id,id) {
  return c_id == id ? 'selected' : 'disabled';
});
Template.registerHelper('isCurrentType', function(a,b) {
  return a == b;
});
Template.registerHelper('formatDate', function(date) {
  if(date){
    if (moment) {
             return moment(date).format("DD-MM-YYYY");
         }
         else {
             return date;
         }
  }
  else{
    return null;

  }
});
