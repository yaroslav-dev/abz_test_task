<template>
  <div class="banner_block">
    <div class="banner_image">
      <div class="banner_text">
        <h1 class="heading">Test assignment for front-end developer</h1>
        <p class="text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button class="button" @click="scrollToForm()">
          <template v-slot:btn>Sign up</template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/buttonComponent.vue'

export default {
  components: {
    Button
  },
  methods: {
    scrollToForm() {
      let formBlock = document.querySelector('.form_block')
      formBlock.scrollIntoView({block: "start", behavior: "smooth"})
    },
  },
};
</script>

<style lang="scss" scoped>
.banner_block {
  display: flex;
  width: 100%;
  max-height: 650px;
  @media screen and (max-width: 1024px) {
    height: 63.478vw;
  }
  @media screen and (max-width: 768px) {
    height: 500px;
  }
  .banner_image {
    height: 100%;
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("@/assets/pexels-alexandr-podvalny-1227513.jpeg");
    @media screen and (max-width: 400px) {
      padding-bottom: 71px;
      align-items: flex-end;
    }
    @media screen and (max-width: 1024px) {
      background-size: 342.3% 164%;
      background-position-x: 51.2%;
      background-position-y: 99%;
    }
    @media screen and (min-width: 1025px) {
      height: 650px;
      background-size: 219% 262%;
      background-position-x: 50%;
      background-position-y: 80%;
    }
    background-repeat: no-repeat;
    .banner_text {
      max-width: 380px;
      text-align: center;
      .heading {
        margin-bottom: 21px;
      }
      .text {
        margin-bottom: 32px;
      }
    }
  }
}
</style>