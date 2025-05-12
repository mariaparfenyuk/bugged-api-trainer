class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }

    async getOrders(req, res) {
        try {
            const orders = await this.ordersService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving orders', error: error.message });
        }
    }

    async getOrderById(req, res) {
        const { id } = req.params;
        try {
            const order = await this.ordersService.getOrderById(id);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error: error.message });
        }
    }

    async createOrder(req, res) {
        const orderData = req.body;
        try {
            const newOrder = await this.ordersService.createOrder(orderData);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(400).json({ message: 'Error creating order', error: error.message });
        }
    }

    async updateOrder(req, res) {
        const { id } = req.params;
        const orderData = req.body;
        try {
            const updatedOrder = await this.ordersService.updateOrder(id, orderData);
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(updatedOrder);
        } catch (error) {
            res.status(400).json({ message: 'Error updating order', error: error.message });
        }
    }

    async deleteOrder(req, res) {
        const { id } = req.params;
        try {
            const deleted = await this.ordersService.deleteOrder(id);
            if (!deleted) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting order', error: error.message });
        }
    }
}

export default OrdersController;