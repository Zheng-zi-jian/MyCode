window.onload = function () {
    /* 轮播图 有个bug  第一次不能过渡*/
    //获取上下按钮键
    var prev = document.querySelectorAll('.prev-next a')[0];
    var next = document.querySelectorAll('.prev-next a')[1];
    //获取banner图img
    var arrimg = document.querySelectorAll('#bannerimg img');
    //获取轮播点
    var points = document.querySelectorAll('.pointer a');
    var index = 0;
    prev.onclick = function () {
        index--;
        for (var i = 0; i < arrimg.length; i++) {
            arrimg[i].style.zIndex = -1;
            points[i].className = '';
            arrimg[i].style.opacity = '0';
            if (index < 0) {
                index = arrimg.length - 1;
            }
        }
        points[index].className = 'active';
        arrimg[index].style.opacity = '1';
        arrimg[index].style.zIndex = 0;
    }
    next.onclick = function () {
        index++;
        for (var i = 0; i < arrimg.length; i++) {
            arrimg[i].style.zIndex = -1;
            points[i].className = '';
            arrimg[i].style.opacity = '0';
            if (index > arrimg.length - 1) {
                index = 0;
            }
        }
        arrimg[index].style.zIndex = 0;
        points[index].className = 'active';
        arrimg[index].style.opacity = '1';
    };
};



