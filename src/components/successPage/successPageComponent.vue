<template>
  <div class="success_block">
    <h1 class="heading">User successfully registered</h1>
    <Success />
  </div>
</template>

<script>
import Success from "@/components/successPage/successComponent.vue"

export default {
  components: {
    Success
  },
}
</script>

<style lang="scss" scoped>
.success_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
  padding-bottom: 461px;
  .heading {
    text-align: center;
    opacity: 0.87;
    margin-bottom: 50px;
  }
}
</style>