// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function() {
    "use strict";

    //var appInsightsConfig = {
    //    endpointUrl: "https://dc.services.visualstudio.com/v2/track"
    //};

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        // When and if device plugin is initialized, set up the device context
        if (device && appInsights && appInsights.context && appInsights.context.device) {
            appInsights.context.device.osversion = device.version;
            appInsights.context.device.os = device.platform;
            appInsights.context.device.model = device.model;
            appInsights.context.device.id = device.uuid;
        }

        initEvents();
    };

    function initEvents() {
        document.getElementById("btnTrackEvent").addEventListener("click", onTrackEventClick);
        document.getElementById("btnTrackException").addEventListener("click", onThrowExceptionClick);
        document.getElementById("btnTrackPageView").addEventListener("click", onTrackPageViewClick);
        
    }

    function onTrackEventClick(e) {
        // This will send a custom-defined event to your appInsights account
        var eventData = { ButtonId: "trackSingleEvent", Timestamp: new Date() };
        appInsights.trackEvent('click', eventData);
    }

    function onThrowExceptionClick(e) {
        // This will send an exception information to your appInsights account
        try {
            // Do some logic here which may
            throw new Error("Sample Error");
        } catch (err) {
            // Catch an error and send it to appInsights
            appInsights.trackException(err);
        }
    }

    function onTrackPageViewClick() {
        appInsights.trackPageView();
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();