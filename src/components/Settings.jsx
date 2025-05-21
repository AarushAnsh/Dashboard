import { settingsData } from "@/constants/settingsData";

const Settings = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            {/* User Preferences */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">User Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Theme</label>
                        <p className="mt-1">{settingsData.userPreferences.theme}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Language</label>
                        <p className="mt-1">{settingsData.userPreferences.language}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Timezone</label>
                        <p className="mt-1">{settingsData.userPreferences.timezone}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date Format</label>
                        <p className="mt-1">{settingsData.userPreferences.dateFormat}</p>
                    </div>
                </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Account Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name</label>
                        <p className="mt-1">{settingsData.accountSettings.companyName}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1">{settingsData.accountSettings.email}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <p className="mt-1">{settingsData.accountSettings.phone}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">GSTIN</label>
                        <p className="mt-1">{settingsData.accountSettings.gstin}</p>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(settingsData.notificationSettings).map(([key, value]) => (
                        <div key={key}>
                            <label className="block text-sm font-medium text-gray-700">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </label>
                            <p className="mt-1">{value ? 'Enabled' : 'Disabled'}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-bold mb-4">Security Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(settingsData.securitySettings).map(([key, value]) => (
                        <div key={key}>
                            <label className="block text-sm font-medium text-gray-700">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </label>
                            <p className="mt-1">{value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Backup Settings */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Backup Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(settingsData.backupSettings).map(([key, value]) => (
                        <div key={key}>
                            <label className="block text-sm font-medium text-gray-700">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </label>
                            <p className="mt-1">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings; 