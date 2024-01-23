/* jshint unused:false */
/*!
 * Project:     cv
 * File:        assets/js/front/gmap.js
 * Copyright(c) 2016-nowdays Baltrushaitis Tomas <tbaltrushaitis@gmail.com>
 * License:     MIT
 */

'use strict';

// -------------------------------------------------------------------------- //
//  Google Map
// -------------------------------------------------------------------------- //
function initMap () {

  let myLatlng, myLat, myLng, styles, mapOptions, map, marker, contentString, infoWindow;

  myLat = parseFloat('50.436336');
  myLng = parseFloat('30.488619');
  myLatlng = new window.google.maps.LatLng(myLat, myLng);

  styles = [
    {
      featureType: 'landscape'
      , stylers: [
          {color: '#f7f7f7'}
        ]
    }
    , {
      featureType: 'road'
      , stylers: [
          {hue: '#fff'}
          , {saturation: -70}
        ]
    }
    , {
      featureType: 'poi'   // points of interest
      , stylers: [
          {hue: ''}
        ]
    }
  ];

  mapOptions = {
    zoom:               9
    , scrollwheel:      false
    , center:           myLatlng
    , mapTypeId:        window.google.maps.MapTypeId.ROADMAP
    , disableDefaultUI: true
    , styles:           styles
  };

  map = new window.google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

  marker = new window.google.maps.Marker({
    position:    myLatlng
    , map:       map
    , animation: window.google.maps.Animation.DROP
    , title:     'I@Kyiv'
  });

  contentString = `Доброго вечора! Ми з України!`;
  infoWindow = new window.google.maps.InfoWindow({
    content: contentString
  });

  window.google.maps.event.addListener(marker, 'click', function () {
    infoWindow.open(map, marker);
  });

  window.google.maps.event.addListenerOnce(map, 'idle', function () {
    console.log('%c✓ %cGoogle Map LOADED', 'color:green;font-weight:bold;font-size:16px;', 'color:purple;font-weight:bold;');
  });

}

window.initMap = initMap;
