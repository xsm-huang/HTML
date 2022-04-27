function getString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello World');
        }, 1000);
    });
}

async function hello() {
    let str = await getString();
    console.log(str);
}

export default hello;
