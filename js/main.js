function positionEl() {
  heroContentPos = ($('.hero-img').height()-$('#hero .CTA').height()-240)/2;
  var moveP = (parseInt($("#story").css('height'))-300)/2;

  $("#hero .content").css('top', heroContentPos);
  $(".panel").css('width', $(window).width());
  $("#email").css('width', parseInt($("#name").width()+$("#lastName").width()+108));
  $("#story p").css('margin-top', moveP);
  $("#story h2").css('margin-top', moveP-140+21);
  $("#story .unders").css('margin-top', moveP-80+21);
  $("#story .icon-prev, #story .icon-next").css('top', moveP+350);
}

function colorPoints(){
  var currColor= $('.active').css('background-color');
  var nextColor= $('.active').next().css('background-color');
  var doneColor= $('.active').prev().css('background-color');
  $('.icon-next').css('color', nextColor);
  $('.icon-prev').css('color', doneColor);
  $('#story h2').css('color', currColor);
}

$(document).ready(function(){
  var i=0;
  var points=$('.under');
  var emailPH=$('#email').val();
  var namePH=$('#name').val();
  var lastPH=$('#lastName').val();

  $('#email').focusout(function(){
    if($(this).val() == ""){
      $(this).val(emailPH);
    }
  });

  $('#name').focusout(function(){
    if($(this).val() == ""){
      $(this).val(namePH);
    }
  });

  $('#lastName').focusout(function(){
    if($(this).val() == ""){
      $(this).val(lastPH);
    }
  });

  $('#name').focusin(function(){
    if($(this).val() != namePH){
      $(this).val($(this).val());
    }else{
      $(this).val('');
    }
  });

  $('#lastName').focusin(function(){
    if($(this).val() != lastPH){
      $(this).val($(this).val());
    }else{
      $(this).val('');
    }
  });


  $('#email').focusin(function(){
    if($(this).val() != emailPH){
      $(this).val($(this).val());
    }else{
      $(this).val('');
    }
  });

  $('#hamburger').click(function(){
    $(this).toggleClass('open');
    $(this).parent().toggleClass('open');
    $('.menu').toggleClass('open');
  });


  $('.menu li a').click(function(){
    sectionDisplay=$(this).attr('class');
    $('.menu li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $("#"+sectionDisplay).offset().top-98
    }, 1000, "easeOutCubic");
  });

  colorPoints();
  $('.icon-next').click(function(){
    var itemDone = points[0];
    var itemAct = points[i];

    if (i < points.length-1) {
      i++;
      $('.active').addClass('done');
      $('.done').removeClass('active');
      $(itemAct).next().removeClass('done').addClass('active');

      colorPoints();

      var moveLeft=parseInt(0-$(window).width()*i-1);
      $('.panels').css('marginLeft', moveLeft);
    }
  });

  $('.icon-prev').click(function(){
    var itemDone = points[0];
    var itemAct = points[i];

    if (i > 0) {
      i--;
      $('.active').addClass('done');
      $('.done').removeClass('active');
      $(itemAct).prev().removeClass('done').addClass('active');

      colorPoints();

      var moveLeft=parseInt(0-$(window).width()*i-1);
      $('.panels').css('marginLeft', moveLeft);
    }
  });


  positionEl();

  var heroContentPos = ($('.hero-img').height()-$('#hero .CTA').height()-240)/2;
  $("#hero .hero-img").addClass('anim');

  $(".icon-arrow_down").click(function() {
    $('html, body').animate({
      scrollTop: $("#story").offset().top-98
    }, 1000, "easeOutCubic");

  });

  $("#hero .CTA").click(function() {
    $('html, body').animate({
      scrollTop: $("#survey-launcher").offset().top-98
    }, 1000, "easeOutCubic");

  });

  skrollr.init();
  var stickyNavTop = $(' #navBar').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 100) {
      $(' #navBar').addClass('sticky');
    } else {
      $(' #navBar').removeClass('sticky');
    }
  };
  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });
  $( window ).resize(function() {
    positionEl();
  });

});
