<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/airflow">
        <md-icon>person</md-icon>
        <p>Airflow</p>
      </sidebar-link>
      <sidebar-link to="/jupyterhub">
        <md-icon>content_paste</md-icon>
        <p>JupyterHub</p>
      </sidebar-link>
      <sidebar-link to="/mlflow">
        <md-icon>location_on</md-icon>
        <p>MLflow</p>
      </sidebar-link>
      <sidebar-link to="/grafana">
        <md-icon>notifications</md-icon>
        <p>Grafana</p>
      </sidebar-link>
      <!-- <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link> -->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
// import TopNavbar from "./TopNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
// import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    // TopNavbar,
    DashboardContent,
    //  ContentFooter,
    MobileMenu,
    // FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "orange",
      sidebarBackgroundImage: require("@/assets/img/sidebar-5.jpg"),
    };
  },
};
</script>
