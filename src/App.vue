<template>
  <div id="app">
    <the-navbar></the-navbar>
    <div class="container">
      <router-view :key="$route.fullPath" />
    </div>
    <the-footer></the-footer>
    <the-modal></the-modal>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheModal from "@/components/TheModal.vue";
export default {
  components: { TheNavbar, TheFooter, TheModal }
};
</script>


<style>
@import "./assets/css/style.css";
</style>
