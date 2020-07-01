//最原始方法
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
    //获取默认白点
    var active = document.querySelector('.points .active');


    //上一页
    prev.onclick = function () {
        //当前图片淡出
        imglist[index].style.opacity = 0;
        //当前图片层级修改
        imglist[index].style.zIndex = 0;
        //当前图片的修饰
        points[index].className="";
        //索引值自减
        index--;
        //判断索引值是否合法
        if (index < 0) {
            index = imglist.length - 1;
        }
        //下一张图片淡入
        imglist[index].style.opacity = 1;
        //下一站图片层级提高
        imglist[index].style.zIndex = 1;
        //添加一个修饰类
        points[index].className="active";

    };
    //下一页
    next.onclick = function () {
        //精简版
        imglist[index].style.opacity = 0;
        imglist[index++].style.zIndex = 0;
        points[index].className="";

        index = index % imglist.length;

        imglist[index].style.opacity = 1;
        imglist[index].style.zIndex = 1;
        points[index].className="active";
    };

    //点击导航点切换图片
    //为所有导航点绑定单击响应函数
    for (var i = 0; i < points.length; i++) {
        //创建一个闭包,保存i  或者直接讲var换成let
        (function (i) {
            points[i].onclick = function () {
                //处理导航点
                //取消默认白点
                active.className = "";
                //给点击的导航点增加
                this.className = "active";

                imglist[index].style.opacity = 0;
                imglist[index].style.opacity = 0;
                //获取点击导航点的索引,并赋值给index
                index = i;
                imglist[index].style.opacity = 1;
                imglist[index].style.zIndex = 1;
            };
        })(i);
    }
    /*   使用let
    for (let i = 0; i < points.length; i++) {
         points[i].onclick = function () {
             imglist[index].style.opacity = 0;
             imglist[index].style.opacity = 0;
             //获取点击导航点的索引,并赋值给index
             index = i;
             imglist[index].style.opacity = 1;
             imglist[index].style.zIndex = 1;
         };
     }*/
}