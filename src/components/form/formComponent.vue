<template>
  <div class="form_block">
    <h1 class="heading">Working with POST request</h1>
    <div class="form_container">
      <v-form>
        <v-text-field
          v-model="form.name"
          label="Your name"
          height="54"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="Email"
          height="54"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="form.phone"
          label="Phone"
          height="54"
          outlined
        ></v-text-field>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
      },
    }
  },
}
</script>

<style>
.v-input__control {
  margin-bottom: 20px;
}
.v-text-field--outlined fieldset,
.v-text-field--outlined.v-input--is-focused fieldset {
  border-color: #D0CFCF;
  border-width: 1px;
}
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: unset;
  padding-left: 16px !important;
}
.theme--light.v-label {
  color: #7E7E7E;
  transform-origin: 0;
  -webkit-transform-origin-x: 0;
}
.v-text-field--outlined .v-label {
    top: 17px;
}
.v-text-field--outlined .v-label--active {
  transform: translateY(-26px) scale(0.75);
}
.v-text-field--outlined legend {
  margin-left: 12px;
}
</style>

<style lang="scss" scoped>
.form_block {
  width: 100%;
  padding-top: 140px;
  padding-bottom: 140px;
  .heading {
    text-align: center;
  }
  .form_container {
    max-width: 380px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
</style>