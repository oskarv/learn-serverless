'use strict'

const updateOrder = (id, updates) => {
    if (!id || !updates) {
        throw new Error('Please specify order id and desired updates')
    }

    return {
        message: `The order ${id} was successfully updated.`
    }
};

module.exports = updateOrder;
