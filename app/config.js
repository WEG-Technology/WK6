import { scenarios } from './scenarios.js';

export const config = {
    setupTimeout: '30s',
    teardownTimeout: '30s',
    thresholds: {
        http_req_duration: ['p(95) < 300', 'p(99) < 1000'],
    },
    scenarios: scenarios()
};
