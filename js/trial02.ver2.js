$(document).ready(function(){

    //プログレスバー機能
    // プログレス表示の関数を呼び出す
    imagesProgress();

    // 画像の読み込み状況をプログレス表示
    function imagesProgress () {

        var $container    = $('#progress'),                    
            $progressBar  = $container.find('.progress-bar'),  
            $progressText = $container.find('.progress-text'), 
            $progressLoading = $container.find('.progress-loading'),

            // imagesLoaded ライブラリで body 要素内の画像の読み込み状況を監視
            // 同時に body 全体の画像の総数を保存
            imgLoad       = imagesLoaded('body'),
            imgTotal      = imgLoad.images.length,

            // 読み込みの完了した画像の数のカウンターと、
            // プログレス表示の現在地にあたる数値 (ともに最初は 0)
            imgLoaded     = 0,
            current       = 0,

            // 1 秒間に 60 回のペースで読み込み状況をチェック
            progressTimer = setInterval(updateProgress, 1000 / 60);

        // imagesLoaded を利用し、画像が読み込まれるごとにカウンターを加算
        imgLoad.on('progress', function () {
            imgLoaded++;
        });

        // 画像の読み込み状況をもとにプログレス表示を更新
        // この関数は setInterval() メソッドにより 1 秒間に 60 回呼び出される
        function updateProgress () {

            // 読み込みの完了した画像のパーセンテージ
            var target = (imgLoaded / imgTotal) * 100;

            // current (現在地) と target (目的地) の距離をもとにイージングをかける
            current += (target - current) * 0.1;

            // 表示のバーの幅とテキストに current の値を反映
            // テキストは小数点以下を切り捨てて整数に
            $progressBar.css({ width: current + '%' });
            $progressText.text(Math.floor(current) + '%');

            // 終了処理
            if(current >= 100){
                $progressLoading.text('Complete');
                // プログレス表示の更新をストップ
                clearInterval(progressTimer);
                // CSS でスタイルを変えるためクラスを追加
                $container.addClass('progress-complete');
                // プログレスバーとテキストを同時にアニメーションさせるため、
                // グループ化して 1 つの jQuery オブジェクトに
                $progressBar.add($progressText)
                    // 0.5 秒待つ
                    .delay(500)
                    // 0.25 秒かけてプログレスバーとテキストを透明にする
                    .animate({ opacity: 0 }, 250, function () {
                        // 1 秒かけてオーバーレイを上方向へスライドアウト
                        $container.animate({ top: '-100%' }, 1000, 'easeInOutQuint');
                    });
            }

            // current が 99.9 より大きければ 100 と見なして終了処理へ
            if (current > 99.9) {
                current = 100;
            }
        }
    };


    //背景動画
    if(!navigator.userAgent.match(/(iPhone|Android)/)){
        var options = { videoId: '-iFq6IcAxBc', mute: true ,repeat: true };
    $('#wrapper').tubular(options);
    };

    //ヘッダータイトル
    $('.typo').typoShadow();
    //タイトルロゴ
    $('.btn').on('mouseover', function(){
        var $id = $(this).attr('id');
        switch($id){
            case "btn1":
            $('.titleimg').attr('src', 'img/title1.png');
            $('.titleimg').stop(true).fadeIn();
            break;
            case "btn2":
            $('.titleimg').attr('src', 'img/title2.png');
            $('.titleimg').stop(true).fadeIn();
            break;
            case "btn3":
            $('.titleimg').attr('src', 'img/title3.png');
            $('.titleimg').stop(true).fadeIn();
            break;
            case "btn4":
            $('.titleimg').attr('src', 'img/title4.png');
            $('.titleimg').stop(true).fadeIn();
            break;
        }
    });
    $('.btn').on('mouseout', function(){
        $('.titleimg').fadeOut();
    });
    if(!navigator.userAgent.match(/(iPhone|Android)/)){
        $(function(){
            //ヘッダーボタン
            $(".btn").on('mouseover',function(){
                var work = $(this).attr('id');
                var bordercolor;
                switch(work){
                    case "btn1":
                    bordercolor = '#007BFF';
                    break;
                    case "btn2":
                    bordercolor = 'red';
                    break;
                    case "btn3":
                    bordercolor = '#FFC107';
                    break;
                    case "btn4":
                    bordercolor = '#884898';
                    break;
                }
                $('.colorBorder').css("border-color",bordercolor).stop(true).animate({width:"100%"},800);
                $('#heading').stop(true).animate({color:bordercolor},800);
            })
            //heading下のボーダーに色を
            .on('mouseout',function(){
                $('.colorBorder').stop(true).animate({width:0},800);
                $('#heading').stop(true).animate({color:"#fff"},800);
            });
        });
        };
    
    //オフセットトップ変数利用時のための準備と関数（追加）
    var el = scrollableElement('html', 'body'),
        $window, 
        $section1, 
        $section2,
        $section3,
        $section4,
        section1OffsetTop, 
        section2OffsetTop,
        section3OffsetTop, 
        section4OffsetTop;
    function offsetVarReady(){
        el = scrollableElement('html', 'body'),
        $window = $(window),
        $section1 = $('#avengers'),
        $section2 = $('#ultron'),
        $section3 = $('#infinity'),
        $section4 = $('#end'),
        section1OffsetTop = $section1.offset().top,
        section2OffsetTop = $section2.offset().top,
        section3OffsetTop = $section3.offset().top,
        section4OffsetTop = $section4.offset().top;

    };

    //ヘッダーボタンスムーズスクロール機能
    $('.headerbtn').each(function(){
        offsetVarReady();

         $(this).on('click',function(event){
            event.preventDefault();
            var $id = $(this).attr('id');
            switch($id){
                case "btn1":
                $(el).animate({scrollTop:section1OffsetTop},600);
                break;
                case "btn2":
                $(el).animate({scrollTop:section2OffsetTop},600);
                break;
                case "btn3":
                $(el).animate({scrollTop:section3OffsetTop},600);
                break;
                case "btn4":
                $(el).animate({scrollTop:section4OffsetTop},600);
                break;
            };
         });
    });
    //スティッキーヘッダーボタンスムーズスクロール機能
    $('.sheaderbtn').each(function(){
        offsetVarReady();

        $(this).on('click',function(event){
           event.preventDefault();
           var $id = $(this).attr('id');
           switch($id){
               case "sbtn1":
               $(el).animate({scrollTop:section1OffsetTop},600);
               break;
               case "sbtn2":
               $(el).animate({scrollTop:section2OffsetTop},600);
               break;
               case "sbtn3":
               $(el).animate({scrollTop:section3OffsetTop},600);
               break;
               case "sbtn4":
               $(el).animate({scrollTop:section4OffsetTop},600);
               break;
               case "sbtn0":
               $(el).animate({scrollTop:0},600);
               break;
           };
        });
   });
    function scrollableElement(){
        var i, le, el, $el, scrollable;
        for(i=0,len=arguments.length; i<len; i++){
            el = arguments[i],
            $el = $(el);
            if($el.scrollTop()>0){
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if(scrollable){
                    return el;
                }
            }
        }
        return[];
    };

    //スティッキーヘッダー
    $('.sheader').each(function(){
        offsetVarReady();
        var $header = $(this);
        //スティッキーヘッダーイベント
        $window.on('scroll',function(){ 
            if($window.scrollTop() > section1OffsetTop-1){
                $header.slideDown();
            }
            else{
                $header.slideUp();
            }
            //アクティブ付け替え機能
            if($window.scrollTop() > section1OffsetTop-1 && $window.scrollTop() < section2OffsetTop){
                $('.navlist').find('.active').removeClass('active')
                $('.navlist').find('.nav-av').addClass('active');
            }
            else if ($window.scrollTop() > section2OffsetTop-1 && $window.scrollTop() < section3OffsetTop){
                $('.navlist').find('.active').removeClass('active')
                $('.navlist').find('.nav-ul').addClass('active');
            }
            else if ($window.scrollTop() > section3OffsetTop-1 && $window.scrollTop() < section4OffsetTop){
                $('.navlist').find('.active').removeClass('active')
                $('.navlist').find('.nav-war').addClass('active');
            }
            else if ($window.scrollTop() > section4OffsetTop-1){
                $('.navlist').find('.active').removeClass('active')
                $('.navlist').find('.nav-end').addClass('active');
            };
            });
            $window.trigger('scroll');
        });
        //シンプルスライドショー
        $('.slideshow').each(function(){
            var $slides = $(this).find('img'),
                slideCount = $slides.length,
                currentIndex = 0;

            $slides.eq(currentIndex).fadeIn();

            setInterval(showNextSlides, 3000);

            function showNextSlides(){
                var nextIndex = (currentIndex+1)%slideCount;

                $slides.eq(currentIndex).fadeOut();

                $slides.eq(nextIndex).fadeIn();

                currentIndex = nextIndex;
                }
        });

        //多機能スライドショー
        $('.richSlideshow').each(function(){
            //変数
            var $container = $(this),
                $slideGroup = $container.find('.slideshow-slides'),
                $slides = $slideGroup.find('.rslide'),
                $nav = $container.find('.slideshow-nav'),
                $indicator = $container.find('.slideshow-indicator'),

                slideCount = $slides.length,
                indicatorHTML = '',
                currentIndex = 0,
                duration = 500,
                easing = 'easeInOutExpo',
                interval = 3000,
                timer;
            //HTML要素の配置、生成、挿入
            $slides.each(function(i){
                $(this).css({left:100 * i +'%'});
                indicatorHTML += '<a href="#">' + (i+1) + '</a>';
            });

            $indicator.html(indicatorHTML);

            //関数の定義
            //任意のスライドを表示する関数
            function goToSlide(index){
                $slideGroup.animate({left:-100* index +'%'},duration,easing);

                currentIndex = index;

                updateNavi();
            };

            //ナビとインジケーターの更新関数
            function updateNavi(){
                var $navPrev = $nav.find('.prev'),
                    $navNext = $nav.find('.next');
                
                if(currentIndex === 0){
                    $navPrev.addClass('disabled');
                }else {
                    $navPrev.removeClass('disabled');
                }
                if(currentIndex === slideCount-1){
                    $navNext.addClass('disabled');
                }else {
                    $navNext.removeClass('disabled');
                }

                $indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
            };

            function startTimer(){
                timer = setInterval(function(){
                    var nextIndex = (currentIndex+1)%slideCount;
                    goToSlide(nextIndex);
                },interval);
            };

            //タイマー停止関数
            function stopTimer(){
                clearInterval(timer);
            };

            //イベント
            $nav.on('click','a', function(event){
                event.preventDefault();
                if($(this).hasClass('prev')){
                    goToSlide(currentIndex-1);
                }else{
                    goToSlide(currentIndex+1);
                }
            });

            $indicator.on('click','a',function(event){
                event.preventDefault();
                if(!$(this).hasClass('active')){
                    goToSlide($(this).index());
                }
            });
            $container.on({
                mouseenter:stopTimer,
                mouseleave:startTimer
            });

            updateNavi();
            //最初のスライドを表示
            goToSlide(currentIndex);
            //タイマーをスタート
            startTimer();
        });

        //インフィニティウォー文字スライドダウン
        if(!navigator.userAgent.match(/(iPhone|Android)/)){
        $('.infinity').each(function(){
            offsetVarReady();
            $window.on('scroll', function(){
                if($window.scrollTop() > section3OffsetTop-1 && $window.scrollTop() < section4OffsetTop-1){
                    $('.description-infinity').slideDown();
                    $('.title-infinity').fadeIn();
                }/*else {
                    $('.description-infinity').slideUp();
                    $('.title-infinity').fadeOut();
                };*/
            });

            $window.trigger('scroll');

        });
        };   
        //インフィニティウォー背景画像ズームイン（追加）
        $('.title-infinity , .description-infinity').hover(function(){
            $('.infinityImg').css('transform','scale(1.2)');
            $('.word').css('transform','scale(1.2)');
        },function(){
            $('.infinityImg').css('transform','scale(1)');
            $('.word').css('transform','scale(1)');
        }
        );

        //エンドゲーム公開残り日数表示
        $('.day-description').each(function(){
            var now = new Date();
            var goal = new Date(2019, 4-1, 26);
            var day = goal.getTime() - now.getTime(),
                day = Math.floor(day/1000/60/60/24);
                day = Math.abs(day);

            $('.day').text(day);
        });

        //パララックスプラグインRellax
        var rellax = new Rellax('.rellax', {
            speed: -2,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
          });

        //キャラクター紹介
        $(".para-img").on("click", function(event){
            event.stopPropagation();
            var $this = $(this);
            var charaName = $this.attr("id");
            if($('.'+ charaName).hasClass("chara-active")){
                return;
            }
            switch(charaName){
                case "ironman":
                    $('.chara').removeClass("chara-active").fadeOut();
                    $('.'+ charaName).slideDown().addClass("chara-active");
                break;
                case "captain":
                    $('.chara').removeClass("chara-active").fadeOut();
                    $('.'+ charaName).slideDown().addClass("chara-active");
                break;
                case "thor":
                    $('.chara').removeClass("chara-active").fadeOut();
                    $('.'+ charaName).slideDown().addClass("chara-active");
                break;
            }
        })
        $(".end").on("click", function(){
            $('.chara').removeClass("chara-active").fadeOut();
        })
        $(".chara").on("click", function(event){
            event.stopPropagation();
        })
        
});
