var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LapakGIS_Batas_Kabupaten_2024_1 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kabupaten_2024_1 = format_LapakGIS_Batas_Kabupaten_2024_1.readFeatures(json_LapakGIS_Batas_Kabupaten_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kabupaten_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIS_Batas_Kabupaten_2024_1.addFeatures(features_LapakGIS_Batas_Kabupaten_2024_1);
var lyr_LapakGIS_Batas_Kabupaten_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapakGIS_Batas_Kabupaten_2024_1, 
                style: style_LapakGIS_Batas_Kabupaten_2024_1,
                popuplayertitle: 'LapakGIS_Batas_Kabupaten_2024',
                interactive: true,
    title: 'LapakGIS_Batas_Kabupaten_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_0.png" /> 31 - 41.8<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_1.png" /> 41.8 - 45.2<br />\
    <img src="styles/legend/LapakGIS_Batas_Kabupaten_2024_1_2.png" /> 45.2 - 59<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_LapakGIS_Batas_Kabupaten_2024_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LapakGIS_Batas_Kabupaten_2024_1];
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldAliases', {'kabupaten': 'kabupaten', 'provinsi': 'provinsi', '2022_makanan2022': '2022_makanan2022', '2022_bukanmakanan2022': '2022_bukanmakanan2022', '2023_makanan2023': '2023_makanan2023', '2023_bukanmakanan2023': '2023_bukanmakanan2023', '2024_makanan2024': '2024_makanan2024', '2024_bukanmakanan2024': '2024_bukanmakanan2024', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldImages', {'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', '2022_makanan2022': 'TextEdit', '2022_bukanmakanan2022': 'TextEdit', '2023_makanan2023': 'TextEdit', '2023_bukanmakanan2023': 'TextEdit', '2024_makanan2024': 'TextEdit', '2024_bukanmakanan2024': 'TextEdit', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.set('fieldLabels', {'kabupaten': 'inline label - visible with data', 'provinsi': 'inline label - visible with data', '2022_makanan2022': 'inline label - visible with data', '2022_bukanmakanan2022': 'inline label - visible with data', '2023_makanan2023': 'inline label - visible with data', '2023_bukanmakanan2023': 'inline label - visible with data', '2024_makanan2024': 'inline label - visible with data', '2024_bukanmakanan2024': 'inline label - visible with data', });
lyr_LapakGIS_Batas_Kabupaten_2024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});