$(window).on("scroll",function(){var o=$(window).scrollTop();console.log(o);var t=$(".bg");t.css("top",-1*o+"px");var r=$(".top-left");r.css("transform","skewY("+o+"deg)");var s=$(".top-center");s.css("right",-1*o+"px").css("z-index",-1*o);var c=$(".top-right");c.css("top",.5*o+"px");var e=$(".bottom-left");e.css("left",.5*o+"px");var p=$(".bottom-center");p.css("right",2.5*o+"px");var a=$(".bottom-right");a.css("top",-5*o+"px")});