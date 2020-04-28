<template>
  <div class="home">
    <h1 class="title">Movies</h1>
    <hr />
    <div class="row">
      <template v-for="movie in movies">
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

    <h1 class="title">Genres</h1>
    <hr />
    <ul class="list-group">
      <li
        v-for="genre in genres"
        class="list-group-item d-flex justify-content-between align-items-center"
        :key="genre"
      >
        <router-link
          :to="{name: 'Movies', query: {query: genre, queryType: 'genres'}}"
          tag="a"
        >{{ genre }}</router-link>
        <!-- <span class="badge badge-primary badge-pill">{{ genre.amount }}</span> -->
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, store } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["getSomeMovies", "getSomeGenres"])
  },
  created() {
    this.movies = this.getSomeMovies(12);
    this.genres = this.getSomeGenres(12);
  },
  data() {
    return {
      movies: undefined,
      genres: undefined
    };
  },
  components: {
    HelloWorld
  }
};
</script>
