![results_level_1.png](../../Desktop/K6PerformanceAnalyzer/docs/images/results_level_1.png)![results_level_1.png](docs%2Fimages%2Fresults_level_1.png)

# XK6-Dashboard

Create your performance testing environment in minutes with XK6-Dashboard using Docker.

## ⚡️ Roadmap

⭐️ We are continuously working to improve xk6-dashboard. We welcome feedback and contributions that help enhance
functionality, usability, and documentation.

- [x] Initial Docker and Docker Compose setup instructions
- [ ] Improve error handling and remove panic occurrences
- [ ] Introduce default exceptions for HTTP status codes
- [ ] Enhance README documentation for better guidance
- [ ] Implement request debugging features
- [ ] Develop and include unit tests
- [ ] Add caching mechanisms for test results
- [ ] Support concurrent test execution
- [ ] Standardize response data format
- [ ] Ensure strict struct alignment for configuration files

## Name

xk6-Dashboard

## Description

Easily set up and monitor your K6 load testing results with a real-time dashboard, all through Docker.

## Installation

Ensure Docker and Docker Compose are installed on your system. If not, install Docker from
the [official Docker website](https://docs.docker.com/get-docker/) and Docker Compose
from [here](https://docs.docker.com/compose/install/).

To set up xk6-dashboard, execute:

```bash
docker compose up --build
```

## Usage

To start a performance test with xk6-dashboard:

```bash
docker-compose run k6 k6 run -e URI=https://example.com/ -e LEVEL=1 /application/app/main.js
```

To monitor test results, visit:
http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s

This URL displays your test results on the xk6-dashboard and updates every 5 seconds.

## 📫 Contributing

```TODO```


