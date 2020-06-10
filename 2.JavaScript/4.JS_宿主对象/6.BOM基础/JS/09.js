//获取函数当前的样式
function getStyle(obj, name) {
	if (window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name];
	}
}

/* 尝试创建一个可以执行简单动画的函数
 * 参数：
 * 	obj:要执行动画的对象
 * 	attr:要执行动画的样式，比如：left top width height
 * 	target:执行动画的目标位置
 * 	speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback) {
	clearInterval(obj.timer);
	
	var current = parseInt(getStyle(obj, attr));
	
	if (current > target) {
		speed = -speed;
	}

	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;
		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}
		
		obj.style[attr] = newValue + "px";
		//当元素移动到0px时，使其停止执行动画
		if (newValue == target) {
			//达到目标，关闭定时器
			clearInterval(obj.timer);
			//动画执行完毕，调用回调函数
			callback && callback();
		}
	}, 30);
}