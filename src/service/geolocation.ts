import Coordinates from '../data/scavenger-hunt/Coordinates'

export function getLocation(successCallback:PositionCallback, errorCallback:PositionErrorCallback, unavailableCallback:(err:string)=>void){
  if(!navigator.geolocation){
    unavailableCallback('Geolocation is not supported by your browser')
  }else{
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback, {timeout:60000, enableHighAccuracy:true})
  }
}

// Gets the distance between two points in meters.
export function checkLocationDistance(source: Coordinates, dest: Coordinates) {
	if ((source.latitude === dest.latitude) && (source.longitude === dest.longitude)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * source.latitude/180;
		var radlat2 = Math.PI * dest.latitude/180;
		var theta = source.longitude-dest.longitude;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		return dist * 1.609344 * 1000;
	}
}