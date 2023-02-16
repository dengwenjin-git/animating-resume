<template>
  <div id="app">
    <StyleEditor ref="styleEditor"  :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        styleInterval: 15,
        resumeInterval: 10,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* 大家好，我是邓文晋
* 二月了，好多公司都在招聘，你是不是也在准备简历呀。
* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: 1em;
  border: 1px solid;
  margin: 1em;
  overflow: auto;
  width: 45vw; height: 96vh;
  background: #303030;
}


.styleEditor {
  transform: translateX(115%);
  position: absolute;
}

/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
pre:not(#style-text) {
  transform: rotateY(5deg);
}
/* 加点鼠标覆盖背影 */
pre:hover{
   box-shadow: 0px 0px 30px 5px rgba(255,255,255,0.4);
}


/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; left: 0; top: 0;
  padding: 1em;  margin: 1em;
  width: 48vw; height: 96vh;
  border: 1px solid;
  background: #2b2b2b; color: white;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor ol li li::before {
  list-style: none;
  content: '•';
  margin: 1em;
  padding: .5em;
  font-size: 12px;
}
.resumeEditor a {
  margin-left: .5em;
  margin-bottom: .5em;
  font-size: 20px;
  color: #4492db;
  letter-spacing: 3px;
}
.resumeEditor blockquote {
  margin: .5em;
  padding: .5em;
  background: #ddd;
  color: black;
}
`],
        currentMarkdown: '',
        fullMarkdown: `邓文晋
------

java开发工程师，喜欢钻研技术。

技能
----

* 熟悉 Java、kotlin语言
* 熟练使用 Spring，SpringMVC, Mybatis, SpringBoot框架
* 熟悉 Dubbo、zookeeper、Gradle搭建微服务
* 熟悉 SpringCloud架构和Linux常用操作
* 熟悉 Mysql、Postgresql数据库、达梦数据库、Redis和 MongoDB的使用
* 熟练使用 Ureport2和 AcrobatDC 、帆软进行报表设计展示
* 熟悉消息组件 rabbitmq，kafka的使用
* 使用 vue，element-ui 做前端开发

工作经历
--------

1. 中科绿智（重庆）科技有限公司<br/>
  1. 参与项目需求讨论，提出可行性方案。<br/>
  2. 负责系统架构设计和框架搭建。<br/>
  3. 负责数据库表结构设计。<br/>
  4. 完成核心代码开发。<br/>
  5. 编写项目设计文档、开发文档、部署文档。<br/>
  6. 解决开发过程中遇到的技术难题。
2. 重庆千变科技有限公司<br/>
  1. 参与各个区域建筑工地设备交互及流程接口编写。<br/>
  2. 对数字建造、智慧社区进行需求分析，进行相应设计。<br/>
  3. 参与市建委及安管项目需求调研及相应系统开发，重构及新增重庆市建设工程安全管理网相应系统。<br/>
  4. 维护已有项目并进行需求新增及代码优化。<br/>
3. 重庆集元科技有限公司<br/>
  1. 参照硬件功能搭建智慧停车平台。<br/>
  2. 进行需求分析，实现平台与硬件之间的交互。<br/>
  3. 根据设备的电量、驶入、驶离、报警信息实现平台对硬件功能的测试。<br/>
  4. 编写PC端和手机端与用户、停车场进行信息交互，智慧停车、支付等功能。

链接
----

> <a>- [GitHub](https://github.com/dengwenjin-git/animating-resume)</a>

> <a>- [我的博客](http://www.dwj.show)</a>


> <br/>编程是一种单调的生活，因此程序员比普通人需要更多的关怀，更多的友情。总有人间一两风，填我十万八千梦！

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.styleInterval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.resumeInterval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
</style>
