jQuery(document).ready(function($){
   // document start
   
   
    // Navbar
    $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
    $('.navbar-nav li .clickD').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.next().hasClass('show'))
           {
               $this.next().removeClass('show');
               $this.removeClass('toggled');
           } 
           else 
           {
               $this.parent().parent().find('.sub-menu').removeClass('show');
               $this.parent().parent().find('.toggled').removeClass('toggled');
               $this.next().toggleClass('show');
               $this.toggleClass('toggled');
           }
    });
   
    $(window).on('resize', function(){
        if ($(this).width() < 1025) {
            $('html').click(function(){
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $(document).click(function(){
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $('.navbar-nav').click(function(e){
               e.stopPropagation();
            });
        }
    });
    // Navbar end
    
   /* ===== For menu animation === */
   $(".navbar-toggler").click(function(){
       $(".navbar-toggler").toggleClass("open");
       $(".navbar-toggler .stick").toggleClass("open");
       $('body,html' ).toggleClass("open-nav");
   });
   
   // Navbar end
   
   
   // back to top
   if($("#scroll").length){
       $(window).scroll(function(){ 
           if ($(this).scrollTop() > 200) { 
               $('#scroll').fadeIn(200); 
           } else { 
               $('#scroll').fadeOut(200); 
           } 
       }); 
       $('#scroll').click(function(){ 
           $("html, body").animate({ scrollTop: 0 }, 500); 
           return false; 
       }); 
   }

   $('.case-slider').slick({
       dots: false,
       arrows: true,
       infinite: true,
       speed: 300,
       slidesToShow: 3,
       slidesToScroll: 3,
       speed: 1000,
       prevArrow: '.prev-arrows',
       nextArrow: '.next-arrows',
       responsive: [
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
           }
         },
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
   });

   $(".testimonial-slider").slick({
       centerMode: false,
       dots: false,
       arrows: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       speed: 1100,
       variableWidth: true,
       infinite: true,
       autoplay: false,
       
       prevArrow: ".testimonial-prev-arrows",
       nextArrow: ".testimonial-next-arrows",
       responsive: [
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 2,
             variableWidth: false,
           },
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             variableWidth: false,
           },
         },
       ],
   });

   equalheight = function (container) {
       var currentTallest = 0,
           currentRowStart = 0,
           rowDivs = new Array(),
           jQueryel,
           topPosition = 0;
       jQuery(container).each(function () {
           jQueryel = jQuery(this);
           jQuery(jQueryel).height('auto');
           topPostion = jQueryel.position().top;
           if (currentRowStart != topPostion) {
               for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                   rowDivs[currentDiv].height(currentTallest);
               }
               rowDivs.length = 0;
               currentRowStart = topPostion;
               currentTallest = jQueryel.height();
               rowDivs.push(jQueryel);
           } else {
               rowDivs.push(jQueryel);
               currentTallest = (currentTallest < jQueryel.height()) ? (jQueryel.height()) : (currentTallest);
           }
           for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
               rowDivs[currentDiv].height(currentTallest);
           }
       });
   }

 // custom accordian start

 $(".accr-hd").click(function () {
   $(this).next().stop(true, true).slideToggle();
   $(this).parent().toggleClass("active");
   $(this).parent(".accr-item").siblings().removeClass("active");
   $(this)
     .parents(".accr-col")
     .siblings()
     .find(".accr-item")
     .removeClass("active");
   $(this).parent(".accr-item").siblings().find(".accr-con").slideUp();
   $(this).parents(".accr-col").siblings().find(".accr-con").slideUp();
 });

 $(".accr-col:first-child")
   .find(".accr-item:first-child > .accr-con")
   .slideDown();
 $(".accr-col:first-child")
   .find(".accr-item:first-child")
   .toggleClass("active");

 //  custom accordian end


 // fancybox start
 $("[data-fancybox]").fancybox({
 });
 // fancybox end
   
   // document end
   
   })
   
   
   