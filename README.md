# ML Platform Dashboard with Vue.js

The ML Platform Dashboard is a web application built using Vue.js that provides a centralized interface for managing and monitoring various components of your machine learning (ML) platform. This dashboard integrates seamlessly with JupyterHub, Airflow, MLflow, Grafana, and SageMaker endpoints, offering a comprehensive solution for ML project management and monitoring.

This user-friendly interface is a dashboard used for the ML platform from [this bookdown project](https://seblum.github.io/mlops-engineering-book/).

## Features

- **JupyterHub Integration**: Access and manage Jupyter notebooks seamlessly through the dashboard. Collaborate with team members, create, upload, and manage your Jupyter notebooks effortlessly.
- **Airflow Monitoring**: Keep track of your data pipelines and workflows managed by Apache Airflow. Monitor the status of tasks, view historical runs, and gain insights into the overall pipeline health.
- **MLflow Management**: Connect to MLflow to track experiments, manage machine learning models, and visualize experiment results. This integration facilitates efficient experimentation and model deployment.
- **Grafana Integration**: Monitor the performance and metrics of your machine learning models and applications through Grafana dashboards. Visualize trends, anomalies, and other key metrics in real time.
- **SageMaker Endpoints**: Manage and monitor your Amazon SageMaker endpoints directly from the dashboard. Deploy, update, and monitor your machine learning models hosted on SageMaker.

## Getting Started

1. **Clone the Repository**: Begin by cloning this repository to your local machine.
   ```
   git clone https://github.com/seblum/mlops-platform-dashboard.git
   ```

2. **Project Setup**: Navigate to the project directory and install the required dependencies.
   ```
   cd vue-dashboard
   npm install
   ```

3. **Run the App**: Start the Vue.js development server to run the application locally.
   ```
   npm run serve
   ```

The dashboard will be accessible at `http://localhost:8080` by default.

## Contributing

Contributions to the ML Platform Dashboard are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.
