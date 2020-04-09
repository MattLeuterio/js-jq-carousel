console.log('ok');
console.log('jQuery OK ->', $);

/****************************************
 *
 *  Creare uno slider di immagini
 *  first - last
 *  active
 * .hasClass('my-class')
 *  prev() - next()
 *  
 ****************************************/

 $(document).ready( function() {

    var rightArrLink = $('.icon.next');
    console.log(rightArrLink);

    var leftArrLink = $('.icon.prev');
    console.log(leftArrLink);
    
    
    // Change Img when click arrows
    rightArrLink.click( function () {
        if($('.container.active').hasClass('active') && $('.container.active').hasClass('last-img') == false) {
            $('.container.active').removeClass('active').next().addClass('active') 
        } else if ($('.container.active').hasClass('last-img')) {
            $('.container.active').removeClass('active');
            $('.container.first-img').addClass('active');
        }
    }); 

    leftArrLink.click( function () {
        if($('.container.active').hasClass('active') && $('.container.active').hasClass('first-img') == false) {
            $('.container.active').removeClass('active').prev().addClass('active') 
        } else if ($('.container.active').hasClass('first-img')) {
            $('.container.active').removeClass('active');
            $('.container.last-img').addClass('active');
        }
    });
  
    // Change img when click right or left arrow on keyboard 
    $(document).keydown(function (param) {
        if(param.keyCode == 39) {
            if($('.container.active').hasClass('active') && $('.container.active').hasClass('last-img') == false) {
                $('.container.active').removeClass('active').next().addClass('active') 
            } else if ($('.container.active').hasClass('last-img')) {
                $('.container.active').removeClass('active');
                $('.container.first-img').addClass('active');
            }
        } else if(param.keyCode == 37) {
            if($('.container.active').hasClass('active') && $('.container.active').hasClass('first-img') == false) {
                $('.container.active').removeClass('active').prev().addClass('active') 
            } else if ($('.container.active').hasClass('first-img')) {
                $('.container.active').removeClass('active');
                $('.container.last-img').addClass('active');
            }
        }
     });

     // Change Circle-Active when click arrows
    rightArrLink.click( function () {
        if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('last-circle') == false) {
            $('.circle.c-active').removeClass('c-active').next().addClass('c-active');
        }else if ($('.circle.c-active').hasClass('last-circle')) {
            $('.circle.c-active').removeClass('c-active');
            $('.circle.first-circle').addClass('c-active');
        }
    }); 

    leftArrLink.click( function () {
        if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('first-circle') == false) {
            $('.circle.c-active').removeClass('c-active').prev().addClass('c-active');
        }else if ($('.circle.c-active').hasClass('first-circle')) {
            $('.circle.c-active').removeClass('c-active');
            $('.circle.last-circle').addClass('c-active');
        }
    }); 

    // Change Circle-Active when click right or left arrow on keyboard 
    $(document).keydown(function (param) {
        if(param.keyCode == 39) {
            if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('last-circle') == false) {
                $('.circle.c-active').removeClass('c-active').next().addClass('c-active') 
            } else if ($('.circle.c-active').hasClass('last-circle')) {
                $('.circle.c-active').removeClass('c-active');
                $('.circle.first-circle').addClass('c-active');
            }
        } else if(param.keyCode == 37) {
            if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('first-circle') == false) {
                $('.circle.c-active').removeClass('c-active').prev().addClass('c-active') 
            } else if ($('.circle.c-active').hasClass('first-circle')) {
                $('.circle.c-active').removeClass('c-active');
                $('.circle.last-circle').addClass('c-active');
            }
        }
     });
});
     

 // end 