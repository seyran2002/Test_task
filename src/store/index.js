import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 'a',
        name: 'A',
        month: 'jan',
        status: 'completed'
      },
      {
        id: 'b',
        name: 'B',
        month: 'jul',
        status: 'book-now'
      },
      {
        id: 'c',
        name: 'C',
        month: 'feb',
        status: 'booked'
      },
      {
        id: 'd',
        name: 'A',
        month: 'jan',
        status: 'completed'
      },
      {
        id: 'e',
        name: 'A',
        month: 'jan',
        status: 'completed'
      },
    ]
  },
  getters: {
    getLists: (state) => state.lists,
    getActivitiesLists: (state) => state.lists.filter(list => list.status !== 'booked'),
    getCompletedPercent(_, getters) {
      return Math.round(100*getters.getActivitiesLists.length/getters.getLists.length);
    } 
  },
  mutations: {
    deleteList(state, id) {
      state.lists = state.lists.filter(l => l.id !== id)
    }
  },
})
