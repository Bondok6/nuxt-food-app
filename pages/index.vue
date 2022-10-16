<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :datasource="fooddata" />
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["fooddata"]),
  },
};
</script>
