let downloadselect_lastnum;

function downloadselect(num) {
  if (num != downloadselect_lastnum) {
    downloadselect_lastnum = num;
    for (let n = 0; n <= 9; n++) {
      $('#platform-' + n + '-text').animate({
        opacity: 0
      }, {
        duration: 250,
        easing: 'linear',
        queue: false
      });
      if (n == num) {
        $('#platform-' + n).animate({
          'color': '#41ADEF'
        }, {
          duration: 250,
          easing: 'linear',
          queue: false
        });
        setTimeout(function () {
          $('#platform-' + n + '-text').animate({
            opacity: 0.87
          }, {
            duration: 250,
            easing: 'linear',
            queue: false
          });
          $('#platform-' + n + '-text').css('display', 'block');
        }, 250);
      } else {
        $('#platform-' + n).animate({
          'color': 'rgba(0, 0, 0, 0.87)'
        }, {
          duration: 250,
          easing: 'linear',
          queue: false
        });
        setTimeout(function () {
          if (num == 9) {
            $('#platform-' + n + '-text').animate({
              opacity: 0.87
            }, {
              duration: 250,
              easing: 'linear',
              queue: false
            });
            $('#platform-' + n + '-text').css('display', 'block');
          } else {
            $('#platform-' + n + '-text').css('display', 'none');
          }
        }, 250);
      }
    }
  }
}
downloadselect(9);

function appcardresize(e) {
  let appcardheight = 0;
  $('.appcard').parent().each(function (index, element) {
    $('.appcard', this).each(function (i) {
      if ($(window).width() > 1200) {
        $('.appcard-img', this).height('100%');
        $(this).parent().height(($('h5', this).outerHeight(true) + $('p', this).outerHeight(true)) * (i + 1));
      } else {
        $('.appcard-img', this).height('200px');
        $('.appcard-link', this).height($('.appcard-link-text', this).outerHeight(true));
        $(this).parent().height((200 + $('h5', this).outerHeight(true) + $('.appcard-text', this).outerHeight(true) + $('.appcard-link', this).outerHeight(true)) * (i + 1));
      }
    })
    $('div.appcard', this).css({
      'height': $('p', this).outerHeight(true) + $('h5', this).outerHeight(true),
      'padding-top': $('h5', this).outerHeight(true)
    })
  })
};
appcardresize();

swiper.on('slideChangeTransitionStart', function () {
  $('#developer-detail').animate({
    opacity: 0
  }, {
    duration: 250,
    easing: 'linear',
    queue: false
  });
})

swiper.on('slideChangeTransitionEnd', function () {
  let swiper_lastindex;
  if (swiper.realIndex != swiper_lastindex) {
    swiper_lastindex = swiper.realIndex;
    developerdetailchange(swiper.realIndex);
  }
});

let name,
  text,
  twitter;

function developerdetailchange(id) {
  let lastid;
  if (lastid != id) {
    lastid = id;
    switch (id) {
      case 0:
        name = 'さぶうぇい';
        text = 'Submarinの生みの親\nSubmarin Android版製作者';
        twitter = 'HiSubway';
        break;
      case 1:
        name = '山D';
        text = 'Submarinサーバー運営者\nElectronmarin Debian版製作者';
        twitter = 'yamad_linuxer';
        break;
      case 2:
        name = 'orange';
        text = 'Submarin Web製作者\nその他なんかいろいろ';
        twitter = '0_a_e';
        break;
      case 3:
        name = '山田ハヤオ';
        text = 'Submarinサーバー運営者\nElectronmarin ArchLinux版製作者';
        twitter = 'Hayao0819';
        break;
      case 4:
        name = 'boda';
        text = 'Electronmarin製作者\n';
        twitter = '305_tb';
        break;
      case 5:
        name = 'sh';
        text = 'さぶマリン△\nShimarin製作者';
        twitter = 'sfx_as';
        break;
      case 6:
        name = 'ハクナギ';
        text = 'Submarin Webサイト全般製作者\n';
        twitter = 'ElectronicsBot';
        break;
    }
    $('#developer-detail').animate({
      opacity: 0
    }, {
      duration: 0,
      easing: 'linear'
    });
    setTimeout(function () {
      $('#developer-name').text(name);
      $('#developer-text').html(text.replace(/\n/g, '<br>'));
      $('#developer-link-twitter').html('<a href="https://twitter.com/' + twitter +
        '" target="_blank" rel="noopener noreferrer">Twitter</a>');
      $('#developer-detail').animate({
        opacity: 1
      }, {
        duration: 250,
        easing: 'linear',
        queue: false
      });
    }, 0);
  }
}

developerdetailchange(0);