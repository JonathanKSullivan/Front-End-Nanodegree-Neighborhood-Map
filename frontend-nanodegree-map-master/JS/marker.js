var locations = [
  {
	'name':'William\'s Fried Chicken',
	'loc': {
  	lat: 32.720131,
  	lng: -96.826152
	}
  },
  {
	'name':'Record\'s Barbecue',
	'loc': {
  	lat: 32.718916,
  	lng: -96.804507
	}
  },
  {
	'name':'Rudy\'s Chicken',
	'loc': {
  	lat: 32.709006,
  	lng: -96.80276
	}
  },
  {
	'name':'The Wild Detectives',
	'loc': {
  	lat: 32.747877,
  	lng: -96.827236
	}
  },
  {
	'name':'Sweet Georgia Brown',
	'loc': {
  	lat: 32.693757,
  	lng: -96.772873
	}
  },
  {
	'name':'South Dallas Cafe',
	'loc': {
  	lat: 32.662734,
  	lng: -96.870871
	}
  },
  {
	'name':'Wimpy\'s Hamburgers',
	'loc': {
  	lat: 32.778234,
  	lng: -96.848120
	}
  },
  {
	'name':'Elaine\'s Kitchen',
	'loc': {lat: 32.768587, lng: -96.769061}
  }
];









ko.computed( 
	function(){
		ko.utils.arrayForEach(ViewModel.results(), function(result){
			ViewModel.loadMarker({lat: result.location.coordinate.latitude, lng: result.location.coordinate.longitude}, result.name);
		});
	}, this)
function(){
		ko.utils.arrayForEach(ViewModel.results(), function(result){
			console.log(result.location.coordinate.latitude, result.location.coordinate.longitude, result.name);
		});
}
