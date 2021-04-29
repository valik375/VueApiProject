<template>
  <TheNavbar/>
  
  <div class="app-container">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
  
</template>


<script>
import TheNavbar from './components/TheNavbar'

export default {
  components: {
    TheNavbar
  }
};
</script>
