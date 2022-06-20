let p1 = Promise.resolve(1);
let p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(2);
    }, 100);
});
let p3 = Promise.resolve(3);

async function promiseAll<T extends readonly unknown[] | []>(
    arr: Promise<T[number]>[]
) {
    let result: any[] = [];
    let num = 0;
    let newPromise = new Promise(async (resolve, reject) => {
        for (let i of arr) {
            try {
                let res = await i;
                result.push(res);
                num++;
                if (num === arr.length) {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }
    });
    return newPromise;
}
promiseAll([p1, p2, p3]).then(r => console.log(r));

// Promise.race
function promiseRace(arr: (() => Promise<unknown>)[]) {
    return new Promise((resolve, reject) => {
        arr.forEach(i => {
            i()
                .then(res => {
                    resolve(res);
                })
                .catch(e => {
                    reject(e);
                });
        });
    });
}

// Promise.retry
function promiseRetry<T>(p: () => Promise<T>, times: number = 5) {
    return new Promise((resolve, reject) => {
        let tmp = () => {
            return p()
                .then(res => {
                    resolve(res);
                })
                .catch(res => {
                    tmp();
                    times--;
                    if (times === 0) {
                        reject(res);
                    }
                });
        };
        tmp();
    });
}

function sleep(fn: () => unknown, time: number) {
    // 同步
    // let startTime = +new Date();
    // let endTime = +new Date();
    // while (endTime - startTime < time) {
    //     endTime = +new Date();
    // }
    // fn();
    // 异步
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fn());
        }, time);
    });
}
