$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 방향
        loop: true, //무한 반복
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        autoplay : {
            delay : 3000
        }
    });
});

//메인 네비게이션 //
$(function(){
    var $Main_active = $('.gnb > li');
  

    $Main_active.hover(function(e){
    e.preventDefault();
            
    $Main_active.removeClass('active');
    $(this).addClass('active');      
    })
  });


//메인페이지 회사소개
$(document).ready(function(){
  var next = $('.right a i');
  var prev = $('.left a i');
  var BottomLayout = $('#bl_2')

  next.click(function(e){
    e.preventDefault();
    $('#bl_1').stop().hide();
    BottomLayout.stop().show();
  })
  prev.click(function(e){
    e.preventDefault();
    BottomLayout.stop().hide();
    $('#bl_1').stop().show();
  })
})


  //서브 네비게이션 //
  
  $(function(){
    var $Sub_active = $('#Sub1_contents .Sub_GNB > li');

    $Sub_active.hover(function(e){
    e.preventDefault();
            
    $Sub_active.removeClass('active');
    $(this).addClass('active');      
    })
  });    

  //Tappanel 
  $(function(){
    var $Tabpanel = $('#Search .Tabpanel ul li')

    $Tabpanel.click(function(e){
    e.preventDefault();

     $Tabpanel.removeClass('active');
     $(this).addClass('active')

    })
  });

 //Scroll  
  $(function(){
     // 얼마나 스크롤 되는지 값
     var scrollDepth = 599;

     // 스크롤 채크 이벤트
     $(window).on('scroll', function(){
       // 스크롤이 얼마나 
       console.log($(window).scrollTop())
       if($(this).scrollTop() > scrollDepth) {
         // 배경 추가
         $('header').addClass('down');
       } else {
         // 배경 제거
         $('header').removeClass('down');
       }
     })
 })

