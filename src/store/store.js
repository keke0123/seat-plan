import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        dragMouse: false,
    },
    mutations: {
        dragOnMouse (state){
            console.log('dragOnMouse');
            state.dragMouse=true;
        },
        dragEndMouse (State){
            console.log('store.dragEndMouse');
            State.dragMouse=false;
        }
    }
})