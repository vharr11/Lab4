/* Comment: This variable adds a map object and specifies
the geographic location  the map will start at and the zoom level */
var map = L.map('map').setView([34.055448, -90.182421], 4);

/* This tilelayer specifies the leaflet basemap,and includes
 metadata about the map creation (attribution) and the maximum zoom level.
 The .addTo(map) commmand adds this leaflet basemap to the previously specified
 map object */
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(map);

/* This variable adds a WMS tilelayer for lightning. "layer" specifies the
aspect of the WMS data to be displayed. "Format" specifies  the type of data,
in this case "image/png". Transparency is specified as either true (transparent)
or false (opaque). "Attribution" information refers to metadata. The .addTo(map)
command adds this variable to the previously specified map object */
var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer",{
	layers: 1,
	format: 'image/png',
	transparent: true,
	attribution: "NOAA"
}).addTo(map);

/* This variable adds a WMS tilelayer for radar. "layer" specifies the
aspect of the WMS data to be displayed. "Format" specifies  the type of data,
in this case "image/[ng]". Transparency is specified as either true (transparent)
or false (opaque). "Attribution" information refers to metadata. The .addTo(map)
command adds this variable to the previously specified map object */
var radar = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi",{
	layers: 'nexrad-n0r-900913',
	format: 'image/png',
	transparent: true,
	attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

/* This variable adds a WMS tilelayer for temperatures. "layer" specifies the
aspect of the WMS data to be displayed. "Format" specifies  the type of data,
in this case "image/png". Transparency is specified as either true (transparent)
or false (opaque). "Attribution" information refers to metadata. "Opacity" specifies
how transparent the tilelayer will be. The .addTo(map) command adds this variable to
the previously specified map object */
var temperature = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer",{
	layers: 1,
  format: 'image/png',
  transparent: true,
  attribution: "Weather data © 2012 IEM Nexrad",
	opacity: 0.30
}).addTo(map);

/* This varable creates a removabale overlay for each WMS tilelayer.
Overlay names should match the tilelayer name.*/
var overlays ={
	"Lightning": lightning,
  "Radar": radar,
	"Temperature":temperature
};

/* This line of code adds the layer overlays to the basemap.
{} is required as the first item in the array for the overlays
to reference */
L.control.layers({}, overlays).addTo(map)
