<template>
  <div
    id="app"
    class="o"
    style="
      display: flex;
      justify-content: space-between;
      height: 100%;
      flex-direction: column;
    "
  >
    <app-header />
    <router-view />
    <footer-app />
  </div>
</template>
<script>
import AppHeader from "./components/global/HeaderApp.vue";
import FooterApp from "./components/global/FooterApp.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    FooterApp,
  },
};
</script>
