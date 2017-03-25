$(document).ready(function() {
    //declare var
    var map, mapProp, geocoder, infoWindow, search, locSearch, service, address, hero, volChoice;
    var volList = ["Volunteer", "Soup Kitchen", "Animal Shelter"];
    initMap();
    addVolOpp();

    // footer click functions to show search modals
    $("#findHero").on("click", function(){
	$("#findHeroModal").modal({backdrop: true});
	$("#heroList").html("");
	addHeros();
    });
    
    $("#beHero").on("click", function(){
	$("#beHeroModal").modal({backdrop: true});
    });

    $("#adopt").on("click", function(){
	$("#adoptModal").modal({backdrop: true});
    });

    //search functions
    // find a hero search function
    $("#findHeroSearch").on("click", function() {
	event.preventDefault();
	address = $("#heroList").val();
	herocode(geocoder, map);
	$("#findHeroModal").modal("hide");
    });

    // be hero search function;
    $("#beHeroSearch").on("click", function() {
	search = $("#volunteerList").val();
	locSearch = $("#heroZip").val().trim();
	codeAddress(geocoder, map);
	var key = "b68b14ba88588086d84e52175df4e6b5"
        var query;
        query = $("#heroZip").val().trim();
	console.log(query)
        $.ajax({
	    url: "http://www.volunteermatch.org/api/call?action=searchOpportunities&key=" + key + 
                "&query=%7B%22location%22:%22"+query+"%22%7D",
	    method: "GET",
	    dataType: "JSONP",
	    data: {
		action: "searchOrganizations"
	    }
        }).done(function(response) {
	    console.log(response.resultsSize)
            $("#volunteerMatchAPI").html(response.resultsSize)
	    // $("#test").append(test9)
        });
	setTimeout(function() {
 	    $("#beHeroModal").modal("hide"); 
 	}, 2000);
    });// close be hero seacrh function
    
    // adopt search function
    $("#adoptSearch").on("click", function() {
	search = "animal shelter";
	locSearch = $("#adoptZip").val().trim();
	codeAddress(geocoder, map);
	$("#adoptModal").modal("hide");
    });

     // Initialize Firebase
    function initMap() {
	mapProp= {
	    center: new google.maps.LatLng(51.508742, -0.120850),
	    zoom: 5,
	    styles: [
		{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
		{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
		{elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
		{
		    featureType: 'administrative.locality',
		    elementType: 'labels.text.fill',
		    stylers: [{color: '#ffffff'}]
		},
		{
		    featureType: 'landscape',
		    elementType: 'geometry',
		    stylers: [{color: '#c9323b'}]
		},
		{
		    featureType: "all",
		    elementType: "labels.text.stroke",
		    stylers: [{"visibility": "off"}]
		},
		{
		    featureType: 'poi',
		    elementType: 'labels.text.fill',
		    stylers: [{color: '#ffffff'}]
		},
		{
		    featureType: 'poi.park',
		    elementType: 'geometry',
		    stylers: [{color: '#99282f'}]
		},
		{
		    featureType: 'poi.park',
		    elementType: 'labels.text.fill',
		    stylers: [{color: '#ffffff'}]
		},
		{
		    featureType: 'road',
		    elementType: 'geometry',
		    stylers: [{color: '#38414e'}]
		},
		{
		    featureType: 'road',
		    elementType: 'geometry.stroke',
		    stylers: [{color: '#212a37'}]
		},
		{
		    featureType: 'road',
		    elementType: 'labels.text.fill',
		    stylers: [{color: '#9ca5b3'}]
		},
		{
		    featureType: 'road.highway',
		    elementType: 'geometry',
		    stylers: [{color: '#746855'}]
		},
		{
		    featureType: 'road.highway',
		    elementType: 'geometry.stroke',
		    stylers: [{color: '#1f2835'}]
		},
		{
		    featureType: 'road.highway',
		    elementType: 'labels.text.fill',
		    stylers: [{color: '#f3d19c'}]
		},
		{
		    featureType: 'transit',
		    elementType: 'geometry',
		    stylers: [{color: '#2f3948'}]
		},
		{
		    featureType: 'transit.station',
		    elementType: 'labels.text.fill',
		    stylers: [{color: '#d59563'}]
		},
		{
		    featureType: 'water',
		    elementType: 'geometry',
		    stylers: [{color: '#1e2339'}]
		},
		{
		    featureType: 'water',
		    elementType: 'labels.text.fill',
		    stylers: [{color: '#515c6d'}]
		},
		{
		    featureType: 'water',
		    elementType: 'labels.text.stroke',
		    stylers: [{color: '#17263c'}]
		}
            ]
	};
	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    } // close initMap

    // dynamically add list of reg heros to find a hero dropdown
    function addHeros(){
	for (var i = 0; i < heroes.length; i++) {
	    var newHero = $("<option class='hero'>");
	    newHero.attr("value", heroes[i].location);
	    newHero.text(heroes[i].alias);
	    $("#heroList").append(newHero);
	}
    };

    // add vonlunteer list
    function addVolOpp() {
	for (var i = 0; i < volList.length; i++) {
	    var volOpp = $("<option class='volunteer'>");
	    volOpp.attr("value", volList[i]);
	    volOpp.text(volList[i]);
	    $("#volunteerList").append(volOpp);
	}
    };
    
    
    // geocode zip code into latlng for google
    function codeAddress(geocoder, resultsMap) {
	geocoder = new google.maps.Geocoder();
	geocoder.geocode({'address': locSearch}, function(results, status) {
	    var locService = results[0].geometry.location;
	    var locationObj = {
		lat: locService.lat(),
		lng: locService.lng()
	    };
	    if (status == google.maps.GeocoderStatus.OK) {
		map.setCenter(results[0].geometry.location);
		// search within radius of zip and return to map
		var request = {
		    location: locationObj,
		    radius: 500,
		    query: search
		};

		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);
		
		function callback(results, status) {
		    if (status === google.maps.places.PlacesServiceStatus.OK) {
			for (var i = 0; i < results.length; i++) {
			    var place = results[i];
			    createMarker(results[i]);
			}
		    }
		}
		
function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            zoom: 15
            });
            
            infoWindow = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(place.name);
            infoWindow.open(map, this);
            });
        }
        
        } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        }
	    
    });
    };// close be hero seacrh function

    // find a hero search function   
    function herocode(geocoder, resultsMap) {
	geocoder = new google.maps.Geocoder();
	geocoder.geocode({'address': address}, function(results, status) {
	    if (status === 'OK') {
		map.setCenter(results[0].geometry.location);
		var marker = new google.maps.Marker({
		    map: map,
		    position: results[0].geometry.location
		});
	    } else {
		alert('Geocode was not successful for the following reason: ' + status);
	    }
	});
    }

    
		  
}); //close ready function
