import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Package } from "lucide-react";

export const analyticsData = {
    summaryCards: [
        {
            title: "Total Revenue",
            value: "₹45,231.89",
            change: "+20.1%",
            trend: "up",
            icon: DollarSign,
        },
        {
            title: "Active Users",
            value: "2,350",
            change: "+15.3%",
            trend: "up",
            icon: Users,
        },
        {
            title: "Total Orders",
            value: "1,234",
            change: "-3.2%",
            trend: "down",
            icon: ShoppingCart,
        },
        {
            title: "Products Sold",
            value: "3,456",
            change: "+8.5%",
            trend: "up",
            icon: Package,
        },
    ],
    salesByCategory: [
        { category: "Electronics", sales: 45000 },
        { category: "Clothing", sales: 35000 },
        { category: "Books", sales: 25000 },
        { category: "Home", sales: 30000 },
        { category: "Sports", sales: 20000 },
    ],
    monthlyRevenue: [
        { month: "Jan", revenue: 30000 },
        { month: "Feb", revenue: 35000 },
        { month: "Mar", revenue: 40000 },
        { month: "Apr", revenue: 45000 },
        { month: "May", revenue: 42000 },
        { month: "Jun", revenue: 48000 },
    ],
    topPerformingProducts: [
        { name: "iPhone 13", sales: 150, revenue: "₹15,00,000" },
        { name: "Samsung TV", sales: 120, revenue: "₹12,00,000" },
        { name: "MacBook Pro", sales: 80, revenue: "₹8,00,000" },
    ],
    userGrowth: [
        { month: "Jan", users: 1000 },
        { month: "Feb", users: 1200 },
        { month: "Mar", users: 1500 },
        { month: "Apr", users: 1800 },
        { month: "May", users: 2100 },
        { month: "Jun", users: 2350 },
    ],
}; 