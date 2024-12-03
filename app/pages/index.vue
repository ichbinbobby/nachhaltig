<template>
  <v-sheet color="background">
    <v-container>
      <v-row>
        <v-col>
          <p>
            Dieser Leitfaden richtet sich an Leute, die persönlich mehr für den
            Planeten machen wollen. Es wird nicht die Welt verändern, aber kann
            dazu beitragen, dass Nachhaltigkeit mehr zur Normalität in der
            Gesellschaft wird. Anstatt den Finger auf andere zu zeigen,
            konzentriert man sich auf das, was man selber beeinflussen kann. Für
            den großen Umschwung in der Gesellschaft ist die Politik
            verantwortlich. Man soll und kann nicht selber die Schuld und Last
            tragen, die Welt zu verbessern.
          </p>

          <p>
            Im Folgenden liste ich ein paar Punkte auf, die man tun kann. Ob und
            wie viel davon du in deinem Leben umsetzt, hängt allein von dir ab.
            Jede kleine Aktion hilft.
          </p>
        </v-col>
      </v-row>

      <page-heading id="#banking">Banking</page-heading>

      <v-row>
        <v-col>
          <v-card id="#banking1" @click="open(referals[0]!.link)">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Tomorrow </v-card-title>

                <v-card-subtitle>{{ referals[0]!.title }}</v-card-subtitle>

                <v-card-text>
                  {{ referals[1]!.text }}
                </v-card-text>
              </div>

              <div style="width: 200px">
                <v-img :src="referals[0]!.img" class="ma-4 app-img" />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Umweltbank </v-card-title>

                <v-card-subtitle>{{ referals[1]!.title }}</v-card-subtitle>

                <v-card-text>
                  {{ referals[1]!.text }}
                </v-card-text>
              </div>

              <div>
                <img :src="referals[1]!.img" width="200" />
                <!-- v-img not working here -->
                <!-- <v-img :src="referals[1]!.img" class="ma-4 app-img" /> -->
              </div>
            </div>
          </v-card>
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
        <v-col>
          <v-card id="#bottom" height="200" color="background" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
import referals from "../../referals";

function open(link: string) {
  window.open(link, "_blank");
}
</script>

<style>
.app-img > .v-img__img {
  border-radius: 20%;
  background-color: white;
}
</style>
