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
          container: "viewDiv"
        });
      });
