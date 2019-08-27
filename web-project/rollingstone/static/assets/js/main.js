
// 스크롤 시 메뉴가 투명해지는 것
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

// 버튼 클릭시 화면 이동
function homeMove() {
    var offset = $("#home").offset();
    $("html, body").animate({ scrollTop: offset.top }, 1000);
}
function searchMove() {
    var offset = $("#search").offset();
    $("html, body").animate({ scrollTop: offset.top }, 1000);
}
function recommendationMove() {
    var offset = $("#recommendation").offset();
    $("html, body").animate({ scrollTop: offset.top }, 1000);
}
function helpMove() {
    var offset = $("#help").offset();
    $("html, body").animate({ scrollTop: offset.top }, 1000);
}



/* 원주 작업 */
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

$(function () {
    $("#fs").click(function (e) {
        $("#ss").text("○");
        $("#ts").text("○");
        $(this).text("●");
        var posY = $($(this).attr("href")).position();
        $("html").animate({ 'scrollTop': posY.top - 100 }, 500);
        $("html,body").stop().animate({ 'scrollTop': posY.top - 100 }, 700);
        e.preventDefault();
    });
    $("#ss").click(function (e) {
        $("#fs").text("○");
        $("#ts").text("○");
        $(this).text("●");
        var posY = $($(this).attr("href")).position();
        $("html").animate({ 'scrollTop': posY.top - 170 }, 500);
        $("html,body").stop().animate({ 'scrollTop': posY.top - 170 }, 700);
        e.preventDefault();
    });
    $("#ts").click(function (e) {
        $("#ss").text("○");
        $("#fs").text("○");
        $(this).text("●");
        var posY = $($(this).attr("href")).position();
        $("html").animate({ 'scrollTop': posY.top - 10 }, 500);
        $("html,body").stop().animate({ 'scrollTop': posY.top - 10 }, 700);
        e.preventDefault();
    });
});

