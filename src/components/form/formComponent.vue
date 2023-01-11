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
        <v-radio-group class="positions" label="Select your position" v-model="form.position">
          <v-radio
            v-for="position in positions"
            :key="position.id"
            :label="position.name"
            :value="position.id"
            on-icon="$radioOn"
            off-icon="$radioOff"
          ></v-radio>
        </v-radio-group>
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
        position: '',
      },
      positions: [],
    }
  },
  created() {
    this.getPositions()
  },
  methods: {
    getPositions() {
      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.positions = data.positions
      })
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
/* .v-text-field--outlined:nth-child(3) .v-input__control {
  margin-bottom: 0;
} */
.v-icon__component{
  width: 20px;
  height: 20px;
}
.v-input--selection-controls__ripple {
  height: 0;
}
.v-input--selection-controls .v-radio > .v-label {
  margin-left: 10px;
}
.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
  margin-bottom: 9px;
}
.v-input--radio-group legend.v-label {
  font-size: 16px;
  margin-left: 2px;
  margin-top: -1px;
  margin-bottom: 6px;
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
    .positions {
      margin-left: -2px;
      margin-top: -7px;
    }
  }
}
</style>