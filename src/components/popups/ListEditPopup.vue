<template>
  <div class="p-4 w-[300px]">
    <h1 class="text-2xl mt-10px">Edit List</h1>
    <div class="mt-[10px]">
      <label for="name">Name</label>
      <input
        id="name" type="text" v-model="list.name"
        class="w-full border border-gray-400 block">
    </div>
    <div class="mt-[10px]">
      <label  for="Status">List Status</label>
      <select
        class="border w-full
        border-gray-400 block"
        v-model="list.status">
        <option
          v-for="option in options"
          :key="option" :value="option"
          class="capitalize" v-text="option"
        />
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListsEditPopup',
  props: {
    list: {
      type: Object
    }
  },
  data() {
    return {
      options: [
        'book-now',
        'booked',
        'completed',
      ]
    }
  }
}
</script>