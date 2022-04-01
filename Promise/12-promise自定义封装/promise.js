// 声明构造函数
function Promise(executor) {
    // 添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;

    // 声明一个属性 - 异步任务
    this.callback = []; // 使用数组保存多个 then 回调

    // resolve 函数 (使用箭头函数确保 this 指向)
    const resolve = (data) => {
        // 判断状态 (确保状态只能更改一次)
        if (this.PromiseState !== 'pending') return;
        // 修改对象状态 PromiseState
        this.PromiseState = 'fulfilled';
        // 设置对象结果值 PromiseResult
        this.PromiseResult = data;

        // 调用成功的回调函数 - 异步任务
        this.callback.forEach((item) => {
            item.onResolved(data);
        });
    };

    // reject 函数 (使用箭头函数确保 this 指向)
    const reject = (data) => {
        // 判断状态 (确保状态只能更改一次)
        if (this.PromiseState !== 'pending') return;
        // 修改对象状态 PromiseState
        this.PromiseState = 'rejected';
        // 设置对象结果值 PromiseResult
        this.PromiseResult = data;

        // 调用成功的回调函数 - 异步任务
        this.callback.forEach((item) => {
            item.onRejected(data);
        });
    };

    try {
        // 同步调用 执行器函数
        executor(resolve, reject);
    } catch (e) {
        // 修改对象状态 PromiseState 为失败
        this.PromiseState = 'rejected';
        // 设置对象结果值 PromiseResult
        this.PromiseResult = e;
    }
}

// 添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
    const self = this;
    return new Promise((resolve, reject) => {
        console.log(this === self);
        // 封装函数
        const callback = (type) => {
            try {
                // 获取回调函数执行的返回结果
                const result = type(this.PromiseResult);
                // 判断
                if (result instanceof Promise) {
                    result.then(
                        (value) => {
                            resolve(value);
                        },
                        (reason) => {
                            reject(reason);
                        }
                    );
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        };
        // 调用回调函数, 根据状态判断调用哪一个
        if (this.PromiseState === 'fulfilled') {
            callback(onResolved);
        }
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
        }
        // 判断 pending 状态 (异步任务 then 方法先被调用,再有状态改变) - 异步任务
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callback.push({
                onResolved: function () {
                    callback(onResolved);
                },
                onRejected: function () {
                    callback(onRejected);
                },
            });
        }
    });
};
