import { customerData } from "@/constants/customerData";

const Customers = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Customers</h1>

            {/* Customer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">Total Customers</h3>
                    <p className="text-2xl font-bold">{customerData.customerStats.totalCustomers}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">New This Month</h3>
                    <p className="text-2xl font-bold">{customerData.customerStats.newThisMonth}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">Active Customers</h3>
                    <p className="text-2xl font-bold">{customerData.customerStats.activeCustomers}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">Average Order Value</h3>
                    <p className="text-2xl font-bold">{customerData.customerStats.averageOrderValue}</p>
                </div>
            </div>

            {/* Recent Customers */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Recent Customers</h2>
                <div className="space-y-4">
                    {customerData.recentCustomers.map((customer) => (
                        <div key={customer.id} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold">{customer.name}</h3>
                                    <p className="text-sm text-gray-500">{customer.email}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">{customer.totalSpent}</p>
                                    <p className="text-sm text-gray-500">{customer.totalOrders} orders</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer Segments */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Customer Segments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {customerData.customerSegments.map((segment) => (
                        <div key={segment.id} className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">{segment.name}</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Count: {segment.count}</span>
                                <span className="font-semibold">{segment.averageSpend}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer Feedback */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Recent Feedback</h2>
                <div className="space-y-4">
                    {customerData.customerFeedback.map((feedback) => (
                        <div key={feedback.id} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{feedback.customerName}</h3>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-lg ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600">{feedback.comment}</p>
                            <p className="text-sm text-gray-500 mt-2">{feedback.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Customers; 