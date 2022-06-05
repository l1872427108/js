(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{457:function(t,v,_){"use strict";_.r(v);var s=_(56),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"页面是如何活动起来的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面是如何活动起来的"}},[t._v("#")]),t._v(" 页面是如何活动起来的")]),t._v(" "),_("p",[t._v("每一个页面都会被分配一个渲染进程，并且会包括一个主线程。主线程是非常的繁忙的,既要处理 DOM、又要进行样式计算，还要生成布局。同时还要处理 js 任务以及各种输入事件。要让这些任有条不紊的执行，这就需要一个系统来统筹调度这些任务.这个调用系统就是我们今天要讲的消息队列和事件循环系统。")]),t._v(" "),_("h3",{attrs:{id:"消息队列和事件循环设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息队列和事件循环设计"}},[t._v("#")]),t._v(" 消息队列和事件循环设计")]),t._v(" "),_("ol",[_("li",[t._v("单线程设计过程中如何处理新增的任务。  (需要采用事件循环机制)\n通过在线程语句使用 for 循环来一直循环执行。")])]),t._v(" "),_("p",[t._v("渲染进程、主进程、插件进程、GUI进程、网络进程。 接收到相应的事件，线程就会被激活，然后执行相对应的操作。 可以让线程活起来。，")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("设计线程模型 （消息队列）\n"),_("ul",[_("li",[t._v("添加一个消息队列。")]),t._v(" "),_("li",[t._v("IO 线程中中产生的新任务添加进消息队列尾部。")]),t._v(" "),_("li",[t._v("渲染主线程会循环从消息队列头部取出任务，执行任务。")])])])]),t._v(" "),_("p",[t._v("主线程就这样一直循环执行下去，因此只要消息队列中有任务，主线程就会去执行。")]),t._v(" "),_("p",[t._v("这是多个线程操作同一个消息队列，所以在添加任务和取出任务的时候还应该加上一个同步锁。")]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("p",[t._v("处理其他进程的任务\n渲染进程专门有一个 IO 线程用来接收其他进程传来的消息，接收到消息后，会将这些消息组装成任务发送给渲染主线程。")])]),t._v(" "),_("li",[_("p",[t._v("消息队列包括哪些任务")]),t._v(" "),_("ul",[_("li",[t._v("输入事件（鼠标滚动、点击、移动）、微任务、文件读写、WebSocket、定时器")]),t._v(" "),_("li",[t._v("页面相关事件：js 执行、解析DOM、样式计算、布局计算、CSS 动画。")]),t._v(" "),_("li",[t._v("都是在主线程中执行的，需要衡量这些事件所占用的时长，解决单个任务占用主线程过久的问题。")])])]),t._v(" "),_("li",[_("p",[t._v("安全退出\n主线程完成之后，如何保证页面主线程能够安全退出？")])])]),t._v(" "),_("p",[t._v("Chrome 解决方案：确定要退出当前页面时，页面主线程会设置一个退出标志的变量。在每次执行完一个任务时，判断是否有设置退出标志. 如果设置了，就直接中断当前的所有任务，退出线程。")]),t._v(" "),_("h3",{attrs:{id:"页面单线程的缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面单线程的缺点"}},[t._v("#")]),t._v(" 页面单线程的缺点")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("如何处理高优先级任务")])]),t._v(" "),_("li",[_("p",[t._v("如何解决单个任务执行过长问题\n如果有个 js 任务因执行时间过久，占用了动画单帧的时间，会给用户制造卡顿的感觉。js 通过回调函数来规避这种问题，也就是让执行的 js 任务滞后执行。")])])]),t._v(" "),_("h3",{attrs:{id:"查看"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[t._v("#")]),t._v(" 查看")]),t._v(" "),_("p",[t._v("Main 项目中，记录了主线程执行中的所有任务。任务下面还有子任务。 在执行 parse html 的时候，如果遇到 js 脚本，就会暂停当前的 html 解析而去执行 js 脚本。")]),t._v(" "),_("p",[t._v("渲染进程：会进行生产页面。  主线程。 DOM、 样式、主线程、合成线程、")])])}),[],!1,null,null,null);v.default=a.exports}}]);