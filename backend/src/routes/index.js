const express = require('express');
const loginRoutes = require('./login');
const usersRoutes = require('./users');
const ordersRoutes = require('./orders');

const setRoutes = (app) => {
    app.use('/api/login', loginRoutes);
    app.use('/api/users', usersRoutes);
    app.use('/api/orders', ordersRoutes);
};

module.exports = setRoutes;