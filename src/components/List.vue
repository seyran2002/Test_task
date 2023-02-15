<template>
  <div class="flex justify-between w-full
      items-center border border-gray-200
      rounded-lg mb-3 px-4 py-6">
    <p>{{ data.name }}</p>
    <div class="flex justify-between w-[200px]">
      <div class="flex">
        <img
            width="25"
            :src="require(`@/assets/icons/${data.status}.png`)"
        >
        <p :class="`text-${data.status} capitalize ml-2`">{{data.status}}</p>
      </div>
      <div class="relative">
        <img
            @click="changeShowTools"
            class="cursor-pointer" width="20"
            :src="require(`@/assets/icons/points.png`)"
        >
        <div v-if="showTools" class="bg-white absolute drop-shadow-xl p-4 py-2 w-[150px] rounded-lg right-0">
          <p
            @click="doAction('edit')"
            class="text-sm text-left
            font-bold text-main-color
            cursor-pointer mb-2">
            Edit
          </p>
          <p
            @click="doAction('delete')"
            class="text-sm text-left
            font-bold text-red-500
            cursor-pointer">
            Delete
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  props: {
    data:{
      type: Object,
      requierd: true
    }
  },
  data() {
    return {
      showTools: false,
    }
  },
  methods: {
    changeShowTools() {
      this.showTools = !this.showTools
    },
    doAction(type) {
      this.changeShowTools();
      this.$emit('action', {
        id: this.data.id,
        type
      })
    }
  }
}
</script>