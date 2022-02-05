//*** WEB MAP DIV

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






//** FEATURE LAYER DIV

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












//**STL CRIME MAP DIV

// Create a new map
require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "topo-vector"
  });

  // The MapView sets the extent.
  const view = new MapView({
    container: "viewDiv2",
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
