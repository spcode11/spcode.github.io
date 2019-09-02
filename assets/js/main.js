// Animação de scrool
$('.navbar-nav .nav-item a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
	targetOffset = $(id).offset().top;
	  
	$('html, body').animate({ 
	  scrollTop: targetOffset - 100
	}, 500);
  });

// Slick
$(document).ready(function () {

	$('.slider--home').slick({
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4500,
		responsive: [{
			breakpoint: 993,
			settings: {
				dots: false,
				arrows: false,
			}
		}]
	});


	$('.slider--client').slick({
		infinite: true,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4500,
		slidesToShow: 3,
		adaptiveHeight: false,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,
				initialSlide: 1
			}
		}]
	});

	$('#backToTop').hide().removeClass('d-flex').css({ opacity: 0 })

	$('#backToTop').on('click tap', function (evt) {
		evt.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		})
	})

});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 200) {
		$('#backToTop').addClass('d-flex').show().css({ opacity: 1 })
	} else {
		$('#backToTop').hide().removeClass('d-flex').css({ opacity: 0 })
	}
});

// Validação do formulário de contato
$(function(){
	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
		onKeyPress: function(val, e, field, options) {
				field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
	};
	
	$('.telefone').mask(SPMaskBehavior, spOptions);

	$("#formulario-contato").submit(function(e){
		e.preventDefault();
		if($("#formulario-contato").valid()){
			$.ajax({
				url: 'http://dominio/ajax/send-mail-contato.php', 
				type: 'post',
				dataType: 'json',
				data: $("#formulario-contato").serialize(),
				success: function(data){
					console.log(data);
					if(data){
							Swal({
									type: 'success',
									title: 'Sua mensagem foi enviada com sucesso!',
									showConfirmButton: true,
							});
					} else{
							Swal({
									type: 'error',
									title: 'Erro ao enviar a mensagem!',
									showConfirmButton: true,
							})
					}
				}, 
				error: function(erro){
					console.log(erro);
				}
			});
		}
	});
});

// Animação do placeholder dos inputs
$(() => {

	$("input").on("focus", function(event) {
	  const div = $(this).parent(".input-field");
	  const label = div.children("label");
	  
	  label.css("top", "-10px");
	});
	
	$("input").on("blur", function(event) {
	  const div = $(this).parent(".input-field");
	  const label = div.children("label");
	  
	  if ($(this).val().length == 0) {
		label.css("top", "12px");
	  }
	});

	$("textarea").on("focus", function(event) {
		const div = $(this).parent(".input-field");
		const label = div.children("label");
		
		label.css("top", "-10px");
	});
	
	$("textarea").on("blur", function(event) {
		const div = $(this).parent(".input-field");
		const label = div.children("label");
			
		if ($(this).val().length == 0) {
			label.css("top", "12px");
		}
	});
});


