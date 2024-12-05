<template>
  <v-card @click="open(link)">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>

        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>

      <div style="width: 200px">
        <v-img :src="img" class="ma-4 app-img" />
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  img: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

function open(link: string) {
  window.open(link, "_blank");
}
</script>

<style scoped>
.app-img > .v-img__img {
  border-radius: 20%;
  background-color: white;
}
</style>
