function positionEl() {
  heroContentPos = ($('.hero-img').height()-$('#hero .CTA').height()-240)/2;
  var moveP = (parseInt($(".story").css('height'))-300)/2;

  $("#hero .content").css('top', heroContentPos);
  $(".panel").css('width', $(window).width());
  $(".story p").css('margin-top', moveP);
  $(".story h2").css('margin-top', moveP-140+21);
  $(".story .unders").css('margin-top', moveP-80+21);
  $(".story .icon-prev, .story .icon-next").css('top', moveP+350);
}

function colorPoints(){
  var currColor= $('.active').css('background-color');
  var nextColor= $('.active').next().css('background-color');
  var doneColor= $('.active').prev().css('background-color');
  $('.icon-next').css('color', nextColor);
  $('.icon-prev').css('color', doneColor);
  $('.story h2').css('color', currColor);
}

$(document).ready(function(){
  smoothScroll.init({
      selector: '[data-scroll]',
      selectorHeader: '.page-header',
      speed: 1000,
      easing: 'easeOutCubic'
  });

  window.addEventListener('scroll', function onWindowScroll() {
    document.querySelector('.page-header')
      .classList.toggle(
        'page-header--sticky',
        window.scrollY > 100
      );
  });

  document.querySelector('.page-header__menu').addEventListener('click', function onMenuClick() {
    this.classList.toggle('page-header__menu--open');
  });

  document.querySelector('.hero-img').classList.add('hero-img--animate');

  /////////////////

  var i=0;
  var points=$('.under');
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
  

  $( window ).resize(function() {
    positionEl();
  });

});
