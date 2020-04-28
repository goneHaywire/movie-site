<template>
  <div>
    <h1 class="title">Movies</h1>
    <hr />
    <div class="row">
      <template v-for="movie in filteredMovies">
        <div class="col-md-3" :key="movie.title">
          <div class="card text-white bg-primary mb-5" style="max-width: 20rem;">
            <!-- <div class="card-header">Header</div> -->
            <div class="card-body">
              <h4 class="card-title">{{ movie.title }}</h4>
              <p class="card-text">{{ movie.desc }}</p>
            </div>
            <img class="card-image" :src="'/imgs/'+movie.image" :alt="movie.title" />
          </div>

          <!-- <div class="card mb-5 text-white bg-primary">
            <h4 class="card-header">{{ movie.title }}</h4>
            <div class="card-body">
              <h5 class="card-title">{{ movie.year }} ({{ movie.length }})</h5>
              <h6 class="card-subtitle text-muted">{{ movie.genres.join(', ') }}</h6>
            </div>
            <img class="card-image" :src="'/imgs/'+movie.image" :alt="movie.title" />
            <div class="card-body">
              <p class="card-text">{{ movie.desc }}</p>
            </div>
            <ul class="list-group list-group-flush text-white bg-dark">
              <li class="list-group-item">Producer: {{ movie.director }}</li>
              <li class="list-group-item">Stars: {{ movie.stars.join(', ') }}</li>
            </ul>
          </div>-->
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      query: "",
      queryType: ""
    };
  },
  computed: {
    ...mapGetters({
      movies: "getMovies"
    }),
    filteredMovies() {
      return this.movies.filter(movie => {
        if (this.queryType === "title")
          return movie[this.queryType].toLowerCase().includes(this.query);
        else return movie[this.queryType].includes(this.query);
      });
    }
  },
  created() {
    this.query = this.$route.query.query || "";
    this.queryType = this.$route.query.queryType || "title";
  }
};
</script>