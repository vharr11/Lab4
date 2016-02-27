/* Comment: This variable adds a basemap and specifies
the location the map will focus on and the level of zoom
the map will load at */
var map = L.map('map').setView([34.055448, -90.182421], 4);

/* This tilelayer specifies which leaflet map will be used,
which includes some metadata about the map creation and the
maximum zoom level available for the map */
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(map);

/* This variable adds a tilelayer of WMS. Specified within
this section of text is the layer number of the specific aspect
of the WMS data to be displayed. The format of the tilelayer is
specified, and in this case is an image. Transparency is specified as
either true (possible) or false (not possible), and the attribution
information refers to (in this case) the source of the data. The .addTo(map)
command at the end adds this variable information to the map already specified
in the first variable.*/
var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer",{
	layers: 1,
	format: 'image/png',
	transparent: true,
	attribution: "NOAA"
}).addTo(map);

/* This variable adds a tilelayer of WMS. Specified within
this section of text is the layer name of the specific aspect
of the WMS data to be displayed. The format of the tilelayer is
specified, and in this case is an image. Transparency is specified as
either true (possible) or false (not possible), and the attribution
information refers to (in this case) the source of the data. The .addTo(map)
command at the end adds this variable information to the map already specified
in the first variable.*/
var radar = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",{
	layers: 'nexrad-n0r-900913',
	format: 'image/png',
	transparent: true,
	attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

/* This variable adds a tilelayer of WMS. Specified within
this section of text is the layer number of the specific aspect
of the WMS data to be displayed. The format of the tilelayer is
specified, and in this case is an image. Transparency is specified as
either true (possible) or false (not possible), and the attribution
information refers to (in this case) the source of the data. The .addTo(map)
command at the end adds this variable information to the map already specified
in the first variable.*/
var temperature = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer",{
	layers: 1,
  format: 'image/png',
  transparent: true,
  attribution: "Weather data © 2012 IEM Nexrad",
	opacity: 0.30
}).addTo(map);

/* This section of code creates a removabale overlay for each WMS tilelayer.
Overlay names should match the tilelayer name.*/
var overlays ={
	"Lightning": lightning,
  "Radar": radar,
	"Temperature":temperature
};

// This line of code adds the layer overlays to the basemap.
L.control.layers({}, overlays).addTo(map)
