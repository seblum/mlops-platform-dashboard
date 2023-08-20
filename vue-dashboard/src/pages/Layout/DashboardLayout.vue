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
        <md-icon :md-src="require('../../assets/logo/apache-airflow-white.svg')"/>
        <p>Airflow</p>
      </sidebar-link>
      <sidebar-link to="/jupyterhub">
        <md-icon :md-src="require('../../assets/logo/jupyter-white.svg')"/>
        <p>JupyterHub</p>
      </sidebar-link>
      <sidebar-link to="/mlflow">
        <md-icon :md-src="require('../../assets/logo/mlflow-white.svg')"/>
        <p>MLflow</p>
      </sidebar-link>
      <sidebar-link to="/grafana">
        <md-icon :md-src="require('../../assets/logo/grafana-white.svg')"/>
        <p>Grafana</p>
      </sidebar-link>
      <sidebar-link to="/documentation" class="active-pro">
        <md-icon>content_paste</md-icon>
        <p>Documentation</p>
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
      sidebarBackground: "red",
      sidebarBackgroundImage: require("@/assets/img/sidebar-5.jpg"),
    };
  },
};
</script>
