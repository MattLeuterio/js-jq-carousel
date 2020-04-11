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
    var leftArrLink = $('.icon.prev');

    
    
    // Change Img when click arrows
    rightArrLink.click( function () {
        if($('.container.active').hasClass('active') && $('.container.active').hasClass('last-img') == false) {
            nextElement('.container.active', 'active'); 
        } else if ($('.container.active').hasClass('last-img')) {
            goToFirstElement('.container.active', '.container.first-img', 'active');
        }
    });  

    leftArrLink.click( function () {
        if($('.container.active').hasClass('active') && $('.container.active').hasClass('first-img') == false) {
            prevElement('.container.active', 'active') 
        } else if ($('.container.active').hasClass('first-img')) {
            goToLastElement('.container.active', '.container.last-img', 'active')        
        }
    });

    // Change img when click right or left arrow on keyboard 
    $(document).keydown(function (param) {
        if(param.keyCode == 39) {
            if($('.container.active').hasClass('active') && $('.container.active').hasClass('last-img') == false) {
                nextElement('.container.active', 'active'); 
            } else if ($('.container.active').hasClass('last-img')) {
                goToFirstElement('.container.active', '.container.first-img', 'active');
            }
        } else if(param.keyCode == 37) {
            if($('.container.active').hasClass('active') && $('.container.active').hasClass('first-img') == false) {
                prevElement('.container.active', 'active');  
            } else if ($('.container.active').hasClass('first-img')) {
                goToLastElement('.container.active', '.container.last-img', 'active')
            }
        }
     });

     // Change Circle-Active when click arrows
    rightArrLink.click( function () {
        if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('last-circle') == false) {
            nextElement('.circle.c-active', 'c-active');
        }else if ($('.circle.c-active').hasClass('last-circle')) {
            goToFirstElement('.circle.c-active', '.circle.first-circle', 'c-active');
        }
    }); 

    leftArrLink.click( function () {
        if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('first-circle') == false) {
            prevElement('.circle.c-active', 'c-active'); 
        }else if ($('.circle.c-active').hasClass('first-circle')) {
            goToLastElement('.circle.c-active', '.circle.last-circle', 'c-active')
        }
    }); 

    // Change Circle-Active when click right or left arrow on keyboard 
    $(document).keydown(function (param) {
        if(param.keyCode == 39) {
            if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('last-circle') == false) {
                nextElement('.circle.c-active', 'c-active'); 
            } else if ($('.circle.c-active').hasClass('last-circle')) {
                goToFirstElement('.circle.c-active', '.circle.first-circle', 'c-active');
            }
        } else if(param.keyCode == 37) {
            if($('.circle.c-active').hasClass('c-active') && $('.circle.c-active').hasClass('first-circle') == false) {
                prevElement('.circle.c-active', 'c-active'); 
            } else if ($('.circle.c-active').hasClass('first-circle')) {
                goToLastElement('.circle.c-active', '.circle.last-circle', 'c-active')
            }
        }
     });
});


// functions 

function goToFirstElement(lastActive, first, classActive) {
    $(lastActive).removeClass(classActive);
    $(first).addClass(classActive);
};

function goToLastElement(firstActive, last, classActive) {
    $(firstActive).removeClass(classActive);
    $(last).addClass(classActive);
};

function nextElement(nowActive, classActive) {
    return  $(nowActive).removeClass(classActive).next().addClass(classActive) 
};

function prevElement(nowActive, classActive) {
    return $(nowActive).removeClass(classActive).prev().addClass(classActive);
}
     

 // end 