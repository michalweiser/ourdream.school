(function(){
  var i = 0;
  var points = document.querySelectorAll('.story__dot');
  var next_button = document.querySelector('.icon-next');
  var prev_button = document.querySelector('.icon-prev');
  var story_title = document.querySelector('.story__title');
  
  function getStyle(element, style) {
    return window.getComputedStyle(element)[style];
  }

  function colorPoints(previous, current, next){
    next_button.style.color = getStyle(next ? next : current, 'background-color');
    prev_button.style.color = getStyle(previous ? previous : current, 'background-color');
    story_title.style.color = getStyle(current, 'background-color');
  }

  function shiftPanels(index) {
    document.querySelector('.story__panels').style.marginLeft = "-" + (window.innerWidth * index) + "px";
  }

  function activePoint(previous, current, index) {
    previous.classList.remove('story__dot--active');
    current.classList.add('story__dot--active');

    colorPoints(points[index-1], points[index], points[index+1]);
    shiftPanels(index);
  }

  colorPoints(points[i-1], points[i], points[i+1]);

  document.querySelector('.story__arrow--next').addEventListener('click', function onNextPanelClick() {
    if (i < points.length-1) {
      i++;
      activePoint(points[i-1], points[i], i);
    }
  });

  document.querySelector('.story__arrow--prev').addEventListener('click', function onPreviousPanelClick() {
    if (i > 0) {
      i--;
      activePoint(points[i+1], points[i], i);
    }
  });

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

  document.querySelector('.hero__background').classList.add('hero__background--animate');

  window.addEventListener('resize', function onWindowResize () {
    shiftPanels(i);
  });
  
})();
