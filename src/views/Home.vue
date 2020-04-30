<template>
  <div class="home">
    <h1 class="title">Movies</h1>
    <hr />
    <div class="row">
      <template v-for="movie in movies">
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
            <img class="card-image" :src="'/imgs/'+movie.image" :alt="movie.title" />
          </div>
        </div>
      </template>
    </div>

    <router-link :to="{name: 'Movies'}" tag="a" class="btn btn-primary mb-5">Load all Movies</router-link>

    <h1 class="title">Genres</h1>
    <hr />
    <div class="genre-grid">
      <router-link
        class="genre-cell btn btn-dark my-2 px-3"
        v-for="genre in genres"
        :key="genre"
        tag="div"
        :to="{name: 'Movies', query: {query: genre, queryType: 'genres'}}"
      >{{ genre }}</router-link>
    </div>

    <!-- <ul class="list-group">
      <li
        v-for="genre in genres"
        class="list-group-item d-flex justify-content-between align-items-center"
        :key="genre"
      >
        <router-link
          :to="{name: 'Movies', query: {query: genre, queryType: 'genres'}}"
          tag="a"
        >{{ genre }}</router-link>
      </li>
    </ul>-->

    <router-link :to="{name: 'Genres'}" tag="a" class="btn btn-primary mt-5 mb-4">Load all genres</router-link>
  </div>
</template>

<script>
import { mapGetters, store } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getSomeMovies", "getSomeGenres"])
  },
  mounted() {
    this.movies = this.getSomeMovies(8);
    this.genres = this.getSomeGenres(12);
  },
  data() {
    return {
      movies: undefined,
      genres: undefined
    };
  },
  methods: {
    setMovie(id) {
      this.$store.dispatch("setSelectedMovie", id);
    }
  }
};
</script>