//tooltips
$('[data-toggle="tooltip"]').tooltip();
$('.toast').toast();


// гибкая фотогалерея
$('.flex-images').flexImages({rowHeight: 360});
$('.flex-images-col').flexImages({rowHeight: 150});


// базовый коллаж

$('id_bkcollage').carousel({
	interval: 5000,
	pause: false
})


// фиксируем header

function FixHeader() {
	var
		top_pos = 1;

	if($(this).scrollTop() > top_pos) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed')
	}
}

$(window).scroll(function () {	FixHeader(); });



// обработка ссылок в выпадающем по hover меню

$('.link-hovered').click(function(e) {
	if ($(document).width() > 768) {
		e.preventDefault();
		var url = $(this).attr('href');
		if (url !== '#') {
			window.location.href = url;
		}
	}
});



// замена иконки выпадающего меню

$('.navbar-toggler').click(function () {
	$('.navbar-toggler__icon').toggleClass('close')
});



// скрытие в аккордеон на мобильнов Каталог фильтр

function collapseCgFilterHdr() {  // фильтр отелей
	if ($(document).width() < 768) {
		$('.cgfilter__hdr').attr('data-toggle','collapse');
		$('.cgfilter__hdr').css('cursor','pointer');
		$('.cgfilter__hdr .i--down').removeClass('i--up');
		$('.cgfilter__body').removeClass('show');
	} else {
		$('.cgfilter__hdr').attr('data-toggle','');
		$('.cgfilter__hdr').css('cursor','default');
		$('.cgfilter__body').addClass('show');
	}
}

collapseCgFilterHdr();
$(window).resize(function() {collapseCgFilterHdr()});


//переключение иконок accordion
function toggleIcon(e) {
	$(e.target)
		.prev('.accordion__hdr')
		.find('.i--down')
		.toggleClass('i--up');
}

//
$('#id_cgfilter10').on('hidden.bs.collapse', toggleIcon);
$('#id_cgfilter10').on('shown.bs.collapse', toggleIcon);

$('#id_cgfilter20').on('hidden.bs.collapse', toggleIcon);
$('#id_cgfilter20').on('shown.bs.collapse', toggleIcon);

$('#id_cgfilter30').on('hidden.bs.collapse', toggleIcon);
$('#id_cgfilter30').on('shown.bs.collapse', toggleIcon);

$('#id_cgfilter40').on('hidden.bs.collapse', toggleIcon);
$('#id_cgfilter40').on('shown.bs.collapse', toggleIcon);

$('#id_cgitemdescript1').on('hidden.bs.collapse', toggleIcon);
$('#id_cgitemdescript1').on('shown.bs.collapse', toggleIcon);

$('#id_cgitemdescript2').on('hidden.bs.collapse', toggleIcon);
$('#id_cgitemdescript2').on('shown.bs.collapse', toggleIcon);

$('#id_cgitemdescript3').on('hidden.bs.collapse', toggleIcon);
$('#id_cgitemdescript3').on('shown.bs.collapse', toggleIcon);

$('#id_cgitemdescript4').on('hidden.bs.collapse', toggleIcon);
$('#id_cgitemdescript4').on('shown.bs.collapse', toggleIcon);

$('#id_cgitemdescript5').on('hidden.bs.collapse', toggleIcon);
$('#id_cgitemdescript5').on('shown.bs.collapse', toggleIcon);



// Запуск видео
function hoverVideo(e) {
	$(this).find('video').attr('controls', 'controls');
}
function hideVideo(e) {
	$(this).find('video').removeAttr('controls');
}

function togglePlayButton(video) {
	let playButton = $(video).siblings('.video__i-play');
	if (video.paused) {
		playButton.css('opacity', '0.33');
	} else {
		playButton.css('opacity', '0');
	}
}

function startVideo() {
	// Выключаем звук на видео
	$('.block-video video').prop('muted', true);
	
	$('.block-video').hover(hoverVideo, hideVideo);
	
	$('.block-video video').on('play pause', function() {
		togglePlayButton(this);
	});
	
	$('.video__i-play').on('click', function() {
		let video = $(this).siblings('video')[0];
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
	
}

startVideo();



// слайдер продукта

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	centerMode: true,
	centerPadding: '30px',
	focusOnSelect: true
});


