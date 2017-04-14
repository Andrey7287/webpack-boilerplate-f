var ymap,
		marker,
		mobileView = window.matchMedia("(max-width: 768px)").matches,
		mapContainer = document.getElementById('map');

function init(){

	ymap = new ymaps.Map('map', {
			center: mobileView ? [55.766426, 37.650840] : [55.766590, 37.654703],
			zoom: 16,
			controls: []
	});


	marker = new ymaps.Placemark(
		[55.766426, 37.650840],{},{
			iconLayout: 'default#image',
			iconImageHref: '/images/map-marker.png',
			iconImageSize: [40, 54],
			iconImageOffset: [-20, -54]
		});

	ymap.geoObjects.add(marker);
}

mapContainer ? ymaps.ready(init) : console.warn('Yandex map is not defined');

