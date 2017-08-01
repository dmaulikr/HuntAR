
export default function atHomebase(user, character, distance){


 var kms = getDistanceFromLatLonInKm(
    user.currentLocation.coords.latitude,
    user.currentLocation.coords.longitude,
    character.homebase.coords.latitude,
    character.homebase.coords.longitude
  )

  if (kms < distance ) {
    return true
  } else {
    return false
  }

}



function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}



export function nearMe(user, location, distance){

 var kms = getDistanceFromLatLonInKm(
    user.currentLocation.coords.latitude,
    user.currentLocation.coords.longitude,
    location.location.coords.latitude,
    location.location.coords.longitude
  )

  if (kms < distance ) {
    return true
  } else {
    return false
  }

}



function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
