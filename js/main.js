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
    
    
    
    rightArrLink.click( function () {
        if($('.carousel .container.active').hasClass('active') && $('.carousel .container.active').hasClass('last-img') == false) {
            $('.carousel .container.active').removeClass('active').next().addClass('active') 
        } else if ($('.carousel .container.active').hasClass('last-img')) {
            $('.carousel .container.active').removeClass('active');
            $('.carousel .container.first-img').addClass('active');
        }
    }); 

    leftArrLink.click( function () {
        if($('.carousel .container.active').hasClass('active') && $('.carousel .container.active').hasClass('first-img') == false) {
            $('.carousel .container.active').removeClass('active').prev().addClass('active') 
        } else if ($('.carousel .container.active').hasClass('first-img')) {
            $('.carousel .container.active').removeClass('active');
            $('.carousel .container.last-img').addClass('active');
        }
    }); 
     
 });

 // end 