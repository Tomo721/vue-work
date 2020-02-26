import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        books: {
            genre: [
                'Фантастика',
                'Комиксы',
                'Антиутопия',
                'Ужасы'
            ],
            avtor: [
                'Иванов',
                'Петров',
                'Стругацкие'
            ]
        }
    },
    mutations:{
        increment: state => state.count++,
    },

    actions:{},
    getters:{},
  
})

// store.commit('increment')

// console.log(store.state.count) // -> 1