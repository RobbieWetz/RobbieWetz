// Initialize Leaflet map
var map = L.map('nymap').setView([40.61938038665948, -74.11308099831606], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var stonehousemarker = L.marker([40.61833798043794, -74.10818864897371]).addTo(map);

// Add a popup to the marker
stonehousemarker.bindPopup(`
    <b>The Stone House</b><br>Scenic and high quality restaurant within Clove Lakes Park.<br>
    <img src="https://RobbieWetz.github.io/RobbieWetz/Images/StoneHouse.jpg" alt="The Stone House" style="width: 200px; height: auto;">
    `).openPopup();

// Add a marker to the map for New York City
var marker = L.marker([40.61797668668023, -74.1056101967246]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Stonehenge: Staten Island Department of Parks & Recreation</b><br>The main office of Clove Lakes Park.").openPopup();

// Add a marker to the map for New York City
var marker = L.marker([40.60958800757106, -74.14854131157864]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Todt Hill-Westerleigh Library</b><br>This library has been around since 1991!.").openPopup();

// Add a marker to the map for New York City
var marker = L.marker([40.6099219488223, -74.14950154241677]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Gaeta Park</b>").openPopup();

// Add a marker to the map for New York City
var marker = L.marker([40.61076493943147, -74.14633921798476]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Bagels N' Buns</b><br>This shop sells really good bagels and sandwhiches!.").openPopup();

// Add a marker to the map for New York City
var marker = L.marker([40.6104208213839, -74.14372138197243]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Wiesner Brothers Nursery Inc</b><br>Offers really good tree planting services and lots of exterior decor!.").openPopup();

// Add a marker to the map for New York City
var marker = L.marker([40.61443610078239, -74.11327831035833]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Royal Oak Little League Field</b>").openPopup();

// Add a marker to the map for New York City
var marker = L.marker([40.61573918212216, -74.10778514626172]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>WWII Veterans Memorial Ice Skating Rink</b><br>Very nice ice skating rink, open during the winter season!.").openPopup();



// Load the GeoJSON line file.
fetch('https://RobbieWetz.github.io/RobbieWetz/Robert_daytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change the coor as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJson line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
            console.error('Error loading GeoJson file:', error);
    });
        

// Load the GeoJSON line file.
fetch('https://RobbieWetz.github.io/RobbieWetz/Robert_eveningroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'blue', // Change the coor as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJson line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
            console.error('Error loading GeoJson file:', error);
    });     
