window.onload = function () {

    //放大镜大图索引
    var magnifierId = 0;
    //定义一个商品数量
    var changeNum = 1;

    //放大镜效果
    magnifier();

    //放大镜方法
    function magnifier() {
        //模拟后台数据
        var imgsrc = goodData.imgsrc;
        //获取小图容器
        var zoomNode = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom');
        //获取放大镜外层容器
        var previewNode = document.querySelector('.wrap .con .mainCon .previewWrap .preview')
        //初始化蒙版
        var maskNode = null;
        //初始化大图容器
        var bigImgBoxNode = null;
        //初始化大图
        var bigImgNode = null;

        //绑定鼠标移入移出事件
        previewNode.onmouseenter = function (event) {
            //当鼠标移入元素，创建蒙版
            //(蒙版/大图容器/大图)共存共亡,如果蒙版被创建,则两外两个同时被创建
            if (!maskNode) {//只要能进这个判断 mask一定是null  说明没有蒙版元素,则创建蒙版
                //创建蒙版
                maskNode = document.createElement('div');
                //创建大图容器
                bigImgBoxNode = document.createElement('div');
                //创建大图
                bigImgNode = new Image();
                //bigImgNode = document.createElement('img');

                //对蒙版设置样式
                maskNode.className = 'mask';
                //对大图容器设置样式
                bigImgBoxNode.className = 'bigImgBox';
                //对大图设置样式
                bigImgNode.src = imgsrc[magnifierId].b;

                //把蒙版插入到小图容器当中
                zoomNode.appendChild(maskNode);
                //把大图放入到大图容器当中
                bigImgBoxNode.appendChild(bigImgNode);
                //把大图容器添加到放大镜结构中
                previewNode.appendChild(bigImgBoxNode);
            }
            /*鼠标移动*/
            zoomNode.onmousemove = function (event) {
                //设置蒙版的位置=鼠标位置-父元素相对窗口的位置-蒙版自身的一半
                //创建一个对象,储存蒙版位置
                var maskPosition = {
                    left: event.clientX - zoomNode.getBoundingClientRect().left - maskNode.offsetWidth / 2,
                    top: event.clientY - zoomNode.getBoundingClientRect().top - maskNode.offsetHeight / 2
                }
                //进行边界点判断
                //水平
                if (maskPosition.left < 0) {
                    maskPosition.left = 0;
                } else if (maskPosition.left > zoomNode.clientWidth - maskNode.offsetWidth) {
                    maskPosition.left = zoomNode.clientWidth - maskNode.offsetWidth;
                }
                //垂直
                if (maskPosition.top < 0) {
                    maskPosition.top = 0;
                } else if (maskPosition.top > zoomNode.clientHeight - maskNode.offsetHeight) {
                    maskPosition.top = zoomNode.clientHeight - maskNode.offsetHeight;
                }
                //位置赋值给蒙版
                maskNode.style.left = maskPosition.left + 'px';
                maskNode.style.top = maskPosition.top + 'px';

                //移动大图
                //计算大图与小图可移动偏移量的比例
                var scale = (zoomNode.clientWidth - maskNode.offsetWidth) / (bigImgNode.offsetWidth - bigImgBoxNode.clientWidth);
                var bigImgPosition = {
                    left: maskPosition.left / scale,
                    top: maskPosition.top / scale
                }
                //对大图移动进行赋值
                bigImgNode.style.marginLeft = -bigImgPosition.left + 'px';
                bigImgNode.style.marginTop = -bigImgPosition.top + 'px';

                /*鼠标离开*/
                previewNode.onmouseleave = function () {
                    //删除大图容器和蒙版
                    zoomNode.removeChild(maskNode);
                    previewNode.removeChild(bigImgBoxNode);

                    //把蒙版元素的变量初始化
                    maskNode = null;
                    bigImgBoxNode = null;
                    bigImgNode = null;

                    //事件解绑
                    zoomNode.onmousemove = null;
                    previewNode.onmouseleave = null;
                }
            }
        }
    }

    //缩略图滑动
    //定义一个函数,用来获取非行间样式
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle
        } else {
            return window.getComputedStyle(obj)[attr];
        }
    }

    //调用方法
    thumbnail();

    //定义方法
    function thumbnail() {
        //获取li容器ul
        var listNode = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .items .list');
        //根据动态数据生成缩略图结构
        var imgSrc = goodData.imgsrc;
        //遍历缩略图
        imgSrc.forEach(function (item) {
            //创建li
            var liNode = document.createElement('li');
            //创建图片
            var imgNode = new Image();
            //给图片设置路径
            imgNode.src = item.s;
            //把图片放入li   把li放入ul
            liNode.appendChild(imgNode);
            listNode.appendChild(liNode);
        })

        //获取按钮
        var prevNode = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .prev');
        var nextNode = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .next');
        //获取li
        var liNodes = document.querySelectorAll('.wrap .con .mainCon .previewWrap .specScroll .items .list li');
        //定义显示的li数量
        var viewNum = 5;
        //定义每次滑动的li数量
        var moveNum = 2;
        //计算总共可以移动的距离   （li总数 - 默认显示li的个数）* （li的宽度+ li的marginRight）
        var countLength = (liNodes.length - viewNum) * (liNodes[0].offsetWidth + parseInt(getStyle(liNodes[0], 'marginRight')));
        //计算每次移动的距离
        var moveLength = (liNodes[0].offsetWidth + parseInt(getStyle(liNodes[0], 'marginRight'))) * moveNum;
        //初始化已经移动的距离
        var tempLenght = 0;
        //下
        nextNode.onclick = function () {
            //首先判断:如果已经移动的距离tempLenght小于总共可以移动的距离countLength才能继续移动
            if (tempLenght < countLength) {
                //当剩余距离(总共可以走的距离 - 已经移动的距离)大于每次移动的距离,则正常移动
                //当剩余距离(总共可以走的距离 - 已经移动的距离)小于每次移动的距离,则走完剩余距离
                if (countLength - tempLenght > moveLength) {
                    //更新已经移动的距离(当前+移动)
                    tempLenght = tempLenght + moveLength;
                    //修改偏移量
                    listNode.style.left = -tempLenght + 'px';
                } else {
                    //更新已经移动的距离(当前+剩余)
                    tempLenght = tempLenght + (countLength - tempLenght);
                    //修改偏移量
                    listNode.style.left = -tempLenght + 'px';
                }
            }
        }
        //上
        prevNode.onclick = function () {
            if (tempLenght > 0) {
                //如果可以走的距离 大于每次移动的距离 则走该走的长度  否则直接为0
                if (tempLenght > moveLength) {
                    tempLenght = tempLenght - moveLength;
                    listNode.style.left = -tempLenght + 'px';
                } else {
                    tempLenght = 0;
                    listNode.style.left = tempLenght + 'px';
                }
            }
        }
    }

    //缩略图点击
    thumbnailClick();

    function thumbnailClick() {

        //获取缩略图中的图片
        var scrollItems = document.querySelectorAll('.wrap .con .mainCon .previewWrap .specScroll .items .list li>img');
        //获取小图
        var zoomImgNode = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom>img');
        //循环给所有的缩略图绑定单机事件
        for (var i = 0; i < scrollItems.length; i++) {
            scrollItems[i].onclick = function () {
                //
                for (var j = 0; j < scrollItems.length; j++) {
                    if (scrollItems[j] == this) {
                        magnifierId = j;
                    }
                }
                //修改小图索引
                zoomImgNode.src = this.src;
            }
        }
    }

    //商品内容动态筛选,动态生成
    screening();

    function screening() {
        //模拟手机型号数据
        var crumbData = goodData.goodsDetail.crumbData;
        // 获取选择区域容器
        var chooseAreaNode = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea');
        // 遍历模拟数据元素
        crumbData.forEach(function (item) {
            //循环一次,创建一个dl标签,且同步创建一个dt标签
            var dlNode = document.createElement('dl');
            var dtNode = document.createElement('dt');
            //通过模拟数据,给dt标签添加内容
            dtNode.innerHTML = item.title;
            //将dt插入dl
            dlNode.appendChild(dtNode);

            //遍历模拟数据中的date数据创建dd
            item.data.forEach(function (item) {
                //创建dd
                var ddNode = document.createElement('dd');
                //根据模拟数据给dd赋值内容
                ddNode.innerHTML = item.type;
                //给生成的dd添加自定义属性 保存对价格的修改
                ddNode.setAttribute('changePrice', item.changePrice);
                //将dd插入dl
                dlNode.appendChild(ddNode);
            })
            //将dl插入插入到页面
            chooseAreaNode.appendChild(dlNode);
        })

        //筛选内容的交互  作用
        //思路:点击按钮创建节点加到页面中,创建的元素,以数组的形势保存,以保证顺序
        //获取dl集合 dlList
        var dlList = chooseAreaNode.getElementsByTagName('dl');
        //创建一个数据,保存筛选条件,且数组的长度与dl集合的长度一直,更换数组时,直接替换原有位置
        var arr = new Array(dlList.length);
        //初始换数组,全部赋值为0
        arr.fill(0);//ES6 新方法   填充数组
        //遍历dl 为dl内的dd绑定事件
        for (var i = 0; i < dlList.length; i++) {
            //给dl添加索引值
            dlList[i].index = i;
            //解决同步异步问题/或者直接修改为Let
            (function () {
                //获取每一个dl内的所有dd
                var ddList = dlList[i].getElementsByTagName('dd');
                //为每一个ddList内的每一个dd绑定事件i
                for (var j = 0; j < ddList.length; j++) {
                    ddList[j].onclick = function () {
                        //1.点击后,实现dd高亮切换
                        for (var i = 0; i < ddList.length; i++) {
                            ddList[i].style.color = "#666";//全部还原
                        }
                        this.style.color = "red";//单独实现

                        //2.根据点击dd 修改数组
                        //this.parentNode.index 父元素的索引(之前遍历的)
                        //this.innerHTML    点击dd的内容
                        arr[this.parentNode.index] = this;
                        //计算价钱
                        priceSum(arr);
                        //3.遍历数组,根据内容创建节点
                        //获取页面中,存放结果的容器
                        var choosedNode = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea .choosed');
                        //每次创建之前,清空上一次内容
                        choosedNode.innerHTML = "";
                        //遍历数组
                        arr.forEach(function (item, index) {
                            //检测数组在不为默认值0的情况下,创建
                            if (item) {
                                //创建mark
                                var markNode = document.createElement('mark');
                                //将数组的内容赋值给mark
                                markNode.innerHTML = item.innerHTML;
                                //创建mark中的a标签
                                var aNode = document.createElement('a');
                                //创建a标签时,给a 添加一个索引,根据遍历的索引
                                aNode.setAttribute('num', index);
                                aNode.innerHTML = "X";
                                //把a标签放入mark  把mark放入结果容器
                                markNode.appendChild(aNode);
                                choosedNode.appendChild(markNode);
                            }
                        });

                        //4.实现删除功能
                        //获取mark中的a
                        var aList = choosedNode.querySelectorAll('mark>a');
                        //给a绑定单击事件
                        for (var i = 0; i < aList.length; i++) {
                            aList[i].onclick = function () {
                                //获取当前点击的a 标签的索引,来操控对应dl中dd的高亮
                                var num = parseInt(this.getAttribute('num'));
                                //删除点击的选项
                                this.parentNode.parentNode.removeChild(this.parentNode);

                                var ddList = dlList[num].querySelectorAll('dd');
                                for (var i = 0; i < ddList.length; i++) {
                                    ddList[i].style.color = '#666';
                                }
                                //恢复默认状态
                                ddList[0].style.color = 'red';

                                //每次删除,清空数组中对应的元素
                                arr[num] = 0;
                                //修改价格
                                priceSum(arr);
                            }
                        }
                    }
                }
            })();
        }

        //修改价格方法
        function priceSum(arr) {
            //获取基本价钱
            var newPrice = goodData.goodsDetail.price;
            //遍历数组arr
            arr.forEach(function (item) {
                //修改价钱
                if (item) {
                    newPrice += parseInt(item.getAttribute('changePrice'));
                }
            })
            //获取价钱容器
            var priceNode = document.querySelector('.wrap .con .mainCon .infoWrap .priceArea .priceArea1 .price em')
            priceNode.innerHTML = newPrice;
            //获取&&设置底部配套前价格
            var choosePriceNode = document.querySelector('.wrap .product .detail .fitting .goodSutis .master p')
            choosePriceNode.innerHTML = '¥' + (newPrice * changeNum);

            //计算搭配完成的总价
            //获取搭配后的总价元素
            var chooseAllPrice = document.querySelector('.wrap .product .detail .fitting .goodSutis .result .price')
            //获取搭配区域所有的复选框
            var chooseAllCheckBox = document.querySelectorAll('.wrap .product .detail .fitting .goodSutis .suits .suitsItem input')
            chooseAllCheckBox.forEach(function (item) {
                if (item.checked) {
                    newPrice += parseInt(item.value);
                }
                chooseAllPrice.innerHTML = '¥' + (newPrice * changeNum);
            })
        }
    }

    //路径导航动态生成
    pathUrl();

    function pathUrl() {
        //获取容器
        var conPoinNode = document.querySelector('.wrap .con .conPoin')
        //接收数据
        var path = goodData.path;
        //遍历路径输入
        path.forEach(function (item, index) {
            //遍历时创建a
            var aNode = document.createElement('a');
            //判断
            if (index == path.length - 1) {
                //最后一个
                aNode.innerHTML = item.title;
                conPoinNode.appendChild(aNode);
            } else {
                aNode.href = item.url;
                aNode.innerHTML = item.title;
                conPoinNode.appendChild(aNode);
                //添加/
                var iNode = document.createElement('i');
                iNode.innerHTML = "/";
                conPoinNode.appendChild(iNode);
            }
        })
    }

    //商品详情信息动态获取
    goodsDetail();

    function goodsDetail() {
        //获取容器
        var info1Node = document.querySelector('.wrap .con .mainCon .infoWrap .info1');
        //接收数据
        var infoDate = goodData.goodsDetail;
        var infolContent =
            `                    
            <!--产品信息-->
            <h3 class="infoName">${infoDate.title}</h3>
            <p class="news">${infoDate.recommend}</p>
            <!--价格区域-->
            <div class="priceArea">
                <!--上半部分-->
                <div class="priceArea1">
                    <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
                    <div class="price">
                        <i>¥</i>
                        <em>${infoDate.price}</em>
                        <span>降价通知</span>
                    </div>
                    <div class="remark">
                        <i>累计评价</i>
                        <span>${infoDate.evaluateNum}</span>
                    </div>
                </div>
                <!--下半部分-->
                <div class="priceArea2">
                    <div class="title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</div>
                    <div class="fixWidth">
                        <i>${infoDate.promoteSales.type}</i>
                        <em>${infoDate.promoteSales.content}</em>
                    </div>
                </div>
            </div>
            <!--支持与配送至-->
            <div class="support">
                <div class="supportArea">
                    <div class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
                    <p>${infoDate.support}</p>
                </div>
                <div class="supportArea">
                    <div class="title">配&nbsp;送&nbsp;至</div>
                    <p>${infoDate.address}</p>
                </div>
            </div>
            `
        info1Node.innerHTML = infolContent;
    }

    //选项卡封装
    //创建一个构造函数
    function Tab(btns, content) {
        this.tabBtn = btns;
        this.content = content;
        //保存当前的this，用于内部事件的回调函数访问外部的this
        var _this = this;

        //给所有的btn绑定单击事件
        for (var i = 0; i < this.tabBtn.length; i++) {
            //需要给所有的按钮添加索引
            this.tabBtn[i].index = i;
            this.tabBtn[i].onclick = function () {
                //this  事件源
                _this.clickBtn(this)
            }
        }
    }

    Tab.prototype.clickBtn = function (btn) {
        //btn接受的就是当前点击的事件源
        //选项卡切换
        for (var i = 0; i < this.tabBtn.length; i++) {
            this.tabBtn[i].className = '';
            this.content[i].style.display = 'none';
        }
        btn.className = 'active';
        this.content[btn.index].style.display = 'block';
    }
    //侧边栏调用tab切换
    asideNav();

    function asideNav() {
        var tabNodes = document.querySelectorAll('.wrap .product > aside .tabWrap>h4');
        var contentNodes = document.querySelectorAll('.wrap .product > aside .tabContent .tabItem');
        new Tab(tabNodes, contentNodes);
    }

    //评论区域tab切换
    intro();

    function intro() {
        var tabNodes = document.querySelectorAll('.wrap .product .detail .intro .tabWrap li');
        var contentNodes = document.querySelectorAll('.wrap .product .detail .intro .tabContent .tabItem')
        new Tab(tabNodes, contentNodes);
    }

    //配套价钱计算
    fittingPrice();

    function fittingPrice() {
        //获取配套工具后最终价钱显示区域
        var chooseAllPrice = document.querySelector('.wrap .product .detail .fitting .goodSutis .result .price ');
        //获取配套  所有复选框
        var chooseAllCheckBox = document.querySelectorAll('.wrap .product .detail .fitting .goodSutis .suits .suitsItem input');
        //遍历所有的价格框,绑定点击事件
        for (var i = 0; i < chooseAllCheckBox.length; i++) {
            chooseAllCheckBox[i].onclick = function () {
                //获取基础价盒子
                var choosePriceNode = document.querySelector('.wrap .product .detail .fitting .goodSutis .master p');
                //获取基础价
                var choosePrice = parseInt(choosePriceNode.innerHTML.substr(1));
                //遍历所有的附加品复选框
                chooseAllCheckBox.forEach(function (item) {
                    //如果被选中,进行价格累加
                    if (item.checked) {
                        choosePrice += parseInt(item.value);
                    }
                })
                //更新总价格
                chooseAllPrice.innerHTML = '¥' + choosePrice;
            }
        }
    }

    //商品数量交互后修改价格
    goodsNum();

    function goodsNum() {
        //获取数量以及按钮元素
        var inputNode = document.querySelector('.wrap .con .mainCon .choose .cartWrap .controls input');
        var plusNode = document.querySelector('.wrap .con .mainCon .choose .cartWrap .controls .plus');
        var minusNode = document.querySelector('.wrap .con .mainCon .choose .cartWrap .controls .minus');

        // ++
        plusNode.onclick = function () {
            changeNum++;
            inputNode.value = changeNum;
            changeFittingPrice();
        }
        // --
        minusNode.onclick = function () {
            if (changeNum > 1) {
                changeNum--;
                inputNode.value = changeNum;
                changeFittingPrice();
            }
        }

        //封装一个 改变数量就改变搭配总价的函数
        function changeFittingPrice() {
            //获取价格节点
            var priceNode = document.querySelector('.wrap .con .mainCon .infoWrap .priceArea .priceArea1 .price em');
            //需要修改的价格就是  单价*数量
            var finalPrice = priceNode.innerHTML * changeNum;
            //改变选择搭配价钱
            var choosePrice = document.querySelector('.wrap .product .detail .fitting .goodSutis .master p')
            choosePrice.innerHTML = "¥" + finalPrice;
            //修改搭配后的价钱
            //获取搭配后的总价元素
            var chooseAllPrice = document.querySelector('.wrap .product .detail .fitting .goodSutis .result .price');
            //获取搭配区域所有的复选框
            var chooseAllCheckBox = document.querySelectorAll('.wrap .product .detail .fitting .goodSutis .suits .suitsItem input')
            chooseAllCheckBox.forEach(function (item) {
                if (item.checked) {
                    finalPrice += parseInt(item.value);
                }
                chooseAllPrice.innerHTML = '¥' + finalPrice;
            })
        }
    }

    //侧边栏
    asideShow();

    function asideShow() {
        //获取元素
        var butNode = document.querySelector('.wrap .toolBar .but');
        var toolBarNode = document.querySelector('.wrap .toolBar');
        var flag = true;//默认是闭合
        butNode.onclick = function () {
            if (flag) {
                //原本是true代表闭合     这次点击就要执行展开的逻辑
                toolBarNode.className = 'toolBar toolBarOut';
                this.className = 'but open';
            } else {
                //原本是flase代表展开   这次点击就要执行闭合逻辑
                toolBarNode.className = 'toolBar toolBarWrap';
                this.className = 'but list';
            }
            //更新
            flag = !flag;
        }

        //        侧边栏效果
        asideShow();

        function asideShow() {
            var butNode = document.querySelector('.wrap .toolBar .but');
            var toolBarNode = document.querySelector('.wrap .toolBar');
            var flag = true;//默认是闭合

            butNode.onclick = function () {
                if (flag) {
//             原本是true代表闭合     这次点击就要执行展开的逻辑
                    toolBarNode.className = 'toolBar toolBarOut';
                    this.className = 'but open';
                } else {
//             原本是flase代表展开   这次点击就要执行闭合逻辑
                    toolBarNode.className = 'toolBar toolBarWrap';
                    this.className = 'but list';
                }
                flag = !flag;
            }

//          鼠标滑过小图逻辑
            var pullList = document.querySelectorAll('.wrap .toolBar .pull');
            var tabIconList = document.querySelectorAll('.wrap .toolBar .pull .tabIcon');
            var tabTxtList = document.querySelectorAll('.wrap .toolBar .pull em');

            for (var i = 0; i < pullList.length; i++) {
                pullList[i].index = i;
                pullList[i].onmouseenter = function () {
                    tabTxtList[this.index].style.left = '-59px';
                    tabTxtList[this.index].style.backgroundColor = '#e1251b';
                    tabIconList[this.index].style.backgroundColor = '#e1251b';
                };
                pullList[i].onmouseleave = function () {
                    tabTxtList[this.index].style.left = '35px';
                    tabTxtList[this.index].style.backgroundColor = '#7a6e6e';
                    tabIconList[this.index].style.backgroundColor = '#7a6e6e';
                }
            }


        }

    }
}