---
id: stack
title: 堆栈
---

### 栈内存 ECStack （Execution Context stack）执行环境栈

浏览器会在计算机内存中分配一块内存专门用来供代码执行，这个内存叫做栈内存，

### 堆内存(Heap)

浏览器会给我们供我们调用的方法存放在 GO (Gobal Object ) `在浏览器中window 指向GO , 在 node 环境中 global 指向 GO`, 浏览器把内置的一些属性方法放到一个单独的内存 堆内存(Heap)

任务何开辟的内存都有一个 16 进制的内存地址，方便后期找到这个内存

```
isNaN function ...
parseInt parseFloat :function
```

### EC (Execution Context ) 执行上下文 代码自己执行所在的环境

- 全局执行上下文 EC(G)

* 函数中的代码都会在一个单独的私有的执行上下文中处理

- 块级的执行上下文

### 进栈出栈

先进后出,自上而下

- 进栈:`EC(G) 全局的执行上下文进入到栈内存中执行`

- 出栈:`执行完的代码，可能会把形成的上下文出栈释放`

### VO (Varibale Object) 变量对象

在当前上下文中，用来存放创建变量和值的地方 每一个上下文中都有一个自己的变量对象，函数私有上下文中叫做 AO（Activation Object）活动对象，但是也是变量对象.

- 基本类型

```js
// 创建一个值 12  --- 基本数据类型的值都是直接接存储到内存中，引用数据类型的值是先开辟一个堆内存，把东西存储进去最后把地址放到栈中供变量关联使用的
// 创建变量 a
// 让变量和值关联在一起:所有的等号(指针)赋值都是关量指向 a变量通过等号将指针指向值12
let a = 12;
// 创建变量b 将指针指向a
let b = a;
// b再指向值13
b = 13;
```

- 引用类型

```js
// 堆内存 AAAFFF000
// 1.创建一个堆内存
// 2.把键值对{ n: 23 }存到堆内存中
// 3.把堆内存存到栈中，供变量a使用.
let a = { n: 23 };
// b 和 a 用的是同一个引用值
let b = a;
// b把堆内存中的n进行修改
b['n'] = 13;

console.log(a.n);
```

```js
/*
 1.创建值  
   开辟堆 将健值对存入堆 
   存键值对  name: '晶链通',
   存键值对  fn: (function (x) {
                return x + 10;
          })(obj.name),
   把obj.name传给进去，这时候还没有obj的值还未关联obj未定义，实则传的undefined.name，而undefined 没有 name属性

 */
let obj = {
  name: '晶链通',
  fn: (function (x) {
    return x + 10;
  })(obj.name),
};

console.log(obj.fn);
```
