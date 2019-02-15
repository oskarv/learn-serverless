'use strict'

const createOrder = (order) => {
    if (!order || !order.pizzaId || !order.address) {
        throw new Error('Please provide valid pizza type and delivery address')
    };

    return {"message":"Order Successfully Placed"};
};

module.exports = createOrder;
