$(function(){

    //모바일 메뉴
    $('.nav-all-btn').click(function(){
        $('.nav-allmenu').css('right','0');
    })
    $('.close-btn').click(function(){
        $('.nav-allmenu').css('right','100vw');
    })



    // 마우스 이벤트
    $(window).mousemove(function(e){
        e.preventDefault();
        gsap.to('.cursor',{
            x:e.clientX,
            y:e.clientY,
            duration:.2,
        })
    })

    $('[data-hover]').hover(function(){
        $('.cursor').addClass('data-hover');
    },function(){
        $('.cursor').removeClass('data-hover')
    })

    // 스크롤이벤트 - sc-main
    scrollMove = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-main",
            start:"0% 0%",
            end:"40% 4%%",
            // markers:true, //끝나면 지우면됨!
            scrub:0,
        },
    })
    
    scrollMove
    .addLabel('text')
    .to('.sc-main .title_text_layer1',{ xPercent:-30 },'text')
    .to('.sc-main .title_text_layer2',{ xPercent:10 },'text')
    .to('.sc-main .desc_text_layer1',{ xPercent:-10 },'text')
    .to('.sc-main .desc_text_layer2',{ xPercent:10 },'text')
    .to('.sc-main .desc_text_layer3',{ xPercent:-10 },'text')


    // 스크롤이벤트 - sc-project__line
    linetext = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-project",
            start:"80% 100%",
            end:"100% 100%%",
            // markers:true, //끝나면 지우면됨!
            scrub:0,
        },
    })
    
    linetext
    .addLabel('line')
    .to('.sc-project__line .text_1',{ xPercent:20 },'line')
    .to('.sc-project__line .text_2',{ xPercent:-20 },'line')
    .to('.sc-project__line .text_3',{ xPercent:20 },'line')
    

    //스크롤 이벤트 - contact
    scrollUp = gsap.timeline({
        scrollTrigger:{
            trigger:".contact",
            start:"0% 80%",
            end:"100% 100%%",
            // markers:true, //끝나면 지우면됨!
            scrub:0,
        },
    })
    
    scrollUp
    .addLabel('scrollUp')
    .to('.contact',{ yPercent:0 },'scrollUp')

})