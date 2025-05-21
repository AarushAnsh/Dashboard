import { Home, ChartColumn, NotepadText } from "lucide-react";

export const dashboardData = {
    mainStats: {
        totalRevenue: "₹45,231.89",
        totalOrders: "1,234",
        totalCustomers: "2,350",
        totalProducts: "3,456",
    },
    recentActivity: [
        {
            id: 1,
            type: "New Order",
            description: "Order #1234 placed by Aarush",
            time: "2 minutes ago",
        },
        {
            id: 2,
            type: "New Customer",
            description: "Priya Patel registered",
            time: "5 minutes ago",
        },
        {
            id: 3,
            type: "Low Stock",
            description: "Wireless Headphones running low",
            time: "10 minutes ago",
        },
    ],
    quickActions: [
        {
            id: 1,
            title: "New Order",
            icon: Home,
            path: "/new-order",
        },
        {
            id: 2,
            title: "Add Product",
            icon: ChartColumn,
            path: "/add-product",
        },
        {
            id: 3,
            title: "Generate Report",
            icon: NotepadText,
            path: "/generate-report",
        },
    ],
}; 