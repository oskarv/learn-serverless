'use strict'

const createOrder = (order) => {
    if (!order || !order.pizzaId || !order.address) {
        throw new Error('Please provide valid pizza type and delivery address')
    };

    return {};
};

module.exports = createOrder;
