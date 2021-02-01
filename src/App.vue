<template>
  <app-navbar></app-navbar>
  <router-view></router-view>
</template>

<script>
import appNavbar from "./components/appNavbar";
import axios from "axios";
export default {
  components: {
    appNavbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  background-image: url(./assets/movie.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>