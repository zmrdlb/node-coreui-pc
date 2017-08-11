# 前言

公司做一套产品的时候，会形成一套独特的设计风格，交互风格，那么我们可以把这些几乎各个项目公用的js+css提取成一个：`业务核心库`（暂时这么叫吧，不知道专业术语叫成什么样）。

我之前做过一套类似的：[coreui](https://github.com/zmrdlb/coreui)。不过 ` coreui ` 是基于amd requirejs来设计的，而 `node-coreui-pc` 是采用commonjs node
来设计的，并且你已经主意到我加了一个pc，说明此库是为pc页面设计的，主要是css方面。

> 设计是类似的，如果做h5的，更换 css 和 js/widget，并添加fastclick的支持即可。

# node-core-pc

## 技术点

- node
- npm
- es6等js高级特性
- 配置package.json中的browser字段，给js/widget中的部分代码起别名
- 引入node pc版 js组件库：[widget](https://github.com/zmrdlb/node-widget-pc)

## 如何使用

- css: 通过http方式引入页面

- js: 通过module方式引入业务js中

具体应用请见：https://github.com/zmrdlb/express-demo



# 工程目录结构

可参考：https://github.com/zmrdlb/projectdemo；

核心库没那么复杂那么多的东西，所以有些目录没有；

同样，这次假定coreui是PC端的业务核心库，所以引用的js代码库是：https://github.com/zmrdlb/node-widget-pc.git

# 部分目录说明

## 1.html

css/page/global.css里全局样式的静态页面demo，放在html/common/*.html里面

## 2. js

### ui : 全局ui组件
 
  - 基本弹层layer
  
  - alert提示框
  
  - confirm提示框
  
  - toast提示层
  
  - 全铺loading
  
  
### common: 全局基础组件

  - base.view.js: 页面基本view类。最终业务项目中落地页的js都必须引用此js或其子类。
  
      > 设计思想：
      
      1. 项目中存在几乎任何页面都会用到的一些公共组件，但是这些组件比较杂而多，单个引用又麻烦，所以在此做一个总的入口，解决代码碎片化和多余代码加载问题；
      
      2. 对于页面规定一个总入口，处理一些公共业务问题：如，每个页面都要验证用户登录与获取用户信息；
      
      
### [widget: js代码库](https://github.com/zmrdlb/node-widget-pc)

git add submodule https://github.com/zmrdlb/node-widget-pc.git

## ps:

不用担心css命名冲突问题，因为css命名空间为：.coreui-g-*

> 具体使用方式，请见：https://github.com/zmrdlb/express-demo
