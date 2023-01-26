export function normalizeBody(data: unknown):  XMLHttpRequestBodyInit {
    if (typeof data === 'string') return data;

    if (typeof data === 'object') {
        return JSON.stringify(data);
    }

    throw new TypeError('Unsupported data format.');
}