<template>
  <div class="about">
    <h1>熱銷新案</h1>
    <div class="ui four doubling stackable link cards container">
      <div class="ui card" v-for = "(p, idx) in projects" :key="p.date">
        <h3 class="ui header">
          {{p.n}}
        </h3>
        <div class="image">
          <img :src="'https://picsum.photos/seed/picsum' + idx + '/300/200'" />
        </div>
        <p class="description">
          {{p.d}}
        </p>
      </div>
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
  name: 'ProjectsView',
  data () {
    return {
      projects: [
      ]
    }
  },
  mounted () {
    const vm = this
    vm.$http.get('https://docs.google.com/spreadsheets/d/1-OqLS6Jj4S-FbhzZ1L_JrjnBCY5W6vzfKanYJLWsy8M/gviz/tq?tqx=out:csv&sheet=projects').then((response) => {
      vm.projects = csvToArray(response.data)
      console.log(vm.projects)
    })
  }
}
</script>
