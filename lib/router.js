Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    name: 'home'
});
Router.route('/order', {
    name: 'orders'
});
Router.route('order/create', {
    name: 'createOrder'
});
Router.route('order/edit', {
    name: 'editOrder'
});
