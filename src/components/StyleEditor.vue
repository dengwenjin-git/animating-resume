<template>
  <div class="styleEditor" ref="container">
    <div class="code" v-html="codeInStyleTag"></div>
    <pre class="style-text" v-html="highlightedCode"></pre>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  export default {
    name: 'Editor',
    props: ['code'],
    computed: {
      highlightedCode: function () {
        return Prism.highlight(this.code, Prism.languages.css)
      },
      codeInStyleTag: function () {
        return `<style>${this.code}</style>`
      }
    },
    methods: {
      goBottom() {
        this.$refs.container.scrollTop = 100000
      }
    }
  }

</script>

<style scoped>
  pre{
  }
  @media (max-width:500px){
    pre{
    }
  }
  .code {
    display: none;
  }
</style>
