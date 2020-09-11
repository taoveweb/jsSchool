---
id: data-types
title: 数据类型
---

难点是运算过程中数据类型之间的转换

## 基本数据类型
 Number 、String 、Boolean 、Null 、Undefined、 Symbol、BigInt
## 引用类型 
### object
   普通对象 Object.create({})、数组 Array、正则 RegExp 、日期 Date 、Math、 其它

 ### function 

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
Number 中特别的两个数据  NaN 和   Infinity 都为数字类型,强转Number(),弱转化parseInt()/parseFload(),丢失精度目前调用库bignumber
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
* /+ + / - -  为强转化Number()
+ 从左开始运算

  ```js

  let result=10+null+undefined+[]+"jlt"+null+{};
  + + '1'
  + + 'adfasf1'
  + + null
  + + undefinded

  ```
