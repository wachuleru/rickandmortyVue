<template>
    <div class="container ">
        <h1 class="text-center">{{personaje.name}}</h1>
        <div  :key="personaje.id" class="card col-4 offset-4 mr-3 mt-3 " >
            <img :src="personaje.image" class="card-img-top" alt="" style="max-height:200px">
            <div class="card-body">
                <!-- <h5 class="card-title">{{personaje.name}}</h5> -->
                <p class="card-text">Especie: {{personaje.species}}</p>
                <p class="card-text">Estado: {{personaje.status}}</p>
                <p class="card-text">Origen: {{personaje.origin?.name}}</p>
                <p class="card-text">Ubicacion: {{personaje.location?.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['getPersonaje'])
    },
    computed:{
        ...mapState(['personaje'])
    },
    created(){
        this.getPersonaje(this.$route.params.id);
    }
}
</script>

<style>

</style>