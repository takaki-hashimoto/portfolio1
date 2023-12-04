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
