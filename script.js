let map;

let centro ={ lat: -6.889, lng: -38.544}

let marker;

let infowindow;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 14,
    zoomControl : false,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  });
  
  marker = new google.maps.Marker({
      position : centro,
      map,
      title: "Hello World",
      draggable : true,
      animation : google.maps.Animation.BOUNCE
  });

  marker.addListener("dblclick", ()=>{
      infowindow = new google.maps.InfoWindow({
        content: ""+marker.getPosition(),
      }).open({
          anchor : marker,
          map,
          shouldFocus: false,
      })
    

  });
  
  map.addListener("click", (evt)=>{
      marker.setPosition(evt.latLng);
  });

}

window.initMap = initMap;