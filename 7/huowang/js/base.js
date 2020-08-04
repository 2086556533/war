// 使右键和复制失效 
document.oncontextmenu=new Function("event.returnValue=false"); 
document.onselectstart=new Function("event.returnValue=false"); 

$(function () {
    console.log('dobedoo222@gmail.com');

    // 侧边导航
    $('.top').hover(function () {
            // over
            $(this).css({
                background: '#ee3b44',
                border: '1px solid #ee3b44'
            });
            $($(this).find('img')[0]).css('opacity', 0);
            $($(this).find('.img-replace')[0]).css('opacity', 1);
        }, function () {
            // out
            $(this).css({
                background: '#fff',
                border: '1px solid #e1e1e1'
            })
            $($(this).find('img')[0]).css('opacity', 1);
            $($(this).find('.img-replace')[0]).css('opacity', 0);
        }
    );

    // 回到顶部
    $('.top').click(function (e) { 
        e.preventDefault();
        $(document).scrollTop(0);
    });

    // 鼠标移入导航出现下拉列表
    $('.nav li:gt(0)').mouseenter(function(ev) {
        $('header').addClass('on-move');
        if($(this).index() == 1) {
            $('.product').css({
                opacity: 1,
                zIndex: 1
            });
            $('.service, .culture, .join, .shop, .media').css({
                opacity: 0,
                zIndex: 0,
            });
        } else if($(this).index() == 2) {
            $('.service').css({
                opacity: 1,
                zIndex: 1
            });
            $('.product, .culture, .join, .shop, .media').css({
                opacity: 0,
                zIndex: 0,
            });
        } else if($(this).index() == 3) {
            $('.culture').css({
                opacity: 1,
                zIndex: 1
            });
            $('.product, .service, .join, .shop, .media').css({
                opacity: 0,
                zIndex: 0,
            });
        } else if($(this).index() == 4) {
            $('.media').css({
                opacity: 1,
                zIndex: 1
            });
            $('.product, .service, .culture, .join, .shop').css({
                opacity: 0,
                zIndex: 0,
            });
        } else if($(this).index() == 5) {
            $('.join').css({
                opacity: 1,
                zIndex: 1
            });
            $('.product, .service, .culture, .shop, .media').css({
                opacity: 0,
                zIndex: 0,
            });
        } else if($(this).index() == 6) {
            $('.shop').css({
                opacity: 1,
                zIndex: 1
            });
            $('.product, .service, .culture, .join, .media').css({
                opacity: 0,
                zIndex: 0,
            });
        }
        $('.nav-list-con').css({
            transform: 'translate(0, 0)',
            background: '#fff',
            visibility: 'visible'
        });
        $('header').css('background', '#fff');
    });

    // 移出下拉框，下拉框消失
    var head = $('.header-con');
    $('.nav-list-con').mouseleave(function(ev) {
        var target = ev.toElement;
        if(target == head.children()[0] || target == head[0] || target == head.children()[0].children[0] || target == head.children()[1] || target == head.children()[1].children[0] || target == head.children()[1].children[0].children[0].children[0] || target == head.children()[1].children[0].children[1].children[0] || target == head.children()[1].children[0].children[2].children[0] || target == head.children()[1].children[0].children[3].children[0] || target == head.children()[1].children[0].children[4].children[0] || target == head.children()[1].children[0].children[5].children[0] || target == head.children()[1].children[0].children[6].children[0] || target == head.children()[1].children[1] || target == head.children()[1].children[1].children[0]) {
            return;
        } else {
            setTimeout(() => {
                $('header').removeClass('on-move');
                $('.nav-list-con').css({
                    transform: 'translate(0, -97px)',
                    background: 'none',
                    visibility: 'hidden'
                });
                $('.product, .service, .culture, .join, .shop, .media').css({
                    opacity: 0,
                });
                $('header').css('background', 'none');
            }, 300);
            
        }
        
    })

    // 搜索框
    $('form').mouseenter(function () {
            // over
            $('header').addClass('on-search');
        }
    );
    $('.search-box').mouseleave(function (ev) { 
        if(ev.toElement == $('form img')[0] || ev.toElement == $('form .search-box-close')[0] || ev.toElement == $('form')[0]) {
            return;
        } else {
            setTimeout(() => {
                $('header').removeClass('on-search');
            }, 0);
        }
        
    });
    $('.search-box-close').click(function (e) { 
        e.preventDefault();
        $('header').removeClass('on-search');
    });

    // 加载首屏图片
    $.each($('img'), function (indexInArray, valueOfElement) { 
        if(valueOfElement.getBoundingClientRect().top < $(window).height()) {
            $(valueOfElement).attr('src', $(valueOfElement).attr('data-src'));
        } 
    });

    $('.middle-nav').addClass('move');

    var winH = $(window).height();

    $(window).scroll(function () { 
        var wdTop = $(window).scrollTop() + $(window).height();

        // 按需加载图片
        $.each($('img'), function (indexInArray, valueOfElement) {
            if(valueOfElement.getBoundingClientRect().top < wdTop + 10) {
                $(valueOfElement).attr('src', $(valueOfElement).attr('data-src'));
            }
        });

        // 出现返回顶部按钮
        if($(window).scrollTop() > winH / 2) {
            $('.fix-bar').addClass('on');
        } else {
            $('.fix-bar').removeClass('on');
        }

        // banner变大
        $($('.bigger img')[0]).css('transform', 'scale(' + (1 + $(document).scrollTop() / $(document).height() / 2) + ')')

    });

    $('.share-list a:eq(1)').hover(function () {
            // over
            $('.share-img img:eq(0)').addClass('show');
        }, function (ev) {
            // out
            if(ev.toElement == $('.share-img img:eq(0)')[0]) {
                return;
            } else {
                $('.share-img img:eq(0)').removeClass('show');
            }
        }
    );

    // 二维码
    $('.share-list a:eq(2)').hover(function () {
            // over
            $('.share-img img:eq(1)').addClass('show');
        }, function (ev) {
            // out
            if(ev.toElement == $('.share-img img:eq(1)')[0]) {
                return;
            } else {
                $('.share-img img:eq(1)').removeClass('show');
            }
        }
    );


    $('.share-img img').mouseleave(function () { 
        $(this).removeClass('show');
    });
})