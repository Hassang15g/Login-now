

//   $(document).click(function(){
//     console.log('hello');
//   })

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 9000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


let aboutOffset = $('#myPara').offset().top;
$(window).scroll(function () {
    let windowScrollTop = $(window).scrollTop();

 if(windowScrollTop>aboutOffset){
    $('.navbar').css( 'backgroundColor','#1B2430');
    $('.navbar').css( 'width','100%');
    $('.navbar').css( 'margin','0');
    $('#mon_ho').css('display','block');
   
 }else{
    $('.navbar').css( 'backgroundColor','#1B2430');
    $('.navbar').css( 'width','67%');
    $('.navbar').css( 'margin','4% 10%');
    $('.navbar').css( 'margin-left','15%');
    $('#mon_ho').css('display','none');
    
 }

})
$('#mon_ho').click(function () {
    $(window).scrollTop(0)
})

$(document).ready(function () {
    $('.loading .loader').fadeOut(1000,function () {
        $('.loading').fadeOut(1000,function () {
            $('body').css('overflow', 'auto')
            $('.loading').remove()
        })
    })
})






