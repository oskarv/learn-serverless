'use strict'

const deleteOrder = (id) => {
    if (!id) {
        throw new Error('Please specify order Id')
    }

    return {
        message: `Deleted order ${id}`
    }
};

module.exports = deleteOrder;