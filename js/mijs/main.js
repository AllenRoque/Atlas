var boundary = [-79.45835, -7.769083, -77.739494, -4.61979];

var map = L.map("map", {
  center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
  zoom: 8,
});

var defaultBase = L.tileLayer.provider("OpenStreetMap").addTo(map);

var baseLayers = {
  Streets: defaultBase,
  OpenTopoMap: L.tileLayer.provider("OpenTopoMap"),
  EsriWorldPhysical: L.tileLayer.provider("Esri.WorldPhysical"),
  EsriWorldImagery: L.tileLayer.provider("Esri.WorldImagery"),
  Watercolor: L.tileLayer.provider("Stamen.Watercolor"),
  WorldTerrain: L.tileLayer.provider("Esri.WorldTerrain"),
  WorldShadedRelief: L.tileLayer.provider("Esri.WorldShadedRelief"),
};

var layer001 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/Medio_Biologico/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer002 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_V_Bioecologico/MapServer/WMSServer?",
  {
    layers: "1",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer003 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/Medio_SEconomico/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer004 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_Aptitud_Urbano_Industrial/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer005 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_Poten_Socioeconomicas/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer006 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/Medio_Ambiental/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer007 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_V_Prod_RRNN_No_Renovales/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer008 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_V_Prod_RRNN_Renovales/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer009 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_Conflictos_Uso/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer010 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/ZEE/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer011 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/Medio_Fisico/MapServer/WMSServer?",
  {
    layers: "22",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer012 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/Informacion_Base/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer013 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/Medio_Cultural/MapServer/WMSServer?",
  {
    layers: "9,10",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer014 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_Peligros_Poten_Multiples/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer015 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_V_Historico_Cultural/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var layer016 = L.tileLayer.wms(
  "http://sigr.regioncajamarca.gob.pe:6080/arcgis/services/Map/SM_Vulnerabilidad/MapServer/WMSServer?",
  {
    layers: "0",
    format: "image/png",
    transparent: true,
    tiled: "true",
  }
);

var groupOverLays = {
  "BIOLOGÍA - GOBIERNO REGIONAL CAJAMARCA": {
    Medio_Biológico: layer001,
    Valor_Bioecológico: layer002,
  },
  "ECONOMÍA - GOBIERNO REGIONAL CAJAMARCA": {
    Sector_Económico: layer003,
    AptituD_Urbano_Industrial: layer004,
    Potencialidades_Socioeconómicas: layer005,
  },
  "MEDIO_AMBIENTE - GOBIERNO REGIONAL CAJAMARCA": {
    Medio_Ambiental: layer006,
    Produccion_Recursos_Naturales_No_Renovables: layer007,
    Produccion_Recursos_Naturales_Renovables: layer008,
  },
  "SOCIEDAD - GOBIERNO REGIONAL CAJAMARCA": {
    Conflictos_Uso: layer009,
    ZEE: layer010,
    Medio_Físico: layer011,
    Información_Base: layer012,
    Medio_Cultural: layer013,
    Peligros_Potenciales_Múltiples: layer014,
    Histórico_Cultural: layer015,
    Vulnerabilidad: layer016,
  },
};

L.control.groupedLayers(baseLayers, groupOverLays).addTo(map);
L.control.scale({ position: "bottomleft" }).addTo(map);
