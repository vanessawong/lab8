function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.874, lng:-117.243};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "Student Services Center"
	});
}