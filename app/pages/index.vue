<script lang="ts" setup>
//
</script>

<template>
  <v-sheet color="background">
    <v-container>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="primary" />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="secondary" />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="success" />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="info" />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="error" />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="warning" />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="surface" />
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 3" :key="n" cols="4">
          <v-card height="200" color="background" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
