window.onload = () =>{
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded');
    setTimeout(classAdd, 250);              // setTimeout(実行したい関数, ミリ秒)
}                                         //  ➡「ミリ秒」の分だけ「実行したい関数」の処理を遅らせる

const classAdd = () =>{
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded');
}




//ロード時に下から30pxのフェードイン

$(window).on('load', function (){
    setTimeout(function(){
        $(".bottom_d2000").each(function() {
            $(this).addClass("fadein_b0");
        });
    },2000);
});

$(window).on('load', function (){
    setTimeout(function(){
        $(".bottom_d4000").each(function() {
            $(this).addClass("fadein_b0");
        });
    },4000);
});


// ナビゲーションの出る・消える(ハンバーガー(768以下)のときはなし)

let offset = 0;
let lastPosition = 0;
let ticking = false;
const header = document.getElementById('move_mav');
const height = 100;

const onScroll = () => {
if ($(window).width() > 768) {
  if (lastPosition > height) {
    if (lastPosition > offset) {
      header.classList.add('head-animation');
    } else {
      header.classList.remove('head-animation');
    }
    offset = lastPosition;
  }
}};

document.addEventListener('scroll', () => {
  lastPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});





// 文字を順番に表示

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

    },3150); //3秒後

});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




// 横スクロール

window.addEventListener("load", function(){

    gsap.registerPlugin(ScrollTrigger);
  
    const area  = document.querySelector(".js-area");
    const wrap  = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;
  
    gsap.set(wrap,  { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });
  
  
    //ここから追加
    gsap.to(items, {
      xPercent: -100 * ( num - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: area, 
        start: "top top", 
        end: "bottom top", 
        pin: true, 
        scrub: true, 
      }
    });
    //ここまで追加
    
    
});

window.addEventListener("load", function(){

    gsap.registerPlugin(ScrollTrigger);
  
    const area  = document.querySelector(".js-area2");
    const wrap  = document.querySelector(".js-wrap2");
    const items = document.querySelectorAll(".js-item2");
    const num   = items.length;
  
    gsap.set(wrap,  { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });
  
  
    //ここから追加
    gsap.to(items, {
      xPercent: -100 * ( num - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: area, 
        start: "top top", 
        end: "bottom top", 
        pin: true, 
        scrub: true, 
      }
    });
    //ここまで追加
    
    
});





// 縦スクロールの線
//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
    $('.timeline li').each(function(){// それぞれのli要素の
      let elemPos = $(this).offset().top;// 上からの高さ取得
      let scroll = $(window).scrollTop();// スクロール値取得
      let windowHeight = $(window).height();// windowの高さ取得
      let startPoint = 300; //線をスタートさせる位置を指定
      if (scroll >= elemPos - windowHeight-startPoint){       
        let H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
        //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
        var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす
  
        // 100% を超えたらずっと100%を入れ続ける
        if(percent  > 100){
          percent  = 100;
        }
        // ボーダーの長さをセット
        $(this).children('.border-line').css({
          height: percent + "%", //CSSでパーセント指定
        });
      } 
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).on('scroll', function(){
    ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
  });




// 横線の伸びる
  
$(window).on('scroll',function(){

    $(".JS_AddLine").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 80){
        $(this).addClass('line_lr2');
      }
    });
    
});




//テキストのフェードイン


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


$(function() {
    $(window).scroll(function() {
        $(".normal6").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_n6");
        }
        });
    });
});


$(function() {
    $(window).scroll(function() {
        $(".normal7").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_n7");
        }
        });
    });
});

$(function() {
    $(window).scroll(function() {
        $(".normal8").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_n8");
        }
        });
    });
});

$(function() {
    $(window).scroll(function() {
        $(".normal9").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_n9");
        }
        });
    });
});

$(function() {
    $(window).scroll(function() {
        $(".normal10").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt +300) {
            $(this).addClass("fadein_n9");
        }
        });
    });
});

$(function() {
    $(window).scroll(function() {
        $(".normal11").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt +400) {
            $(this).addClass("fadein_n9");
        }
        });
    });
});



// スクロール後に円を描く

$(function() {
    let angle = 0;

    $(window).scroll(function() {
        $(".circle1").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
    
            if (scroll > blockPosition - windowHeihgt + 400) {


                const shape = document.querySelector(".shape")

                function drawCircle(){
                    if( angle < 365 ){
                        angle += 1;
                        shape.style.backgroundImage =
                        `conic-gradient(#000 ${angle}deg, #fff ${angle}deg)`;
                        requestAnimationFrame(drawCircle);
                    }
                }
                
                requestAnimationFrame(drawCircle);

            }
        });
    });
});

$(function() {
    let angle = 0;

    $(window).scroll(function() {
        $(".circle2").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
    
            if (scroll > blockPosition - windowHeihgt + 400) {


                const shape = document.querySelector(".shape2")

                function drawCircle(){
                    if( angle < 365 ){
                        angle += 1;
                        shape.style.backgroundImage =
                        `conic-gradient(#000 ${angle}deg, #fff ${angle}deg)`;
                        requestAnimationFrame(drawCircle);
                    }
                }
                
                requestAnimationFrame(drawCircle);

            }
        });
    });
});

$(function() {
    let angle = 0;

    $(window).scroll(function() {
        setTimeout(function(){},1000);
            $(".circle3").each(function() {
            let scroll = $(window).scrollTop();
            let blockPosition = $(this).offset().top;
            let windowHeihgt = $(window).height();
        
            if (scroll > blockPosition - windowHeihgt + 400) {


                const shape = document.querySelector(".shape3")

                function drawCircle(){
                    
                    
                    if( angle < 365 ){
                        angle += 1;
                        shape.style.backgroundImage =
                        `conic-gradient(#000 ${angle}deg, #fff ${angle}deg)`;
                        requestAnimationFrame(drawCircle);
                    }
                }
                
                requestAnimationFrame(drawCircle);

            }
        });
    });
});



    // 円を描く単体コード↓

    // const shape = document.querySelector(".shape")

    // let angle = 0;

    // function drawCircle(){
    //     if( angle < 365 ){
    //         angle += 1;
    //         shape.style.backgroundImage =
    //         `conic-gradient(#000 ${angle}deg, #fff ${angle}deg)`;
    //         requestAnimationFrame(drawCircle);
    //     }
    // }

    // requestAnimationFrame(drawCircle);



    // 円内の文字の下からのフェードイン

$(function() {
    $(window).scroll(function() {
        $(".bottom").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 120) {
            $(this).addClass("fadein_b");
        }
        });
    });
});

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
        $(".bottom3").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 120) {
            $(this).addClass("fadein_b3");
        }
        });
    });
});
