import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { navbarLinks } from "./constants";
import { dashboardData } from "./constants/dashboardData";
import { customersData } from "./constants/customersData";
import { productsData } from "./constants/productsData";
import { settingsData } from "./constants/settingsData";
import { overviewData, recentSalesData, topProducts } from "./constants";
import { Home } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Router>
            <div className="flex h-screen">
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#1E1E2D] text-white"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Sidebar */}
                <div className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-[#1E1E2D] text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <div className="p-6 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#3699FF] rounded-lg">
                                <Home className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                                <p className="text-sm text-gray-400">Admin Panel</p>
                            </div>
                        </div>
                    </div>
                    <nav className="mt-4">
                        {navbarLinks.map((section) => (
                            <div key={section.title} className="mb-4">
                                <h2 className="px-4 text-sm font-semibold text-gray-400 uppercase">
                                    {section.title}
                                </h2>
                                <div className="mt-2">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className="flex items-center px-4 py-2 text-base text-gray-300 hover:bg-[#2D2D3F] hover:text-white"
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            <link.icon className="w-6 h-6 mr-3" />
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 lg:p-8 bg-[#F5F8FA] overflow-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/analytics" element={<Analytics data={dashboardData} />} />
                        <Route path="/reports" element={<Reports data={dashboardData} />} />
                        <Route path="/customers" element={<Customers data={customersData} />} />
                        <Route path="/new-customer" element={<NewCustomer data={customersData} />} />
                        <Route path="/verified-customers" element={<VerifiedCustomers data={customersData} />} />
                        <Route path="/products" element={<Products data={productsData} />} />
                        <Route path="/new-product" element={<NewProduct data={productsData} />} />
                        <Route path="/inventory" element={<Inventory data={productsData} />} />
                        <Route path="/settings" element={<Settings data={settingsData} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

// Dashboard Component
function Dashboard() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#181C32]">
                        Dashboard <span className="text-[#3699FF]">Overview</span>
                    </h1>
                    <p className="mt-2 text-base lg:text-lg text-gray-600">Welcome back! Here's what's happening with your store today.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 lg:mt-0">
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-[#3699FF] rounded-lg hover:bg-[#187DE4] transition-colors">
                        Download Report
                    </button>
                    <button className="px-4 py-2 text-sm font-semibold text-[#3699FF] border border-[#3699FF] rounded-lg hover:bg-[#3699FF] hover:text-white transition-colors">
                        Share
                    </button>
                </div>
            </div>
            
            {/* Overview Chart */}
            <div className="bg-white p-4 lg:p-8 rounded-xl shadow-sm mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <h2 className="text-xl lg:text-2xl font-bold text-[#181C32] mb-4 lg:mb-0">Overview</h2>
                    <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 text-sm font-medium text-[#3699FF] bg-blue-50 rounded-full">Monthly</span>
                        <span className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-50 rounded-full">Weekly</span>
                        <span className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-50 rounded-full">Daily</span>
                    </div>
                </div>
                <div className="h-64">
                    <div className="grid grid-cols-12 gap-2 lg:gap-4">
                        {overviewData.map((item) => (
                            <div key={item.name} className="col-span-1">
                                <div className="h-full flex flex-col justify-end">
                                    <div 
                                        className="bg-[#3699FF] rounded-t"
                                        style={{ height: `${(item.total / 6000) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs lg:text-sm text-center mt-2 text-gray-500">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Sales */}
            <div className="bg-white p-4 lg:p-8 rounded-xl shadow-sm mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl lg:text-2xl font-bold text-[#181C32]">Recent Sales</h2>
                    <button className="text-[#3699FF] hover:text-[#187DE4] font-semibold">View All</button>
                </div>
                <div className="space-y-4">
                    {recentSalesData.map((sale) => (
                        <div key={sale.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <img src={sale.image} alt={sale.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="text-lg font-medium text-[#181C32]">{sale.name}</p>
                                    <p className="text-base text-gray-500">{sale.email}</p>
                                </div>
                            </div>
                            <p className="text-lg font-semibold text-[#181C32]">₹{sale.total}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Products */}
            <div className="bg-white p-4 lg:p-8 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl lg:text-2xl font-bold text-[#181C32]">Top Products</h2>
                    <button className="text-[#3699FF] hover:text-[#187DE4] font-semibold">View All</button>
                </div>
                <div className="space-y-4">
                    {topProducts.map((product) => (
                        <div key={product.number} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <span className="w-10 h-10 flex items-center justify-center bg-[#3699FF] text-white rounded-full mr-4 text-lg">
                                    {product.number}
                                </span>
                                <img src={product.image} alt={product.name} className="w-12 h-12 rounded mr-4" />
                                <div>
                                    <p className="text-lg font-medium text-[#181C32]">{product.name}</p>
                                    <p className="text-base text-gray-500">{product.description}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold text-[#181C32]">₹{product.price}</p>
                                <p className="text-base text-gray-500">Status: {product.status}</p>
                                <p className="text-base text-gray-500">Rating: {product.rating}/5</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Analytics Component
function Analytics({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">Analytics</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Performance Metrics</h2>
                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(data.mainStats).map(([key, value]) => (
                        <div key={key} className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                            <p className="text-lg font-semibold text-[#181C32]">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Reports Component
function Reports({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">Reports</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Recent Activity Report</h2>
                {data.recentActivity.map((activity) => (
                    <div key={activity.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                        <p className="font-medium text-[#181C32]">{activity.type}</p>
                        <p className="text-gray-600">{activity.description}</p>
                        <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Customers Component
function Customers({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">Customers</h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm text-gray-500">Total Customers</h3>
                    <p className="text-xl font-semibold text-[#181C32]">{data.totalCustomers}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm text-gray-500">New Customers</h3>
                    <p className="text-xl font-semibold text-[#181C32]">{data.newCustomers}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm text-gray-500">Verified Customers</h3>
                    <p className="text-xl font-semibold text-[#181C32]">{data.verifiedCustomers}</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Customer List</h2>
                <div className="space-y-4">
                    {data.customerList.map((customer) => (
                        <div key={customer.id} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-[#181C32]">{customer.name}</p>
                                    <p className="text-gray-600">{customer.email}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Status: {customer.status}</p>
                                    <p className="text-sm text-gray-500">Total Orders: {customer.totalOrders}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// New Customer Component
function NewCustomer({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">New Customer</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Add New Customer</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <button type="submit" className="bg-[#3699FF] text-white px-4 py-2 rounded-md hover:bg-[#187DE4]">
                        Add Customer
                    </button>
                </form>
            </div>
        </div>
    );
}

// Verified Customers Component
function VerifiedCustomers({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">Verified Customers</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Verified Customer List</h2>
                <div className="space-y-4">
                    {data.customerList
                        .filter((customer) => customer.status === "Verified")
                        .map((customer) => (
                            <div key={customer.id} className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-[#181C32]">{customer.name}</p>
                                        <p className="text-gray-600">{customer.email}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Join Date: {customer.joinDate}</p>
                                        <p className="text-sm text-gray-500">Total Spent: {customer.totalSpent}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

// Products Component
function Products({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">Products</h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm text-gray-500">Total Products</h3>
                    <p className="text-xl font-semibold text-[#181C32]">{data.totalProducts}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm text-gray-500">Low Stock Products</h3>
                    <p className="text-xl font-semibold text-[#181C32]">{data.lowStockProducts}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm text-gray-500">Out of Stock Products</h3>
                    <p className="text-xl font-semibold text-[#181C32]">{data.outOfStockProducts}</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Product List</h2>
                <div className="space-y-4">
                    {data.productList.map((product) => (
                        <div key={product.id} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-[#181C32]">{product.name}</p>
                                    <p className="text-gray-600">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Price: {product.price}</p>
                                    <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// New Product Component
function NewProduct({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">New Product</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Add New Product</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                            {data.productStats.categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock</label>
                        <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <button type="submit" className="bg-[#3699FF] text-white px-4 py-2 rounded-md hover:bg-[#187DE4]">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}

// Inventory Component
function Inventory({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">Inventory</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Inventory Overview</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(data.productStats).map(([key, value]) => (
                        <div key={key} className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                            <p className="text-lg font-semibold text-[#181C32]">{value}</p>
                        </div>
                    ))}
                </div>
                <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Stock Status</h2>
                <div className="space-y-4">
                    {data.productList.map((product) => (
                        <div key={product.id} className="p-4 bg-gray-50 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-[#181C32]">{product.name}</p>
                                    <p className="text-gray-600">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Status: {product.status}</p>
                                    <p className="text-sm text-gray-500">Last Restocked: {product.lastRestocked}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Settings Component
function Settings({ data }) {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 text-[#181C32]">Settings</h1>
            <div className="space-y-6">
                {/* User Preferences */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4 text-[#181C32]">User Preferences</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(data.userPreferences).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <p className="text-lg font-medium text-[#181C32]">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Account Settings */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Account Settings</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(data.accountSettings).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <p className="text-lg font-medium text-[#181C32]">{value.toString()}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Notification Settings</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(data.notificationSettings).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <p className="text-lg font-medium text-[#181C32]">{value ? "Enabled" : "Disabled"}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Security Settings</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-sm text-gray-500">Password Last Changed</h3>
                            <p className="text-lg font-medium text-[#181C32]">{data.securitySettings.passwordLastChanged}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-sm text-gray-500">Active Sessions</h3>
                            <p className="text-lg font-medium text-[#181C32]">{data.securitySettings.activeSessions}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-sm text-gray-500">Login History</h3>
                            {data.securitySettings.loginHistory.map((login, index) => (
                                <div key={index} className="mt-2">
                                    <p className="text-sm text-[#181C32]">{login.date}</p>
                                    <p className="text-sm text-gray-500">{login.device}</p>
                                    <p className="text-sm text-gray-500">{login.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Backup Settings */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4 text-[#181C32]">Backup Settings</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(data.backupSettings).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                <p className="text-lg font-medium text-[#181C32]">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
