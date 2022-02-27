window.addEventListener('load', function() {
    /*
      1. 获取元素 
    */
    var box = document.querySelector('.box');
    var left_btn = document.querySelector('.left'); // 左侧按钮
    var right_btn = document.querySelector('.right'); // 右侧按钮
    var img_list = document.querySelector('.img_list'); // 图片集
    var circle_list = document.querySelector('.circle_list'); // 小圆点集

    var boxWidth = box.offsetWidth; // 轮播图盒子的宽度

    var num = 0; // 控制图片播放
    var flag = true; // 节流阀
    var timer = null; // 定时器
    /**
     * 2. 鼠标经过
     * 显示左右按钮
     * 停止定时器
     */
    box.addEventListener('mouseover', function() {
        left_btn.style.display = 'block';
        right_btn.style.display = 'block';

        // 停止定时器
        clearInterval(timer);
        timer = null;
    })
    /**
     * 3. 鼠标离开
     * 隐藏左右按钮
     * 开启定时器
     */
    box.addEventListener('mouseout', function() {
        left_btn.style.display = 'none';
        right_btn.style.display = 'none';

        // 开启定时器
        timer = setInterval(() => {
            right_btn.click();
        }, 2000);

    })

    /**
     * 4. 动态生成圆圈，根据图片数量生成
     */
    for (let i = 0; i < img_list.children.length; i++) {
        let li = document.createElement('li'); // 创建小圆点 li
        li.setAttribute('index', i); // 通过自定义属性记录小圆点的索引号
        circle_list.appendChild(li); // 添加小圆点到 circle_list 中

        img_list.children[i].setAttribute('index', i); // 通过自定义属性记录图片的索引号

        /**
         * 5. 为每个小圆点绑定点击事件
         */
        li.addEventListener('click', function() { // 点击小圆圈滚动图片
            let index = this.getAttribute('index'); // 获取当前小圆圈的索引号(自定义属性)
            // 设置点击的小圆点样式current
            set_current(index, circle_list);
            num = index;
            animate(img_list, -index * boxWidth); // 直接调用动画函数
        })
    }
    circle_list.children[0].className = 'current'; // 把 circle_list 中的第一个原点设置类名 current

    /**
     * 6. 为左右按钮绑定点击事件
     */
    // 实现无缝滚动
    // 将最后一张图片克隆一份
    // 当图片滚动到最后一张时，不做动画地快速返回第一张图片
    // left: 0;

    // 克隆第一张图片（此时小圆圈不会多一个，生成小圆圈的代码已经执行完毕）
    var fist_img = img_list.children[0].cloneNode(true);
    fist_img.setAttribute('index', 0); // 设置自定义属性
    img_list.appendChild(fist_img); // 添加克隆的图片
    left_btn.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            if (num == 0) { // 当图片播放到第一张
                img_list.style.left = -(img_list.children.length - 1) * boxWidth + 'px';
                num = img_list.children.length - 1;
            }
            num--;
            animate(img_list, -num * boxWidth, () => {
                flag = true;
            }); // 图片播放动画
            let img_index = img_list.children[num].getAttribute('index'); // 获取当前图片自定义属性 index 的值
            set_current(img_index, circle_list); // 设置点击的小圆点样式current
        }
    })
    right_btn.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            if (num == img_list.children.length - 1) { // 当图片播放到最后一张
                img_list.style.left = 0;
                num = 0;
            }
            num++;
            animate(img_list, -num * boxWidth, () => {
                flag = true;
            }); // 图片播放动画
            let img_index = img_list.children[num].getAttribute('index'); // 获取当前图片自定义属性 index 的值
            set_current(img_index, circle_list); // 设置点击的小圆点样式current
        }
    })

    /**
     * @说明 排他思想，将所有元素的current样式取消，仅设置当前元素样式为current
     * @param {number} index 
     * @param {object} obj 
     */
    var set_current = function(index, obj) {
        for (let i = 0; i < obj.children.length; i++) { // 把所有 li 清除 current 类名
            obj.children[i].className = '';
        }
        obj.children[index].className = 'current'; // 留下我自己
    }

    /**
     * 7.自动播放
     */
    timer = setInterval(() => {
        // 手动调用点击事件
        right_btn.click();
    }, 2000);

})