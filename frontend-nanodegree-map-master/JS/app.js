'use strict';
var map;
var myLatlng = {
    lat: 32.727165,
    lng: -96.833186
};

var ViewModel = {
    query: ko.observable('will'),
    markerList: ko.observableArray(),
    initMap: function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 32.727165,
                lng: -96.833186
            },
            scrollwheel: false,
            zoom: 15
        });
    },
    makeMarker: function(position, name) {
        var marker = new google.maps.Marker({
            position: position,
            map: null,
            title: name
        });
        ViewModel.loadMarker(marker)
        ViewModel.markerList.push(marker)
    },
    loadMarker: function(marker) {
        marker.setMap(map);
    },
    removeMarker: function(marker) {
        marker.setMap(null);
    }
};



ko.applyBindings(ViewModel);
ViewModel.loadMarker(ViewModel.makeMarker({
    lat: 32.727165,
    lng: -96.833186
},"will"));

var updateMarker = ko.utils.arrayForEach(ViewModel.markerList(), function(marker) {
        if (ViewModel.query().indexOf(marker.getTitle())>-1) {
            ViewModel.loadMarker(marker);
        } else {
            ViewModel.removeMarker(marker);
        }
    })