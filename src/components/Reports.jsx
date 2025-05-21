import { reportsData } from "@/constants/reportsData";

const Reports = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Reports</h1>

            {/* Recent Reports */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Recent Reports</h2>
                <div className="space-y-4">
                    {reportsData.recentReports.map((report) => (
                        <div key={report.id} className="border-b pb-4 last:border-b-0">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold">{report.title}</h3>
                                    <p className="text-sm text-gray-500">
                                        {report.date} • {report.type} • {report.size}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`px-2 py-1 rounded text-sm ${
                                        report.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {report.status}
                                    </span>
                                    <button className="text-blue-600 hover:text-blue-800">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Report Templates */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Report Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reportsData.reportTemplates.map((template) => (
                        <div key={template.id} className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">{template.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{template.description}</p>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">Format: {template.format}</span>
                                <span className="text-gray-500">Schedule: {template.schedule}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Report Categories */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Report Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {reportsData.reportCategories.map((category) => (
                        <div key={category.id} className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">{category.name}</h3>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-500">Reports: {category.count}</span>
                                <span className="text-gray-500">Updated: {category.lastUpdated}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reports; 