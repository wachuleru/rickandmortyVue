import { createStore } from 'vuex'

export default createStore({
  state: {
    personajes:[],
    personaje:{}
  },
  mutations: {
    updatePersonajes(state,payload){
      state.personajes=payload;
    },
    updatePersonaje(state,payload){
      state.personaje=payload;
    }
  },
  actions: {
    async getPersonajes({commit}){
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character`);
        const get_personajes= await data.json();
        console.log(get_personajes);
        commit('updatePersonajes',get_personajes.results)
        console.log(get_personajes.info.results);
      } catch (error) {
        console.log(error);
      }
    },
    async getPersonaje({commit},id){
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const get_personaje= await data.json();
        console.log(get_personaje);
        commit('updatePersonaje',get_personaje)
        console.log(get_personaje.info);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
