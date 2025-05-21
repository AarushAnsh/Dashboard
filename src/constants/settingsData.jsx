export const settingsData = {
    userPreferences: {
        language: "English",
        theme: "Light",
        timezone: "Asia/Kolkata",
        dateFormat: "DD/MM/YYYY",
    },
    accountSettings: {
        email: "admin@example.com",
        role: "Administrator",
        lastLogin: "2024-03-01 10:30 AM",
        twoFactorAuth: true,
    },
    notificationSettings: {
        emailNotifications: true,
        pushNotifications: true,
        orderUpdates: true,
        marketingEmails: false,
    },
    securitySettings: {
        passwordLastChanged: "2024-02-15",
        loginHistory: [
            {
                date: "2024-03-01 10:30 AM",
                device: "Chrome on Windows",
                location: "Mumbai, India",
            },
            {
                date: "2024-02-28 09:15 AM",
                device: "Safari on iPhone",
                location: "Delhi, India",
            },
        ],
        activeSessions: 2,
    },
    backupSettings: {
        lastBackup: "2024-03-01 12:00 AM",
        backupFrequency: "Daily",
        backupLocation: "Cloud Storage",
        retentionPeriod: "30 days",
    },
}; 