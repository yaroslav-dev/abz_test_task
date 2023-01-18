<template>
  <div class="form_block">
    <h1 class="heading">Working with POST request</h1>
    <div class="form_container">
      <v-form ref="form">
        <v-text-field
          v-model="form.name"
          :rules="[() => !!form.name && form.name.length >= 2 && form.name.length < 60 || 'Enter your name']"
          @input="formCheck()"
          type="text"
          label="Your name"
          height="54"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          :rules="[
            () => !!form.email && form.email.length >= 2 && form.email.length <= 100 || 'Enter your email',
            () => emailValidation(form.email) || 'Enter correct email'
          ]"
          @input="formCheck()"
          type="email"
          label="Email"
          height="54"
          outlined
          required
          validate-on-blur
        ></v-text-field>
        <v-text-field
          v-model="form.phone"
          :rules="[
            () => !!form.phone || 'Enter your phone number',
            () => phoneValidation(form.phone) || 'Enter correct phone number',
          ]"
          @input="formCheck()"
          type="tel"
          label="Phone"
          height="54"
          outlined
          required
          validate-on-blur
        ></v-text-field>
        <v-radio-group class="positions" label="Select your position" v-model="form.position_id" mandatory>
          <v-radio
            v-for="position in positions"
            :key="position.id"
            :label="position.name"
            :value="position.id"
            on-icon="$radioOn"
            off-icon="$radioOff"
          ></v-radio>
        </v-radio-group>
        <v-file-input
          accept=".jpg, .jpeg,"
          :rules="[value => !value || value.size < 5000000 || 'Photo size should be less than 5 MB!']"
          @change="formCheck()"
          @input="formCheck()"
          placeholder="Upload your photo"
          prepend-icon=""
          height="54"
          outlined
        >
          <template v-slot:prepend-inner>
            <v-btn @click="uploadFile()" class="file_button" depressed tile>Upload</v-btn>
          </template>
        </v-file-input>
        <div class="btn_container">
          <v-progress-circular
            v-if="loader"
            class="loader"
            size="48"
            indeterminate
          ></v-progress-circular>
          <Button v-else @click="addUser()" :disabled="!validationPass">
            <template v-slot:btn>Sign up</template>
          </Button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/buttonComponent.vue";

export default {
  data() {
    return {
      form: {
        photo: null,
        name: '',
        email: '',
        phone: '',
        position_id: '',
      },
      formData: null,
      positions: [],
      token: null,
      validationPass: false,
      reset: false,
      loader: false,
    }
  },
  created() {
    this.getPositions()
  },
  methods: {
    loading() {
      this.loader = true
    },
    loaded() {
      this.loader = false
    },
    emailValidation(email) {
      const regex = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])$', '')
      return regex.test(email)
    },
    phoneValidation(phone) {
      const regex = new RegExp('^[\\+]{0,1}380([0-9]{9})$', '')
      return regex.test(phone)
    },
    formCheck() {
      if (!this.reset) {
        Object.keys(this.form).forEach(item => {
          if (item == 'name') {
           this.form[item] && this.form[item].length >= 2 && this.form[item].length <= 60 ? this.validationPass = true : this.validationPass = false
          }
          if (item === 'email') {
            this.emailValidation(this.form[item]) && this.form[item].length >= 2 && this.form[item].length <= 100 ? this.validationPass = true : this.validationPass = false
          }
          if (item === 'phone') {
            this.phoneValidation(this.form[item]) ? this.validationPass = true : this.validationPass = false
          }
        })
        document.querySelector('input[type="file"]').files.length ? this.validationPass = true : this.validationPass = false
      } else {
        this.validationPass = false
      }
    },
    uploadFile() {
      document.querySelector('input[type="file"]').click()
    },
    getPositions() {
      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.positions = data.positions
      })
    },
    addUser() {
      if (this.validationPass) {
        this.loading()
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.token = data.token
            this.form.photo = document.querySelector('input[type="file"]').files[0]
            this.formData = new FormData()
            this.formData.append('name', this.form.name)
            this.formData.append('email', this.form.email)
            this.formData.append('phone', this.form.phone)
            this.formData.append('position_id', this.form.position_id)
            this.formData.append('photo', this.form.photo)
            console.log(this.formData)
          })
          .then(() => {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
              method: 'POST',
              body: this.formData,
              headers: {
                'Token': this.token,
              }, })
              .then(response => {
                return response.json()
              })
              .then(data => {
                this.loaded()
                if (data.success) {
                  this.$emit('updateUsers')
                  this.$refs.form.reset()
                  this.validationPass = false
                }
              })
              .catch(error => {
                console.warn(error)
              })
          })
          .catch(error => {
            console.warn(error)
          })
      }
    },
  },
  components: {
    Button
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
.v-text-field--outlined .error--text {
  color: #CB3D40 !important;
}
.v-text-field--outlined.v-input--has-state fieldset {
  border-color: #CB3D40 !important;
  border-width: 2px;
}
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
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded):nth-child(5) > .v-input__control > .v-input__slot {
  padding-left: 0 !important;
  margin-top: 6px;
}
.v-text-field--enclosed .v-input__prepend-inner {
  margin-top: 0;
  margin-right: 16px;
  height: 100%;
}
</style>

<style lang="scss" scoped>
.form_block {
  width: 100%;
  padding-top: 140px;
  padding-bottom: 50px;
  padding-left: 16px;
  padding-right: 16px;
  .heading {
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
    opacity: 0.87;
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
    .file_button {
      text-transform: none;
      font-size: $text_size !important;
      line-height: $text_lineheight !important;
      height: 100% !important;
      width: 83px !important;
      padding-left: 14px !important;
      border: 1px solid;
      border-radius: 4px 0 0 4px;
      z-index: 2;
    }
    .btn_container {
      display: flex;
      justify-content: center;
      .loader {
        color: $bg_blue;
        border-radius: 8px;
      }
    }
  }
}
</style>