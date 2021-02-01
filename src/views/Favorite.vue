<template>
  <div class="main_favorites results">
    <div class="card" v-for="item in favorites" :key="item">
      <img :src="item.Poster" class="card-img-top" :alt="item.Title" />
      <div class="card-body">
        <h5 class="card-title">{{ item.Title }}</h5>
        <small>{{ item.Year }} / {{ item.Type }} </small>
      </div>
      <div class="favorite">
        <button class="btn-sm btn-danger" @click="$emit('deleteTofFav', item)">
          DELETE
        </button>
        <button class="btn-sm btn-warning">IMDB</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  props: ["item"],
  emits: ["deleteTofFav"],
  created() {
    axios.get("http://localhost:3000/favorites").then((favorite_response) => {
      console.log("favorite_response", favorite_response);
      this.favorites = favorite_response.data;
    });
  },
};
</script>

<style>
.main_favorites {
  height: 500px;
}
.results {
  display: flex;
  flex-flow: wrap;
  overflow: hidden;
}
.card {
  width: 15%;
  margin: 15px;
  box-shadow: 0 1px 2px 0.2px black;
}
img.card-img-top {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: contain;
  margin: 5px;
}
h5.card-title {
  font-size: 14px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.favorite {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>