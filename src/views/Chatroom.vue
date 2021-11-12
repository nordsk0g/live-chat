<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>

<style>
  nav {
    padding: 1.25em;
    /* border-bottom: 1px solid #eee; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav p {
    margin: 0.125em auto;
    font-size: 1em;
    color: #eee;
  }

  nav p.email {
    font-size: 0.875em;
    color: #999;
  }
</style>