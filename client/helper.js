Template.registerHelper('selected', function(c_id,id) {
  return c_id == id ? 'selected' : 'disabled';
});
Template.registerHelper('isCurrentType', function(a,b) {
  return a == b;
});