// слайдер товара
$('.cgitemlist__pics_slide').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 0,
	arrows: false,
	dots: true,
	infinite: true,
	autoplay: false
});
$('.cgitemlist-exp__item').hover(function(){
	let itemId = '#' + $(this).attr('id');
	$(itemId+' .hoverbar1').hover(function () {
			$(itemId+' .cgitemlist__pics_slide').slick('slickGoTo', 0);
		}, function () {}
	);
	$(itemId+' .hoverbar2').hover(function () {
			$(itemId+' .cgitemlist__pics_slide').slick('slickGoTo', 1);
		}, function () {}
	);
	$(itemId+' .hoverbar3').hover(function () {
			$(itemId+' .cgitemlist__pics_slide').slick('slickGoTo', 2);
		}, function () {}
	);
	$(itemId+' .hoverbar4').hover(function () {
			$(itemId+' .cgitemlist__pics_slide').slick('slickGoTo', 3);
		}, function () {}
	);
}, function () {

});




(function() {
	'use strict';
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();



// слайдеры фильтров

//длина
$('#id_inputslider-l').slider({
	min: 100,
	max: 1000,
	values: [300, 700],
	range: true,
	stop: function(event, ui) {
		$('input#id_inputval-l1').val($(this).slider('values', 0));
		$('input#id_inputval-l2').val($(this).slider('values', 1));
	},
	slide: function(event, ui){
		$('input#id_inputval-l1').val($(this).slider('values', 0));
		$('input#id_inputval-l2').val($(this).slider('values', 1));
	}
});
$('input#id_inputval-l1').change(function(){
	var value1=$(this).val();
	var value2=$('input#id_inputval-l2').val();
	if(parseInt(value1) < 100) {value1 = 100;}
	if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$(this).val(value1);
	}
	$('#id_inputslider-l').slider('values', 0, value1);
});
$('input#id_inputval-l2').change(function(){
	var value1=$('input#id_inputval-l1').val();
	var value2=$(this).val();
	if (value2 > 1000) {value2 = 1000;}
	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$(this).val(value2);
	}
	$('#id_inputslider-l').slider('values', 1, value2);
});

//ширина
$('#id_inputslider-w').slider({
	min: 50,
	max: 250,
	values: [70, 120],
	range: true,
	stop: function(event, ui) {
		$('input#id_inputval-w1').val($(this).slider('values', 0));
		$('input#id_inputval-w2').val($(this).slider('values', 1));
	},
	slide: function(event, ui){
		$('input#id_inputval-w1').val($(this).slider('values', 0));
		$('input#id_inputval-w2').val($(this).slider('values', 1));
	}
});
$('input#id_inputval-w1').change(function(){
	var value1=$(this).val();
	var value2=$('input#id_inputval-w2').val();
	if(parseInt(value1) < 50) {value1 = 50;}
	if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$(this).val(value1);
	}
	$('#id_inputslider-w').slider('values', 0, value1);
});
$('input#id_inputval-w2').change(function(){
	var value1=$('input#id_inputval-w1').val();
	var value2=$(this).val();
	if (value2 > 250) {value2 = 250;}
	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$(this).val(value2);
	}
	$('#id_inputslider-w').slider('values', 1, value2);
});

//делаем слайдеры тоучабле
$('#id_inputslider-l').draggable();
$('#id_inputslider-w').draggable();

//выставляем слайдеры по популярным размерам
$('.popval_val').click(function() {
	var vall = $(this).data('vall');
	var valw = $(this).data('valw');
	$('#id_inputslider-l').slider('values', [vall, vall]);
	$('input#id_inputval-l1').val(vall);
	$('input#id_inputval-l2').val(vall);
	$('#id_inputslider-w').slider('values', [valw, valw]);
	$('input#id_inputval-w1').val(valw);
	$('input#id_inputval-w2').val(valw);
});


// мультиселекты
$('.cgfilter_multiselect').multiselect({
	buttonClass: 'multiselect_btn multiselect_btn-default',
	buttonContainer: '<div class="multiselect_btn-group" />',
	selectAllText: ' выберите все',
	nonSelectedText: 'выберите',
	nSelectedText: 'выбрано',
	allSelectedText: 'все выбрано'
});

$('.tbthfilter_multiselect').multiselect({
	buttonClass: 'multiselect_btn multiselect_btn-default',
	buttonContainer: '<div class="multiselect_btn-group" />',
	numberDisplayed: 1,
	selectAllText: ' выберите все',
	nonSelectedText: 'любое',
	nSelectedText: 'выбрано',
	allSelectedText: 'все выбрано'
});



// дерево загрузок
$('#id_tree__ct').bstree({
	chevronOpened: '<i class="fal fa-minus-square"></i>',
	chevronClosed: '<i class="fal fa-plus-square"></i>',
	openTitle: 'открыть ветку',
	closeTitle: 'закрыть ветку',
});


















