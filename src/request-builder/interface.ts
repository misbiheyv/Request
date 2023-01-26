export enum requestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

// потом разберемся с типами
export type RequestBody = any;

export type RequestParams = {

    url?: string

    method?: keyof typeof requestMethod;

    headers?: Iterable<[string, string]>;

    query?: Iterable<[string, string]>;

    body?: RequestBody;

    contentType?: string

};