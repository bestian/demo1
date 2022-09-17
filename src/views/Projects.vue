<template>
  <div class="about">
    <h1>熱銷新案</h1>
    <div class="ui four doubling stackable link cards container">
      <div class="ui card" v-for = "(p, idx) in projects" :key="p.date">
        <h3 class="ui header">
          {{p.n}}
        </h3>
        <div class="image">
          <img :src="'https://picsum.photos/seed/picsum' + idx + '/200/300'" />
        </div>
        <p class="description">
          {{p.d}}
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ProjectsView',
  data () {
    return {
      projects: [
        { n: 'Lorem Ipsum', date: '2022-09-17', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' },
        { n: 'Lorem Ipsum', date: '2022-09-15', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' },
        { n: 'Lorem Ipsum', date: '2022-09-12', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' },
        { n: 'Lorem Ipsum', date: '2022-09-10', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' },
        { n: 'Lorem Ipsum', date: '2022-09-05', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' },
        { n: 'Lorem Ipsum', date: '2022-08-26', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' },
        { n: 'Lorem Ipsum', date: '2022-08-17', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' },
        { n: 'Lorem Ipsum', date: '2022-08-09', href: '', d: 'Donec euismod lacus at condimentum lacinia. Fusce lacinia, sapien eu tristique fermentum, arcu mauris dictum magna, non interdum libero massa sed est. Proin convallis libero et sodales euismod.' }
      ]
    }
  }
}
</script>
