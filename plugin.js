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
      loadMarkerClustererLib: true
    }
  });

  plugin.events.on('we-html-body-end', function (data) {
    var we = data.we;

    if (!we.config.apiKeys.googleMaps.key) {
      data.we.log.warn('Google maps api key is required for we-plugin-google-maps');
    } else {
      we.config.apiKeys.googleMaps.key = 'AIzaSyCkdl_5kJuofUhPMYjfozpnWWbsRYo7KWU'

      if (we.config.googleMaps.loadMarkerClustererLib) {
        data.html.text += '<script '+
          'src="https://googlemaps.github.io/js-marker-clusterer/src/markerclusterer.js"'+
        '></script>';
      }

      data.html.text += '<script async defer '+
        'src="https://maps.googleapis.com/maps/api/js?key='+we.config.apiKeys.googleMaps.key+'&callback=initMap"'+
      '></script>';
    }
  });

  return plugin;
};