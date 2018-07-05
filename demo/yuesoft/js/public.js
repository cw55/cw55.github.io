$(function () {

	$(".nav ul li a:last").css("border", "none");
	$('nav#mmenu').mmenu({
		extensions: ['effect-slide-menu', 'pageshadow'],
		counters: false,
		navbar: {
			title: '菜单',
		},
		navbars: [
			{
				position: 'top',
				content: [
					'prev',
					'title',
					'close'
				]
			}, {
				position: 'bottom',
				content: [
					''
				]
			}
		]
	});
	/*index*/

	// $('.banner').slick({
	// 	dots: true,
	// 	autoplay: true,
	// 	arrows: false,
	// 	autoplaySpeed: 3000,
	// 	accessibility: true,
	// 	draggable:false
	// });



	// $('.syzz_con .left').slick({
	// 	dots: true,
	// 	autoplay: true,
	// 	arrows: true,
	// 	autoplaySpeed: 3000,
	// });


	$(".links").hover(function () {
		$(".links ul").slideDown(500)

	},
		function () {
			$(".links ul").slideUp(500)
		})


	$(".er_a").hover(function () {
		$(".er_img").show();
	},
		function () {
			$(".er_img").hide();

		})


	$(".f_da").slick({
		fade: true,
		useTransform: true,
		arrows: false,
		asNavFor: ".f_xiao"
	})
	$('.f_xiao').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		focusOnSelect: true,
		useTransform: true,
		asNavFor: ".f_da"

	});

	var left_img = $(".left img").attr("src");
	$(".pic_li").hover(function () {
		var img_src = $(this).find("img").attr("src");
		$(".left img").attr("src", img_src);
	}, function () {

	})
	$(".nav li").hover(function () {
		// $(this).find("ul").fadeIn()
		$(this).find("ul").css('display', 'block');
	}, function () {
		// $(this).find("ul").fadeOut()
		$(this).find("ul").css('display', 'none');
	})


	// XIA点击  向上滚动当前位置+100个像素
	$(".img").on('click', function (event) {
		//获取当前点击的位置
		var pageY = event.pageY;
		var this_img = document.body.scrollTop || document.documentElement.scrollTop;
		pageY = event.clientY + this_img;
		console.log([pageY, event.clientY]);
		//网页高度
		var body_pageY = window.screen.height;
		console.log("ss" + body_pageY)
		$('html,body').animate({ scrollTop: pageY + 100 }, 500);
	});

	// 返回顶部
	$(".back_top").click(function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});

	//ul列表
	var ul_arr = ["用友T3标准版", "用友T6产品线", "U890", "用友表单"];
	var ul1 = "";
	for (var i = 0; i < ul_arr.length; i++) {
		ul1 += '<li><a href="court_travel.html?add=' + i + '">' + ul_arr[i] + '</a></li>';
	}
	$(ul1).appendTo("#ul_arr");
	$(ul1).appendTo(".footer_ul");
});



