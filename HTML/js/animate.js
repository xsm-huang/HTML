function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 避免浮点数运算
        let step = (target - obj.offsetLeft) / 10;
        // 正直向上取整，负值向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画，结束定时器
            clearInterval(obj.timer);
            // 回调函数写道定时器结束里面
            callback && callback(); // 利用短路运算
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}