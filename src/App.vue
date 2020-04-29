<template>
  <div id="app">
    <the-navbar></the-navbar>
    <div class="container">
      <router-view :key="$route.fullPath" />
    </div>
    <the-footer></the-footer>
    <the-modal v-if="isMovieSelected"></the-modal>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheModal from "@/components/TheModal.vue";
import { mapGetters } from "vuex";

export default {
  components: { TheNavbar, TheFooter, TheModal },
  computed: {
    ...mapGetters({
      isMovieSelected: "getSelectedMovie"
    })
  }
};
</script>


<style>
@import "./assets/css/style.css";
</style>
