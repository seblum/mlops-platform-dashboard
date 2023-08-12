import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Airflow from "@/pages/Airflow.vue";
import JupyterHub from "@/pages/JupyterHub.vue";
import MLflow from "@/pages/MLflow.vue";
import Grafana from "@/pages/Grafana.vue";
// import Icons from "@/pages/Icons.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "airflow",
        name: "Airflow",
        component: Airflow,
      },
      {
        path: "jupyterhub",
        name: "JupyterHub",
        component: JupyterHub,
      },
      // {
      //   path: "icons",
      //   name: "Icons",
      //   component: Icons,
      // },
      {
        path: "mlflow",
        name: "MLflow",
        meta: {
          hideFooter: true,
        },
        component: MLflow,
      },
      {
        path: "grafana",
        name: "Grafana",
        component: Grafana,
      },
    ],
  },
];

export default routes;
