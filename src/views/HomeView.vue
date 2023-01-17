<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <Banner />
      <Users :updatingUsers="updatingUsers" />
      <Form v-if="!formIsSubmitted" @updateUsers="updateUsers()"/>
      <Success v-else />
    </div>
  </div>
</template>

<script>
import Success from "@/components/successPage/successPageComponent.vue"
import Header from "@/components/headerComponent.vue";
import Banner from "@/components/bannerComponent.vue"
import Users from "@/components/users/usersComponent.vue"
import Form from "@/components/form/formComponent.vue"

export default {
  data() {
    return {
      updatingUsers: false,
      formIsSubmitted: false,
    }
  },
  methods: {
    updateUsers() {
      this.updatingUsers = !this.updatingUsers
      this.formIsSubmitted = !this.formIsSubmitted
    },
  },
  components: {
    Success,
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
