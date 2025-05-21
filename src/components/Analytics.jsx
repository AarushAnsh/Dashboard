import { analyticsData } from "@/constants/analyticsData";

const Analytics = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {analyticsData.summaryCards.map((card, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500">{card.title}</p>
                                <h3 className="text-xl font-bold">{card.value}</h3>
                            </div>
                            <div className={`p-2 rounded-full ${card.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                                {card.icon && <card.icon className={`w-6 h-6 ${card.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />}
                            </div>
                        </div>
                        <p className={`text-sm ${card.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {card.change}
                        </p>
                    </div>
                ))}
            </div>

            {/* Sales by Category */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Sales by Category</h2>
                <div className="space-y-4">
                    {analyticsData.salesByCategory.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span>{item.category}</span>
                            <span className="font-semibold">₹{item.sales.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Performing Products */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Top Performing Products</h2>
                <div className="space-y-4">
                    {analyticsData.topPerformingProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span>{product.name}</span>
                            <div className="text-right">
                                <p className="font-semibold">{product.revenue}</p>
                                <p className="text-sm text-gray-500">{product.sales} units sold</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Analytics; 