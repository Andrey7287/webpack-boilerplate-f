var map,
		marker,
		center = [55.670133, 37.552427],
		isMap = document.getElementById('map');

function init(){

	map = new ymaps.Map('map', {
			center: center,
			zoom: 16
	});


	marker = new ymaps.Placemark(center);

	map.geoObjects.add(marker);
	map.behaviors.disable('scrollZoom');
	map.behaviors.disable('drag');
	map.controls.add(
	 new ymaps.control.ZoomControl()
	);
	map.controls.add(
	 new ymaps.control.ToolBar()
	);

}

isMap && ymaps ? ymaps.ready(init) : console.log('There is no active map or API didn`t load');

