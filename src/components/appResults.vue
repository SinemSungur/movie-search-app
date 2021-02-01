<template>
  <div class="container">
    <div class="results">
      <div class="card" v-for="item in movies" :key="item">
        <img :src="item.Poster" class="card-img-top" :alt="item.Title" />
        <div class="card-body">
          <h5 class="card-title">{{ item.Title }}</h5>
          <small>{{ item.Year }} / {{ item.Type }} </small>
        </div>
        <div class="favorite">
          <a href="#" @click="$emit('sendTofFav', item)" ><img src="../assets/favorite.svg" alt="" /></a>
          <button class="btn-sm btn-warning">IMDB</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "movies"],
  emits: ["sendTofFav"]
};
</script>
<style>
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