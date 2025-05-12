const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/ordersController');

const ordersController = new OrdersController();

// Route to get all orders
router.get('/', (req, res) => {
    // Intentionally buggy response
    res.status(200).json({
        orders: [], // Simulating no orders found
        message: "Orders retrieved successfully" // This message is correct
    });
});

// Route to create a new order
router.post('/', (req, res) => {
    const { order } = req.body;

    // Simulating a missing validation for order
    if (!order) {
        return res.status(400).json({
            error: "Order data is required" // This error is correct
        });
    }

    // Simulating successful order creation
    res.status(201).json({
        order: { id: 1, ...order }, // Simulating created order with an ID
        message: "Order created successfully" // This message is correct
    });
});

// Route to get a specific order by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    // Simulating an incorrect status code for a non-existent order
    if (id !== '1') {
        return res.status(404).json({
            error: "Order not found" // This error is correct
        });
    }

    // Simulating a valid order response
    res.status(200).json({
        order: { id: 1, item: "Sample Item", quantity: 2 }, // Simulating a found order
        message: "Order retrieved successfully" // This message is correct
    });
});

// Route to update an order
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { order } = req.body;

    // Simulating a wrong status code for successful update
    if (id === '1') {
        return res.status(200).json({
            order: { id: 1, ...order }, // Simulating updated order
            message: "Order updated successfully" // This message is correct
        });
    }

    // Simulating an order not found scenario
    res.status(404).json({
        error: "Order not found" // This error is correct
    });
});

// Route to delete an order
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // Simulating a successful deletion with incorrect response
    if (id === '1') {
        return res.status(200).json({
            message: "Order deleted successfully" // This message is correct
        });
    }

    // Simulating an order not found scenario
    res.status(404).json({
        error: "Order not found" // This error is correct
    });
});

module.exports = router;