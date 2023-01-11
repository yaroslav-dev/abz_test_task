import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import RadioOn from '@/components/form/radioOnComponent.vue'
import RadioOff from '@/components/form/radioOffComponent.vue'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      radioOn: {
        component: RadioOn,
      },
      radioOff: {
        component: RadioOff,
      },
    },
  },
});
