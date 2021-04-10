import Monitor from '../../src/index'

const monitor = new Monitor({
  elementTiming: true,
  logUrl: 'http://123.com/test',
})
console.log('🐻', monitor);
// 模拟一个长任务
const start = Date.now();
while (Date.now() - start < 1000) {}