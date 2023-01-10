<template>
  <header class="header_block">
    <div class="header_innerBlock">
      <Logo />
      <div class="header_btnsBlock">
        <Button @click="scrollToUsers()">
          <template v-slot:btn>Users</template>
        </Button>
        <Button @click="scrollToForm()">
          <template v-slot:btn>Sign up</template>
        </Button>
      </div>
    </div>
  </header>
</template>

<script>
import Button from '@/components/buttonComponent.vue'
import Logo from '@/components/logoComponent.vue'

export default {
  components: {
    Button,
    Logo
  },
  methods: {
    scrollToUsers() {
      let usersBlock = document.querySelector('.users_block')
      usersBlock.scrollIntoView({block: "start", behavior: "smooth"})
    },
    scrollToForm() {
      let formBlock = document.querySelector('.form_block')
      formBlock.scrollIntoView({block: "start", behavior: "smooth"})
    },
  },
}
</script>

<style lang="scss">
.header_block {
  height: 60px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  .header_innerBlock {
    @media screen and (min-width: 360px) {
      padding: 0 16px;
    }
    @media screen and (min-width: 768px) {
      padding: 0 32px;
    }
    @media screen and (min-width: 1024px) {
      padding: 0 60px;
    }
    @media screen and (min-width: 1171px) {
      padding: 0;
    }
    height: 60px;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header_btnsBlock {
      display: flex;
      column-gap: 10px;
    }
  }
}
</style>