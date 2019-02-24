'use strict'

const updateOrder = (id, updates) => {
    if (!id || Object.keys(updates).length === 0) {
        throw new Error('Please specify order id and desired updates')
    }

    return {
        message: `The order ${id} was successfully updated`
    }
};

module.exports = updateOrder;
