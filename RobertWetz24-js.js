// Initialize Leaflet map
var map = L.map('nymap').setView([40.61970613526795, -74.11355306711225], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.61846828210517, -74.10818864897371]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Stone House Restaurant</b><br>This is a Leaflet map.").openPopup();
