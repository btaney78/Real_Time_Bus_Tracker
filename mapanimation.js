var map;
var markers = [];

//Set initial location
const initLoc = {lat:42.353350,lng:-71.091525};

//Initialize map
//This should only be called once to load the page
function initMap() {
	map = new google.maps.Map(
	document.getElementById('map'), {zoom: 13, center: initLoc});
	// Add bus markers to map
	addBusMarkers();
}

async function addBusMarkers() {
    var locations = await getBusLocations();
			
	locations.forEach(function(bus) {
	    var marker = getMarker(bus.id);
	    if(marker) {
		    moveMarker(marker, bus);
	    } else {
		    addMarker(bus);
	    }
    });
}

// The run function iterates every 15 seconds and updates map data
async function run(){
	// get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// Add/update bus markers
	addBusMarkers();
	// timer
	setTimeout(run, 15000);
} 

// This is crucial, do not change or delete
// Request bus data from MBTA
async function getBusLocations(){
	var url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	var response = await fetch(url);
	var json     = await response.json();
	return json.data;
}

// GetMarker function checks if there is an item in the 'markers' array with 'id'
// Function returns the bus id if there is a match, or 'undefined' if there are 
// no matching values in the 'markers' array.
function getMarker(id) {
	var marker = markers.find(function(item) {
		return item.id===id;
	});
	return marker;
}

// 'getIcon' function looks up a buses direction and sets the icon accordingly
function getIcon(bus) {
	if(bus.attributes.direction_id===0) {
		return 'red.png';
	} else {
		return 'blue.png';
	}
}

// 'addMarker' function 1) creates a marker for the bus passed into the function,
// 2) pushes the new marker onto the 'markers' array, & 3) Adds event listeners
// for 'mouseover' and 'mouseout'
function addMarker(bus) {			
	var icon = getIcon(bus);
	var currMarker= new google.maps.Marker({
		position: {
			lat: bus.attributes.latitude,
			lng: bus.attributes.longitude
		}, 
    	map: map,
		icon: icon,
		id: bus.id
	});
	markers.push(currMarker);

	// Creating infoWindow to be displayed when user hovers over marker
	var infoWindow = new google.maps.InfoWindow({
    	content: bus.attributes.occupancy_status
	});

	// To create the event listeners on each marker
	currMarker.addListener('mouseover', function() {
	    // Display the infoWindow at the marker's coordinates
	    infoWindow.open(map, currMarker);
	});

	currMarker.addListener('mouseout', function() {
		infoWindow.close();
	});
}

function moveMarker(marker, bus) {
	console.log("moveMarker was called");
	// Check direction & change logos if yes, not ready for this yet
	var icon = getIcon(bus);
	marker.setIcon(icon);		

    // Moves the marker to the new coordinates
	marker.setPosition({
    	lat: bus.attributes.latitude,
	    lng: bus.attributes.longitude
	});
}

window.onload = initMap;
run();