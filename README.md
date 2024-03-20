![results_level_1.png](docs%2Fimages%2Fresults_level_1.png)

# WK6-Dashboard

Create your performance testing environment in minutes with WK6-Dashboard using Docker.

## ⚡️ Roadmap

⭐️ We are continuously working to improve wk6-dashboard. We welcome feedback and contributions that help enhance
functionality, usability, and documentation.

- [x] Initial Docker and Docker Compose setup instructions
- [ ] Kubernetes configuration
- [ ] Update the `CONTRIBUTING.md`
- [ ] Introduce default exceptions for HTTP status codes
- [ ] Enhance README documentation for better guidance
- [ ] Implement request debugging features
- [ ] Develop and include unit tests

## Name

wk6-Dashboard

## Description

Easily set up and monitor your K6 load testing results with a real-time dashboard, all through Docker.

## Installation

Ensure Docker and Docker Compose are installed on your system. If not, install Docker from
the [official Docker website](https://docs.docker.com/get-docker/) and Docker Compose
from [here](https://docs.docker.com/compose/install/).

To set up wk6-dashboard, execute:

```bash
docker compose up --build
```

## App Directory Overview

| File/Directories        | Description |
|-------------------------|-------------|
| `config.js`             | Contains the application's configuration settings such as timeouts, thresholds for HTTP request durations, and dynamically determines which scenarios to run based on the environment. |
| `main.js`               | The entry point of the application that makes an HTTP GET request to a specified URI, uses headers for the request, and processes the response through the `responseAnalysis` function. |
| `responseAnalysis.js`   | Defines a function to analyze the response from HTTP requests, checking the response time and validating the response content against expected criteria. |
| `scenarios.js`          | Provides a mechanism to select and load different testing scenarios based on the environment level, importing specific scenario configurations from the `scenario` directory. |
| `scenario/`             | A directory containing separate JavaScript files for different levels or stages of the application's operation, with each file representing a distinct set of challenges or functionalities. |
| `utilities/`            | A directory intended for utility scripts or libraries that support the main application functionality, such as handling JSON operations or other common tasks. |


## Usage

To run this project, you will need to follow these steps:

### 1. Update `config.js`

Ensure that the `config.js` file is updated to reflect the latest configuration settings for your project. The file should look something like this:

```javascript
import { scenarios } from './scenarios.js';

export const config = {
    setupTimeout: '30s',
    teardownTimeout: '30s',
    thresholds: {
        http_req_duration: ['p(95) < 300', 'p(99) < 1000'],
    },
    scenarios: scenarios()
};
```


### 2. Modifying Scenarios in `scenarios/`
To update the scenarios according to your API requirements, you can refer to the different types of executors provided by k6 in their documentation. Based on the load test you are going to run, configure the scenarios accordingly.

```javascript
function getExampleScenario() {
    return {
        executor: 'ramping-vus',
        env: {scenario: "example_scenario"},
        stages: [
            {duration: '20s', target: 10},
            {duration: '20s', target: 20},
            {duration: '20s', target: 30},
        ],
        startVUs: 10,
        gracefulRampDown: "30s"
    };
}
```

For more information on configuring scenarios, refer to the [k6 Scenarios Executors Documentation](https://k6.io/docs/using-k6/scenarios/executors/).

### 3. Response Analysis in `responseAnalysis.js`
In responseAnalysis.js, ensure you're checking for the expected response. For example, if making a request to an API, you might want to verify certain data points. Depending on the output of this function, mark it as success or failure.

```javascript
function analyzeResponse(body) {
    return body.includes("Example Domain");
}
```

### 4. Prepare and Send Requests in `main.js`

main.js is the main file of your project, where you'll prepare and send out requests. Configure this file to target your desired endpoint(s) with the necessary load. The responses received will be checked in responseAnalysis.js for validation.

```javascript
export default function () {
    const headers = { "Content-Type": "application/json" };
    const res = http.get(__ENV.URI, { headers: headers });

    responseAnalysis(res);
}
```

### 5. Running the Project

To start a performance test with wk6-dashboard:


```bash
docker-compose run k6 k6 run -e URI=https://example.com/ -e LEVEL=1 /application/app/main.js
```

To monitor test results, visit:
http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s

This URL displays your test results on the wk6-dashboard and updates every 5 seconds.

## 📫 Contributing

We welcome contributions! While we're still working on the detailed guidelines, you can get a preliminary idea by checking our [Contributing Guidelines](CONTRIBUTING.md). Please stay tuned for updates.