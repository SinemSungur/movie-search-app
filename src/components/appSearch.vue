<template>
  <div class="container">
    <div class="search-bar">
      <input
        class="form-control"
        type="text"
        placeholder="What u looking for?"
        aria-label="Search"
        v-model="movie"
        @keydown.enter.prevent="$emit('movieSearch', movie)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
};
</script>

<style>
.search-bar {
  width: 70%;
  position: absolute;
  left: 50%;
  top: 34%;
  transform: translate(-50%, -50%);
}
input.form-control {
  background: border-box;
  border-radius: 20px;
  text-align: center;
  font-size: 30px;
  color: rgb(51, 47, 47);
}
.form-control:focus {
  color: #495057;
  border-color: rgba(51, 47, 47, 0.438);
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(194, 27, 49, 0.548);
  background-color: transparent !important;
}
</style>