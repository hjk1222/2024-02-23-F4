$(function(){

    //메뉴

    $(".main>li, .sub_bg").mouseover(function(){
        $(".sub_bg, .sub").stop().slideDown();
    })//
    $(".main>li").mouseout(function(){
        $(".sub_bg, .sub").stop().slideUp();
    })//



    //슬라이드이미지 (탑 무브)
    var n = 0; //0(0) 1(top: -350px or -100%) 2(top: -700px)
    
    setInterval( topMove, 2000);

    function topMove(){

        n = ( n + 1 ) % 3 ; //0 1 2
        
        position = n * (-350) + "px";
        $(".topmove").animate( { top: position } ,500);
        
        console.log(position);
    }//



    //모달팝업
    $(".modal, .pop1, .pop2").hide();

    $(".p_click").click(function(){
        $(".modal, .pop1, .pop2").show();
    })//

    $(".close1").click(function(){
        $(".pop1").hide();
    })//
    $(".close2").click(function(){
        $(".pop2").hide();
    })//

    $(".modal").click(function(){
        $(".modal").hide();
    })//



})// jquery