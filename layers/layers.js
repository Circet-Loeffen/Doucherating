var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Gebouw_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://service.pdok.nl/brt/top10nl/wms/v1_0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "gebouw",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gebouw',
                            popuplayertitle: 'Gebouw',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gebouw_1, 0]);
var lyr_LuchtfotoActueelOrtho8cmRGB_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Actueel_orthoHR",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Luchtfoto Actueel Ortho 8cm RGB',
                            popuplayertitle: 'Luchtfoto Actueel Ortho 8cm RGB',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LuchtfotoActueelOrtho8cmRGB_2, 0]);
var format_Doucherating_3 = new ol.format.GeoJSON();
var features_Doucherating_3 = format_Doucherating_3.readFeatures(json_Doucherating_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Doucherating_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Doucherating_3.addFeatures(features_Doucherating_3);
var lyr_Doucherating_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Doucherating_3, 
                style: style_Doucherating_3,
                popuplayertitle: 'Doucherating',
                interactive: true,
    title: 'Doucherating<br />\
    <img src="styles/legend/Doucherating_3_0.png" /> 4.5<br />\
    <img src="styles/legend/Doucherating_3_1.png" /> 5.0<br />\
    <img src="styles/legend/Doucherating_3_2.png" /> 5.5<br />\
    <img src="styles/legend/Doucherating_3_3.png" /> 6.0<br />\
    <img src="styles/legend/Doucherating_3_4.png" /> 6.5<br />\
    <img src="styles/legend/Doucherating_3_5.png" /> 7.0<br />\
    <img src="styles/legend/Doucherating_3_6.png" /> 7.5<br />\
    <img src="styles/legend/Doucherating_3_7.png" /> 8.0<br />\
    <img src="styles/legend/Doucherating_3_8.png" /> 8.5<br />\
    <img src="styles/legend/Doucherating_3_9.png" /> 9.0<br />\
    <img src="styles/legend/Doucherating_3_10.png" /> 9.5<br />\
    <img src="styles/legend/Doucherating_3_11.png" /> 10.0<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Gebouw_1.setVisible(true);lyr_LuchtfotoActueelOrtho8cmRGB_2.setVisible(true);lyr_Doucherating_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Gebouw_1,lyr_LuchtfotoActueelOrtho8cmRGB_2,lyr_Doucherating_3];
lyr_Doucherating_3.set('fieldAliases', {'id': 'id', 'Clubnaam': 'Clubnaam', 'Score': 'Score', 'Atribuut 1': 'Atribuut 1', 'Atribuut 2': 'Atribuut 2', 'Atribuut 3': 'Atribuut 3', 'Atribuut 4': 'Atribuut 4', 'Atribuut 5': 'Atribuut 5', 'Atribuut 6': 'Atribuut 6', });
lyr_Doucherating_3.set('fieldImages', {'id': 'TextEdit', 'Clubnaam': 'TextEdit', 'Score': 'TextEdit', 'Atribuut 1': 'TextEdit', 'Atribuut 2': 'TextEdit', 'Atribuut 3': 'TextEdit', 'Atribuut 4': 'TextEdit', 'Atribuut 5': 'TextEdit', 'Atribuut 6': 'TextEdit', });
lyr_Doucherating_3.set('fieldLabels', {'id': 'hidden field', 'Clubnaam': 'header label - always visible', 'Score': 'header label - always visible', 'Atribuut 1': 'inline label - visible with data', 'Atribuut 2': 'inline label - visible with data', 'Atribuut 3': 'inline label - visible with data', 'Atribuut 4': 'inline label - visible with data', 'Atribuut 5': 'inline label - visible with data', 'Atribuut 6': 'inline label - visible with data', });
lyr_Doucherating_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});