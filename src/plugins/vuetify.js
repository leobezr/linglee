import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi"
    },
    theme: {
        themes: {
            light: {
                primary: "#5e81f4",
                secondary: "#ff808b",
                anchor: "#5e81f4",
                background: "#f5f5fb",
            }
        },
    },
});
