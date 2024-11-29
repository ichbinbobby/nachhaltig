import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
  // your Vuetify options here
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#F8F8F6",
          surface: "#FFFFFF",
          primary: "#008009",
          secondary: "#275243",
          error: "#FD4256",
          info: "#0094C7",
          success: "#A4D24F",
          warning: "#F7BC00",
        },
      },
    },
  },
});
