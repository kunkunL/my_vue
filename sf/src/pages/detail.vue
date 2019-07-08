<template>
    <div>
        <h2>{{movies.nm}}</h2>
        <p>{{movies.dra}}</p>
    </div>
</template>
<script>
import http from 'utils/http'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{
            movies:{}
        }
    },
    async mounted(){
        Indicator.open()
        let result = await http.get({
            url:'/ajax/detailmovie',
            params:{
                movieId:this.$route.params.id
            }
        })
        this.movies = result.detailMovie
        Indicator.close()
    }
}
</script>