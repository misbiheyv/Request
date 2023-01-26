import type { RequestParams } from '../../request-builder';
import { normalizeBody } from "../helpers";
import { AbstractRequest } from "../interface";

export const xhrRequest: AbstractRequest = (url: string, params: RequestParams) => {
    const
        xhr = new XMLHttpRequest();

    xhr.open(params.method!, url)

    if (params.headers) {
        for (const [k, v] of params.headers) {
            xhr.setRequestHeader(k, v);
        }
    }

    if (params.contentType) {
        xhr.setRequestHeader('Content-Type', params.contentType);
    }

    xhr.send(normalizeBody(params.body))

    return new Promise((res, rej) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                rej(xhr.status + ': ' + xhr.statusText);
            } else {
                res(xhr.response);
            }
        }
    })
}
