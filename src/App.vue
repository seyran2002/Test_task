<template>
  <div class="p-[10px]">
    <h1 class="font-bold text-3xl mb-[10px]">2021 Wellness Plan</h1>
    <div class="border border-gray-200 rounded-lg py-6 px-4">
      <popup
          v-if="showEditPopup"
          @close-popup="changeShowEditPopup">
        <list-edit-popup
            :list="getData"
        />
      </popup>
      <div class="flex justify-between">
        <transition mode="out-in">
          <performance v-if="hideShow" />
        </transition>

        <div class="w-full ml-6">
          <button class="ml-auto block mb-[10px]" @click="hideShow = !hideShow">Hide</button>
          <transition mode="out-in">
            <div v-if="hideShow">
              <month />
              <lists @open-edit-popup="openEditPopup"/>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Performance from './components/Performance.vue'
import Month from './components/Month.vue'
import Lists from './components/Lists.vue'
import Popup from './components/ui/Popup.vue'
import ListEditPopup from './components/popups/ListEditPopup.vue'

export default {
  name: 'App',
  components: {
    Performance,
    Month,
    Lists,
    Popup,
    ListEditPopup
  },
  data() {
    return {
      showEditPopup: false,
      hideShow: true,
      idList: '',
    }
  },
  computed: {
    getData(){
      return this.$store.getters['getLists'].find(l => l.id === this.idList)
    }
  },
  methods: {
    openEditPopup(id) {
      this.idList = id;
      this.changeShowEditPopup()
    },
    changeShowEditPopup() {
      this.showEditPopup = !this.showEditPopup;
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
