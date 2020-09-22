---
id: data-types
title: 数据类型
---

难点是运算过程中数据类型之间的转换，因为js是弱类型语言

## 基本类型和引用类型
### 基本类型7类
 Number 、String 、Boolean 、Null 、Undefined、 Symbol、BigInt
### 引用类型2类
#### Object
   普通对象 Object.create({})、数组 Array、正则 RegExp 、日期 Date 、Math、 其它
   + 对象的下标是字符串如果不是会进类型转换，调用 String() 进行转换


```js
   //
   {[[]]:'aaa'}
   {[{}]:'aaa'}
   {[222]:'aaa'}
   {[{a:'b'}]:'aaa'}

   //key调用 String() 进行转化

 ```

  + 对象存储的是引用


```js
   //存储的是引用
  
   let obj={};
   let objb=Object.create({})
   obj===objb

 ```


#### Function 
function 应该算是个大类要单独例出来

## 数据类型检测

+ typeof 返回的结果都是 string  能细分对象类型   ,但精度不够
+ instanceof 继承那个实列
+ constructor 构造函数
+ Object.prototype.toString.call() 检测数据类型


```js

  //aa
  typeof 'a';
  typeof 1
  typeof null
  typeof {}
  typeof []
  typeof undefined
  typeof true
  typeof function(){}

  function A(){};
  let b=new A();
  b instanceof A
  b.constructor();
  
  Object.prototype.toString.call(1) 
  Object.prototype.toString.call('') 
  Object.prototype.toString.call(true) 
  Object.prototype.toString.call(null) 
  Object.prototype.toString.call(undefined) 
  Object.prototype.toString.call(symbol('aa')) 
  Object.prototype.toString.call(BigInt(22)) 
  Object.prototype.toString.call(function(){}) 
  Object.prototype.toString.call([]) 
  Object.prototype.toString.call({}) 
  Object.prototype.toString.call(NaN) 
  Object.prototype.toString.call(Infinity) 
  Object.prototype.toString.call(new Date()) 
  Object.prototype.toString.call(new RegExp('asasdf')) 
  Object.prototype.toString.call(/aaa/) 


```

## Number类型需要注意的地方
Number 中特别的两个数据  NaN 和 Infinity 都为数字类型，数据转化Number()为强转化,parseInt()/parseFload()为弱转化，js环镜对数字的长度及精度都有要求如出现问题可考虑使用 bignumber库进行处理
## NaN
 + 和谁都不相等包括自己
 + 和谁相加值都为NaN
 + 判断是否为NaN isNaN()
## Infinity
 + Infinity + 数字 =    Infinity
## Number() 把其他类型转化为数字
 + Number()为强转化/隐式转化，全部为数字的字符串才能转为数字否则为NaN
 + Number()是隐试转化的底层运算 null：0、false:0、true:0、空字符串:0、undefined不转化
 + isNaN 底层引用的 
 
  ```js
    /*数值字符串*/
    Number('123')
    /*非数值字符串*/
    Number('其它')  
    Number('12其它') 
    /*隐试转化*/

    Number(null) 
    Number(NaN) 
    Number(Infinity) 
    Number(true) 
    Number(false) 
    Number('') 
    Number(undefined) 
    //null、true、false 、''、undefined
    isNaN(null) 

  ```
   
## parseFloat / parseInt  把其他类型转化为数字  
  + 为弱转化从左开始找如果找到非数字就不找了
  + 不进行隐试转化

  ```js

  parseFloat('123,asdfasf')
  parseFloat('q1313asdfasfas')
  parseFloat(NaN)
  //null、true、false 、''、undefined
  parseFloat(null)

  ```


## +、-、==、！ 转化计算

 !0 !null !'' !undefined !NaN 


## +/- 运算符 
+ 字符串 + 其它的/其它的+字符串   都为 字符串 + String(其它)
+ 数字 + 隐式转化   数字 + 隐式转化后的值(null:0,true:1,false:0,undefined:不转化
* /+ + / - -  为强转化Number()、String()
+ 从左开始运算

  ```js

  let result=10+null+undefined+[]+"jlt"+null+{};
  + + '1'
  + + 'string1'
  + + '1string'
  + + null
  + + undefined
  + + true
  + + false
  + + ''
  + + NaN
  ```

  ## == === 比较符
  + == 在进行比较的时候，如果左右两边数据类型不一致，则默认转化为一致的数据类型，然后在进行比较,
  + === 绝对相等，两边类型一致，值也一致才相等，类型不一致，直接不相对，也不会进行转化

  ```
  
  1.对像==字符串 对象转化为字符串
  [10] == '10'; //true  先将  两边类型不一致则先将对象[10] 转化为字符串 String([10]) 再进行比较
  2.null == undefined ;  (三个等号下不相等),但是和任何其它值值都不相等
  0 == null ;//false   null 在内存中没有开辟值
  3.NaN ;//和谁都不相等包括自己
  4.剩下的情况都是先转化为数字再进比较
  [] == flase ; true  对象转数字先将对象转字符串我后再转数字，
  ![] == false ; !运算优先级比==高 ，！将值转为Boolean类型，只有 0/NaN/null/undefined/'' 转为flase，其它都转为true ，然后再取反.·

  ```
