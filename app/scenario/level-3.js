export const scenarios = {
    first_scenario: getFirstScenario(),
    second_scenario: getSecondScenario()
};

function getFirstScenario() {
    return {
        executor: 'ramping-vus',
        env: {scenario: "first_scenario"},
        stages: [
            {duration: '20s', target: 50},
            {duration: '20s', target: 100},
            {duration: '20s', target: 150},
        ],
        startVUs: 10,
        gracefulRampDown: "30s"
    };
}

function getSecondScenario() {
    return {
        executor: 'ramping-vus',
        env: {scenario: "first_scenario"},
        stages: [
            {duration: '20s', target: 50},
            {duration: '20s', target: 100},
            {duration: '20s', target: 150},
        ],
        startVUs: 10,
        gracefulRampDown: "30s"
    };
}
