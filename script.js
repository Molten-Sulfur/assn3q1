//*** DISPLAY A MAP ALREADY BUILT ELSEWHERE AS AN ARCGIS WEB MAP

// Instantiate a webmap - a straightforward view of a webmap already present on ArcGIS Online.
require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
          portalItem: {
            id: "cc7ac178257442fe996da7714b805bc4"
            //The above id is the id of the webmap we're viewing.
          }
        });
  const view = new MapView({
          map: webmap,
          container: "webMapDiv"
        });
      });






//** BUILD A MAP USING FEATURE LAYERS

// Create a new map
require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "topo-vector"
  });

  // The MapView sets the extent.
  const view = new MapView({
    container: "featureLayerDiv",
    map: map,
    zoom: 9,
    center: [-1.7, 53.5]
  });
  
  // Add a feature layer
  const featureLayer1 = new FeatureLayer({
  url: "https://services.arcgis.com/XSeYKQzfXnEgju9o/ArcGIS/rest/services/IMD2015_7Domains/FeatureServer/0"
  });
  map.add(featureLayer1);

  // Add another feature layer, this one with specified symbology
  const featureLayer2 = new FeatureLayer({
    url: "https://services1.arcgis.com/h1C9f6qsGKmqXsVs/ArcGIS/rest/services/IBAs_UK/FeatureServer/0",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [ 155, 155, 155, 0.4 ], // Fourth value is opacity
        outline: { 
          width: 1,
          color: [ 100, 100, 100, 1 ]
        }
      }
    }
  });
  map.add(featureLayer2);
});












//**A CLEANER WAY TO BUILD A MAP USING FEATURE LAYERS.

// Create a new map
require([
  "esri/Map",
  "esri/layers/CSVLayer",
  "esri/views/MapView",
  "esri/config",
  "esri/core/urlUtils",
  "dojo/domReady!"
], function(Map, CSVLayer, MapView, esriConfig, urlUtils) {
  
  // Grab the URL
  var url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";
  esriConfig.request.corsEnabledServers.push('https://rawgit.com');
  
  //This is what we want the popup to look like.
  const template = {
    title: "Crime committed at {ILEADSStreet}"
  };
  
  //Define the layer
  const csvLayer = new CSVLayer({
    url: url,
    title: "St. Louis Crime Heatmap",
    copyright: "St. Louis Police Department",
    popupTemplate: template,
  });
  
  //Define what we want the symbol to look like.
  var symbol = {
    type: "simple-marker",
    color: "red",
    size: 4,
    outline: {
      width: 1,
      color: [255, 100, 100]
    }
  };

  //Now we tell our layer to use the symbol we defined above.
  csvLayer.renderer = {
        type: "simple",
        symbol: symbol
      };

  // Initialize a map.
  var map = new Map({
    basemap: "topo-vector",
    layers: [csvLayer]
  });

  //We know everything we need to know. Create the div!
  var view = new MapView({
    container: "crimeDiv",
    center: [-90.25, 38.65],
    zoom: 11,
    map: map
  });
});
