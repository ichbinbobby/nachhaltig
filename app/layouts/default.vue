<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon color="primary" icon="mdi-leaf" />

      <v-app-bar-title class="text-primary">
        Nachhaltigkeits Leitfaden
      </v-app-bar-title>

      <v-spacer />

      <v-switch
        :label="theme.global.name.value"
        inset
        class="mt-5 mx-2 text-capitalize"
        @click="toggleTheme"
      />
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
