import { RequestBody, requestMethod, RequestParams } from "./interface";
import { CacheStrategy } from "../cache-strategy";
import { Never } from "../cache-strategy/Never";
import { AbstractRequest } from "../request-engine/interface";
import { fetchRequest } from "../request-engine/fetch";


export type {

    RequestParams,
    RequestBody

}

export default class RequestBuilder {

    #params: RequestParams = {};

    #cache: CacheStrategy<any> = new Never();

    #requestEngine: AbstractRequest = fetchRequest;

    public get get(): this {
        this.#params.method = requestMethod.GET;
        return this;
    }

    public get post(): this {
        this.#params.method = requestMethod.POST;
        return this;
    }

    public get put(): this {
        this.#params.method = requestMethod.PUT;
        return this;
    }

    public get delete(): this {
        this.#params.method = requestMethod.DELETE;
        return this;
    }

    constructor(url?: string) {
        this.#params.url = url;
    }

    public use(engine: AbstractRequest): this {
        this.#requestEngine = engine;
        return this;
    }

    public cache(strategy: CacheStrategy<any>): this {
        this.#cache = strategy;
        return this;
    }

    public headers(headers: Iterable<[string, string]>): this {
        this.#params.headers = headers;
        return this;
    }

    public query(query: Iterable<[string, string]>): this {
        this.#params.query = query;
        return this;
    }

    public body(data?: RequestBody): this {
        this.#params.body = data;
        return this;
    }

    public url(url: string): this {
        this.#params.url = url;
        return this;
    }

    send(body: RequestBody = {}): Promise<unknown> {
        let url = this.#params.url!;

        if (this.#params.query) {
            url += /\?/.test(url) ? '' : '?';

            for (const [k, v] of this.#params.query) {
                url += `${k}=${v}&`
            }

            url = url.slice(0, url.length - 1);
        }


        try {
            console.log(this.#cache)
            if (this.#cache.has(url)) {
                console.log('from cache')
                return Promise.resolve(this.#cache.get(url));
            }

            if (this.#params.method !== "GET") {
                this.#params.body = body;
            }

            return this.#requestEngine(url, this.#params).then(res => {
                res.json()
                return res;
            });
        } catch (err) {
            return Promise.reject(err);
        }
    }
}