import type { RequestParams } from '../../request-builder';
import { normalizeBody } from "../helpers";
import { AbstractRequest } from "../interface";

export const fetchRequest: AbstractRequest = (url: string, params: RequestParams) => {
    const normalizedHeaders: {[key: string]: string} = {};

    if (params.headers) {
        for (const [k, v] of params.headers) {
            normalizedHeaders[k] = v;
        }
    }

    if (params.contentType) {
        normalizedHeaders['Content-Type'] = params.contentType;
    }
    if (params.method === 'GET') {
        return fetch(url, {
            method: params.method,
            headers: normalizedHeaders,
        })
    } else {
        return fetch(url, {
            method: params.method,
            headers: normalizedHeaders,
            body: normalizeBody(params.body)
        })
    }
}
