import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base,
        secondary: colors.indigo.lighten3,
      },
      dark: {
        primary: colors.indigo.base,
        secondary: colors.indigo.lighten3,
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
