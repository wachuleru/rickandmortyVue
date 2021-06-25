<template>
    <h2 class="mt-3">Lista de Personajes</h2>
    <div class="container">
        <div class="row">
        <div v-for="pj in personajes" :key="pj.id" class="card col-3 mr-3 mt-3 " >
            <img :src="pj.image" class="card-img-top mt-2" alt="" style="max-height:200px">
            <div class="card-body">
                <h5 class="card-title">{{pj.name}}</h5>
                <p class="card-text">{{pj.species}}</p>
                <router-link :to="`/about/${pj.id}`" class="btn btn-primary">Ver Personaje</router-link>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['getPersonajes'])
    },
    computed:{
        ...mapState(['personajes'])
    },
    created(){
        this.getPersonajes();
    }
}
</script>

<style>

</style>