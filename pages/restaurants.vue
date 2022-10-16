<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurant</h1>
      <AppSelect @change="selectRestaurant = $event" />

      <!-- This is a Vue.js feature that allows you to see the data in the browser -->
      <!-- <pre>{{ $data }}</pre> -->
    </div>

    <AppRestaurantInfo :datasource="filterRestaurants" />
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selectRestaurant: "",
    };
  },

  computed: {
    ...mapState(["fooddata"]),
    filterRestaurants() {
      if (this.selectRestaurant) {
        return this.fooddata.filter((el) => {
          const name = el.name.toLowerCase();
          return name.includes(this.selectRestaurant);
        });
      } else {
        return this.fooddata;
      }
    },
  },
};
</script>

<style></style>
