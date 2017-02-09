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
Router.route('/orders/create', {
    name: 'createOrder',
    template: 'createOrder',
});
Router.route('/order/:id', {
    name: 'singleOrder',
    template:'singleOrder',
    data: function(){
      return Orders.findOne({'_id':this.params.id})
    },
});
Router.route('/customers/create', {
    name: 'createCustomer',
    template:'createCustomer',
});
Router.route('/customer/:id', {
    name: 'customerDetail',
    template: 'customerDetail',
    data: function(){
      return Customers.findOne({'_id':this.params.id})
     }
});
Router.route('/report/customers', {
    name: 'customers',
    template: 'customers',
});
Router.route('/report/dirtydata', {
    name: 'dirtyData',
    template: 'dirtyData',
});
Router.route('/invoice', {
    name: 'invoice',
    template: 'invoice',
});
