Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    name: 'home'
});
Router.route('/report/orders', {
    name: 'orders',
    template: 'orders',
});
Router.route('/order/create', {
    name: 'createOrder',
    template: 'createOrder',
});
Router.route('/order/edit', {
    name: 'editOrder'
});
Router.route('/order/:id', {
    name: 'singleOrder',
    template: 'singleOrder',
    data: function(){
      return Orders.findOne({'_id':this.params.id})
     }
});
Router.route('/invoice', {
    name: 'invoice'
});
Router.route('/customer/create', {
    name: 'createCustomer'
});
