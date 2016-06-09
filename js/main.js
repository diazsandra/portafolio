var count1 = 1;

var update1 = function () { 
	if (count1<=180) {
		$('#counter1').text('' + count1);
		count1++;
		setTimeout(update1, 20)
	}
};

var count2 = 1;

var update2 = function () { 
	if (count2<=600) {
		$('#counter2').text('' + count2);
		count2++;
		setTimeout(update2, 5)
	}
};

var count3 = 1;

var update3 = function () { 
	if (count3<=900) {
		$('#counter3').text('' + count3);
		count3++;
		setTimeout(update3, 3)
	}
};


$(document).ready(function(){
	var altura = $('#elementos').offset().top - 150;
	
	var empezarContadores = function() {
		console.log('Contar');
		update1();
		update2();
		update3();
	};

	var inicializar = _.once(empezarContadores);

	$('section[data-type="parallax_section"]').each(function(){ 
		var $bgobj = $(this);
		$(window).scroll(function() {
			$window = $(window);
			var posicion = $window.scrollTop();

			if (posicion > altura) {
				inicializar();
			}

			var yPos = (posicion/$bgobj.data('speed'));
			var coords = '50%'+yPos+'px';
			$bgobj.css({
				backgroundPosition: coords});
			});

	});

});


