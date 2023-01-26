export function cast<T>(obj: unknown): T {
    return <T>obj;
}

export function setQuery(url: string, queryParams: Iterable<[string, string]>): string {
    let resultUrl = url;

    if (queryParams) {
        resultUrl += '?';

        for (const [k, v] of queryParams) {
            resultUrl += `${k}=${v}&`;
        }

        resultUrl = resultUrl.slice(0, resultUrl.length - 1)
    }

    return resultUrl;
}