$(document).ready(function () {

	// top nav

	$(".about").click(function () {
		event.preventDefault();
		$(this).find("info");
		$(".info").addClass("info-opened");
		$(this).find("body");
		$(".landing").addClass("overflow-hidden");
	});

	$(".work").click(function () {

		$(this).find("info");
		$(".info").removeClass("info-opened");
		$(".landing").removeClass("overflow-hidden");
		event.preventDefault();
	});

	$(".works-list-link").click(function () {
		$(this).toggleClass("active");
		$(".full-nav").toggleClass("opened");
		$(".works-list-close").toggleClass("opened");
		$(this).find("body");
		$(".landing").toggleClass("overflow-hidden");
	});

	$(".full-nav").click(function () {
		$(this).find(".works-list-link a");
		$(".full-nav").removeClass("opened");
		$(".works-list-close").removeClass("opened");
		$(this).find("body");
		$(".landing").removeClass("overflow-hidden");

	});



	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if ($(window).scrollTop() + $(window).height() > ($(document).height() - 200)) {
			$(".toolbar-navigation").addClass("toolbar-out");
			$(".toolbar-navigation").removeClass("toolbar-in");
		} else {
			$(".toolbar-navigation").removeClass("toolbar-out");
			$(".toolbar-navigation").addClass("toolbar-in");
		}
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

});

$(function () {

	var pagePositon = 0,
		sectionsSeclector = 'section',
		$scrollItems = $(sectionsSeclector),
		offsetTolorence = 30,
		pageMaxPosition = $scrollItems.length - 1;

	//Map the sections:
	$scrollItems.each(function (index, ele) { $(ele).attr("project", index).data("pos", index); });

	// Bind to scroll
	$(window).bind('scroll', upPos);

	//Move on click:
	$('#arrow a').click(function (e) {
		event.preventDefault()
		if ($(this).hasClass('next') && pagePositon + 1 <= pageMaxPosition) {
			pagePositon++;
			$('html, body').stop().animate({
				scrollTop: $scrollItems.eq(pagePositon).offset().top
			}, 300);

		}
		if ($(this).hasClass('previous') && pagePositon - 1 >= 0) {
			pagePositon--;
			$('html, body').stop().animate({
				scrollTop: $scrollItems.eq(pagePositon).offset().top
			}, 300);
			return false;

		}

	});

	//Update position func:
	function upPos() {
		var fromTop = $(this).scrollTop();
		var $cur = null;
		$scrollItems.each(function (index, ele) {
			if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
		});
		if ($cur != null && pagePositon != $cur.data('pos')) {
			pagePositon = $cur.data('pos');
		}
	}

});

var lazyLoadInstance = new LazyLoad({
	// Your custom settings go here
});
! function (t) {
	t.fn.visible = function (e) {
		var s = t(this),
			i = t(window),
			o = i.scrollTop(),
			n = o + i.height(),
			a = s.offset().top,
			l = a + s.height();
		return (!0 === e ? a : l) <= n && (!0 === e ? l : a) >= o
	},
		t(document).ready((function () {


			function s(t) {
				for (let e = t.length - 1; e > 0; e--) {
					const s = Math.floor(Math.random() * (e + 1));
					[t[e], t[s]] = [t[s], t[e]]
				}
			}


			var o = ["pos-1", "pos-2", "pos-3", "pos-4"];
			t(".zapp").hover((function () {
				s(o);
				for (let e = 0; e < o.length; e += 1) {
					t(".zapp .letter:nth-child(" + (e + 1) + ")").removeClass("pos-1 pos-2 pos-3 pos-4").addClass(o[e])
				}
				i = setInterval((function () {
					s(o);
					for (let e = 0; e < o.length; e += 1) {
						t(".zapp .letter:nth-child(" + (e + 1) + ")").removeClass("pos-1 pos-2 pos-3 pos-4").addClass(o[e])
					}
				}), 1e3)
			}), (function () {
				clearInterval(i)
			})), setTimeout((function () {
				s(o);
				for (let e = 0; e < o.length; e += 1) {
					t(".zapp .letter:nth-child(" + (e + 1) + ")").removeClass("pos-1 pos-2 pos-3 pos-4").addClass(o[e])
				}
			}), 800);

		}))
}(jQuery);

ScrollReveal().reveal(".fade-up-sm", {
	duration: 1000,
	origin: "bottom",
	distance: "20px",
	easing: "cubic-bezier(.22,.13,.25,1)",
	delay: 300,
	interval: 100
});


$(document).ready(function () {
	new Flickity("ul.hero-carousel", {
		lazyLoad: true,
		cellAlign: "left",
		contain: true,
		autoPlay: 1100,
		fade: true,
		draggable: false,
		pageDots: false,
		prevNextButtons: false,
		pauseAutoPlayOnHover: false
	});
});