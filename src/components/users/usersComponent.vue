<template>
  <div class="users_block">
    <h1 class="heading">Working with GET request</h1>
    <div class="users_container">
      <template v-for="(user, index) in users">
        <UserCard :idx="index" :key="index" :user="user" />
      </template>
    </div>
    <div class="show_more_btn_containerr">
      <v-progress-circular
        v-if="loader"
        class="loader"
        size="48"
        indeterminate
      ></v-progress-circular>
      <Button v-else-if="totalPages >= page" @click="getUsers()" style="width: 120px;">
        <template v-slot:btn>Show more</template>
      </Button>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/users/userCardComponent.vue"
import Button from '@/components/buttonComponent.vue'

export default {
  data() {
    return {
      users: [],
      loader: false,
      totalPages: null,
      page: 1,
    }
  },
  props: {
    updatingUsers: Boolean,
  },
  watch: {
    updatingUsers() {
      this.page = 1
      this.users = []
      this.getUsers()
    }
  },
  components: {
    UserCard,
    Button
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      this.loading()
      fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.page}&count=6`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.loaded()
        this.totalPages = data.total_pages
        this.users.push(...data.users)
        this.page++
      })
    },
    loading() {
      this.loader = true
    },
    loaded() {
      this.loader = false
    },
  },
}
</script>

<style lang="scss" scoped>
.users_block {
  width: 100%;
  padding-top: 140px;
  @media screen and (max-width: 767px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  .heading {
    text-align: center;
    opacity: 0.87;
  }
  .users_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 50px;
    column-gap: 20px;
    row-gap: 20px;
    @media screen and (min-width: 600px) {
      column-gap: 16px;
      row-gap: 16px;
    }
    @media screen and (min-width: 942px) {
      column-gap: 29px;
      row-gap: 29px;
    }
  }
  .show_more_btn_containerr {
    width: 100%;
    display: flex;
    justify-content: center;
    .loader {
      color: $bg_blue;
      border-radius: 8px;
    }
  }
}
</style>