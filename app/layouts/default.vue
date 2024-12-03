<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon
        color="primary"
        icon="mdi-leaf"
        @click="drawer = !drawer"
      />

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

    <v-navigation-drawer v-model="drawer">
      <v-list-item title="My Application" subtitle="Vuetify" />
      <v-divider />
      <!-- TODO Route to anchors -->
      <v-list-item to="#banking" title="Banking" />
      <v-list-item link title="List Item 2" />
      <v-list-item link title="List Item 3" />
      <v-list-item :to="{ hash: '#bottom' }" title="Bottom" />
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const drawer = ref(null);
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
