cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ms-appinsights/www/AppInsights.js",
        "id": "cordova-plugin-ms-appinsights.AppInsights",
        "clobbers": [
            "window.appInsights.config"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ms-appinsights/www/AppInsights.lib.js",
        "id": "cordova-plugin-ms-appinsights.AppInsightsLibrary",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.0.1",
    "cordova-plugin-ms-appinsights": "0.0.2",
    "cordova-plugin-whitelist": "1.1.1-dev"
}
// BOTTOM OF METADATA
});