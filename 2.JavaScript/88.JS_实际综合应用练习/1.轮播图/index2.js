//优化1   进行方法函数封装
window.onload = function () {
    //上一张
    var prev = document.getElementById('prev');
    //下一张
    var next = document.getElementById('next');
    //获取banner
    var imglist = document.querySelectorAll('.banner li');
    //获取所有的导航点
    var points = document.querySelectorAll('.points a');
    //声明一个变量,记录索引值
    var index = 0;
    //上一页
    prev.onclick = function () {
        changeImg(index - 1);
    };
    //下一页
    next.onclick = function () {
        changeImg(index + 1);
    };

    //点击导航点切换图片
    //为所有导航点绑定单击响应函数
    for (var i = 0; i < points.length; i++) {
        //创建一个闭包,保存i  或者直接讲var换成let
        (function (i) {
            points[i].onclick = function () {
                changeImg(i);
            };
        })(i);
    }

    function changeImg(targetIndex) {
        //targetIndex 要切换到的图片
        if (targetIndex < 0) {
            targetIndex = imglist.length - 1;
        } else {
            targetIndex %= imglist.length;
        }
        var active = document.querySelector('.points .active');
        active.className = "";
        points[targetIndex].className = "active";
        imglist[index].style.opacity = 0;
        imglist[index].style.zIndex = 0;
        //获取点击导航点的索引,并赋值给index
        index = targetIndex;
        imglist[index].style.opacity = 1;
        imglist[index].style.zIndex = 1;
    }
}