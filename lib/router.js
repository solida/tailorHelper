Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    name: 'home'
});
Router.route('report/orders', {
    name: 'orders'
});
Router.route('/order/create', {
    name: 'createOrder',
    template: 'createOrder',
});
Router.route('/order/edit', {
    name: 'editOrder'
});
Router.route('/invoice', {
    name: 'invoice'
});
Router.route('/customer/create', {
    name: 'createCustomer'
});
