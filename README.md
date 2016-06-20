# we-plugin-google-maps

We.js plugin to add suport to google maps API in your App

This plugin add google maps javascript API and MarkerClusterer lib in you html page

## Installation

```sh
we i we-plugin-google-maps
```

## Configuration

```js
// you local.js file
    apiKeys: {
      googleMaps: {
        // set your api key here
        key: null
      }
    },
    googleMaps: {
      loadMarkerClustererLib: true,
      libraries: 'places' // default null
    }
// ...
```

## Form fields

`google-maps-coords-picker`

## Links

> * We.js site: http://wejs.org

# License

Under [the MIT license](https://github.com/wejs/we/blob/master/LICENSE.md).