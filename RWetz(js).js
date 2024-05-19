// Initialize Leaflet map
var map = L.map('nymap').setView([40.61938038665948, -74.11308099831606], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.61833798043794, -74.10818864897371]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>The Stone House</b><br>This is a Leaflet map.").openPopup();





// Load the GeoJSON line file.
fetch('')
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
        

        
