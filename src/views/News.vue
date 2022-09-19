<template>
  <div class="about">
    <h1>最新消息</h1>
    <div class="ui ordered list">
      <div class="item" v-for = "n in news" :key="n.date">{{n.date}}: {{n.name}}</div>
    </div>
  </div>
</template>

<script type="text/javascript">

function csvToArray (text) {
  const [header, ...lines] = text.replace(/\r/g, '').replace(/"/g, '').split('\n')

  const objHeaders = header.split(',')

  const mergeObjects = (oArr) => Object.assign({}, ...oArr)

  const extractObjPartial = (row, i) => ({ [objHeaders[i]]: row })

  const lineToObject = (line) =>
    mergeObjects(line.split(',').map(extractObjPartial))

  const table = lines.map(lineToObject)

  return table
}

export default {
  name: 'NewsView',
  data () {
    return {
      news: [
      ]
    }
  },
  mounted () {
    const vm = this
    vm.$http.get('https://docs.google.com/spreadsheets/d/1-OqLS6Jj4S-FbhzZ1L_JrjnBCY5W6vzfKanYJLWsy8M/gviz/tq?tqx=out:csv&sheet=news').then((response) => {
      vm.news = csvToArray(response.data)
      console.log(vm.news)
    })
  }
}
</script>
