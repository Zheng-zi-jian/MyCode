//优化2   事件为委派,并实现自动轮播
window.onload = function (listener) {
    //获取翻页上一页按钮
    var prev = document.getElementById('prev');
    //获取翻页下一页按钮
    var next = document.getElementById('next');
    //获取banner
    var imglist = document.querySelectorAll('.banner li');
    //获取所有的导航点的父元素
    var point = document.querySelector('.points')
    //获取所有的导航点
    var points = document.querySelectorAll('.points a');
    //声明一个变量,记录索引值
    var index = 0;
    //获取共同的祖先原型banner
    var banner = document.getElementById('banner');

    //实现自动轮播
    //(1)设置一个定时器
    var D = setInterval(function () {
        //(2)实现:图片每隔3s索引自动增加1
        changeImg(index+1)
    },3000)

    //(2)监测鼠标是否进入banner区域
    banner.addEventListener('mouseenter',function () {
        //若鼠标进入,自动轮播停止
        clearInterval(D);
    })



    //监听鼠标点击
    banner.addEventListener('click', function (event) {
        //上一页
        if (event.target === prev) {
            changeImg(index - 1);
            //下一页
        } else if (event.target === next) {
            changeImg(index + 1);
            //导航点的父元素
        } else if (event.target.parentNode === point) {
            changeImg(event.target.dataset.index);
        }
    }, false)

    //创建一个函数,功能:翻页.  形参,targetIndex 要切换到的图片
    function changeImg(targetIndex) {
        //判断目标数,是否合法,并处理
        if (targetIndex < 0) {
            targetIndex = imglist.length - 1;
        } else {
            targetIndex %= imglist.length;
        }
        //默认白点的导航点
        var active = document.querySelector('.points .active');
        //取消默认样式
        active.className = "";
        //给目标函数添加新的样式
        points[targetIndex].className = "active";
        //修改当前页透明度-->0
        imglist[index].style.opacity = 0;
        //修改当前页层级-->0
        imglist[index].style.zIndex = 0;
        //获取点击导航点的索引,并赋值给index
        index = targetIndex;
        //修改目标页透明度-->0
        imglist[index].style.opacity = 1;
        //修改目标页层级-->0
        imglist[index].style.zIndex = 1;
    }
}