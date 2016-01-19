'use strict';
var map;
var myLatlng = {
    lat: 32.727165,
    lng: -96.833186
};

var ViewModel = {
    query: ko.observable(''),
    markerList: ko.observableArray(),
    markerListView: ko.observableArray(),

    initMap: function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 32.727165,
                lng: -96.833186
            },
            scrollwheel: false,
            zoom: 13
        });
    },
    makeMarker: function(position, name, snippet_text, url, phone, address) {
        var marker = new google.maps.Marker({
            position: position,
            map: null,
            animation: google.maps.Animation.DROP,
            title: name
        });
        var infowindow = new google.maps.InfoWindow({content: "<h2><a href="+url+">"+name+"</a></h2><h3>"+phone+"</h3><h4>"+address+"</h4><p>"+snippet_text+"</p>"});
        marker.addListener('click', function() {infowindow.open(map, marker); marker.setAnimation(google.maps.Animation.BOUNCE); setTimeout(function() {marker.setAnimation(null)}, 5000);});
        ViewModel.loadMarker(marker);
        ViewModel.markerList.push(marker);

    },
    loadMarker: function(marker) {
        marker.setMap(map);
    },
    removeMarker: function(marker) {
        marker.setMap(null);
    },
    updateMarker:  function(marker) { 
       	ko.utils.arrayForEach(ViewModel.markerList(), function(marker) { 		
    		ViewModel.removeMarker(marker);
    		
    	});
    	
    	ViewModel.markerList.removeAll();
    	ViewModel.loader();
    	ko.utils.arrayForEach(ViewModel.markerList(), function(marker) {
    		ViewModel.loadMarker(marker);
    		
    	});
    },
    loadMarkers : function(location, name, snippet_text, url, phone, address){ViewModel.makeMarker(location, name, snippet_text, url, phone, address);},
    loader: function(){
		ko.utils.arrayForEach(ViewModel.results(), function(result){
			ViewModel.loadMarkers({
				lat: result.location.coordinate.latitude, 
				lng: result.location.coordinate.longitude
			}, 
		result.name,
		result.snippet_text,
		result.url, 
		result.display_phone,
        result.location.address[0]);
	});
	},
    listClick: function(i){ new google.maps.event.trigger(ViewModel.markerList()[i], 'click')}
}

ko.applyBindings(ViewModel);



