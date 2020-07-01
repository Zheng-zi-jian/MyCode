$(function () {
    //创建后台模拟数据
    var dataJson = [{
        'content': '唱歌'
    }, {
        'content': '滑雪'
    }, {
        'content': '打鼓'
    }, {
        'content': '游泳'
    }, {
        'content': '哈哈'
    }];
    //获取ul元素
    var $todoMain = $('.todo-main');
    //获取全选全不选按钮
    var $checkAll = $('#checkAll');

    bindData(dataJson);

    //定义方法进行数据绑定&&页面初始化
    function bindData(data) {
        //根据模拟后台数据进行循环拼装节点,初始化页面
        for (var i = 0; i < data.length; i++) {
            //创建li并添加进Ul
            $todoMain.append(
                //li爱好复选框
                '<li class="todoItem">' +
                '<label>' +
                '<input type="checkbox">' +
                '<span>' +
                data[i].content +
                '</span>' +
                '</label>' +
                //删除键
                '<button class="btn btn-danger">删除</button>' +
                '</li>')
        }
        //更新任务总数量
        allTodos();
    }

    //定义方法更新任务总数量
    function allTodos() {
        //任务总数量应与ul>li数量保持一致
        $('#allTodos').html("&nbsp;" + $todoMain.children('li').length);
    }

    //定义方法更新已经完成任务数量
    function allCompletedTodos() {
        $('#allCompletedTodos').html("&nbsp;" + $todoMain.find(':checkbox:checked').length);
    }

    //点击复选框
    /*
     *   $('.todoItem input').click(function () {
     *       //更新已经完成任务数量
     *      allCompletedTodos();
     *       //修改全选按钮:如果所有任务全被选中,则全选按钮同时被选中
     *       $checkAll.prop('checked', $todoMain.find(':checkbox:not(:checked)').length === 0);
     *   })
     */
    //点击复选框 委托版本
    $todoMain.delegate('.todoItem input', 'click', function () {
        //更新已经完成任务数量
        allCompletedTodos();
        //修改全选按钮:如果所有任务全被选中,则全选按钮同时被选中
        $checkAll.prop('checked', $todoMain.find(':checkbox:not(:checked)').length === 0)

    });

    //点击全选
    $checkAll.click(function () {
        //所有复选框的属性同步全选按钮的属性
        $todoMain.find(':checkbox').prop('checked', this.checked);
        //更新已经完成任务数量
        allCompletedTodos();
    })


    //实现Li&&删除按钮的移入移出效果
    /*
     *   $('.todoItem').hover(function () {
     *        $(this).css('background', '#ccc');
     *        $(this).children('button').show();
     *   }, function () {
     *        $(this).css('background', '#fff');
     *        $(this).children('button').hide();
     *    })
     */
    //实现Li&&删除按钮的移入移出效果委托
    $todoMain.delegate('.todoItem', 'mouseenter', function () {
        $(this).addClass('active');
    });
    $todoMain.delegate('.todoItem', 'mouseleave', function () {
        $(this).removeClass('active');
    });


    //实现删除按钮功能
    /* $('.todoItem>button').click(function () {
     *    //删除li
     *    $(this).parent().remove();
     *    //更新全部/已完成-数据
     *    allTodos();
     *    allCompletedTodos();
     *    //判断全选,
     *    $checkAll.prop('checked', $todoMain.children('li').length !== 0 && $todoMain.find(':checkbox:not(:checked)').length === 0);
     *   })
     */
    //实现删除按钮功能委托
    $todoMain.delegate('.todoItem button', 'click', function () {
        //删除li
        $(this).parent().remove();
        //更新全部/已完成-数据
        allTodos();
        allCompletedTodos();
        //判断全选,
        $checkAll.prop('checked', $todoMain.children('li').length !== 0
            && $todoMain.find(':checkbox:not(:checked)').length === 0)
    });


    //删除已完成任务按钮
    $('#removeAllCompleted').click(function () {
        //删除
        $todoMain.find(':checkbox:checked').parent().parent().remove();
        //更新数据
        allCompletedTodos();
        allTodos();
        //只要点击这个按钮   全选一定是false的状态
        $checkAll.prop('checked', false);
    })

    //根据输入内容,创建新值
    $('#newTodo').keyup(function (event) {
        //检测回车键是否被触发
        if (event.keyCode == 13) {
            //检查输入的值,不能为控
            if ($.trim($(this).val())) {
                //创建一个数组,用来接收输入的信息
                var date = [{'content': $(this).val()}]
                //传入数据
                bindData(date);
                //新增加后   全选一定是false的状态
                $checkAll.prop('checked', false);
            } else {
                alert("请不要输入空内容!!!")
            }
            //清空输入框
            $(this).val("");
        }
    })
})
