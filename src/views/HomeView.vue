<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <Banner />
      <Users />
      <Form />
    </div>
  </div>
</template>

<script>
import Header from "@/components/headerComponent.vue";
import Banner from "@/components/bannerComponent.vue"
import Users from "@/components/users/usersComponent.vue"
import Form from "@/components/form/formComponent.vue"

export default {
  components: {
    Header,
    Banner,
    Users,
    Form
  },
}
</script>

<style lang="scss">
.main {
  max-width: 1170px;
  margin: 0 auto;
}
</style>
