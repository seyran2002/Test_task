<template>
  <div class="my-6">
    <list
      v-for="list in getLists"
      :key="list.id" :data="list"
      @action="doAction"
    />
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'Lists',
  components: {
    List
  },
  computed: {
    getLists(){
      return this.$store.getters['getLists']
    }
  },
  methods: {
    doAction(list) {
      if(list.type === 'delete') {
        this.$store.commit('deleteList', list.id)
      } else {
        this.$emit('open-edit-popup', list.id)
      }
    }
  }
}
</script>