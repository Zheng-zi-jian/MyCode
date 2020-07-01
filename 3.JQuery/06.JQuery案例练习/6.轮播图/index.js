$(function () {
    //获取显示区域
    var $banner = $('.banner');
    //获取左右按钮
    var $prev = $('#prev');
    var $next = $('#next');
    //获取图片容器
    var $list = $('.list');
    //获取导航点
    var $points = $('.points a');
    //获取显得Banner的数量
    var showImg = $points.length;
    //创建一个变量记录上一张的索引值
    var index = 0;
    //创建一个变量用来储存轮播是否正在进行
    var isMoving = false;
    //创建一个变量用来储存轮播的状态
    var isPlaying = true;

    //切换轮播Banner
    //上一张
    $prev.click(function () {
        nextPage(false);
    });
    //下一张
    $next.click(function () {
        nextPage(true);
    });
    //定义动画换页时长:每次总的时间
    var time = 2000;
    //定义每帧的时长
    var itemTime = 20;
    //定义Banner图片长度
    var bannerWidth = 1226;
    //点击导航点,切换图片
    //获取点击的导航点
    $points.click(function () {
        //获取索引
        var targetIndex = $(this).index();
        //调用
        nextPage(targetIndex);
    })
    //定义一个函数,进行Banner轮播
    function nextPage(next) {
        if (isMoving){
            return;
        }
        //函数执行,轮播开始,更新变量
        isMoving = true;
        //总偏移:总的偏移量
        //判断类型
        if (typeof next === 'boolean'){
            var offset = next ? -bannerWidth : bannerWidth;
        }else {
            var offset = - (next-index)*bannerWidth;
        }
        //单次偏移:每帧移动的距离
        var itemOffset = offset / (time / itemTime);
        //获取当前Banner图片列表,相对于可视窗口的偏移量
        var left = $list.position().left;
        //计算目标位置
        var targetLeft = left + offset;
        //开启定时器
        var timer = setInterval(function () {
            //获取实时更新的left的值
            left += itemOffset;
            //判断是否停止
            if (Math.round(left) === Math.round(targetLeft)) {
                clearInterval(timer);
                //处理边界:需求,Banner可以循环
                if (Math.round(left) === 0) {
                    left = -showImg * bannerWidth;
                } else if (Math.round(left) === -(showImg + 1) * bannerWidth) {
                    left = -bannerWidth;
                }
                isMoving =false;
            }
            //实时修改Banner列表的left值
            $list.css('left', left);
        }, itemTime)
        newPoint(next);
    }
    //定义一个函数   进行导航点更新
    function newPoint(next) {
        //判断类型
        if (typeof next === 'boolean'){
            var targetIndex = next? index + 1 : index - 1;
        }else {
            var targetIndex = next;
        }
        //处理导航点边界问题
        if (targetIndex < 0){
            targetIndex = showImg - 1;
        }else if (targetIndex > showImg - 1){
            targetIndex = 0;
        }
        //上一个状态
        $points.eq(index).removeClass('active');
        //切换后状态
        $points.eq(targetIndex).addClass('active');
        //更新索引值
        index = targetIndex;
    }

    //定时器  自动切换
    //鼠标进入  停止自动
    $banner.mouseenter(function () {
        isPlaying = false;
    });
    //鼠标离开  开始自动
    $banner.mouseleave(function () {
        isPlaying = true;
    });

    setInterval(function () {
        if (isPlaying){
            nextPage(index + 1);
        }
    },2000);



})