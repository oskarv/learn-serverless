'use strict'

const Api = require('claudia-api-builder');
const getPizzas = require('./handlers/get-pizzas');
const createOrder = require('./handlers/create-order');

const api = new Api();

api.get('/', () => 'This is the base API page, please specify route');

api.get('/oskar', () => 'Oskar');

api.get('/pizzas', () => getPizzas());

api.get('/pizzas/{id}',
        request => getPizzas(request.pathParams.id),
    {
        error: 404
    }
)

api.post('/orders',
    request => createOrder(request.body),
    {
        success: 201,
        error: 400
    }
)

module.exports = api;