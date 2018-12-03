function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.4284798,
            lng: 30.5921161
        },
        zoom: 12,
        styles: [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
            }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
            }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#17263c'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#515c6d'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
            }]
        }
        ]
    });
}
$(document).ready(function(){

	// Бургер-меню для мобильных устройств
	$(".mobile-nav-menu__burger").click(function(){
		$(".mobile-nav-menu__burger").toggleClass("burger_toggle");
		$(".mobile-nav-menu__list").slideToggle("slow");
	});

	// Бургер-меню для tablet устройств
	$(".tablet-nav-menu__burger").click(function(){
		$(".tablet-nav-menu__burger").toggleClass("burger_toggle");
		$(".tablet-nav-menu__list").toggleClass("tablet-nav-menu__list_show");
	});

	//Контроль активного пункта меню
	$(".nav-list li a").click(function(){
		$(".nav-list li a").each(function(){
			$(".nav-list li a").toggleClass("active");
		})
	})

	//При больших разрешениях (>1440px) смещаем меню так, чтобы был в котейнере не смотря на position: fixed

	function windowSize(){
    if ($(window).width() >= '1440'){
			$(".nav-menu").css("margin-left", "calc(100vw - 1440px - (100vw - 1440px)/2)");
    } else {
			$(".nav-menu").css("margin-left", "0");
		}
	}

	$(window).on('load resize', windowSize);


	// Слайдер "Галерея" на главной странице

	function slideHomeGallery(){

		let $item = $('.home-gallery__img');
		let $prev = $('.home-gallery__prev');
		let $next = $('.home-gallery__next');
		
		$item.first().addClass('current');

		let index = $item.filter('.current').index();
		let $prevImg = $item.eq(index - 1).css('background-image');
		$prev.css('background-image', $prevImg);
		let $nextImg = $item.eq(index + 1).css('background-image');
		$next.css('background-image', $nextImg);
	
		$prev.click(function(){

			let index = $item.filter('.current').index();
	
			if(index == 0){
				index = $item.length;
			}
	
			$item.eq(index - 1).addClass('current').siblings().removeClass('current');

			index = $item.filter('.current').index();
			let $prevImg = $item.eq(index - 1).css('background-image');
			$prev.css('background-image', $prevImg);
			let $nextImg = $item.eq(index + 1).css('background-image');
			$next.css('background-image', $nextImg);

		});

		$next.click(function(){

			let index = $item.filter('.current').index();
	
			if(index == $item.length - 1){
				index = -1;
			}
	
			$item.eq(index + 1).addClass('current').siblings().removeClass('current');

			index = $item.filter('.current').index();
			let $prevImg = $item.eq(index - 1).css('background-image');
			$prev.css('background-image', $prevImg);
			let $nextImg = $item.eq(index + 1).css('background-image');
			$next.css('background-image', $nextImg);
			
		});

	};

	slideHomeGallery();

});

$(document).ready(function () {

    // Block Main page -> Small menu list

    function showMenuItems () {

        let randomArray = [];
        let randomValue = 0;

        for (let i = 0; i < numberOfShowItems; i++) {
            randomValue = Math.floor(Math.random() * countMenuElements);
            while (randomArray.indexOf(randomValue) > -1) {
                randomValue = Math.floor(Math.random() * countMenuElements);
            }
            randomArray[i] = randomValue;
        }


        $(".main-menu__item").each(function () {
            $(this).removeClass('main-menu__item_active');

        });

        for (let i = 0; i < numberOfShowItems; i++) {
            $('body')
                .find(".main-menu__items > div:eq(" + randomArray[i] + ")")
                .addClass("main-menu__item_active");
            let tmp = $(".main-menu__items > div:eq(" + randomArray[i] + ")");
            let widthMainMenuItem = tmp.outerWidth();
            tmp.attr('style', 'height: ' + widthMainMenuItem + 'px');

        }

    }

    let countMenuElements = $(".main-menu__items > div").length;
    console.log(countMenuElements);
    console.log($('body').outerWidth());
    let numberOfShowItems = 0;

    if ($('.main-menu__items').outerWidth() > 980) {
        numberOfShowItems = 4;

    } else {
        numberOfShowItems = 3;

    }


    showMenuItems();

    setInterval(showMenuItems, 2000);

    $(window).on('resize', function () {

        $(".main-menu__item").each(function () {
            let widthMainMenuItem = $(document).find('.main-menu__item').outerWidth();
            let tmp = $(this);
            tmp.attr('style', 'height:' + widthMainMenuItem + 'px;');

        });

        if ($('.main-menu__items').outerWidth() > 980) {
            numberOfShowItems = 4;
            // showMenuItems();
        } else {
            numberOfShowItems = 3;
            // showMenuItems();
        }


    });




});
//reserve-btn
let formmain = document.getElementById('reserve-main-click');
let form = document.getElementById('reserve-click');

function hideReserveBtn (event) {
    if (event.target.tagName === 'INPUT'){
        document.getElementById('res-btn').classList.add('display-none');
    }
    event.stopPropagation();
}

formmain.addEventListener('click', hideReserveBtn);
form.addEventListener('click', hideReserveBtn);

function showbtn(){
    document.getElementById('res-btn').classList.remove('display-none');
}
document.body.addEventListener('click', showbtn, false);