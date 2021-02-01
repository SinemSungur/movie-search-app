<template>
  <div class="home">
    <div class="home-paragh">
      <p>Find My Vue Movie</p>
    </div>
      <app-search :movie="movie" @movieSearch="movieSearch"></app-search>
      <app-results :movies="movies" @sendTofFav="sendTofFav"></app-results>
  
  </div>
</template>

<script>
import axios from "axios";
import appSearch from "../components/appSearch.vue";
import AppResults from '../components/appResults.vue';

export default {
  components: {
    appSearch,
    AppResults,
  },
  data() {
    return {
      movies: [],
      movie: "",
    };
  },
  methods: {
    movieSearch() {
      this.movie = event.target.value;
      axios
        .get(`http://www.omdbapi.com/?apikey=d969e8ac&s=${this.movie}`)
        .then((movie_response) => {
          this.movies = movie_response.data.Search;
          this.movie = "";
        })
        .catch((e) => {
          console.log("e", error);
        });
    },
    sendTofFav(item){
      axios.post("http://localhost:3000/favorites", {...item}).then(movie_post_response=>{
        console.log("movie_post_response", movie_post_response);
      }).catch(error=>{
        console.log("error", error);
      })
    }
  },
};
</script>

<style>
.home-paragh {
  width: 100vh;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
}
.home-paragh p {
  font-size: 50px;
  font-family: fantasy;
  color: #c23032;
}
</style>