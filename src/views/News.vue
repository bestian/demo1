<template>
  <div class="about">
    <h1>最新消息</h1>
    <div class="ui ordered list">
      <div class="item" v-for = "n in news" :key="n.date">{{n.date}}: {{n.n}}</div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'NewsView',
  data () {
    return {
      news: [
        { n: 'Lorem Ipsum', date: '2022-09-17', href: '' },
        { n: 'Lorem Ipsum', date: '2022-09-15', href: '' },
        { n: 'Lorem Ipsum', date: '2022-09-12', href: '' },
        { n: 'Lorem Ipsum', date: '2022-09-10', href: '' },
        { n: 'Lorem Ipsum', date: '2022-09-05', href: '' },
        { n: 'Lorem Ipsum', date: '2022-08-26', href: '' },
        { n: 'Lorem Ipsum', date: '2022-08-17', href: '' },
        { n: 'Lorem Ipsum', date: '2022-08-09', href: '' },
        { n: 'Lorem Ipsum', date: '2022-07-27', href: '' }
      ]
    }
  }
}
</script>
