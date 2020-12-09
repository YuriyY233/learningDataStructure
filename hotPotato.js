const Queue = require('./Queue');

function hotPotato(elementList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}
const names = ['sasdfa', 'hushuo', 'sdja'];
const result = hotPotato(names, 5);
result.eliminated.forEach(name => {
    console.log(`${name}在击鼓传话游戏中被淘汰了`);
})
console.log(`胜利者：${result.winner}`);