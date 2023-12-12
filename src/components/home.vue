<script setup></script>

<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ms-auto" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="video">
    <video width="auto" height="803" playsinline autoplay muted loop>
      <source src="./loop.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.nav {
  width: 90%;
  background-color: #1a2abf;
  color: white;
  padding-bottom: 40px;
  float: left;
}

.navlink {
  margin-top: 40px;
  float: left;
  align-content: center;
  padding-left: 45px;
  font-size: 18px;
}

.navlink a:hover,
.apply a:hover,
.prospectus a:hover {
  color: #ff8500;
}
</style>
