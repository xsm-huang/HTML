
        window.addEventListener('load', function () {
            var hour = document.querySelector('.hour');
            var minute = document.querySelector('.minute');
            var second = document.querySelector('.second');

            // 先调用一次函数，防止第一次刷新时页面空白
            countDown();
            // 开启定时器
            setInterval(countDown, 1000);

            // 倒计时函数
            function countDown() {
                var times = new Date();

                h = times.getHours();
                h = h < 10 ? '0' + h : h;
                hour.innerHTML = h; // 写入标签

                m = times.getMinutes();
                m = m < 10 ? '0' + m : m;
                minute.innerHTML = m; // 写入标签

                s = times.getSeconds();
                s = s < 10 ? '0' + s : s;
                second.innerHTML = s; // 写入标签
            }
        })
    