<template>
  <div 
  class="flex justify-between w-full 
  border border-gray-200 rounded-lg"
  >
    <div
      class="w-1/12 m-2"
      v-for="month in months"
      :key="month"
    >
      <p 
        class="text-center capitalize text-main-color"
      >
        {{ month }}
      </p> 
      <div class="mt-4">
        <div
          v-for="list in getListsByMonth(month)"
          :key="list.id"
          :class="`w-full h-1 rounded-sm m-2 ${list.status}`"
         />
      </div> 
    </div>      
  </div>   
</template>

<script>
export default {
  data() {
    return {
      months: [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct'
      ] 
    } 
  },
  computed: {
    getListsByMonth(){
      return (month) => {
        return this.$store.getters['getLists'].filter(l => l.month === month)
      }
    } 
  }
}
</script>
