export const scenarios = {
    first_scenario: getFirstScenario(),
    second_scenario: getSecondScenario()
};

function getFirstScenario() {
    return {
        executor: 'ramping-vus',
        env: {scenario: "first_scenario"},
        stages: [
            {duration: '20s', target: 10},
            {duration: '20s', target: 20},
            {duration: '20s', target: 30},
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
            {duration: '20s', target: 10},
            {duration: '20s', target: 20},
            {duration: '20s', target: 30},
        ],
        startVUs: 10,
        gracefulRampDown: "30s"
    };
}
