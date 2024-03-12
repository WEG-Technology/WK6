import { check } from 'k6';

export function responseAnalysis(res) {
    const duration = res.timings.duration;
    console.log(`Duration: ${duration}ms`);

    const responseIsSuccess = analyzeResponse(res.body);

    check(res, {
        'response is Success': () => responseIsSuccess,
    });
}

function analyzeResponse(body) {
    return body.includes("Example Domain");
}
