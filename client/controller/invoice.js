Template.invoice.helpers({
  'orders': function(){
    customer = Session.get("select_customer");
    var today = new Date().setHours(0,0,0,0)
    var orders = Orders.find({'status':'Open'}).fetch();
    return orders
  },
  'get_today':function(){
    return moment(new Date()).format("MMMM DD,YYYY")
  },
  'get_customer':function(id){
      if(!id){
        return "Not Entered"
      }
      var cus = Customers.findOne({'_id':id});
      if(!cus){
        return "Not Found"
      }
      return cus.lname + " " + cus.fname;
  },
  'current_customer':function(orders){
      if((orders) && (orders.length>0)){
        cus_id = orders[0].customer
        if(!cus_id){
          return null
        }
        var cus = Customers.findOne({'_id':cus_id});
        if(!cus){
          return null
        }
        return cus
      }
      else{
        return null
      }
  },
  'get_selected_items':function(){
    if (Session.get("selected_items")){
      return items = Session.get("selected_items")
    }
  },
  'get_totals':function(price,qty){
    return Number(price)*Number(qty)
  },
  'get_left_money':function(price,qty,book){
    total = Number(price)*Number(qty)
    return total - Number(book)
  },
  'get_subtotal':function(items){
    var subtotal = {}
    subtotal['price']=0
    subtotal['book']=0
    subtotal['total']=0
    subtotal['left_money']=0
    for(i=0;i<items.length;i++){
      var price = Number(items[i].price)
      var qty = Number(items[i].qty)
      var book = Number(items[i].book)
      var total = Number(price*qty)
      var left_money = Number(total - book)
      subtotal['price']+=price
      subtotal['book']+=book
      subtotal['total']+=total
      subtotal['left_money']+=left_money
    }
    return subtotal
  },
});
Template.invoice.rendered = function() {
  Session.set("selected_items",null)
}
Template.invoice.events({
  "click #refresh_invoice":function(event){
    Session.set("selected_items",null)
  },
  "click #get_invoice": function (event) {
    var items = []
    var SearchFieldsTable = $("#tbl_order_list tbody");

    var trows = SearchFieldsTable[0].rows;
    //todo get only selected row
    $.each(trows, function (index, row) {
       if($(this).hasClass('selected')){
         var obj = $(this).attr("data-order")
         if(obj){
           console.log(typeof JSON.parse(obj))
           items.push(JSON.parse(obj))

         }
       }
    });
    console.log(items)
    Session.set("selected_items",items)
  }
})
