ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([35.212653, -28.019882, 59.517169, -8.762860]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lignedebasespolygone_1 = new ol.format.GeoJSON();
var features_Lignedebasespolygone_1 = format_Lignedebasespolygone_1.readFeatures(json_Lignedebasespolygone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lignedebasespolygone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignedebasespolygone_1.addFeatures(features_Lignedebasespolygone_1);
var lyr_Lignedebasespolygone_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lignedebasespolygone_1, 
                style: style_Lignedebasespolygone_1,
                interactive: true,
                title: '<img src="styles/legend/Lignedebasespolygone_1.png" /> Ligne de bases polygone'
            });
var format_Locality_2 = new ol.format.GeoJSON();
var features_Locality_2 = format_Locality_2.readFeatures(json_Locality_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Locality_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locality_2.addFeatures(features_Locality_2);
var lyr_Locality_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Locality_2, 
                style: style_Locality_2,
                interactive: true,
                title: 'Locality'
            });
var format_evmar_23_test_3 = new ol.format.GeoJSON();
var features_evmar_23_test_3 = format_evmar_23_test_3.readFeatures(json_evmar_23_test_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_evmar_23_test_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_evmar_23_test_3.addFeatures(features_evmar_23_test_3);
var lyr_evmar_23_test_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_evmar_23_test_3, 
                style: style_evmar_23_test_3,
                interactive: true,
    title: 'evmar_23_test<br />\
    <img src="styles/legend/evmar_23_test_3_0.png" /> (06) Incidents Maritimes<br />\
    <img src="styles/legend/evmar_23_test_3_1.png" /> (01) Trafic et contrebande par voie maritime<br />\
    <img src="styles/legend/evmar_23_test_3_2.png" /> (01) Evénement naturel maritime (AHSC)<br />\
    <img src="styles/legend/evmar_23_test_3_3.png" /> (03) Infrastructure critique maritime<br />\
    <img src="styles/legend/evmar_23_test_3_4.png" /> (06) Plaisance et Tourisme<br />\
    <img src="styles/legend/evmar_23_test_3_5.png" /> (08) Environnement marin<br />\
    <img src="styles/legend/evmar_23_test_3_6.png" /> (06) Autres<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Lignedebasespolygone_1.setVisible(true);lyr_Locality_2.setVisible(true);lyr_evmar_23_test_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Lignedebasespolygone_1,lyr_Locality_2,lyr_evmar_23_test_3];
lyr_Lignedebasespolygone_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Locality_2.set('fieldAliases', {'name': 'name', 'fid': 'fid', 'District': 'District', 'Longitude': 'Longitude', 'latitude': 'latitude', 'TYPE': 'TYPE', });
lyr_evmar_23_test_3.set('fieldAliases', {'DATE DE DEBUT': 'DATE DE DEBUT', 'DATE FIN': 'DATE FIN', 'THEMATIQUES': 'THEMATIQUES', 'OBJET': 'OBJET', 'DISTRICT': 'DISTRICT', 'LOCALITE': 'LOCALITE', 'TYPES': 'TYPES', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'RESUME': 'RESUME', 'DESCRIPTIONS': 'DESCRIPTIONS', });
lyr_Lignedebasespolygone_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Locality_2.set('fieldImages', {'name': '', 'fid': '', 'District': '', 'Longitude': '', 'latitude': '', 'TYPE': '', });
lyr_evmar_23_test_3.set('fieldImages', {'DATE DE DEBUT': 'TextEdit', 'DATE FIN': 'TextEdit', 'THEMATIQUES': 'TextEdit', 'OBJET': 'TextEdit', 'DISTRICT': 'TextEdit', 'LOCALITE': 'TextEdit', 'TYPES': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'RESUME': 'TextEdit', 'DESCRIPTIONS': 'TextEdit', });
lyr_Lignedebasespolygone_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Locality_2.set('fieldLabels', {'name': 'inline label', 'fid': 'no label', 'District': 'inline label', 'Longitude': 'no label', 'latitude': 'no label', 'TYPE': 'no label', });
lyr_evmar_23_test_3.set('fieldLabels', {'DATE DE DEBUT': 'inline label', 'DATE FIN': 'no label', 'THEMATIQUES': 'inline label', 'OBJET': 'inline label', 'DISTRICT': 'no label', 'LOCALITE': 'inline label', 'TYPES': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'RESUME': 'no label', 'DESCRIPTIONS': 'no label', });
lyr_evmar_23_test_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});