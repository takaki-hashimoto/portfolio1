window.onload = () =>{
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded');
    setTimeout(classAdd, 0);
    setTimeout(classAdd2, 3000);           // setTimeout(実行したい関数, ミリ秒)
}                                         //  ➡「ミリ秒」の分だけ「実行したい関数」の処理を遅らせる


// 一瞬の黒
const classAdd = () =>{
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded');
}

// ローディングの文字
const classAdd2 = () =>{
    const snipper = document.getElementById('loading_text');
    snipper.classList.add('loaded');
}




// テキストパラパラ表示

function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    //1秒後
    setTimeout(function(){  

      EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/

    },1000); //1秒後
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    //3秒後
    setTimeout(function(){

    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
        var text = $(this).text();
        var textbox = "";
    text.split('').forEach(function (t, i) {
        if (t !== " ") {
            if (i < 10) {
                textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                    } else {
                        var n = i / 10;
                        textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
                    }

            } else {
                textbox += t;
            }
        });
            $(this).html(textbox);
    });

    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/

    },3000); //3秒後

});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



//pofile画像のフェードイン

$(function() {
  $(window).scroll(function() {
      $(".normal2").each(function() {
      let scroll = $(window).scrollTop();
      let blockPosition = $(this).offset().top;
      let windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 50) {
          $(this).addClass("fadein_n2");
      }
      });
  });
});



//テキストのフェードイン

$(function() {
  $(window).scroll(function() {
      $(".normal3").each(function() {
      let scroll = $(window).scrollTop();
      let blockPosition = $(this).offset().top;
      let windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt) {
          $(this).addClass("fadein_n3");
      }
      });
  });
});


$(function() {
    $(window).scroll(function() {
        $(".normal4").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_n4");
        }
        });
    });
  });


$(function() {
    $(window).scroll(function() {
        $(".normal5").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_n5");
        }
        });
    });
});



// 横線の伸びる
  
$(window).on('scroll',function(){

    $(".JS_AddLine").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 160){
        $(this).addClass('line_lr');
      }
    });
    
});









//works画像のフェードイン

$(function() {
    $(window).scroll(function() {
        $(".bottom2").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 120) {
            $(this).addClass("fadein_b2");
        }
        });
    });
});

$(function() {
    $(window).scroll(function() {
        $(".bottom2_2").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 120) {
            $(this).addClass("fadein_b2_2");
        }
        });
    });
});

$(function() {
    $(window).scroll(function() {
        $(".bottom2_3").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 120) {
            $(this).addClass("fadein_b2_3");
        }
        });
    });
});


$(function() {
  $(window).scroll(function() {
      $(".bottom2_4").each(function() {
      let scroll = $(window).scrollTop();
      let blockPosition = $(this).offset().top;
      let windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 120) {
          $(this).addClass("fadein_b2_4");
      }
      });
  });
});





// $(function() {
//     $(window).scroll(function() {
//         setTimeout(function(){
//             $(".bottom2_2").each(function() {
//             let scroll = $(window).scrollTop();
//             let blockPosition = $(this).offset().top;
//             let windowHeihgt = $(window).height();
//             if (scroll > blockPosition - windowHeihgt + 160) {
//                 $(this).addClass("fadein_b2");
//             }
//             });
//         },1000);
//     });
// });

// $(function() {
//     $(window).scroll(function() {
//         setTimeout(function(){
//             $(".bottom2_3").each(function() {
//             let scroll = $(window).scrollTop();
//             let blockPosition = $(this).offset().top;
//             let windowHeihgt = $(window).height();
//             if (scroll > blockPosition - windowHeihgt + 160) {
//                 $(this).addClass("fadein_b2");
//             }
//             });
//         },2000);
//     });
// });



// 高さが伸びる

$(window).on('scroll',function(){

    $(".heightup").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 50){
        $(this).addClass('height_up1');
      } else {
        $(this).removeClass('height_up1');
      }
    });
    
});

      
      
      
