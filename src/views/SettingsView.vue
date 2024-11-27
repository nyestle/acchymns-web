<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { resetOptions } from "@/stores/options";
import { Dialog } from "@capacitor/dialog";
import { Toast } from "@capacitor/toast";
import { RouterLink } from "vue-router";

async function resetAllOptions() {
  const confirmed = await Dialog.confirm({
    title: "Reset Options",
    message: "Are you sure you want to reset your options?",
    okButtonTitle: "Yes",
    cancelButtonTitle: "No",
  });

  if (confirmed.value) {
    resetOptions();
    Toast.show({
      text: "Reset Options!",
    });
  }
}
</script>

<template>
  <h1 class="pagetitle">Einstellungen</h1>
  <!-- <h2>Info</h2>
  <div class="settings">
    <RouterLink to="/settings/about" class="settings-option">
      <span>Über die App</span>
      <img class="entrypoint ionicon" src="/assets/chevron-forward-outline.svg" />
    </RouterLink>
    <RouterLink to="/settings/help" class="settings-option">
      <span>Hilfe</span>
      <img class="entrypoint ionicon" src="/assets/chevron-forward-outline.svg" />
    </RouterLink>
  </div> -->

  <h2>Allgemein</h2>
  <div class="settings">
    <RouterLink to="/settings/options" class="settings-option">
      <span>Benutzer Einstellungen</span>
      <img class="entrypoint ionicon" src="/assets/chevron-forward-outline.svg" />
    </RouterLink>
    <!-- <RouterLink to="/settings/import" class="settings-option">
      <span>Importiere Bücher</span>
      <img class="entrypoint ionicon" src="/assets/chevron-forward-outline.svg" />
    </RouterLink>
    <RouterLink to="/settings/connect" class="settings-option">
      <span>Broadcast</span>
      <img class="entrypoint ionicon" src="/assets/chevron-forward-outline.svg" />
    </RouterLink> -->
    <a class="settings-option" @click="resetAllOptions()">
      <span>Einstellungen zurücksetzen</span>
    </a>
  </div>

  <nav class="nav">
    <RouterLink to="/" class="nav__link">
      <img class="ionicon nav__icon" src="/assets/home-outline.svg" />
      <span class="nav__text">Home</span>
    </RouterLink>
    <RouterLink to="/search" class="nav__link">
      <img class="ionicon nav__icon" src="/assets/search-outline.svg" />
      <span class="nav__text">Suche</span>
    </RouterLink>
    <RouterLink to="/bookmarks" class="nav__link">
      <img class="ionicon nav__icon" src="/assets/bookmark-outline.svg" />
      <span class="nav__text">Lesezeichen</span>
    </RouterLink>
    <RouterLink to="/settings" class="nav__link nav__link--active">
      <img class="ionicon nav__icon--active" src="/assets/settings.svg" />
      <span class="nav__text">Einstellungen</span>
    </RouterLink>
  </nav>
</template>

<style>
@import "@/assets/css/settings.css";
</style>
