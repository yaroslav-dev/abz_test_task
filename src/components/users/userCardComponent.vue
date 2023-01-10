<template>
  <v-card class="user_card" flat>
    <div class="user_card_photo">
      <v-img class="user_img" :src="user.photo" lazy-src="@/assets/photo-cover.svg" sizes="70"></v-img>
    </div>
    <div v-tooltip.bottom="user.name" class="user_card_name user_data">{{user.name}}</div>
    <div v-tooltip.bottom="user.position" class="user_card_position user_data">{{user.position}}</div>
    <div v-tooltip.bottom="user.email" class="user_card_email user_data">{{user.email}}</div>
    <!-- raw data -->
    <!-- <div v-tooltip.bottom="user.phone" class="user_card_phone user_data">{{user.phone}}</div> -->
    <!-- or like in mockup -->
    <div v-tooltip.bottom="formatNumber(user.phone)" class="user_card_phone user_data">{{formatNumber(user.phone)}}</div>
  </v-card>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  created() {
    this.formatNumber()
  },
  methods: {
    formatNumber(e) {
      if (e) {
        let str = e.split('')
        str.splice(3, 0, ' (')
        str.splice(7, 0, ') ')
        str.splice(11, 0, ' ')
        str.splice(14, 0, ' ')
        return str.join('')
      }
    },
  },
}
</script>

<style>
.v-image__image--preload {
  filter: blur(0) !important;
}
.v-popper__arrow-outer {
  visibility: hidden;
}
.v-popper__arrow-inner {
  visibility: hidden;
}
</style>

<style lang="scss" scoped>
.user_card {
  height: 254px;
  max-width: 370px;
  min-width: 282px;
  padding: 20px;
  flex: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  .user_card_photo {
    margin-bottom: 20px;
    .user_img {
      border-radius: 100%;
    }
  }
  .user_card_name {
    margin-bottom: 20px;
  }
  .user_data {
    max-width: 100%;
    text-align: center;
    line-height: $text_lineheight;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>