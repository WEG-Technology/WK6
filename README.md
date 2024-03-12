# xk6-Dashboard Installation and Usage

This README file explains step by step how to install and use `xk6-dashboard` via Docker.

## Prerequisites

To install this, Docker and Docker Compose must be installed on your system. If these tools are not installed, please install Docker from the [official Docker website](https://docs.docker.com/get-docker/) and Docker Compose from [here](https://docs.docker.com/compose/install/).

## Installation

1. **Prepare Docker Compose File:**
   Place the project-specific `docker-compose.yml` file into the root directory of your project.

2. **Start Services with Docker Compose:**
   Start Docker Compose services by running the following command in your terminal or command prompt:
```bash
   docker compose up --build
```


# Using xk6-Dashboard

To use xk6-dashboard, you can use the sample command below. This command allows you to run tests on a specific URI, level, and locale setting.

```bash
docker-compose run k6 k6 run -e URI=https://example.com/ -e LEVEL=1 /application/app/main.js
```

Monitoring Test Results
To observe test results in real-time, navigate to the following address in your browser:
http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s


This address displays your test results through the xk6-dashboard and automatically refreshes every 5 seconds.