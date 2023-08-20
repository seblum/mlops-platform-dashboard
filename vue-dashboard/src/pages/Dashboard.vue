<template>
  <div class="content">
    <div class="md-layout">
        <md-card>
          <md-card-header data-background-color="custom-dark-blue">
            <h2 class="title">Welcome!</h2>
            <!-- <p class="category">Created using Roboto Font Family</p> -->
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="row">
                <h5>
                  Harness the power of Airflow, MLflow, Jupyter, and Grafana seamlessly in one place. Easily select and explore each tool from the sidebar, or access them directly through their dedicated routes (e.g., DOMAIN/airflow). For a secure experience, log in using your GitHub credentials. Supercharge your machine learning workflows with us!
                </h5>
              </div>
            </div>
          </md-card-content>
        </md-card>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="custom-light-blue">
          <template slot="header">
            <md-icon class="md-size-2x" :md-src="require('../assets/logo/apache-airflow.svg')" />
          </template>

          <template slot="content">
            <a class="category" :href=domain_route_airflow target="_blank" rel="noopener noreferrer">Open in Tab</a>
            <h3 class="title">Airflow</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Apache Airflow is used for orchestrating and automating complex data workflows, scheduling tasks, and managing dependencies in a flexible and scalable manner.
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="custom-light-blue">
          <template slot="header">
            <md-icon class="md-size-2x" :md-src="require('../assets/logo/jupyter.svg')" />
          </template>

          <template slot="content">
            <a class="category" :href=domain_route_jupyter target="_blank" rel="noopener noreferrer">Open in Tab</a>
            <h3 class="title">
              JupyterHub
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              JupyterHub is used to provide a multi-user environment for Jupyter notebooks, enabling collaborative and interactive data science and research activities.
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="custom-light-blue">
          <template slot="header">
            <md-icon class="md-size-2x" :md-src="require('../assets/logo/mlflow.svg')" />
          </template>

          <template slot="content">
            <a class="category" :href=domain_route_mlflow target="_blank" rel="noopener noreferrer"> Open in Tab </a>
            <h3 class="title">MLflow</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              MLflow is used to track and manage machine learning experiments, version models, and deploy them in a reproducible and organized manner.
              </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="custom-light-blue">
          <template slot="header">
            <md-icon class="md-size-2x" :md-src="require('../assets/logo/grafana.svg')" />
          </template>

          <template slot="content">
            <a class="category" :href=domain_route_grafana target="_blank" rel="noopener noreferrer">Open in Tab</a>            
            <h3 class="title">Grafana</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Grafana is used to visualize and monitor data from various sources, creating interactive and customizable dashboards to gain insights and track performance metrics.
            </div>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<style>
.icon {
    font-size: 16px;
}
</style>

<script>
import {
  StatsCard,
} from "@/components";

export default {
  components: {
    StatsCard,
  },
  name: 'SvgAssets',
  data() {
    return {
      domain_route_airflow: "http://"+process.env.VUE_APP_ML_PLATFORM_DOMAIN+"/airflow",
      domain_route_jupyter: "http://"+process.env.VUE_APP_ML_PLATFORM_DOMAIN+"/jupyterhub",
      domain_route_mlflow: "http://"+process.env.VUE_APP_ML_PLATFORM_DOMAIN+"/mlflow",
      domain_route_grafana: "http://"+process.env.VUE_APP_ML_PLATFORM_DOMAIN+"/grafana",
    };
  },
};
</script>
