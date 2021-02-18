$('.onescreen').height(window.innerHeight + 'px');
$('.halfscreen').height(window.innerHeight / 2 + 'px');

$('.min-onescreen').css('min-height', window.innerHeight + 'px');
$(window).resize(function () {
  if (window.innerWidth >= 992) {
    $('.onescreen').height(window.innerHeight + 'px');
    $('.min-onescreen').css('min-height', window.innerHeight + 'px');
    $('.halfscreen').height(window.innerHeight / 2 + 'px');
    appcardresize();
  }
});

ScrollReveal().reveal('.sra', {
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  reset: true // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.sra-l', {
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  origin: 'left',
  distance: '50px',
  reset: true // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.sra-r', {
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  origin: 'right',
  distance: '50px',
  reset: true // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.sra-t', {
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  origin: 'top',
  distance: '50px',
  reset: true // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.sra-b', {
  duration: 1000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  origin: 'bottom',
  distance: '50px',
  reset: true // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.sra-top', {
  duration: 1500, // アニメーションの完了にかかる時間
  viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
  reset: true // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.sra-download', {
  duration: 1500, // アニメーションの完了にかかる時間
  viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
  origin: 'bottom',
  distance: '50px',
  reset: true // 何回もアニメーション表示するか
});
ScrollReveal().reveal('.sra-footer', {
  duration: 1500, // アニメーションの完了にかかる時間
  viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
  reset: true // 何回もアニメーション表示するか
});

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 5,
  spaceBetween: 0,
  initialSlide: 0,
  loop: true,
  centeredSlides: true,
  grabCursor: true
});