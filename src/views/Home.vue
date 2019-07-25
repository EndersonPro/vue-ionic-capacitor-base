<template>
  <ion-page class="show-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Home Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Usando ionic con Vue</h1>
      <img alt="Vue logo" src="../assets/logo.png">
    </ion-content>
      <ion-button @click="openModal" full>Modal </ion-button>

      <ion-button @click="goToPage2" full>Sobre mí</ion-button>
  </ion-page>
</template>

<script>
import { Plugins } from '@capacitor/core';

export default {
  name: 'home',
  methods:{
    goToPage2(){
      this.$router.push('about');
    },
     async openModal(){
       await Plugins.Modals.alert({
         title:'Alerta nativa',
         message:'Esté es un mensaje de ejemplo'
       })
    }
  }
}
</script>
