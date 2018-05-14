var bold_Items;

window.onload = getBoldItems();

function getBoldItems() {
	bold_Items = document.getElementsByTagName('strong')
}

function highlight() {
	for (var i = 0; i < bold_Items.length; i++) {
		bold_Items[i].style.color = "#5b966c";
	}
}

function returnNormal() {
	for (var i = 0; i < bold_Items.length; i ++) {
		bold_Items[i].style.color = "black";
	}
}

function initMap() {
	var latlong17 = {lat:40.736911, lng: -73.998414};
	var latlong16 = {lat: 40.736003, lng: -73.982255};
	var latlong15 = {lat: 40.730740, lng: -73.984979};
	var latlong14 = {lat: 40.732520, lng: -73.983715};
	var latlong13 = {lat: 40.734265, lng: -73.992157};
	var latlong12 = {lat: 40.735350, lng: -73.994594};
	var latlong11 = {lat: 40.736342, lng: -73.992828};
	var latlong10 = {lat: 40.734890, lng: -73.997557};
	var latlong9 = {lat: 40.736362, lng: -74.009034};
	var latlong8 = {lat: 40.737030, lng: -73.992507};
	var latlong7 = {lat: 40.735873, lng: -73.993970};
	var latlong6 = {lat: 40.735487, lng: -73.993556};
	var latlong5 = {lat: 40.735293, lng: -73.994449};
	var latlong4 = {lat: 40.735576, lng: -73.994366};
	var latlong3 = {lat: 40.736551, lng: -73.996616};
	var latlong2 = {lat: 40.736148, lng: -73.995537};
	var latlong1 = {lat: 40.735574, lng: -73.997176};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: latlong13,
	});

	var marker = new google.maps.Marker({
		position: latlong17, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong16, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong15, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong14, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong13, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong12, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong11, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong10, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong9, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong8, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong7, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong6, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong5, 
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong4,
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong3,
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong2,
		map: map,
	});

	var marker = new google.maps.Marker({
		position: latlong1,
		map: map,
	});

};