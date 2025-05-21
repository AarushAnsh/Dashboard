export const inventoryData = {
    stockAlerts: [
        {
            id: 1,
            product: "Wireless Headphones",
            currentStock: 5,
            minStock: 10,
            status: "Low Stock",
            category: "Electronics",
            lastRestocked: "2024-03-01",
        },
        {
            id: 2,
            product: "Smartphone X",
            currentStock: 3,
            minStock: 8,
            status: "Critical",
            category: "Electronics",
            lastRestocked: "2024-02-15",
        },
        {
            id: 3,
            product: "Laptop Pro",
            currentStock: 12,
            minStock: 15,
            status: "Warning",
            category: "Electronics",
            lastRestocked: "2024-03-10",
        },
    ],
    inventoryStats: {
        totalProducts: 250,
        lowStock: 15,
        outOfStock: 5,
        totalValue: "₹25,00,000",
        categories: 8,
    },
    productCategories: [
        {
            id: 1,
            name: "Electronics",
            count: 100,
            value: "₹15,00,000",
        },
        {
            id: 2,
            name: "Clothing",
            count: 75,
            value: "₹5,00,000",
        },
        {
            id: 3,
            name: "Books",
            count: 50,
            value: "₹2,50,000",
        },
    ],
    recentMovements: [
        {
            id: 1,
            product: "Wireless Headphones",
            type: "Stock In",
            quantity: 20,
            date: "2024-03-15",
        },
        {
            id: 2,
            product: "Smartphone X",
            type: "Stock Out",
            quantity: 5,
            date: "2024-03-14",
        },
    ],
}; 