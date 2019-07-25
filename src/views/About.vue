<template>
  <ion-page class="show-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic 4 + Vue</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content" padding>klk xd</ion-content>
    <ion-button @click="goToHome" full>Volver</ion-button>
  </ion-page>
</template>

<script>
export default {
  name: "about",
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  }
};
</script>
