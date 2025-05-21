import { inventoryData } from "@/constants/inventoryData";

const Inventory = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

            {/* Inventory Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">Total Products</h3>
                    <p className="text-2xl font-bold">{inventoryData.inventoryStats.totalProducts}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">Low Stock Items</h3>
                    <p className="text-2xl font-bold">{inventoryData.inventoryStats.lowStock}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">Out of Stock</h3>
                    <p className="text-2xl font-bold">{inventoryData.inventoryStats.outOfStock}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-gray-500">Total Value</h3>
                    <p className="text-2xl font-bold">{inventoryData.inventoryStats.totalValue}</p>
                </div>
            </div>

            {/* Stock Alerts */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Stock Alerts</h2>
                <div className="space-y-4">
                    {inventoryData.stockAlerts.map((alert) => (
                        <div key={alert.id} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold">{alert.product}</h3>
                                    <p className="text-sm text-gray-500">Category: {alert.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`font-semibold ${
                                        alert.status === 'Critical' ? 'text-red-600' : 
                                        alert.status === 'Low Stock' ? 'text-yellow-600' : 'text-blue-600'
                                    }`}>
                                        {alert.status}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Stock: {alert.currentStock} / Min: {alert.minStock}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Categories */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Product Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {inventoryData.productCategories.map((category) => (
                        <div key={category.id} className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">{category.name}</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Items: {category.count}</span>
                                <span className="font-semibold">{category.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Movements */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Recent Stock Movements</h2>
                <div className="space-y-4">
                    {inventoryData.recentMovements.map((movement) => (
                        <div key={movement.id} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold">{movement.product}</h3>
                                    <p className="text-sm text-gray-500">{movement.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`font-semibold ${
                                        movement.type === 'Stock In' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {movement.type}
                                    </p>
                                    <p className="text-sm text-gray-500">Quantity: {movement.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inventory; 