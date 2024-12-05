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
          <information-card
            id="#banking1"
            :title="referals[0]!.title"
            :subtitle="referals[0]!.subtitle"
            :text="referals[0]!.text"
            :img="referals[0]!.img"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <information-card
            id="#banking2"
            :title="referals[1]!.title"
            :subtitle="referals[1]!.subtitle"
            :text="referals[1]!.text"
            :img="referals[1]!.img"
          />
        </v-col>
      </v-row>

      <page-heading id="#energy">Erneuerbare Energie</page-heading>

      <v-row>
        <v-col>
          <information-card
            id="#energy1"
            :title="referals[2]!.title"
            :subtitle="referals[2]!.subtitle"
            :text="referals[2]!.text"
            :img="referals[2]!.img"
          />
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
</script>

<style></style>
