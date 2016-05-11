/**
 * Plugin.js file, set configs, routes, hooks and events here
 *
 * see http://wejs.org/docs/we/plugin
 */
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);
  // set plugin configs
  plugin.setConfigs({
    apiKeys: {
      googleMaps: {
        // set your api key here
        key: null
      }
    },
    googleMaps: {
      loadMarkerClustererLib: true,
      libraries: null
    }
  });

  plugin.events.on('we-html-body-end', function (data) {
    var we = data.we;

    if (!we.config.apiKeys.googleMaps) {
      data.we.log.warn('Google maps api key is required for we-plugin-google-maps');
    } else {
      if (we.config.googleMaps.loadMarkerClustererLib) {
        data.html.text += '<script '+
          'src="https://googlemaps.github.io/js-marker-clusterer/src/markerclusterer.js"'+
        '></script>';
      }

      data.html.text += '<script '+
        'src="https://maps.googleapis.com/maps/api/js?key='+we.config.apiKeys.googleMaps+(
          (we.config.googleMaps.libraries)? '&libraries='+we.config.googleMaps.libraries : ''
        )+'"'+
      '></script>';
    }
  });

  return plugin;
};