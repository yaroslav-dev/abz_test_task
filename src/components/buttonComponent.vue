<template>
  <v-btn @click="$emit('click')" class="btn" rounded depressed plain>
    <slot name="btn"></slot>
  </v-btn>
</template>

<script>
export default {};
</script>

<style lang="scss">
.btn {
  text-transform: none;
  height: 34px !important;
  min-width: 100px !important;
  font-size: $text_size !important;
  line-height: $text_lineheight !important;
  background-color: $bg_yellow !important;
  transition: all 0.3s;
}
.btn:hover {
  background-color: $bg_yellow_hover !important;
}
.v-btn__content {
  opacity: 1 !important;
}
</style>