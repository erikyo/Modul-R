"use strict";jQuery(document).ready(function(l){var t=document.getElementsByClassName("slider");if(t.length)for(var i=0;i<t.length;i++)t[i].classList.contains("slider-single")?l(t[i]).slick({infinite:!0,slidesToShow:1,autoplay:!0}):t[i].classList.contains("slider-multi")&&l(t[i]).slick({lazyLoad:"ondemand",dots:!0,infinite:!0,slidesToShow:3,autoplay:!0,centerMode:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]});l(".lightbox")&&l(".lightbox a").fancybox({caption:function(){var t=l(this).children("img").attr("alt").length?l(this).children("img").attr("alt"):"",i=0<l(this).next("figcaption").length?l(this).next("figcaption").text():"";return""!==i?i:""!==t?t:""}}),l(".lightbox-gallery")&&l(".lightbox-gallery a").click(function(){var t;t=l(this).closest(".wp-block-gallery").hasClass("slider")?l(this).closest(".wp-block-gallery").find('.slick-slide:not(".slick-cloned") a'):l(this).closest(".wp-block-gallery").find("a");var e=[];return t.each(function(t,i){var n=l(this).children("img").attr("alt").length?l(this).children("img").attr("alt"):"",s=0<l(this).next("figcaption").length?l(this).next("figcaption").text():"",a=""!==s?s:""!==n?n:"";e.push({src:i.href,opts:{caption:a+'<br/><span class="fancybox-counter"><span data-fancybox-index></span> of <span data-fancybox-count></span></span>'}})}),l.fancybox.open(e,{loop:!1},l(this).index()),!1})});
"use strict";jQuery(document).ready(function(t){var e=document.getElementById("masonry-wrapper");if(e){var i=new Masonry(e,{itemSelector:".grid__item",columnWidth:".grid__col-sizer",gutter:".grid__gutter-sizer",percentPosition:!0,transitionDuration:"0.8s"});new InfiniteScroll(e,{path:".navigation a",append:".grid__item",outlayer:i,history:!1,status:".page-load-status"});imagesLoaded(e,function(t){i.layout()})}});
"use strict";jQuery(document).ready(function(a){a("nav li > .sub-menu").parent().hover(function(){var e=a(this).children(".sub-menu");a(e).hasClass("active")?a(e).removeClass("active"):a(e).addClass("active")})});
"use strict";var parallaxDefaultSpeed=.3,shiftView=200,vScrollTop=0,lastScroll=0,viewHeight=Math.max(document.documentElement.clientHeight,window.innerHeight),headerHeight=document.getElementById("masthead").clientHeight,scrollOffset=headerHeight,isInViewport=function(e){var t=e.getBoundingClientRect();return!(t.bottom<0||0<=t.top-viewHeight)},isFullyVisible=function(e){var t,l=e.getBoundingClientRect();return t=l.bottom-l.top>viewHeight?l.top+viewHeight:l.bottom,0<=l.top+shiftView&&t-shiftView<=document.documentElement.clientHeight};function VisibleItemsTrigger(l){var e=document.getElementsByClassName("interactive");[].slice.call(e).forEach(function(e){if(isFullyVisible(e)?(e.classList.add("visible"),e.classList.add("already-see")):e.classList.remove("visible"),isInViewport(e)&&e.classList.contains("parallax")){var t=-(window.pageYOffset+e.getBoundingClientRect().top-l)*parallaxDefaultSpeed;e.getElementsByTagName("img")[0].style.transform="translateY("+t+"px)"}})}function throttle(e,t){var l=Date.now();return function(){l+t-Date.now()<0&&(e(),l=Date.now())}}function scrollCallback(){vScrollTop=window.pageYOffset,headerHeight=document.getElementById("masthead").clientHeight,vScrollTop<lastScroll?document.body.classList.remove("scrolled"):scrollOffset<vScrollTop?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled"),VisibleItemsTrigger(vScrollTop),lastScroll=vScrollTop}document.addEventListener("DOMContentLoaded",function(e){vScrollTop=window.pageYOffset,scrollCallback(),window.addEventListener("scroll",throttle(scrollCallback,16),!0),window.addEventListener("resize",scrollCallback,!0)});
"use strict";jQuery(document).ready(function(a){0<a("ul.product-categories").length&&(a(".product-categories li.cat-parent > a").prepend('<span class="toggle"><i class="material-icons">arrow_forward</i></span>'),a(".product-categories .children").hide(),a(".product-categories li.current-cat-parent > .children, .product-categories li.current-cat > .children").show(),a(".product-categories li.current-cat, .product-categories li.current-cat-parent").addClass("active"),a(function(){a(".product-categories").find("a").on("click",function(t){var e=a(this).parent(".cat-item");e.hasClass("active")||(e.addClass("active"),(e.hasClass("cat-parent")||e.hasClass("current-cat"))&&t.preventDefault(),a(this).parents(".product-categories > li").siblings().removeClass("active"),a(this).siblings(".children").stop(!0,!0).slideToggle().parents(".cat-item").siblings().children(".children").stop(!0,!0).slideUp())})}))});
//# sourceMappingURL=scripts.js.map
