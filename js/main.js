	
	//Globals
var loader;
var HWvalue;


	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}

	function loadNewContent(newSection) {
		//create a new section element and insert it into the DOM
		var section = $('<section class="cd-section '+newSection+'"></section>').appendTo($('main'));
		//load the new content from the proper html file
		section.load(newSection+'.html .cd-section > *', function(event){
			//add the .cd-selected to the new section element -> it will cover the old one
			section.addClass('cd-selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//close navigation
				toggleNav(false);
			});
			section.prev('.cd-selected').removeClass('cd-selected');
			loadSlider();
		});

		$('main').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//once the navigation is closed, remove the old section from the DOM
			section.prev('.cd-section').remove();

		});

		if( $('.no-csstransitions').length > 0 ) {
			//if browser doesn't support transitions - don't wait but close navigation and remove old item
			toggleNav(false);
			section.prev('.cd-section').remove();
		}
	}


	function loadSlider(){
	console.log("slider called");

	$("#hw").roundSlider({
    radius: 85,
    sliderType: "min-range",
    min: 1,
    max: 1500,
    value: 500
	});

	$("#labs").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: 9
	});

	$("#project").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: 9
	});

	$("#presentation").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: 9
	});

	$("#midterm").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: 9
	});

	$("#final").roundSlider({
    radius: 85,
    min: 1,
    max: 1500,
    sliderType: "min-range",
    value: 19
	});

	var x=$("#final").data("roundSlider");
	console.log(x.getValue());
    
	}

//DOCument ready function

jQuery(document).ready(function($){



	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
	});
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
	});
	//select a new section
	$('.cd-nav li').on('click', function(event){
		event.preventDefault();
		var target = $(this),
			//detect which section user has chosen
			sectionTarget = target.data('menu');
		if( !target.hasClass('cd-selected') ) {
			//if user has selected a section different from the one alredy visible
			//update the navigation -> assign the .cd-selected class to the selected item
			target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');
			//load the new section
			loadNewContent(sectionTarget);
		} else {
			// otherwise close navigation
			toggleNav(false);
		}
	});

});










