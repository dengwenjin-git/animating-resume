webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-2df95543",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-288975d1",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),f=t(40);t.n(f);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{styleInterval:15,resumeInterval:10,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是邓文晋\n* 程序员一枚，闲来喜欢做些有意思的事情\n* 比如写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: 1em;\n  border: 1px solid;\n  margin: 1em;\n  overflow: auto;\n  width: 45vw; height: 96vh;\n  background: #303030;\n}\n\n\n.styleEditor {\n  transform: translateX(115%);\n  position: absolute;\n}\n\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\npre:not(#style-text) {\n  transform: rotateY(5deg);\n}\n/* 加点鼠标覆盖背影 */\npre:hover{\n   box-shadow: 0px 0px 30px 5px rgba(255,255,255,0.4);\n}\n\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; left: 0; top: 0;\n  padding: 1em;  margin: 1em;\n  width: 48vw; height: 96vh;\n  border: 1px solid;\n  background: #2b2b2b; color: white;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n","\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: '•';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, \".\") \" \";\n  margin-right: .5em;\n}\n.resumeEditor ol li li::before {\n  list-style: none;\n  content: '•';\n  margin: 1em;\n  padding: .5em;\n  font-size: 12px;\n}\n.resumeEditor a {\n  margin-left: .5em;\n  margin-bottom: .5em;\n  font-size: 20px;\n  color: #4492db;\n  letter-spacing: 3px;\n}\n.resumeEditor blockquote {\n  margin: .5em;\n  padding: .5em;\n  background: #ddd;\n  color: black;\n}\n"],currentMarkdown:"",fullMarkdown:"邓文晋\n------\n\njava开发工程师，喜欢钻研技术。\n\n技能\n----\n\n* 熟悉 Java、kotlin语言\n* 熟练使用 Spring，SpringMVC, Mybatis, SpringBoot框架\n* 熟悉 Dubbo、zookeeper、Gradle搭建微服务\n* 熟悉 SpringCloud架构和Linux常用操作\n* 熟悉 Mysql、Postgresql数据库、达梦数据库、Redis和 MongoDB的使用\n* 熟练使用 Ureport2和 AcrobatDC 、帆软进行报表设计展示\n* 熟悉消息组件 rabbitmq，kafka的使用\n* 使用 vue，element-ui 做前端开发\n\n工作经历\n--------\n\n1. 中科绿智（重庆）科技有限公司<br/>\n  1. 参与项目需求讨论，提出可行性方案。<br/>\n  2. 负责系统架构设计和框架搭建。<br/>\n  3. 负责数据库表结构设计。<br/>\n  4. 完成核心代码开发。<br/>\n  5. 编写项目设计文档、开发文档、部署文档。<br/>\n  6. 解决开发过程中遇到的技术难题\n2. 重庆千变科技有限公司<br/>\n  1. 参与各个区域建筑工地设备交互及流程接口编写。<br/>\n  2. 对数字建造、智慧社区进行需求分析，进行相应设计。<br/>\n  3. 参与市建委及安管项目需求调研及相应系统开发，重构及新增重庆市建设工程安全管理网相应系统。<br/>\n  4. 维护已有项目并进行需求新增及代码优化。<br/>\n\n\n链接\n----\n\n> <a>- [GitHub](https://github.com/dengwenjin-git/animating-resume)</a>\n\n> <a>- [我的博客](http://www.dwj.show)</a>\n\n\n> <br/>编程是一种单调的生活，因此程序员比普通人需要更多的关怀，更多的友情。总有人间一两风，填我十万八千梦！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.styleInterval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.resumeInterval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),f=t(40);t.n(f);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是邓文晋\n* 二月了，好多公司都在招聘\n* 你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n","\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: '•';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, \".\") \" \";\n  margin-right: .5em;\n}\n.resumeEditor ol li li::before {\n  list-style: none;\n  content: '•';\n  margin: 1em;\n  padding: .5em;\n  font-size: 12px;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n"],currentMarkdown:"",fullMarkdown:"邓文晋\n------\n\njava开发工程师，喜欢钻研技术。\n\n技能\n----\n\n* 熟悉 Java、kotlin语言\n* 熟练使用 Spring，SpringMVC, Mybatis, SpringBoot框架\n* 熟悉 Dubbo、zookeeper、Gradle搭建微服务\n* 熟悉 SpringCloud架构和Linux常用操作\n* 熟悉 Mysql、Postgresql数据库、达梦数据库、Redis和 MongoDB的使用\n* 熟练使用 Ureport 2和 Acrobat DC 、帆软进行报表设计展示\n* 熟悉消息组件 rabbitmq，kafka的使用\n* 使用 vue，element-ui 做前端开发\n\n工作经历\n--------\n\n1. 中科绿智（重庆）科技有限公司<br/>\n  1. 参与项目需求讨论，提出可行性方案。<br/>\n  2. 负责系统架构设计和框架搭建。<br/>\n  3. 负责数据库表结构设计。<br/>\n  4. 完成核心代码开发。<br/>\n  5. 编写项目设计文档、开发文档、部署文档。<br/>\n  6. 解决开发过程中遇到的技术难题。\n2. 重庆千变科技有限公司<br/>\n  1. 参与各个区域建筑工地设备交互及流程接口编写。<br/>\n  2. 对数字建造、智慧社区进行需求分析，进行相应设计。<br/>\n  3. 参与市建委及安管项目需求调研及相应系统开发，重构及新增重庆市建设工程安全管理网相应系统。<br/>\n  4. 维护已有项目并进行需求新增及代码优化。<br/>\n3. 重庆集元科技有限公司<br/>\n  1. 参照硬件功能搭建智慧停车平台。<br/>\n  2. 进行需求分析，实现平台与硬件之间的交互。<br/>\n  3. 根据设备的电量、驶入、驶离、报警信息实现平台对硬件功能的测试。<br/>\n  4. 编写PC端和手机端与用户、停车场进行信息交互，智慧停车、支付等功能。\n\n链接\n----\n\n* [GitHub](https://github.com/dengwenjin-git/animating-resume)\n* [我的博客](http://www.dwj.show)\n\n> 编程是一种单调的生活，因此程序员比普通人需要更多的关怀，更多的友情。总有人间一两风，填我十万八千梦！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{staticClass:"style-text",domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.e223bfceab730337e711.js.map