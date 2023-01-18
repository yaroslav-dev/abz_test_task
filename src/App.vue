<template>
  <div id="app">
    <!-- <router-view/> -->
    <Home />
  </div>
</template>

<script>
import Home from "@/views/HomeView.vue"

export default {
  components: {
    Home
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

* {
  letter-spacing: normal;
  font-weight: 400;
  font-family: $font;
  ::-webkit-scrollbar {
    display: none; // for test of pixel perfection
  }
}
#app {
  background-color: $bg_lightGray;
  font-family: $font;
}
h1 {
  font-size: $heading_size;
  line-height: $heading_lineheight;
}
p {
  font-size: $text_size;
  line-height: $text_lineheight;
}
</style>
