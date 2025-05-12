class OrdersService {
    constructor() {
        this.orders = [];
        this.currentId = 1;
    }

    createOrder(orderData) {
        const newOrder = {
            id: this.currentId++,
            ...orderData,
            status: 'pending', // Default status
        };
        this.orders.push(newOrder);
        return newOrder;
    }

    getOrderById(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) {
            throw new Error('Order not found');
        }
        return order;
    }

    updateOrder(orderId, updatedData) {
        const orderIndex = this.orders.findIndex(o => o.id === orderId);
        if (orderIndex === -1) {
            throw new Error('Order not found');
        }
        this.orders[orderIndex] = {
            ...this.orders[orderIndex],
            ...updatedData,
        };
        return this.orders[orderIndex];
    }

    deleteOrder(orderId) {
        const orderIndex = this.orders.findIndex(o => o.id === orderId);
        if (orderIndex === -1) {
            throw new Error('Order not found');
        }
        this.orders.splice(orderIndex, 1);
        return { message: 'Order deleted successfully' };
    }

    getAllOrders() {
        return this.orders;
    }
}

export default OrdersService;