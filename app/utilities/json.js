export function getJsonParsed(str) {
    try {
        return JSON.parse(str) || {};
    } catch (e) {
        console.log(e);
        return {};
    }
}