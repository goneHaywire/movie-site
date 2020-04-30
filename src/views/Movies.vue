<template>
  <div>
    <h1 class="title">Movies</h1>
    <hr />
    <div class="row">
      <template v-for="movie in filteredMovies">
        <div class="col-md-3" :key="movie.id">
          <div
            class="card text-white bg-primary mb-5"
            style="max-width: 20rem;"
            @click="setMovie(movie.id)"
          >
            <div class="card-body">
              <h4 class="card-title">{{ movie.title }}</h4>
              <p class="card-text">{{ movie.desc }}</p>
            </div>
            <img class="card-image" :src="'/imgs/' + movie.image" :alt="movie.title" />
          </div>
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
  methods: {
    setMovie(id) {
      this.$store.dispatch("setSelectedMovie", id);
    }
  },
  created() {
    this.query = this.$route.query.query || "";
    this.queryType = this.$route.query.queryType || "title";
  }
};
</script>