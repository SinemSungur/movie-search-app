<template>
  <div class="container">
    <div class="nav">
      <div class="link-item">
        <router-link to="/"
          ><img src="../assets/popcorn.svg" alt="" />Home</router-link
        >
      </div>
      <div class="favorites">
        <a href="/favorite"><img src="../assets/favorite.svg" alt="" /></a>
      </div>
    </div>
  </div>
</template>


<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 7px;
}

.link-item {
  margin-right: 30px;
}
.nav a {
  color: rgb(194, 27, 50);
  text-decoration: none;
  transition: 500ms all;
  font-size: 20px;
  font-family: fantasy;
}
.link-item:hover {
  font-weight: 900;
}
</style>